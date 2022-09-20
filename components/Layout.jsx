import { useState } from 'react';
// import { motion } from "framer-motion"
// import { pageAnimation3 } from "../utils/animations"
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => setIsOpen(!isOpen);

	return (
		<>
			<Navbar toggleSidebar={toggleSidebar} />
			<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
			<main
			// variants={pageAnimation3}
			// initial="hidden"
			// animate="show"
			// exit="exit"
			>
				{children}
			</main>
		</>
	);
};

export default Layout;
