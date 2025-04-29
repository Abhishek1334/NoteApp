import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./pages/Layout";
import NotesList from "./components/NotesList";
import AddNote from "./components/AddNote";
import EditNote from "./components/EditNote";
import { Toaster } from "react-hot-toast";

// Why this nav approach for simplicity 
// React Router provides a declarative way to handle navigation, making it easy to define routes and link between different parts of the application.

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "/", element: <NotesList /> },
			{ path: "add", element: <AddNote /> },
			{ path: "/edit/:id", element:<EditNote /> },
			{ path: "*", element: <NotesList /> },//404 page or all routes not found
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<Toaster position="top-right" />
	</React.StrictMode>
);
