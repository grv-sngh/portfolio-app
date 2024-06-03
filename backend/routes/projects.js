// routes/projects.js
const express = require('express');
const router = express.Router();

// Import Project model
const Project = require('../models/Project');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new project
router.post('/', async (req, res) => {
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    // Add other fields as needed
  });
  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add routes for updating and deleting projects as needed

module.exports = router;
