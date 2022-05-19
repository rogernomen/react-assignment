import React from "react";
import { render, screen } from "@testing-library/react";
import Arrow from "./Arrow";

describe("the Arrow Component", () => {
	it("should be rendered", () => {
		expect.assertions(1);

		render(<Arrow />);
		expect(screen.getByRole("arrowIcon")).toBeInTheDocument();
	});
});
