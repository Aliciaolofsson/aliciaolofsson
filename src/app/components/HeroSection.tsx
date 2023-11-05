import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='place-self-center'>
        <h1 className='text-4xl mb-4 font-extrabold sm:text-5xl lg:text-6xl'>
          <span className=' bg-gradient-to-r from-amber-300  via-purple-300 to-amber-300 text-transparent bg-clip-text'>
            Hello, I&apos;m{' '}
          </span>
          Alicia
        </h1>
        <p className='text-lg mb-6 lg:text-xl'>
          I&apos;m a junior frontend developer
        </p>
        <div>
          <button className='bg-amber-300 py-3 px-4 rounded-lg hover:bg-purple-300 w-full sm:w-auto'>
            <a
              href='https://drive.google.com/file/d/1kpttqCxchhKZI6SY6gyvFrmAZNkVTHBG/view?usp=drive_link'
              className='bg-amber-300 py-3 px-4 rounded-lg hover:bg-purple-300 text-white'
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
      <div className='w-56 h-56 place-self-center'>
        <Image
          src={'/images/favicon.ico'}
          width={300}
          height={300}
          alt={''}
        ></Image>
      </div>
    </section>
  );
}
