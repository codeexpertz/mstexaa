import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Resources = () => {
  const data = [
    {
      id: 1,
      projectName: "Uni Hub",
      description:
        "Mstexa built UniHub, a versatile campus platform covering events, services, and a buy/sell marketplace. Designed for seamless scalability, it easily handles transactions of any size.",
      moreDes:
        "We ensured to bring scalability to the marketplace making it easy for them to handle all scales of transactions.",
      src: "/workImg.jpeg",
      href: `/work?project=uniHub`,
    },
    {
      id: 2,
      projectName: "Gnizzel",
      description:
        "Gnizeel is a multi-language dental app by Mstexa covering services, appointments, and resources. Easy to navigate and connect with dental professionals anytime. ",
      moreDes:
        "We ensured to bring scalability to the marketplace making it easy for them to handle all scales of transactions.",
      src: "/frameGig.png",
      href: "/work?project=gnizzel",
    },
    {
      id: 3,
      projectName: "TMCO",
      description: "TMCO is a full-featured real estate app by Mstexa, built with Flutter, Node.js, Firebase, MongoDB, and React. It offers User, Staff, Guest, and Maintenance modes.",
      moreDes:"We ensured to bring scalability to the marketplace making it easy for them to handle all scales of transactions.",
      src: "/TMCO.png",
      href:"/work?project=TMCO"
    },
    {
      id: 4,
      projectName: "Optimal Planner",
      description: "Optimal Planner is a fitness app by Mstexa using Flutter, React/Next.js, Node.js, and MongoDB. It tracks workouts, manages subscriptions, and delivers AI-powered diet plans.",
      moreDes:"We ensured to bring scalability to the marketplace making it easy for them to handle all scales of transactions.",
      src:"/optimalPlanner.png",
      href:"/work?project=optimalPlanner"
    }
  ];

  const [index, setIndex] = useState(0);
  const timeRef = useRef(null);

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    timeRef.current = setInterval(nextSlide, 1500);

    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    };
  }, [data.length]);
  const handleMouseEnter = () => {
    if (timeRef.current) {
      clearInterval(timeRef.current);
    }
  };
  const handleMouseOut = () => {
    timeRef.current = setInterval(nextSlide, 1000);
  };

  return (
    <>
     <div className="pb-6 text-center lg:text-left lg:pl-[59px]">
  <h1 className="text-4xl sm:text-5xl text-orange-500 capitalize font-bold font-overlock">
    Our Work
  </h1>
  <p className="pt-2 pb-3 max-w-[90%] mx-auto lg:mx-0 lg:max-w-[600px]">
    From concept to success: see our solutions in action
  </p>
  <hr className="border-t-4 border-tirtry text-orange-500 mb-6 mx-auto lg:mx-0 lg:w-[200px]" />
</div>


     <div className="min-h-[534px] px-6 lg:px-28 pb-10 font-poppins">   
  <div className="overflow-x-auto scrollbar-hide shadow-xl rounded-lg pb-1">     
    <div className="flex gap-6 w-max ">       
      {data.map((ele) => (         
        <div           
          key={ele.id}           
          className="bg-white rounded-lg shadow-inner overflow-hidden hover:shadow-xl transition-shadow duration-300 w-80 flex-shrink-0"         
        >           
          <Link href={ele.href}>             
            <div className="w-full relative">               
              <img                 
                src={ele.src}                 
                alt="workImg"                 
                className="w-full h-48 object-cover"               
              />
              <div className="absolute top-40 left-4  ">
                <h1 className="text-2xl  font-semibold font-poppins bg-white text-black  px-6 py-3 shadow-lg rounded-md">
                  {ele.projectName}
                </h1>
              </div>
            </div>           
          </Link>           
          <div className="p-6 mt-5">             
            <p className="text-sm mb-4">{ele.description}</p>             
            <p className="text-sm mb-6">{ele.moreDes}</p>             
            <div>               
              <Link                 
                href={ele.href}                 
                className="py-2 px-6 bg-orange-500 text-white font-semibold rounded-full inline-block"               
              >                 
                Case Details               
              </Link>             
            </div>           
          </div>         
        </div>       
      ))}     
    </div>   
  </div> 
</div>


<style jsx>{`
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`}</style>
    </>
  );
};

export default Resources;
