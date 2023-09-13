import React from 'react';

interface SocialMediaProps {
  socialLinks: {
    platform: React.ReactNode;
    url: string;
  }[];
  
}

const SocialMedia: React.FC<SocialMediaProps> = ({ socialLinks }) => {
    
  return (
    <div>
      <ul className='flex items-center'>
        {socialLinks.map((link, index) => (
          <li key={index} className='border-2 border-solid border-black p-1 rounded-lg mx-2'>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {link.platform}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
