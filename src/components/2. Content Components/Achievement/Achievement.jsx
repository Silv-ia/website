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
    <section id='Education' className="our-achievement section">
      <div className='section-container'>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
              <div className="title">
                <h2>Education</h2>
              </div>
            </div>
          </div>
          <div className="education-grid">
            {achievements.map((skill, index) => (
                <div className="education-card" key={index}>
                    <span className='education-title'>{skill.word}</span>
                    <span className='institution'>{skill.value}</span>
                    <span className='year-loc'>{skill.unit}</span>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
