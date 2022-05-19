import React from "react";
import { MenuSection } from "../../../../../bff/dist/models/Menu";
import MenuNavItem from "./MenuNavItem";

interface MenuNavProps {
	menuSections: Array<MenuSection>;
}

const MenuNav: React.FC<MenuNavProps> = ({ menuSections }): React.ReactElement => {
	return (
		<>
			{menuSections.map((menuSection: MenuSection, index: number) => {
				return (
					<MenuNavItem
						data-role={"menuNavItem"}
						key={menuSection.menuSectionId}
						name={menuSection.name}
						index={index}
					/>
				);
			})}
		</>
	);
};

export default MenuNav;
