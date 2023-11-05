import React from 'react';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
}

export default function ProjectCard({ imgUrl, title, description }: ProjectCardProps) {
  return (
    <div>
      <div
        className='h-52 md:h-72'
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
      ></div>
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
