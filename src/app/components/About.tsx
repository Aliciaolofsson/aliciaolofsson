'use client';
import { useState, useTransition } from 'react';
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
    title: 'resources',
    id: 'resources',
    content: (
      <ul>
        <li>Codecademy</li>
        <li>FreeCodeCamp</li>
        <li>Udemy</li>
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
            I&apos;m a self-taught Frontend Developer with a passion for technology
            and code. What started as a hobby has evolved into a thriving
            journey towards transforming my enthusiasm for web development into
            a fulfilling career.
          </p>
          <br />
          <p>
            My journey is all about turning my passion into a profession. I
            aspire to pursue a professional career in the field and have
            exciting plans to take the next step in my education. Starting next
            fall, I&apos;ll be working towards a Bachelor&apos;s degree in Computer
            Science to further refine my skills and knowledge.
          </p>
          <br />
          <p>
            In the meantime, I&apos;m actively building my portfolio and gaining
            hands-on experience in web development. My portfolio represents the
            practical experience I&apos;ve gained in building websites and solving
            real-world coding challenges.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton
              active={tab === 'skills'}
              selectTab={() => handleTabChange('skills')}
            >
              Skills
            </TabButton>
            <TabButton
              active={tab === 'resources'}
              selectTab={() => handleTabChange('resources')}
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
