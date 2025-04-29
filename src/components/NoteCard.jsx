import { Link } from "react-router-dom";
import { deleteNote } from "../utils/storage";
import { showSuccess, showError } from "../utils/toast";

export default function NoteCard({ note, onDelete }) {

	// confirm user wants to delete
	const handleDelete = () => {
		if (window.confirm("Are you sure you want to delete this note?")) {
			try {
				deleteNote(note.id);
				onDelete();
				showSuccess("Note deleted successfully!");
			} catch (error) {
				showError("Failed to delete note.", error);
			}
		}
	};

	return (
		<div className="border p-4 rounded-lg shadow-sm">
			<h3 className="text-lg font-semibold">{note.title}</h3>
			<p className="text-gray-600">{note.content.substring(0, 100)}...</p>
			<div className="mt-2 flex justify-end gap-5">
				<Link
					to={`/edit/${note.id}`}
					className="text-blue-600 hover:underline border px-3 py-1 rounded-2xl"
				>
					Edit
				</Link>
				<button
					onClick={handleDelete}
					className="text-red-600 hover:underline border px-3 py-1 rounded-2xl"
				>
					Delete
				</button>
			</div>
		</div>
	);
}
