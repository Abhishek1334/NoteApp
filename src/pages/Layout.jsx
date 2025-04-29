import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='w-screen h-screen'>
      <nav className="flex gap-4 p-4 bg-gray-100">
        <Link to="/add" className="text-blue-600 hover:underline">Add Note</Link>
        <Link to="/" className="text-blue-600 hover:underline">View Notes</Link>
      </nav>
      {/* // Why this nav approach for simplicity: minimal tab-like interface for clarity */}
      <main className='w-full h-full'>
        <Outlet />
      </main>
    </div>
  );
}
