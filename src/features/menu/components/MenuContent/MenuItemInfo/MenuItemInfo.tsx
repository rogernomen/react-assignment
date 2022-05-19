import { MenuItem as MenuItemType } from "../../../../../../bff/src/models/Menu";
import React from "react";
import styles from "./MenuItemInfo.module.css";
import Arrow from "../../../../../shared/components/Icons/Arrow";

interface MenuItemInfoProps {
	menuItem: MenuItemType;
}

const MenuItemInfo: React.FC<MenuItemInfoProps> = ({ menuItem }) => {
	return (
		<div className={styles.menuItemInfo}>
			<div className={styles.name}>{menuItem.name}</div>
			<div className={styles.description}>{menuItem.description}</div>
			<div role="menuItemInfoPrize" className={styles.prize}>
				€ {menuItem.price} <Arrow className={styles.arrow} />
			</div>
		</div>
	);
};

export default MenuItemInfo;
