import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import Stars from "./components/Stars";
import EnergyGlow from "./components/EnergyGlow";
import Experience from "./components/Experience";
export default function App() {
  return (
    <div className="relative min-h-screen">
      <Stars />
      <EnergyGlow />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}