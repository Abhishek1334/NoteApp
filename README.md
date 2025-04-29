# Custom Note Service

A simple React application for taking and viewing notes, with data stored locally in the browser using `localStorage`.

## Setup & Run

1.  Clone the repository: `git clone <your-repo-url>`
2.  Navigate to the project directory: `cd your-project-folder-name`
3.  Install dependencies: `npm install` or `yarn install`
4.  Start the development server: `npm start` or `yarn start`
5.  Open your browser to `http://localhost:3000` (or the port specified in your terminal).

## Why?

* **Storage Strategy:** Used `localStorage` because it provides a straightforward way to persist data directly in the user's browser without requiring a backend server. The key `custom_notes_app_notes` was chosen to create a specific namespace for this application's data within `localStorage`, minimizing the risk of conflicts with other websites or applications.
* **Component Structure:** The application is organized into modular components (`AddNote`, `NotesList`) to separate concerns related to user input and data display. This structure enhances code readability and maintainability. The main `App` component manages navigation and overall state.
* **State Management:** React's built-in `useState` hook is utilized within components to manage their local state, such as form inputs and the list of notes. Props are passed down to child components to share data, and callback functions are used to communicate events back to parent components.
* **Styling Approach:** [**Replace this with your choice and reasoning:** e.g., Used Tailwind CSS for rapid prototyping and utility-first styling, allowing for quick and consistent UI development directly within the component JSX. / Used plain CSS in `index.css` for a more traditional styling approach, focusing on global styles and selectors. / Used CSS Modules to scope styles locally to each component, preventing naming collisions and improving maintainability.]
* **Navigation Approach:** Implemented simple navigation using [**Replace this with your approach:** e.g., buttons at the top of the page controlled by state variables for conditional rendering. / basic tabs using `Link` components from `react-router-dom`]. This minimal approach is sufficient for the project's scope, providing clear switching between adding and viewing notes.

## Code Comments

The codebase includes concise one-line comments to explain key design decisions:

* **`AddNote.jsx`**: Explains the choice of `useState` for form management and the purpose of the `handleSubmit` function.
* **`NotesList.jsx`**: Explains the use of `useEffect` to initially load notes from `localStorage` and keep the component's state in sync.
* **Navigation component (`App.jsx` or a dedicated navigation component)**: Explains the rationale behind the chosen navigation approach for its simplicity.
* **Error/Loading handling in relevant components**: Explains why the "Saving..." spinner and error banner are displayed to the user.

## Further Improvements (Optional)

* Implement note editing functionality.
* Add a more sophisticated UI with a dedicated navigation bar.
* Include features like note searching or tagging.
* Consider using a more advanced state management library for larger applications.

## Submission

* **GitHub Repo URL:** `<your-repo-URL>`
* **Live Site URL:** `<your-vercel-or-netlify-URL>`