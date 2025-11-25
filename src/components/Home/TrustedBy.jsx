import React from 'react'
import { FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa'
import Cards from '../Cards/Cards'

const TrustedBy = () => {
  return (
    <div className="bg-white  text-black min-h-[500px] flex flex-col items-start justify-center lg:py-2 lg:px-28 p-6">
      <h1 data-aos="fade-up" data-aos-duration="500" className="font-overlock text-5xl font-semibold text-orange-500 my-10">
        What Sets Us Apart
      </h1>
      <hr className="pt-4 w-[200px] border-t-4 border-orange-500"/>
      <p className="text-sm text-black font-poppins max-w-[600px]  mb-20">
        We&apos;ve propelled our clients to new heights with our innovative strategies and unwavering commitment to excellence.
      </p>
      <div data-aos="fade-up" data-aos-duration="600" className="flex lg:flex-row flex-col gap-20 justify-between w-full">
        <Cards
          icon={FaUsers}
          number="700+"
          text="Loyal clients served with successful projects and unparalleled satisfaction."
          className="bg-gray-900 text-orange-500"
        />
        <Cards
          icon={FaLightbulb}
          number="2000+"
          text="Collaborations with industry leaders, establishing our reputation as a trusted digital innovator."
          className="bg-gray-900 text-orange-500"
        />
        <Cards
          icon={FaChartLine}
          number="50+"
          text="Expert team members bringing diverse skills and creativity to every project we undertake."
          className="bg-gray-900 text-orange-500"
        />
      </div>
    </div>
  )
}

export default TrustedBy