import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { easeInOut, motion } from "motion/react";
import { animate } from "motion";
// import ReactStars from "react-rating-stars-component";
import "./clientReview.css";

const StarIcon = () => (
  <svg
    className="star h-5 w-5"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
      className="fill-orange-500"
    ></path>
  </svg>
);

function ClientReview() {
  const stars = Array(5).fill(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobile1, setIsMobile1] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 1000 : false
  );
  const [inView, setInView] = useState(false);
  const intervalRef = useRef(null);
  const totalCards = 2;

  // Handle window resize and mobile detection
  useEffect(() => {
    // Set initial mobile state
    const checkMobile = () => window.innerWidth <= 1000;
    setIsMobile(checkMobile());

    const handleResize = () => {
      const mobile = checkMobile();
      setIsMobile(mobile);
      
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      if (!mobile && !isHovered) {
        intervalRef.current = setInterval(() => changeCard("next"), 4000);
      }
    };
    if (isHovered) {
      // Clear interval when hover starts
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else if (!isMobile) {
      // Only restart if not mobile and not hovered
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => changeCard("next"), 4000);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [isHovered]);

  const changeCard = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % totalCards;
      }
      if (direction === "prev") {
        return (prevIndex - 1 + totalCards) % totalCards;
      }
      return prevIndex;
    });
  };
  const handleNavigation = (direction = "next") => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    changeCard(direction);

    // Only restart interval if not mobile
    if (!isMobile && !isHovered) {
      intervalRef.current = setInterval(() => changeCard("next"), 4000);
    }
  };
  return (
    <>
      <div id="review" className="clientParent w-[100vw]  bg-[#FFF] px-2 inline-block">
        <p className="poppins-medium text-center font-[600] text-4xl mt-[1.7%] text-[#2b2a35] leading-[128%] topText">
          What Client <span className="text-orange-500 font-overlock">Says About Us</span>
        </p>
        <div className="clientBody h-[650px] relative flex ">
          <div className="rightBtn h-[100%] absolute top-0 left-0 w-[5%]   flex  items-center justify-center z-[5]">
            <button
              className="h-12 w-12 flex justify-center items-center rounded-full bg-black text-white hover:opacity-40"
              id="leftBtn"
              onClick={() => {
                handleNavigation("prev");
              }}
            >
              <img
                src="/leftArrow.svg"
                alt=""
                className="h-6 w-6 filter invert"
              />
            </button>
          </div>
          <div className="body relative h-100% w-[100%] ">
            <div className="flex justify-center h-[100%] w-[100%] flexToGrid overflow-hidden">
              <div
                className={` absolute z-[2] ${
                  currentIndex === 1 ? "z-[2]" : "z-[1]"
                } h-[100%] absoluteToRelative`}
                style={{ display: currentIndex === 0 ? "block" : "none" }}
              >
                <motion.div
                  className={`flip1 flex mt-[7%] justify-center `}
                  viewport={{ margin: "100px" }}
                  initial={
                    isMobile1 ? { x: -100, opacity: 0 } : { x: 0, opacity: 1 }
                  }
                  whileInView={isMobile1 ? "flex" : {}}
                  onViewportEnter={() => {
                    if (isMobile1) {
                      setInView((prev) => {
                        return true;
                      });
                    }
                  }}
                  animate={
                    inView
                      ? {
                          x: 0,
                          opacity: 1,
                          transition: { duration: 1.5, ease: "easeInOut" },
                        }
                      : {}
                  }
                >
                  <div
                    className="clientCards group hover w-[408px] h-[394px] border-[1.73px] border-[#FF9700] bg-white rounded-[28px] ml-5 mr-5 mt-[5%] group hover:translate-y-[-10px] transition-all duration-600"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="flex flex-col items-center h-[100%] w-[100%] justify-center gap-4 flextoGapZ">
                      <div
                        id="head"
                        className="w-[100%] flex justify-center items-center"
                      >
                        <img
                          src="/cli1.jpeg"
                          alt=""
                          className="h-[147px] clientImgs w-[147px] object-cover rounded-[50%] group-hover:scale-110 transition-all duration-300 clientImg"
                        />
                      </div>
                      <div className="body flex flex-col gap-[2.5%]">
                        <div className="h-[30px] poppins-medium  font-[20px] leading-[150%] text-center">
                          Basel Ismail
                        </div>
                        <div className="mt-[2.5%] flex justify-center items-center">
                          {stars.map((_, index) => (
                            <StarIcon key={index} />
                          ))}
                        </div>
                        <div className="poppins-medium font-[400] text-[0.9rem] text-[#646464] flex text-center w-[100%] h-[100px] mt-[2.5%] px-3 clientDes">
                          Working with this fantastic team was an excellent
                          experience. They excel at development and finding new
                          solutions. Their expertise and talent are impressive.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="clientCards group hover:translate-y-[-10px] w-[408px] h-[394px] border-[1.73px] border-[#FF9700] rounded-[28px] overflow-hidden relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className=" bg-[#FF9700] w-[408px] h-[394px] absolute z-[-1] opacity-[0.17] middleBackg"></div>
                    <div className="flex flex-col items-center h-[100%] w-[100%] justify-center gap-4 flextoGapZ">
                      <div
                        id="head"
                        className="w-[100%] flex justify-center items-center"
                      >
                        <img
                          src="/cli2.png"
                          alt=""
                          className="h-[147px] clientImgs w-[147px] object-cover rounded-[50%] group-hover:scale-110 transition-all duration-300 clientImg "
                        />
                      </div>
                      <div className="body flex flex-col gap-[2.5%]">
                        <div className="h-[30px] poppins-medium font-[600]  leading-[150%] text-center">
                          Sophia Martinez
                        </div>
                        <div className="mt-[2.5%] flex justify-center items-center">
                          {stars.map((_, index) => (
                            <StarIcon key={index} />
                          ))}
                        </div>
                        <div className="poppins-medium font-[400] text-[0.9rem] text-[#646464] flex text-center w-[100%] h-[100px] mt-[2.5%] px-3 clientDes">
                          Mstexa demonstrates exceptional technical
                          proficiency and a deep understanding of industry best
                          practices, making them a valuable partner in software
                          development.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="clientCards group hover:translate-y-[-10px] w-[408px] h-[394px] border-[1.73px] border-[#FF9700] bg-white rounded-[28px] ml-5 mr-5 mt-[5%] "
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="flex flex-col items-center h-[100%] w-[100%] justify-center gap-4 flextoGapZ">
                      <div
                        id="head"
                        className="w-[100%] flex justify-center items-center"
                      >
                        <img
                          src="/cli4.png"
                          alt=""
                          className="h-[147px] clientImgs w-[147px] object-cover rounded-[50%] group-hover:scale-110 transition-all duration-300 clientImg"
                        />
                      </div>
                      <div className="body flex flex-col gap-[2.5%]">
                        <div className="h-[30px] poppins-medium font-[600] font-[20px] leading-[150%] text-center">
                          Michael Chen
                        </div>
                        <div className="mt-[2.5%] flex justify-center items-center starSection">
                          {
                            stars.map((_,index)=>(
                              <StarIcon key={index}/>
                            ))
                          }
                        </div>
                        <div className="poppins-medium font-[400] text-[0.9rem] text-[#646464] flex text-center w-[100%] h-[100px] mt-[2.5%] px-3 clientDes">
                          The collaborative approach taken by Mstexa
                          fosters innovation and ensures that project goals are
                          met efficiently and effectively.
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div
                className={`absolute z-[1] h-[100%] ${
                  currentIndex === 1 ? "z-[2]" : "z-[1]"
                }  absoluteToRelative1 overflow-hidden`}
                style={{ display: currentIndex === 1 ? "block" : "none" }}
              >
                <motion.div
                  className={`flip2 flex mt-[7%] justify-center  `}
                  viewport={{ margin: "100px" }}
                  initial={
                    isMobile1 ? { x: 100, opacity: 0 } : { x: 0, opacity: 1 }
                  }
                  whileInView={isMobile1 ? "flex" : {}}
                  animate={
                    inView
                      ? {
                          x: 0,
                          opacity: 1,
                          transition: { duration: 1.5, ease: "easeInOut" },
                        }
                      : {}
                  }
                >
                  <div
                    className="clientCards group hover:translate-y-[-10px] w-[408px] h-[394px] border-[1.73px] border-[#FF9700] bg-white rounded-[28px] ml-5 mr-5 mt-[5%] "
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="flex flex-col items-center h-[100%] w-[100%] justify-center gap-4">
                      <div
                        id="head"
                        className="w-[100%] flex justify-center items-center"
                      >
                        <img
                          src="/cli3.png"
                          alt=""
                          className="h-[147px] group-hover:scale-110 transition-all duration-300 w-[147px] object-cover rounded-[50%] clientImgs clientImg"
                        />
                      </div>
                      <div className="body flex flex-col gap-[2.5%]">
                        <div className="h-[30px] poppins-medium font-[600] font-[20px] leading-[150%] text-center">
                          Isabella Chen
                        </div>
                        <div className="mt-[2.5%] flex justify-center items-center">
                          {
                            stars.map((_,index)=>(
                              <StarIcon key={index}/>
                            ))
                          }
                        </div>
                        <div className="poppins-medium font-[400] text-[0.9rem] text-[#646464] flex text-center w-[100%] h-[100px] mt-[2.5%] px-3 clientDes">
                          Mstexa ability to adapt to changing project
                          requirements while maintaining high standards of
                          quality is commendable.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="clientCards group hover:translate-y-[-10px] w-[408px] h-[394px] border-[1.73px] border-[#FF9700] rounded-[28px] overflow-hidden relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className=" bg-[#FF9700] w-[408px] h-[394px] absolute z-[-1] opacity-[0.17] middleBackg"></div>
                    <div className="flex flex-col items-center h-[100%] w-[100%] justify-center gap-4">
                      <div
                        id="head"
                        className="w-[100%] flex justify-center items-center"
                      >
                        <img
                          src="/cli5.png"
                          alt=""
                          className="h-[147px] clientImgs w-[147px] object-cover rounded-[50%] group-hover:scale-110 transition-all duration-300 clientImg "
                        />
                      </div>
                      <div className="body flex flex-col gap-[2.5%]">
                        <div className="h-[30px] poppins-medium font-[600] font-[20px] leading-[150%] text-center">
                          David Rodriguez
                        </div>
                        <div className="mt-[2.5%] flex justify-center items-center">{
                            stars.map((_,index)=>(
                              <StarIcon key={index}/>
                            ))
                          }</div>
                        <div className="poppins-medium font-[400] text-[0.9rem] text-[#646464] flex text-center w-[100%] h-[100px] mt-[2.5%] px-3 clientDes">
                          Mstexa ability to adapt to changing project
                          requirements while maintaining high standards of
                          quality is commendable.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="clientCards group hover:translate-y-[-10px] w-[408px] h-[394px] border-[1.73px] border-[#FF9700] bg-white rounded-[28px] ml-5 mr-5 mt-[5%] "
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="flex flex-col items-center h-[100%] w-[100%] justify-center gap-4">
                      <div
                        id="head"
                        className="w-[100%] flex justify-center items-center"
                      >
                        <img
                          src="/cli6.png"
                          alt=""
                          className="h-[147px] group-hover:scale-110 transition-all duration-300 w-[147px] object-cover rounded-[50%] clientImgs clientImg"
                        />
                      </div>
                      <div className="body flex flex-col gap-[2.5%]">
                        <div className="h-[30px] poppins-medium font-[600] font-[20px] leading-[150%] text-center">
                          Emma Lee
                        </div>
                        <div className="mt-[2.5%] flex justify-center items-center">
                          {
                            stars.map((_,index)=>(
                              <StarIcon key={index}/>
                            ))
                          }
                        </div>
                        <div className="poppins-medium font-[400] text-[0.9rem] text-[#646464] flex text-center w-[100%] h-[100px] mt-[2.5%] px-3 clientDes">
                          Working with Mstexa has not only enhanced our
                          project outcomes but has also provided us with
                          valuable insights into optimizing our development
                          processes.
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="h-[100%] absolute top-0 right-0 w-[5%]   flex  items-center justify-center">
            <button
              className="h-12 w-12 rounded-full flex justify-center items-center hover:opacity-40 bg-black text-white hover:cursor-pointer"
              id="rightBtn"
              onClick={() => {
                handleNavigation("next");
              }}
            >
              <img
                src="/rightArrow.svg"
                alt=""
                className="h-6 w-6 filter invert"
              />
            </button>
          </div>
          <div className="w-[100%] logButtons flex justify-center gap-5 absolute bottom-0 h-[10%]">
            {[0, 1].map((index) => (
              <div
                key={index}
                className={`dot h-[18px] w-[18px] cursor-pointer rounded-[50%] relative ${
                  currentIndex === index ? "bg-[#FF9700]" : "bg-[#ccc]"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientReview;
