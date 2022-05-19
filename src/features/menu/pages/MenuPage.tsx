import React, { useState } from "react";
import { useQueryMenu } from "../infrastructure/useQueryMenu";
import MenuNav from "../components/MenuNav";
import MenuContent from "../components/MenuContent";
import MenuContext from "../context/MenuContext";

const MenuPage: React.FC = (): null | React.ReactElement => {
	const { data: menu } = useQueryMenu();
	const [activeMenuIndex, setActiveMenuIndex] = useState<number>(0);
	const menuContextProviderValue = { activeMenuIndex, setActiveMenuIndex };

	return menu ? (
		<MenuContext.Provider value={menuContextProviderValue}>
			<MenuNav menuSections={menu.menuSections} />
			<MenuContent menuItems={menu.menuSections[activeMenuIndex].menuItems} />
		</MenuContext.Provider>
	) : null;
};

export default MenuPage;
