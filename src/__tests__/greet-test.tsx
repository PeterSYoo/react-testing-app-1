import { render, screen } from "@testing-library/react";
import { Greet } from "../components/greet/greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
