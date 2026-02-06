import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Nav from ".././src/Components/Header/Navbar/Nav";

describe("Nav", () => {
  it("Contains action button", () => {
    render(
      <MemoryRouter>
        <Nav isStore={true} cartItems={{}} />
      </MemoryRouter>,
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
