import { Greet } from "./greet";
import { render, screen } from "@testing-library/react";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
