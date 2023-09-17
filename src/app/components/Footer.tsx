import React from 'react';
import SocialMedia from './SocialMedia'; // Adjust the import path


export default function Footer() {
  return (
    <div className='p-16 flex items-center bg-indigo-200'>
      <SocialMedia />
      <h1 className='font-semibold'>Desgin and code by: Alicia Olofsson</h1>

    </div>
  );
}
