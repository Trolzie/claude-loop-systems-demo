import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { RickCounter } from "./RickCounter";

describe("RickCounter", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("shows loading state initially", () => {
    global.fetch = vi.fn().mockImplementation(
      () =>
        new Promise(() => {
          // Never resolves
        })
    );

    render(<RickCounter />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("shows count on successful fetch", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ count: 42 }),
    });

    render(<RickCounter />);

    await waitFor(() => {
      expect(screen.getByText("Alive Ricks: 42")).toBeInTheDocument();
    });
  });

  it("shows error message on failed fetch", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: "Upstream API failed" }),
    });

    render(<RickCounter />);

    await waitFor(() => {
      expect(screen.getByText(/Error:/)).toBeInTheDocument();
      expect(screen.getByText(/Upstream API failed/)).toBeInTheDocument();
    });
  });

  it("shows error message when fetch throws", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    render(<RickCounter />);

    await waitFor(() => {
      expect(screen.getByText(/Error:/)).toBeInTheDocument();
      expect(screen.getByText(/Network error/)).toBeInTheDocument();
    });
  });
});
