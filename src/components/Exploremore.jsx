"use client"
import { motion } from "framer-motion";
import { CourseCard } from "./Home/CourseCard";
const Exploremore = ({courses}) => {
      // Animation variants
      const cardContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut"
      }
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (

<section className="py-8 px-4 md:px-8 lg:px-16 bg-white">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className=" mb-4"
    >
    
      <h2 className="text-xl  font-bold text-gray-800">
        Explore more in-demand careers
      </h2>
    </motion.div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {courses.map((course, index) => (
        <motion.div
          key={index}
          className="rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-[#FFF2E9] h-[340px]"
          variants={cardContainerVariants}
          whileHover={{ y: -10 }}
          whileTap={{ scale: 0.98 }}
        >
          <CourseCard course={course} index={index} />
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
  )
}

export default Exploremore