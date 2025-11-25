"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

// Custom hook to detect client-side only
const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
};

// Testimonial data
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
  }
];

export function TestimonialSection() {
  const isClient = useIsClient();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-cycle testimonials
  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isClient]);

  if (!isClient) {
    return <div className="h-[400px] bg-white"></div>;
  }

  return (
    <section id="review" className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
          {/* Left Column - Headline */}
          <div className="flex flex-col justify-center">
            <span className="text-[#FF6400] w-fit text-xs sm:text-sm font-bold py-1 px-2 sm:px-3 rounded-full border border-[#FF6400] inline-block mb-4">
              • Testimonial
            </span>
            <h2 className="text-2xl max-w-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Stories From Beloved Clients
            </h2>
            <p className="text-gray-600  max-w-md font-semibold text-sm sm:text-base">
              See how businesses just like yours are leveling up with a little help from our AI magic!
            </p>
          </div>

          {/* Right Column - Auto-rotating Testimonial Card */}
          <div className="max-w-lg">
            <motion.div
              key={currentIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="bg-[#0000001A] relative h-[248px] rounded-xl p-6 flex flex-col justify-between"
              style={{ minHeight: "120px" }}
            >
               <div className="flex items-center gap-3 pt-2">
                    <img
                      src={testimonials[currentIndex].img}
                      alt={testimonials[currentIndex].name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{testimonials[currentIndex].name}</h4>
                      <p className="text-xs text-gray-500">{testimonials[currentIndex].username}</p>
                    </div>
                  </div>
              <div className="flex items-start gap-4">
                <div className="hidden md:block absolute top-[45%]"><svg width="32" height="32" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1263 27.6626C28.1263 20.241 29.8105 14.1687 33.1789 9.44578C36.5474 4.61044 41.4877 1.46185 48 0V6.91567C44.5193 7.81527 41.7684 9.61446 39.7474 12.3133C37.7263 14.8996 36.6035 18.0482 36.3789 21.759H44.6316V42H28.1263V27.6626ZM0 27.6626C0 20.241 1.68421 14.1687 5.05263 9.44578C8.42105 4.61044 13.3053 1.46185 19.7053 0V6.91567C16.2246 7.81527 13.4737 9.55824 11.4526 12.1446C9.54386 14.7309 8.42105 17.9357 8.08421 21.759H16.3368V42H0V27.6626Z" fill="#FF6400"/>
</svg>
</div>
                <div className="flex-grow">
                  <p className="text-[#00000099] font-semibold text-sm leading-relaxed mb-4">
                    {testimonials[currentIndex].body}
                  </p>
                 
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;