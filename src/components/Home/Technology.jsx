"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Define tech stack data (corrected icons)
const techStack = [
  { name: "Mailchimp", icon: "/technology/mailchimp.svg" },
  { name: "TensorFlow Lite", icon: "/technology/tensorflow.svg" },
  { name: "Tailwind-CSS", icon: "/technology/tailwind.svg" },
  { name: "MongoDB", icon: "/technology/mongodb.svg" },
  { name: "Bootstrap", icon: "/technology/bootstrap.svg" },
  { name: "Zapier", icon: "/technology/zapier.svg" },
  { name: "Node.js", icon: "/technology/nodejs.svg" },
  { name: "React", icon: "/technology/reactjs.svg" },
];

export default function Technology() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className=" bg-white px-6 md:px-12 py-12 relative">
      {/* Top Left SVG Shape */}
      <div className="absolute hidden md:block top-10 left-0 z-10 pointer-events-none">
        <svg width="80" height="170" viewBox="0 0 109 237" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-39.5688 6.82812L-14.9858 41.3789V41.3799L10.2446 76.8164L12.9673 80.6387V80.4492L52.4624 135.648V135.707L52.7437 136.099L70.9722 161.499L72.0493 163.002L74.7681 166.795V166.759L105.419 209.443V230.084H41.1538L12.0903 189.603L11.7036 189.05L11.6978 189.042L11.6929 189.034L-9.0874 160.146L-51.3296 101.317V101.23L-51.6128 100.838L-74.0093 69.8232L-74.0103 69.8213L-74.8325 68.6875L-104.286 27.9189V6.82812H-39.5688Z" stroke="#F97A02" stroke-width="3"/>
          <path d="M106.613 1.5L55.5529 126.756L15.0227 70.1475L33.0617 1.5H106.613Z" stroke="black" stroke-width="3"/>
        </svg>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-8 relative z-10"
      >
        <span className="inline-block border border-[#FBE6C9] text-[#F97A02] text-base font-bold px-3 py-1 rounded-full mb-4">
          • Technology
        </span>
        <h1 className="text-3xl mx-auto max-w-lg md:text-4xl font-bold text-gray-900 leading-tight">
          We Are Used the 
          <span className="text-[#FF6400]"> Best tech Stack</span>
        </h1>
      </motion.div>

      {/* Animated Tech Scroll Container */}
      <div className="relative  py-4">
        <motion.div
          className="flex space-x-4"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ delay: 0.1 * index, duration: 0.5, ease: "easeOut" }}
              className="flex-shrink-0 w-32 h-32 bg-black rounded-xl flex flex-col items-center justify-center p-4 text-center"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 mb-2 object-contain"
              />
              <span className="text-white text-xs font-medium truncate">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}