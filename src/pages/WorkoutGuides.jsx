import React from 'react';

const allWorkouts = [
    { name: "Lower Body", exercises: ["Squats: 3x12", "Lunges: 3x12 each leg", "Glute Bridges: 3x15", "Wall Sit: 3x30s"] },
    { name: "Upper Body", exercises: ["Push-ups: 3x10", "Dumbbell Rows (use bottles): 3x12", "Tricep Dips: 3x12", "Shoulder Taps: 3x20"] },
    { name: "Core + Cardio", exercises: ["Plank: 3x30s", "Jumping Jacks: 3x45s", "Mountain Climbers: 3x30s", "Bicycle Crunches: 3x20"] },
];

export default function WorkoutGuides() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Workout Guides</h1>
      <div className="space-y-8">
        {allWorkouts.map(workout => (
            <div key={workout.name} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                <h3 className="text-xl font-bold text-pink-400 mb-4">{workout.name}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {workout.exercises.map((ex, index) => <li key={index}>{ex}</li>)}
                </ul>
            </div>
        ))}
      </div>
    </div>
  );
}
