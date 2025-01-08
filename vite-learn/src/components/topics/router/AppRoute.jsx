import React from 'react';
import Profile from './Profile';
import Abouts from './Abouts';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function AppRoute() {
  return (
    <Router>
    
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
     
      <Routes>
        <Route path="/about" element={<Abouts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;


