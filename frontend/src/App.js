import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import axios from 'axios';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get('/api/checkLoginStatus');
      setIsLoggedIn(response.data.isLoggedIn);
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('/api/login', {
        username,
        password,
      });
      setIsLoggedIn(true);
      // Store the token in local storage or cookies if necessary
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Clear the token from local storage or cookies if necessary
  };

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employees/create" element={<EmployeeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
