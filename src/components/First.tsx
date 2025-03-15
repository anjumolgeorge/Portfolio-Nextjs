import React from 'react';
import Button from './Button';
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const First = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 overflow-hidden">
      
      {/* Button */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
        <Button />
      </div>

      {/* Text & Icons Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center text-white p-10 md:p-16 gap-10 w-full">
        
        {/* Left Section*/}
        <div className="text-center md:text-left md:w-1/2 space-y-5">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-300 animate-fadeIn">
            Hello, it’s me
          </h1>
          <p className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Anjumol George
          </p>
          <p className="font-semibold text-blue-400 text-lg md:text-2xl">
            Frontend Developer / UX UI Designer
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            HTML, CSS, JavaScript, React JS, Redux, TypeScript, <br />
            Next.js, Tailwind CSS, Bootstrap
          </p>
        </div>

        {/*  Icons */}
        <div className="flex gap-6 justify-center md:justify-start mt-6">
          <a
            href="https://github.com/anjumolgeorge"
            className="relative group text-3xl text-white hover:text-blue-500 hover:scale-110 transition duration-300"
          >
            <VscGithubInverted />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
              GitHub
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/anjumol-george99/"
            className="relative group text-3xl text-white hover:text-blue-500 hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
              LinkedIn
            </div>
          </a>

          <a
            href="https://instagram.com/"
            className="relative group text-3xl text-white hover:text-blue-500 hover:scale-110 transition duration-300"
          >
            <FaInstagramSquare />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
              Instagram
            </div>
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative flex items-center justify-center mt-10 md:mt-0">
        {/* Outer Glow Circle */}
        <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-lg animate-pulse">
          {/* Profile Image with Glass Effect */}
          <img
            src="Me.jpg"
            alt="My Profile"
            className="w-full h-full rounded-full object-cover border-4 border-gray-900 shadow-2xl hover:scale-105 transition-transform duration-300 backdrop-blur-md"
          />
        </div>
      </div>

    </div>
  );
};

export default First;


