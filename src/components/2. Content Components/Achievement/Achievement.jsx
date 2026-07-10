import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Achievement.css';
import { achievements } from '../../../your_info';

const Achievement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <>
      <section id='Education' className="our-achievement section">
        <div className='section-container'>
          <div className='name-container wow fadeInLeft' data-wow-delay='.4s'>
            <div className="title">
              <h2>Education</h2>
            </div>
          </div>
          <div className="education-grid">
            {achievements.map((skill, index) => (
              <div className="education-card" key={index}>
                  <h3 className='proj-title'>{skill.word}</h3>
                  <span className='institution'>{skill.value}</span>
                  <span className='year-loc'>{skill.unit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='Achievements' className='achievement-section'>
        
      </section>
    </>
  );
};

export default Achievement;
