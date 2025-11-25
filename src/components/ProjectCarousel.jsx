// app/components/ProjectCarousel.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const data = [
   {
    id: 1,
    projectName: "Optimal Planner",
    images: [ "/projects/optimalPlanner2.png","/projects/optimalPlanner.png","/projects/optimalPlanner3.png"],
    href: "/project/optimalplanner",
  },
   {
    id: 2,
    projectName: "Block Circle",
    images: [ "/projects/blockcircle2.png","/projects/blockcircle.png"],
    href: "/project/blockcircle",
  },
   {
    id: 3,
    projectName: "Golden Goose",
    images: [ "/projects/goldengoose2.png","/projects/goldengoose.png"],
    href: "/project/golden-goose",
  },
  {
    id: 4,
    projectName: "Pind Eats",
    images: ["/projects/pindeats.png","/projects/pindeats2.png"],
    href: "/project/food",
  },
 
  {
    id: 5,
    projectName: "Gnizzel",
    images: ["/projects/gnizeel.png","/projects/gnizeel6.png","/projects/gnizeel7.png","/projects/gnizeel2.png","/projects/gnizeel3.png","/projects/gnizeel4.png","/projects/gnizeel5.png"],
    href: "/project/gnizeel",
  },
 
  {
    id: 6,
    projectName: "Uni Hub",
    images: ["/projects/workImg.jpeg"],
    href: "/project/unihub",
  },
 
  {
    id: 7,
    projectName: "TMCO",
    images: ["/projects/TMCO.png"],
    href: "/project/tmco",
  },
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const maxIndex = data.length - (isMobile ? 1 : 3);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const cardWidth = isMobile ? 300 : 400;
  const cardHeight = isMobile ? 200 : 250;
  const cardRadius = 14.95;
  
  // Small left offset to push first card slightly left
  const leftOffset = isMobile ? 20 : 100;

  const handleCardClick = (href) => {
    window.location.href = href;
  };

  return (
    <section className="relative py-8 px-4 md:px-6">
      {/* Carousel */}
      <div className="relative">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${leftOffset + currentIndex * (cardWidth + 16)}px)`,
          }}
        >
          {data.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              cardWidth={cardWidth}
              cardHeight={cardHeight}
              cardRadius={cardRadius}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prevSlide}
          disabled={currentIndex ===0}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

// ProjectCard component remains the same
function ProjectCard({ project, cardWidth, cardHeight, cardRadius, onCardClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation(); // Prevent card click
    if (project.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  return (
    <motion.div
      className="flex-shrink-0 relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onClick={() => onCardClick(project.href)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onCardClick(project.href);
        }
      }}
    >
      <div
        className="w-full aspect-[8/5] min-h-[200px] overflow-hidden shadow-lg border border-gray-200 relative rounded-xl"
        style={{
          width: `${cardWidth}px`,
          borderRadius: `${cardRadius}px`,
        }}
      >
        <Image
          src={project.images[currentImageIndex]}
          alt={project.projectName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 90vw, 33vw"
        />

     {/* Image Switcher Button with Icon */}
{project.images.length > 1 && (
  <button
    onClick={nextImage}
    className="absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md backdrop-blur-sm transition-all flex items-center justify-center"
    aria-label="Next image"
  >
    {/* Right Arrow Icon */}
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
)}
      </div>
    </motion.div>
  );
}