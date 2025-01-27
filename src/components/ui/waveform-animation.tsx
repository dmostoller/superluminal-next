"use client";

import { motion } from "framer-motion";

export const WaveformAnimation = () => {
  return (
    <div className="flex items-end justify-center w-full h-full gap-[2px]">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-primary/60"
          animate={{
            height: ["20%", "100%", "20%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.05,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
