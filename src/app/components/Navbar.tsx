'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';

const navItems = [
  { label: 'About', link: '#about' },
  { label: 'Projects', link: '#projects' },
  { label: 'Contact', link: '#contact' },
];

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='p-5 md:p-0'>
      <div className='flex justify-between items-center md:p-5'>
        <Link href={'/'}>
          <Image
            src={'/images/favicon.ico'}
            alt={'AO'}
            width={60}
            height={60}
          />
        </Link>
        <ul className='hidden md:flex justify-center items-center'>
          {navItems.map((item, index) => (
            <li
              key={index}
              className='text-md font-semibold mx-3 hover:text-purple-300'
            >
              <NavLink href={item.link} title={item.label} />
            </li>
          ))}
        </ul>
        <div className='mobile-menu block md:hidden'>
          <button
            onClick={() => {
              setNavbarOpen(!navbarOpen); // Toggle the state
            }}
            className='flex items-center p-3'
          >
            {navbarOpen ? (
              <X width={40} height={40} />
            ) : (
              <Menu width={40} height={40} />
            )}
          </button>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navItems} /> : null}
    </nav>
  );
};

export default Navbar;
