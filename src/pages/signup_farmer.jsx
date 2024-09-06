import React from 'react'

import { useNavigate } from 'react-router-dom';


export default function FarmerSignUp() {

  const navigate = useNavigate();

  return (

    <>
    <div>

     <nav className="bg-green-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-semibold">FarmConnect</a>
          <button
              onClick={() => navigate('/login')} 
              className="px-3 py-2 bg-white text-green-700 hover:bg-green-100"
            >
              login
            </button>
        </div>
      </nav>

    </div>

    <div className="space-y-6 max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-green-800">Sign Up as Farmer</h2>
      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="farmer-name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="farmer-name"
            type="text"
            placeholder="Full Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="farmer-state" className="block text-sm font-medium text-gray-700">State</label>
          <input
            id="farmer-state"
            type="text"
            placeholder="State"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="farmer-total-farmland" className="block text-sm font-medium text-gray-700">Total Farmland (in acres)</label>
          <input
            id="farmer-total-farmland"
            type="number"
            placeholder="Total Farmland"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="farmer-aadhar" className="block text-sm font-medium text-gray-700">Aadhar Number</label>
          <input
            id="farmer-aadhar"
            type="text"
            placeholder="Aadhar Number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="farmer-district" className="block text-sm font-medium text-gray-700">District</label>
          <input
            id="farmer-district"
            type="text"
            placeholder="District"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="farmer-username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            id="farmer-username"
            type="text"
            placeholder="Choose a username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="farmer-password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="farmer-password"
            type="password"
            placeholder="Choose a password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="farmer-phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            id="farmer-phone"
            type="tel"
            placeholder="Phone Number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Sign Up as Farmer
        </button>
      </form>
    </div>
    </>
  )
}

