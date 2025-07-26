import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await setDoc(doc(db, "users", userCredential.user.uid), {
                    email: userCredential.user.email,
                    currentWeight: 72,
                    targetWeight: 62,
                });
            }
        } catch (err) {
            setError(err.message.replace('Firebase: ', ''));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-2xl">
                <h2 className="text-3xl font-bold text-center text-white mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                <p className="text-center text-gray-400 mb-6">{isLogin ? 'Log in to continue your journey' : 'Start your transformation today'}</p>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required
                        className="w-full p-3 mb-4 bg-gray-700 rounded border border-gray-600 focus:ring-2 focus:ring-pink-500 focus:outline-none" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required
                        className="w-full p-3 mb-4 bg-gray-700 rounded border border-gray-600 focus:ring-2 focus:ring-pink-500 focus:outline-none" />
                    <button type="submit" disabled={loading} className="w-full p-3 font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:opacity-90 disabled:opacity-50">
                        {loading ? 'Processing...' : (isLogin ? 'Log In' : 'Sign Up')}
                    </button>
                    {error && <p className="mt-4 text-center text-red-400">{error}</p>}
                </form>
                <button onClick={() => setIsLogin(!isLogin)} className="w-full mt-4 text-center text-gray-400 hover:text-white">
                    {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Log In'}
                </button>
            </div>
        </div>
    );
}