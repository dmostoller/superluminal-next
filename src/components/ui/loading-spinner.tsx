"use client";

import { motion } from "framer-motion";

export function LoadingSpinner() {
  const circleVariants = {
    start: {
      scale: 0.8,
      opacity: 0.5,
    },
    end: {
      scale: 1,
      opacity: 1,
    },
  };

  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="flex gap-2"
        variants={containerVariants}
        initial="start"
        animate="end"
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="w-3 h-3 rounded-full bg-gradient-to-r from-primary via-purple-500 to-primary"
            variants={circleVariants}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
