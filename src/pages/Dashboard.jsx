import React from 'react';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import AiMealTracker from '../components/AiMealTracker';
import WorkoutTracker from '../components/WorkoutTracker';
import StepsTracker from '../components/StepsTracker';

export default function Dashboard() {
    const handleLogout = () => {
        signOut(auth).catch(error => console.error("Logout Error:", error));
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans p-4 sm:p-8">
            <div className="max-w-4xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        AI Fitness Tracker
                    </h1>
                    <button onClick={handleLogout} className="bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
                        Logout
                    </button>
                </header>
                <main>
                    <WorkoutTracker />
                    <AiMealTracker />
                    <StepsTracker />
                </main>
            </div>
        </div>
    );
}