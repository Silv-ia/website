import React, { useState, useEffect } from 'react';

// 1. Header Components
import Navbar from './components/1. Header Components/Navbar/Navbar';
import Hero from './components/1. Header Components/Hero/Hero';

// 2. Content Components
import Skills from './components/2. Content Components/Skills/Skills';
import Achievement from './components/2. Content Components/Achievement/Achievement';
import Projects from './components/2. Content Components/Projects/Projects';


// 3. Footer Component
import AboutMe from './components/3. Footer Components/AboutMe/AboutMe';

// 4. Utility Components
import Spinner from './components/4. Utility Components/Spinner/Spinner';
import { name } from './your_info';
import ScrollToTopButton from './components/4. Utility Components/ScrollToTopButton/ScrollToTopButton';


function App() {
  const [loading, setLoading] = useState(true);


  // Spinner, load page, timeout
  useEffect(() => {
    //document.title = `${name.firstname} ${name.lastname}`;
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Skills />
          <ScrollToTopButton />
          <Achievement />
          <Projects />
          <AboutMe />
          
        </>
      )}
    </>
  );
}

export default App;


