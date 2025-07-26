import React from 'react';

export const WorkoutCard = ({ workout, onComplete }) => (
    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 shadow-xl">
        <h3 className="text-xl font-bold text-white mb-4">Today's Workout: <span className="text-pink-400">{workout.name}</span></h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
            {workout.exercises.map((ex, index) => <li key={index}>{ex}</li>)}
        </ul>
        {onComplete &&
            <button onClick={onComplete} className="w-full mt-6 p-3 font-bold text-white bg-green-600 rounded-md hover:bg-green-500 transition-colors">
                Mark as Complete
            </button>
        }
    </div>
);