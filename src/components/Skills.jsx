import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaChrome,
  FaRobot,
  FaCode,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiPostman,
  SiSupabase,
} from "react-icons/si";

export default function Skills() {
  const sections = [
    {
      title: "Backend Development",
      skills: [
        {
          name: "Java",
          level: 92,
          icon: <FaJava />,
          desc: "Core backend language for scalable systems and enterprise-grade architecture",
        },
        {
          name: "Spring Boot",
          level: 90,
          icon: <SiSpringboot />,
          desc: "Production-ready backend framework for REST APIs and scalable applications",
        },
        {
          name: "Spring MVC",
          level: 85,
          icon: <SiSpringboot />,
          desc: "MVC architecture for structured Java web application development",
        },
        {
          name: "Hibernate (ORM)",
          level: 85,
          icon: <SiSpringboot />,
          desc: "ORM for optimized object-relational database interaction",
        },
        {
          name: "Spring Security",
          level: 82,
          icon: <SiSpringboot />,
          desc: "Authentication, authorization, and enterprise-grade application security",
        },
        {
          name: "REST API Development",
          level: 95,
          icon: <FaCode />,
          desc: "Designing scalable APIs for full-stack and distributed systems",
        },
        {
          name: "Microservices Architecture",
          level: 80,
          icon: <SiDocker />,
          desc: "Distributed backend design for modular and scalable services",
        },
        {
          name: "JWT Authentication",
          level: 88,
          icon: <SiJavascript />,
          desc: "Token-based secure authentication and session systems",
        },
      ],
    },

    {
      title: "Frontend Development",
      skills: [
        {
          name: "React.js",
          level: 90,
          icon: <FaReact />,
          desc: "Modern component-driven UI engineering for scalable interfaces",
        },
        {
          name: "JavaScript (ES6+)",
          level: 90,
          icon: <SiJavascript />,
          desc: "Dynamic frontend logic, state management, and API interaction",
        },
        {
          name: "HTML5",
          level: 92,
          icon: <FaHtml5 />,
          desc: "Semantic markup and structured web application foundations",
        },
        {
          name: "CSS3",
          level: 90,
          icon: <FaCss3Alt />,
          desc: "Advanced styling, layouts, responsiveness, and animation",
        },
        {
          name: "Tailwind CSS",
          level: 93,
          icon: <SiTailwindcss />,
          desc: "Utility-first framework for premium responsive interfaces",
        },
        {
          name: "Responsive UI Design",
          level: 88,
          icon: <FaReact />,
          desc: "Mobile-first adaptive design across all devices",
        },
        {
          name: "Modern UX Practices",
          level: 85,
          icon: <FaReact />,
          desc: "User-centered interfaces with performance-focused interaction",
        },
      ],
    },

    {
      title: "Database & Cloud Tools",
      skills: [
        {
          name: "PostgreSQL",
          level: 88,
          icon: <SiPostgresql />,
          desc: "Relational database design, optimization, and query systems",
        },
        {
          name: "Supabase",
          level: 85,
          icon: <SiSupabase />,
          desc: "Cloud PostgreSQL integration with scalable backend workflows",
        },
        {
          name: "JDBC",
          level: 80,
          icon: <FaJava />,
          desc: "Java database connectivity and SQL integration",
        },
        {
          name: "SQL",
          level: 90,
          icon: <SiPostgresql />,
          desc: "Efficient relational data querying and optimization",
        },
        {
          name: "Git & GitHub",
          level: 93,
          icon: <FaGitAlt />,
          desc: "Version control, collaboration, branching, and deployment workflows",
        },
        {
          name: "Maven",
          level: 85,
          icon: <FaJava />,
          desc: "Build automation and dependency lifecycle management",
        },
        {
          name: "Postman",
          level: 88,
          icon: <SiPostman />,
          desc: "API testing, debugging, and request automation",
        },
        {
          name: "Cloud Deployment",
          level: 85,
          icon: <SiDocker />,
          desc: "Deploying scalable apps on Netlify, Render, and cloud platforms",
        },
      ],
    },

    {
      title: "AI Automation & Browser Systems",
      skills: [
        {
          name: "Prompt Engineering",
          level: 92,
          icon: <FaRobot />,
          desc: "Designing optimized prompts for AI productivity and workflow systems",
        },
        {
          name: "Resume Parsing",
          level: 88,
          icon: <FaRobot />,
          desc: "AI-powered resume analysis and skill extraction systems",
        },
        {
          name: "LLM Integration (Ollama)",
          level: 88,
          icon: <FaRobot />,
          desc: "Integrating local and AI models for automation pipelines",
        },
        {
          name: "AI Matching Systems",
          level: 90,
          icon: <FaRobot />,
          desc: "Smart scoring, recommendation engines, and job-fit automation",
        },
        {
          name: "Cover Letter Automation",
          level: 90,
          icon: <FaRobot />,
          desc: "Automated personalized content generation using AI",
        },
        {
          name: "Chrome Extension Development",
          level: 87,
          icon: <FaChrome />,
          desc: "Browser-based automation tools and productivity extensions",
        },
        {
          name: "DOM Manipulation",
          level: 88,
          icon: <FaChrome />,
          desc: "Dynamic browser interaction and automation logic",
        },
        {
          name: "Browser Automation",
          level: 92,
          icon: <FaChrome />,
          desc: "Automating workflows across job platforms and web systems",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      {/* SECTION HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">
          Technical <span className="gradient-text">Expertise</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-3xl mx-auto leading-relaxed">
          A comprehensive blend of full-stack engineering, scalable backend systems,
          AI automation, browser technologies, cloud deployment, and modern frontend
          craftsmanship focused on building production-grade digital experiences.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {sections.map((section, i) => (
          <Tilt
            key={i}
            glareEnable
            glareMaxOpacity={0.12}
            scale={1.03}
            transitionSpeed={1500}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            className="rounded-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 
              p-6 rounded-2xl hover:shadow-[0_0_30px_#8b5cf6] 
              hover:-translate-y-2 transition duration-500 h-full"
            >
              {/* TITLE */}
              <h3 className="text-xl mb-6 text-purple-400 font-semibold">
                {section.title}
              </h3>

              <div className="space-y-5">
                {section.skills.map((skill, index) => (
                  <div key={index} className="group relative">
                    {/* ICON + NAME */}
                    <div className="flex items-center gap-3 text-sm mb-2">
                      <span className="text-lg text-purple-400 group-hover:scale-110 transition">
                        {skill.icon}
                      </span>

                      <span className="group-hover:text-purple-300 transition">
                        {skill.name}
                      </span>
                    </div>

                    {/* TOOLTIP */}
                    <div
                      className="absolute left-0 -top-11 opacity-0 group-hover:opacity-100 
                      bg-black/90 text-xs px-3 py-2 rounded-lg transition 
                      pointer-events-none border border-white/10 z-20 w-max max-w-[250px]"
                    >
                      {skill.desc}
                    </div>

                    {/* BAR */}
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 
                        shadow-[0_0_12px_#8b5cf6]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}