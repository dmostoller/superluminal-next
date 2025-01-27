"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-screen mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[80vh]">
          {/* Superluminal Card */}
          <Link href="/music/superluminal" className="relative group h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-full overflow-hidden rounded-lg"
            >
              <Image
                src="/sl5.jpg"
                alt="Superluminal"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px, 2400px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/50 transition-opacity duration-300 group-hover:opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                  Superluminal
                </h2>
              </div>
            </motion.div>
          </Link>

          {/* Kabayun Card */}
          <Link href="/music/kabayun" className="relative group h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-full overflow-hidden rounded-lg"
            >
              <Image
                src="/kaba0.jpg"
                alt="Kabayun"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px, 2400px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/50 transition-opacity duration-300 group-hover:opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                  Kabayun
                </h2>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </main>
  );
}
