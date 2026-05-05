import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import ThreeScene from "./ThreeScene";
import OrbitIcons from "./OrbitIcons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-700/20 blur-[180px] rounded-full pointer-events-none" />

      {/* GRID */}
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* AVAILABILITY BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <span
              className="px-4 py-2 rounded-full border border-purple-400/30 
              bg-white/5 backdrop-blur-md text-sm text-purple-300
              shadow-[0_0_20px_rgba(139,92,246,0.25)]"
            >
               Available for Internships • Full Stack • AI Engineering
            </span>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 md:w-36 md:h-36">
              {/* OUTER GLOW */}
              <div className="absolute inset-0 rounded-full bg-purple-500 blur-3xl opacity-40 animate-pulse" />

              {/* RING */}
              <div
                className="absolute inset-[-6px] rounded-full border border-purple-400/40 
                shadow-[0_0_35px_#8b5cf6]"
              />

              {/* IMAGE */}
              <img
                src="/profile.jpg"
                alt="Shoaib Akhtar"
                className="relative w-full h-full rounded-full object-cover
                border-2 border-purple-400 shadow-[0_0_40px_#8b5cf6]
                hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05]"
          >
            Engineering{" "}
            <span className="text-purple-400 drop-shadow-[0_0_15px_#8b5cf6]">
              scalable
            </span>
            <br />
            and intelligent
            <br />
            systems.
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            I’m <span className="text-white font-semibold">Shoaib Akhtar</span> —
            a Full Stack Developer & AI Systems Builder specializing in
            high-performance backend engineering with Spring Boot, scalable
            RESTful architectures, intelligent automation systems, and premium
            frontend experiences using React.
          </motion.p>

          {/* TRUST METRICS */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            {[
              "3+ Major Projects",
              "AI + Full Stack",
              "Spring Boot Expert",
              "Cloud Deployment",
            ].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="group px-7 py-4 bg-purple-600 rounded-xl
              shadow-[0_0_35px_#8b5cf6] hover:scale-105 transition
              flex items-center gap-3 font-medium"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </a>

            <a
              href="/Shoaib-akhtar-resume.pdf"
              download
              className="px-7 py-4 border border-white/20 rounded-xl
              hover:bg-white/10 hover:border-purple-400/40 transition
              flex items-center gap-3"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href="#contact"
              className="px-7 py-4 border border-white/20 rounded-xl
              hover:bg-white/10 hover:border-purple-400/40 transition"
            >
              Contact
            </a>
          </div>

          {/* SOCIAL BAR */}
          <div className="mt-10 flex gap-5">
            <a
              href="https://github.com/shoaibakht34-wq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 hover:text-purple-400 hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shoaib-akhtar-90b286297/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 hover:text-purple-400 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE — PREMIUM 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative flex justify-center items-center"
        >
          {/* LARGE GLOW */}
          <div className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-purple-600/20 blur-[150px] rounded-full" />

          {/* CORE */}
          <div className="relative w-[380px] h-[380px] md:w-[650px] md:h-[650px] flex items-center justify-center">
            {/* RING */}
            <div
              className="absolute w-[85%] h-[85%] rounded-full border border-purple-400/20
              animate-spin"
              style={{ animationDuration: "18s" }}
            />

            <div
              className="absolute w-[65%] h-[65%] rounded-full border border-pink-400/10
              animate-spin"
              style={{
                animationDuration: "12s",
                animationDirection: "reverse",
              }}
            />

            {/* 3D SCENE */}
            <ThreeScene />

            {/* ORBIT ICONS */}
            <OrbitIcons />
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-14 rounded-full border border-white/20 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="w-2 h-2 bg-purple-400 rounded-full"
          />
        </div>
      </motion.a>
    </section>
  );
}