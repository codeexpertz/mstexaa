"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const FlipCard = ({ item, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
      className="w-48 h-48 mx-auto perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-lg font-bold text-gray-800 mb-2">
            {item.step}
          </div>
          <div className="text-xs text-gray-600 text-center px-2 leading-tight">
            {item.title}
          </div>
        </div>

        {/* Back of Card */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-full border-2 border-orange-400 bg-orange-400 shadow-md p-3"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <ul className="text-[10px] text-white flex flex-col items-start text-center list-disc list-inside space-y-1 leading-relaxed">
            {Array.isArray(item.description)
              ? item.description.map((point, i) => <li key={i}>{point}</li>)
              : <li>{item.description}</li>}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};
