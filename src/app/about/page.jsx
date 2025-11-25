"use client";
import TestimonialsSection from '@/components/Home/TestimonialsSection'
import WhyUsSection from "@/components/Home/WhyUsSection";
import { motion } from "framer-motion"; 
import Link from "next/link";
import AboutSection from "@/components/AboutSection";
import Partnering from "@/components/Partnering";
import AchievementGalleryHome from "@/components/Home/AchievementGalleryHome";

const AboutPage = () => {
  // Animation variants
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
    {/* Hero Section with Background Image */}
<div className="min-h-screen relative top-18 overflow-hidden bg-[url('/herosection/Frame.svg')] bg-cover bg-center">
  <div className="absolute inset-0 flex items-center justify-center">
    {/* Animated container */}
    <motion.div
      className="text-center text-black px-4 max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        variants={itemVariants}
        className="text-sm font-medium text-orange-500 mb-2 border border-orange-500 rounded-full px-3 py-1 inline-block "
      >
        • About Mstexa
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Transform Your Daily Routine<br />
        With This Premier{" "}
        <span className="text-orange-500">Platform</span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl text-[#00000099] font-semibold opacity-90 mb-6"
      >
        We are a web and mobile design & development agency. Making
        websites & apps, creating brand identities, and launching
        startups.
      </motion.p>

      {/* ✅ Added Book a Call Button */}
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out"
   
      >
          <Link  href="/calendly/meeting" >
                    Book a Call
                  </Link>
  
      </motion.button>
    </motion.div>
  </div>
</div>

      {/* Content Sections */}
    <AboutSection/>
      <AchievementGalleryHome/>
      <Partnering/>
      <WhyUsSection />
      <TestimonialsSection/>
      
    </>
  );
};

export default AboutPage;