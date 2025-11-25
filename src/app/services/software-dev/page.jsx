"use client";
import React, { useState, useRef } from "react";
import { Inter } from "next/font/google";
import AchievementGallery from "@/components/Home/AchievementGallery";
import ITServicesSection from "@/components/Home/ITServicesSection";
import WhyUsSection from "@/components/Home/WhyUsSection";
import Workflow from "@/components/Home/Workflow";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const Page = () => {
  const [activeTab, setActiveTab] = useState("Team"); // Default tab
  const tabContent = {
    Team: {
      title: "Skilled Development Team",
      description:
        "Our engineers bring deep expertise across modern frameworks, languages, and architectures. We emphasize collaboration, transparency, and craftsmanship — ensuring every line of code supports scalability, performance, and maintainability. From backend systems to mobile apps, our team turns complex challenges into seamless digital solutions.",
    },
    Experience: {
      title: "Proven Development Experience",
      description:
        "We’ve built software for startups, enterprises, and everything in between. With a track record in web, mobile, and cloud-based solutions, our developers apply best practices like CI/CD, automated testing, and agile methodologies. Each project benefits from years of cross-industry experience — ensuring stable, secure, and high-quality outcomes.",
    },
    Approach: {
      title: "Full-Cycle Development Approach",
      description:
        "Our process covers the entire software lifecycle — from discovery and architecture planning to deployment and ongoing support. We focus on iterative delivery, allowing flexibility and fast feedback. By integrating DevOps, security, and performance optimization from day one, we deliver robust software that evolves with your business needs.",
    },
  };

  // Scroll animations
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const approachRef = useRef(null);
  const servicesRef = useRef(null);

  // Transform values for scroll-based animations
  const heroY = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, -50, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  
  const approachY = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, -30, -60]);
  const approachOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [1, 1, 0]);

  const servicesY = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, -30, -60]);
  const servicesOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [1, 1, 0]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
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
        <motion.div
          className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-6 py-20 md:flex-row md:items-center md:gap-12 md:py-28"
        >
          {/* Left copy */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-pretty text-4xl font-semibold tracking-[-0.02em] md:text-6xl"
            >
              Software Development
              <br />
              Services
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-5 max-w-prose text-muted-foreground leading-relaxed"
            >
              From concept to deployment, we craft secure, scalable, and
              high-performance software solutions that drive innovation and
              business growth.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8"
            >
              <Link
                href="/calendly/meeting"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#FF873A] px-6 text-sm font-medium text-black transition-colors  focus:outline-none focus:ring-2  focus:ring-offset-2"
              >
                {"Let's Talk"}{" "}
                <span className="text-lg" aria-hidden>
                  ↗
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right visual as a single image */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.6 }}
            className="relative -mx-6 w-full md:mx-0 md:flex-1"
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src="/services/digital-desgining/ux-hero.png"
              alt="Showcase of our UI design on a tablet"
              className="mx-auto w-[82%]  max-w-lg md:max-w-none"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Approach Section */}
      <motion.section
        ref={approachRef}
        style={{ y: approachY, opacity: approachOpacity }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className={`relative mx-auto w-full max-w-7xl px-6 py-8 ${inter.className}`}
      >
        {/* subtle right gradient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 md:block"
        >
          <div
            className="absolute right-0 top-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(40% 40% at 50% 50%, var(--brand, #d97706), transparent 70%)",
            }}
          />
        </div>

        {/* Added SVG to the right bottom */}
        <div className="pointer-events-none absolute z-0 -bottom-10 -right-10 hidden md:block">
          <svg
            width="300"
            height="300"
            viewBox="0 0 273 517"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1280_6401)">
              <circle cx="258.5" cy="258.5" r="181" fill="#FBE3E0" />
            </g>
            <defs>
              <filter
                id="filter0_f_1280_6401"
                x="0"
                y="0"
                width="517"
                height="517"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="38.75"
                  result="effect1_foregroundBlur_1280_6401"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <motion.div
          variants={staggerContainer}
          className="grid items-center gap-10 md:grid-cols-2 md:gap-14"
        >
          {/* Left: single image */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-none"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src="/services/vector.png"
              alt="Design tools composition showing color picker, cube, and UI panels"
              className="mx-auto h-auto w-full max-w-[560px] md:max-w-none"
            />
          </motion.div>

          {/* Right: content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl md:ml-6"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-sm font-bold"
              style={{
                borderColor:
                  "color-mix(in oklab, var(--brand, #F97A02) 40%, transparent)",
                color: "var(--brand, #F97A02)",
                backgroundColor:
                  "color-mix(in oklab, var(--brand, #FBE6C9) 8%, transparent)",
              }}
            >
              Why Mstexa?
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-pretty text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl"
            >
              Top-Tier Brands
              <br />
              Trust Our Software
              <br />
              Approach
            </motion.h2>

            {/* pills */}
            <motion.div
              variants={fadeInUp}
              className="mt-6 flex flex-wrap gap-3"
            >
              {["Team", "Experience", "Approach"].map((label, i) => (
                <motion.button
                  key={label}
                  type="button"
                  onClick={() => setActiveTab(label)} // Update state on click
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    activeTab === label
                      ? "bg-[#FF873A] text-black"
                      : "text-[#FF873A] bg-transparent"
                  }`}
                  style={{
                    borderColor:
                      "color-mix(in oklab, var(--brand, #FF873A) 45%, transparent)",
                    // Color logic is handled by conditional classes above
                  }}
                  aria-pressed={activeTab === label} // Indicate active state
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {label}
                </motion.button>
              ))}
            </motion.div>

            {/* Dynamic Content Area */}
            <motion.div
              variants={fadeInUp}
              className="mt-6"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-lg font-bold text-foreground"
              >
                {tabContent[activeTab].title}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-2 relative z-10 text-sm font-medium md:w-[500px] leading-6 text-[#00000080]"
              >
                {tabContent[activeTab].description}
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8"
            >
              <Link
                href="/calendly/meeting"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-black shadow-sm"
                style={{ backgroundColor: "var(--brand, #FF873A)" }}
              >
                Let’s Talk
                <span aria-hidden="true">↗</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Software Development Services Section */}
      <motion.section
        ref={servicesRef}
        style={{ y: servicesY, opacity: servicesOpacity }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative isolate bg-[#FFF6EE] text-foreground py-16 md:py-24"
      >
        {/* Background decorative image */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <img
            src="/services/achievment-shape.png"
            alt=""
            className="absolute left-0 top-0 w-[520px] max-w-[50vw] select-none"
          />
        </div>

        <motion.div
          variants={staggerContainer}
          className="relative mx-auto max-w-6xl px-4"
        >
          {/* Tagline */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-bold"
              style={{
                borderColor:
                  "color-mix(in oklab, var(--brand, #F97A02) 40%, transparent)",
                color: "var(--brand, #F97A02)",
                backgroundColor:
                  "color-mix(in oklab, var(--brand, #FBE6C9) 8%, transparent)",
              }}
            >
            • What We Deliver
            </motion.span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.6 }}
            className="text-balance mt-4 text-center text-3xl font-bold md:text-5xl"
          >
            Custom Software Development Services
          </motion.h2>

          {/* Grid Layout */}
          <motion.div
            variants={staggerContainer}
            className="mt-12 grid gap-6"
          >
            {/* Row 1 */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {/* Large Card */}
              <motion.article
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="sm:col-span-2 lg:col-span-2 rounded-2xl bg-white border border-border p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md flex flex-col"
              >
                <div>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    src="/services/software-development/custom.svg"
                    alt="Custom Software Development"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <motion.h3
                    variants={fadeInUp}
                    className="text-xl md:text-2xl font-bold"
                  >
                    Custom Software Development
                  </motion.h3>
                </div>
                <motion.p
                  variants={fadeInUp}
                  className="mt-2 md:w-[320px] font-medium text-xs leading-relaxed text-[#00000080]"
                >
                  We design and build tailored software solutions that align
                  with your business goals and deliver lasting impact.
                </motion.p>
              </motion.article>

              {/* Smaller Cards */}
              <motion.article
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-sm hover:shadow-md flex flex-col"
              >
                <div>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    src="/services/software-development/webapp.svg"
                    alt="Web Application Development"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <motion.h3
                    variants={fadeInUp}
                    className="text-lg font-bold">
                    Web Application Development
                  </motion.h3>
                </div>
                <motion.p
                  variants={fadeInUp}
                  className="mt-2 text-xs font-medium leading-relaxed text-[#00000080]"
                >
                  Robust, scalable web apps crafted with modern technologies to
                  ensure speed, performance, and reliability.
                </motion.p>
              </motion.article>

              <motion.article
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-sm hover:shadow-md flex flex-col"
              >
                <div>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    src="/services/software-development/enterprise.svg"
                    alt="Enterprise Software Solutions"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <motion.h3
                    variants={fadeInUp}
                    className="text-lg font-bold">
                    Enterprise Software Solutions
                  </motion.h3>
                </div>
                <motion.p
                  variants={fadeInUp}
                  className="mt-2 text-xs font-medium leading-relaxed text-[#00000080]"
                >
                  We develop secure and high-performance enterprise systems that
                  streamline operations and boost productivity.
                </motion.p>
              </motion.article>
            </motion.div>

            {/* Row 2 */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              <motion.article
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-sm hover:shadow-md flex flex-col"
              >
                <div>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    src="/services/software-development/integration.svg"
                    alt="Software Integration Services"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <motion.h3
                    variants={fadeInUp}
                    className="text-lg font-bold">
                    Software Integration Services
                  </motion.h3>
                </div>
                <motion.p
                  variants={fadeInUp}
                  className="mt-2 text-xs font-medium leading-relaxed text-[#00000080]"
                >
                  Seamlessly connect your systems, databases, and APIs to create
                  efficient and unified digital ecosystems.
                </motion.p>
              </motion.article>

              <motion.article
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-white border border-border p-6 md:p-8 shadow-sm hover:shadow-md flex flex-col"
              >
                <div>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    src="/services/software-development/maintenance.svg"
                    alt="Maintenance & Support"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <motion.h3
                    variants={fadeInUp}
                    className="text-lg font-bold">
                    Maintenance & Support
                  </motion.h3>
                </div>
                <motion.p
                  variants={fadeInUp}
                  className="mt-2 text-xs font-medium leading-relaxed text-[#00000080]"
                >
                  Ensure continuous performance and stability with regular
                  updates, bug fixes, and proactive technical support.
                </motion.p>
              </motion.article>

              {/* Large Card */}
              <motion.article
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="sm:col-span-2 lg:col-span-2 rounded-2xl bg-white border border-border p-6 md:p-8 shadow-sm hover:shadow-md flex flex-col"
              >
                <div>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    src="/services/software-development/testing.svg"
                    alt="Quality Assurance & Testing"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <motion.h3
                    variants={fadeInUp}
                    className="text-xl md:text-2xl font-bold">
                    Quality Assurance & Testing
                  </motion.h3>
                </div>
                <motion.p
                  variants={fadeInUp}
                  className="mt-2 md:w-[350px] font-medium text-xs leading-relaxed text-[#00000080]"
                >
                  We perform comprehensive testing to guarantee your software is
                  secure, fast, and ready for real-world use.
                </motion.p>
              </motion.article>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex justify-center"
          >
            <Link
              href="/calendly/meeting"
              className="inline-flex items-center gap-2 rounded-full bg-[#F97A02] px-5 py-2.5 text-sm font-semibold text-[#000000] shadow-sm hover:bg-[#ff8d26] transition"
            >
              Start Project
              <span aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2938 9.44492C13.8441 8.9952 13.6168 7.87939 13.5029 6.866C13.3538 5.56048 13.4102 4.23496 13.7181 2.95853C13.949 2.00151 14.3205 0.932974 14.8999 0.353551M14.8999 0.353551C14.3205 0.932974 13.2514 1.30511 12.295 1.53543C11.0179 1.84272 9.6924 1.89908 8.38809 1.7512C7.3741 1.63665 6.25707 1.40815 5.80856 0.959643M14.8999 0.353551L0.35374 14.8997" stroke="black"/>
</svg>
</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      <AchievementGallery />
      <ITServicesSection />
      <Workflow />
      <WhyUsSection />
      <TestimonialsSection />
    </main>
  );
};

export default Page;