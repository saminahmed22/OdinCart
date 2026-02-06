import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";

import HeaderActBtn from ".././src/Components/HomePage/HomePage";

describe("HomePage", () => {
  it("Should render slogan", () => {
    render(<HeaderActBtn></HeaderActBtn>);

    expect(screen.getByText("Clothes that matters")).toBeInTheDocument();
  });
  it("Should render branding", () => {
    render(<HeaderActBtn></HeaderActBtn>);

    expect(screen.getByText("Parisian.")).toBeInTheDocument();
  });
});
