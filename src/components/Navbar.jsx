import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="bg-lightgray py-2 px-20 max-md:px-4">
			<div className="flex items-center justify-between">
				{/* Logo */}
				<div>
					<Link to="/" className="text-xl font-bold text-black max-md:text-base">
						My Notes
					</Link>
				</div>

				{/* Navigation Links */}
				<div className="flex space-x-4">
					<Link to="/add" className="text-blue-600 hover:underline">
						Add Note
					</Link>
					<Link to="/" className="text-blue-600 hover:underline">
						View Notes
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
