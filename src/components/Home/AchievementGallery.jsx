"use client"
import { useMotionValue, useTransform, animate, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Counter = ({ motionValue, suffix }) => {
    const displayValue = useTransform(motionValue, (latest) => Math.floor(latest));
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        const unsubscribe = displayValue.onChange(setCurrentValue);
        return () => unsubscribe();
    }, [displayValue]);

    return (
        <div className="text-5xl md:text-6xl font-bold text-white flex items-baseline">
            <span>{currentValue}</span>
            <span className="text-orange-500">{suffix}</span>
        </div>
    );
};

const AchievementGallery = () => {
    const sectionRef = useRef(null);
    const [flippedCard, setFlippedCard] = useState(null);

    const achievements = [
        { 
            number: 108, 
            suffix: "+", 
            label: "Project Completed",
            description: "We have successfully designed and delivered over 108 projects."
        },
        { 
            number: 80, 
            suffix: "+", 
            label: "Business Growth",
            description: "Our solutions help clients achieve an average of 80% business growth."
        },
        { 
            number: 500, 
            suffix: "+", 
            label: "Happy Clients",
            description: "More than 500 business owners trust us to build their digital assets."
        },
        { 
            number: 8, 
            suffix: "+", 
            label: "Awards",
            description: "Recognized by industry experts for innovation and design excellence."
        }
    ];

    const motionValues = achievements.map(() => useMotionValue(0));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    achievements.forEach((achievement, index) => {
                        animate(motionValues[index], achievement.number, {
                            duration: 2,
                            ease: "easeOut",
                        });
                    });
                } else {
                    motionValues.forEach(mv => mv.set(0));
                }
            },
            {
                threshold: 0.5
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
    }, [motionValues]);

    return (
        <div className="min-h-screen bg-[#000000] py-16 px-4 sm:px-6 lg:px-8 relative z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[631px] h-[639px] z-0">
  <Image
    src="/achievementgallery/shape1.svg"
    fill
    className="object-cover object-center w-full h-full"
    style={{ zIndex: -1 }}
    alt="shape"
  />
</div>

            <div ref={sectionRef} className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="relative text-center mb-16 z-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                        We Solve Problems<br />
                        by Finding them first
                    </h1>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((achievement, index) => (
                        <div 
                            key={index}
                            className="relative h-80 perspective-1000"
                            onMouseEnter={() => setFlippedCard(index)}
                            onMouseLeave={() => setFlippedCard(null)}
                            style={{ perspective: '1000px' }}
                        >
                            <motion.div
                                className="relative w-full h-full"
                                style={{ transformStyle: 'preserve-3d' }}
                                animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                            >
                                {/* Front Side - Dark */}
                                <div 
                                    className="absolute w-full h-full bg-[#110E15] rounded-2xl p-8"
                                    style={{ backfaceVisibility: 'hidden' }}
                                >
                                    {/* Label */}
                                    <div className="flex items-start mb-12">
                                        <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></span>
                                        <h3 className="text-white text-base font-medium">
                                          {achievement.label}
                                        </h3>
                                    </div>

                                    {/* Counter */}
                                    <div className="mb-6">
                                        <Counter
                                            motionValue={motionValues[index]}
                                            suffix={achievement.suffix}
                                        />
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {achievement.description}
                                    </p>
                                </div>

                                {/* Back Side - Orange with SVG */}
                                <div 
                                    className="absolute w-full h-full bg-[#FF6400] rounded-2xl p-8 overflow-hidden"
                                    style={{ 
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)'
                                    }}
                                >
                                    {/* SVG Pattern */}
                                    <div className="absolute top-0 -right-4 opacity-20">
                                        <svg width="100" height="150" viewBox="0 0 63 213" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100.5 162.745C100.5 190.225 78.1059 212.5 50.4932 212.5C22.8805 212.5 0.506869 190.226 0.506829 162.745C0.506829 157.209 1.41621 151.896 3.09472 146.944L3.44042 145.959C3.52959 145.721 3.53819 145.645 3.60937 145.503L3.62109 145.479L3.63085 145.453L4.06152 144.335C8.60151 132.962 17.2396 123.659 28.167 118.22L41.9307 133.039C33.356 134.925 27.4322 140.495 23.1982 147.699L23.1982 147.7C12.1493 166.564 24.5208 189.204 45.29 192.801C62.0752 195.715 78.8364 183.398 81.1982 166.229L81.1992 166.229C82.4991 156.588 79.5898 148.077 73.1162 141.159C66.5835 134.189 59.2513 127.91 52.3965 121.298C50.9034 119.854 49.4049 118.416 47.9014 116.98L43.376 112.68C33.5026 103.255 23.597 93.8613 14.1182 84.0654C2.93898 72.503 -1.405 58.2906 1.26172 42.4717L1.39453 41.7178C5.15254 21.1646 18.0077 8.2094 37.6914 2.46386L37.6924 2.46386C49.8045 -1.08586 62.2665 0.153331 73.5107 6.36914C88.4456 14.6237 98.0737 26.8679 100.099 44.1484L100.1 44.1475C101.748 58.3227 98.242 71.0651 88.9561 82.0312L88.9551 82.0322C86.8383 84.5444 84.5202 86.891 81.8936 89.7148C77.2922 85.4599 72.8349 81.381 68.1396 77.0322C69.3873 75.6159 70.4724 74.2905 71.6992 73.0498L71.6992 73.0488C80.1351 64.6918 83.6852 54.7652 80.7959 43.1572L80.6533 42.6035C77.013 28.8213 64.0383 19.1764 50.2412 19.6514L50.2402 19.6514C34.933 20.1896 22.3102 30.3991 19.6416 44.8906L19.6406 44.8916C18.1962 52.8108 19.0452 60.758 24.7285 67.0898L24.7295 67.0889C31.9213 75.1187 39.4118 82.9593 47.1816 90.46C58.3371 101.225 69.8366 111.652 81.2168 122.174L81.2178 122.173C86.261 126.856 90.6152 132.079 93.9102 138.05L93.9228 138.07C93.9267 138.078 93.9313 138.087 93.9365 138.097L93.9453 138.112L93.9482 138.114C93.9585 138.132 93.968 138.152 93.9824 138.171C93.9846 138.174 93.9879 138.176 93.9902 138.179C94.5448 139.144 95.0613 140.152 95.5605 141.166C95.6763 141.407 95.7866 141.643 95.8945 141.879L96.2139 142.593L96.2197 142.604C96.3656 142.916 96.5108 143.247 96.6348 143.556L96.6367 143.56C97.2296 144.993 97.7569 146.401 98.1992 147.806L98.2021 147.816L98.206 147.827C98.2446 147.933 98.2791 148.039 98.3115 148.148L98.4072 148.488L98.4111 148.502C98.833 149.888 99.1919 151.295 99.4873 152.723C99.6346 153.435 99.7605 154.17 99.8887 154.914L99.8935 154.94L99.9014 154.967C99.9316 155.072 99.9453 155.174 99.9453 155.274L99.9453 155.314L99.9521 155.354C100.057 156.003 100.141 156.63 100.204 157.275L100.205 157.287L100.207 157.298C100.247 157.574 100.267 157.854 100.288 158.173L100.289 158.186C100.332 158.652 100.373 159.13 100.394 159.604L100.395 159.616C100.405 159.765 100.41 159.916 100.415 160.079C100.42 160.239 100.426 160.41 100.437 160.588L100.437 160.589C100.479 161.3 100.5 162.012 100.5 162.745Z" stroke="white" strokeOpacity="1"/>
                                        </svg>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 h-full flex flex-col">
                                        {/* Label */}
                                        <div className="flex items-start mb-12">
                                            <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></span>
                                            <h3 className="text-white text-base font-medium">
                                                {achievement.label}
                                            </h3>
                                        </div>

                                        {/* Counter */}
                                        <div className="mb-6">
                                            <Counter
                                                motionValue={motionValues[index]}
                                                suffix={achievement.suffix}
                                            />
                                        </div>

                                        {/* Description */}
                                        <p className="text-white text-sm leading-relaxed opacity-90">
                                            {achievement.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
         <div className='absolute bottom-0 left-0  z-0 w-[100px] h-[100px] '>
<Image
                src="/achievementgallery/shape2.svg"
                fill
                className="object-cover object-center"
                style={{ zIndex: -1 }}
            />
</div>
                </div>
    );
};

export default AchievementGallery;