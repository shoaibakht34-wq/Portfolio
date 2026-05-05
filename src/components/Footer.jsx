import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  return (
    <footer className="relative mt-24 border-t border-white/10 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Shoaib Akhtar
              <span className="text-purple-400">.</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed max-w-md">
              Building scalable backend systems, AI-powered products,
              and immersive full-stack experiences through engineering,
              automation, and modern software craftsmanship.
            </p>

            <p className="text-sm text-purple-400 mt-4 tracking-[0.25em] uppercase">
              Full Stack • AI Systems • Scalable Engineering
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-semibold mb-5 text-purple-400">
              Quick Navigation
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="capitalize text-gray-400 hover:text-purple-400 transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* CONNECT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-5 text-purple-400">
              Connect Beyond
            </h3>

            <div className="flex gap-5 text-2xl">
              <a
                href="https://github.com/shoaibakht34-wq"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-purple-400 hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/shoaib-akhtar-90b286297/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-purple-400 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:shoaibakht34@gmail.com"
                className="text-gray-400 hover:text-purple-400 hover:scale-110 transition"
              >
                <FaEnvelope />
              </a>
            </div>

            <p className="text-gray-500 text-sm mt-5 leading-relaxed">
              Currently focused on AI automation ecosystems,
              scalable backend systems, and advanced product engineering.
            </p>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        {/* BOTTOM BAR */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* COPYRIGHT */}
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Shoaib Akhtar — Built with React,
            Tailwind CSS, Framer Motion, and scalable engineering mindset.
          </p>

          {/* SCROLL TOP */}
          <button
            onClick={scrollToTop}
            className="group p-4 rounded-full bg-white/5 border border-white/10 
            hover:border-purple-400 hover:shadow-[0_0_25px_#8b5cf6] 
            hover:-translate-y-1 transition duration-300"
          >
            <FaArrowUp className="text-purple-400 group-hover:-translate-y-1 transition" />
          </button>
        </div>
      </div>
    </footer>
  );
}