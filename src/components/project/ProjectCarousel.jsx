"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectCarousel() {
  // Define your SVG image paths here
  const images = [
    "/projects/herosection.svg",
    "/services&solution.svg",
    "/illustration.svg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount or when isAutoSliding changes
  }, [images.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto"> {/* Adjust max-width as needed */}
      {/* Main Image Container */}
      <div className="relative w-full aspect-square rounded-xl overflow-hidden"> {/* Changed aspect ratio and added overflow-hidden */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Project screenshot ${currentIndex + 1}`}
            className="w-full h-full object-contain" /* Changed to object-contain */
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}