'use client';
import Link from 'next/link';
import { useState } from 'react';
const initialData = [
  {
    id: 1,
      img: "/services/uiux&gd.svg",
    main: ["UI/UX &","Graphic Design"],
    shortName: "Design & Creative",
    d1: "Designing intuitive interfaces and visuals that enhance user experience and brand identity.",
    l1: "UI/UX Design",
    l2: "Branding",
    l3: "Graphic Design",
    l4: "Prototyping",
    l5: "Wireframing",
    l6: "Design Systems",
    link: "/services/digital-desgining",
    iconBg: "from-[#F56C70] to-[#FBBB20]"
 
  },
  {
    id: 2,
      img: "/services/mwa.svg",
    main: ["Mobile & Web","Application"],
    shortName:"App Dev",
    d1: "Building fast, responsive, and user-friendly mobile and web applications for all platforms.",
    l1: "Mobile App Design",
    l2: "Web App Design",
    l3: "Full Stack Build",
    l4: "API Integration",
    l5: "Performance Tune",
    l6: "Cross-Platform UX",

    link: "/services/webdev",
    iconBg: "from-[#FF3A48] to-[#FF3A48]"
  },
  {
    id: 3,
     img: "/services/sdc.svg",
    main: ["Software Development","Consulting"],
    shortName: "Tech Consulting",
    d1: "Providing expert guidance to design, develop, and optimize custom software solutions.",
    l1: "Web Development",
    l2: "Mobile Development",
    l3: "Enterprise Solutions",
    l4: "Custom CRM/ERP",
    l5: "API Development",
    l6: "Software Testing",
    link: "/services/software-dev",
    iconBg: "from-[#01DB39] to-[#03CC93]"
  }
  ,
  // {
  //   id: 4,
  //   img: "/services/ad.svg",
  //   main: ["Application","Development"],
  //   shortName: "App Dev",
  //   d1: "Creating high-performance, scalable, and user-focused applications for various platforms.",
  //   l1: "Frontend Design",
  //   l2: "Backend Logic",
  //   l3: "API Services",
  //   l4: "Database Setup",
  //   l5: "App Testing",
  //   l6: "Deployment",

  //   link: "/services/app-dev",
  //   iconBg:"from-[#16A0AC] to-[#1CC4D5]"
  // },
  {
    id: 4,
    img: "/services/ai.svg",
    main: ["AI"," Solutions"],
    shortName: "AI Tech",
    d1: "Delivering intelligent, data-driven solutions powered by cutting-edge AI technologies.",
    l1: "Machine Learning",
    l2: "Natural Language",
    l3: "Computer Vision",
    l4: "Predictive Analytics",
    l5: "Chatbots",
    l6: "Recommendation",
    link: "/services/ai-solutions",
    iconBg: "from-green-500 to-emerald-500"
  },
  {
    id: 5,
    main: ["Search Engine"," Optimization "],
    shortName: "SEO",
    img: "/services/seo.svg",
    d1: "Optimizing websites to boost visibility, traffic, and rankings on search engines.",
    l1: "Keyword Research",
    l2: "On-Page SEO",
    l3: "Off-Page SEO",
    l4: "Technical SEO",
    l5: "SEO Audits",
    l6: "Local SEO",
    link: "/services/seo",
    iconBg: "from-cyan-500 to-blue-500"
  },
  {
    id: 6,
    img: "/services/dm.svg",
    main: ["Digital"," Marketing"],
    shortName: "Digital Media",
    d1: "Promoting brands online through targeted strategies to increase reach and engagement.",
    l1: "Social Marketing",
    l2: "Content Marketing",
    l3: "Email Marketing",
    l4: "Paid Advertising",
    l5: "Influencer Marketing",
    l6: "Video Marketing",
    link: "/services/digital-marketing",
    iconBg: "from-purple-500 to-indigo-500"
  },
  {
    id: 7,
    img: "/services/cs.svg",
    main: ["Cloud" ,"Solution"],
    shortName: "Cloud Tech",
    d1: "Providing secure, scalable, and efficient cloud-based infrastructure and services.",
    l1: "Cloud Migration",
    l2: "Cloud Security",
    l3: "Managed Cloud",
    l4: "Cloud Optimization",
    l5: "Disaster Recovery",
    l6: "DevOps on Cloud",
    link: "/services/cloud-service",
    iconBg: "from-yellow-500 to-orange-500"
  },
];

