import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-gradient-to-r from-indigo-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-lg text-gray-600 mb-6">
          I’m a passionate Frontend Developer with 1 year of experience. Skilled in React.js, Next.js, and UI/UX design, I’m currently interning at Bridgeon Solutions in Kakkancheri.
        </p>
        <div className="flex justify-center">
          <a href="#projects" className="text-white bg-indigo-500 px-4 py-2 rounded-lg shadow hover:bg-indigo-600">
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
