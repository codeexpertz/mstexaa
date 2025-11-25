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
  const Images = [
    "/projects/pindeats.png",
    "/projects/pindeats2.png",
    "/projects/pindeats.png",
    "/projects/pindeats2.png",
  ];

  // Tech stack data
  const techStack = ["React/Next.js", "Node.js", "MongoDB", "Flutter"];

  const items = [
    {
      title: "Restaurant Discovery",
      description:
        "Explore nearby restaurants, cafes, and eateries with real-time location-based filtering and recommendations.",
      side: "left",
    },
    {
      title: "Smart Ordering System",
      description:
        "Easily browse menus, customize dishes, and place instant orders with live order tracking and updates.",
      side: "left",
    },
    {
      title: "Seamless Delivery Tracking",
      description:
        "Track delivery agents in real time and get accurate ETA updates for every order.",
      side: "left",
    },
    {
      title: "Cross-Platform Experience",
      description:
        "Built with Flutter and React.js for consistent performance and design across web and mobile platforms.",
      side: "right",
    },
    {
      title: "Secure Payments & Authentication",
      description:
        "Integrated secure payment gateways and robust user authentication with JWT and encryption standards.",
      side: "right",
    },
    {
      title: "Admin & Restaurant Dashboard",
      description:
        "Comprehensive dashboards for managing menus, tracking orders, analyzing sales, and optimizing delivery performance.",
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
              Pind Eats
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-[#00000080] max-w-prose text-muted-foreground leading-relaxed"
            >
              We have created food ordering and delivery apps for many food
              services that connect foodies with nearby restaurants effortlessly
              with tailored food delivery apps. Here is how we bring
              user-friendly app development with the latest technology and
              features for many businesses.
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
                Pind Eats is a modern food ordering and delivery platform that
                seamlessly connects food lovers with nearby restaurants through
                a fast, intuitive, and engaging experience. Developed using
                Java, React.js, Flutter, and MongoDB, it offers a
                powerful ecosystem for both restaurant partners and customers —
                from menu browsing and real-time tracking to secure payment and
                order management. With a focus on speed, scalability, and
                user-friendliness, Pind Eats enables restaurants to expand their
                digital presence while giving users a smooth and personalized
                food discovery journey across web and mobile platforms.
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
                  {
                    category: "Frontend (Web)",
                    tech: "React.js, JavaScript, HTML, CSS, Tailwind CSS",
                  },
                  { category: "State Management", tech: "Redux Toolkit" },
                  { category: "Frontend (Mobile)", tech: "Flutter" },
                  { category: "Backend", tech: "Java, Spring Boot" },
                  { category: "Database", tech: "MongoDB" },
                  {
                    category: "Architecture",
                    tech: "Microservices, RESTful APIs",
                  },
                  {
                    category: "Security",
                    tech: "JWT Authentication, Data Encryption",
                  },
                  {
                    category: "Features",
                    tech: "Real-Time Tracking, Live Updates, Push Notifications",
                  },
                  {
                    category: "Deployment",
                    tech: "Docker, AWS, CI/CD Pipelines",
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
