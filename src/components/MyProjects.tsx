import React from 'react';

const MyProjects = () => {
  const projects = [
    { dec: "Social Media App", img: "SocialMediaApp.png" },
    { dec: "E-Commerce", img: "ecommerce.png" },
    { dec: "To-Do App", img: "todo.png" }
  ];

  return (
    <div id="projects" className="bg-gradient-to-r from-gray-800 to-gray-950 py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-200 animate-fadeIn">My Projects</h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="relative group rounded-2xl overflow-hidden shadow-xl bg-gray-900 transform transition-all duration-300 hover:scale-105">
            {/* Project Image */}
            <img className="w-full h-64 object-cover rounded-t-2xl" src={project.img} alt={project.dec} />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <h2 className="text-sm md:text-sm font-semibold text-white mb-4"> {project.dec}</h2>
              {/* <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-700 text-white font-semibold rounded-full shadow-md hover:from-pink-600 hover:to-purple-800 hover:scale-110 transition-all duration-300">
                See More
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;

