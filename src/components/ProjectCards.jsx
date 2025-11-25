"use client";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function ProjectCards() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const amount = 300; // kitna scroll karna hai (pixels)
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const data = [
    {
      id: 1,
        projectName: "Pind Eats",
      description:
        "Pindeats is a multi-vendor marketplace built with Next.js, Node.js, Express, MongoDB, and Stripe. It allows users to order food, send gifts, and explore property listings while vendors manage their online presence.",
      moreDes:
        "We built a scalable marketplace where vendors can showcase products and customers can securely order and pay via Stripe.",
      src: "/projects/pindeats.png",
      href: "/work/food",
      query: "pindeats",
      
    },
    {
      id: 2,
       projectName: "Block Circle",
      description:
        "Block Circle is a decentralized finance (DeFi) platform built with Solidity, Next js, Node.js, and Web3.js. It enables users to stake tokens, earn rewards, and participate in governance, while developers can launch smart contracts and manage assets securely.",
      moreDes:
        "We built a trustless ecosystem that empowers users to interact directly with the blockchain, stake assets, and earn yield—ensuring transparency, security, and full control over funds.",
      src: "/projects/blockcircle.png",
      href: "/work/blockcircle",
      query: "/work",
     
    },
    {
      id: 3,
       projectName:"Gnizzel",
      description:
        "Gnizeel is a multi-language dental app by Mstexa covering services, appointments, and resources. Easy to navigate and connect with dental professionals anytime. ",
      moreDes:
        "We ensured to bring scalability to the marketplace making it easy for them to handle all scales of transactions.",
      src: "/frameGig.png",
      href: "/work/gnizeel",
      query: "gnizzel",
     
    },
    {
      id: 4,
      projectName: "Optimal Planner",
      description:
        "Optimal Planner is a fitness app by Mstexa using Flutter, React/Next.js, Node.js, and MongoDB. It tracks workouts, manages subscriptions, and delivers AI-powered diet plans.",
      moreDes:
        "We ensured to bring scalability to the marketplace making it easy for them to handle all scales of transactions.",
      src: "/optimalPlanner.png",
      href: "/work/optimalplanner",
      query: "optimalPlanner",
    },
    {
      id: 5,
      projectName: "Uni Hub",
      description:
        "Mstexa built UniHub, a versatile campus platform covering events, services, and a buy/sell marketplace. Designed for seamless scalability, it easily handles transactions of any size.",
      moreDes:
        "We ensured to bring scalability to the marketplace making it easy for them to handle all scales of transactions.",
      src: "/workImg.jpeg",
      href: "/work/unihub",
      query: "uniHub",
    
    },
    {
      id: 6,
       projectName: "TMCO",
      description:
        "TMCO is a full-featured real estate app by Mstexa, built with Flutter, Node.js, Firebase, MongoDB, and React. It offers User, Staff, Guest, and Maintenance modes.",
      moreDes:
        "We ensured to bring scalability to the marketplace making it easy for them to handle all scales of transactions.",
      src: "/TMCO.png",
      href: "/work/tmco",
      query: "TMCO",
     
    },
    {
      id: 7,
      projectName: "Golden Goose ",
      description:
        "Golden Goose is a flight booking website built with Next.js, Node.js, Tailwind CSS, Redux, Framer Motion, and MongoDB. It offers users a seamless experience to search, compare, and book flights effortlessly.",
      moreDes:
        "We developed a fast and intuitive platform where users can find the best flight deals, manage bookings, and enjoy smooth animations—all powered by a robust backend and real-time state management.",
      href: "/work/golden-goose",
      src: "/projects/goldengoose.png",
      query: "goldengoose",
    },
  ];

  return (
    <div className="relative min-h-[534px] px-5 lg:px-12 pb-10 font-poppins">
   

{/* Right Arrow Button */}
<button
  onClick={() => scroll("right")}
  className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow-md p-3 hover:bg-orange-500 hover:text-white transition z-10"
  aria-label="Scroll Right"
>
  <FiChevronRight size={24} />
</button>

      {/* Scrollable Container */}
      <div className="overflow-x-auto scrollbar-hide rounded-lg pb-1" ref={scrollRef}>
        <div className="flex gap-6 w-max lg:justify-center justify-start">
          {data.map((ele) => (
            <div
              key={ele.id}
              className="bg-white rounded-lg shadow-inner overflow-hidden hover:shadow-xl transition-all duration-300 w-80 flex-shrink-0 cards group hover:translate-y-[-10px]"
            >
              <Link
                href={{
                  pathname: ele.href,
                  query: { project: ele.query },
                }}
              >
                <div className="w-full relative p-4">
                  <img
                    src={ele.src}
                    alt="workImg"
                    className="w-full rounded-md h-48 object-cover group-hover:scale-110 transition-transform duration-200"
                  />
                  <div className="absolute top-40 left-4 overflow-hidden h-[60px] w-auto flex flex-col bg-orange-500 shadow-lg rounded-md group/button hover:bg-[#FFFF]">
                    <h1 className="text-2xl font-semibold text-white px-6 py-3 group-hover/button:translate-y-[-56px] transition-all duration-600 relative">
                      {ele.projectName}
                    </h1>
                    <motion.h1
                      className="text-2xl font-semibold text-black px-6 py-3 hidden relative group-hover/button:block"
                      whileInView={{ y: -55 }}
                    >
                      {ele.projectName}
                    </motion.h1>
                  </div>
                </div>
              </Link>
              <div className="p-6 mt-5">
                <p className="text-sm mb-4">{ele.description}</p>
                <p className="text-sm mb-6">{ele.moreDes}</p>
                <div>
                  <Link
                    href={ele.href}
                    className="py-2 px-6 bg-orange-500 text-white font-semibold rounded-full inline-block group-hover:bg-white group-hover:text-orange-500 border-orange-500 border-2"
                  >
                    Case Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
    </div>
  );
}

export default ProjectCards;
