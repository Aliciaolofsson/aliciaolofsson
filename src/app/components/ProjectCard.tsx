import React from 'react';
import Image from 'next/image';
import { Code2, MousePointer2 } from 'lucide-react';

interface Project {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  codeUrl: string;
  demoUrl: string;
}

const ProjectCard: React.FC<Project> = ({
  id,
  imageUrl,
  name,
  description,
  codeUrl,
  demoUrl,
}) => {
  return (
    <div className='grid p-5 bg-white rounded-lg my-6 items-center justify-center shadow-md mx-3'>
      <Image
        src={imageUrl}
        alt={name}
        className='rounded-lg'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        width={250}
        height={250}
      />
      <h1 className='font-semibold py-3'>{name}</h1>
      <p className='w-52 h-32 py-1'>{description}</p>
      <div className='flex items-center mt-auto'>
        <a href={codeUrl}>
          <button className='px-3 py-2 text-xs sm:text-sm border-solid border border-black rounded-lg mr-3 hover:bg-amber-100'>
            <div className='flex flex-row items-center'>
              <Code2 height={20} width={20}/>
              <h2 className='pl-2'>Code</h2>
            </div>
          </button>
        </a>
        <a href={demoUrl}>
          <button className='px-3 py-2 text-xs border-solid border border-black rounded-lg hover:bg-amber-100 sm:text-sm'>
              <h2>Live demo</h2>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
