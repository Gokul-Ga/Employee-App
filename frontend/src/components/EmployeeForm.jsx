import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/employees', { name, email });
      // Do any necessary actions after successful form submission
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  return (
    <div>
      <h1>Employee Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
