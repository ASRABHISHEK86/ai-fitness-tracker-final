import React from 'react';

const workouts = {
    0: { name: "Rest Day", exercises: ["Relax and recover."] },
    1: { name: "Lower Body", exercises: ["Squats: 3x12", "Lunges: 3x12 each leg", "Glute Bridges: 3x15"] },
    2: { name: "Upper Body", exercises: ["Push-ups: 3x10", "Dumbbell Rows (use bottles): 3x12", "Tricep Dips: 3x12"] },
    3: { name: "Core + Cardio", exercises: ["Plank: 3x30s", "Jumping Jacks: 3x45s", "Mountain Climbers: 3x30s"] },
    4: { name: "Lower Body", exercises: ["Jump Squats: 3x10", "Wall Sit: 3x30s", "Donkey Kicks: 3x15 each leg"] },
    5: { name: "Upper Body", exercises: ["Push-ups: 3 to failure", "Arm Circles: 2x30s", "Shoulder Taps: 3x20"] },
    6: { name: "Stretch/Yoga", exercises: ["Full-body stretching or a short yoga routine."] }
};

export default function WorkoutTracker({ onComplete }) {
    const dayOfWeek = new Date().getDay();
    const workout = workouts[dayOfWeek];

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4">Today's Workout: <span className="text-pink-400">{workout.name}</span></h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
                {workout.exercises.map((ex, index) => <li key={index}>{ex}</li>)}
            </ul>
            <button onClick={onComplete} className="w-full mt-6 p-3 font-bold text-white bg-green-600 rounded-md hover:bg-green-500 transition-colors">
                Mark as Complete
            </button>
        </div>
    );
}