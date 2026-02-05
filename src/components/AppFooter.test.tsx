import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AppFooter } from "./AppFooter";

describe("AppFooter", () => {
  it("renders footer text", () => {
    render(<AppFooter />);

    expect(screen.getByText(/Built with loops\./)).toBeInTheDocument();
  });

  it("renders link to health check", () => {
    render(<AppFooter />);

    const link = screen.getByRole("link", { name: /Health check/ });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/api/health");
  });
});
