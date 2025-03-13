import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className=''>
        <div className=" bg-gray-800 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between">
          {/* logo */}
          <img className=" w-10 h-10 rounded-full ml-6" src="logo.png" alt="" />
  {/* Portfolio Title */}
  {/* <h1 className="text-2xl text-white">Portfolio</h1> */}

  {/* Navigation Links */}
  <div className="flex flex-col md:flex-row justify-end gap-4 md:gap-8 text-white mt-2 md:mt-0">
    <Link href="/" className='cursor-pointer hover:text-blue-400 transition duration-300 '>Home</Link>
    <Link href="#about" className='cursor-pointer hover:text-blue-400 transition duration-300 '>About</Link>
    <Link href="/">Services</Link>
    <Link href="/">Projects</Link>
    <Link href="/">Contact</Link>
  </div>
</div>
 </div>
  );
}

export default Navbar;
