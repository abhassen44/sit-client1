import React from "react"

export default function ContractorSignUp() {
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

      <div className="space-y-6 max-w-md mx-auto p-6 mt-10  bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-green-800">Sign Up as Contractor</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="contractor-org-id" className="block text-sm font-medium text-gray-700">Organization ID</label>
            <input
              id="contractor-org-id"
              type="text"
              placeholder="Organization ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contractor-org-name" className="block text-sm font-medium text-gray-700">Organization Name</label>
            <input
              id="contractor-org-name"
              type="text"
              placeholder="Organization Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contractor-successful-transactions" className="block text-sm font-medium text-gray-700">Number of Successful Transactions</label>
            <input
              id="contractor-successful-transactions"
              type="number"
              placeholder="Successful Transactions"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contractor-defaults" className="block text-sm font-medium text-gray-700">Number of Defaults</label>
            <input
              id="contractor-defaults"
              type="number"
              placeholder="Number of Defaults"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contractor-location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              id="contractor-location"
              type="text"
              placeholder="Location"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contractor-email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="contractor-email"
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contractor-gst" className="block text-sm font-medium text-gray-700">GST Number</label>
            <input
              id="contractor-gst"
              type="text"
              placeholder="GST Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contractor-username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="contractor-username"
              type="text"
              placeholder="Choose a username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contractor-password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="contractor-password"
              type="password"
              placeholder="Choose a password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contractor-phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              id="contractor-phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Sign Up as Contractor
          </button>
        </form>
      </div>
    </>
    )
  }