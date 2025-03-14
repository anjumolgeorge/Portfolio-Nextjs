// "use client"
// import Link from 'next/link';
// import React, { useState } from 'react';


// const Menu = () => {
//     const [open, setOpen] = useState(false)
//   return (
//     <div>
//       <div className=' md:hidden'>
//         <img src="burger-bar.png" alt="" 
//          width={28} 
//          height={28} 
//          className="cursor-pointer"
//          onClick={()=>setOpen((prev)=> !prev)}
//          />
//          {
//                open && (
//                 <div className=" absolute bg-black w-full h-[calc(100vh-80px)] text-white left-0 top-20 flex flex-col items-center justify-center gap-8 text-xl z-10 ">
//                     <Link href="/">Home</Link>
//                     <Link href="/">About</Link>
//                     <Link href="/">Services</Link>
//                     <Link href="/">Projects</Link>
//                     <Link href="/">Contact</Link>
//                 </div>
//              )
//          }
//       </div>
//     </div>
//   );
// }

// export default Menu;


"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; 

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden ">
            {/* Burger Icon */}
            <button onClick={() => setOpen(!open)} className="text-white">
                {open ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>

            {/* Mobile Menu */}
            {open && (
                <div className="  bg-black w-xl h-[calc(100vh-80px)] text-white left-0 top-20 flex flex-col items-center justify-center gap-8 text-xl z-10">
                    <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link href="#about" onClick={() => setOpen(false)}>About</Link>
                    <Link href="#services" onClick={() => setOpen(false)}>Services</Link>
                    <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
                    <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
                </div>
            )}
        </div>
    );
}

export default Menu;
