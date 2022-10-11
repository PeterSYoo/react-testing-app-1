import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// test is a method from jest that's available to us in create react app globally.
test("renders learn react link", () => {
  // render create virtual dom.
  render(<App />);
  // screen is an object that contains methods to query the virtual dom.
  const linkElement = screen.getByText(/learn react/i);
  // expect is a method from jest. toBeInTheDocument() is a matcher function.
  expect(linkElement).toBeInTheDocument();
});

/* 
test accepts 3 arguments (name, fn, timeout)
1. name: test name used to identify the test
2. fn: is a function that contains the expecations to test
3. timeout: is an optional argument for specifying how long to wait before aborting
the test. The default timeout value is 5 seconds.
*/
