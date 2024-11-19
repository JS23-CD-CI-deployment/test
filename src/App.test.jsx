import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

describe("App", () => {
  it("should increment the counter when increment button is clicked", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const incrementButton = screen.getByRole("button", { name: /Öka med 1/ });
    fireEvent.click(incrementButton);

    expect(screen.getByText(/Counter:/)).toHaveTextContent("Counter: 1");
  });

  it("should decrement the counter when decrement button is clicked", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const incrementButton = screen.getByRole("button", {
      name: /Minska med 1/,
    });
    fireEvent.click(incrementButton);

    expect(screen.getByText(/Counter:/)).toHaveTextContent("Counter: 0");
  });
});
