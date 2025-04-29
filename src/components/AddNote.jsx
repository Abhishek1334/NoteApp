import { useState } from "react";
import { getNotes, saveNotes } from "../utils/storage";
import { showSuccess, showError } from "../utils/toast";
import { useNavigate } from "react-router";

export default function AddNote({ onNoteAdded }) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [isSaving, setIsSaving] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		// Check if the title or content is empty
		if (!title.trim() || !content.trim()) {
			setError("Both title and content are required.");
			showError("Both title and content are required.");
			return;
		}

		// Why I chose useState + this submit handler:
		// useState simplifies controlled inputs, and the handler ensures stateful form logic is isolated.

		setIsSaving(true);
		setError(null);

		const newNote = { title, content, id: Date.now() };
		const existingNotes = getNotes();

		try {
			saveNotes([newNote, ...existingNotes]);
			setTitle("");
			setContent("");
			onNoteAdded?.(); // trigger reload in NotesList
			showSuccess("Note saved.");
			navigate("/");
		} catch (error) {
			setError("Failed to save note. Please try again.");
			showError("Failed to save note. Please try again.", error);
		} finally {
			setIsSaving(false);
		}
	};

	return (
		<div className="p-4 max-w-xl mx-auto">
			<h2 className="text-2xl font-bold mb-4">Add a Note</h2>
			{error && (
				<div className="bg-red-100 text-red-700 p-2 mb-3 rounded">
					{error}{" "}
				</div>
			)}
			<form onSubmit={handleSubmit} className="space-y-4">
				<input
					className="w-full p-2 border rounded"
					type="text"
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<textarea
					className="w-full p-2 border rounded"
					placeholder="Content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					rows={5}
				/>
				<button
					type="submit"
					disabled={isSaving}
					className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
				>
					{isSaving ? "Saving..." : "Save Note"}
				</button>
				{/* // Why show spinner here: gives user feedback that save is in progress */}
			</form>
		</div>
	);
}
