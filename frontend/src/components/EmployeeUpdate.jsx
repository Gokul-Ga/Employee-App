import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EmployeeUpdate = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`/api/employees/${id}`);
        const { name, email } = response.data;
        setName(name);
        setEmail(email);
      } catch (error) {
        console.log(error); // handle error
      }
    };

    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/employees/${id}`, { name, email });
      console.log(response.data); // handle successful employee update
    } catch (error) {
      console.log(error); // handle error
    }
  };

  return (
    <div>
      <h1>Update Employee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default EmployeeUpdate;
