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
          {projectData.map((proj, index) => (
            <div className="project-card" key={index}>
              <span className='proj-title'>{proj.title}</span>
              <span className='description'>{proj.description}</span>
              <span className='git-link'>{proj.url}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
