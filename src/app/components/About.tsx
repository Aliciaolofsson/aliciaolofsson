import React from 'react';
import Heading from './Heading';

export default function About() {
  return (
    <div
      id='about'
      className='flex justify-center flex-col items-center py-4 px-20 md:px-96 '
    >
      <Heading titleName='About me' />
      <section className='py-16 font-semibold leading-9'>
        <div className='font-normal'>
          <p className=' lg:px-32'>
            Ever since I was young I&apos;ve been fascinated by the endless
            possibilities that computers and coding offer. It wasn&apos;t until
            about a year and a half ago that I decided to take on the challenge
            to learn how to code. My initial steps involved utilizing free
            online resources to learn the fundamentals of HTML and CSS. As I
            progressed, I enrolled in a Udemy course that introduced me to the
            dynamic world of JavaScript. With this newfound knowledge, I
            embarked on creating multipage websites, applying the skills I
            acquired.
          </p>
          <p className='my-5'>
            Soon enough, I came across react, which initially posed challenges
            but ultimately made JavaScript more comprehensible and enjoyable. I
            embarked on a series of projects, experimented with various UI
            libraries, and embraced modern development tools like Vite. Today,
            my preferred tech stack includes the dynamic duo of Tailwind CSS and
            Next.js, allowing me to create web applications that are not just
            functional but also visually engaging and user-friendly.
          </p>
        </div>
        <p className='my-5'>
          I&apos;ve learned a lot during this short period, and I&apos;m
          eagerly looking forward to launching my career in the tech industry.
        </p>
      </section>
    </div>
  );
}
