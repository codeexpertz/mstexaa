// app/Resorces.jsx
import React from "react";

import Link from "next/link";
import ProjectCarousel from "../ProjectCarousel";

const Projects = () => {
  return (
    <>
     
      <div id="heroproject" className="2xl:flex 2xl:justify-center 2xl:items-center 2xl:flex-col  py-8 px-6 md:px-12 lg:px-20 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-7xl mb-2 gap-6 md:gap-0">
          <div>
            <span className="text-base rounded-full py-1 px-3 border border-orange-200  text-orange-500 font-bold">• Project</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Comprehensive project
              <br/>
              Plan & Overview
            </h2>
          </div>

          <Link
            href="/project"
            className="2xl:ml-10 mt-4 md:mt-0 inline-flex gap-2 items-center px-5 py-2.5 border-2 border-black rounded-full text-base font-semibold text-black hover:bg-gray-50 transition-colors duration-200"
          >
            See All Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2919 9.44492C13.8422 8.9952 13.6149 7.87939 13.5009 6.866C13.3518 5.56048 13.4082 4.23496 13.7161 2.95853C13.947 2.00151 14.3186 0.932974 14.898 0.353551M14.898 0.353551C14.3186 0.932974 13.2494 1.30511 12.293 1.53543C11.016 1.84272 9.69045 1.89908 8.38614 1.7512C7.37214 1.63665 6.25512 1.40815 5.80661 0.959643M14.898 0.353551L0.351787 14.8997" stroke="black"/>
</svg>
          </Link>
        </div>

      <div className="relative">
  {/* ✅ Left mask */}
  <div className="absolute top-0 -left-20  h-full w-20 z-10 pointer-events-none 
                  bg-gradient-to-r from-white to-transparent" />

  {/* ✅ Carousel wrapper */}
  
 <ProjectCarousel/>
  {/* ✅ Right mask */}
  <div className="absolute top-0 -right-20 h-full w-20 z-10 pointer-events-none 
                  bg-gradient-to-l from-white to-transparent" />
</div>

   

          
    
      </div>
    </>
  );
};

export default Projects;