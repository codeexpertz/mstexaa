"use client";
import Exploremore from '@/components/Exploremore';
import AchievementGallery from '@/components/Home/AchievementGallery';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import WhyUsSection from '@/components/Home/WhyUsSection';
import { motion } from "framer-motion";
import Link from "next/link";
const Page = () => {
  // Animation variants for Hero Section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  // Animation variants for Second Section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      {/* Hero Section - Match Image Design */}
      <div className="min-h-screen flex items-center py-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-[url('/herosection/Frame.svg')] bg-cover bg-center">
        <div className="flex md:absolute md:bottom-0 md:-left-40 flex-col-reverse lg:flex-row-reverse items-center gap-12 w-full max-w-7xl mx-auto">

          {/* Left Text Content */}
          <motion.div
            className="text-left lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="font-bold mb-8 text-lg md:w-[400px] font-sans"
            >
              Are you searching for a career where you can create, shape, and celebrate the extraordinary? Look no further, you’ve found the perfect place!
            </motion.p>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 font-sans"
            >
              <Link href="/course">Join Our Team</Link>
            </motion.button>
          </motion.div>

          {/* Right Image + Tech Icons */}
          <motion.div
            className="relative md:w-[332px] md:h-[323px]"
            variants={itemVariants}
          >
            {/* Main Image */}
            <motion.div // <-- Wrapping the image in motion.div
              initial={{ opacity: 0 }} // Fade in from 0 opacity
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }} // Adjust duration as needed
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/job/hero1.svg"
                  alt="Developer working on laptop"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Image (Top Right Corner) */}
        <motion.div // <-- Wrapping the floating image in motion.div
          className="hidden md:block absolute top-10 right-10 z-10"
          initial={{ opacity: 0 }} // Fade in from 0 opacity
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Delay slightly for effect
        >
          <img src="/job/hero2.svg" className='w-48 h-48 md:w-72 md:h-72'/>
        </motion.div>

      </div>
      {/* Second Section: GROW WITH Mstexa */}
      <section className="py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
       

        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-center font-sans"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            GROW WITH Mstexa
          </motion.h1>

          {/* Intro Text */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 font-sans"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="md:w-1/3 ">
              <span className="text-[#F97A02] font-bold text-sm border border-[#FBE6C9] py-[6px] px-[8px] rounded-2xl">• Jobs</span>
              <h2 className="text-3xl font-bold mt-2">Current Openings</h2>
            </div>
            <div className="md:w-2/3  text-gray-600 font-semibold">
              <p>
                Become a part of our team and help shape the future of technology. We’re seeking passionate, creative, and committed individuals for the following positions.
              </p>
            </div>
          </motion.div>

          {/* Job Cards Grid */}
          <div className="grid relative  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Talent Acquisition Specialist", dept: "HR & Admin", type: "On-site . Full Time" },
              { title: "Senior UI Designer", dept: "Product Designer", type: "On-site . Full Time" },
              { title: "International Sales Executive", dept: "Sales", type: "On-site . Full Time" },
              { title: "Full Stack Developer", dept: "Web Developer", type: "On-site . Full Time" },
              { title: "Full Stack Developer", dept: "App Developer", type: "On-site . Full Time" },
              { title: "Front end Developer", dept: "Web Developer", type: "On-site . Full Time" },
            ].map((job, index) => (
              <motion.div
                key={index}
                className="bg-white relative z-10 p-6 rounded-2xl  border border-[#00000033]"
                variants={cardVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold text-gray-800 mb-1">{job.dept}</h3>
                <p className="text-lg  font-semibold mt-4">{job.title}</p>
                <p className="text-xs text-gray-400 mb-4">{job.type}</p>
              <a href="mailto:codeexpertss@gmail.com?subject=Job%20Application&body=Hello,%20I%20would%20like%20to%20apply.">
  <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
    Apply Nows
  </button>
</a>

              </motion.div>
            ))}
                <div className='absolute -top-10 -right-16 z-0'>
             <img src="/job/shape.svg" className='w-64 h-64'/>
          </div>
          </div>
      
        </div>
      </section>

      {/* Third Section: Don't See Your Role? */}
      <section className="py-16 md:mt-10 md:mb-28 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-black mb-4 font-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Don’t See Your Role?
          </motion.h2>
          <motion.p
            className="text-gray-500 mb-8 font-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We’re always looking for talented individuals who share our passion for innovation. Send us your resume and let’s take.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
 
  <motion.button
    className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors font-sans"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
  >
             <a 
  href="https://wa.me/923156801933" 
  target="_blank" 
  rel="noopener noreferrer"
>Send Your Resume →</a>
    
  </motion.button>


            <motion.button
              className="border border-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors font-sans"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Learn About Mstexa
            </motion.button>
          </div>
        </div>
      </section>
      {/* Existing Sections Below */}
      <AchievementGallery/>
      <WhyUsSection />
      <TestimonialsSection />
    </>
  );
};

export default Page;