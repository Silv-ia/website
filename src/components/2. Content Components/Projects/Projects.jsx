import React from 'react';
import './Projects.css';
import { projectData, awardData } from '../../../your_info';
import { FaGithub, FaGlobe } from "react-icons/fa";

const Projects = () => {

  return (
    <>
      <section id="Projects" className="projects section">
        <div className="section-container">
          <div className='name-container wow fadeInLeft' data-wow-delay='.4s'>
            <div className="section-title">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="project-grid">
            {projectData.map((proj, index) => (
              <div className="project-card" key={index}>
                <div className="project-header">
                  <h3 className="proj-title">{proj.title}</h3>

                  <div className="project-links">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noreferrer">
                        <FaGithub />
                      </a>
                    )}

                    {proj.website && (
                      <a href={proj.website} target="_blank" rel="noreferrer">
                        <FaGlobe />
                      </a>
                    )}
                  </div>
                </div>

                <span className='description'>{proj.description}</span>
                <div className="project-skills">
                  {proj.skills.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="Awards" className="awards section">
        <div className='section-container'>
          <div className='name-container wow fadeInLeft' data-wow-delay='.4s'>
            <div className="title">
              <h2>Awards</h2>
            </div>
          </div>
          <div className="education-grid">
            {awardData.map((skill, index) => (
              <div className="education-card" key={index}>
                  <span className='education-title'>{skill.title}</span>
                  <span className='description-data'>{skill.description}</span>
                  <span className='year-loc'>{skill.date}</span>

                  <div className='project-links'>
                    {skill.link && (
                      <a href={skill.link} target="_blank" rel="noreferrer">
                        <FaGlobe />
                      </a>
                    )}
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
