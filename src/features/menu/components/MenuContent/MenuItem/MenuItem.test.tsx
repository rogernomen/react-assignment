import React from "react";
import { render, screen } from "@testing-library/react";
import MenuItem from "./MenuItem";

describe("the MenuItem Component", () => {
	it("should render all its prop children", () => {
		render(<MenuItem info={<div role="infoChild"></div>} picture={<div role="pictureChild"></div>} />);
		expect(screen.getByRole("infoChild")).toBeInTheDocument();
		expect(screen.getByRole("pictureChild")).toBeInTheDocument();
	});
});
