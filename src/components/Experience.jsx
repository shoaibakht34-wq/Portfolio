import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaRobot,
  FaGraduationCap,
} from "react-icons/fa";

export default function Experience() {
  const data = [
    {
      role: "Backend Development Intern — Analyze Infotech, Lucknow",
      year: "Aug 2025 – Apr 2026",
      icon: <FaBriefcase />,
      color: "from-purple-500 to-pink-500",
      desc: "Worked extensively on backend engineering using Java and Spring Boot, contributing to scalable application modules, REST API development, debugging workflows, and production-focused optimization. Assisted in API testing, database query optimization, and collaborative Git-based team development while gaining practical exposure to enterprise backend systems.",
      points: [
        "Developed and tested backend modules using Java + Spring Boot",
        "Built, debugged, and optimized RESTful APIs",
        "Improved database query efficiency and backend performance",
        "Collaborated in Git-based professional development environments",
      ],
    },

    {
      role: "Full Stack Developer — Personal Projects & Deployment",
      year: "2024 – Present",
      icon: <FaCode />,
      color: "from-cyan-500 to-purple-500",
      desc: "Engineered multiple full-stack applications including AI Image Studio, Linklytics, and scalable backend systems using React, Spring Boot, PostgreSQL, and JWT authentication. Focused on real-world architecture, deployment pipelines, responsive UI systems, and production-grade development.",
      points: [
        "Built AI Image Studio with real-time AI API integration",
        "Developed Linklytics URL shortener with analytics",
        "Implemented JWT authentication + Spring Security",
        "Deployed projects using Netlify, Render, and Supabase",
      ],
    },

    {
      role: "AI Systems Builder — Automation & Intelligent Platforms",
      year: "Current Focus",
      icon: <FaRobot />,
      color: "from-pink-500 to-purple-500",
      desc: "Currently building advanced AI-powered systems including Job Agent AI, browser automation tools, resume parsing systems, and LLM-integrated productivity platforms focused on automation, matching intelligence, and scalable AI workflows.",
      points: [
        "Developing Job Agent AI ecosystem",
        "Integrating Ollama / LLM workflows",
        "Building Chrome Extensions for browser automation",
        "Exploring AI matching, automation, and productivity systems",
      ],
    },

    {
      role: "B.Tech — Computer Science & Engineering, Integral University",
      year: "2022 – 2026",
      icon: <FaGraduationCap />,
      color: "from-purple-400 to-cyan-400",
      desc: "Pursuing Computer Science Engineering with deep focus on Data Structures, OOP, scalable software engineering, backend systems, API architecture, and full-stack application development while continuously advancing into distributed systems and AI technologies.",
      points: [
        "Strong foundation in Data Structures & OOP",
        "Focused on backend architecture and software systems",
        "Applied academic knowledge to real-world full-stack projects",
        "Expanding into microservices, cloud, and AI ecosystems",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-700/10 blur-[180px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Professional <span className="gradient-text">Journey</span>
        </h2>

        <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-4xl mx-auto">
          A progression from foundational engineering and academic excellence to
          real-world backend development, full-stack product building, and
          AI-powered automation systems focused on scalability, innovation,
          and technical depth.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative max-w-6xl mx-auto mt-20">
        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0 hidden md:block" />

        <div className="space-y-16">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* DOT */}
              <div
                className="hidden md:flex absolute left-1/2 -translate-x-1/2 
                w-14 h-14 rounded-full border border-white/10 bg-black/40 
                backdrop-blur-xl items-center justify-center text-purple-400
                shadow-[0_0_25px_#8b5cf6] z-20"
              >
                {item.icon}
              </div>

              {/* CARD */}
              <div
                className={`w-full md:w-[45%] bg-white/5 backdrop-blur-xl 
                border border-white/10 rounded-2xl p-8 
                hover:border-purple-400/40 hover:-translate-y-2
                hover:shadow-[0_0_30px_#8b5cf6] transition duration-500`}
              >
                {/* YEAR */}
                <span
                  className={`inline-block text-sm px-4 py-2 rounded-full 
                  bg-gradient-to-r ${item.color} text-white mb-4`}
                >
                  {item.year}
                </span>

                {/* ROLE */}
                <h3 className="text-2xl font-semibold mb-4">
                  {item.role}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 leading-relaxed mb-5">
                  {item.desc}
                </p>

                {/* POINTS */}
                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-300 flex items-start gap-3"
                    >
                      <span className="text-purple-400 mt-1">✦</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FUTURE CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-24"
      >
        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Currently expanding into{" "}
          <span className="text-purple-400">
            microservices, distributed systems, AI automation, and scalable
            intelligent product ecosystems
          </span>{" "}
          to build next-generation software solutions.
        </p>
      </motion.div>

      {/* DIVIDER */}
      <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
    </section>
  );
}