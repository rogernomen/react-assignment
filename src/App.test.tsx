import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

describe("the App Component", () => {
	it("should be rendered", () => {
		expect.assertions(1);
		const component = renderer.create(<App></App>);
		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
