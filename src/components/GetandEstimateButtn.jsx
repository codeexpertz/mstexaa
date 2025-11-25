import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import Link from 'next/link'
const GetandEstimateButtn = () => {
  return (
    <div>
    <Link href={"/contact"} className=' flex gap-3 items-center border bg-secondary text-primary lg:py-4 lg:px-8 p-3 whitespace-nowrap rounded-full hover:bg-forth hover:text-white font-semibold  font-poppins'>Get an Estimate <FaArrowTrendUp/></Link>
</div>
  )
}

export default GetandEstimateButtn