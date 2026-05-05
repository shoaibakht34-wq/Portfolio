import { motion } from "framer-motion";
import {
  FaServer,
  FaRobot,
  FaCode,
  FaCloud,
} from "react-icons/fa";

export default function About() {
  const highlights = [
    {
      icon: <FaServer />,
      title: "Backend Engineering",
      desc: "Designing secure REST APIs, scalable architectures, JWT authentication systems, and production-grade backend solutions using Java, Spring Boot, Hibernate, and PostgreSQL.",
    },
    {
      icon: <FaRobot />,
      title: "AI Automation",
      desc: "Building intelligent systems powered by LLM integration, browser automation, resume parsing, AI matching engines, and productivity-focused automation platforms.",
    },
    {
      icon: <FaCode />,
      title: "Frontend Craftsmanship",
      desc: "Creating responsive, immersive, and modern user experiences with React, Tailwind CSS, advanced UI systems, and polished interaction design.",
    },
    {
      icon: <FaCloud />,
      title: "Scalable Deployment",
      desc: "Deploying cloud-ready applications using Render, Netlify, Supabase, and scalable architecture principles focused on performance and maintainability.",
    },
  ];

  const stats = [
    { number: "3+", label: "Major Projects Built" },
    { number: "1+", label: "Professional Internship" },
    { number: "Full Stack", label: "Engineering Focus" },
    { number: "AI", label: "Automation Systems" },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-700/10 blur-[180px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          About <span className="gradient-text">Me</span>
        </h2>

        <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-4xl mx-auto">
          I’m a Computer Science Engineering student and Full Stack Developer
          specializing in backend engineering, AI automation, and scalable digital
          systems. My expertise lies in architecting secure Spring Boot APIs,
          modern React interfaces, and intelligent systems that solve real-world
          problems through performance, automation, and clean design.
        </p>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="grid lg:grid-cols-2 gap-16 mt-20 items-start relative z-10">
        {/* LEFT SIDE STORY */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-400">
            Building Systems Beyond Code
          </h3>

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              My core strength is building secure, scalable backend ecosystems
              using Spring Boot, Hibernate, JWT authentication, and RESTful
              architecture while ensuring production-grade reliability.
            </p>

            <p>
              Beyond traditional development, I actively engineer AI-powered
              systems including automation platforms, browser extensions,
              intelligent matching engines, and real-world productivity tools.
            </p>

            <p>
              I combine backend precision with frontend craftsmanship using
              React and Tailwind CSS to create systems that are not only
              technically robust but also visually immersive and user-focused.
            </p>

            <p>
              Currently, I’m expanding into advanced system design through
              microservices, distributed architectures, cloud deployment,
              and AI-integrated development ecosystems.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 
                backdrop-blur-xl hover:border-purple-400/30 
                hover:shadow-[0_0_25px_#8b5cf6] transition"
              >
                <h4 className="text-2xl font-bold text-purple-400">
                  {stat.number}
                </h4>

                <p className="text-sm text-gray-400 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE CARDS */}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 
              rounded-2xl p-6 hover:-translate-y-2 hover:border-purple-400/40
              hover:shadow-[0_0_30px_#8b5cf6] transition duration-500"
            >
              {/* ICON */}
              <div className="text-3xl text-purple-400 mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION DIVIDER */}
      <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
    </section>
  );
}