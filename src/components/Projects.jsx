import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "AI Image Studio",
      desc: "Developed a full-stack AI-powered image generation platform that transforms user prompts into high-quality visuals. Built an interactive frontend using React and Tailwind CSS with real-time rendering. Integrated external AI APIs and optimized API handling for fast response. Deployed for real-world usage with responsive UI and smooth user experience.",
      tech: "React, Tailwind CSS, JavaScript, AI APIs, REST",
      github: "https://github.com/shoaibakht34-wq/Stock_Photo_Generator",
      live: "https://ai-image-generataion.netlify.app", // ✅ ADDED
    },
    {
      name: "Linklytics",
      desc: "Engineered a scalable URL shortening platform with analytics using Spring Boot and React. Designed REST APIs for URL generation, redirection, and tracking. Implemented JWT authentication and optimized PostgreSQL queries for fast performance. Deployed on Render and Netlify.",
      tech: "Spring Boot, React, PostgreSQL, JWT, REST APIs",
      github: "https://github.com/shoaibakht34-wq/URL_SHORTENER",
      live: "https://linklytics1.netlify.app",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">

      <h2 className="text-4xl text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <Tilt
            key={i}
            glareEnable={true}
            glareMaxOpacity={0.15}
            scale={1.05}
            transitionSpeed={1500}
            className="rounded-2xl"
          >
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 
              p-8 rounded-2xl overflow-hidden group flex flex-col justify-between h-full">

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                bg-gradient-to-r from-purple-600/20 to-transparent blur-2xl transition" />

              <div className="relative z-10">

                {/* FEATURED */}
                {p.name === "AI Image Studio" && (
                  <span className="text-xs text-purple-400 border border-purple-400 px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}

                <h3 className="text-2xl mt-2">{p.name}</h3>

                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  {p.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.split(", ").map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BUTTONS */}
              <div className="mt-6 flex gap-4 flex-wrap relative z-10">

                <a
                  href={p.github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
                >
                  <FaGithub />
                  Code
                </a>

                <a
                  href={p.live}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg 
                  hover:scale-105 transition shadow-[0_0_25px_#8b5cf6]"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>

              </div>

            </div>
          </Tilt>
        ))}

      </div>
    </section>
  );
}