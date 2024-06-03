// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // Add other fields as needed
});

module.exports = mongoose.model('Project', projectSchema);
