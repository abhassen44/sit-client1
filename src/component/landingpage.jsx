import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <nav className="bg-green-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FarmConnect</h1>
          <div className="space-x-4">
            <button className="px-3 py-2 text-white hover:text-green-200">About</button>
            <button className="px-3 py-2 text-white hover:text-green-200">Features</button>
            <button className="px-3 py-2 text-white hover:text-green-200">Contact</button>
            <button
            onClick={()=>navigate('/profile')}
            className="px-3 py-2 text-white hover:text-green-200">profile</button>
            <button
            onClick={()=>navigate('/login')}
            className="px-3 py-2 border border-white text-white hover:bg-green-600">Log In</button>
            <button
              onClick={() => navigate('/signup')} 
              className="px-3 py-2 bg-white text-green-700 hover:bg-green-100"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <section className="py-20 text-center">
          <h2 className="text-5xl font-bold text-green-800 mb-4">Connecting Farmers and Buyers</h2>
          <p className="text-xl text-green-600 mb-8">Secure contracts, transparent communication, and timely payments</p>
          <button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded">
            Get Started →
          </button>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-green-800 text-center mb-12">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Connect", description: "Match farmers with potential buyers" },
                { title: "Grow", description: "Manage contracts and track crop progress" },
                { title: "Prosper", description: "Secure payments and reduce market risks" }
              ].map((item, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg text-center">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-green-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-100">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-green-800 mb-8">Ready to get started?</h3>
            <button
            onClick={()=>navigate('/signup')}
            
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded">
              Sign Up Now
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 FarmConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
