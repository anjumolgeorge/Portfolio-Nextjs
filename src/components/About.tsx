import React from 'react';

const About = () => {
  return (
    <div id='about' className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 md:px-20 flex flex-col items-center text-center space-y-8 ">
      
      {/*Title */}
      <div className="space-y-2">
        <p className="text-lg md:text-3xl font-extrabold text-gray-300 animate-fadeIn">
          About Me
        </p>
        <p className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Frontend Developer
        </p>
      </div>

      {/* Profile Image */}
      <div className="relative">
        <div className="w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-lg animate-pulse">
          <img
            className="w-full h-full rounded-full object-cover border-4 border-gray-900 shadow-2xl hover:scale-105 transition-transform duration-300"
            src="again.jpg"
            alt="Profile"
          />
        </div>
      </div>

      {/* About Me Description */}
      <div className="max-w-3xl text-gray-300 text-sm md:text-lg leading-relaxed px-6 md:px-10 lg:px-0">
        <p className="bg-white/10 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
          As a <span className="text-blue-400 font-semibold">Frontend Developer</span> with expertise in modern web technologies like 
          <span className="text-purple-400 font-semibold"> React, TypeScript, Nextjs, Redux</span>, and <span className="text-purple-400 font-semibold">Tailwind CSS</span>, 
          I specialize in crafting visually appealing and user-friendly interfaces. My focus is on building 
          <span className="text-blue-400 font-semibold"> responsive</span>, high-performance web applications that deliver seamless user experiences. 
          I’m passionate about turning creative ideas into <span className="text-purple-400 font-semibold">functional, attractive</span> digital products.
        </p>
      </div>

    </div>
  );
};

export default About;
