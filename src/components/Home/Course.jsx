import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CourseCard } from './CourseCard';

const Courses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const courses = [
    {
      cardTitle: ["ULTIMATE", "UIUX", "COURSE"],
      fullTitle: "The Complete 2025 Web & Mobile Design Course",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: 'courses/uiux/instructorImg.svg',
      icons: ["courses/uiux/ai.png", "courses/uiux/figma.png", "courses/uiux/xd.png", "courses/uiux/ps.png"],
      to: "/course/uiux",
      bg:'bg-orange-500'
    },
    {
      cardTitle: ["Full Stack", "Development", "COURSE"],
      fullTitle: "The Complete 2025 Web Development Course",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "courses/fullstack/instructorImg.svg",
      icons: [ "courses/fullstack/react.png", "courses/fullstack/js.png", "courses/fullstack/html.png","courses/fullstack/css.png" ],
      to:"/course/web",
      bg:'bg-blue-500'
    },
    {
      cardTitle: ["Full Stack", "Development", "COURSE"],
      fullTitle: "The Complete 2025 Mobile Development Course",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "courses/uiux/instructorImg.svg",
      icons: [ "courses/fullstack/react.png", "courses/app/flutter.svg", "courses/app/nodejs.svg","courses/app/mongodb.svg" ],
      to:"/course/app",
      bg:'bg-green-500'
    },
    {
      cardTitle: ["ULTIMATE", "DataScience","COURSE"],
      fullTitle: "The Complete 2025 Data Science Course",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "courses/datascience/instructorImg.svg",
      icons: ["","","courses/datascience/python.png"],
      to: "/course/datascience",
      bg:'bg-orange-500'
    },
    {
      cardTitle: ["ULTIMATE", "Video Editing","COURSE"],
      fullTitle: "The Complete 2025 Video Editing Course",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "courses/videoediting/instructorImg.svg",
      icons: ["courses/videoediting/ae.png", "courses/videoediting/Davinciresolve.png","courses/videoediting/pr.png"],
      to: "/course/videoediting",
      bg:'bg-orange-500'
    },
    {
      cardTitle: ["Digital", "Marketing","COURSE"],
      fullTitle: "The Complete 2025 Digital Marketing",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "courses/digitalmarketing/instructorImg.svg",
      icons: ["","courses/digitalmarketing/meta.svg","courses/digitalmarketing/fb.svg","courses/digitalmarketing/googleadsense.svg"],
      to: "/course/digital-marketing",
      bg:'bg-yellow-500'
    },
    {
      cardTitle: ["Lead", "Generation","COURSE"],
      fullTitle: "The Complete 2025 Lead Generation",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "courses/leadgeneration/instructorImg.svg",
      icons: ["","courses/leadgeneration/salesforce.svg","courses/leadgeneration/linkedin.svg","courses/leadgeneration/hubspot.svg"],
      to: "/course/lead-generation",
      bg:'bg-blue-500'
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

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

  // Responsive cards per view
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 4; // desktop
    }
    return 4;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      // Reset to first slide if current index is out of bounds
      const maxIndex = courses.length - getCardsPerView();
      if (currentIndex > maxIndex) {
        setCurrentIndex(Math.max(0, maxIndex));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, courses.length]);

  const maxIndex = Math.max(0, courses.length - cardsPerView);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calculate translate percentage based on cards per view
  const getTranslateX = () => {
    return (currentIndex * (100 / cardsPerView));
  };

  return (
    <div id='courses' className="max-h-screen lg:min-h-[70vh] px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-flex items-center border border-orange-200 text-orange-500 px-3 sm:px-4 py-1 rounded-full text-sm sm:text-base font-bold mb-4 sm:mb-6">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
            Courses
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-4">
            Best Courses For Your Future
          </h1>
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

        {/* Pagination Dots */}
        <div className="flex md:hidden justify-center gap-2 mt-6 sm:mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-orange-500' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;