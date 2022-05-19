import React from "react";
import styles from "./MenuItemPicture.module.css";

interface MenuItemPictureProps {
	src: string;
}

const MenuItemPicture: React.FC<MenuItemPictureProps> = ({ src }): React.ReactElement => {
	return (
		<div
			className={styles.picture}
			style={{
				backgroundImage: `url("${src}")`
			}}
		/>
	);
};

export default MenuItemPicture;
