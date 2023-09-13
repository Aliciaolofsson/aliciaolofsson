import React from 'react';
import SocialMedia from './SocialMedia'; // Adjust the import path
import { Github, Linkedin } from 'lucide-react';


const socialLinks = [
  { platform: <Github />, url: 'https://github.com/Aliciaolofsson' },
  { platform: <Linkedin />, url: 'https://www.linkedin.com/in/alicia-olofsson-b23b25242/' },
];

export default function Footer() {
  return (
    <div className='p-16 flex justify-between items-center'>
      <SocialMedia socialLinks={socialLinks} />
      <h1 className='font-semibold'>Desgin and code by: Alicia Olofsson</h1>

    </div>
  );
}
