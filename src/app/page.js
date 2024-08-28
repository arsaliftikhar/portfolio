import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";





export default function Home() {
  return (
    <div className="px-6 lg:px-20 xl:px-40 font-moderustic">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects/>
      <Contact/>

    </div>
  );
}
