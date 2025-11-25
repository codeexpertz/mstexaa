"use client";

import { useState, useRef, useEffect } from "react";
import { Inter } from "next/font/google";
import AchievementGallery from "@/components/Home/AchievementGallery";
import ITServicesSection from "@/components/Home/ITServicesSection";
import WhyUsSection from "@/components/Home/WhyUsSection";
import Workflow from "@/components/Home/Workflow";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectCarousel } from "@/components/project/ProjectCarousel";
import Projects from "@/components/Home/Projects";
import { ImageSlider } from "@/components/project/ImageSlider";
import KeyFeatures from "@/components/project/KeyFeatures";

const inter = Inter({ subsets: ["latin"] });

const Page = () => {
  // Refs for sections
  const heroRef = useRef(null);
  const projectDetailsRef = useRef(null);
  const techStackRef = useRef(null);

  // Scroll animation values
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Define images for the carousel
  const Images = [
    "/projects/yonderaudio.png",
    "/projects/yonderaudio.png",
    "/projects/yonderaudio.png",
    "/projects/yonderaudio.png",
  ];

  // Tech stack data
  const techStack = ["Flutter", "Next.js", "Node.js", "MongoDB", "JavaScript"];

  const items = [
    {
      title: "Collaborative Music Creation",
      description:
        "Work with producers, vocalists, and musicians in real time with integrated project sharing tools.",
      side: "left",
    },
    {
      title: "Audio Mastering Suite",
      description:
        "Polish tracks with built-in AI-powered mastering and dynamic sound optimization.",
      side: "left",
    },
    {
      title: "Seamless Distribution",
      description:
        "Distribute music directly to streaming platforms like Spotify, Apple Music, and SoundCloud.",
      side: "left",
    },
    {
      title: "Cross-Platform Experience",
      description:
        "Enjoy a unified experience across mobile and web via Flutter and Next.js integration.",
      side: "right",
    },
    {
      title: "Real-Time Collaboration",
      description:
        "Collaborate instantly with multi-user sessions, live waveform updates, and project sync.",
      side: "right",
    },
    {
      title: "Analytics & Insights",
      description:
        "Track performance metrics, audience reach, and earnings with detailed real-time dashboards.",
      side: "right",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-[100svh]">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className={[
          // Background pattern image (provided asset)
          "relative overflow-hidden",
          'bg-[url("/herosection/Frame.svg")] bg-no-repeat bg-cover bg-center',
          inter.className,
        ].join(" ")}
      >
        {/* content container */}
        <motion.div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-4 py-16 md:px-8 md:py-24 lg:py-32 md:flex-row md:items-center md:gap-12">
          {/* Left copy */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.6 }} // Increased duration
            className="max-w-xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-pretty text-3xl font-semibold tracking-[-0.02em] md:text-4xl lg:text-5xl"
            >
              Yonder Audio
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-[#00000080] max-w-prose text-muted-foreground leading-relaxed"
            >
              Yonder Audio is a cross-platform music collaboration and
              production app built with Flutter, Next.js, Node.js, and MongoDB.
              It lets artists create, master, and distribute music seamlessly
              with scalable, high-performance tools.
            </motion.p>

            {/* Tech Stack */}
            <motion.div variants={fadeInUp} className="mt-6">
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#F97A02] text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Let's Talk Button */}
            <motion.div variants={fadeInUp} className="mt-6">
              <Link
                href="/calendly/meeting"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-[#F97A02] px-5 text-sm font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-[#ff7a2a] shadow-md"
              >
                {"Let's Talk"}{" "}
                <span className="text-base" aria-hidden>
                  ↗
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right visual - Project Carousel */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.6 }}
            className="relative w-full md:w-auto md:flex-1 mt-8 md:mt-0"
          >
            <div className="w-full max-w-md mx-auto">
              <ProjectCarousel/>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Project Details */}
      <section ref={projectDetailsRef} className="max-w-6xl mx-auto px-4 ">
        <div>
          {/* Main Content */}
          <div>
            {/* Overview */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Overview
              </h2>
              <p className="max-w-2xl text-[#00000080] text-muted-foreground leading-relaxed">
                Yonder Audio is a next-generation music collaboration and
                production platform by Mstexa, empowering artists and
                producers to bring their musical ideas to life. It lets users
                create, master, distribute, and promote their music seamlessly
                from a single unified interface. Built with Flutter, Next.js,
                Node.js, and MongoDB, it delivers a fast, responsive, and
                cross-platform experience across web and mobile. With scalable
                architecture, real-time collaboration, and intuitive design,
                Yonder Audio bridges creativity and technology—giving musicians
                the freedom to produce, connect, and grow without limits.
              </p>
            </motion.div>

            {/* Key Features */}
            <KeyFeatures items={items} />

            {/* Technology Stack */}
            <motion.div
              ref={techStackRef}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Technology Stack
              </h2>
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  { category: "Frontend (Mobile)", tech: "Flutter" },
                  { category: "Frontend (Web)", tech: "Next.js, React.js" },
                  { category: "Backend", tech: "Node.js, Express.js" },
                  { category: "Database", tech: "MongoDB" },
                  { category: "Architecture", tech: "Scalable Microservices" },
                  {
                    category: "Real-Time Features",
                    tech: "WebSockets, Socket.io",
                  },
                  {
                    category: "Security",
                    tech: "JWT Authentication, HTTPS Encryption",
                  },
                  {
                    category: "Deployment",
                    tech: "CI/CD, Cloud Hosting (Vercel, AWS)",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="p-4 rounded-lg border border-border/40 bg-card/50"
                  >
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {item.category}
                    </p>
                    <p className="text-foreground font-semibold">{item.tech}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <ImageSlider images={Images} duration={20} reverse />
      <Projects />
      <AchievementGallery />
      <ITServicesSection />
      <Workflow />
      <WhyUsSection />
      <TestimonialsSection />
    </main>
  );
};

export default Page;
