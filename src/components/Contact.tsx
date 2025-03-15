// "use client"
// import React from 'react';

// const Contact = () => {
//   return (
//     <div id="contact" className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-16 px-6">
//       {/* Section Title */}
//       <div className="text-center mb-12">
//         <h1 className="text-3xl md:text-4xl font-extrabold text-gray-200 animate-fadeIn">
//           Get In Touch
//         </h1>
//       </div>

//       {/* Contact Form */}
//       <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
//         <form className="space-y-6">
//           {/* Name Fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
//               type="text"
//               placeholder="First Name"
//               required
//             />
//             <input
//               className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
//               type="text"
//               placeholder="Last Name"
//               required
//             />
//           </div>

//           {/* Contact Details */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
//               type="tel"
//               placeholder="Mobile No."
//               required
//             />
//             <input
//               className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
//               type="email"
//               placeholder="Email Address"
//               required
//             />
//           </div>

//           {/* Message Field */}
//           <textarea
//             className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
//             rows="5"
//             placeholder="Write your message..."
//             required
//           ></textarea>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
//             >
//               Send Message 
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      mobile: formData.mobile,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        templateParams,
        "your_user_id" // Replace with your EmailJS user ID (or public key)
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setSuccess(true);
          setError("");
          setFormData({ firstName: "", lastName: "", mobile: "", email: "", message: "" });
        },
        (err) => {
          console.error("Failed to send email:", err);
          setError("Failed to send email. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div id="contact" className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-200 animate-fadeIn">
          Get In Touch
        </h1>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
              type="tel"
              name="mobile"
              placeholder="Mobile No."
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <input
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
            rows={5}
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {success && <p className="text-green-500 text-center">Email sent successfully!</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
