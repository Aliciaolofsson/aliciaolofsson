import React from 'react';
import HeroSection from './HeroSection';
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <div className='container mx-auto py-4 px-12 md:p-0'>
        <HeroSection />
      </div>
    </main>
  );
}
