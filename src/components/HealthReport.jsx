import React from 'react';

export default function HealthReport({ meals, workoutsCompleted, totalSteps }) {
  const totalCalories = meals.reduce((sum, meal) => sum + (meal.calories || 0), 0);
  const totalProtein = meals.reduce((sum, meal) => sum + (meal.protein || 0), 0);
  const totalCarbs = meals.reduce((sum, meal) => sum + (meal.carbs || 0), 0);
  const totalFat = meals.reduce((sum, meal) => sum + (meal.fat || 0), 0);
  const stepsCalories = (totalSteps * 0.04).toFixed(0);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 shadow-xl sticky top-8">
      <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-gray-700 pb-4">Today's Health Report</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Calories Eaten:</span>
          <span className="font-bold text-2xl text-green-400">{totalCalories}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Burned from Steps:</span>
          <span className="font-bold text-lg text-green-400">~{stepsCalories}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Workouts Done:</span>
          <span className="font-bold text-2xl text-purple-400">{workoutsCompleted}</span>
        </div>

        <div className="pt-4 border-t border-gray-700">
            <h4 className="text-md font-bold text-white mb-2 text-center">Macro Summary</h4>
            <div className="flex justify-around text-center">
                <div>
                    <p className="text-red-400 font-bold">{totalProtein.toFixed(0)}g</p>
                    <p className="text-xs text-gray-400">Protein</p>
                </div>
                <div>
                    <p className="text-blue-400 font-bold">{totalCarbs.toFixed(0)}g</p>
                    <p className="text-xs text-gray-400">Carbs</p>
                </div>
                <div>
                    <p className="text-yellow-400 font-bold">{totalFat.toFixed(0)}g</p>
                    <p className="text-xs text-gray-400">Fat</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}