import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AppHeader } from "./AppHeader";

describe("AppHeader", () => {
  it("renders title and tagline", () => {
    render(<AppHeader title="Title" tagline="Tagline" />);

    expect(screen.getByRole("heading", { name: "Title" })).toBeInTheDocument();
    expect(screen.getByText("Tagline")).toBeInTheDocument();
  });

  it("renders title without tagline", () => {
    render(<AppHeader title="Title" />);

    expect(screen.getByRole("heading", { name: "Title" })).toBeInTheDocument();
    expect(screen.queryByText("Tagline")).not.toBeInTheDocument();
  });
});
