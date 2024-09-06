import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <nav className="bg-green-700 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>FarmConnect</h1>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Choose Your Role</h2>
          <div className="space-y-4">
            <button
              onClick={() => navigate('/signup/farmer')}
              className="block w-full px-4 py-2 text-center text-white bg-green-600 hover:bg-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign Up as Farmer
            </button>
            <button
              onClick={() => navigate('/signup/contractor')}
              className="block w-full px-4 py-2 text-center text-green-600 border border-green-600 hover:bg-green-50 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign Up as Contractor
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-green-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 FarmConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
