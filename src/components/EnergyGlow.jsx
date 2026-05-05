// src/components/EnergyGlow.jsx
import { motion } from "framer-motion";

export default function EnergyGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* TOP CENTER */}
      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 
        w-[900px] h-[350px] 
        bg-purple-600/25 blur-[180px] rounded-full"
      />

      {/* LEFT ORB */}
      <motion.div
        animate={{
          x: [-30, 30, -30],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-1/3 left-[-150px] 
        w-[400px] h-[400px] 
        bg-fuchsia-500/10 blur-[160px] rounded-full"
      />

      {/* RIGHT ORB */}
      <motion.div
        animate={{
          x: [30, -30, 30],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-[-150px] 
        w-[450px] h-[450px] 
        bg-violet-500/10 blur-[180px] rounded-full"
      />
    </div>
  );
}