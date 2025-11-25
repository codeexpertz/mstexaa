// components/WhyUs.tsx
import Image from "next/image";
import { motion } from "framer-motion";
function numberChanger(targetNumber, elementId,speedNum) {
  const dataElement = document.getElementById(elementId);
  let currentNumber = 0;

  function incrementNumber() {
    if (currentNumber <= targetNumber) {
      dataElement.textContent = currentNumber;
      currentNumber++;
      setTimeout(incrementNumber, speedNum);
    }
  }

  incrementNumber();
}
const data = [
  { icon: "/whyus/pen.svg", value: "412+", label: "Projects Completed" },
  { icon: "/whyus/review.svg", value: "682+", label: "Positive Reviews" },
  { icon: "/whyus/team.svg", value: "95+", label: "Team Members" },
  { icon: "/whyus/funding.svg", value: "3.5M$", label: "Funding Raised" },
  { icon: "/whyus/list.svg", value: "99%", label: "Customer Satisfaction" },
];
export default function WhyUs() {
  return (
    <>
      <div id="codeexpert" className="min-h-screen w-full flex justify-center flex-col items-center gap-6 bg-gray-100 whySection">
        <h1 className=" text-center py-6 text-3xl md:text-5xl font-semibold">
          Why <span className=" text-orange-500 font-overlock">Mstexa</span>
        </h1>
        <div className=" flex flex-col justify-center items-center">
          <div className=" bg-white rounded-full size-44 flex items-center justify-center flex-col">
            <p className=" font-bold">Since</p>
            <p className=" text-orange-500 text-3xl font-bold">2024</p>
          </div>
          <img
            className=" relative bottom-[5.5rem]"
            src="/whyus/circularbar.svg"
            alt="circularbar"
          />
        </div>
        <div className=" relative w-full flex justify-center bottom-36 items-center gap-6">
          <div className=" mb-4 relative bottom-[6rem] left-[9rem]">
            <img
              src={data[0].icon}
              alt={data[0].label}
              className=" w-40 md:w-56 "
            />
            <div className=" relative bottom-24">
              <div className=" h-20 w-8 border-t-2 border-l-2 border-black" />
              <div className="relative right-6">
                <span className=" text-2xl font-bold text-orange-500">
                  <motion.span id="pN" whileInView={() => numberChanger(200,"pN",13)}>
                    0
                  </motion.span>
                  +
                </span>
                <br />
                <span>
                  Projects <br /> completed
                </span>
              </div>
            </div>
          </div>
          <div className=" mb-4 relative top-14">
            <img
              src={data[1].icon}
              alt={data[1].label}
              className=" w-40 md:w-56 "
            />
            <div className=" relative bottom-24">
              <div className=" h-20 w-8 border-t-2 border-l-2 border-black" />
              <div className="relative right-6">
                <span className=" text-2xl font-bold text-orange-500">
                  <motion.span id="pR" whileInView={()=>numberChanger(190,"pR",13)}>0</motion.span>+
                </span>
                <br />
                <span>
                  Positive <br />
                  Reviews
                </span>
              </div>
            </div>
          </div>
          <div className=" mb-4 relative top-[6.5rem] flex flex-col">
            <img
              src={data[2].icon}
              alt={data[2].label}
              className=" w-40 md:w-56 "
            />
            <div className=" relative bottom-6 left-[6.5rem]">
              <div className=" h-12 w-8 border-l-2 border-black" />
              <div className="relative right-6">
                <span className=" text-2xl font-bold text-orange-500">
                  <motion.span id="tM" whileInView={()=>numberChanger(15,"tM",100)}>0</motion.span>+
                </span>
                <br />
                <span>
                  Team <br />
                  Members
                </span>
              </div>
            </div>
          </div>
          <div className=" mb-4 relative top-[3.5rem] flex flex-col">
            <img
              src={data[3].icon}
              alt={data[3].label}
              className=" w-40 md:w-56 "
            />
            <div className=" relative bottom-6 left-[6.5rem]">
              <div className=" h-12 w-8 border-l-2 border-black" />
              <div className="relative right-6">
                <span className=" text-2xl font-bold text-orange-500">
                  <motion.span id="fR" whileInView={()=>numberChanger(1,"fR",1000)}>0</motion.span>.1M$
                </span>
                <br />
                <span>
                  Funding <br />
                  Raised
                </span>
              </div>
            </div>
          </div>
          <div className=" mb-4 relative bottom-24 right-[8.5rem]">
            <img
              src={data[4].icon}
              alt={data[4].label}
              className=" w-40 md:w-56 "
            />
            <div className=" relative left-[12rem] bottom-24">
              <div className=" h-20 w-8 border-t-2 border-r-2 border-black" />
              <div className="relative left-6">
                <span className=" text-2xl font-bold text-orange-500"><motion.span id="cS" whileInView={()=>numberChanger(99,"cS",15)}>0</motion.span>%</span>
                <br />
                <span>
                  Customer <br />
                  Statisfaction
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 1170px) {
          .whySection {
            display: none;
            visibility: hidden;
            height: 0vh !important;
          }
        }
      `}</style>
      ;
    </>
  );
}
