"use client";

import React from 'react';
import { motion } from 'framer-motion';

const KeyFeatures = ({items}) => {



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
   <div className="flex justify-center gap-2 mb-20">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
    Key {" "}
    <span className="relative  text-orange-500">
     Features
      <svg
        className="absolute left-0 top-9 w-full"
        width="269"
        height="19"
        viewBox="0 0 269 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.90749 12.125C0.435851 12.5474 -0.867224 13.0802 0.585726 15.3182C0.721881 15.5279 0.94458 15.6708 1.18922 15.7225C28.1203 21.4112 48.4286 19.866 92.0297 9.74061C92.4247 9.64888 92.849 9.8006 93.0701 10.1405C94.0499 11.6466 94.4184 12.852 94.5129 14.5009C94.5474 15.1041 95.0801 15.5724 95.6794 15.4959C124.202 11.8569 140.827 9.35125 169.08 4.87516C169.916 4.7427 170.535 5.64305 170.104 6.37146L167.129 11.3959C166.709 12.1052 167.279 12.9896 168.098 12.8994L228.846 6.21363C229.543 6.13694 230.1 6.78239 229.923 7.46059L228.817 11.6884C228.638 12.3731 229.208 13.022 229.91 12.9335L263.178 8.73889C263.807 8.6596 264.328 9.22121 264.202 9.84231C264.015 10.7627 265.159 11.345 265.793 10.6521L268.337 7.87134C268.943 7.20914 268.438 6.1457 267.542 6.19793L236.428 8.0112C235.854 8.04466 235.37 7.58805 235.37 7.01289V3.12954C235.37 2.53565 234.855 2.07263 234.264 2.13509L179.764 7.89835C179.015 7.97756 178.451 7.2315 178.731 6.5322L180.731 1.53699C181.01 0.838559 180.437 0.0942761 179.689 0.173178C149.827 3.32244 132.846 6.6311 104.072 11.6552C103.164 11.8136 102.541 10.7654 103.117 10.0464L106.176 6.2263C106.764 5.49237 106.088 4.42947 105.168 4.6242C58.5921 14.484 35.6183 16.5491 4.16815 12.1276C4.08265 12.1156 3.99319 12.1146 3.90749 12.125Z"
          fill="#FBE6C9"
        />
      </svg>
    </span>
  </h2>
</div>

        {/* Timeline Container */}
        <div className="relative flex justify-between items-start gap-8">
          {/* Left Side Items */}
          <motion.div
            className="w-full md:w-1/2 space-y-[100px]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {items.filter(item => item.side === "left").map((item, index) => (
              <motion.div
                key={`left-${index}`}
                variants={itemVariants}
                className="flex flex-col "
              >
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-[#00000080] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Central Line & Dots */}
          <div className="hidden md:block relative">
            <svg className="absolute -top-2" width="10" height="520" viewBox="0 0 10 612" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 4.5V607.5" stroke="black" strokeWidth="9" strokeLinecap="round"/>
            </svg>
            <div className="absolute top-10 -left-1 flex flex-col justify-between h-full">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={`dot-${i}`} className="mb-16">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8.5" r="8" fill="#FF873A"/>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Items */}
          <motion.div
            className="w-full md:w-1/2 space-y-20 mt-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {items.filter(item => item.side === "right").map((item, index) => (
              <motion.div
                key={`right-${index}`}
                variants={itemVariants}
                className="flex flex-col gap-2"
              >
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-[#00000080] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;