
import Link from "next/link"
import { FaCaretRight } from "react-icons/fa";
export default function MegaDropDownCompany(){
  const About =[
    { id:1, to: '/about', name: "Company Leadership" },
    { id:2,to: '/about', name: "Our Leadership" },
    { id:3,to: '/about', name: "Testimonials" },
    
   ]
   
   const Carears =[
    { id:1, to: '/about', name: "Open Positions" },
    { id:2,to: '/about', name: "Send Your CV" },
  
   ]
   const GetinTouch =[
    { id:1, to: '/contact', name: "Estimator" },
    { id:2,to: '/contact', name: "Book a call" },
   
   ]
 
    return(
      <>
      <div className='absolute font-poppins  mx-auto overflow-hidden right-0 left-0   w-full bg-white shadow-lg py-10 lg:px-20 p-6 items-start  flex'>
     <div className='grid lg:grid-cols-3 gap-6 w-full'>
       {/* Megadropdown content for Services */}
       <div>
       <div className="mb-5 flex items-center gap-4">
         <img src="/Company/C1.png" alt="s4" width={50} className="hidden lg:flex"/>
        <Link href="/about" className='font-bold  text-xl '>About US</Link>
        </div>
         <ul className=" hidden lg:flex flex-col gap-2 text-lg mt-4 font-normal">
      {About.map(item=>(
            <li key={item.id}><Link href={item.to} className=" flex items-center gap-3"><FaCaretRight className=" text-forth"/>{item.name}</Link></li>
      ))}
         </ul>
       </div>
      
      
      
     </div>
   </div>
     </>
    )
}