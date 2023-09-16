import { ChevronUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Top() {
  return (
    <div className='flex justify-end pr-9 '>
      <Link href='/' className='fixed'>
        <ChevronUp width={30} height={30}/>
      </Link>
    </div>
  );
}
