import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Underline from '../components/Underline';
import Heading from '../components/Heading';

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
    <div className='flex justify-center items-center flex-col bg-amber-100 py-14'>
      <Heading titleName='Projects' />
      <div className='my-10 lg:flex'>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default App;
