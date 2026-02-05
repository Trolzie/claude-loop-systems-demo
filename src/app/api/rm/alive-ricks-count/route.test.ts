import { beforeEach, describe, expect, it, vi } from "vitest";

import { GET } from "./route";

describe("GET /api/rm/alive-ricks-count", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("returns count from upstream API", async () => {
    const mockResponse = {
      info: { count: 42 },
    };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const res = await GET();

    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toMatch(/application\/json/);
    expect(res.headers.get("cache-control")).toBe("no-store");

    await expect(res.json()).resolves.toEqual({ count: 42 });
  });

  it("returns 502 when upstream API fails", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
    });

    const res = await GET();

    expect(res.status).toBe(502);
    expect(res.headers.get("content-type")).toMatch(/application\/json/);
    expect(res.headers.get("cache-control")).toBe("no-store");

    const json = await res.json();
    expect(json).toHaveProperty("error");
    expect(typeof json.error).toBe("string");
  });

  it("returns 502 when fetch throws", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    const res = await GET();

    expect(res.status).toBe(502);
    expect(res.headers.get("content-type")).toMatch(/application\/json/);
    expect(res.headers.get("cache-control")).toBe("no-store");

    const json = await res.json();
    expect(json).toHaveProperty("error");
    expect(typeof json.error).toBe("string");
  });
});
