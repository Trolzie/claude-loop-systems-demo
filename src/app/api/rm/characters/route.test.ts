import { beforeEach, describe, expect, it, vi } from "vitest";

import { GET } from "./route";

describe("GET /api/rm/characters", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("returns array of character names when successful", async () => {
    const mockResponse = {
      results: [
        { name: "Rick Sanchez" },
        { name: "Morty Smith" },
      ],
    };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const request = new Request("http://localhost:3000/api/rm/characters?name=rick");
    const res = await GET(request);

    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toMatch(/application\/json/);
    expect(res.headers.get("cache-control")).toBe("no-store");

    await expect(res.json()).resolves.toEqual(["Rick Sanchez", "Morty Smith"]);
  });

  it("returns 502 when upstream API fails", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
    });

    const request = new Request("http://localhost:3000/api/rm/characters?name=rick");
    const res = await GET(request);

    expect(res.status).toBe(502);
    await expect(res.json()).resolves.toEqual({ error: "Failed to fetch characters from upstream API" });
  });

  it("returns 502 when fetch throws an error", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    const request = new Request("http://localhost:3000/api/rm/characters?name=rick");
    const res = await GET(request);

    expect(res.status).toBe(502);
    await expect(res.json()).resolves.toEqual({ error: "Failed to fetch characters from upstream API" });
  });

  it("returns 400 when name parameter is missing", async () => {
    const request = new Request("http://localhost:3000/api/rm/characters");
    const res = await GET(request);

    expect(res.status).toBe(400);
    await expect(res.json()).resolves.toEqual({ error: "name query parameter is required" });
  });
});
