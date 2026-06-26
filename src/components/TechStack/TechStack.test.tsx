import { render, screen } from "@testing-library/react";
import { TechStack } from "./TechStack";

describe("TechStack", () => {
  it("renders all four tech badges", () => {
    render(<TechStack />);

    expect(screen.getByText(/Vite/)).toBeInTheDocument();
    expect(screen.getByText(/React/)).toBeInTheDocument();
    expect(screen.getByText(/TypeScript/)).toBeInTheDocument();
    expect(screen.getByText(/Claude Code/)).toBeInTheDocument();
  });
});
