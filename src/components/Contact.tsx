"use client"
import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-16 px-6">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-200 animate-fadeIn">
          Get In Touch
        </h1>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
        <form className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
              type="tel"
              placeholder="Mobile No."
              required
            />
            <input
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>

          {/* Message Field */}
          <textarea
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
            >
              Send Message 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

