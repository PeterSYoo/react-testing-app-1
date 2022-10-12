/*
 * Greet2 should render the text hello and if a name is passed into the component
 * it should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import { Greet2 } from "./greet2";

// describe groups your tests
// you can also nest describe blocks
describe("Greet2", () => {
  test("renders correctly", () => {
    render(<Greet2 />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("renders with a name", () => {
      render(<Greet2 name="Peter" />);
      const textElement = screen.getByText("Hello Peter");
      expect(textElement).toBeInTheDocument();
    });
  });
});
