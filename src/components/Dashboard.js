import React from 'react';
import Statistics from './Statistics';
import Goals from './Goals';
import Navbar from './Navbar';






const Dashboard = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Navbar />
            <Statistics />
            <Goals />
        </div>
    );
};

export default Dashboard;
