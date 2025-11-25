// pages/services/ui-ux/index.jsx
"use client";
import React from "react";
import { Inter } from "next/font/google";
import AchievementGallery from "@/components/Home/AchievementGallery";
import ITServicesSection from "@/components/Home/ITServicesSection";
import WhyUsSection from "@/components/Home/WhyUsSection";
import Workflow from "@/components/Home/Workflow";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const Page = () => {
  return (
    <main className="min-h-[100svh]">
      {/* Hero Section */}
      <section
        className={[
          // Background pattern image (provided asset)
          "relative overflow-hidden",
          'bg-[url("/herosection/Frame.svg")] bg-no-repeat bg-cover bg-center',
          inter.className,
        ].join(" ")}
      >
        {/* content container */}
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-6 py-20 md:flex-row md:items-center md:gap-12 md:py-28">
          {/* Left copy */}
          <div className="max-w-xl">
            <h1 className="text-pretty text-4xl font-semibold tracking-[-0.02em] md:text-6xl">
              SaaS Development
              <br />
              Services
            </h1>

            <p className="mt-5 max-w-prose text-muted-foreground leading-relaxed">
              We build scalable, secure, and high-performing SaaS products that
              empower businesses to innovate faster and deliver exceptional
              digital experiences.
            </p>

            <div className="mt-8">
              <Link
                href="/calendly/meeting"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#FF873A] px-6 text-sm font-medium text-black transition-colors  focus:outline-none focus:ring-2  focus:ring-offset-2"
              >
                {"Let's Talk"}{" "}
                <span className="text-lg" aria-hidden>
                  ↗
                </span>
              </Link>
            </div>
          </div>

          {/* Right visual as a single image */}
          <div className="relative -mx-6 w-full md:mx-0 md:flex-1">
            <img
              src="/services/digital-desgining/ux-hero.png"
              alt="Showcase of our UI design on a tablet"
              className="mx-auto w-[82%]  max-w-lg md:max-w-none"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section
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

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* Left: single image */}
          <div className="order-1 md:order-none">
            <img
              src="/services/vector.png"
              alt="Design tools composition showing color picker, cube, and UI panels"
              className="mx-auto h-auto w-full max-w-[560px] md:max-w-none"
            />
          </div>

          {/* Right: content */}
          <div className="max-w-xl md:ml-6">
            <div
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
            </div>

            <h2 className="text-pretty text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
              Top-Tier Brands
              <br />
              Choose Our Design
              <br />
              Approach
            </h2>

            {/* pills */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["Team", "Experience", "Approach"].map((label, i) => (
                <button
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
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-base font-semibold text-foreground">
                Proven Expertise
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Our design process starts with people. By understanding user
                goals and pain points, we craft experiences that are simple,
                intuitive, and engaging. From wireframes to final interfaces,
                every detail builds trust while driving clear business results.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/calendly/meeting"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-black shadow-sm"
                style={{ backgroundColor: "var(--brand, #FF873A)" }}
              >
                Let’s Talk
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative isolate bg-[#FFF6EE] text-foreground py-16 md:py-24">
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

        <div className="relative mx-auto max-w-6xl px-4">
          <div className="flex justify-center">
            <span
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
            </span>
          </div>

          <h2 className="text-balance mt-4 text-center text-3xl font-bold md:text-5xl">
            Services that Deliver Results
          </h2>

          {/* Bento Grid Layout */}
          <div className="mt-12 grid gap-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* 1st Box - Large (spans 2 cols) */}
              <article className="sm:col-span-2 lg:col-span-2 rounded-2xl bg-white border border-border bg-card p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md flex flex-col">
                <div>
                  <img
                    src="/services/saas-development/custom.svg"
                    alt="Custom SaaS Application Development"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl md:text-2xl font-bold">
                    Custom SaaS Application Development
                  </h3>
                </div>
                <p className="mt-2 md:w-[300px] font-medium text-xs leading-relaxed text-[#00000080]">
                  We design and develop tailored SaaS platforms that align with
                  your business goals and scale effortlessly with demand.
                </p>
              </article>

              {/* 2nd Box - Small */}
              <article className="rounded-2xl bg-white border border-border bg-card p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md flex flex-col">
                <div>
                  <img
                    src="/services/saas-development/architecture.svg"
                    alt="SaaS Architecture Design"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-bold">
                    SaaS Architecture Design
                  </h3>
                </div>
                <p className="mt-2 font-medium text-xs leading-relaxed text-[#00000080]">
                  Build a strong technical foundation with cloud-native,
                  multi-tenant architectures that ensure performance and
                  security.
                </p>
              </article>

              {/* 3rd Box - Small */}
              <article className="rounded-2xl bg-white border border-border bg-card p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md flex flex-col">
                <div>
                  <img
                    src="/services/saas-development/api.svg"
                    alt="API Development & Integration"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-bold">
                    API Development & Integration
                  </h3>
                </div>
                <p className="mt-2 text-xs font-medium leading-relaxed text-[#00000080]">
                  We create and integrate robust APIs to enable seamless
                  communication between your SaaS product and external systems.
                </p>
              </article>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* 1st Box - Small */}
              <article className="rounded-2xl bg-white border border-border bg-card p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md flex flex-col">
                <div>
                  <img
                    src="/services/saas-development/optimization.svg"
                    alt="SaaS Platform Optimization"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-bold">
                    SaaS Platform Optimization
                  </h3>
                </div>
                <p className="mt-2 text-xs font-medium leading-relaxed text-[#00000080]">
                  Improve speed, reliability, and scalability through
                  performance tuning, database optimization, and efficient
                  resource usage.
                </p>
              </article>

              {/* 2nd Box - Small */}
              <article className="rounded-2xl bg-white border border-border bg-card p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md flex flex-col">
                <div>
                  <img
                    src="/services/saas-development/payment.svg"
                    alt="Subscription & Payment Systems"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-bold">
                    Subscription & Payment Systems
                  </h3>
                </div>
                <p className="mt-2 text-xs font-medium leading-relaxed text-[#00000080]">
                  Integrate secure, flexible billing and payment solutions to
                  streamline user subscriptions and revenue management.
                </p>
              </article>

              {/* 3rd Box - Large (spans 2 cols) */}
              <article className="sm:col-span-2 lg:col-span-2 rounded-2xl bg-white border border-border bg-card p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md flex flex-col">
                <div>
                  <img
                    src="/services/saas-development/maintenance.svg"
                    alt="Maintenance & Continuous Delivery"
                    className="mb-4 h-24 w-24"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl md:text-2xl font-bold">
                    Maintenance & Continuous Delivery
                  </h3>
                </div>
                <p className="mt-2 md:w-[350px] font-medium text-xs leading-relaxed text-[#00000080]">
                  We provide ongoing monitoring, updates, and feature rollouts
                  to ensure your SaaS platform remains competitive and reliable.
                </p>
              </article>
            </div>
          </div>

          {/* Button */}
          <div className="mt-12 flex justify-center">
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
          </div>
        </div>
      </section>

      <AchievementGallery />
      <ITServicesSection />
      <Workflow />
      <WhyUsSection />
      <TestimonialsSection />
    </main>
  );
};

export default Page;
