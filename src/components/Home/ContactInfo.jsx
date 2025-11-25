
import React from 'react'
import BookACallButton from '../BookACallButton'
import GetandEstimateButtn from '../GetandEstimateButtn'
const ContactInfo = () => {
  return (
    <div className=' flex flex-col bg-secondary min-h-[450px] text-primary px-28 py-10'>
<h1  className=' flex justify-center items-center text-3xl font-overlock my-10 text-forth font-semibold'>Your Creativity SIde With Our Excellence in Digital Designs Experiences
</h1>
<div  className='flex gap-10 justify-center items-start'>
    <div className=' w-[200px] border-t-8 rounded border-tirtry '></div>
    <div className=' w-1/2 font-poppins'>
        <p>We are experts in digital design at Figma Design, and we can make the best UI and UX designs for you. As one of the best design firms, we combine creativity with ease to make digital experiences that are truly engaging.
        <br/><br/>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo vero esse temporibus ea quis
        </p>
        <div   className=' mt-8 flex gap-4 justify-start items-center'>
  <BookACallButton/>
  <GetandEstimateButtn/>
</div>
    </div>
</div>
    </div>
  )
}

export default ContactInfo