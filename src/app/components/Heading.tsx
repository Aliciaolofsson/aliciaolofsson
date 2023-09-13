import React from 'react';

interface HeadingProps {
  titleName: string;
}

const Heading: React.FC<HeadingProps> = ({ titleName }) => {
  return (
    <div>
      <h1 className='text-md font-bold uppercase p-3 tracking-widest border-2 border-solid border-black'>
        {titleName}
      </h1>
    </div>
  );
}

export default Heading;
