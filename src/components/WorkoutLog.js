import React, { useState } from 'react';

const WorkoutLog = () => {
    const [activityType, setActivityType] = useState('');
    const [duration, setDuration] = useState('');
    const [caloriesBurned, setCaloriesBurned] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { activityType, duration, caloriesBurned, date };

        // Save workout data to the JSON server
        await fetch('http://localhost:5000/workouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(workout),
        });

        alert('Workout logged successfully!');

        // Reset form fields
        setActivityType('');
        setDuration('');
        setCaloriesBurned('');
        setDate('');
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Log Your Workout</h2>
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
                <div className="mb-4">
                    <label className="block mb-2">Activity Type</label>
                    <input
                        type="text"
                        placeholder="e.g., Running"
                        value={activityType}
                        onChange={(e) => setActivityType(e.target.value)}
                        className="block w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Duration (in minutes)</label>
                    <input
                        type="number"
                        placeholder="e.g., 30"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="block w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Calories Burned</label>
                    <input
                        type="number"
                        placeholder="e.g., 300"
                        value={caloriesBurned}
                        onChange={(e) => setCaloriesBurned(e.target.value)}
                        className="block w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="block w-full p-2 border rounded"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Log Workout
                </button>
            </form>
        </div>
    );
};

export default WorkoutLog;
