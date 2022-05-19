import React from "react";
import renderer from "react-test-renderer";
import MenuPage from "./MenuPage";
import MenuContext from "../context/MenuContext";
import { useQueryMenu } from "../infrastructure/useQueryMenu";

const mockedUseQueryMenu = useQueryMenu as jest.Mock<any>;
jest.mock("../infrastructure/useQueryMenu");

describe("the MenuPage Component", () => {
	it("should be rendered", () => {
		expect.assertions(1);
		mockedUseQueryMenu.mockImplementation(() => ({ isLoading: true }));
		const contextValue = {
			activeMenuIndex: 0,
			setActiveMenuIndex: () => jest.fn()
		};

		const component = renderer.create(
			<MenuContext.Provider value={contextValue}>
				<MenuPage></MenuPage>
			</MenuContext.Provider>
		);
		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
