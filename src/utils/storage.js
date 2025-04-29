const STORAGE_KEY = "custom_notes_app_notes";

// Function to get notes from localStorage
export function getNotes() {
	const storedNotes = localStorage.getItem(STORAGE_KEY);
	return storedNotes ? JSON.parse(storedNotes) : [];
}

// Function to get a note from localStorage using ID
export function getNoteById(noteId) {
	const notes = getNotes();
    const NoteId = typeof noteId === "string" ? parseInt(noteId) : noteId;
	
	// Extract the note with the matching ID
	const note = notes.find((note) => note.id === NoteId);

	
	return note;
}

// Function to save notes to localStorage
export function saveNotes(notes) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

// Function to update a specific note
export function updateNote(updatedNote) {
	const notes = getNotes();
	const updatedNotes = notes.map((note) =>
		note.id === updatedNote.id ? updatedNote : note
	);
	saveNotes(updatedNotes);
}

// Function to delete a specific note
export function deleteNote(noteId) {
	const notes = getNotes();
	const filteredNotes = notes.filter((note) => note.id !== noteId);
	saveNotes(filteredNotes);
}
