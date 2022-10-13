import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    // getByText will search for all elements with text node matching the text
    // content of the given text. Good for finding paragraph, span, div tags.
    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    // getByRole querys elements for the given role
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    // getByLabelText finds the label element and then finds the input associated
    // with that label. id and htmlFor attributes will help with that.
    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    // getByPlaceHolderText looks for all placeholder attribute and find 1 that
    // matches the given text.
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    // getByDisplayValue returns the input text area or select element that has
    // the matching display value. Typically used when we want to query form
    // controls based on their values.
    const nameElement4 = screen.getByDisplayValue("Peter");
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
