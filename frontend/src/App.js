// frontend/src/App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage.js';
import ProjectPage from './pages/ProjectPage';
import SkillPage from './pages/SkillPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/skills" element={<SkillPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
