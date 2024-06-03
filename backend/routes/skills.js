// routes/skills.js
const express = require('express');
const router = express.Router();

// Import Skill model
const Skill = require('../models/Skill');

// GET all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new skill
router.post('/', async (req, res) => {
  const skill = new Skill({
    title: req.body.title,
    description: req.body.description,
    // Add other fields as needed
  });
  try {
    const newSkill = await skill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add routes for updating and deleting skills as needed

module.exports = router;
