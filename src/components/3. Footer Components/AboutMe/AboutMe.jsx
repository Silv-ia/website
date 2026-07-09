import React from 'react';
import './AboutMe.css';
import ContactMe from '../ContactMe/ContactMe';
import { aboutMeText } from '../../../your_info';

const AboutMe = () => {
  const { infotext , power_slogan } = aboutMeText;
  return (
    <section id="Footer" className="section About">
      <div className="section-container">
        <footer className="footer">
          <span>© 2026 laira</span>
          <span className="muted"> · MIT licensed base</span>
        </footer>
      </div>
    </section>
  );
};

export default AboutMe;