"use client"
import {  useMotionValue, useTransform, animate } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

// Counter display component (Merged for both mobile and desktop)
const Counter = ({ motionValue, suffix, isMillion = false }) => {
    const displayValue = useTransform(motionValue, (latest) => Math.floor(latest));
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        const unsubscribe = displayValue.onChange(setCurrentValue);
        return () => unsubscribe();
    }, [displayValue]);

    return (
        // Using responsive text sizes and alignment from Tailwind
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-black flex items-center justify-center">
            <span>{currentValue}</span>
            {/* Styling the suffix differently */}
            <span className={`text-2xl sm:text-3xl md:text-4xl font-bold ${isMillion ? 'ml-1' : ''}`}>
                {suffix}
            </span>
        </div>
    );
};

const AchievementGalleryHome = () => {
    const sectionRef = useRef(null);

    const achievements = [
        { number: 108, suffix: "+", label: "Projects Delivered" },
        { number: 4, suffix: "million+", label: "Business Using Stripe", isMillion: true },
        { number: 10, suffix: "+", label: "Amazing Product" },
        { number: 120, suffix: "+", label: "Countries Worldwide" }
    ];

    // Create motion values for each counter
    const motionValues = achievements.map(() => useMotionValue(0));

    // Intersection Observer to detect when section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Start counting when in view
                    achievements.forEach((achievement, index) => {
                        animate(motionValues[index], achievement.number, {
                            duration: 2,
                            ease: "easeOut",
                        });
                    });
                } else {
                    // Reset counters when out of view
                    motionValues.forEach(mv => mv.set(0));
                }
            },
            {
                threshold: 0.5 // Trigger when 50% of the element is visible
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [motionValues]); // Dependency array includes motionValues

    const Divider = () => (
        <svg width="2" height="48" viewBox="0 0 2 48" fill="none" className="mx-4 sm:mx-8 hidden sm:block">
            <path d="M1 0V48" stroke="url(#paint0_linear_1_142)" />
            <defs>
                <linearGradient id="paint0_linear_1_142" x1="1.5" y1="0" x2="1.5" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#F97A02" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );

    return (
        <div ref={sectionRef} className="py-8 px-4">
            {/* Header */}
            <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    <span className="text-[#FF6400]">Our Achievement</span>
                    <span className="text-black"> Gallery</span>
                </h2>
            </div>

            {/* Main content area */}
            <div className="flex flex-wrap justify-center items-center gap-y-8 sm:gap-y-0">
                {achievements.map((achievement, index) => (
                    <React.Fragment key={index}>
                        <div className="w-1/2 sm:w-auto text-center flex flex-col items-center px-2 ">
                            <Counter
                                motionValue={motionValues[index]}
                                suffix={achievement.suffix}
                                isMillion={achievement.isMillion}
                            />
                            <p className="text-sm sm:text-base text-gray-800 mt-2 font-medium">
                                {achievement.label}
                            </p>
                        </div>

                        {/* Add divider after each item except the last one on desktop */}
                        {index < achievements.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default AchievementGalleryHome;