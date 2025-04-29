import { useEffect, useState } from "react";
import { getNotes } from "../utils/storage";
import NoteCardSkeleton from "./NoteCardSkeleton";
import NoteCard from "./NoteCard";
import { Link } from "react-router-dom";
import { showSuccess } from "../utils/toast";
import { LuPlus } from "react-icons/lu";

export default function NotesList() {
	const [notes, setNotes] = useState([]);
	//Fake loading state
	const [loading, setLoading] = useState(true);

	// Why useEffect to sync storage → state:
	// useEffect with an empty dependency runs once after the initial render which loads notes from localStorage to initialize the notes state.
	useEffect(() => {
		const storedNotes = getNotes();
		setNotes(storedNotes);
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 500); // Simulate short loading

		return () => clearTimeout(timer);
	}, [notes]);

	const handleDelete = () => {
		const storedNotes = getNotes();
		setNotes(storedNotes);
		showSuccess("Note deleted successfully!");
	};

	if (loading) {
		return (
			<div className="max-w-screen-xl mx-auto p-4 md:p-6 my-10 bg-white rounded-xl shadow-sm">
				<h2 className="text-2xl font-semibold mb-6 text-center">
					Your Notes
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{Array.from({ length: 4 }).map((_, index) => (
						<NoteCardSkeleton key={index} />
					))}
				</div>
				<div className="h-6 w-40 bg-gray-300 rounded mt-6 mx-auto"></div>
			</div>
		);
	}

	if (notes.length === 0) {
		return (
			<div className="p-6 md:p-8 text-center max-w-md mx-auto my-20 bg-white rounded-xl shadow-sm">
				<h2 className="text-2xl font-semibold text-gray-800 mb-2">
					No Notes Available
				</h2>
				<p className="text-gray-600 mb-4">Start by adding a note!</p>
				<Link
					to="/add"
					className="inline-flex items-center gap-1 text-blue-600 hover:underline transition duration-200 font-medium"
				>
					<LuPlus /> Add a Note
				</Link>
			</div>
		);
	}

	return (
		<div className="max-w-screen-xl mx-auto p-4 md:p-6 my-10 bg-white rounded-xl shadow-sm">
			<h2 className="text-2xl font-semibold mb-6 text-center">
				Your Notes
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[70vh] overflow-y-auto pr-1">
				{notes.map((note) => (
					<NoteCard
						key={note.id}
						note={note}
						onDelete={handleDelete}
					/>
				))}
			</div>
			<Link
				to="/add"
				className="block text-center text-blue-600 hover:underline mt-6 transition duration-200 font-medium"
			>
				<LuPlus className="inline-block" /> Add Another Note
			</Link>
		</div>
	);
}
