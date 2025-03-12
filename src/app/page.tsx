import About from "@/components/About";
import Contact from "@/components/Contact";
import First from "@/components/First";
import MyProjects from "@/components/MyProjects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="">
   <First/>
   <About/>
   <Services/>
   <MyProjects/>
   <Contact/>
    </div>
  );
}
