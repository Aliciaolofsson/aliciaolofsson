import React from 'react';
import HeroSection from './HeroSection';
import About from './About';
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <div className='container mx-auto py-4 px-12 md:px-12'>
        <HeroSection />
        <About />
      </div>
    </main>
  );
}
