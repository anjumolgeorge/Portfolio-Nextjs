import React from 'react';
import { FaPaintBrush, FaCode } from 'react-icons/fa'; // Import icons

const Services = () => {
  return (
    <div id="services" className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-16 px-6 md:px-20">
      
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-lg md:text-3xl font-extrabold text-gray-300 animate-fadeIn">
          My Services
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        
        {/* UI/UX Design */}
        <div className="group h-72 w-full bg-gray-800 bg-opacity-30 rounded-2xl p-8 shadow-lg backdrop-blur-lg border border-gray-600 transform transition-all duration-300 hover:scale-105 hover:border-purple-500">
          <div className="flex flex-col items-center text-center space-y-4">
            <FaPaintBrush className="text-5xl text-purple-500 group-hover:scale-110 transition duration-300" />
            <h1 className="text-xl md:text-2xl font-bold text-purple-400">UI/UX Design</h1>
            <p className="text-gray-300 text-sm md:text-lg">
              Creating visually appealing, user-friendly, and interactive UI designs with Figma & Adobe XD.
            </p>
          </div>
        </div>

        {/* Web Development */}
        <div className="group h-72 w-full bg-gray-800 bg-opacity-30 rounded-2xl p-8 shadow-lg backdrop-blur-lg border border-gray-600 transform transition-all duration-300 hover:scale-105 hover:border-blue-500">
          <div className="flex flex-col items-center text-center space-y-4">
            <FaCode className="text-5xl text-blue-500 group-hover:scale-110 transition duration-300" />
            <h1 className="text-xl md:text-2xl font-bold text-blue-400">Web Development</h1>
            <p className="text-gray-300 text-sm md:text-lg">
              Developing fast, responsive, and high-performance websites using React, Next.js & Tailwind CSS.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;

