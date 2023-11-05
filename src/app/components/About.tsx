'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'skills',
    id: 'skills',
    content: (
      <ul>
        <li>React</li>
        <li>Css</li>
        <li>Html</li>
      </ul>
    ),
  },
  {
    title: 'education',
    id: 'education',
    content: (
      <ul>
        <li>Codecademy</li>
      </ul>
    ),
  },
];

export default function About() {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id='about'>
      <div className=' md:grid grid-cols-2 gap-8 items-center py-8 px-4 sm:py-16 xl:gap-16 xl:px-16'>
        <Image
          src={'/images/aboutImg.svg'}
          width={300}
          height={300}
          alt={'about me'}
        ></Image>
        <div className='mt-4 md:mt-0 flex flex-col h-full'>
          <h2 className='text-3xl font-bold mb-4'>1.0 About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton
              active={tab === 'skills'}
              selectTab={() => handleTabChange('skills')}
            >
              Skills
            </TabButton>
            <TabButton
              active={tab === 'education'}
              selectTab={() => handleTabChange('education')}
            >
              Education
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
