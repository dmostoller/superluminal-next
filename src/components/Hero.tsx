"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Music, Calendar } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative h-[90vh]">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/SL-banner.jpg"
          alt="Superluminal Hero"
          fill
          priority
          className="object-cover object-[80%_center] md:object-[center_15%]"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-24 sm:mt-48"
        >
          <Link href="/music">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary/90 hover:bg-primary text-base sm:text-lg font-medium
              transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              <Music className="mr-2 h-5 w-5 sm:h-6 sm:w-6" /> Listen to Music
            </Button>
          </Link>
          <Link href="/shows">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto bg-secondary/80 text-base sm:text-lg font-medium
              transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/20"
            >
              <Calendar className="mr-2 h-5 w-5 sm:h-6 sm:w-6" /> Upcoming Shows
            </Button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-8 sm:bottom-16 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-foreground/80" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
