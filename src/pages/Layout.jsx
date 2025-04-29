import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
export default function Layout() {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      {/* // Why this nav approach for simplicity: minimal tab-like interface for clarity */}
      <main className='w-full h-full '>
        <Outlet />
      </main>
    </div>
  );
}
