// frontend/src/pages/SkillPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SkillPage = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await axios.get('https://silver-happiness-jv9x5959v77cvqg-5000.app.github.dev/skills');
                setSkills(response.data);
            } catch (error) {
                console.error('Error fetching skills:', error);
            }
        };

        fetchSkills();
    }, []);

    return (
        <div>
            <h2>Skills</h2>
            <ul>
                {skills.map(skill => (
                    <li key={skill._id}>
                        <h2>{skill.title}</h2>
                        <p>{skill.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillPage;
