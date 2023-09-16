import React from 'react';
import ProjectCard from './ProjectCard';
import Underline from './Underline';
import Heading from './Heading';

interface Project {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  codeUrl: string;
  demoUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    imageUrl: '/images/EQicon.png',
    name: 'EquiSync',
    description:
      'An app for the equestrian community where all trainings are gathered in one place',
    codeUrl: '',
    demoUrl: 'ko',
  },
  {
    id: 2, // Changed id to 2 for the second project
    imageUrl: '/images/favicon.ico',
    name: 'Linktree',
    description: 'My own style of linktree',
    codeUrl: 'hi',
    demoUrl: 'ko',
  },
];

const App: React.FC = () => {
  return (
    <div id='projects' className='flex justify-center items-center flex-col bg-amber-100 py-14'>
      <Heading titleName='Projects' />
      <div className='my-10 md:flex'>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default App;
