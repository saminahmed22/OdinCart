import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Header from ".././src/Components/Header/Header";

import styles from ".././src/Components/Header/Navbar/Nav.module.css";

describe("Header", () => {
  it("Displays brand title", () => {
    render(
      <MemoryRouter>
        <Header cartItems={{}} />
      </MemoryRouter>,
    );
    expect(screen.getByText("Parisian")).toBeInTheDocument();
  });

  it("Contains Navbar component", () => {
    render(
      <MemoryRouter>
        <Header cartItems={{}} />
      </MemoryRouter>,
    );

    expect(document.querySelector(`.${styles.nav}`)).toBeInTheDocument();
  });
});
