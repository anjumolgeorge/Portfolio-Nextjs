import Link from 'next/link';
import React from 'react';
import Menu from './Menu';

const Navbar = () => {
  return (
    //navbar stuck on the top
    <div className="fixed top-0 left-0 w-full z-50">

      <div className="bg-gradient-to-r from-gray-400 via-gray-700 to-gray-600 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between shadow-lg">
        {/* logo */}
        <img className="w-10 h-10 rounded-full ml-6" src="logo.png" alt="Logo" />
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Menu />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-white">
          <Link href="/" className="cursor-pointer hover:text-blue-400 transition duration-300">Home</Link>
          <Link href="#about" className="cursor-pointer hover:text-blue-400 transition duration-300">About</Link>
          <Link href="#services" className="cursor-pointer hover:text-blue-400 transition duration-300">Services</Link>
          <Link href="#projects" className="cursor-pointer hover:text-blue-400 transition duration-300">Projects</Link>
          <Link href="#contact" className="cursor-pointer hover:text-blue-400 transition duration-300">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
