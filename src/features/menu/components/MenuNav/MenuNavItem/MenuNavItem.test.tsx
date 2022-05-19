import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MenuNavItem from "./MenuNavItem";
import MenuContext from "../../../context/MenuContext";

describe("the MenuNavItem component", () => {
	const customRender = (ui: any, { providerProps, ...renderOptions }: any) => {
		return render(<MenuContext.Provider {...providerProps}>{ui}</MenuContext.Provider>, renderOptions);
	};

	it("should be rendered", () => {
		const providerProps = {
			value: {
				activeMenuIndex: 1,
				setActiveMenuIndex: jest.fn()
			}
		};
		const spiedContext = jest.spyOn(providerProps.value, "setActiveMenuIndex");
		customRender(<MenuNavItem name={"test"} index={2} />, { providerProps });

		fireEvent.click(screen.getByRole("menuNavItemSpan"));
		expect(spiedContext).toHaveBeenCalledWith(2);
	});
});
