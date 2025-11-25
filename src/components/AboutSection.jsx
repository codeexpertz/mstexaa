"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
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
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen relative text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 px-6 md:px-12">
        {/* 🎯 SVG GOES INSIDE SECTION — so it’s part of the same stacking context */}
        <div className="absolute bottom-0 right-0 -z-10 pointer-events-none">
          <svg
            width="273"
            height="300"
            viewBox="0 0 273 517"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_627_6416)">
              <circle cx="259" cy="258.5" r="181" fill="#FBE3E0" />
            </g>
            <defs>
              <filter
                id="filter0_f_627_6416"
                x="0.5"
                y="0"
                width="517"
                height="517"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="38.75"
                  result="effect1_foregroundBlur_627_6416"
                />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Main content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
            <Image
              src="/office.svg"
              alt="Modern Office Workspace"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="flex md:flex-row flex-col md:justify-between items-start gap-12 md:items-center ">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >         
              <p className="text-base flex gap-2 text-orange-500 font-bold border border-orange-200 rounded-full items-center w-fit px-3 py-1">
               <span>•</span> About Mstexa
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight ">
                12+ Businesses <br />
                <span className="text-orange-500 flex md:flex-row flex-col items-start md:items-center gap-2 relative"><span className="text-black ">Empowered</span>Worldwide
                   <svg
                                        width="235"
                                        height="20"
                                        viewBox="0 0 291 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute hidden md:block -bottom-[25%] right-0"
                                    >
                                        <path
                                            d="M4.25291 12.5132C0.466932 12.9333 -0.949944 13.4608 0.647427 15.6984C0.787677 15.8949 1.00613 16.0261 1.24312 16.072C30.4476 21.7233 52.4469 20.1897 99.7507 10.1325C100.126 10.0528 100.526 10.1909 100.749 10.5024C101.835 12.0171 102.241 13.2198 102.345 14.8715C102.382 15.4704 102.907 15.9378 103.503 15.8682C134.486 12.2517 152.499 9.76671 183.185 5.31743C184.035 5.19417 184.643 6.12815 184.176 6.84933L181.003 11.7533C180.548 12.4573 181.109 13.3755 181.943 13.2915L247.906 6.64773C248.609 6.57691 249.162 7.23792 248.968 7.91741L247.784 12.0602C247.588 12.7457 248.152 13.4101 248.86 13.3284L285.043 9.1534C285.694 9.07833 286.225 9.66706 286.083 10.3064C285.876 11.2368 287.012 11.8607 287.686 11.1867L290.528 8.34462C291.177 7.69632 290.683 6.5901 289.768 6.63893L255.926 8.44383C255.354 8.47435 254.873 8.01846 254.873 7.44525V3.60145C254.873 3.0111 254.364 2.54923 253.777 2.6061L194.568 8.33596C193.808 8.40948 193.25 7.63907 193.555 6.93979L195.692 2.05675C195.997 1.35826 195.429 0.589622 194.67 0.662796C162.246 3.78923 143.849 7.07275 112.607 12.0641C111.683 12.2117 111.077 11.1237 111.693 10.4196L114.946 6.70212C115.574 5.98463 114.917 4.8819 113.981 5.06329C63.469 14.8526 38.5814 16.9034 4.49193 12.5153C4.41351 12.5053 4.3315 12.5045 4.25291 12.5132Z"
                                            fill="#FBE6C9"
                                        />
                                    </svg>
                </span>
                
              </h1>
              <p className="text-lg text-[#00000099] font-semibold">
                We are a web and mobile design & development agency making websites & apps, creating brand identities, and launching startups.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                More About Us
              </button>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
              <div>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FF873A"/>
<path d="M19.0548 21.7082L12.0014 16.5836V0L14.6956 8.2918H23.4141L16.3606 13.4164L19.0548 21.7082Z" fill="black"/>
</svg>
              </div>
      <div>
                  <h3 className="font-bold text-lg">Our Mission</h3>
                  <p className="text-[#00000080] mt-2 font-medium">
                    Our mission is to reshape lives by offering financial expertise, faster growth, & securing futures through trusted partnerships & innovation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div>
                  <svg width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="17" cy="9" r="9" fill="black"/>
<circle cx="11" cy="15" r="10" fill="#FF873A" stroke="white" stroke-width="2"/>
</svg>
                </div>
     <div>
                  <h3 className="font-bold text-lg">Our Vision</h3>
                  <p className="text-[#00000080] mt-2 font-medium">
                    We aim to be your first choice for digital growth. Our vision is the easy way in building websites, apps, and SaaS platforms that transform how businesses connect with customers.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}