"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Testimonials } from "@/components/learn/Testimonials";
import { FAQ } from "@/components/learn/FAQ";
import { StudyForm } from "@/components/learn/StudyForm";
import { CourseFeatures } from "@/components/learn/CourseFeatures";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import {
  Rocket,
  LineChart,
  ArrowRight,
  Presentation,
  Clock,
  Music,
  MessagesSquare,
} from "lucide-react";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto">
        {/* Hero Section */}
        <div className="relative min-h-[90vh] overflow-hidden bg-background">
          {/* Background Effects - unchanged */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" /> */}

          {/* Main Content Container */}
          <div className="relative mx-auto px-4">
            <div className="flex min-h-[80vh] md:min-h-[100vh] items-center">
              {/* Content Column */}
              <div className="relative z-20 w-full lg:w-[45%] space-y-8 px-4 md:px-8 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm 
                    text-muted-foreground backdrop-blur-sm border-primary/20 bg-background/50"
                >
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                  Professional Music Production Courses
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h1
                    className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text 
                    text-transparent text-4xl md:text-6xl font-bold leading-tight tracking-tighter mb-6"
                  >
                    Learn From Kabayun
                  </h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-base md:text-xl text-muted-foreground"
                  >
                    World-renowned psytrance producer with 15+ years of
                    experience, sharing knowledge through comprehensive courses
                    and personalized mentoring.
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex gap-4"
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Link
                      href="https://www.patreon.com/superluminal_kabayun_yasmin/shop"
                      target="_blank"
                      className="flex items-center"
                    >
                      Start Learning <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="secondary">
                    <Link
                      href="/video?tab=tutorials"
                      className="flex items-center"
                    >
                      Free Tutorials <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="absolute right-0 top-0 bottom-0 w-[100%]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-background from-10% via-background/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute -right-[10%] top-0 bottom-0 w-full">
                  <Image
                    src="/kaba1.jpg"
                    alt="Production Studio"
                    fill
                    className="object-cover object-center opacity-40 md:opacity-100"
                    priority
                    sizes="100vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4">
          {/* Skills Section */}
          <section className="relative min-h-[50vh] overflow-hidden bg-background/80 my-12 md:my-24">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />

            <div className="container relative mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Left Column with Image */}
                <div className="relative h-[300px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden order-2 lg:order-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent z-10" />{" "}
                  <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src="/kaba-psy.jpg"
                      alt="Kabayun Performing"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </motion.div>
                </div>

                {/* Right Column with Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6 md:space-y-8 order-1 lg:order-2"
                >
                  <div className="space-y-4">
                    <motion.div
                      className="inline-flex items-center rounded-full border px-2 md:px-3 py-1 text-xs md:text-sm 
              text-muted-foreground backdrop-blur-sm border-primary/20 bg-background/50"
                    >
                      <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                      Transform Your Production Skills
                    </motion.div>

                    <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      Struggling With Music Production?
                    </h2>

                    <p className="text-base md:text-xl text-muted-foreground">
                      Whether you&apos;re a beginner or experienced producer,
                      unlock your full potential with professional guidance and
                      proven techniques.
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="space-y-4 md:space-y-6 rounded-xl bg-primary/5 p-4 md:p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <LineChart className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      <h3 className="text-lg md:text-xl font-semibold">
                        Elevate Your Skills
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Master the art of sound design, mixing, and arrangement
                      with comprehensive courses designed to take your
                      productions to the next level.
                    </p>
                    <Button asChild size="lg" className="w-full">
                      <Link
                        href="https://www.patreon.com/superluminal_kabayun_yasmin/shop"
                        target="_blank"
                        className="flex items-center"
                      >
                        Start Learning Now <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* What You'll Learn Section */}
          <section className="my-24">
            <h2 className="text-2xl font-bold text-center mb-8">
              What You Will Learn
            </h2>
            <CourseFeatures />
          </section>

          {/* Testimonials and FAQ Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 my-8 md:my-16">
            {/* Testimonials Column */}
            <section className="space-y-4 md:space-y-8">
              <h2 className="text-xl md:text-2xl font-bold text-center">
                Testimonials
              </h2>
              <Testimonials />
            </section>

            {/* FAQ Column */}
            <section className="space-y-4 md:space-y-8">
              <h2 className="text-xl md:text-2xl font-bold text-center">
                Frequently Asked Questions
              </h2>
              <FAQ />
            </section>
          </div>

          {/* Final CTA Section */}
          <section className="relative overflow-hidden bg-background/80 md:my-24">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
            {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" /> */}

            <div className="container relative mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Right Column with Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6 md:space-y-8 order-2 lg:order-1"
                >
                  <div className="space-y-4">
                    <motion.div
                      className="inline-flex items-center rounded-full border px-2 md:px-3 py-1 text-xs md:text-sm 
                    text-muted-foreground backdrop-blur-sm border-primary/20 bg-background/50"
                    >
                      <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
                      Fast Track Your Journey
                    </motion.div>

                    <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      Ready to Take Your Music to the Next Level?
                    </h2>

                    <p className="text-base md:text-xl text-muted-foreground">
                      Get started today with comprehensive courses and tutorials
                      designed to accelerate your music production journey.
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="space-y-4 md:space-y-6 rounded-xl bg-primary/5 p-4 md:p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <Rocket className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      <h3 className="text-lg md:text-xl font-semibold">
                        Start Your Journey
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Join our community of producers and start creating the
                      music you&apos;ve always dreamed of with professional
                      guidance and support.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                      <Button asChild size="lg" className="w-full sm:flex-1">
                        <Link
                          href="https://www.patreon.com/superluminal_kabayun_yasmin/shop"
                          target="_blank"
                          className="flex items-center"
                        >
                          Start Learning <ArrowRight className="ml-2" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="secondary"
                        className="w-full sm:flex-1"
                      >
                        <Link
                          href="/video?tab=tutorials"
                          className="flex items-center"
                        >
                          Free Tutorials <ArrowRight className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>
                {/* Left Column with Image */}
                <div className="relative h-[300px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden order-1 lg:order-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent z-10" />
                  <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src="/kaba-psy2.jpg"
                      alt="Kabayun Performing"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Author Card and Contact Form Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8 my-24">
            {/* Author Welcome Card */}
            <Card className="max-w-3xl mx-auto">
              <div className="p-8 space-y-4">
                {/* Header Section */}
                <div className="border-b pb-2">
                  <h2 className="text-lg md:text-2xl font-bold mb-4">
                    Hey there, fellow music producers!
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground">
                    I wanted to take a moment to invite you to explore all the
                    resources available to you here. Whether you&apos;re just
                    starting out or looking to refine your skills, I&apos;ve got
                    you covered.
                  </p>
                </div>

                {/* Main Content Section */}
                <div className="space-y-2">
                  <div className="bg-secondary/20 p-2 rounded-lg">
                    <h3 className="font-semibold mb-2">Available Resources</h3>
                    <p className="text-muted-foreground">
                      Check out the collection of paid and free videos,
                      webinars, and tutorials that cover a wide range of topics,
                      from sound design to mixing and mastering, arrangement and
                      composition, workflow and productivity, and more.
                    </p>
                  </div>

                  <div className="bg-secondary/20 p-2 rounded-lg">
                    <h3 className="font-semibold mb-2">Private Lessons</h3>
                    <p className="text-muted-foreground">
                      If you&apos;re looking for a more personalized approach, I
                      also offer private lessons where we can dive deep into
                      your specific needs and goals.
                    </p>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="pt-2 border-t">
                  <p className="text-muted-foreground mb-4 italic">
                    I look forward to helping you on your musical journey!
                  </p>

                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <Avatar className="h-12 w-12 ring-2 ring-primary ring-offset-2">
                      <AvatarImage
                        src="/kaba.jpg"
                        alt="Kabayun"
                        width={96}
                        height={96}
                      />
                      <AvatarFallback>DM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Dave</p>
                      <p className="text-sm text-muted-foreground">Kabayun</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            {/* Contact Form */}
            <Card className="p-8">
              <div className="flex flex-col justify-center">
                <div className="text-center mb-8">
                  <Presentation className="h-10 w-10 mx-auto mb-2" />
                  <h2 className="text-2xl font-bold mb-4">Private Lessons</h2>
                  <p className="text-muted-foreground">
                    Enter your name and email address for more information about
                    one-on-one lessons.
                  </p>
                  {/* Features Section */}
                  <div className="grid grid-cols-1 gap-4 mt-6">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Flexible scheduling to fit your timezone
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Music className="h-5 w-5 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Personalized curriculum based on your goals
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessagesSquare className="h-5 w-5 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Ongoing support between sessions
                      </p>
                    </div>
                  </div>
                </div>
                <StudyForm />
                {/* Footer Section */}
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Your information is secure and will never be shared with third
                  parties.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
