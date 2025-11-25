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
    "/projects/TwinCiti.png",
    "/projects/TwinCiti.png",
    "/projects/TwinCiti.png",
    "/projects/TwinCiti.png",
  ];

  // Tech stack data
  const techStack = ["Flutter", "Next.js", "Node.js", "MongoDB", "JavaScript"];

  const items = [
    {
      title: "High-Performance Infrastructure",
      description:
        "Optimized for demanding workloads such as 3D rendering, AI model training, and real-time analytics.",
      side: "left",
    },
    {
      title: "Modular & Scalable Architecture",
      description:
        "Supports horizontal scaling and modular service deployment for maximum flexibility.",
      side: "left",
    },
    {
      title: "Cross-Domain Compatibility",
      description:
        "Integrates seamlessly with diverse application domains including visualization, IoT, and ML pipelines.",
      side: "left",
    },
    {
      title: "Cross-Platform Accessibility",
      description:
        "Delivers a unified experience across mobile, desktop, and web via Flutter and Next.js.",
      side: "right",
    },
    {
      title: "Real-Time Data Processing",
      description:
        "Handles massive data streams efficiently with minimal latency and high reliability.",
      side: "right",
    },
    {
      title: "Enterprise-Grade Security",
      description:
        "Implements advanced authentication, encryption, and access control to ensure system integrity.",
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
              TwinCiti
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-[#00000080] max-w-prose text-muted-foreground leading-relaxed"
            >
              TwinCiti is a scalable infrastructure platform built for
              high-performance applications in 3D graphics and machine learning.
              With flexible architecture and advanced technology, it enables
              seamless integration and efficient deployment of
              resource-intensive solutions.
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
                TwinCiti is a robust and scalable infrastructure platform
                engineered to power advanced, resource-intensive applications
                across domains such as 3D graphics, AI, and machine learning.
                Built with a modular, future-proof architecture, TwinCiti
                delivers high performance, reliability, and seamless
                scalability, enabling developers and enterprises to innovate
                faster and deploy complex systems with confidence. Leveraging
                Flutter, Next.js, Node.js, and MongoDB, TwinCiti ensures a
                cross-platform experience that bridges intuitive interfaces with
                powerful backend processing. Designed for flexibility, speed,
                and precision, it serves as a strong foundation for
                next-generation computational and data-driven applications.
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
                  {
                    category: "Architecture",
                    tech: "Scalable Microservices, REST APIs",
                  },
                  {
                    category: "Data Processing",
                    tech: "Real-Time Streams, Message Queues",
                  },
                  {
                    category: "Machine Learning Integration",
                    tech: "TensorFlow, Python APIs",
                  },
                  {
                    category: "Security",
                    tech: "JWT Authentication, Data Encryption",
                  },
                  {
                    category: "Deployment",
                    tech: "Docker, CI/CD, Cloud Hosting (AWS, Vercel)",
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
