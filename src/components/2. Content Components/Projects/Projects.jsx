import React from 'react';
import './Projects.css';
import { projectData } from '../../../your_info';

const Projects = () => {

  return (
    <section id="Projects" className="projects section">
      <div className="section-container">
        <div className='name-container wow fadeInLeft' data-wow-delay='.4s'>
          <div className="section-title">
            <h2 className="wow zoomIn" data-wow-delay=".2s">
              Projects
            </h2>
          </div>
        </div>
        <div className="project-grid">
          {achievements.map((skill, index) => (
            <div className="education-card" key={index}>
              <span className='education-title'>{skill.word}</span>
              <span className='institution'>{skill.value}</span>
              <span className='year-loc'>{skill.unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
