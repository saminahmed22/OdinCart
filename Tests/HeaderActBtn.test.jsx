import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";

import HeaderActBtn from ".././src/Components/Header/Navbar/HeaderActBtn/HeaderActBtn";

describe("HeaderActBtn", () => {
  it("Button title is 'Cart' when isStore is true", () => {
    render(<HeaderActBtn isStore={true} cartItems={{}} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });

  it("Button title is 'Store' when isStore is false", () => {
    render(<HeaderActBtn isStore={false} cartItems={{}} />);

    expect(screen.getByText("Store")).toBeInTheDocument();
  });

  it("renders count div when isStore is true and quantity >= 1", () => {
    render(
      <HeaderActBtn
        isStore={true}
        cartItems={{ 1: { quantity: 5 }, 2: { quantity: 7 } }}
      />,
    );

    expect(screen.getByText("12")).toBeInTheDocument();
  });

  it("Does not render count div when isStore is true and quantity < 1", () => {
    render(<HeaderActBtn isStore={true} cartItems={{}} />);

    expect(screen.queryByText("0")).not.toBeInTheDocument();
  });

  it("Does not renders count div when isStore is false", () => {
    render(
      <HeaderActBtn
        isStore={false}
        cartItems={{ 1: { quantity: 5 }, 2: { quantity: 7 } }}
      />,
    );

    expect(screen.queryByText("12")).not.toBeInTheDocument();
  });
});
