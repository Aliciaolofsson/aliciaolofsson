import React from 'react';
import Heading from '../components/Heading';

export default function About() {
  return (
    <div className='flex justify-center flex-col items-center p-5 px-20  '>
      <Heading titleName='About me' />
      <section className='lg:px-24 py-16 '>
        <p className='font-semibold leading-9'>
          My interest in computers and programming have always been there since
          I was little but it wasn&apos;t until about one and a half year ago
          that I started to learn coding. I started using free resources on the
          internet and learned the basics of html and css. I later did a udemy
          course which introduced me to javascript and from that I created a few
          multipage websites. After taking the course and reading about common
          frameworks, I of course ran into React which was a bit tricky at first
          but really made javascript a whole lot easier to understand. I made
          some projects with vite and experimented with a couple of different
          ui-libraries. As of today, I prefer to use tailwindcss together with
          with Next JS.
        </p>
      </section>
    </div>
  );
}
