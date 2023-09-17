'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import SocialMedia from './SocialMedia';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileNav: React.FC = () => {
  const navItems = [
    { label: 'About', link: '#about' },
    { label: 'Projects', link: '#projects' },
    { label: 'Contact', link: '#contact' },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className='flex my-4 justify-end'>
      <div className='md:hidden'>
        <button
          onClick={toggleMobileMenu}
          className='block text-gray-800 hover:text-gray-600 focus:outline-none mr-8 mt-4'
        >
          <Menu width={35} height={35} />
        </button>
      </div>
      <motion.div className='div'>
        <div
          className={`${
            mobileMenuOpen
              ? 'fixed top-20 left-0 w-full h-full bg-white z-50 flex flex-col'
              : 'hidden'
          }`}
        >
          <ul className='text-center h-full flex items-center my-32 flex-col relative'>
            {navItems.map((item, index) => (
              <li key={index} className='text-xl font-semibold my-7 '>
                <Link href={item.link} onClick={closeMobileMenu} className=''>
                  {item.label}
                </Link>
              </li>
            ))}
            <div className='my-40'>
              <SocialMedia />
            </div>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
