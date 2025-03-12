import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
        <div className=' bg-gray-500 p-2 sm:p-4 md:p-6'>
            <h1 className=' text-2xl'>Portfolio</h1>
            <div className=' flex md: flex-row justify-end gap-8 mt-[-2rem] '>
            <Link href='/'>Home</Link>
            <Link href='/'>Above</Link>
            <Link href='/'>Services</Link>
            <Link href='/'>Projects</Link>
            <Link href='/'>Contact</Link>
            </div>
           </div>
           
    </div>
  );
}

export default Navbar;
