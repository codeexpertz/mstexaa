import React from 'react';

const TechnologiesSection = () => {
  const technologies = [
    {
      name: 'Shopify',
      logo: '/shopify.svg'
    },
    {
      name: 'PHP',
      logo: '/php.svg'
    },
    {
      name: 'Rails',
      logo: '/rails.svg'
    },
    {
      name: 'React',
      logo: '/reactjs.svg'
    },
    {
      name: 'Node.js',
      logo: '/nodejs.svg'
    },
    {
      name: 'OpenAI',
      logo: '/openai.svg'
    },
    {
      name: 'Python',
      logo: '/python.svg'
    },
    {
      name: 'MongoDB',
      logo: '/mongodb.svg'
    },
    {
      name: 'Expressjs',
      logo: '/expressjs.svg'
    },
    {
      name: 'Flutter',
      logo: '/flutter.svg'
    },
    {
      name: 'Next.js',
      logo: '/next.svg'
    },
  ];

  return (
    <div className="grid place-content-center my-8">
      <h1 className="text-center text-xl space-x-2 my-2">
        <span>Technologies</span>
        <span className="text-orange-500 font-extrabold max-md:font-bold text-3xl max-md:text-2xl">
          We Work With
        </span>
      </h1>
      <div className="container mx-auto space-y-20 max-md:space-y-10 mt-8 overflow-x-hidden">
        <div className="flex space-x-32 max-md:space-x-16">
          <div className="flex flex-shrink-0 space-x-32 max-md:space-x-16 animate-scroll-left">
            {technologies.slice(0, 6).map((tech, index) => (
              <img 
                key={index}
                src={tech.logo} 
                alt={tech.name}
                className="w-[8rem] h-[6rem]  max-md:w-[2.5rem] max-md:h-[2.5rem] flex-shrink-0 object-contain"
              />
            ))}
          </div>
          <div className="flex flex-shrink-0 space-x-32 max-md:space-x-16 animate-scroll-left">
            {technologies.slice(0, 6).map((tech, index) => (
              <img 
                key={`duplicate-${index}`}
                src={tech.logo} 
                alt={tech.name}
                className="w-[8rem] h-[6rem] max-md:w-[2.5rem] max-md:h-[2.5rem] flex-shrink-0 object-contain"
              />
            ))}
          </div>
        </div>
        <div className="flex space-x-32 max-md:space-x-16">
          <div className="flex flex-shrink-0 space-x-32 max-md:space-x-16 animate-scroll-right">
            {technologies.slice(6).map((tech, index) => (
              <img 
                key={index}
                src={tech.logo} 
                alt={tech.name}
                className="w-[8rem] h-[6rem]  max-md:w-[2.5rem] max-md:h-[2.5rem] flex-shrink-0 object-contain"
              />
            ))}
          </div>
          <div className="flex flex-shrink-0 space-x-32 max-md:space-x-16 animate-scroll-right">
            {technologies.slice(6).map((tech, index) => (
              <img 
                key={`duplicate-${index}`}
                src={tech.logo} 
                alt={tech.name}
                className="w-[8rem] h-[6rem]  max-md:w-[2.5rem] max-md:h-[2.5rem] flex-shrink-0 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TechnologiesSection;