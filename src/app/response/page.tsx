import React from 'react';

const page = () => {
  return (
    <div className="p-4 sm:p-4 md:p-8 lg:p-12">
 <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">
      Responsive Heading
    </h1>
    <div className="p-4 sm:p-8 md:p-12 lg:p-16 bg-red-200">
      <p>Resize the screen to see padding change!</p>
    </div>  
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="bg-blue-500 text-white p-4 ">Box 1</div>
      <div className="bg-green-500 text-white p-4">Box 2</div>

      <h1 className=' leading-relaxed tracking-wide'>This is a styled psrsgraph!</h1>
    </div>
    </div>




  );
}

export default page;
