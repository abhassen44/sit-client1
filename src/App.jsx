import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/userrole';
import FarmerSignUp from './pages/signup_farmer'; 
import ContractorSignUp from './pages/signupcontructor'; 
import LandingPage from './component/landingpage';
import Loginpage from './pages/loginpage'
import ProfilePage from './pages/profilepage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/profile" element={<ProfilePage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/farmer" element={<FarmerSignUp />} />
        <Route path="/signup/contractor" element={<ContractorSignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
