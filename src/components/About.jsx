import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl mb-6 text-center">About Me</h2>

        <p className="text-gray-400 text-lg leading-relaxed text-center">
          I am a Computer Science Engineering student with a strong focus on 
          backend engineering and scalable system design.
          <br /><br />
          My core expertise lies in developing secure REST APIs using Spring Boot, 
          implementing authentication systems like JWT, and integrating them with 
          modern frontend frameworks such as React.
          <br /><br />
          I have built real-world applications including AI-based tools and 
          analytics platforms, where I focused on performance optimization, 
          clean architecture, and user-centric design.
          <br /><br />
          I am continuously learning and exploring advanced concepts like 
          microservices, cloud deployment, and distributed systems.
        </p>

      </motion.div>
    </section>
  );
}