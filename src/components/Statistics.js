import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const Statistics = () => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:5000/workouts');
            const data = await response.json();
            setWorkouts(data);
            setLoading(false);
        };

        fetchWorkouts();
    }, []);

    // Prepare data for chart
    const chartData = {
        labels: workouts.map(workout => workout.activityType),
        datasets: [
            {
                label: 'Calories Burned',
                data: workouts.map(workout => workout.caloriesBurned),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Workout Statistics</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <Bar data={chartData} options={{ responsive: true }} />
                    <h3 className="mt-6 font-semibold">Total Workouts: {workouts.length}</h3>
                </div>
            )}
        </div>
    );
};

export default Statistics;
