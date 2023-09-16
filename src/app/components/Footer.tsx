import React from 'react';
import SocialMedia from './SocialMedia'; // Adjust the import path
import { Github, Linkedin } from 'lucide-react';


export default function Footer() {
  return (
    <div className='p-16 flex justify-between items-center'>
      <SocialMedia />
      <h1 className='font-semibold'>Desgin and code by: Alicia Olofsson</h1>

    </div>
  );
}
