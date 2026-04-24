import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";
import OrbitIcons from "./OrbitIcons";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE (IMAGE + TEXT TOGETHER) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >

          {/* IMAGE */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 w-full flex justify-center md:justify-start"
          >
            <div className="relative w-28 h-28">

              <div className="absolute inset-0 rounded-full bg-purple-600 blur-2xl opacity-40" />

              <img
                src="/profile.jpg"
                alt="Shoaib Akhtar"
                className="relative w-28 h-28 rounded-full object-cover 
                border-2 border-purple-500 
                shadow-[0_0_30px_#8b5cf6] 
                hover:scale-105 transition"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Engineering <span className="text-purple-400">scalable</span>
            <br /> and intelligent systems.
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-lg">
            I’m Shoaib Akhtar — a Full Stack Developer focused on building
            high-performance backend systems using Spring Boot and crafting
            modern, responsive frontends with React.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-600 rounded-lg shadow-[0_0_40px_#8b5cf6] hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/Shoaib-akhtar-resume.pdf"
              download
              className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>

        </motion.div>

        {/* RIGHT SIDE (3D) */}
        <div className="w-full flex justify-center">
          <div className="w-[350px] md:w-[450px] h-[400px] md:h-[500px] relative">
            <ThreeScene />
            <OrbitIcons />
          </div>
        </div>

      </div>
    </section>
  );
}