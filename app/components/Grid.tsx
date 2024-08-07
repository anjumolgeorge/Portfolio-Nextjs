import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '../Data'

const Grid = () => {
  return (
    <div  className=" grid w-[40rem] h-[50rem]"  id='about'>
       <BentoGrid/>
       {gridItems.map((item) => (
        <BentoGridItem
        id = {item.id}
        key = {item.id}
        title = {item.title}
        description = {item.description}
        />
       ))}
    </div>
  )
}

export default Grid



// import React from 'react';
// import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

// const Grid = () => {
//   const items = [
//     { title: "E-COMMERCE PROJECT", description: "Desc1", id: 1 },
//     { title: "TODO APP", description: "Desc2", id: 2 },
//     { title: "FRONTPAGE CREATION USING HTML and CSS", description: "Desc3", id: 3 },
//     { title: "HTML-CSS FRONTPAGE DESIGN", description: "Desc3", id: 3 },
//     { title: "SOCIALMEDIA-APP", description: "Desc4", id: 4 },
//   ];

//   return (
//     <div className="relative py-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full h-full" id="about">
//       <BentoGrid />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
//         {items.map((item) => (
//           <BentoGridItem
//             id={item.id}
//             key={item.id}
//             title={item.title}
//             description={item.description}
//             className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Grid;
