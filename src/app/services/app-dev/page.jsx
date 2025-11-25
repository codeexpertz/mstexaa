"use client";
import React from "react";
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
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const heroRef = React.useRef(null);
  const approachRef = React.useRef(null);
  const servicesRef = React.useRef(null);

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
              App Development
              <br />
              Services
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-5 max-w-prose text-muted-foreground leading-relaxed"
            >
              From idea to deployment, we develop fast, reliable, and
              user-friendly mobile apps that deliver seamless digital
              experiences across all platforms.
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
              Choose Our Design
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
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors`}
                  style={{
                    borderColor:
                      "color-mix(in oklab, var(--brand, #FF873A) 45%, transparent)",
                    color: i === 0 ? "black" : "var(--brand, #FF873A)",
                    backgroundColor:
                      i === 0 ? "var(--brand, #FF873A)" : "transparent",
                  }}
                  aria-pressed={i === 0}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {label}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-6"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-base font-semibold text-foreground"
              >
                Proven Expertise
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-2 text-sm leading-6 text-muted-foreground"
              >
                Our design process starts with people. By understanding user
                goals and pain points, we craft experiences that are simple,
                intuitive, and engaging. From wireframes to final interfaces,
                every detail builds trust while driving clear business results.
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

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        style={{ y: servicesY, opacity: servicesOpacity }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative isolate bg-[#FFF6EE] text-foreground py-16 md:py-24"
      >
        {/* Decorative background image anchored to top-left */}
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

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.6 }}
            className="text-balance mt-4 text-center text-3xl font-bold md:text-5xl"
          >
            Services that Deliver Results
          </motion.h2>

          {/* Bento Grid Layout */}
          <motion.div
            variants={staggerContainer}
            className="mt-12 grid gap-6"
          >
            {/* Row 1 */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {/* 1st Box - Large (spans 2 cols) */}
              <motion.article
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="sm:col-span-2 lg:col-span-2 rounded-2xl bg-white border border-border bg-card p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md flex flex-col"
              >
                <div>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    src="/services/app-development/mobile.svg"
                    alt="iOS & Android Development"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <motion.h3
                    variants={fadeInUp}
                    className="text-xl md:text-2xl font-bold"
                  >
                    iOS & Android Development
                  </motion.h3>
                </div>
                <motion.p
                  variants={fadeInUp}
                  className="mt-2 md:w-[300px] font-medium text-xs leading-relaxed text-[#00000080]"
                >
                  We build high-performance native and cross-platform mobile
                  apps optimized for speed, usability, and scalability.
                </motion.p>
              </motion.article>

              {/* 2nd Box - Small */}
              <motion.article
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-white border border-border bg-card p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md flex flex-col"
              >
                <div>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    src="/services/app-development/crossplatform.svg"
                    alt="Cross-Platform App Solutions"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <motion.h3
                    variants={fadeInUp}
                    className="text-lg font-bold">
                    Cross-Platform App Solutions
                  </motion.h3>
                </div>
                <motion.p
                  variants={fadeInUp}
                  className="mt-2 font-medium text-xs leading-relaxed text-[#00000080]"
                >
                  Develop once, deploy anywhere—our cross-platform apps deliver
                  consistent experiences across iOS, Android, and web.
                </motion.p>
              </motion.article>

              <motion.article
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-white border border-border bg-card p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md flex flex-col"
              >
                <div>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    src="/services/app-development/uiux.svg"
                    alt="UI/UX for Mobile Apps"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <motion.h3
                    variants={fadeInUp}
                    className="text-lg font-bold">UI/UX for Mobile Apps</motion.h3>
                </div>
                <motion.p
                  variants={fadeInUp}
                  className="mt-2 text-xs font-medium leading-relaxed text-[#00000080]"
                >
                  We craft visually stunning, intuitive interfaces that create
                  seamless user journeys and boost engagement.
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
                className="rounded-2xl bg-white border border-border bg-card p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md flex flex-col"
              >
                <div>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    src="/services/app-development/performance.svg"
                    alt="App Performance Optimization"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <motion.h3
                    variants={fadeInUp}
                    className="text-lg font-bold">
                    App Performance Optimization
                  </motion.h3>
                </div>
                <motion.p
                  variants={fadeInUp}
                  className="mt-2 text-xs font-medium leading-relaxed text-[#00000080]"
                >
                  Optimize speed, responsiveness, and stability with performance
                  tuning and advanced caching strategies.
                </motion.p>
              </motion.article>

              <motion.article
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl bg-white border border-border bg-card p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md flex flex-col"
              >
                <div>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    src="/services/app-development/maintenance.svg"
                    alt="App Maintenance & Support"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <motion.h3
                    variants={fadeInUp}
                    className="text-lg font-bold">
                    App Maintenance & Support
                  </motion.h3>
                </div>
                <motion.p
                  variants={fadeInUp}
                  className="mt-2 text-xs font-medium leading-relaxed text-[#00000080]"
                >
                  We provide continuous updates, bug fixes, and technical
                  support to ensure long-term app reliability.
                </motion.p>
              </motion.article>

              {/* 3rd Box - Large (spans 2 cols) */}
              <motion.article
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="sm:col-span-2 lg:col-span-2 rounded-2xl bg-white border border-border bg-card p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md flex flex-col"
              >
                <div>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    src="/services/app-development/api.svg"
                    alt="API Integration & Backend Services"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <motion.h3
                    variants={fadeInUp}
                    className="text-xl md:text-2xl font-bold">
                    API Integration & Backend Services
                  </motion.h3>
                </div>
                <motion.p
                  variants={fadeInUp}
                  className="mt-2 md:w-[350px] font-medium text-xs leading-relaxed text-[#00000080]"
                >
                  Seamlessly connect your apps to servers and third-party
                  services with secure, scalable API integrations.
                </motion.p>
              </motion.article>
            </motion.div>
          </motion.div>

          {/* Button */}
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