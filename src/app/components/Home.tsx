import React from 'react';

export default function Home() {
  const firstname = ['l', 'i', 'c', 'i', 'a'];

  const lastname = ['l', 'o', 'f', 's', 's', 'o', 'n'];

  return (
    <div>
      <div className='flex items-center justify-center flex-col p-32'>
        <h2 className='uppercase font-bold lg:text-xl tracking-widest mb-14 '>
          Junior developer
        </h2>
        <div className='uppercase flex items-center bg-slate-900 animate-text md:text-7xl font-bold bg-gradient-to-r from-amber-300  via-purple-300  to-amber-300 text-transparent bg-clip-text'>
          <h1 className='text-9xl'>A</h1>
          {firstname.map((firstName, index) => (
            <h1 className='font-bold ' key={index}>
              {firstName}
            </h1>
          ))}
          <span>&nbsp;</span>
          <h1 className='text-9xl'>O</h1>
          {lastname.map((lastName, index) => (
            <h1 key={index}>{lastName}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}
