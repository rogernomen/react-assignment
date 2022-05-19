import React from "react";
import styles from "./MenuItem.module.css";

interface MenuItemProps {
	info: React.ReactElement;
	picture: React.ReactElement;
}

const MenuItem: React.FC<MenuItemProps> = ({ info, picture }) => {
	return (
		<div role="menuItem" className={styles.menuItem}>
			<div className={styles.menuItemInfo}>{info}</div>
			<div className={styles.menuItemPicture}>{picture}</div>
		</div>
	);
};

export default MenuItem;
