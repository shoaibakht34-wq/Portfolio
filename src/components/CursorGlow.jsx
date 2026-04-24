import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Track mouse movement
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    // Detect hover on interactive elements
    const handleEnter = () => setHovering(true);
    const handleLeave = () => setHovering(false);

    const elements = document.querySelectorAll("a, button");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-40 h-40 pointer-events-none z-50"
      animate={{
        x: position.x - 80,
        y: position.y - 80,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
    >
      <div
        className={`w-full h-full rounded-full blur-3xl transition-all duration-300
        ${
          hovering
            ? "bg-purple-500 opacity-40 scale-125"
            : "bg-purple-600 opacity-20 scale-100"
        }`}
      />
    </motion.div>
  );
}