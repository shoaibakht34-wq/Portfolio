import { motion } from "framer-motion";

export default function Experience() {
  const data = [

    {
      role: "Backend Development Intern — Analyze Infotech",
      year: "2024",
      desc: "Worked on backend development using Java and Spring Boot. Contributed to building and testing REST APIs, performed debugging, and optimized database queries. Collaborated in a team environment using Git for version control and code management.",
    },

    {
      role: "Full Stack Developer — Personal Projects",
      year: "2024 - Present",
      desc: "Developed full-stack applications including AI-based tools and analytics platforms using React and Spring Boot. Focused on building scalable backend systems, secure authentication using JWT, and responsive user interfaces.",
    },

    {
      role: "Backend Development Focus",
      year: "2023 - 2024",
      desc: "Built REST APIs, implemented authentication systems, and worked on scalable backend architecture. Gained strong hands-on experience in database design, API optimization, and system performance.",
    },

    {
      role: "Computer Science Engineering Student",
      year: "2022 - Present",
      desc: "Pursuing B.Tech in Computer Science with focus on Data Structures, System Design, and Software Development. Continuously improving problem-solving and development skills.",
    },

  ];

  return (
    <section id="experience" className="py-24 px-6">

      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl text-center mb-12"
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto relative border-l border-white/10">

        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="mb-10 ml-6"
          >

            {/* Timeline Dot */}
            <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-1.5 mt-2" />

            <h3 className="text-xl font-semibold">
              {item.role}
            </h3>

            <span className="text-sm text-gray-400">
              {item.year}
            </span>

            <p className="text-gray-400 mt-2 leading-relaxed">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}