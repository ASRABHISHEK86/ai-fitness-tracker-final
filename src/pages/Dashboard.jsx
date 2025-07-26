import React, { useState } from 'react';
import AiMealTracker from '../components/AiMealTracker';
import HealthReport from '../components/HealthReport';
import { WorkoutCard } from '../components/WorkoutCard';

const workouts = {
    0: { name: "Rest Day", exercises: ["Relax and recover."] },
    1: { name: "Lower Body", exercises: ["Squats: 3x12", "Lunges: 3x12 each leg"] },
    // Add other days...
};

export default function Dashboard() {
  const [meals, setMeals] = useState([]);
  const [workoutsCompleted, setWorkoutsCompleted] = useState(0);
  
  const dayOfWeek = new Date().getDay();
  const todayWorkout = workouts[dayOfWeek] || workouts[0];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <WorkoutCard workout={todayWorkout} onComplete={() => setWorkoutsCompleted(c => c + 1)} />
          <AiMealTracker onMealAdd={(meal) => setMeals(m => [...m, meal])} />
        </div>
        <div className="lg:col-span-1">
          <HealthReport meals={meals} workoutsCompleted={workoutsCompleted} totalSteps={0} />
        </div>
      </div>
    </div>
  );
}