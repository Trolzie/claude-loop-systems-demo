import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Home page", () => {
  it("renders the title", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: "Claude Loop Systems" })
    ).toBeInTheDocument();
  });

  it("renders the search input with default value", () => {
    render(<Home />);

    const input = screen.getByPlaceholderText("Enter character name");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("rick");
  });

  it("renders the search button", () => {
    render(<Home />);

    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });
});
