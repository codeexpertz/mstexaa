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
    "/projects/TMCO.png",
    "/projects/TMCO.png",
    "/projects/TMCO.png",
    "/projects/TMCO.png",
  ];

  // Tech stack data
  const techStack = ["Flutter", "Next.js", "Node.js", "MongoDB", "JavaScript"];

  const items = [
    {
      title: "Multi-Role Access System",
      description:
        "Custom access levels for Users, Staff, Guests, and Maintenance to deliver tailored features for each stakeholder.",
      side: "left",
    },
    {
      title: "Property Browsing & Search",
      description:
        "Explore properties with advanced filters, detailed descriptions, images, and real-time availability.",
      side: "left",
    },
    {
      title: "Online Booking & Transactions",
      description:
        "Securely book properties, make payments, and manage rental agreements within the platform.",
      side: "left",
    },
    {
      title: "Staff & Task Management",
      description:
        "Assign tasks, monitor staff performance, and streamline internal property operations.",
      side: "right",
    },
    {
      title: "Maintenance Request System",
      description:
        "Users can raise maintenance tickets and maintenance teams track and resolve issues efficiently.",
      side: "right",
    },
    {
      title: "Real-Time Notifications",
      description:
        "Receive instant alerts for bookings, approvals, maintenance updates, and transaction status.",
      side: "right",
    },
    {
      title: "Secure Authentication",
      description:
        "Ensures safe login and data access with verified user authentication and role-based controls.",
      side: "left",
    },
    {
      title: "Cross-Platform Support",
      description:
        "Optimized for both mobile and web to ensure seamless access from any device.",
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
              TMCO
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-[#00000080] max-w-prose text-muted-foreground leading-relaxed"
            >
              TMCO is a real estate platform with role-based access for users,
              staff, guests, and maintenance teams. It streamlines property
              browsing, booking, coordination, and maintenance through secure
              automation and a modern UX.
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
              <ProjectCarousel />
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
                TMCO is an advanced cross-platform real estate solution
                engineered for seamless management of properties and tenant
                services. Built with a robust modern tech stack, it supports
                real-time updates, secure financial workflows, staff
                coordination, and maintenance tracking. Whether browsing
                listings, managing tenants, or scheduling property upkeep, TMCO
                delivers a responsive, secure, and scalable experience suitable
                for agencies, landlords, and facility management teams.
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
                  { category: "Mobile App", tech: "Flutter" },
                  { category: "Frontend (Web)", tech: "React" },
                  { category: "Backend", tech: "Node.js" },
                  {
                    category: "Authentication & Services",
                    tech: "Firebase (Auth, Push Notifications)",
                  },
                  { category: "Database", tech: "MongoDB" },
                  { category: "API Architecture", tech: "REST API" },
                  {
                    category: "Deployment",
                    tech: "Cloud Hosting & Scalable Infrastructure",
                  },
                  {
                    category: "Security",
                    tech: "Role-Based Access Control, Secure Payments",
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
