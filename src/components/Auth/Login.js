import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext'; 


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/users');

        const users = await response.json();
        const foundUser = users.find(user => user.email === email && user.password === password);
        if (foundUser) {
            login(foundUser);
            alert('Login successful!');
        } else {
            alert('Invalid credentials!');
        }
    };

    return (
        <form onSubmit={handleLogin} className="p-4">
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block mb-2 p-2 border rounded"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block mb-2 p-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
    );
};

export default Login;
