"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HomePage() {
  const logoVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: {
      opacity: 1,
      scale: 1,
      y: [0, -10, 0],
      transition: {
        duration: 0.8,
        y: {
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  }

  // Use percentage-based positioning for x and y
  const logos = [
    {
      content: <img src="/herosection/figma.png" alt="figma" className="w-full h-full p-2" />,
      bg: "bg-[linear-gradient(136.36deg,rgba(235,60,44,0.2)_17.05%,rgba(235,60,44,0)_98.26%)]",
      x: "10%",
      y: "15%",
      delay: 0,
    },
    {
      content: <img src="/herosection/image1.png" alt="Angular" className="w-full h-full p-2" />,
      bg: "bg-[linear-gradient(136.36deg,rgba(235,60,44,0.2)_17.05%,rgba(235,60,44,0)_98.26%)]",
      x: "85%",
      y: "20%",
      delay: 0.2,
    },
    {
      content: <img src="/herosection/js.png" alt="JavaScript" className="w-full h-full p-2" />,
      bg: "bg-[linear-gradient(137.95deg,rgba(245,190,24,0.2)_10.52%,rgba(245,190,24,0)_94.5%)]",
      x: "5%",
      y: "40%",
      delay: 0.4,
    },
    {
      content: <img src="/herosection/vue.png" alt="Vue.js" className="w-full h-full p-2" />,
      bg: "bg-[linear-gradient(136.31deg,rgba(11,215,108,0.2)_16.84%,rgba(11,215,108,0)_97.82%)]",
      x: "20%",
      y: "65%",
      delay: 0.6,
    },
    {
      content: <img src="/herosection/gpt.png" alt="gpt.js" className="w-full h-full p-2" />,
      bg: "bg-[linear-gradient(136.31deg,rgba(11,215,108,0.2)_16.84%,rgba(11,215,108,0)_97.82%)]",
      x: "15%",
      y: "85%",
      delay: 0.8,
    },
    {
      content: <img src="/herosection/wordpress.png" alt="WordPress" className="w-full h-full p-2" />,
      bg: "bg-[linear-gradient(137.18deg,rgba(2,113,187,0.2)_2.68%,rgba(2,113,187,0)_96.56%)]",
      x: "90%",
      y: "50%",
      delay: 1.0,
    },
    {
      content: <img src="/herosection/photoShop.png" alt="Photoshop" className="w-full h-full p-2" />,
      bg: "bg-[linear-gradient(135.26deg,rgba(53,95,198,0.2)_24.77%,rgba(53,95,198,0)_96.88%)]",
      x: "80%",
      y: "75%",
      delay: 1.2,
    },
  ]

  return (
    <div id="home" className="min-h-screen relative top-18 overflow-hidden  bg-[url('/herosection/Frame.svg')] bg-cover bg-center">
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          // Added responsive sizing: smaller on mobile, larger on bigger screens
          className={`absolute w-10 h-10 sm:w-12 sm:h-12 ${logo.bg} rounded-lg flex items-center justify-center shadow-lg cursor-pointer z-10`}
          style={{
            // Directly use the percentage strings for positioning
            left: logo.x,
            top: logo.y,
          }}
          variants={logoVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ delay: logo.delay }}
        >
          {logo.content}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <span className="text-orange-500 font-medium border border-[#FBE6C9] px-2 rounded-full py-1">• We Digital Product Design Company</span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 max-w-4xl text-balance relative z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          Creating Better Solution
          <br />
          For <span className="relative text-[#FF6400]">
            <span>Business</span>
            <div className="absolute right-[0%] top-14 hidden  w-full md:flex justify-center mt-2">
            <svg width="291" height="19" viewBox="0 0 291 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.25291 12.0132C0.466932 12.4333 -0.949944 12.9608 0.647427 15.1984C0.787677 15.3949 1.00613 15.5261 1.24312 15.572C30.4476 21.2233 52.4469 19.6897 99.7507 9.63247C100.126 9.55275 100.526 9.69092 100.749 10.0024C101.835 11.5171 102.241 12.7198 102.345 14.3715C102.382 14.9704 102.907 15.4378 103.503 15.3682C134.486 11.7517 152.499 9.26671 183.185 4.81743C184.035 4.69417 184.643 5.62815 184.176 6.34933L181.003 11.2533C180.548 11.9573 181.109 12.8755 181.943 12.7915L247.906 6.14773C248.609 6.07691 249.162 6.73792 248.968 7.41741L247.784 11.5602C247.588 12.2457 248.152 12.9101 248.86 12.8284L285.043 8.6534C285.694 8.57833 286.225 9.16706 286.083 9.80644C285.876 10.7368 287.012 11.3607 287.686 10.6867L290.528 7.84462C291.177 7.19632 290.683 6.0901 289.768 6.13893L255.926 7.94383C255.354 7.97435 254.873 7.51846 254.873 6.94525V3.10145C254.873 2.5111 254.364 2.04923 253.777 2.1061L194.568 7.83596C193.808 7.90948 193.25 7.13907 193.555 6.43979L195.692 1.55675C195.997 0.858258 195.429 0.0896217 194.67 0.162796C162.246 3.28923 143.849 6.57275 112.607 11.5641C111.683 11.7117 111.077 10.6237 111.693 9.91964L114.946 6.20212C115.574 5.48463 114.917 4.3819 113.981 4.56329C63.469 14.3526 38.5814 16.4034 4.49193 12.0153C4.41351 12.0053 4.3315 12.0045 4.25291 12.0132Z" fill="#FBE6C9"/>
            </svg>
          </div>
          </span>
          
        </motion.h1>

        <motion.p
          className="text-[#00000099] font-semibold text-lg mb-8 max-w-2xl text-pretty"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.9 }}
        >
          We are a web and mobile design & development agency. Making website & apps, creating brand identities, and
          launching startups.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
        >
         
          <Link  href="/calendly/meeting" className=" leading-8  bg-[#FF6400] hover:bg-orange-600 text-white px-6 py-2 text-base rounded-full font-medium transition-colors duration-200">
            Start a project
          </Link>
       <Link href="/job" className="relative group inline-block">
      <motion.div
      initial={{ backgroundColor: "rgba(255,255,255,1)", color: "#000000" }}
whileHover={{ backgroundColor: "rgba(0,0,0,1)", color: "#ffffff" }}

        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative px-8 py-3 rounded-full ring-1 ring-[#000000]  border border-[#000000]  overflow-hidden"
      >
        {/* Text */}
        <span className="relative z-10 font-semibold">Find a job</span>

        {/* Animated diagonal corner */}
        <motion.span
          initial={{ width: 32, height: 32 }} // w-8 h-8
          whileHover={{ width: 48, height: 48 }} // expand to w-12 h-12
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 bg-black [clip-path:polygon(100%_0,100%_100%,0_100%)]"
        />
      </motion.div>
    </Link>
        </motion.div>
      </div>
    </div>
  )
}