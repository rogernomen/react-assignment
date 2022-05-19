import React from "react";
import { render, screen } from "@testing-library/react";
import MenuItemInfo from "./MenuItemInfo";
import { MenuItem as MenuItemType } from "../../../../../../bff/src/models/Menu";

describe("the MenuItemInfo Component", () => {
	it("should render all its props", () => {
		const menuItem: MenuItemType = {
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
			price: 12,
			priceCanIncrease: false,
			publicId: "publicId",
			spicinessRating: 2,
			tags: [],
			taxRate: null,
			taxRateId: null,
			taxValue: 1
		};

		render(<MenuItemInfo menuItem={menuItem} />);
		expect(screen.getByText("name")).toBeInTheDocument();
		expect(screen.getByText("description")).toBeInTheDocument();
		expect(screen.getByRole("menuItemInfoPrize")).toHaveTextContent("€ 12");
	});
});
