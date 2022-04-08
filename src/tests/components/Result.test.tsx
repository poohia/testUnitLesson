import React from "react";
import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Result from "../../components/Result";

let container: any;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("test add", () => {
  act(() => {
    ReactDOM.render(<Result value={"10"} />, container);
  });
  const value = container.querySelector(".result");

  expect(value.textContent).toBe("10");
});
