// frontend/src/pages/ProjectPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://silver-happiness-jv9x5959v77cvqg-5000.app.github.dev/projects');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {projects.map(project => (
                    <li key={project._id}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectPage;
