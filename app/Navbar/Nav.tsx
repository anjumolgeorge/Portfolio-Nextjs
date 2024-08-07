import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-[150rem] top-0 z-50 ml-[-30rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Uncomment and replace with your logo if needed */}
            {/* <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white">
              Logo
            </a> */}
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-800 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-800 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#services" className="text-gray-800 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </a>
              <a href="#contact" className="text-gray-800 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 dark:text-white hover:text-blue-600 focus:outline-none">
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-800 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#about" className="block text-gray-800 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#services" className="block text-gray-800 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
              Services
            </a>
            <a href="#contact" className="block text-gray-800 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav
