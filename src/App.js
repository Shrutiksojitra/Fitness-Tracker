import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import { AuthProvider } from './context/AuthContext';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
// import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar'; 
import './App.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar /> 
                <Routes> {/* Use Routes here */}
                    <Route path="/" element={<Login />} /> {/* Use element instead of component */}
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
