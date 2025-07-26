import React, { useState } from 'react';

export default function AiMealTracker({ onMealAdd }) {
    const [mealInput, setMealInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleMealSubmit = async (e) => {
        e.preventDefault();
        if (!mealInput) return;
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/api/analyzeMeal', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mealText: mealInput }),
            });
            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error || 'Network response was not ok');
            }
            const data = await response.json();
            onMealAdd(data);
            setMealInput('');
        } catch (err) {
            setError(err.message || 'Failed to analyze meal. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4">Log Your Meal with AI</h3>
            <form onSubmit={handleMealSubmit}>
                <input type="text" value={mealInput} onChange={(e) => setMealInput(e.target.value)} placeholder="e.g., 3 dosas, 1 boiled egg, 1 cup curd"
                    className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-pink-500 focus:outline-none" disabled={isLoading} />
                <button type="submit" disabled={isLoading} className="w-full mt-4 p-3 font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:opacity-90 disabled:opacity-50 transition-opacity">
                    {isLoading ? 'Analyzing...' : 'Add Meal'}
                </button>
            </form>
            {error && <p className="mt-4 text-center text-red-400">{error}</p>}
        </div>
    );
}