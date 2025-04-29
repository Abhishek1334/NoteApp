import { useParams, Link } from "react-router-dom";
import { getNoteById } from "../utils/storage";
import { useEffect, useState } from "react";
import { LuCircleX } from "react-icons/lu";

export default function ViewNote() {
	const { id } = useParams();
	const [note, setNote] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		const fetchedNote = getNoteById(id);

		if (fetchedNote) {
			setNote(fetchedNote);
		} else {
			setError("Note not found.");
		}

		setLoading(false);
	}, [id]);

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
		<div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md mt-10">
			<div className="flex justify-between items-center mb-4">
				<h1 className="text-2xl font-semibold">Note Details</h1>
				<Link to="/">
					<LuCircleX size={24} className="text-red-500" />
				</Link>
			</div>
			<h2 className="text-xl font-bold mb-2">{note.title}</h2>
			<p className="text-gray-700 whitespace-pre-wrap">{note.content}</p>
		</div>
	);
}
