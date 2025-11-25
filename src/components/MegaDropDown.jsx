import Link from "next/link"


export default function Megadropdown(){
    return(
        <div className='absolute font-poppins  mx-auto overflow-auto  right-0 left-0  w-full bg-white shadow-lg py-2 lg:py-10 lg:px-20 items-start  flex px-6'>
        <div className='grid lg:grid-cols-4 lg:gap-6 lg:justify-end w-full'>
          {/* Megadropdown content for Services */}
          <div>
          <div className="lg:mb-10 mb-2">
            {/* <img src="/s4.png" alt="s4" width={60} className="hidden lg:flex"/> */}
           <Link href="/services" className='font-bold font-heading text-md  lg:text-2xl lg:my-4 '>Software Development</Link>
           </div>
            <ul className="lg:flex grid grid-cols-2 lg:flex-col lg:gap-2 text-sm lg:text-lg lg:mt-4 items-start justify-start">
             <li className="font-heading"><Link href="/services/software-dev/"> Software Development <br/> <span className="hidden lg:flex text-sm text-gray-400 font-normal font-poppins">Tailored tech Solutions</span></Link></li>
             <li className="font-heading"><Link href="/services/webdev">Web Development <br/> <span className="hidden lg:flex text-sm text-gray-400 font-normal font-poppins">Execptional Web Application</span></Link></li>
             <li className="font-heading"><Link href="/services/app-dev">Mobile App  Development <br/> <span className="hidden lg:flex text-sm text-gray-400 font-normal font-poppins">Cross-platform & Native Applications</span></Link></li>
             <li className="font-heading"><Link href="/services/saas-dev">SAAS Development <br/> <span className="hidden lg:flex text-sm text-gray-400 font-normal font-poppins">Cross-platform & Native Applications</span></Link></li>
            
            </ul>
          </div>
          <div>
          <div className="lg:mb-10 mb-2">
            {/* <img src="/s3.png" alt="s4" width={60} className="hidden lg:flex"/> */}
           <Link href="/design" className='font-bold font-heading   text-md  lg:text-2xl lg:my-4 my-1 '>Digital Designs</Link>
           </div>
            <ul className="lg:flex grid grid-cols-2 items-start text-start lg:flex-col lg:gap-2 text-sm lg:text-xl lg:mt-4">
             <li className="font-heading"><Link href="/design/wireframing-prototyping">Wireframing & Prototyping <br/> <span className="hidden lg:flex text-sm text-gray-400 font-normal font-poppins">Visual Sketches & Clickable prototyping</span></Link></li>
             <li className="font-heading"><Link href="/design/ui-ux">UI/UX Design <br/> <span className="hidden lg:flex text-sm text-gray-400 font-normal font-poppins">Friendly Interface</span></Link></li>
             <li className="font-heading"><Link href="/design/product">Product Design <br/> <span className=" hidden lg:flex text-sm text-gray-400 font-normal font-poppins">Unique concepts, Integral design</span></Link></li>
            
            </ul>
          </div>
          <div>
          <div className="lg:mb-10 mb-1 ">
            {/* <img src="/s2.png" alt="s4" width={60} className="hidden lg:flex"/> */}
           <Link href="/ai-service" className='font-bold font-heading  text-md  lg:text-2xl my-4 '>AI Solutions</Link>
           </div>
            <ul className="hidden lg:flex flex-col gap-2 text-xl mt-4">
             <li className="font-heading"><Link href="/ai-service/">AI Solutions<br/> <span className=" text-sm text-gray-400 font-normal font-poppins">AI Powered, Integration</span></Link></li>
            
            
            </ul>
            <div>
           <div className="lg:mt-10 ">
            {/* <img src="/s1.png" alt="s4" width={60} className="hidden lg:flex"/> */}
           <Link href="/services/digital-marketing" className='font-bold font-heading  text-md  lg:text-2xl my-1 lg:my-4 '>Digital Marketing</Link>
           </div>
            <ul className=" hidden lg:flex flex-col gap-2 text-xl lg:mt-4 mt-1">
             <li className="font-heading"><Link href="/cloud-service/">Digital Marketing <br/> </Link></li>
            
            
            </ul>
          </div>
          </div>
          <div>
           <div className="lg:mb-10 mb-1">
            {/* <img src="/s1.png" alt="s4" width={60} className="hidden lg:flex"/> */}
           <Link href="/cloud-service" className='font-bold font-heading  text-md  lg:text-2xl lg:my-4 my-1'>Cloud Solutions</Link>
           </div>
            <ul className=" hidden lg:flex flex-col gap-2 text-xl mt-4">
             <li className="font-heading"><Link href="/cloud-service/">Cloud Solutions <br/> <span className=" text-sm text-gray-400 font-normal font-poppins">DevOps, AWS Services</span></Link></li>
            
            
            </ul>
            <div>
           <div className="lg:mt-10 ">
            {/* <img src="/s1.png" alt="s4" width={60} className="hidden lg:flex"/> */}
           <Link href="/services/seo" className='font-bold font-heading text-md  lg:text-2xl lg:my-4 my-1'>SEO Services</Link>
           </div>
            <ul className=" hidden lg:flex flex-col gap-2 text-xl mt-4">
             <li className="font-heading"><Link href="/services/seo">SEO <br/> </Link></li>
            
            
            </ul>
          </div>
          </div>
         
         
          
          
        </div>
      </div>
    )
}