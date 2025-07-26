import React from 'react';
// Same as before
export default function HealthReport({ meals, workoutsCompleted, totalSteps }) {
  const totalCalories = meals.reduce((sum, meal) => sum + (meal.calories || 0), 0);
  const totalProtein = meals.reduce((sum, meal) => sum + (meal.protein || 0), 0);
  const stepsCalories = (totalSteps * 0.04).toFixed(0);

  return (
    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 shadow-xl sticky top-8">
      <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-gray-700 pb-4">Today's Summary</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center"><span>Calories Eaten:</span><span className="font-bold text-2xl text-green-400">{totalCalories}</span></div>
        <div className="flex justify-between items-center"><span>Burned (Steps):</span><span className="font-bold text-lg text-green-400">~{stepsCalories}</span></div>
        <div className="flex justify-between items-center"><span>Workouts Done:</span><span className="font-bold text-2xl text-purple-400">{workoutsCompleted}</span></div>
        <div className="pt-4 border-t border-gray-700 text-center"><p className="text-red-400 font-bold">{totalProtein.toFixed(0)}g Protein</p></div>
      </div>
    </div>
  );
};
