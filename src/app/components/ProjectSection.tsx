import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    id: 1,
    title: 'EquiSync',
    description: 'an app',
    image: 'images/aboutImg.svg',
    tag: ['all', 'Web'],
    gitUrl: 'https://github.com/',
    previewUrl: '/vercel.com',
  },
  {
    id: 2,
    title: 'Another Project',
    description: 'another project',
    image: 'images/heroImg.svg',
    tag: ['all', 'Web'],
    gitUrl: '/github.com',
    previewUrl: '/vercel.com',
  },
];

export default function ProjectSection() {
  return (
    <div id='projects' className='drop-shadow-xl shadow-slate-300  rounded-3xl'>
      <h2 className='font-bold text-center mb-12 text-3xl'>2.0 My Projects</h2>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            description={project.description}
            gitUrl={project.gitUrl} // Make gitUrl and previewUrl optional with a fallback value
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
}
