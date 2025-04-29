import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getNoteById, updateNote } from "../utils/storage";
import { showSuccess, showError } from "../utils/toast";

const EditNote = () => {
    const { id: noteId } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start">
            <div className="w-full max-w-3xl flex justify-between items-center mb-8">
                <Link
                    to="/"
                    className="text-blue-600 hover:underline px-4 py-2 rounded-md transition-colors duration-200"
                >
                    Go Back
                </Link>
                <h1 className="text-3xl font-bold max-md:text-xl ">Edit Note</h1>
                <div></div>
            </div>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-3xl space-y-6 flex flex-col justify-center px-2 py-2 max-md:w-[90%]"
            >
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={note.title || ""}
                    onChange={handleChange}
                    className="border p-4 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    id="content"
                    value={note.content || ""}
                    onChange={handleChange}
                    className="border p-4 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none min-h-[160px]"
                    placeholder="Content"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-md transition-colors duration-200"
                >
                    Save Note
                </button>
            </form>
        </div>
    );
};

export default EditNote;