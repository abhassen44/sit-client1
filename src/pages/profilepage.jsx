import React, { useState } from 'react';

export default function ProfilePage() {
  const [userType, setUserType] = useState('farmer');
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    phone: '+1234567890',
    // Farmer-specific fields
    state: 'California',
    district: 'Central Valley',
    totalFarmland: 100,
    aadharNumber: '1234-5678-9012',
    // Contractor-specific fields
    organizationId: 'CONT123',
    organizationName: 'Agri Corp Ltd.',
    successfulTransactions: 50,
    defaults: 0,
    location: 'San Francisco',
    gstNumber: 'GST1234567890',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile data submitted:', profileData);
    // Here you would typically send the data to a server
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <nav className="bg-green-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-semibold">FarmConnect</a>
          <button className="px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2">
            Logout
          </button>
        </div>
      </nav>

      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">User Profile</h1>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 p-6 bg-green-50 border-r border-gray-200">
              <div className="text-center">
                <img
                  src="/placeholder.svg"
                  alt="Profile Picture"
                  className="w-32 h-32 rounded-full mx-auto mb-4 border border-gray-200 shadow-sm"
                />
                <button className="mt-4 bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2">
                  Change Picture
                </button>
              </div>
            </div>
            <div className="md:w-2/3 p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={profileData.username}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  {userType === 'farmer' && (
                    <>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={profileData.state}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
                        <input
                          type="text"
                          id="district"
                          name="district"
                          value={profileData.district}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="totalFarmland" className="block text-sm font-medium text-gray-700">Total Farmland (acres)</label>
                        <input
                          type="number"
                          id="totalFarmland"
                          name="totalFarmland"
                          value={profileData.totalFarmland}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="aadharNumber" className="block text-sm font-medium text-gray-700">Aadhar Number</label>
                        <input
                          type="text"
                          id="aadharNumber"
                          name="aadharNumber"
                          value={profileData.aadharNumber}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    </>
                  )}
                  {userType === 'contractor' && (
                    <>
                      <div>
                        <label htmlFor="organizationId" className="block text-sm font-medium text-gray-700">Organization ID</label>
                        <input
                          type="text"
                          id="organizationId"
                          name="organizationId"
                          value={profileData.organizationId}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700">Organization Name</label>
                        <input
                          type="text"
                          id="organizationName"
                          name="organizationName"
                          value={profileData.organizationName}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="successfulTransactions" className="block text-sm font-medium text-gray-700">Successful Transactions</label>
                        <input
                          type="number"
                          id="successfulTransactions"
                          name="successfulTransactions"
                          value={profileData.successfulTransactions}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="defaults" className="block text-sm font-medium text-gray-700">Defaults</label>
                        <input
                          type="number"
                          id="defaults"
                          name="defaults"
                          value={profileData.defaults}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={profileData.location}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-700">GST Number</label>
                        <input
                          type="text"
                          id="gstNumber"
                          name="gstNumber"
                          value={profileData.gstNumber}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    </>
                  )}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 transition-all"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-green-600 text-white p-4 text-center">
        © 2024 FarmConnect
      </footer>
    </div>
  )
}
