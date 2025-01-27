"use client";

import { Card } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative min-h-[80vh] sm:min-h-[90vh] overflow-hidden bg-background">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" /> */}

        <div className="relative mx-auto px-4">
          <div className="flex min-h-[80vh] sm:min-h-[100vh] items-center justify-end">
            {/* Image Section - Now Left */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute left-0 top-0 bottom-0 w-[65%]"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-background from-15% via-background/60 to-transparent z-10" />
              <div className="absolute -left-[10%] top-0 bottom-0 w-full">
                <Image
                  src="/superluminal2.png"
                  alt="Superluminal Contact"
                  fill
                  className="object-cover object-center opacity-40 md:opacity-100"
                  priority
                  sizes="65vw"
                />
              </div>
            </motion.div>
            {/* Content Column */}
            <div className="relative z-20 w-full lg:w-[45%] space-y-4 sm:space-y-8 py-4 md:py-0 px-4 md:px-12">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center rounded-full border px-2 sm:px-3 py-1 text-xs sm:text-sm 
                  text-muted-foreground backdrop-blur-sm border-primary/20 bg-background/50"
              >
                <span className="flex h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-primary mr-2" />
                Contact Us
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4 sm:space-y-6"
              >
                <h1
                  className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text 
                  text-transparent text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter"
                >
                  Get In Touch
                </h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-base sm:text-lg lg:text-xl text-muted-foreground"
                >
                  <p>
                    For all inquiries please fill out and submit the form below
                    with as much detail as possible, and we will get back to you
                    as soon as we can.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="w-full"
              >
                <Card className="bg-primary/5 backdrop-blur-sm border-primary/20">
                  <ContactForm />
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
