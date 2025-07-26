import React, { useState } from 'react';
import AiMealTracker from './components/AiMealTracker';
import WorkoutTracker from './components/WorkoutTracker';
import StepsTracker from './components/StepsTracker';
import HealthReport from './components/HealthReport';

export default function App() {
  const [meals, setMeals] = useState([]);
  const [workoutsCompleted, setWorkoutsCompleted] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);

  const addMeal = (mealData) => {
    setMeals(prevMeals => [...prevMeals, mealData]);
  };

  const markWorkoutComplete = () => {
    setWorkoutsCompleted(prevCount => prevCount + 1);
  };

  const handleStepsUpdate = (steps) => {
    setTotalSteps(steps);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            3-Month Toning Transformation
          </h1>
          <p className="text-gray-400 mt-2">Your AI-Powered Fitness Journey</p>
        </header>
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <WorkoutTracker onComplete={markWorkoutComplete} />
            <AiMealTracker onMealAdd={addMeal} />
            <StepsTracker onStepsUpdate={handleStepsUpdate} />
          </div>
          <div className="lg:col-span-1">
            <HealthReport 
              meals={meals} 
              workoutsCompleted={workoutsCompleted}
              totalSteps={totalSteps}
            />
          </div>
        </main>
      </div>
    </div>
  );
}