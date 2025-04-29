import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getNoteById, updateNote } from "../utils/storage";
import { showSuccess, showError } from "../utils/toast";
import { LuCircleX } from "react-icons/lu";

const EditNote = () => {
	//Get note ID from URL
	const { id: noteId } = useParams();
	const navigate = useNavigate();
	const [note, setNote] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	//Fetch note by ID from localStorage
	useEffect(() => {
		setLoading(true);
		setError(null);

		const fetchedNote = getNoteById(noteId);

		if (fetchedNote) {
			setNote({ ...fetchedNote });
		} else {
			setError("Note not found.");
		}

		setLoading(false);
	}, [noteId]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNote((prevNote) => ({
			...prevNote,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//Check if the title or content is empty
		if (note?.title?.trim() === "" || note?.content?.trim() === "") {
			showError("Both title and content are required.");
			return;
		}

		if (note) {
			updateNote(note);
			showSuccess("Note updated successfully!");
			navigate("/");
		}
	};

	if (loading) {
		return (
			<div className="flex items-center justify-center h-screen">
				Loading note...
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex items-center justify-center h-screen text-red-500">
				{error}
			</div>
		);
	}

	return (
		<div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
			<div className="flex justify-between items-center mb-4">
				<h1 className="text-2xl font-semibold">Edit Note</h1>
				<Link to="/" title="Cancel">
					<LuCircleX
						size={24}
						className="text-red-500 hover:text-red-600"
					/>
				</Link>
			</div>

			<form onSubmit={handleSubmit} className="space-y-4">
				<input
					type="text"
					name="title"
					value={note?.title || ""}
					onChange={handleChange}
					className="w-full p-3 border rounded focus:ring focus:ring-blue-200 focus:outline-none"
					placeholder="Title"
				/>
				<textarea
					name="content"
					value={note?.content || ""}
					onChange={handleChange}
					className="w-full p-3 border rounded focus:ring focus:ring-blue-200 focus:outline-none min-h-[140px]"
					placeholder="Content"
					rows={8}
				/>
				<button
					type="submit"
					className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
				>
					Save Note
				</button>
			</form>
		</div>
	);
};

export default EditNote;
