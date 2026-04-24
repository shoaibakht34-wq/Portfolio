import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

export default function Skills() {
  const sections = [
    {
      title: "Backend Development",
      skills: [
        { name: "Java", level: 90, icon: <FaJava />, desc: "Core backend language for scalable systems" },
        { name: "Spring Boot", level: 85, icon: <SiSpringboot />, desc: "Framework for building REST APIs and microservices" },
        { name: "Spring MVC", level: 80, icon: <SiSpringboot />, desc: "Model-View-Controller architecture for web apps" },
        { name: "Hibernate (ORM)", level: 80, icon: <SiSpringboot />, desc: "Object-relational mapping for database interaction" },
        { name: "Spring Security", level: 75, icon: <SiSpringboot />, desc: "Authentication & authorization framework" },
        { name: "REST API Development", level: 90, icon: <SiJavascript />, desc: "Designing scalable API endpoints" },
        { name: "Microservices Architecture", level: 70, icon: <SiDocker />, desc: "Distributed system design approach" },
        { name: "JWT Authentication", level: 85, icon: <SiJavascript />, desc: "Token-based secure authentication" },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 85, icon: <FaReact />, desc: "Component-based UI development" },
        { name: "JavaScript (ES6+)", level: 85, icon: <SiJavascript />, desc: "Modern JS for dynamic web apps" },
        { name: "HTML5", level: 90, icon: <FaHtml5 />, desc: "Markup structure for web pages" },
        { name: "CSS3", level: 90, icon: <FaCss3Alt />, desc: "Styling and layout design" },
        { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss />, desc: "Utility-first modern styling framework" },
        { name: "Responsive UI Design", level: 85, icon: <FaReact />, desc: "Mobile-first adaptive layouts" },
        { name: "Modern UX Practices", level: 80, icon: <FaReact />, desc: "User-centered interface design" },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "PostgreSQL", level: 85, icon: <SiPostgresql />, desc: "Relational database system" },
        { name: "JDBC", level: 75, icon: <FaJava />, desc: "Java database connectivity" },
        { name: "SQL", level: 85, icon: <SiPostgresql />, desc: "Query language for database operations" },
        { name: "Git & GitHub", level: 90, icon: <FaGitAlt />, desc: "Version control and collaboration" },
        { name: "Maven", level: 80, icon: <FaJava />, desc: "Dependency and build management" },
        { name: "VS Code", level: 90, icon: <FaReact />, desc: "Code editor for development" },
        { name: "Render & Netlify", level: 80, icon: <SiDocker />, desc: "Deployment platforms" },
        { name: "Cloud Deployment", level: 75, icon: <SiDocker />, desc: "Deploying scalable apps on cloud" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">

      <h2 className="text-4xl text-center mb-12">Technical Expertise</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {sections.map((section, i) => (
          <Tilt key={i} glareEnable glareMaxOpacity={0.15} scale={1.05}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 
              p-6 rounded-xl hover:shadow-[0_0_30px_#8b5cf6] 
              hover:-translate-y-2 transition"
            >

              <h3 className="text-xl mb-6 text-purple-400">
                {section.title}
              </h3>

              <div className="space-y-5">

                {section.skills.map((skill, index) => (
                  <div key={index} className="group relative">

                    {/* SKILL NAME + ICON */}
                    <div className="flex items-center gap-3 text-sm mb-1">
                      <span className="text-lg text-purple-400">
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </div>

                    {/* TOOLTIP */}
                    <div className="absolute left-0 -top-8 opacity-0 group-hover:opacity-100 
                      bg-black/80 text-xs px-3 py-1 rounded transition pointer-events-none">
                      {skill.desc}
                    </div>

                    {/* PROGRESS BAR */}
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-purple-500 shadow-[0_0_10px_#8b5cf6]"
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