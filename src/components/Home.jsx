import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Portfolio from './Portfolio';

const Home = () => {
  return(
      <div className='home' id='home'>
          <Banner />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Portfolio />
          <Contact />
      </div>
  );
}

export default Home;
