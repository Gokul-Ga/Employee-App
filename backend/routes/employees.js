// const express = require('express');
// const router = express.Router();
// const employeeController = require('../controllers/employeeController');
// const authMiddleware = require('../middlewares/authMiddleware');

// router.get('/', authMiddleware.protect, employeeController.getAllEmployees);
// router.post('/', authMiddleware.protect, employeeController.createEmployee);
// router.put('/:id', authMiddleware.protect, employeeController.updateEmployee);
// router.delete('/:id', authMiddleware.protect, employeeController.deleteEmployee);

// module.exports = router;









// const express = require('express');
// const router = express.Router();
// const employeeController = require('../controllers/employeeController');
// const authMiddleware = require('../middlewares/authMiddleware');

// router.get('/', authMiddleware.protect, employeeController.getAllEmployees);
// router.post('/', authMiddleware.protect, employeeController.createEmployee);
// router.put('/:id', authMiddleware.protect, employeeController.updateEmployee);
// router.delete('/:id', authMiddleware.protect, employeeController.deleteEmployee);

// module.exports = router;










const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/', employeeController.getAllEmployees);
router.post('/', employeeController.createEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;




















// const express = require('express');
// const router = express.Router();
// const employeeController = require('../controllers/employeeController');
// const authMiddleware = require('../middlewares/authMiddleware');

// router.get('/', authMiddleware.protect, employeeController.getAllEmployees);
// router.post('/', authMiddleware.protect, employeeController.createEmployee);
// router.put('/:id', authMiddleware.protect, employeeController.updateEmployee);
// router.delete('/:id', authMiddleware.protect, employeeController.deleteEmployee);

// module.exports = router;
















// // const express = require('express');
// // const router = express.Router();
// // const employeeController = require('../controllers/employeeController');

// // router.get('/', employeeController.getAllEmployees);
// // router.post('/', employeeController.createEmployee);
// // router.put('/:id', employeeController.updateEmployee);
// // router.delete('/:id', employeeController.deleteEmployee);

// // module.exports = router;








// // const express = require('express');
// // const router = express.Router();
// // const Employee = require('../models/Employee');

// // // Get all employees
// // router.get('/', async (req, res) => {
// //   try {
// //     const employees = await Employee.find();
// //     res.json(employees);
// //   } catch (error) {
// //     console.error('Error fetching employees:', error);
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // });

// // // Create a new employee
// // router.post('/', async (req, res) => {
// //   const { name, email } = req.body;

// //   try {
// //     const employee = new Employee({
// //       name,
// //       email,
// //     });
// //     await employee.save();
// //     res.status(201).json(employee);
// //   } catch (error) {
// //     console.error('Error creating employee:', error);
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // });

// // // Update an employee
// // router.put('/:id', async (req, res) => {
// //   const { name, email } = req.body;
// //   const { id } = req.params;

// //   try {
// //     const employee = await Employee.findByIdAndUpdate(id, { name, email }, { new: true });
// //     res.json(employee);
// //   } catch (error) {
// //     console.error('Error updating employee:', error);
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // });

// // // Delete an employee
// // router.delete('/:id', async (req, res) => {
// //   const { id } = req.params;

// //   try {
// //     await Employee.findByIdAndRemove(id);
// //     res.json({ message: 'Employee deleted' });
// //   } catch (error) {
// //     console.error('Error deleting employee:', error);
// //     res.status(500).json({ error: 'Server error' });
// //   }
// // });

// // module.exports = router;