export default function ServicesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 4;
  const totalCards = initialData.length;
  const visibleServices = initialData.slice(currentIndex, currentIndex + cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= totalCards - cardsToShow) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return totalCards - cardsToShow;
      }
      return prev - 1;
    });
  };

  return (
    <div id='services' className="min-h-screen bg-black text-white relative  overflow-hidden mt-4">
      {/* Flip Card CSS */}
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <span className="inline-flex gap-2 items-center px-4 py-1 text-base font-bold border border-[#FF6400]  text-[#FF6400] rounded-full mb-4">
              <span className='w-1 h-1 bg-orange-600 rounded-full'></span>
              Services
            </span>
            <h1 className="text-[40px] md:text-xl lg:text-[45px] font-bold leading-tight">
              Explore Our Services
            </h1>
          </div>
          <div className="md:max-w-md">
            <p className="text-[#FFFFFF80]  font-semibold text-[18px] leading-relaxed">
             We are a web and mobile design & development
agency Making websites & apps, creating brand
identities, and launching startups.            </p>
          </div>
          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-14">
            <button
              onClick={prevSlide}
              className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 border border-gray-700"
              type="button"
            >
              <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.07199 0.812744C7.07199 1.44874 6.4437 2.39846 5.8077 3.1956C4.98999 4.22417 4.01284 5.1216 2.89256 5.80646C2.05256 6.31989 1.03427 6.81274 0.214844 6.81274M0.214844 6.81274C1.03427 6.81274 2.05342 7.3056 2.89256 7.81903C4.01284 8.50474 4.98999 9.40217 5.8077 10.429C6.4437 11.227 7.07199 12.1785 7.07199 12.8127M0.214844 6.81274L20.7863 6.81274" stroke="white"/>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="flex justify-center items-center w-10 h-10 rounded-full bg-[#FF6400] hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-orange-500/25"
              type="button"
            >
              <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.928 0.812744C13.928 1.44874 14.5563 2.39846 15.1923 3.1956C16.01 4.22417 16.9872 5.1216 18.1074 5.80646C18.9474 6.31989 19.9657 6.81274 20.7852 6.81274M20.7852 6.81274C19.9657 6.81274 18.9466 7.3056 18.1074 7.81903C16.9872 8.50474 16.01 9.40217 15.1923 10.429C14.5563 11.227 13.928 12.1785 13.928 12.8127M20.7852 6.81274L0.213726 6.81274" stroke="white"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Service Cards with Flip Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleServices.map((service, index) => (
            <div
              key={`${service.id}-${currentIndex}`}
              className="flip-card h-[330px] cursor-pointer"
            >
              <div className="flip-card-inner ">
                {/* Front Side */}
                <div className="flip-card-front bg-[#FFFFFF33]  backdrop-blur-sm p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group hover:transform hover:-translate-y-1">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.img ? (
                      <img src={service.img} alt={service.main} className="w-8 h-8 object-contain filter brightness-0 invert" />
                    ) : (
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-gray-800 font-bold text-sm">{service.shortName.charAt(0)}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-left text-xl font-bold mb-4 leading-tight">
                    {service.main[0]} <br /> {service.main[1]}
                  </h3>

              {/* Services List - 2 Columns, 3 Rows (Image Match) */}
                  <div className="flex flex-col gap-3 mb-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 flex-1">
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <circle cx="6.5" cy="6.81274" r="6" stroke="white"/>
                          <circle cx="6.5" cy="6.81274" r="2.5" fill="white"/>
                        </svg>
                        <span className="text-gray-300 text-[10px]">{service.l1}</span>
                      </div>
                      <div className="flex items-center gap-1 flex-1">
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <circle cx="6.5" cy="6.81274" r="6" stroke="white"/>
                          <circle cx="6.5" cy="6.81274" r="2.5" fill="white"/>
                        </svg>
                        <span className="text-gray-300 text-[10px]">{service.l4}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 flex-1">
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <circle cx="6.5" cy="6.81274" r="6" stroke="white"/>
                          <circle cx="6.5" cy="6.81274" r="2.5" fill="white"/>
                        </svg>
                        <span className="text-gray-300 text-[10px]">{service.l2}</span>
                      </div>
                      <div className="flex items-center gap-1 flex-1">
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <circle cx="6.5" cy="6.81274" r="6" stroke="white"/>
                          <circle cx="6.5" cy="6.81274" r="2.5" fill="white"/>
                        </svg>
                        <span className="text-gray-300 text-[10px]">{service.l5}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 flex-1">
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <circle cx="6.5" cy="6.81274" r="6" stroke="white"/>
                          <circle cx="6.5" cy="6.81274" r="2.5" fill="white"/>
                        </svg>
                        <span className="text-gray-300 text-[10px]">{service.l3}</span>
                      </div>
                      <div className="flex items-center gap-1 flex-1">
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <circle cx="6.5" cy="6.81274" r="6" stroke="white"/>
                          <circle cx="6.5" cy="6.81274" r="2.5" fill="white"/>
                        </svg>
                        <span className="text-gray-300 text-[10px]">{service.l6}</span>
                      </div>
                    </div>
                  </div>
                  <svg width="249" height="2" viewBox="0 0 249 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 0.812744H249" stroke="url(#paint0_linear_465_6554)"/>
                    <defs>
                      <linearGradient id="paint0_linear_465_6554" x1="0.5" y1="1.31274" x2="249" y2="1.31274" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0"/>
                        <stop offset="0.504808" stopColor="white"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Explore More Button */}
                  <Link
                    className="text-sm mt-4 font-semibold flex gap-2 items-center group-hover:text-orange-400 transition-colors duration-300"
                    href={service.link}
                  >
                    Explore More
                   <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.62394 5.64889C8.37581 5.37308 8.27775 4.7161 8.24257 4.12227C8.19589 3.35719 8.26952 2.58678 8.48816 1.85271C8.65213 1.30234 8.90145 0.691324 9.25681 0.37163M9.25681 0.37163C8.90145 0.691324 8.26719 0.875198 7.70297 0.979926C6.94962 1.11962 6.17574 1.11166 5.4205 0.985374C4.83336 0.887438 4.1897 0.719955 3.94224 0.444886M9.25681 0.37163L0.335653 8.3974" stroke="#F97A02"/>
</svg>

                  </Link>
                </div>

                {/* Back Side */}
                <div className={`flip-card-back bg-gradient-to-br ${service.iconBg}  p-6 border border-gray-700/50 flex flex-col justify-between`}>
                  <div>
                    {/* Title */}
                    <h3 className="text-white text-xl font-bold  leading-tight text-center">
                      {service.shortName}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 text-xs leading-relaxed">
                      {service.d1}
                    </p>

                  {/* Services List - 2 Columns, 3 Rows (Image Match) */}
                  <div className="flex flex-col gap-3 my-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 flex-1">
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <circle cx="6.5" cy="6.81274" r="6" stroke="white"/>
                          <circle cx="6.5" cy="6.81274" r="2.5" fill="white"/>
                        </svg>
                        <span className="text-gray-300 text-[10px]">{service.l1}</span>
                      </div>
                      <div className="flex items-center gap-1 flex-1">
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <circle cx="6.5" cy="6.81274" r="6" stroke="white"/>
                          <circle cx="6.5" cy="6.81274" r="2.5" fill="white"/>
                        </svg>
                        <span className="text-gray-300 text-[10px]">{service.l4}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 flex-1">
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <circle cx="6.5" cy="6.81274" r="6" stroke="white"/>
                          <circle cx="6.5" cy="6.81274" r="2.5" fill="white"/>
                        </svg>
                        <span className="text-gray-300 text-[10px]">{service.l2}</span>
                      </div>
                      <div className="flex items-center gap-1 flex-1">
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <circle cx="6.5" cy="6.81274" r="6" stroke="white"/>
                          <circle cx="6.5" cy="6.81274" r="2.5" fill="white"/>
                        </svg>
                        <span className="text-gray-300 text-[10px]">{service.l5}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 flex-1">
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <circle cx="6.5" cy="6.81274" r="6" stroke="white"/>
                          <circle cx="6.5" cy="6.81274" r="2.5" fill="white"/>
                        </svg>
                        <span className="text-gray-300 text-[10px]">{service.l3}</span>
                      </div>
                      <div className="flex items-center gap-1 flex-1">
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                          <circle cx="6.5" cy="6.81274" r="6" stroke="white"/>
                          <circle cx="6.5" cy="6.81274" r="2.5" fill="white"/>
                        </svg>
                        <span className="text-gray-300 text-[10px]">{service.l6}</span>
                      </div>
                    </div>
                  </div>
                  </div>

                  {/* Learn More Button */}
                  <Link
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-3 rounded-xl text-sm font-semibold flex gap-2 items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                    href={service.link}
                  >
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M14.6669 10.1468C14.2172 9.69711 13.9899 8.58129 13.8759 7.56791C13.7268 6.26239 13.7832 4.93687 14.0911 3.66044C14.322 2.70342 14.6936 1.63488 15.273 1.05546M15.273 1.05546C14.6936 1.63488 13.6244 2.00702 12.668 2.23733C11.391 2.54462 10.0654 2.60099 8.76114 2.4531C7.74714 2.33855 6.63012 2.11006 6.18161 1.66155M15.273 1.05546L0.726787 15.6017" stroke="white"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* CTA Button */}
        <div className="text-center mt-8">
          <Link href="/services"
            className="inline-flex gap-2 items-center px-8 py-4 bg-transparent border-2 border-orange-500 rounded-full font-semibold text-lg hover:bg-orange-500  transition-all duration-300 shadow-lg shadow-orange-500/25"
            type="button"
          >
            Explore More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6669 10.1468C14.2172 9.69711 13.9899 8.58129 13.8759 7.56791C13.7268 6.26239 13.7832 4.93687 14.0911 3.66044C14.322 2.70342 14.6936 1.63488 15.273 1.05546M15.273 1.05546C14.6936 1.63488 13.6244 2.00702 12.668 2.23733C11.391 2.54462 10.0654 2.60099 8.76114 2.4531C7.74714 2.33855 6.63012 2.11006 6.18161 1.66155M15.273 1.05546L0.726787 15.6017" stroke="white"/>
            </svg>
          </Link>
        </div>
      </div>
      <div className='absolute bottom-0 left-0'>
       <svg width="360" height="364" viewBox="0 0 360 364" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5" filter="url(#filter0_f_1_465)">
<circle cx="36.5" cy="323.4" r="192.5" fill="#FF6400"/>
<circle cx="36.5" cy="323.4" r="161.5" stroke="#FF6400" stroke-width="62"/>
</g>
<defs>
<filter id="filter0_f_1_465" x="-286.9" y="-9.15527e-05" width="646.8" height="646.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="65.45" result="effect1_foregroundBlur_1_465"/>
</filter>
</defs>
</svg>

      </div>
    </div>
  );
}