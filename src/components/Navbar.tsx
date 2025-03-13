import Link from 'next/link';
import React from 'react';
// import Button from './Button';

const Navbar = () => {
  return (
    <div>
        <div className="bg-gray-600 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between">
  {/* Portfolio Title */}
  <h1 className="text-2xl text-white">Portfolio</h1>

  {/* Navigation Links */}
  <div className="flex flex-col md:flex-row justify-end gap-4 md:gap-8 text-white mt-2 md:mt-0">
    <Link href="/">Home</Link>
    <Link href="/">About</Link>
    <Link href="/">Services</Link>
    <Link href="/">Projects</Link>
    <Link href="/">Contact</Link>
  </div>
</div>
 </div>
  );
}

export default Navbar;
