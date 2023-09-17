
import { Github, Instagram, Linkedin } from 'lucide-react';
import React from 'react';

const SocialMediaComponent = () => {
  const socialMediaLinks = [
    { url: 'https://github.com/Aliciaolofsson', icon: <Github width={20} height={20}/> },
    {  url: 'https://www.linkedin.com/in/alicia-olofsson-b23b25242/', icon: <Linkedin width={20} height={20} /> },
    {  url: 'https://www.instagram.com/aliciaolofssoon', icon: <Instagram width={20} height={20} /> },
  ];

  return (
    <div>
      <ul className='flex'>
        {socialMediaLinks.map((link, index) => (
          <li key={index} className='flex mx-2 border-solid border-black border-2 rounded-lg p-1 '>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaComponent;
