import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiPostgresql,
  SiJavascript,
} from "react-icons/si";

const icons = [
  { Icon: FaReact, radius: 120, speed: 12 },
  { Icon: FaJava, radius: 140, speed: 14 },
  { Icon: SiSpringboot, radius: 160, speed: 16 },
  { Icon: SiPostgresql, radius: 180, speed: 18 },
  { Icon: SiJavascript, radius: 200, speed: 20 },
  { Icon: FaGithub, radius: 220, speed: 22 },
  { Icon: FaDocker, radius: 240, speed: 24 },
];

export default function OrbitIcons() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

      {icons.map(({ Icon, radius, speed }, i) => (
        <motion.div
          key={i}
          className="absolute text-gray-300 text-2xl"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: speed,
            ease: "linear",
          }}
          style={{
            width: radius * 2,
            height: radius * 2,
            position: "absolute",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className="hover:text-purple-400 transition"
          >
            <Icon />
          </div>
        </motion.div>
      ))}

    </div>
  );
}