"use client";
import { CourseCard } from '@/components/Home/CourseCard';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import WhyUsSection from '@/components/Home/WhyUsSection';
import { motion } from "framer-motion";
import Link from "next/link";
import React,{ useState } from 'react';

const Page = () => {
 const [currentIndex, setCurrentIndex] = useState(0);

  // ---------- FIXED: Added unique id + category ----------
  const courses = [
    {
      id: 1,
      category: "Designing",
      cardTitle: ["ULTIMATE", "UIUX", "COURSE"],
      fullTitle: "The Complete 2025 Web & Mobile Design Course",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "courses/uiux/instructorImg.svg",
      icons: [
        "courses/uiux/ai.png",
        "courses/uiux/figma.png",
        "courses/uiux/xd.png",
        "courses/uiux/ps.png",
      ],
      to: "/course/uiux",
      bg: "bg-orange-500",
    },
    {
      id: 2,
      category: "Development",
      cardTitle: ["Full Stack", "Development", "COURSE"],
      fullTitle: "The Complete 2025 Web Development Course",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "courses/fullstack/instructorImg.svg",
      icons: [
        "courses/fullstack/react.png",
        "courses/fullstack/js.png",
        "courses/fullstack/html.png",
        "courses/fullstack/css.png",
      ],
      to: "/course/web",
      bg: "bg-blue-500",
    },
    {
      id: 3,
      category: "Development",
      cardTitle: ["Full Stack", "Development", "COURSE"],
      fullTitle: "The Complete 2025 Mobile Development Course",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "courses/uiux/instructorImg.svg",
      icons: [
        "courses/fullstack/react.png",
        "courses/app/flutter.svg",
        "courses/app/nodejs.svg",
        "courses/app/mongodb.svg",
      ],
      to: "/course/app",
      bg: "bg-green-500",
    },
    {
      id: 4,
      category: "Data Science",
      cardTitle: ["ULTIMATE", "DataScience", "COURSE"],
      fullTitle: "The Complete 2025 Data Science Course",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "courses/datascience/instructorImg.svg",
      icons: ["", "", "courses/datascience/python.png"],
      to: "/course/datascience",
      bg: "bg-orange-500",
    },
    {
      id: 5,
      category: "Video Editing",
      cardTitle: ["ULTIMATE", "Video Editing", "COURSE"],
      fullTitle: "The Complete 2025 Video Editing Course",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "courses/videoediting/instructorImg.svg",
      icons: [
        "courses/videoediting/ae.png",
        "courses/videoediting/Davinciresolve.png",
        "courses/videoediting/pr.png",
      ],
      to: "/course/videoediting",
      bg: "bg-orange-500",
    },
    {
      id: 6,
      category: "Marketing",
      cardTitle: ["Digital", "Marketing", "COURSE"],
      fullTitle: "The Complete 2025 Digital Marketing",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "courses/digitalmarketing/instructorImg.svg",
      icons: [
        "",
        "courses/digitalmarketing/meta.svg",
        "courses/digitalmarketing/fb.svg",
        "courses/digitalmarketing/googleadsense.svg",
      ],
      to: "/course/digital-marketing",
      bg: "bg-yellow-500",
    },
    {
      id: 7,
      category: "Marketing",
      cardTitle: ["Lead", "Generation", "COURSE"],
      fullTitle: "The Complete 2025 Lead Generation",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "courses/leadgeneration/instructorImg.svg",
      icons: [
        "",
        "courses/leadgeneration/salesforce.svg",
        "courses/leadgeneration/linkedin.svg",
        "courses/leadgeneration/hubspot.svg",
      ],
      to: "/course/lead-generation",
      bg: "bg-blue-500",
    },
  ];

  // ---------- Cards per view ----------
  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 4;
    }
    return 4;
  };

 const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      const maxIndex = courses.length - getCardsPerView();
      if (currentIndex > maxIndex) {
        setCurrentIndex(Math.max(0, maxIndex));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const maxIndex = Math.max(0, courses.length - cardsPerView);

  const handleNext = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const getTranslateX = () => {
    return currentIndex * (100 / cardsPerView);
  };

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


  // ---------- Category Filter ----------
  const categories = [
    "All",
    "Development",
    "Data Science",
    "Designing",
    "Video Editing",
    "Marketing",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);
  return (
    <>
      {/* Hero Section - Match Image Design */}
      <div className="min-h-screen flex items-center py-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-[url('/herosection/Frame.svg')] bg-cover bg-center ">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl mx-auto">

          {/* Left Text Content */}
          <motion.div
            className="text-left lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="text-orange-500 font-medium text-sm mb-4 block"
            >
              • Courses
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight"
            >
             Master tomorrow's<br/>
              <span className="text-black">skills today</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 mb-8 text-base"
            >
                 Power up your AI, career, and life skills with the most
up-to-date, expert-led learning.
                 
                         </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
               <motion.button
  variants={itemVariants}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
>
  <a href="https://wa.me/+923156801933" target="_blank" rel="noopener noreferrer">
    Get Start
  </a>
</motion.button>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-3 px-6 rounded-full transition duration-300"
              >
                <Link href="#">Learn AI
                </Link>
              </motion.button>
            </div>
          </motion.div>

       {/* Right Image + Tech Icons */}
<motion.div
  className="flex gap-6 lg:w-1/2 md:justify-center items-center flex-nowrap"
  variants={itemVariants}
>
  {/* Main Image */}
  <div className="relative rounded-xl overflow-hidden flex-shrink-0">
    <img
      src="/courses/herosection1.svg"
      alt="Developer working on laptop"
      className="w-[50vw] max-w-[400px] h-auto md:h-[450px] object-cover"
    />
  </div>

  {/* Secondary Image */}
  <div className="relative rounded-xl overflow-hidden flex-shrink-0">
    <img
      src="/courses/herosection2.svg"
      alt="Developer working on laptop"
      className="w-[25vw] max-w-[200px] h-auto md:h-[450px] object-cover"
    />
  </div>
</motion.div>
        </div>
      </div>

      <section className="py-8 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Ready to reimagine your career?
            </h2>
            <p className="text-gray-500 text-sm">
              From critical skills to technical topics, Mstexa<br/> supports your professional development.
            </p>
          </motion.div>

                {/* Carousel Container with Navigation Buttons */}
                <div className="relative">
                  {/* Left Button */}
                  <button 
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="absolute left-0 sm:left-[-10px] top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-[#FF873A] shadow-md hover:bg-orange-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
        
                  {/* Course Carousel */}
                  <div className="overflow-hidden pb-4">
                    <div
                      className="flex gap-3 sm:gap-4 transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${getTranslateX()}%)` }}
                    >
                      {courses.map((course, index) => (
                        <motion.div
                          key={index}
                          className="flex-shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-[#FFF2E9] min-h-[320px] sm:min-h-[340px]"
                          variants={cardContainerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-100px" }}
                          custom={index}
                          transition={{ delay: index * 0.1 }}
                        >
                          <CourseCard course={course} index={index} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
        
                  {/* Right Button */}
                  <button 
                    onClick={handleNext}
                    disabled={currentIndex >= maxIndex}
                    className="absolute right-0 sm:right-[-10px] top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-[#FF873A] shadow-md hover:bg-orange-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
        </div>
      </section>

    {/* ---- CATEGORY FILTER BUTTONS ---- */}
      <div className="px-4 md:px-8 lg:px-16 py-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-orange-500 text-black shadow-md"
                  : "bg-white border border-orange-500 text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ---- FILTERED CARDS ---- */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id} // FIXED
              className="rounded-2xl bg-[#FFF2E9] h-[340px] overflow-hidden"
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Existing Sections Below */}
      <WhyUsSection />
      <TestimonialsSection />
    </>
  );
};

export default Page;