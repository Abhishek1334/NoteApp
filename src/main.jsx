import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./pages/Layout";
import NotesList from "./components/NotesList";
import AddNote from "./components/AddNote";
import EditNote from "./components/EditNote";
import NotePage from "./pages/NotePage";
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
			{ path: "/edit/:id", element: <EditNote /> },
			{ path: "/view/:id", element: <NotePage /> },
			{ path: "*", element: <NotesList /> }, // 404 fallback
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<RouterProvider router={router} />
		<Toaster position="top-right" />
	</>
);
