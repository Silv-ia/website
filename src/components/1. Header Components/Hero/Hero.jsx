import React from 'react';
import { name, profileImage, socialProfiles } from '../../../your_info';
import Navbar from '../Navbar/Navbar';
import Typewriter from '../Typewriter/Typewriter';
import './Hero.css';
import { backgroundImageUrl } from '../../../your_info';


const Hero = () => {
  const { firstname, lastname } = name;

  const heroStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  return (
    <>
      <section id='Home' className='hero-area' style={heroStyle}>
        <div className='section-container'>
          <div className='row align-items-center'>
            <div className='hero-content'>
              <div className='name-container wow fadeInLeft' data-wow-delay='.4s'>
                <name>
                  <h1 className='first-name'>{firstname}</h1>
                  <h1 className='last-name'>{lastname}</h1>
                </name>
              </div>

              <img
                src={profileImage}
                alt="Portrait"
                className="profile-image"
              />

              <div className='typewriter-container wow fadeInLeft' data-wow-delay='.6s'>
                <Typewriter />
        
              </div>

              <div className='btn-pos'>
                {socialProfiles.map((profile, index) => (
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='btn wow fadeInLeft'
                    data-wow-delay={`${index * 0.2 + 0.8}s`}
                    key={index}
                  >
                    {profile.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* About Me Section */}
      <section id='About' className="about-section">
        <div className="about-content">
          <div className='section-container'>
            <div className='name-container wow fadeInLeft' data-wow-delay='.4s'>
              <div className="section-title">
                <h3>
                    About
                </h3>
              </div>
            </div>
            <div className="terminal-window">
              <div className="terminal-header">
                <span>bash</span>
              </div>

              <div className="hero-terminal">

                <div className="terminal-line">
                  <span className="prompt">guest@laira:~$ </span>
                  <span className='cmd'>whoami</span>
                </div>

                <p>My name is Laira and I am a Master's student in Cybersecurity. 
                  I specialise in digital forensics and offensive security, in particular, 
                  network and file forensics. 
                </p>
                <p>I am a dancer who likes learning languages and solving puzzles.</p>

                <div className="terminal-line">
                  <span className="prompt">guest@laira:~$ </span>
                  <span className='cmd'>cat education.txt</span>
                  <span></span>
                </div>

                <p>MSc Cybersecurity</p>
                <p>BSc Information Technology</p>

                <div className="terminal-line">
                  <span className="prompt">guest@laira:~$ </span>
                  <span className='cmd'>ls interests</span>
                  <span></span>
                </div>

                <p>
                  Digital Forensics • Offensive Security • Machine Learning
                </p>

                <div className="terminal-line">
                  <span className="prompt">guest@laira:~$ </span>
                  <span className="cursor"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
