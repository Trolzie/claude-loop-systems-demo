import { describe, expect, it } from "vitest";

import { GET } from "./route";

describe("GET /api/health", () => {
  it("returns ok json", async () => {
    const res = await GET();

    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toMatch(/application\/json/);

    await expect(res.json()).resolves.toEqual({ status: "ok" });
  });

  it("includes no-store cache header", async () => {
    const res = await GET();

    expect(res.headers.get("cache-control")).toBe("no-store");
  });
});
