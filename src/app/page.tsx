import React from 'react';
import Home from './home/page';
import Projects from './projects/page';
import About from './about/page';
import ExtraSection from './components/ExtraSection';

export default function aliciaolofsson() {
  return (
    <div>
      <Home />
      <ExtraSection />
      <About />
      <Projects />
    </div>
  );
}
