import React from 'react';
import Hero from '../Components/Hero';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home