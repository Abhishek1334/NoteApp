import { useState } from "react";
import { getNotes, saveNotes } from "../utils/storage";
import { showSuccess, showError } from "../utils/toast";
import { useNavigate, Link } from "react-router-dom";
import { LuCircleX } from "react-icons/lu";

export default function AddNote({ onNoteAdded }) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [isSaving, setIsSaving] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	// Why I chose useState + this submit handler:
	// useState enables controlled inputs; the submit handler manages save logic.
	const handleSubmit = (e) => {
		e.preventDefault();
		// Check if the title or content is empty
		if (!title.trim() || !content.trim()) {
			setError("Both title and content are required.");
			showError("Both title and content are required.");
			return;
		}

		setIsSaving(true);
		setError(null);

		const newNote = { title, content, id: Date.now() };
		const existingNotes = getNotes();

		try {
			saveNotes([newNote, ...existingNotes]);
			setTitle("");
			setContent("");
			onNoteAdded?.();
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
		<div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
			<div className="flex justify-between items-center mb-4">
				<h1 className="text-2xl font-semibold">Add Note</h1>
				<Link to="/" title="Cancel">
					<LuCircleX
						size={24}
						className="text-red-500 hover:text-red-600"
					/>
				</Link>
			</div>

			{error && (
				<div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
					{error}
				</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-4">
				<input
					className="w-full p-3 border rounded focus:ring focus:ring-blue-200 focus:outline-none"
					type="text"
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<textarea
					className="w-full p-3 border rounded focus:ring focus:ring-blue-200 focus:outline-none min-h-[120px]"
					placeholder="Content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<button
					type="submit"
					disabled={isSaving}
					className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
				>
					{isSaving ? "Saving..." : "Save Note"}
				</button>
			</form>
		</div>
	);
}
