import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        // Optionally redirect to login page
        window.location.href = '/';
    };

    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Fitness Tracker</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/dashboard" className="text-white hover:underline">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/workout-log" className="text-white hover:underline">Workout Log</Link>
                    </li>
                    <li>
                        <Link to="/statistics" className="text-white hover:underline">Statistics</Link>
                    </li>
                    <li>
                        <Link to="/goals" className="text-white hover:underline">Goals</Link>
                    </li>
                </ul>
                {user ? (
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
                ) : (
                    <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
