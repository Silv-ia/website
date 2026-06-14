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
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h3 className="wow zoomIn" data-wow-delay=".2s">
                                Skills
                            </h3>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s">
                            Exploring and Expanding My area of focus
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">
                            A diverse set of skills and technologies I have acquired to develop impactful solutions
                            </p>
                        </div>
                    </div>
                </div>
                {/* Category buttons */}
                <div className="skill-tabs">
                    {categories.map(category => (
                        <button
                            key={category.name}
                            className={`tab-btn ${
                                activeTab === category.name
                                    ? 'active'
                                    : ''
                            }`}
                            onClick={() =>
                                setActiveTab(category.name)
                            }
                        >
                            {category.title}
                        </button>
                    ))}
                </div>

                {/* Selected category info */}
                <div className="category-description">
                    <h3>{currentCategory.title}</h3>
                    <p>{currentCategory.description}</p>
                </div>

                {/* Skills */}
                <div className="skills-grid">
                    {currentCategory.skills.map((skill, index) => (
                        <div className="skill-box" key={index}>
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
