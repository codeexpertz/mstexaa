import React from 'react'
import Link from 'next/link'
const GetConsultingSection = ({heading, text1, text2}) => {
  return (
    <div className=' flex flex-col justify-center items-center min-h-[500px] px-6 lg:px-20 text-center'>
      <h1 className='text-3xl text-orange-600 lg:text-6xl font-heading capitalize font-semibold'>
     {heading}
      </h1>
      <p className=' text-xl mt-4 font-poppins'>{text1}</p>
      <p className=' text-xl  font-poppins'>{text2} </p>
      <Link href="/contact" className=' py-3 px-8 mt-4 bg-orange-600 text-white rounded-full font-poppins font-semibold'> GET IN TOUCH</Link>
    </div>
  )
}

export default GetConsultingSection