"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Custom hook to detect client-side only
const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
};

// Testimonial data - expanded list
const testimonials = [
  {
    name: "Emily Carter",
    username: "@emilycodes",
    body: "They built an amazing portfolio site for me! The layout is sleek, responsive, and matches my design taste perfectly. Highly recommend their work!",
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Daniel Johnson",
    username: "@danieldev",
    body: "Very professional team. Delivered exactly what I needed — a fast and SEO-optimized website for my small business. Great communication too!",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Olivia Martinez",
    username: "@livdesigns",
    body: "Super happy with my new e-commerce store! It looks modern, loads quickly, and the UI is so smooth. Excellent experience overall!",
    img: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Ethan Brown",
    username: "@ethanwebworks",
    body: "The team transformed my old static site into a dynamic, responsive platform. Everything works flawlessly across devices!",
    img: "https://i.pravatar.cc/150?img=54",
  },
  {
    name: "Sophia Williams",
    username: "@sophiacreates",
    body: "Loved working with them! They understood my ideas instantly and turned them into a beautiful, functional website. 10/10 service!",
    img: "https://i.pravatar.cc/150?img=45",
  },
  {
    name: "Liam Anderson",
    username: "@liamtech",
    body: "The process was super smooth. From design to deployment, they handled everything efficiently. I'm really impressed with the final result!",
    img: "https://i.pravatar.cc/150?img=60",
  },
  {
    name: "Ava Thompson",
    username: "@avathompson",
    body: "Outstanding work! My website now ranks higher on Google and the user experience is fantastic. Worth every penny!",
    img: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "Noah Davis",
    username: "@noahcreative",
    body: "The attention to detail is incredible. They captured my brand perfectly and delivered a site that my customers love!",
    img: "https://i.pravatar.cc/150?img=13",
  },
  {
    name: "Isabella Garcia",
    username: "@isabelladesigns",
    body: "From concept to launch, the entire process was seamless. My online store has seen a 3x increase in conversions!",
    img: "https://i.pravatar.cc/150?img=24",
  },
  {
    name: "Mason Rodriguez",
    username: "@masondev",
    body: "They didn't just build a website, they built a powerful tool for my business. The custom features work perfectly!",
    img: "https://i.pravatar.cc/150?img=70",
  },
];

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-[#F5F5F5] relative rounded-2xl p-6 mb-4 w-full">
    {/* Quote Icon */}
    <div className="mb-4">
      <svg width="32" height="32" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.1263 27.6626C28.1263 20.241 29.8105 14.1687 33.1789 9.44578C36.5474 4.61044 41.4877 1.46185 48 0V6.91567C44.5193 7.81527 41.7684 9.61446 39.7474 12.3133C37.7263 14.8996 36.6035 18.0482 36.3789 21.759H44.6316V42H28.1263V27.6626ZM0 27.6626C0 20.241 1.68421 14.1687 5.05263 9.44578C8.42105 4.61044 13.3053 1.46185 19.7053 0V6.91567C16.2246 7.81527 13.4737 9.55824 11.4526 12.1446C9.54386 14.7309 8.42105 17.9357 8.08421 21.759H16.3368V42H0V27.6626Z" fill="#FF6400"/>
      </svg>
    </div>

    {/* Testimonial Text */}
    <p className="text-gray-800 text-base leading-relaxed mb-6">
      {testimonial.body}
    </p>

    {/* Author Info */}
    <div className="flex items-center gap-3">
      <img
        src={testimonial.img}
        alt={testimonial.name}
        width={48}
        height={48}
        className="rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold text-gray-900 text-base">{testimonial.name}</h4>
        <p className="text-sm text-gray-600">{testimonial.username}</p>
      </div>
    </div>
  </div>
);

// Vertical Marquee Component
const VerticalMarquee = ({ 
  items, 
  duration = 40 
}) => {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];
  
  return (
    <div className="relative h-[450px] overflow-hidden">
      <motion.div
        className="flex flex-col"
        animate={{
          y: [0, -50 + "%"],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.username}-${index}`} testimonial={testimonial} />
        ))}
      </motion.div>
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </div>
  );
};

export function TestimonialSection() {
  const isClient = useIsClient();

  if (!isClient) {
    return <div className="h-[600px] bg-white"></div>;
  }

  return (
    <section id="review" className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE - Header Section */}
          <div className="flex-shrink-0 lg:w-2/5">
            <span className="text-[#FF6400] w-fit text-xs sm:text-sm font-bold py-1 px-3 rounded-full border border-[#FF6400] inline-block mb-4">
              • Testimonial
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Stories From Beloved Clients
            </h2>
            <p className="text-gray-600 font-semibold text-sm sm:text-base max-w-md">
              See how businesses just like yours are leveling up with a little help from our AI magic!
            </p>
          </div>

          {/* RIGHT SIDE - Single Vertical Marquee */}
          <div className="flex-grow lg:w-3/5">
            <VerticalMarquee items={testimonials} duration={35} />
          </div>

        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;