"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Music,
  Calendar,
  BookOpen,
  Video,
  User,
  MessageSquare,
  ShoppingBag,
  MoveRightIcon,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Music,
    title: "Music",
    description: "Listen to Superluminal and Kabayun releases",
    href: "/music",
    size: "hero",
    accent: "primary",
    bgImage: "/sl5.jpg",
  },
  {
    icon: User,
    title: "Bio",
    description: "About us and our journey",
    href: "/about",
    size: "small",
    accent: "yellow",
    bgImage: "/superluminal2.png",
  },
  {
    icon: Video,
    title: "Video",
    description: "Live performances and free tutorials",
    href: "/video",
    size: "large",
    accent: "blue",
    bgImage: "/sl6.png",
  },
  {
    icon: BookOpen,
    title: "Learn",
    description: "Production techniques, private lessons, and tutorials",
    href: "/learn",
    size: "large",
    accent: "purple",
    bgImage: "/kaba-psy.jpg",
  },
  {
    icon: Calendar,
    title: "Gigs",
    description: "Upcoming shows and past performances",
    href: "/gigs",
    size: "medium",
    accent: "orange",
    bgImage: "/sl3.jpg",
  },
  {
    icon: ShoppingBag,
    title: "Shop",
    description: "Music, merch, and more",
    href: "https://kabayun.bandcamp.com/",
    external: true,
    size: "medium",
    accent: "green",
    bgImage: "/sl8.jpg",
  },
  {
    icon: MessageSquare,
    title: "Contact",
    description: "Get in touch for bookings",
    href: "/contact",
    size: "small",
    accent: "pink",
    bgImage: "/sl7.jpg",
  },
];

export function FeaturedSection() {
  const getGridClass = (size: string) => {
    switch (size) {
      case "full":
        return "col-span-12"; // Full width
      case "hero":
        return "col-span-12 md:col-span-8"; // 2/3 width
      case "large":
        return "col-span-12 md:col-span-6"; // Half width
      case "medium":
      case "small":
      default:
        return "col-span-12 md:col-span-4"; // One third width
    }
  };

  return (
    <section className="relative min-h-screen bg-background py-24">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={getGridClass(feature.size)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              viewport={{ once: true }}
            >
              <Link href={feature.href} className="block h-full">
                <Card className="group relative h-96 overflow-hidden bg-card/50 border-border hover:bg-accent/50 transition-all duration-300">
                  {feature.bgImage && (
                    <div
                      className="absolute inset-0 opacity-25 group-hover:opacity-75 transition-opacity duration-300 ease-in-out"
                      style={{
                        backgroundImage: `url(${feature.bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  )}
                  <CardContent className="flex flex-col h-full px-8 py-12">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <feature.icon className="h-8 w-8 text-foreground group-hover:text-primary transition-colors" />
                        <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
                          {feature.title}
                        </h3>
                      </div>

                      <p className="text-base md:text-lg text-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-border">
                      <div className="flex items-center text-sm text-popover-foreground">
                        <div className="flex items-center">
                          <span className="font-mono text-lg">
                            <MoveRightIcon />
                          </span>
                          <span className="ml-2">
                            {(feature.size === "hero" ||
                              feature.size === "large") &&
                              "Explore"}
                            {(feature.size === "medium" ||
                              feature.size === "small") &&
                              "Discover"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
