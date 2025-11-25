// pages/404.js
"use client"
import { motion } from 'framer-motion';
import React from 'react';

const NotFoundPage = () => {
  // Define variants for the UFO animation
  const ufoVariants = {
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
          ease: "easeInOut"
        },
        scale: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full mt-10 overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="hidden md:block absolute top-0 left-[20%] z-10 w-1/3 md:w-1/4 lg:w-1/5">
        <svg width="100%" height="100%" viewBox="0 0 395 898" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M153.494 1.25488C39.1766 143.132 -120.868 520.689 153.494 895.897" stroke="url(#paint0_linear_2003_6432)" stroke-opacity="0.1" stroke-width="4"/>
          <path d="M274.361 67.2495C171.96 194.134 28.5993 531.791 274.361 867.348" stroke="url(#paint1_linear_2003_6432)" stroke-opacity="0.1" stroke-width="4"/>
          <path d="M393.004 117.673C303.473 228.682 178.13 524.093 393.004 817.667" stroke="url(#paint2_linear_2003_6432)" stroke-opacity="0.1" stroke-width="4"/>
          <defs>
            <linearGradient id="paint0_linear_2003_6432" x1="77.7494" y1="1.25488" x2="77.7494" y2="895.897" gradientUnits="userSpaceOnUse">
              <stop stop-opacity="0"/>
              <stop offset="0.514423" stop-opacity="0.5"/>
              <stop offset="1" stop-color="#666666" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2003_6432" x1="206.512" y1="67.2495" x2="206.512" y2="867.348" gradientUnits="userSpaceOnUse">
              <stop stop-opacity="0"/>
              <stop offset="0.495192" stop-opacity="0.5"/>
              <stop offset="1" stop-color="#666666" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint2_linear_2003_6432" x1="333.682" y1="117.673" x2="333.682" y2="817.667" gradientUnits="userSpaceOnUse">
              <stop stop-opacity="0"/>
              <stop offset="0.461538" stop-color="#2F2F2F" stop-opacity="0.5"/>
              <stop offset="1" stop-color="#666666" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="hidden md:block absolute top-0 right-[20%] z-10 w-1/3 md:w-1/4 lg:w-1/5">
     
        <svg width="100%" height="100%" viewBox="0 0 395 898" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M241.123 1.25488C355.441 143.132 515.485 520.689 241.123 895.897" stroke="url(#paint0_linear_2003_6431)" stroke-opacity="0.1" stroke-width="4"/>
          <path d="M120.256 67.2495C222.657 194.134 366.018 531.791 120.256 867.348" stroke="url(#paint1_linear_2003_6431)" stroke-opacity="0.1" stroke-width="4"/>
          <path d="M1.61328 117.673C91.1441 228.682 216.487 524.093 1.61328 817.667" stroke="url(#paint2_linear_2003_6431)" stroke-opacity="0.1" stroke-width="4"/>
          <defs>
            <linearGradient id="paint0_linear_2003_6431" x1="316.868" y1="1.25488" x2="316.868" y2="895.897" gradientUnits="userSpaceOnUse">
              <stop stop-opacity="0"/>
              <stop offset="0.514423" stop-opacity="0.5"/>
              <stop offset="1" stop-color="#666666" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2003_6431" x1="188.105" y1="67.2495" x2="188.105" y2="867.348" gradientUnits="userSpaceOnUse">
              <stop stop-opacity="0"/>
              <stop offset="0.495192" stop-opacity="0.5"/>
              <stop offset="1" stop-color="#666666" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint2_linear_2003_6431" x1="60.9348" y1="117.673" x2="60.9348" y2="817.667" gradientUnits="userSpaceOnUse">
              <stop stop-opacity="0"/>
              <stop offset="0.461538" stop-color="#2F2F2F" stop-opacity="0.5"/>
              <stop offset="1" stop-color="#666666" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 z-0 ">
<svg width="992" height="1024" viewBox="0 0 992 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.59" filter="url(#filter0_f_2003_6425)">
<ellipse cx="969.538" cy="304.861" rx="720.5" ry="446" transform="rotate(19.0628 969.538 304.861)" fill="#EFDFFF"/>
</g>
<defs>
<filter id="filter0_f_2003_6425" x="0" y="-451.002" width="1939.07" height="1511.73" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="136.5" result="effect1_foregroundBlur_2003_6425"/>
</filter>
</defs>
</svg>


      </div>
      
      <div className="absolute bottom-0 left-0 z-0 w-1/2 md:w-1/3 lg:w-1/4">
<svg width="1440" height="736" viewBox="0 0 1440 736" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.59" filter="url(#filter0_f_2003_6424)">
<ellipse cx="479.655" cy="755.863" rx="720.5" ry="446" transform="rotate(19.0628 479.655 755.863)" fill="#ACCFFF"/>
</g>
<defs>
<filter id="filter0_f_2003_6424" x="-489.883" y="0" width="1939.07" height="1511.73" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="136.5" result="effect1_foregroundBlur_2003_6424"/>
</filter>
</defs>
</svg>

      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full px-6 pt-12 pb-8 md:pt-20 md:pb-12 relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8 relative"
        >
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-2">404</h1>
          <h2 className="text-2xl md:text-5xl font-medium text-gray-800 mb-2 relative">
            Ooops! Page not found
            {/* Small curved SVG next to "Ooops!" */}
            <svg 
              className='absolute left-[-0.7rem] -top-[0.3rem] z-10' 
              width="35" 
              height="22" 
              viewBox="0 0 55 42" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.0734 8.24531C12.6919 5.87201 16.2331 3.88441 20.0282 2.82583C23.8216 1.76778 28.019 1.59847 31.8591 3.07625L31.8581 3.07658C31.9844 3.12292 32.0932 3.17302 32.1622 3.20716C34.0979 4.00939 35.7369 5.1809 37.0923 6.68169C39.7813 6.33726 42.3868 6.57714 44.7667 7.47703L44.7657 7.47737C47.8713 8.63517 50.4319 10.9451 51.5032 13.9962C52.6009 17.1226 52.0199 20.697 49.4455 24.0441L49.4442 24.0435C47.3411 26.8536 44.1968 29.0785 40.6171 30.3791L16.6546 39.0852L16.6049 39.1001C9.50416 41.2658 4.08118 38.6755 2.47308 34.2495C1.23144 30.8321 2.44921 26.7049 6.27273 23.7111C4.80413 21.16 4.54714 18.4899 5.16197 15.9667C5.89907 12.9422 7.84381 10.2767 10.0695 8.24881L10.0734 8.24531Z" 
                fill="url(#paint0_linear_2004_6462)" 
                stroke="white" 
                stroke-width="4"
              />
              <defs>
                <linearGradient id="paint0_linear_2004_6462" x1="19.9999" y1="4.88712" x2="29.9029" y2="32.1439" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#ECB4F8"/>
                  <stop offset="0.596154" stop-color="#8180F5"/>
                  <stop offset="1" stop-color="#F2FFFF"/>
                </linearGradient>
              </defs>
            </svg>
            {/* Heart-shaped SVG next to "not found" */}
            <svg 
              className='absolute right-[-1.1rem] top-[1.7rem] z-10' 
              width="41" 
              height="28" 
              viewBox="0 0 54 52" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M30.9304 2.88709C38.6181 0.0988056 47.1053 4.11155 49.9045 11.8294C50.9131 14.6103 51.4037 17.3484 51.4983 20.0158L51.4971 20.0152C51.769 26.5171 49.703 32.4709 47.0281 37.2287C44.3632 41.9685 41.0216 45.6521 38.5304 47.6562C37.9798 48.1085 37.2948 48.4472 36.6738 48.6724C36.0527 48.8977 35.3096 49.0781 34.5969 49.0839L34.5966 49.083C31.3998 49.1417 26.4742 48.4565 21.3909 46.5273C16.2879 44.5906 10.8855 41.3455 6.92608 36.1811L6.92549 36.1823C5.28817 34.0744 3.90935 31.6585 2.90072 28.8776C0.10145 21.1597 4.04285 12.6392 11.7305 9.85088C15.4482 8.50249 19.3781 8.75741 22.7376 10.2486C24.36 6.95047 27.2127 4.23552 30.9304 2.88709Z" 
                fill="url(#paint0_linear_2004_6447)" 
                stroke="white" 
                stroke-width="4"
              />
              <defs>
                <linearGradient id="paint0_linear_2004_6447" x1="22.0124" y1="8.24914" x2="35.9919" y2="46.7923" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#ECBCF9"/>
                  <stop offset="0.75" stop-color="#8989F6"/>
                  <stop offset="1" stop-color="#ECF9FE"/>
                </linearGradient>
              </defs>
            </svg>
          </h2>
          <p className="text-lg md:text-xl font-normal text-[#00000080]">Search for your favourite</p>
        </motion.div>

        {/* UFO */}
        <motion.div
          variants={ufoVariants}
          whileHover="hover"
          className='w-[300px]'
        >
          <img src='not-found/ufo.svg'/>
        </motion.div>

     
      </div>
    </div>
  );
};

export default NotFoundPage;