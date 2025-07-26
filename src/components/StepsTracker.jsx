import React, { useState } from 'react';

export default function StepsTracker({ onStepsUpdate }) {
    const [steps, setSteps] = useState('');

    const handleStepsChange = (e) => {
        const newSteps = e.target.value;
        setSteps(newSteps);
        onStepsUpdate(Number(newSteps) || 0);
    };

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4">Daily Steps</h3>
            <input type="number" value={steps} onChange={handleStepsChange} placeholder="e.g., 8000"
                className="w-full p-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>
    );
}