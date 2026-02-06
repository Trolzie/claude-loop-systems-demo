import { beforeEach, describe, expect, it, vi } from "vitest";

import { GET } from "./route";

describe("GET /api/rm/alive-ricks-count", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("returns count of alive Ricks when successful", async () => {
    const mockResponse = {
      info: { count: 42 },
      results: [],
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
    await expect(res.json()).resolves.toEqual({ error: "Failed to fetch alive Ricks count from upstream API" });
  });

  it("returns 502 when fetch throws an error", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    const res = await GET();

    expect(res.status).toBe(502);
    await expect(res.json()).resolves.toEqual({ error: "Failed to fetch alive Ricks count from upstream API" });
  });
});
