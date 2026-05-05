import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "Job Agent AI",
      featured: true,
      category: "AI Automation",
      image: "/projects/job-agent-ai.png",
      desc: "Architected a full-stack AI-powered job automation ecosystem that parses resumes, extracts technical skills, matches candidates with relevant opportunities, and generates personalized cover letters. Built scalable backend systems using Spring Boot, Hibernate, PostgreSQL, and REST APIs while integrating Ollama/Phi LLM for resume parsing, AI job scoring, skill-gap analysis, and automated cover letter generation. Developed a React-based analytics dashboard and engineered Chrome Extension workflows for LinkedIn, Indeed, Naukri, and remote platforms with smart autofill, browser automation, and productivity-focused application systems.",
      tech: "Spring Boot, React, PostgreSQL, Hibernate, Chrome Extension, Ollama LLM, AI Matching, Browser Automation, REST APIs",
      github: "https://github.com/shoaibakht34-wq/JOB-AGENT",
      live: null,
    },
    {
      name: "AI Image Studio",
      featured: true,
      category: "AI Product",
      image: "/projects/ai-image-studio.png",
      desc: "Developed a full-stack AI-powered image generation platform that transforms user prompts into high-quality visuals through real-time AI rendering. Engineered an interactive frontend using React and Tailwind CSS with responsive layouts, optimized state management, and seamless UX workflows. Integrated external AI APIs for prompt-to-image generation, improved request performance for faster rendering, and structured scalable architecture for future expansion including authentication, gallery history, and personalized content systems.",
      tech: "React, Tailwind CSS, JavaScript, AI APIs, REST Integration, Responsive UI",
      github: "https://github.com/shoaibakht34-wq/Stock_Photo_Generator",
      live: "https://ai-image-generataion.netlify.app",
    },
    {
      name: "Linklytics",
      featured: false,
      category: "Analytics Platform",
      image: "/projects/linklytics.png",
      desc: "Engineered a scalable URL shortening and analytics platform inspired by Bitly using Spring Boot and React. Designed production-ready RESTful APIs for URL generation, redirection, tracking, and analytics reporting. Implemented JWT authentication with Spring Security, optimized PostgreSQL (Supabase) queries for high-performance URL lookup, and developed responsive frontend dashboards for user link management and analytics visualization. Successfully deployed across Render and Netlify for real-world accessibility.",
      tech: "Spring Boot, React, PostgreSQL, Supabase, JWT, Spring Security, REST APIs",
      github: "https://github.com/shoaibakht34-wq/URL_SHORTENER",
      live: "https://linklytics1.netlify.app",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* SECTION TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-3xl mx-auto leading-relaxed">
          A showcase of full-stack engineering, AI-powered systems, scalable backend
          architecture, and modern frontend experiences focused on solving real-world
          problems through innovation, automation, and performance.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <Tilt
            key={i}
            glareEnable={true}
            glareMaxOpacity={0.15}
            scale={1.03}
            transitionSpeed={1500}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            className="rounded-3xl"
          >
            <div
              className="relative bg-white/5 backdrop-blur-xl border border-white/10
              rounded-3xl overflow-hidden group flex flex-col h-full
              hover:border-purple-500/40 transition duration-500"
            >
              {/* HOVER GLOW */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100
                bg-gradient-to-br from-purple-600/20 via-transparent to-pink-500/10
                blur-2xl transition duration-500"
              />

              {/* PROJECT IMAGE */}
              <div className="relative z-10 p-4">
                <div
                  className="relative rounded-2xl overflow-hidden border border-white/10
                  bg-white/5"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-52 object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* SUBTLE OVERLAY */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t
                    from-black/60 via-transparent to-transparent"
                  />

                  {/* PROJECT LABEL */}
                  <div className="absolute bottom-3 left-3">
                    <span
                      className="text-sm font-medium text-white/90
                      backdrop-blur-sm px-3 py-1 rounded-full bg-black/30"
                    >
                      {p.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 px-8 pb-8 flex flex-col flex-grow">
                {/* BADGES */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.featured && (
                    <span className="text-xs text-purple-400 border border-purple-400 px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}

                  <span className="text-xs text-pink-400 border border-pink-400 px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-semibold mt-4 group-hover:text-purple-300 transition">
                  {p.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  {p.desc}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tech.split(", ").map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full
                      hover:border-purple-400/40 hover:text-purple-300 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="mt-8 flex gap-4 flex-wrap">
                  {/* GITHUB */}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-white/20
                    rounded-xl hover:bg-white/10 hover:border-purple-400/40 transition"
                  >
                    <FaGithub />
                    Code
                  </a>

                  {/* LIVE */}
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-xl
                      hover:scale-105 transition shadow-[0_0_25px_#8b5cf6]"
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  ) : (
                    <span
                      className="px-4 py-2 text-gray-400 border border-white/10
                      rounded-xl bg-white/5"
                    >
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}