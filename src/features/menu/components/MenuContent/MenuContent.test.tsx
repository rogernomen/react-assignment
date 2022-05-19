import React from "react";
import { render, screen } from "@testing-library/react";
import MenuContent from "./MenuContent";
import { MenuItem } from "../../../../../bff/dist/models/Menu";

const menuItemsMock: MenuItem[] = [
	{
		actualPrice: 0,
		alcohol: false,
		cellAspectRatio: 1,
		cellLayoutType: 1,
		dailySpecialHours: [],
		description: "description",
		disableVouchers: false,
		displayOrder: 1,
		excludeFromVoucherDiscounting: false,
		imageName: "imageName",
		imageUrl: "imageUrl",
		isAvailable: true,
		isDeleted: false,
		menuItemId: 123,
		menuItemMetadata: [],
		menuItemOptionSets: [],
		menuSectionId: 1,
		name: "name",
		price: 1,
		priceCanIncrease: false,
		publicId: "publicId",
		spicinessRating: 2,
		tags: [],
		taxRate: null,
		taxRateId: null,
		taxValue: 1
	}
];

describe("the MenuContent Component", () => {
	it("should render all its children as MenuItem", () => {
		render(<MenuContent menuItems={menuItemsMock} />);
		expect(screen.getAllByRole("menuItem").length).toBe(1);
	});
});
