// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Load environment variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://root:root@cluster0.lsejrc8.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
const projectsRouter = require('./routes/projects');
const skillsRouter = require('./routes/skills');
const contactRouter = require('./routes/contact');

app.use('/projects', projectsRouter);
app.use('/skills', skillsRouter);
app.use('/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
