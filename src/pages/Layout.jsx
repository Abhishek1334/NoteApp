import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
	return (
		<div className="min-h-screen w-full flex flex-col bg-gray-100">
			<Navbar />
			{/* Why this nav approach for simplicity: */}
			{/* Simple top navbar layout with <Outlet> for nested routing. */}
			<main className="flex-1 w-full px-4 py-6">
				<Outlet />
			</main>
		</div>
	);
}
