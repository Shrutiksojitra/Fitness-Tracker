import React, { useEffect, useState } from 'react';

const Goals = () => {
    const [goals, setGoals] = useState([]);
    const [goalText, setGoalText] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGoals = async () => {
            const response = await fetch('http://localhost:5000/goals');
            const data = await response.json();
            setGoals(data);
            setLoading(false);
        };

        fetchGoals();
    }, []);

    const handleAddGoal = async (e) => {
        e.preventDefault();
        const newGoal = { text: goalText, completed: false };

        // Save new goal to the JSON server
        await fetch('http://localhost:5000/goals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newGoal),
        });

        setGoals([...goals, newGoal]);
        setGoalText('');
    };

    const toggleGoalCompletion = async (goal) => {
        const updatedGoal = { ...goal, completed: !goal.completed };

        // Update goal status in the JSON server
        await fetch(`http://localhost:5000/goals/${goal.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedGoal),
        });

        setGoals(goals.map(g => (g.id === goal.id ? updatedGoal : g)));
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Set Your Fitness Goals</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <form onSubmit={handleAddGoal} className="mb-4">
                    <input
                        type="text"
                        placeholder="Enter your goal"
                        value={goalText}
                        onChange={(e) => setGoalText(e.target.value)}
                        className="border rounded p-2 mr-2"
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        Add Goal
                    </button>
                </form>
            )}
            <h3 className="text-lg font-semibold">Your Goals</h3>
            <ul className="list-disc pl-5">
                {goals.map((goal) => (
                    <li key={goal.id} className={`flex items-center mb-2 ${goal.completed ? 'line-through' : ''}`}>
                        <input
                            type="checkbox"
                            checked={goal.completed}
                            onChange={() => toggleGoalCompletion(goal)}
                            className="mr-2"
                        />
                        {goal.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Goals;
