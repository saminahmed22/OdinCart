import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { useOutletContext } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import QuantityField from "../src/Components/QuantityField/QuantityField";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe("QuantityField", () => {
  it("Should render the quantity amount on the input field", () => {
    const setCartItems = vi.fn();

    vi.mocked(useOutletContext).mockReturnValue([
      {
        1: {
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
          quantity: 5,
        },
        2: {
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
          quantity: 19,
        },
      },
      setCartItems,
    ]);

    render(<QuantityField id={2} />);

    expect(screen.getByDisplayValue(19));
  });

  it("Should increase the count of the quantity when increase amount button gets clicked", async () => {
    const cartItems = {
      1: {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        quantity: 5,
      },
      2: {
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
        quantity: 19,
      },
    };
    const setCartItems = vi.fn();

    vi.mocked(useOutletContext).mockReturnValue([cartItems, setCartItems]);

    render(<QuantityField id={1} />);

    const button = screen.getByRole("button", { name: "Increase quantity" });
    const user = userEvent.setup();

    const currentValue = cartItems[1].quantity;
    await user.click(button);
    const updatedValue = screen.getByRole("spinbutton").valueAsNumber;

    expect(currentValue).toBeLessThan(updatedValue);
  });

  it("Should decrease the count of the quantity when decrease amount button gets clicked", async () => {
    const cartItems = {
      1: {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        quantity: 5,
      },
      2: {
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
        quantity: 19,
      },
    };

    const setCartItems = vi.fn();

    vi.mocked(useOutletContext).mockReturnValue([cartItems, setCartItems]);

    render(<QuantityField id={1} />);

    const button = screen.getByRole("button", { name: "Decrease quantity" });
    const user = userEvent.setup();

    const currentValue = cartItems[1].quantity;
    await user.click(button);
    const updatedValue = screen.getByRole("spinbutton").valueAsNumber;

    expect(currentValue).toBeGreaterThan(updatedValue);
  });
});
