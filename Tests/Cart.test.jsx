import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { useOutletContext } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import Cart from "../src/Components/Cart/Cart";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe("Cart", () => {
  it("renders empty message when cart has no quantity", async () => {
    const cartItems = {};
    const setCartItems = vi.fn();

    useOutletContext.mockReturnValue([cartItems, setCartItems]);
    render(<Cart />);

    expect(await screen.findByText("Cart is empty")).toBeInTheDocument();
  });

  it("Renders cartCards when there is items on the cart", async () => {
    const cartItems = {
      1: {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        quantity: 5,
      },
    };
    const setCartItems = vi.fn();

    useOutletContext.mockReturnValue([cartItems, setCartItems]);
    render(<Cart />);

    expect(await screen.findByText(/Fjallraven/i)).toBeInTheDocument();
  });

  it("Removes every cartCards when clicked on the clear cart button", async () => {
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

    render(<Cart />);

    const button = screen.getByRole("button", { name: "Clear cart" });
    const user = userEvent.setup();
    await user.click(button);
    expect(setCartItems).toHaveBeenCalled();
  });
});
