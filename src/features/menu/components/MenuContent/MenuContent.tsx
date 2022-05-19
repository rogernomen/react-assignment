import React from "react";
import { MenuItem as MenuItemType } from "../../../../../bff/src/models/Menu";
import MenuItem from "./MenuItem";
import MenuItemInfo from "./MenuItemInfo";
import MenuItemPicture from "./MenuItemPicture";

interface MenuContentProps {
	menuItems: MenuItemType[];
}

const MenuContent: React.FC<MenuContentProps> = ({ menuItems }): React.ReactElement => {
	return (
		<>
			{menuItems.map((menuItem: MenuItemType) => {
				return (
					<MenuItem
						key={menuItem.menuItemId}
						info={<MenuItemInfo menuItem={menuItem} />}
						picture={<MenuItemPicture src={menuItem.imageUrl} />}
					/>
				);
			})}
		</>
	);
};

export default MenuContent;
