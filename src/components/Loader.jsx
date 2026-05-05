// src/components/Loader.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 500);

          return 100;
        }

        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center 
      bg-[#050816] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[140px]" />
      <div className="absolute w-[300px] h-[300px] bg-fuchsia-500/10 rounded-full blur-[100px]" />

      {/* LOGO / NAME */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Shoaib Akhtar
          <span className="text-purple-400">.</span>
        </h1>

        <p className="mt-4 text-gray-400 text-sm md:text-lg tracking-[0.35em] uppercase">
          Engineering Scalable Intelligence
        </p>
      </motion.div>

      {/* PROGRESS BAR */}
      <div className="relative z-10 mt-14 w-[280px] md:w-[400px]">
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-purple-500 shadow-[0_0_20px_#8b5cf6]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        <div className="flex justify-between mt-3 text-sm text-gray-400">
          <span>Loading Portfolio</span>
          <span>{progress}%</span>
        </div>
      </div>

      {/* PULSE RINGS */}
      <motion.div
        className="absolute w-52 h-52 border border-purple-500/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      />

      <motion.div
        className="absolute w-72 h-72 border border-fuchsia-500/10 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
      />
    </motion.div>
  );
}