// src/components/OrbitIcons.jsx
import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiHibernate,
  SiMysql,
  SiDocker,
  SiApachemaven,
  SiSupabase,
} from "react-icons/si";

export default function OrbitIcons() {
  const orbitLayers = [
    // INNER ORBIT
    {
      radius: 110,
      duration: 18,
      icons: [
        { icon: <FaJava />, label: "Java" },
        { icon: <SiSpringboot />, label: "Spring Boot" },
        { icon: <FaReact />, label: "React" },
        { icon: <SiJavascript />, label: "JavaScript" },
        { icon: <SiPostgresql />, label: "PostgreSQL" },
        { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      ],
    },

    // MIDDLE ORBIT
    {
      radius: 170,
      duration: 28,
      icons: [
        { icon: <SiHibernate />, label: "Hibernate" },
        { icon: <FaGitAlt />, label: "Git" },
        { icon: <FaGithub />, label: "GitHub" },
        { icon: <FaHtml5 />, label: "HTML5" },
        { icon: <FaCss3Alt />, label: "CSS3" },
        { icon: <SiMysql />, label: "SQL" },
        { icon: <SiSupabase />, label: "Supabase" },
        { icon: <SiApachemaven />, label: "Maven" },
      ],
    },

    // OUTER ORBIT
    {
      radius: 235,
      duration: 40,
      icons: [
        { icon: <FaDatabase />, label: "Database Design" },
        { icon: <FaCode />, label: "REST APIs" },
        { icon: <SiDocker />, label: "Microservices" },
        { icon: <FaNodeJs />, label: "System Design" },
        { icon: <FaReact />, label: "Responsive UI" },
        { icon: <SiSpringboot />, label: "Spring Security" },
        { icon: <SiJavascript />, label: "JWT Auth" },
        { icon: <FaGitAlt />, label: "Version Control" },
        { icon: <SiPostgresql />, label: "Cloud Deployment" },
      ],
    },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {orbitLayers.map((orbit, orbitIndex) => (
        <motion.div
          key={orbitIndex}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: orbit.duration,
            ease: "linear",
          }}
          className="absolute rounded-full border border-white/5"
          style={{
            width: orbit.radius * 2,
            height: orbit.radius * 2,
          }}
        >
          {orbit.icons.map((item, i) => {
            const angle = (360 / orbit.icons.length) * i;

            return (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${angle}deg) translate(${orbit.radius}px) rotate(-${angle}deg)`,
                  transformOrigin: "center",
                }}
                whileHover={{ scale: 1.2 }}
              >
                <div
                  title={item.label}
                  className="w-12 h-12 rounded-full 
                  bg-white/10 backdrop-blur-xl 
                  border border-white/10
                  flex items-center justify-center
                  text-purple-400 text-xl
                  shadow-[0_0_20px_rgba(139,92,246,0.35)]
                  hover:shadow-[0_0_35px_rgba(139,92,246,0.7)]
                  transition-all duration-300"
                >
                  {item.icon}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
}