import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { useOutletContext } from "react-router-dom";

import ProductCard from "../src/Components/Shop/ProductCard/ProductCard";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe("ProductCard", () => {
  it("should render product title", () => {
    const cartItems = {
      1: {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        quantity: 5,
        rate: 4.5,
        ratingCount: 130,
      },
    };
    const setCartItems = vi.fn();

    useOutletContext.mockReturnValue([cartItems, setCartItems]);

    const item = cartItems[1];
    render(
      <ProductCard
        id={1}
        title={item.title}
        price={item.price}
        image={item.image}
        rating={item.rate}
        ratingCount={item.ratingCount}
        cartItems={cartItems}
        setCartItems={setCartItems}
      ></ProductCard>,
    );

    expect(
      screen.getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"),
    ).toBeInTheDocument();
  });

  it("should render product price", () => {
    const cartItems = {
      1: {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: "109.95",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        quantity: 5,
        rate: 4.5,
        ratingCount: 130,
      },
    };
    const setCartItems = vi.fn();

    useOutletContext.mockReturnValue([cartItems, setCartItems]);
    const item = cartItems[1];
    render(
      <ProductCard
        id={1}
        title={item.title}
        price={item.price}
        image={item.image}
        rating={item.rate}
        ratingCount={item.ratingCount}
        cartItems={cartItems}
        setCartItems={setCartItems}
      ></ProductCard>,
    );

    expect(screen.getByText("$109.95")).toBeInTheDocument();
  });

  it("should render product image", async () => {
    const cartItems = {
      1: {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: "109.95",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        quantity: 5,
        rate: 4.5,
        ratingCount: 130,
      },
    };
    const setCartItems = vi.fn();

    useOutletContext.mockReturnValue([cartItems, setCartItems]);
    const item = cartItems[1];
    render(
      <ProductCard
        id={1}
        title={item.title}
        price={item.price}
        image={item.image}
        rating={item.rate}
        ratingCount={item.ratingCount}
        cartItems={cartItems}
        setCartItems={setCartItems}
      ></ProductCard>,
    );

    expect(
      await screen.findByRole("img", { name: "Item image" }),
    ).toBeInTheDocument();
  });

  it("should render product review", () => {
    const cartItems = {
      1: {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: "109.95",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        quantity: 5,
        rate: 4.5,
        ratingCount: 130,
      },
    };
    const setCartItems = vi.fn();

    useOutletContext.mockReturnValue([cartItems, setCartItems]);
    const item = cartItems[1];
    render(
      <ProductCard
        id={1}
        title={item.title}
        price={item.price}
        image={item.image}
        rating={item.rate}
        ratingCount={item.ratingCount}
        cartItems={cartItems}
        setCartItems={setCartItems}
      ></ProductCard>,
    );

    expect(screen.getByText("4.5(130)")).toBeInTheDocument();
  });

  it("should render product Star icon", async () => {
    const cartItems = {
      1: {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: "109.95",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        quantity: 5,
        rate: 4.5,
        ratingCount: 130,
      },
    };
    const setCartItems = vi.fn();

    useOutletContext.mockReturnValue([cartItems, setCartItems]);
    const item = cartItems[1];
    render(
      <ProductCard
        id={1}
        title={item.title}
        price={item.price}
        image={item.image}
        rating={item.rate}
        ratingCount={item.ratingCount}
        cartItems={cartItems}
        setCartItems={setCartItems}
      ></ProductCard>,
    );

    expect(
      await screen.findByRole("img", { name: "Star icon" }),
    ).toBeInTheDocument();
  });
});
