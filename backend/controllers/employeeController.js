// const Employee = require('../models/Employee');

// // Get all employees
// exports.getAllEmployees = async (req, res) => {
//   try {
//     const employees = await Employee.find();
//     res.json(employees);
//   } catch (error) {
//     console.error('Error fetching employees:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Create a new employee
// exports.createEmployee = async (req, res) => {
//   const { name, designation, location, salary } = req.body;

//   try {
//     const employee = new Employee({
//       name,
//       designation,
//       location,
//       salary,
//     });
//     await employee.save();
//     res.status(201).json(employee);
//   } catch (error) {
//     console.error('Error creating employee:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Update an employee
// exports.updateEmployee = async (req, res) => {
//   const { name, designation, location, salary } = req.body;
//   const { id } = req.params;

//   try {
//     const employee = await Employee.findByIdAndUpdate(
//       id,
//       { name, designation, location, salary },
//       { new: true }
//     );
//     res.json(employee);
//   } catch (error) {
//     console.error('Error updating employee:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };

// // Delete an employee
// exports.deleteEmployee = async (req, res) => {
//   const { id } = req.params;

//   try {
//     await Employee.findByIdAndRemove(id);
//     res.json({ message: 'Employee deleted' });
//   } catch (error) {
//     console.error('Error deleting employee:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// };
























const Employee = require('../models/Employee');

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new employee
exports.createEmployee = async (req, res) => {
  const { name, designation, location, salary } = req.body;

  try {
    const employee = new Employee({
      name,
      designation,
      location,
      salary,
    });
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error (e.g., email already exists)
      res.status(400).json({ error: 'Employee with the same email already exists' });
    } else {
      console.error('Error creating employee:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
};

// Update an employee
exports.updateEmployee = async (req, res) => {
  const { name, designation, location, salary } = req.body;
  const { id } = req.params;

  try {
    const employee = await Employee.findByIdAndUpdate(
      id,
      { name, designation, location, salary },
      { new: true }
    );
    res.json(employee);
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete an employee
exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    await Employee.findByIdAndRemove(id);
    res.json({ message: 'Employee deleted' });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
