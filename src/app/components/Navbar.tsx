import Link from 'next/link';
import React from 'react';
import SocialMedia from './SocialMedia';


const NavBar: React.FC = () => {
  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Projects', link: '/projects' },
    { label: 'Contact', link: '/contact' },
  ];
  return (
    <nav className='flex justify-center my-10'>
      <ul className='flex justify-evenly '>
        <SocialMedia socialLinks={[]} />
        {navItems.map((item, index) => (
          <li key={index} className='flex text-lg font-semibold mx-3'>
            <Link className='' href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
