import React from 'react';

export default function Home() {
  const firstname = ['l', 'i', 'c', 'i', 'a'];

  const lastname = ['l', 'o', 'f', 's', 's', 'o', 'n'];

  return (
    <div>
      <div className='flex items-center justify-center flex-col py-32'>
        <h2 className='uppercase font-bold lg:text-xl tracking-widest mb-14 '>
          Junior developer
        </h2>
        <div className='flex-col uppercase tracking-wider flex items-center bg-slate-900 animate-text md:flex-row text-7xl font-bold bg-gradient-to-r from-amber-300  via-purple-300  to-amber-300 text-transparent bg-clip-text'>
          <h1 className='text-4xl mb-3 md:text-6xl mr-8'>
            <span className='text-6xl md:text-9xl'>A</span>
            licia
          </h1>
          <h1 className='text-4xl md:text-6xl'>
            <span className='text-6xl md:text-9xl'>O</span>
            lofsson
          </h1>
        </div>
      </div>
    </div>
  );
}
