"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ITServicesSection = () => {
  const services = [
    {
      icon: "/itservices/whmcs.svg",
      title: "WHMCS Template",
    },
    {
      icon: "/itservices/customdevelopment.svg",
      title: "Custom Development",
    },
    {
      icon: "/itservices/whmcs.svg", 
      title: "E-commerce Platform",
    },
    {
      icon: "/itservices/whmcs.svg",
      title: "App Development",
    },
  ];

  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-white">
               {/* top right SVG Shape */}
      <div className="absolute hidden md:block -top-10 right-2 z-10 pointer-events-none">
       <svg width="80" height="170" viewBox="0 0 119 237" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.4312 6.82812L93.0142 41.3789V41.3799L118.245 76.8164L120.967 80.6387V80.4492L160.462 135.648V135.707L160.744 136.099L178.972 161.499L180.049 163.002L182.768 166.795V166.759L213.419 209.443V230.084H149.154L120.09 189.603L119.704 189.05L119.698 189.042L119.693 189.034L98.9126 160.146L56.6704 101.317V101.23L56.3872 100.838L33.9907 69.8232L33.9897 69.8213L33.1675 68.6875L3.71436 27.9189V6.82812H68.4312Z" stroke="#F97A02" stroke-width="3"/>
<path d="M93.8779 166.71L75.8115 235.471H2.24316L53.293 110.265L93.8779 166.71Z" stroke="black" stroke-width="3"/>
</svg>

      </div>
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-block text-[#FF6400] text-base font-bold py-1 px-3 rounded-full border border-[#FF6400] mb-4">
          • We Specialize In
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          IT Services to Various Industries
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border-[1.57px] border-[#00000066] flex flex-col items-center justify-between hover:shadow-md transition-shadow duration-300"
          >
            {/* Use Image component for SVG icons */}
            <div className="mb-4   w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
              <Image
                src={service.icon}
                alt={service.title}
                width={32}
                height={32}
                className="w-[40px] h-[25px]   object-contain"
              />
            </div>
            <h3 className="text-sm font-bold text-gray-800 text-center mb-4">
              {service.title}
            </h3>
            <div className="w-8 h-8 bg-[#FF6400] rounded-full flex items-center justify-center">
 <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1041 8.57434C11.8538 8.14078 11.9083 7.24607 12.0282 6.45233C12.1808 5.42931 12.4937 4.43295 12.9878 3.52515C13.3584 2.84453 13.8586 2.10777 14.4172 1.78526M14.4172 1.78526C13.8586 2.10777 12.9698 2.1729 12.1957 2.15317C11.1621 2.12664 10.1428 1.89944 9.1812 1.52127C8.43356 1.22759 7.63079 0.826275 7.38114 0.393879M14.4172 1.78526L0.393541 9.88182" stroke="black" stroke-width="1.57428"/>
</svg>


            </div>
          </motion.div>
        ))}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#FF6400] rounded-xl font-bold flex flex-col items-center justify-center p-6 text-black hover:bg-[#F97A02] transition-colors duration-300 cursor-pointer"
        >
          <div className="flex space-x-1 mb-4">
     <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.78714" y="0.78714" width="13.3819" height="13.3819" rx="2.36142" stroke="black" stroke-width="1.57428"/>
<rect x="20.4661" y="0.78714" width="13.3819" height="13.3819" rx="2.36142" stroke="black" stroke-width="1.57428"/>
<rect x="0.78714" y="18.8916" width="13.3819" height="13.3819" rx="2.36142" stroke="black" stroke-width="1.57428"/>
<path d="M25.1893 19.6787V31.4862" stroke="black" stroke-width="2.36142"/>
<path d="M31.4865 25.189L19.679 25.189" stroke="black" stroke-width="2.36142"/>
</svg>

          </div>
          <p className="text-sm font-medium text-center">Not Listed? Let’s Talk</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ITServicesSection;