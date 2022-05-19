import React, { useContext } from "react";
import styles from "./MenuNavItem.module.css";
import MenuContext from "../../../context/MenuContext";

interface MenuNavItemProps {
	name: string;
	index: number;
}

const MenuNavItem: React.FC<MenuNavItemProps> = ({ name, index }) => {
	const { activeMenuIndex, setActiveMenuIndex } = useContext(MenuContext);
	const itemClassNames = `${styles.navItem} ${activeMenuIndex === index ? styles.active : ""}`;

	const handleClickNavItem = (index: number) => {
		setActiveMenuIndex(index);
	};
	return (
		<>
			<span role={"menuNavItemSpan"} className={itemClassNames} onClick={() => handleClickNavItem(index)}>
				{name.toUpperCase()}
			</span>
		</>
	);
};

export default MenuNavItem;
