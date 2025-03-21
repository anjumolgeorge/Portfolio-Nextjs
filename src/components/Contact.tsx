// "use client"
// import React, { useState } from 'react';
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const [name,setName]= useState("")
//   const [email, setEmail] = useState("")
//   const [message, setMessage] = useState("")
//   const [isloading, setIsLoading] = useState(false)

//   const [error,setError] = useState("")
//   const [success,setSuccess] = useState("")

//   const sendEmail = () => {
//     setSuccess("");
//     if(!email){
//       setError("Please enter your email");
//       return;
//     }
//     if(!message){
//       setError("Please enter your message");
//       return;
//     }
//     const templateParams = {
//       from_name: email,
//       to_name : "Anjumol George",
//       message,
//     };

//     setError("");
//       setIsLoading(true);
//       emailjs
//          .send(
//           process.env.service_dtmb69f ?? "",
//           process.env.template_nlxhw27 ?? "",
//           templateParams,
//           process.env.CPJ7luOmv-Thzt1LR ?? ""
//          )
//          .then(
//           function (response) {
//             setEmail("");
//             setName("");
//             setMessage("");
//             setIsLoading(false);
//             setSuccess("your msg has been sent successfully. I will get back to you soon")
//           },
//           function (error) {
//             setError("some error occurred")
//             console.error(error);
//             setIsLoading(false)
//           }
//          );
    
//   }

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
//       <form className="space-y-6" >
//       {/* Name Fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
//               type="text"
//               id='name'
//               placeholder=" Name"
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
            
          

//           {/* Contact Details */}
            
//             <input
//               className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
//               type="email"
//               id='email'
//               placeholder="Email Address"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           {/* Message Field */}
//           <textarea
//             className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
//             rows="5"
//             placeholder="Write your message..."
//             required
//             id='message'
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           ></textarea>

//           {error && <div className=' p-2 text-center text-red-600 dark:text-red-500 text-sm'>{error}</div> }
//           {success && <div className=' p-2 w-full text-center text-green-600 dark:text-green-500 text-sm'>{success}</div>}
         
//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//             onClick={sendEmail}
//             disabled={isloading}
//               type="submit"
//               className="px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
//             >
//               {isloading ? (
//                 <div></div>
//               ):success ? (
//                 "sent !"
//               ):(
//                 "send"
//               )}
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
import { motion } from "framer-motion";
import emailjs from "emailjs-com"

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const result = await emailjs.send(
        "service_9fic3xm",
        "template_r0gik6w",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "H23lL2JYcr65aWdfb"
      );
      console.log("✅ Email sent:", result);
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("❌ EmailJS Error:", error?.text || error);
      alert("❌ Failed to send message. See console.");
    } finally {
      setIsSending(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="contact" className="p-8 bg-gradient-to-br from-black
                    via-gray-900 to-gray-800 min-h-screen
                    text-white flex justify-center items-center">
      <motion.div
        className="w-full max-w-xl bg-gray-900/80 
        backdrop-blur-md p-8 rounded-3xl shadow-2xl 
        border border-gray-700"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2
          className="text-4xl font-extrabold mb-8 
          text-center bg-gradient-to-r from-blue-400
          to-purple-500 text-transparent bg-clip-text"
          variants={inputVariants}
        >
          Contact Me
        </motion.h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <motion.input
            variants={inputVariants}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-lg bg-gray-800
             text-white focus:outline-none focus:ring-2
             focus:ring-blue-500 transition-all"
            required
          />
          <motion.input
            variants={inputVariants}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-lg bg-gray-800
             text-white focus:outline-none focus:ring-2
             focus:ring-blue-500 transition-all"
            required
          />
          <motion.textarea
            variants={inputVariants}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-4 rounded-lg bg-gray-800
             text-white focus:outline-none focus:ring-2
             focus:ring-blue-500 transition-all"
            rows={5}
            required
          ></motion.textarea>

          <motion.button
            type="submit"
            className={`p-4 bg-gradient-to-r from-blue-500
               to-purple-500 hover:from-purple-500
                hover:to-blue-500 rounded-lg
                 text-white font-bold transition-all duration-300 shadow-lg
                  hover:shadow-blue-500/50 ${
              isSending ? "cursor-not-allowed opacity-70" : ""
            }`}
            whileHover={{ scale: isSending ? 1 : 1.05 }}
            whileTap={{ scale: isSending ? 1 : 0.95 }}
            disabled={isSending}
            variants={inputVariants}
          >
            {isSending ? (
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              >
                ⏳ Sending...
              </motion.span>
            ) : (
              "Send Message 🚀"
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;