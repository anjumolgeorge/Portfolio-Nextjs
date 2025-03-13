

import React from 'react';
import Button from './Button';
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



const First = () => {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-between p-10 md:p-20">
      {/* Floating Button */}
      <div className="absolute top-4 left-4">
        <Button />
      </div>

      <div className="relative bg-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-10 md:p-16 gap-x-6 md:gap-x-10">
      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2 space-y-4">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-300 animate-fadeIn">Hello, it’s me</h1>
        <p className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r text-blue-600 ">
          Anjumol George
        </p>
        <p className="font-semibold text-blue-400 text-lg md:text-2xl">Frontend Developer / UX UI Designer</p>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          HTML, CSS, JavaScript, React JS, Redux, TypeScript, <br />
          Next.js, Tailwind CSS, Bootstrap
        </p>
      </div>

      {/* icons */}
      <div className="flex gap-4 md:gap-6 justify-center md:justify-start mt-48">
      <a href="https://github.com/anjumolgeorge" className=" relative group text-2xl text-gray-400 hover:text-blue-500 hover:scale-110 transition duration-300">
      <VscGithubInverted />
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
      github
    </div>
     </a>
      {/* <a href="https://www.linkedin.com/in/anjumol-george99/" className="text-2xl md:text-2xl lg:text-2xl text-gray-400 hover:text-blue-500 hover:scale-110 transition duration-300">
      <FaLinkedin />
    </a> */}
    <a  href="https://www.linkedin.com/in/anjumol-george99/" 
    className="relative group text-2xl text-gray-400 hover:text-blue-500 hover:scale-110 transition duration-300"
  >
    <FaLinkedin />
    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
      LinkedIn
    </div>
  </a>
    <a href="https://instagram.com/" 
    className="relative group text-2xl text-gray-400 hover:text-blue-500 hover:scale-110 transition duration-300"
  >
    <FaInstagramSquare />
    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
      Instagram
    </div>
  </a>
    </div>

      {/* Profile Image */}
      <div className="relative flex items-center justify-center">
        {/* Outer Circle Glow */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-lg">
          {/* Profile Image */}
          <img 
            src="Me.jpg" 
            alt="myprofile" 
            className="w-full h-full rounded-full object-cover border-4 border-gray-900 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default First;
