"use client"
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-[150rem] top-0 z-50 ml-[-30rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/home" className="text-gray-800 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
             </Link>
              <Link href="/about" className="text-gray-800 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/skills" className="text-gray-800 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Skills
              </Link>
              <Link href="/contact" className="text-gray-800 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
         
        </div>
      </div>
    
    </nav>
  );
}

export default Nav;

