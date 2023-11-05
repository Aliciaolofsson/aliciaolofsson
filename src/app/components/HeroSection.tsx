import React from 'react';
import Image from 'next/image';
import SocialMedia from './SocialMedia';

export default function HeroSection() {
  return (
    <section className='grid grid-cols-1 items-center md:grid-cols-2 gap-4'>
      <div className=''>
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
          <SocialMedia />
        </div>
      </div>
      <div className='w-64 h-64 place-self-center'>
        <Image
          src={'/images/heroImg.svg'}
          width={300}
          height={300}
          alt={''}
        ></Image>
      </div>
    </section>
  );
}
