import { render } from "@testing-library/react";
import React from "react";

import TestComponent from "components/test-component";

describe("Test component", () => {
    it("Render component", () => {
        const { getByText } = render(<TestComponent text={"Test text"} />);
        const element = getByText("Test text");
        expect(element).toBeInTheDocument();
    });

    it("Has proper class", () => {
        const { getByText } = render(<TestComponent text={"Test text"} />);
        const element = getByText("Test text");
        expect(element).toHaveClass("someStyle");
    });
});
