"use client"
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";

export const CourseCard = ({ course, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  // Safely join cardTitle array into multi-line string
  const cardTitleLines = course.cardTitle?.join("\n") || "";

  return (
    <motion.div
      className=" border border-gray-100 flex flex-col justify-around h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -4 }}
    >
      {/* Top section with image background */}
      <div className="relative h-48 flex items-center justify-center">
        {/* Beginner Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`${course.bg} text-white px-3 py-1.5 rounded-full text-xs font-medium`}>
            Beginner
          </span>
        </div>

        {/* Card Title - Top-left */}
        <div className="absolute top-12 left-4 z-20 text-left max-w-[85%]">
          <h3 className="text-xl font-bold text-gray-800 leading-tight tracking-tight whitespace-pre-line">
            {cardTitleLines}
          </h3>
        </div>

        {/* Instructor Image */}
        <div className=" w-[95%] h-[180px] relative z-10">
          <img
            src={course.instructorImg}
            alt={course.instructor}
            className="w-full rounded-2xl h-full object-cover bg-white"
          />
        </div>

{/* Floating Icons — All same visual size, no background, pure icons — Fixed */}
{Array.isArray(course.icons) && course.icons.length > 0 && (
  <>
    {/* Top-right icon */}
    {course.icons[0] && (
      <div className="absolute top-6 right-10 transform -translate-y-1/2 z-30">
        <motion.div
          className="w-12 h-12 flex items-center justify-center"
          animate={{ y: [0, -6, 0], rotate: [0, 5, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden bg-transparent">
            <img
              src={course.icons[0]}
              alt=""
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </div>
        </motion.div>
      </div>
    )}

    {/* Top-left icon */}
    {course.icons[1] && (
      <div className="absolute top-14 right-0 transform -translate-y-1/2 z-30">
        <motion.div
          className="w-12 h-12 flex items-center justify-center"
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden bg-transparent">
            <img
              src={course.icons[1]}
              alt=""
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </div>
        </motion.div>
      </div>
    )}

    {/* Bottom-right icon */}
    {course.icons[2] && (
      <div className="absolute top-8 left-26 z-30">
        <motion.div
          className="w-12 h-12 flex items-center justify-center"
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeInOut",
          }}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden bg-transparent">
            <img
              src={course.icons[2]}
              alt=""
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </div>
        </motion.div>
      </div>
    )}

    {/* Bottom-left icon */}
    {course.icons[3] && (
      <div className="absolute bottom-10 left-26 z-30">
        <motion.div
          className="w-12 h-12 flex items-center justify-center"
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeInOut",
          }}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden bg-transparent">
            <img
              src={course.icons[3]}
              alt=""
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </div>
        </motion.div>
      </div>
    )}
  </>
)}
      </div>

      {/* ✅ Fixed Bottom Section — NO OVERLAP EVER */}
      <div className="p-2  flex flex-col justify-between h-[134px]">
        {/* Content Section — Title clamped to 2 lines */}
        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-1 leading-tight line-clamp-2">
            {course.fullTitle}
          </h4>
          <p className="text-[10px] text-[#00000080] font-medium">By {course.instructor}</p>

          {/* Rating with fixed margin */}
          <div className="flex items-center space-x-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="text-[10px] text-gray-600 ml-1">{course.rating}</span>
          </div>
        </div>

         {/* ✅ LINKED BUTTON */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link href={course.to} className="w-full block">
            <span className="w-full h-[39px] text-sm border-2 border-orange-500 text-orange-500 font-semibold py-[10px] rounded-xl hover:bg-orange-50 transition-colors duration-200 inline-block text-center leading-[19px]">
              Start Learning
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
