import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaEye,
} from "react-icons/fa";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "AI Image Studio",
      desc: "AI-powered image generation platform with real-time prompt rendering, responsive UI, API integration, and scalable frontend architecture.",
      fullDesc:
        "AI Image Studio is a full-stack AI-powered creative platform engineered to transform user prompts into high-quality generated visuals. Built using React and Tailwind CSS, the platform delivers a highly interactive user experience with real-time prompt submission, seamless API integration, and responsive rendering. It was designed with scalability in mind to support future enhancements such as user authentication, image history, saved galleries, and AI-powered creative workflows.",
      tech: "React, Tailwind CSS, JavaScript, AI APIs, REST Integration, Responsive UI",
      github: "https://github.com/shoaibakht34-wq/Stock_Photo_Generator",
      live: "https://ai-image-generataion.netlify.app",
      featured: true,
      features: [
        "Real-time AI prompt-to-image generation workflow",
        "Responsive full-stack user interface",
        "Integrated external AI APIs for image creation",
        "Optimized frontend architecture for scalability",
        "Future-ready system for auth, history, and galleries",
      ],
      challenge:
        "Focused on creating an immersive AI product experience while balancing API efficiency, frontend responsiveness, scalability, and user-centric interaction design.",
    },

    {
      name: "Linklytics",
      desc: "Scalable URL shortener with JWT authentication, analytics dashboard, REST APIs, PostgreSQL integration, and production deployment.",
      fullDesc:
        "Linklytics is a full-stack URL shortening and analytics platform inspired by Bitly, built with Spring Boot, React, PostgreSQL (Supabase), and JWT authentication. The platform allows users to generate shortened URLs, manage links securely, track analytics, and monitor user interactions. The project emphasizes backend scalability, authentication security, efficient database optimization, and production-ready deployment.",
      tech: "Spring Boot, React, PostgreSQL (Supabase), JWT, Spring Security, REST APIs",
      github: "https://github.com/shoaibakht34-wq/URL_SHORTENER",
      live: "https://linklytics1.netlify.app",
      featured: false,
      features: [
        "Short URL generation with unique code architecture",
        "JWT-secured authentication and authorization",
        "Analytics dashboard for tracking user interactions",
        "Optimized PostgreSQL query performance",
        "Production deployment on Netlify + Render",
      ],
      challenge:
        "Engineered for secure authentication, fast redirection systems, optimized backend scalability, and production-ready deployment workflows.",
    },

    {
      name: "Java Full Stack Web Application",
      desc: "MVC-based web application using Java, JSP, JDBC, and SQL focused on backend fundamentals and structured architecture.",
      fullDesc:
        "This Java Full Stack Web Application represents foundational full-stack engineering using Java, JSP, JDBC, SQL, and MVC architecture. It was built to strengthen backend fundamentals, structured application logic, and direct database connectivity while applying software engineering best practices.",
      tech: "Java, JSP, JDBC, SQL, MVC Architecture",
      github: "https://github.com/shoaibakht34-wq",
      live: null,
      featured: false,
      features: [
        "MVC architectural implementation",
        "Database integration with JDBC",
        "Structured backend development",
        "Server-side rendering using JSP",
        "Strong software engineering foundation",
      ],
      challenge:
        "Focused on mastering full-stack Java fundamentals, backend logic structuring, MVC separation, and direct relational database operations.",
    },
  ];

  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden">
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
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg leading-relaxed">
          A showcase of scalable backend systems, AI-powered platforms,
          and full-stack engineering projects focused on performance,
          architecture, user experience, and real-world deployment.
        </p>
      </motion.div>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto mt-20 relative z-10">
        {projects.map((p, i) => (
          <Tilt
            key={i}
            glareEnable
            glareMaxOpacity={0.15}
            scale={1.03}
            transitionSpeed={1500}
            className="rounded-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-white/5 backdrop-blur-xl 
              border border-white/10 p-8 rounded-3xl 
              hover:border-purple-400/40 hover:-translate-y-3
              hover:shadow-[0_0_40px_#8b5cf6] 
              transition duration-500 h-full flex flex-col justify-between"
            >
              {/* GLOW */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 
                bg-gradient-to-r from-purple-600/20 via-transparent to-transparent 
                blur-2xl transition"
              />

              <div className="relative z-10">
                {/* FEATURED */}
                {p.featured && (
                  <span
                    className="inline-block text-xs text-purple-400 
                    border border-purple-400 px-3 py-1 rounded-full"
                  >
                    Featured Project
                  </span>
                )}

                {/* TITLE */}
                <h3 className="text-2xl font-semibold mt-4">
                  {p.name}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 mt-4 leading-relaxed text-sm">
                  {p.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tech.split(", ").map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-white/5 
                      border border-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-wrap gap-3 relative z-10">
                {/* DETAILS */}
                <button
                  onClick={() => setSelectedProject(p)}
                  className="flex items-center gap-2 px-4 py-2 
                  bg-purple-600 rounded-xl hover:scale-105 
                  transition shadow-[0_0_20px_#8b5cf6]"
                >
                  <FaEye />
                  Details
                </button>

                {/* GITHUB */}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 
                  border border-white/20 rounded-xl 
                  hover:bg-white/10 transition"
                >
                  <FaGithub />
                  Code
                </a>

                {/* LIVE */}
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 
                    border border-purple-400/30 rounded-xl 
                    hover:bg-purple-500/10 transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                ) : (
                  <span
                    className="px-4 py-2 text-gray-500 
                    border border-white/10 rounded-xl"
                  >
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* DIVIDER */}
      <div className="mt-24 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
    </section>
  );
}