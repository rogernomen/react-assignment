import React from "react";

interface MenuContext {
	activeMenuIndex: number;
	setActiveMenuIndex: React.Dispatch<React.SetStateAction<number>>;
}

const initialMenuContext: MenuContext = {
	activeMenuIndex: 0,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setActiveMenuIndex: () => {}
};

const MenuContext = React.createContext(initialMenuContext);
export const MenuContextProvider = MenuContext.Provider;
export default MenuContext;
