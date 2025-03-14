// "use client"
// import React, { useState } from 'react';

// const Button = () => {
//   const [download, setDownload] = useState(false)
//   return (
//     <div>
//         <div >
// <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-gray-600 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition- transform duration-300 font-semibold shadow-lg hover:scale-105 ">
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Download"> <path stroke-linejoin="round"
//    stroke-linecap="round" stroke-width="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector" onClick={}></path> </g> </g></svg>
//   Download CV
//   <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-blue-900 bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
//     Click Here
//   </div>
// </button>
// </div>
//     </div>
//   );
// }

// export default Button;

"use client";
import React, { useState } from "react";

const Button = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDownload = () => {
    if (!selectedFile) {
      alert("Please select a file first!"); // Alert if no file selected
      return;
    }

    const url = URL.createObjectURL(selectedFile);
    const link = document.createElement("a");
    link.href = url;
    link.download = selectedFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center">
      {/* File Input (Hidden) */}
      <input
        type="file"
        accept=".pdf,.docx"
        onChange={handleFileSelect}
        className="hidden"
        id="fileInput"
      />

      {/* Button to Open File Picker */}
      <button
        onClick={() => document.getElementById("fileInput").click()}
        className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-gray-600 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition-transform duration-300 font-semibold shadow-lg hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="24px"
          width="24px"
        >
          <g id="SVGRepo_iconCarrier">
            <g id="Interface / Download">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="#f1f1f1"
                d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
              ></path>
            </g>
          </g>
        </svg>
        Select CV
        <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-blue-900 bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
          Click to Choose File
        </div>
      </button>

      {/* Button to Download File */}
      {selectedFile && (
        <button
          onClick={handleDownload}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
        >
          Download {selectedFile.name}
        </button>
      )}
    </div>
  );
};

export default Button;


