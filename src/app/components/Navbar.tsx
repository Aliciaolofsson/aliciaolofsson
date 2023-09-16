
import Link from 'next/link';
import React from 'react';


const Navbar: React.FC = () => {
  const navItems = [
    { label: 'About', link: '#about' },
    { label: 'Projects', link: '#projects' },
    { label: 'Contact', link: '#contact' },
  ];

  return (
    <nav id='home' className='hidden md:block '>
      <ul className='flex justify-center items-center pt-7'>
        {navItems.map((item, index) => (
          <li key={index} className='text-md font-semibold mx-5'>
            <Link href={item.link} className=''>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
