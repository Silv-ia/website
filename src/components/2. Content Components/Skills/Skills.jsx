import React, { useEffect, useState } from 'react';
import './Skills.css';
import WOW from 'wow.js';
import { categories } from '../../../your_info';

const Skills = () => {

    const [activeTab, setActiveTab] = useState(categories[0].name);

    const currentCategory = categories.find(
    category => category.name === activeTab
    );

    /*const [activeCategory, setActiveCategory] = useState(
        categories[0].name
    );*/

    useEffect(() => {
        new WOW().init();
    }, []);

    /*const selectedCategory = categories.find(
        category => category.name === activeCategory
    );*/

    return (
        <section id="Skills" className="skills section">
            <div className="section-container">
                <div className='name-container wow fadeInLeft' data-wow-delay='.4s'>
                    <div className="section-title">
                        <h2>
                            Skills
                        </h2>
                    </div>
                </div>
                {/* Category buttons */}
                <div className="skill-tabs">
                    {categories.map(category => (
                        <button
                            key={category.name}
                            className={`tab-btn ${
                                activeTab === category.name ? "active" : ""
                            }`}
                            onClick={() => setActiveTab(category.name)}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>

                {/* Skills */}
                <div className="skills-grid">
                    {currentCategory.skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <i className={skill.icon}></i>
                            <span>{skill.title}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
