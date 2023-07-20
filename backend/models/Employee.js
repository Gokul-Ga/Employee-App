const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true,
  },
  designation: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});
employeeSchema.index({ name: 1 }, { unique: true });
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
