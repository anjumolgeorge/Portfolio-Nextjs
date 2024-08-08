'use client '
import Hero from "./components/Hero";

import Grid from "./components/Grid";
import About from "./about/about";
import Nav from "./Navbar/Nav";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden max-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
        {/* <h1>Hello Portfolio</h1> */}
       
        <Hero/>
        <Grid/>
        <Nav/>
      </div>
    </main>
  );
}
