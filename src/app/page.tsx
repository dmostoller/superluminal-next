import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FeaturedSection } from "@/components/FeaturedSection";

export const metadata: Metadata = {
  title: "Superluminal | Home",
  description: "Official website of Superluminal - Electronic Music Producer",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-primary/5" />

      {/* Content */}
      <div className="relative">
        <Hero />
        <FeaturedSection />
      </div>
    </main>
  );
}
