import { useState } from 'react';
import { motion } from 'framer-motion';

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: '01',
      title: 'Simple Creative Design',
      description: 'There are many ways to approach simple creative design, but here are a few tips to get...'
    },
    {
      id: '02', 
      title: 'Understanding Client\'s Needs',
      description: 'There are many ways to approach simple creative design, but here are a few tips to get...'
    },
    {
      id: '03',
      title: 'Creating A Project Plan', 
      description: 'There are many ways to approach simple creative design, but here are a few tips to get...'
    },
    {
      id: '04',
      title: 'Launching The Project',
      description: 'There are many ways to approach simple creative design, but here are a few tips to get...'
    }
  ];

  const handleCardClick = (stepId) => {
    setActiveStep(stepId);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-40 right-20 w-10 h-10 bg-[#FF6400] rounded-full"></div>
      <div className="absolute -right-10 w-28 h-28 bg-gray-400 rounded-full opacity-30"></div>

      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 py-20 max-w-7xl">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex md:flex-row flex-col items-center justify-between gap-8">
            <div className="flex-1">
              <div className="text-white text-[20px] font-semibold mb-6 tracking-wider uppercase flex items-center">
                <div className="w-8 h-px bg-[#FF6400] mr-3"></div>
                Workflow
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                A Simple Yet Effective Three<br />
                <span className="text-white">Step Process.</span>
              </h1>
            </div>
            <div className="flex-shrink-0 ml-8 max-w-md">
              <p className="text-[#FFFFFF80] text-base leading-relaxed font-semibold">
                From refining your brand identity and running campaigns to powering your digital presence, we do it all.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          <img src='/workflow/line.svg' alt="" className='hidden md:block w-[70%] absolute -top-8 left-44' />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mt-12">
            {steps.map((step, index) => {
              const isActive = activeStep === step.id;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`group cursor-pointer relative rounded-xl  transition-all duration-300  `}
                  onClick={() => handleCardClick(step.id)}
                  onMouseEnter={() => handleCardClick(step.id)}
                >
                  {/* Orange dot indicator for active step */}
                  {isActive && (
                    <div className="absolute -top-4 -right-10 transform -translate-x-1/2 w-12 h-12 bg-[#FF6400] rounded-full border-2 border-gray-900"></div>
                  )}

                  <div className={`
                    relative w-full h-[280px] rounded-xl border-2 transition-all duration-300 overflow-hidden
                    ${isActive ? 'border-gray-600' : 'border-gray-700'}
                  `}>
                    {/* Top section - lighter background for title */}
                    <div className="bg-[#2a2a2a]/70 backdrop-blur-sm px-6 h-1/2 flex justify-center items-center py-6 ">
                      <h3 className="text-lg md:w-[150px] text-center font-semibold text-white leading-tight mb-2">
                        {step.title}
                      </h3>
                    </div>
                    
                    {/* Bottom section - darker background for content */}
                    <div className=" px-6 py-6 flex-1 flex flex-col items-center justify-center">
                      <div className="absolute top-[40%] flex justify-center mb-4">
                        <div className={`
                          w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300
                          ${isActive 
                            ? 'bg-[#FF6400] text-white' 
                            : 'bg-white text-black'
                          }
                        `}>
                          {step.id}
                        </div>
                      </div>

                      <p className="text-[#FFFFFF80] text-sm leading-relaxed text-center">
                        {step.description}
                      </p>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;