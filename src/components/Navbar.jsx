import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaFileDownload,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  // ACTIVE SECTION TRACKING
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((id) => document.getElementById(id));

      const scrollY = window.scrollY + 120;

      sections.forEach((section) => {
        if (
          section &&
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActive(section.id);
        }
      });

      // SCROLL PROGRESS BAR
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-purple-500 z-[60] shadow-[0_0_10px_#8b5cf6]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed top-0 w-full z-50 backdrop-blur-2xl 
        bg-black/30 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* LEFT BRAND */}
          <a href="#home" className="group">
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">
              Shoaib Akhtar
              <span className="text-purple-400 group-hover:text-white transition">
                .
              </span>
            </h1>

            <p className="text-xs text-gray-400 tracking-[0.25em] uppercase mt-1">
              Full Stack • AI Systems
            </p>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`relative capitalize text-sm tracking-wide transition ${
                  active === item
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item}

                {/* ACTIVE UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-purple-400 transition-all duration-300 ${
                    active === item ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* RIGHT CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* RESUME */}
            <a
              href="/Shoaib-akhtar-resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-xl 
              bg-purple-600 hover:scale-105 transition 
              shadow-[0_0_25px_#8b5cf6]"
            >
              <FaFileDownload />
              Resume
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/shoaibakht34-wq"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-gray-300 hover:text-purple-400 transition"
            >
              <FaGithub />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/shoaib-akhtar-90b286297/"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-gray-300 hover:text-purple-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="md:hidden bg-black/95 border-t border-white/10"
            >
              <div className="flex flex-col px-6 py-6 gap-5">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setMenuOpen(false)}
                    className={`capitalize text-lg ${
                      active === item
                        ? "text-purple-400"
                        : "text-gray-300"
                    }`}
                  >
                    {item}
                  </a>
                ))}

                {/* MOBILE LINKS */}
                <div className="flex gap-5 pt-4 border-t border-white/10">
                  <a
                    href="https://github.com/shoaibakht34-wq"
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl hover:text-purple-400 transition"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/shoaib-akhtar-90b286297/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl hover:text-purple-400 transition"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="/Shoaib-akhtar-resume.pdf"
                    download
                    className="text-2xl hover:text-purple-400 transition"
                  >
                    <FaFileDownload />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}