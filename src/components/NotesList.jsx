import { useEffect, useState } from "react";
import { getNotes } from "../utils/storage";
import NoteCard from "./NoteCard";
import { Link } from "react-router-dom";
import { showSuccess } from "../utils/toast";

export default function NotesList() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		const storedNotes = getNotes();
		setNotes(storedNotes);
	}, []);

	const handleDelete = () => {
		const storedNotes = getNotes();
		setNotes(storedNotes); // Refresh the list after deletion
		showSuccess("Note deleted successfully!");
	};

	if (notes.length === 0) {
		return (
			<div className="p-6 md:p-8 text-center">
				<h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
					No Notes Available
				</h2>
				<p className="text-gray-600 mb-4">Start by adding a note!</p>
				<Link
					to="/add"
					className="inline-block text-blue-600 hover:underline transition duration-200"
				>
					Add a Note
				</Link>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6">
			{notes.map((note) => (
				<NoteCard key={note.id} note={note} onDelete={handleDelete} />
			))}
			<Link
				to="/add"
				className="col-span-full block text-center text-blue-600 hover:underline mt-6 transition duration-200"
			>
				Add Another Note
			</Link>
		</div>
	);
}
