import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { useOutletContext } from "react-router-dom";
import nock from "nock";

import Shop from "../src/Components/Shop/Shop";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe("Shop", () => {
  it("Should render cards when fetched data succesfully", async () => {
    const setCartItems = vi.fn();
    useOutletContext.mockReturnValue([{}, setCartItems]);

    nock("https://fakestoreapi.com")
      .get("/products")
      .reply(200, [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
          rating: {
            rate: 3.9,
            count: 120,
          },
        },
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
          rating: {
            rate: 4.1,
            count: 259,
          },
        },
      ]);

    render(<Shop />);

    expect(
      await screen.findByText(
        "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      ),
    ).toBeInTheDocument();
  });

  it("Should show loading screen while fetching data", async () => {
    const setCartItems = vi.fn();
    useOutletContext.mockReturnValue([{}, setCartItems]);

    nock("https://fakestoreapi.com")
      .get("/products")
      .reply(200, [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
          rating: {
            rate: 3.9,
            count: 120,
          },
        },
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
          rating: {
            rate: 4.1,
            count: 259,
          },
        },
      ]);

    render(<Shop />);

    expect(await screen.findByText("Loading items...")).toBeInTheDocument();
  });

  it("Should show error page when error occures", async () => {
    const setCartItems = vi.fn();
    useOutletContext.mockReturnValue([{}, setCartItems]);

    nock("https://fakestoreapi.com")
      .get("/products")
      .replyWithError("Network failure");

    render(<Shop />);

    expect(
      await screen.findByText("Haha, something happed"),
    ).toBeInTheDocument();
  });
});
