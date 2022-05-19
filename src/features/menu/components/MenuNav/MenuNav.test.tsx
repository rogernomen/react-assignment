import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MenuNav from "./MenuNav";
import { MenuSection } from "../../../../../bff/dist/models/Menu";

describe("the MenuNav component", () => {
	const menuSections: MenuSection[] = [
		{
			cellAspectRatio: 0,
			cellLayoutType: 0,
			concessionStoreId: "1111",
			description: "description",
			displayOrder: 1,
			imageName: "imageName",
			imageUrl: "imageUrl",
			isAvailable: true,
			isDeleted: false,
			isHiddenFromUsers: false,
			menuItems: [],
			menuSectionAvailability: { availableTimes: [], menuSectionId: 111, availabilityMode: 1 },
			menuSectionId: 1111,
			menuSectionMetadata: [],
			name: "testName1",
			publicId: "1234"
		},
		{
			cellAspectRatio: 0,
			cellLayoutType: 0,
			concessionStoreId: "2222",
			description: "description",
			displayOrder: 2,
			imageName: "imageName",
			imageUrl: "imageUrl",
			isAvailable: true,
			isDeleted: false,
			isHiddenFromUsers: false,
			menuItems: [],
			menuSectionAvailability: { availableTimes: [], menuSectionId: 222, availabilityMode: 1 },
			menuSectionId: 2222,
			menuSectionMetadata: [],
			name: "testName2",
			publicId: "567"
		}
	];

	it("should be rendered", () => {
		render(<MenuNav menuSections={menuSections} />);
		expect(screen.getByText("TESTNAME1")).toBeInTheDocument();
		expect(screen.getByText("TESTNAME1")).toHaveClass("active");
		expect(screen.getByText("TESTNAME2")).toBeInTheDocument();
	});
});
