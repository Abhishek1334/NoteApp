# Custom Note Service

A simple React application for taking, viewing, and editing notes, with data stored locally in the browser using `localStorage`.

## Setup & Run

1.  Clone the repository: `git clone https://github.com/Abhishek1334/NoteApp`
2.  Navigate to the project directory: `cd your-project-folder-name`
3.  Install dependencies: `npm install` or `yarn install`
4.  Start the development server: `npm start` or `yarn start`
5.  Open your browser to `http://localhost:3000` (or the port specified in your terminal).

## Features

* **Add Notes:** Create new notes with a title and content.
* **View Notes:** See a list of all your saved notes.
* **Edit Notes:** Modify the title and content of existing notes.
* **Local Storage:** Notes are persisted directly in your browser's `localStorage`, so no backend is required.
* **Responsive Design:** The application layout adapts to different screen sizes for a better user experience on various devices.
* **Form Validation:** Basic validation to ensure both title and content are provided when saving notes.
* **Toast Notifications:** Provides visual feedback for successful actions (saving, updating, deleting).

## Why?

* **Storage Strategy:** Used `localStorage` for its simplicity in persisting data directly within the browser without a server. The key `custom_notes_app_notes` provides a specific namespace for the application's data.
* **Component Structure:** The application is built with reusable components (`AddNote`, `NotesList`, `EditNote`, `NoteCard`, `Layout`) to separate concerns and improve code organization and maintainability.
* **State Management:** React's `useState` hook manages component-level state for form inputs, notes list, and loading/error indicators. Props are used to pass data between components.
* **Styling Approach:** Utilized Tailwind CSS for rapid and responsive styling through utility classes, enabling quick UI development and consistency.
* **Navigation Approach:** Implemented navigation using `react-router-dom` to handle routing between different views (view notes, add note, edit note) in a declarative and straightforward manner.

## Further Improvements (Optional)

* Implement note deletion functionality.
* Add a more sophisticated UI with advanced styling.
* Include features like searching, filtering, or tagging of notes.
* Consider more robust error handling and user feedback.

## Submission

* **GitHub Repo URL:** `https://github.com/Abhishek1334/NoteApp`
* **Live Site URL:** `https://note-app-nu-fawn.vercel.app/`
