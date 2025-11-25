"use client";
import { useState } from 'react';
import { FaLinkedinIn, FaEnvelope, FaLocationArrow, FaTiktok, FaInstagram, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const [showMap, setShowMap] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socialLinks = [
    {
      icon: <FaTiktok className="text-xl" />,
      label: 'TikTok',
      href: 'https://www.tiktok.com/@code_expertz',
      isExternal: true,
    },
    {
      icon: <FaInstagram className="text-xl" />,
      label: 'Instagram',
      href: 'https://www.instagram.com/code_expertz',
      isExternal: true,
    },
    {
      icon: <FaLinkedinIn className="text-xl" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/codeexpertz',
      isExternal: true,
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      label: 'Email',
      href: 'mailto:codeexpertss@gmail.com',
      isExternal: false,
    },
    {
      icon: <FaPhone className="text-xl" />,
      label: 'Call',
      href: 'tel:+923156801933',
      isExternal: false,
    },
    {
      icon: <FaLocationArrow className="text-xl" />,
      label: 'Location',
      isButton: true,
    },
  ];

  return (
    <>
      <footer className="bg-[#FF6400] md:h-16 relative rounded-lg pt-2 px-6 mx-auto w-11/12 flex flex-wrap justify-between items-center gap-4">
        <p className="text-sm text-gray-300 whitespace-nowrap">
          © 2025 CodeExpert. All rights reserved
        </p>

        <div className="flex justify-center gap-2.5">
          {socialLinks.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => {
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
            >
              {item.isButton ? (
                <div
                  className="bg-black text-white p-2.5 rounded-full transition-all duration-300 hover:bg-gray-200 hover:scale-110 cursor-pointer"
                  aria-label={item.label}
                  onClick={() => setShowMap(true)}
                >
                  {item.icon}
                </div>
              ) : (
                <a
                  href={item.href}
                  target={item.isExternal ? '_blank' : '_self'}
                  rel={item.isExternal ? 'noopener noreferrer' : ''}
                  className="bg-black text-white p-2.5 rounded-full transition-all duration-300 hover:bg-gray-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 inline-block"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              )}
              
              {/* Hover Label - Show phone number for Call, label for others */}
              {hoveredIndex === index && (
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded text-xs whitespace-nowrap pointer-events-none z-10 opacity-0 animate-tooltipFadeIn">
                  {item.label === 'Call' ? '+923156801933' : item.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-800"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </footer>

      {/* Location Popup */}
      {showMap && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 opacity-0 animate-modalFadeIn"
          onClick={() => setShowMap(false)}
        >
          <div
            className="relative bg-white rounded-xl overflow-hidden shadow-2xl w-full max-w-2xl max-h-[90vh] scale-90 opacity-0 animate-modalScaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-3 sm:p-4 bg-gray-900 text-white flex justify-between items-center">
              <h3 className="font-semibold text-base sm:text-lg">Our Location</h3>
              <button
                onClick={() => setShowMap(false)}
                className="text-white hover:text-gray-300 text-xl transition-colors"
                aria-label="Close map"
              >
                &times;
              </button>
            </div>

            {/* Map Container */}
            <div className="p-2 sm:p-4">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.326333071058!2d74.8736792!3d32.1144881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919530067eb3155%3A0x5edb07048f542dd1!2sCode%20Expert!5e0!3m2!1sen!2s!4v1745948408210!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  className="w-full h-full rounded-lg border-0"
                  style={{ borderRadius: '10px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mstexa Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SVG Wave - Moved outside the modal, positioned at bottom of footer */}
      <svg 
        width="91.67%" 
        height="160" 
        viewBox="0 0 1304 160" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className='mx-auto md:block hidden'
        
      >
        <path d="M1081.18 190.184L1080.16 188.757L1062.91 164.701V164.65L1022.67 108.433V108.586L998.788 75.0492L975.114 41.7676H911.71V63.6071L939.844 102.572L940.634 103.642L961.837 132.999V133.101L1002.1 189.14L1021.75 216.484L1022.13 217.019L1050.06 255.932H1113.03V234.526L1081.2 190.184H1081.18Z" fill="#FF6400"/>
        <path d="M1042.06 36.7227L1024.52 103.388L1064.76 159.605L1114.86 36.7227H1042.06Z" fill="black"/>
        <path d="M909.669 261.005H982.476L1000.03 194.212L959.745 138.174L909.669 261.005Z" fill="black"/>
        <path d="M0 145.232C0.433222 76.8845 9.40351 38.4551 100.38 38.4551C133.687 38.4551 155.909 45.2847 170.868 59.3772C185.827 45.2847 208.023 38.4551 241.356 38.4551C332.766 38.4551 341.736 76.8845 341.736 145.232V256.29H281.926V148.213C281.926 121.736 278.944 98.2398 241.356 98.2398C203.767 98.2398 200.786 121.736 200.786 148.213V256.29H140.976V148.213C140.976 121.736 137.994 98.2398 100.406 98.2398C62.8172 98.2398 59.8357 121.736 59.8357 148.213V256.29H0.0255086V145.232H0Z" fill="black"/>
        <path d="M466.835 38.0215C504.856 38.0215 525.778 42.3027 544.152 50.4066V121.302H534.341C521.523 110.624 491.197 97.8062 460.871 97.8062C441.223 97.8062 423.283 99.5136 423.283 110.624C423.283 137.968 559.544 107.21 559.544 187.076C559.544 248.593 492.904 259.271 448.92 259.271C404.935 259.271 377.158 252.008 358.784 243.904V177.698H369.028C381.413 188.375 407.05 199.486 448.894 199.486C477.946 199.486 497.593 197.779 497.593 187.534C497.593 161.057 362.199 193.523 362.199 110.65C362.199 58.9691 407.891 38.047 466.835 38.047V38.0215Z" fill="black"/>
        <path d="M636.405 0V42.7107H676.975V102.521H636.405V155.909C636.405 180.679 640.253 200.327 676.975 200.76V260.571C585.565 260.137 577.028 223.415 576.595 158.916V0.0254891H636.405V0Z" fill="black"/>
        <path d="M799.142 39.7305C866.19 39.7305 894.808 74.7451 894.808 118.755C894.808 145.666 890.119 158.484 881.148 166.155H755.998C762.394 190.925 783.342 199.462 814.942 199.462C846.542 199.462 872.178 188.351 884.563 177.674H894.808V246.862C876.434 254.966 847.408 259.247 814.942 259.247C742.339 259.247 694.073 230.196 694.073 149.056C694.073 67.9155 742.339 39.7051 799.142 39.7051V39.7305ZM798.709 99.5407C774.372 99.5407 761.554 109.352 756.431 127.726H841.012C841.012 116.182 830.767 99.5407 798.734 99.5407H798.709Z" fill="black"/>
        <path d="M1207.47 38.4552C1262.56 38.4552 1302.73 60.2437 1304 152.061V256.29H1244.19V225.964C1235.65 245.612 1219.85 259.271 1189.94 259.271C1154.49 259.271 1103.21 243.905 1103.21 149.488C1103.21 55.0705 1153.19 38.4297 1207.44 38.4297L1207.47 38.4552ZM1205.33 98.2653C1168.61 98.2653 1164.32 125.609 1164.32 150.379C1164.32 186.261 1180.99 199.512 1204.49 199.512C1227.98 199.512 1243.78 186.26 1243.78 152.112C1243.78 125.635 1238.23 98.2909 1205.35 98.2909L1205.33 98.2653Z" fill="black"/>
      </svg>

      <style jsx>{`
        @keyframes tooltipFadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        
        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes modalScaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-tooltipFadeIn {
          animation: tooltipFadeIn 0.2s ease-out forwards;
        }
        
        .animate-modalFadeIn {
          animation: modalFadeIn 0.2s ease-out forwards;
        }
        
        .animate-modalScaleIn {
          animation: modalScaleIn 0.3s ease-out 0.1s forwards;
        }
      `}</style>
    </>
  );
};

export default Footer;