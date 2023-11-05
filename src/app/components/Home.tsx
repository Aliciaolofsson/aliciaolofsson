import React from 'react';
import HeroSection from './HeroSection';
import About from './About';
import ProjectSection from './ProjectSection';
export default function Home() {
  return (
    <main className='flex flex-col'>
      <div className='mx-auto py-4 px-12 md:px-20'>
        <HeroSection />
        <About />
        <ProjectSection /> 
      </div>
    </main>
  );
}
