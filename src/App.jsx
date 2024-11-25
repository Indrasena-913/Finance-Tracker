import React, { useState } from "react";
import Header from "./header.jsx"; // Assuming Header is in the same directory

function App() {
	const [isOpen, setIsOpen] = useState(false); // State to manage the menu open/close

	const toggleMenu = (value) => {
		console.log(value);

		setIsOpen(value); // Set the state to true or false
	};

	return (
		<>
			<Header isOpen={isOpen} toggleMenu={toggleMenu} />
			{/* Other components like Content, Footer, etc. */}
		</>
	);
}

export default App;
