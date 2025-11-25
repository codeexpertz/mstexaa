"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

// Custom hook to detect client-side only
const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
};

// Image Slider Component for One Row with Seamless Looping Animation
export const ImageSlider = ({ images, duration = 20, reverse = false }) => {
  const controls = useAnimation();
  const isClient = useIsClient();

  useEffect(() => {
    if (!isClient || !images || images.length === 0) return;

    const startAnimation = () => {
      controls.start({
        x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        },
      });
    };

    startAnimation();

    return () => {
      controls.stop();
    };
  }, [controls, reverse, duration, isClient, images]);

  // On server: render without animation
  if (!isClient || !images || images.length === 0) {
    return (
      <div className="flex whitespace-nowrap gap-4 md:gap-6">
        {images.map((img, index) => (
          <img
            key={`row-${index}`}
            src={img}
            alt={`Project ${index + 1}`}
            className="w-48 h-32 md:w-64 md:h-48 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-hidden w-full mt-8">
      <motion.div
        animate={controls}
        initial={{ x: reverse ? "-100%" : "0%" }}
        className="flex whitespace-nowrap gap-4 md:gap-6"
        style={{ willChange: "transform" }}
      >
        {/* Triple the images for seamless infinite loop */}
        {[...Array(3)].map((_, setIndex) => (
          images.map((img, index) => (
            <img
              key={`set-${setIndex}-img-${index}`}
              src={img}
              alt={`Project ${index + 1}`}
              className="w-48 h-32 md:w-64 md:h-48 object-cover rounded-lg shadow-md flex-shrink-0"
            />
          ))
        ))}
      </motion.div>
    </div>
  );
};