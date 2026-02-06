import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { useOutletContext } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import CartCard from "../src/Components/Cart/CartCard/CartCard";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe("CartCard", () => {
  it("Renders image of the item", async () => {
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
    render(<CartCard id={1} />);

    expect(await screen.findByAltText(/Item image/i)).toBeInTheDocument();
  });

  it("Renders title of the item", async () => {
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
    render(<CartCard id={1} />);

    expect(
      await screen.findByRole("img", { name: "Item image" }),
    ).toBeInTheDocument();
  });

  it("Renders price of the item", async () => {
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
    render(<CartCard id={1} />);

    expect(await screen.findByText(/109.95/i)).toBeInTheDocument();
  });

  it("Renders quantity component", async () => {
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
    render(<CartCard id={1} />);

    expect(await screen.findByTitle(/Quantity Field/i)).toBeInTheDocument();
  });

  it("Removes cartCards when clicked on the delete button of each card", async () => {
    const setCartItems = vi.fn();

    vi.mocked(useOutletContext).mockReturnValue([
      {
        1: {
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
          quantity: 5,
        },
      },
      setCartItems,
    ]);

    render(<CartCard id={1} />);

    const button = screen.getByRole("button", { name: "Remove item" });
    const user = userEvent.setup();
    await user.click(button);
    expect(setCartItems).toHaveBeenCalled();
  });
});
