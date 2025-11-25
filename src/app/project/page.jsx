'use client';
import { motion } from "framer-motion"; 
import { useState } from 'react';
import Link from 'next/link';
import WhyUsSection from "@/components/Home/WhyUsSection";
import TestimonialsSection from '@/components/Home/TestimonialsSection';
// Gradient colors for floating elements
const gradients = [
  'linear-gradient(135.26deg, rgba(255, 135, 58, 0.2) 24.77%, rgba(255, 135, 58, 0) 96.88%)',
  'linear-gradient(135.26deg, rgba(147, 224, 133, 0.2) 24.77%, rgba(147, 224, 133, 0) 96.88%)',
  'linear-gradient(135.26deg, rgba(8, 8, 34, 0.2) 24.77%, rgba(8, 8, 34, 0) 96.88%)',
  'linear-gradient(135.26deg, rgba(9, 67, 106, 0.2) 24.77%, rgba(9, 67, 106, 0) 96.88%)',
  'linear-gradient(135.26deg, rgba(255, 135, 58, 0.2) 24.77%, rgba(255, 135, 58, 0) 96.88%)',
  'linear-gradient(135.26deg, rgba(255, 135, 58, 0.2) 24.77%, rgba(255, 135, 58, 0) 96.88%)',
  'linear-gradient(135.26deg, rgba(255, 135, 58, 0.2) 24.77%, rgba(255, 135, 58, 0) 96.88%)',
]; 

// Project images data
const projectImages = [
  '/projects/optimalPlanner3.png',
  '/projects/blockcircle2.png',
  '/projects/yonderaudio.png',
  '/projects/goldengoose2.png',
  '/projects/pindeats2.png',
  '/projects/gnizeel2.png',
  '/projects/workImg.jpeg',
 
];

// Floating element animation variants - similar to HomePage
const floatingVariants = (delay) => ({
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    y: [0, -15, 0],
    transition: {
      duration: 0.8,
      y: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  },
  hover: {
    scale: 1.15,
    rotate: 5,
    transition: { duration: 0.3 },
  },
});

const ProjectPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Define your data here
  const data = [
    {
      id: 1,
      projectName: "Optimal Planner",
      images: "/projects/optimalPlanner3.png",
      href: "/project/optimalplanner",
      category: "Mobile App",
      techStack: ["Flutter", "JavaScript", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      projectName: "Block Circle",
      images: "/projects/blockcircle2.png",
      href: "/project/blockcircle",
      category: "Web App",
      techStack: ["Flutter", "JavaScript", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      projectName: "Yonder Audio",
      images: ["/projects/yonderaudio.png"],
      href: "/project/yonderaudio",
      category: "AI ML",
      techStack: ["Flutter", "Next.js", "Node.js", "MongoDB"],
    },
    {
        id: 4,
      projectName: "TwinCiti",
      images: ["/projects/TwinCiti.png"],
      href: "/project/twinciti",
      category: "AI ML",
      techStack: ["Flutter", "Next.js", "Node.js", "MongoDB"],
     
    },
    {
      id: 5,
      projectName: "Golden Goose",
      images: "/projects/goldengoose2.png",
      href: "/project/golden-goose",
      category: "Web App",
      techStack: ["Flutter", "JavaScript", "Node.js", "MongoDB"],
    },
    {
      id: 6,
      projectName: "Pind Eats",
      images: "/projects/pindeats2.png",
      href: "/project/food",
      category: "Web App",
      techStack: ["Next.js", "JavaScript", "Node.js", "MongoDB"],
    },
    {
      id: 7,
      projectName: "Gnizzel",
      images: "/projects/gnizeel2.png",
      href: "/project/gnizeel",
      category: "UI UX",
      techStack: ["Flutter", "JavaScript", "Node.js", "MongoDB"],
    },
    {
      id: 8,
      projectName: "Uni Hub",
      images: "/projects/workImg.jpeg",
      href: "/project/unihub",
      category: "Web App",
      techStack: ["Flutter", "JavaScript", "Node.js", "MongoDB"],
    },
    ,
    {
      id: 9,
      projectName: "TMCO",
      images:  '/projects/TMCO.png',
      href: "/project/tmco",
      category: "Web App",
      techStack: ["Flutter", "JavaScript", "Node.js", "MongoDB"],
    },
  ];

  // Filter projects based on activeFilter
  const filteredProjects = activeFilter === 'All'
    ? data
    : data.filter(project => project.category === activeFilter);

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
      {/* Hero Section */}
      <div className="min-h-screen relative overflow-hidden bg-[url('/herosection/Frame.svg')] bg-cover bg-center">
        {/* Floating Animated Elements - Hardcoded Positions to Match Design */}
        <div className="absolute hidden md:block inset-0">
          {projectImages.slice(0, 7).map((img, idx) => {
            // Define custom positions for each floating element based on your reference image
            const positions = [
              { left: '5%', top: '15%' },     // Top-left
              { left: '18%', top: '35%' },     // Left-middle
              { left: '8%', top: '75%' },      // Bottom-left
              { left: '45%', top: '65%' },     // Center-bottom
              { left: '90%', top: '80%' },     // Bottom-right
              { left: '95%', top: '15%' },     // Top-right
              { left: '60%', top: '15%' },     // Top-center
            ];

            return (
              <motion.div
                key={idx}
                className="absolute w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border border-white border-opacity-20 cursor-pointer hover:shadow-xl transition-shadow"
                style={{
                  left: positions[idx]?.left || 'auto',
                  top: positions[idx]?.top || 'auto',
                  background: gradients[idx % gradients.length], // cycle through gradients
                  backdropFilter: 'blur(10px)',
                  zIndex: 10 + idx,
                }}
                variants={floatingVariants(idx * 0.2)}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                {/* Project Image */}
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-white border-opacity-30">
                  <img
                    src={img}
                    alt={`Project ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="max-w-7xl w-full">
            <motion.div
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Text Content - Left */}
              <div className="text-left w-full md:w-1/2 relative z-10">
                <motion.p
                  variants={itemVariants}
                  className="text-base sm:text-sm font-bold text-orange-500 mb-2 border border-orange-500 rounded-full px-3 py-1 inline-block"
                >
                  • Project
                </motion.p>

                <motion.h1
                  variants={itemVariants}
                  className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4"
                >
                  Comprehensive Project Plan & Overview
                </motion.h1>
              </div>

              {/* SVG Illustration - Right */}
              <motion.div
                variants={itemVariants}
                className="w-full md:ml-20 md:w-1/3 flex justify-center mt-8 relative z-10"
              >
                <div className="w-full max-w-md sm:max-w-lg">
                  <img
                    src="/projects/herosection.svg"
                    alt="project illustration"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Projects Section with Filters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {['All', 'Web App', 'Mobile App', 'UI UX','AI ML'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-orange-500 text-black'
                    : 'bg-white text-orange-500 border border-orange-500 hover:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                {/* Card Clickable Link */}
                <Link href={project.href} passHref>
                  <div className="block group">
                    {/* Image Container */}
                    <div className="relative h-56 md:h-64 overflow-hidden">
                      <img
                        src={project.images}
                        alt={project.projectName}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Hover Overlay: Orange Circle with Arrow */}
                      <div className="absolute inset-0 bg-orange-400 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center transform translate-x-4">
                            <svg width="15" height="15" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.07725 6.68154C8.80327 6.40755 8.6648 5.72777 8.59538 5.11038C8.50455 4.31502 8.53889 3.50747 8.72646 2.72983C8.86715 2.14678 9.0935 1.49579 9.4465 1.14279M9.4465 1.14279C9.0935 1.49579 8.44214 1.72251 7.85947 1.86283C7.08146 2.05004 6.27391 2.08438 5.47928 1.99428C4.86153 1.92449 4.181 1.78529 3.90776 1.51204M9.4465 1.14279L0.584508 10.0048" stroke="white"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-3">{project.projectName}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1  border border-[#00000033] rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        {/* Content Sections */}
      <WhyUsSection/>
      <TestimonialsSection/>
    </>
  );
};

export default ProjectPage;