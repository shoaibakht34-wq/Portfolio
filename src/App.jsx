// src/App.jsx
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {/* LOADER */}
      <AnimatePresence mode="wait">
        {!loadingComplete && (
          <Loader onComplete={() => setLoadingComplete(true)} />
        )}
      </AnimatePresence>

      {/* MAIN PORTFOLIO */}
      {loadingComplete && (
        <div className="relative min-h-screen text-white overflow-x-hidden">
          
          {/* GLOBAL PREMIUM BACKGROUND */}
          <Background />

          {/* CURSOR GLOW */}
          <CursorGlow />

          {/* NAVBAR */}
          <Navbar />

          {/* MAIN CONTENT */}
          <main className="relative z-10">
            <section id="home">
              <Hero />
            </section>

            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>

          {/* FOOTER */}
          <Footer />
        </div>
      )}
    </>
  );
}