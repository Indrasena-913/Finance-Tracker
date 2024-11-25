import React from "react";

const MenuToggle = ({ isOpen, toggleMenu }) => {
	return (
		<div>
			{console.log(isOpen)} {/* Logs the current open state from the parent */}
			{/* Button to toggle the menu */}
			<button onClick={toggleMenu}>
				{isOpen ? "Close Menu" : "Open Menu"}
			</button>
			{/* Collapsible menu content */}
			<div style={{ display: isOpen ? "block" : "none" }}>
				<p>This is the collapsible menu content!</p>
			</div>
		</div>
	);
};

export default MenuToggle;
