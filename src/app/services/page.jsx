"use client";
import ITServicesSection from "@/components/Home/ITServicesSection";
import WhyUsSection from "@/components/Home/WhyUsSection";
import Workflow from "@/components/Home/Workflow";
import { motion } from "framer-motion";
import Link from "next/link";
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import WhatWeDoSection from "@/components/WhatWeDoSection";


const Page = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    },
  };

  return (
    <>
      {/* Hero Section — background unchanged */}
      <div className="min-h-screen relative top-18 overflow-hidden bg-[url('/herosection/Frame.svg')] bg-cover bg-center">
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full">
            {/* ✅ Unified motion container for staggered animation of ALL hero elements */}
            <motion.div
              className="flex flex-col md:flex-row items-center gap-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Text Content - Left */}
              <div className="text-left max-w-lg">
                <motion.p
                  variants={itemVariants}
                  className="text-base font-bold text-orange-500 mb-2 border border-orange-50 rounded-full px-3 py-1 inline-block "
                >
                  • Services & Solution
                </motion.p>

                <motion.h1
                  variants={itemVariants}
                  className="text-3xl md:text-5xl font-bold leading-tight mb-4"
                >
                  We Create Products <span className="text-orange-500">_ Design</span> Development
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-base font-medium text-[#000000] md:text-lg opacity-90 mb-6"
                >
                  We are a web and mobile design & development agency. Making websites & apps, creating brand.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out"
                  >
                    Start a project
                  </Link>
                </motion.div>
              </div>

              {/* SVG Illustration - Right (now properly animated!) */}
              <motion.div
                variants={itemVariants}
                className="w-full md:ml-20 md:w-1/2 flex justify-center"
              >
                <div className="w-full max-w-md">
                  <img
                    src="/services&solution.svg"
                    alt="Services and solutions illustration"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      
      <WhatWeDoSection />
      <ITServicesSection />
      <Workflow />
      <WhyUsSection />
      <TestimonialsSection />
    </>
  );
};

export default Page;