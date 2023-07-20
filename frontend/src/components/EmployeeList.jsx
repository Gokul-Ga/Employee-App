import React, { useEffect, useState } from 'react';
import axios from 'axios';
import App from '../App.css'

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('/api/employees');
      setEmployees(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  return (
    <div className='App'>
      <h1>Employee List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee._id}>
              {employee.name} - {employee.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
