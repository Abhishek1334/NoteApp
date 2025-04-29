import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getNoteById, updateNote } from "../utils/storage";
import { showSuccess, showError } from "../utils/toast";

const EditNote = () => {
	//Fetching note details by ID using useParams
	const { id: noteId } = useParams();
	const navigate = useNavigate();
	const [note, setNote] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setError(null);
        //Fetch note by ID from localStorage
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

	if (!note) {
		return (
			<div className="flex items-center justify-center h-screen">
				No note to display.
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-8 sm:py-12">
			<div className="w-full max-w-3xl flex justify-between items-center mb-6 sm:mb-8 px-4 sm:px-0">
				<Link
					to="/"
					className="text-blue-600 hover:underline px-3 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring focus:ring-blue-300"
				>
					Go Back
				</Link>
				<h1 className="text-2xl sm:text-3xl font-bold text-gray-800 max-md:text-xl">
					Edit Note
				</h1>
				<div></div>
			</div>
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-lg space-y-4 flex flex-col justify-center px-4 py-6 bg-white rounded-md shadow-md"
			>
				<input
					type="text"
					name="title"
					id="title"
					value={note?.title || ""}
					onChange={handleChange}
					className="border p-3 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none text-gray-700"
					placeholder="Title"
				/>
				<textarea
					name="content"
					id="content"
					value={note?.content || ""}
					onChange={handleChange}
					className="border p-3 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none text-gray-700 min-h-[140px]"
					placeholder="Content"
					rows="8"
				/>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring focus:ring-blue-300"
				>
					Save Note
				</button>
			</form>
		</div>
	);
};

export default EditNote;
