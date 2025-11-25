import Link from "next/link"
import { FaCaretRight } from "react-icons/fa";
export default function MegaDropDownIndustries(){
  const fintechItems =[
   { id:1, to: '/industries/fintech', name: "Fintech Development & Api Integrations" },
   { id:2,to: '/industries/fintech', name: "Accounting Software" },
   { id:3,to: '/industries/fintech', name: "Credit & Loan Management" },
   { id:4, to: '/industries/fintech', name: "Security & Fraud Preventation" },
  ]
  
  const HealthCare =[
   { id:1, to: '/industries/healt-care', name: "HIPAA-Complaint Healthcare Software" },
   { id:2,to: '/industries/healt-care', name: "Telehealth & Telemedicine" },
   { id:3,to: '/industries/healt-care', name: "Health information management (EHR /industries EMR, HIS" },
   { id:4, to: '/industries/healt-care', name: "E-Prescribing Software" },
  ]
  const Food =[
   { id:1, to: '/industries/food', name: "Food Delivery Applications" },
   { id:2,to: '/industries/food', name: "Food Ordering Applications" },
   { id:3,to: '/industries/food', name: "Restaurants  CRM System" },
   { id:4, to: '/industries/food', name: "Integration with POS System" },
  ]
  const Marketing =[
   { id:1, to: '/industries/marketing', name: "Affiliate  program development" },
   { id:2,to: '/industries/marketing', name: "Loyalty App Development" },
   { id:3,to: '/industries/marketing', name: "Integration ( Google Analytics, CRM )" },
   
  ]
  const Travel =[
   { id:1, to: '/industries/travel', name: "Booking Application" },
   { id:2,to: '/industries/travel', name: "Hotel Management software and POS" },
   { id:3,to: '/industries/travel', name: "Travel and Portal Development" },
   
  ]
  const Edtech =[
   { id:1, to: '/industries/Edtech', name: "Learning Management System (LMS)" },
   { id:2,to: '/industries/Edtech', name: "E-Learning Application" },
   { id:3,to: '/industries/Edtech', name: "School Management Software" },
   
  ]
    return(
        <>
         <div className='absolute font-poppins  mx-auto overflow-hidden right-0 left-0   w-full bg-white shadow-lg py-10 lg:px-20 p-6 items-start  flex'>
        <div className='grid lg:grid-cols-3 lg:gap-6 gap-2 w-full'>
          {/* Megadropdown content for Services */}
          <div>
          <div className="lg:mb-5 flex items-center gap-4">
            {/* <img src="/indutries/I1.jpg" alt="s4" width={50} className="hidden lg:flex"/> */}
           <Link href="/industries/fintech" className='font-bold  text-xl '>Fintech</Link>
           </div>
            <ul className=" hidden lg:flex flex-col gap-2 text-md lg:text-lg mt-4 font-normal">
         {fintechItems.map(item=>(
               <li key={item.id}><Link href={item.to} className=" flex items-center gap-3"><FaCaretRight className=" text-forth"/>{item.name}</Link></li>
         ))}
            </ul>
          </div>
          <div>
          <div className="lg:mb-5 flex items-center gap-4">
            {/* <img src="/indutries/I2.jpg" alt="s4" width={50} className="hidden lg:flex"/> */}
           <Link href="/industries/healt-care" className='font-bold  text-xl '>HealthCare</Link>
           </div>
            <ul className=" hidden lg:flex flex-col gap-2 text-lg mt-4 font-normal">
         {HealthCare.map(item=>(
               <li key={item.id}><Link href={item.to} className=" flex items-center gap-3"><FaCaretRight className=" text-forth"/>{item.name}</Link></li>
         ))}
            </ul>
          </div>
          <div>
          <div className="lg:mb-5 flex items-center gap-4">
            {/* <img src="/indutries/I3.jpg" alt="s4" width={50} className="hidden lg:flex"/> */}
           <Link href="/industries/food" className='font-bold  text-xl '>Food Services</Link>
           </div>
            <ul className=" hidden lg:flex flex-col gap-2 text-lg mt-4 font-normal">
         {Food.map(item=>(
               <li key={item.id}><Link href={item.to} className=" flex items-center gap-3"><FaCaretRight className=" text-forth"/>{item.name}</Link></li>
         ))}
            </ul>
          </div>
          <div>
          <div className="lg:mb-5 flex items-center gap-4">
            {/* <img src="/indutries/I4.png" alt="s4" width={50} className="hidden lg:flex"/> */}
           <Link href="/industries/marketing" className='font-bold  text-xl '>Marketing</Link>
           </div>
            <ul className=" hidden lg:flex flex-col gap-2 text-lg mt-4 font-normal">
         {Marketing.map(item=>(
               <li key={item.id}><Link href={item.to} className=" flex items-center gap-3"><FaCaretRight className=" text-forth"/>{item.name}</Link></li>
         ))}
            </ul>
          </div>
          <div>
          <div className="lg:mb-5 flex items-center gap-4">
            {/* <img src="/indutries/I5.jpg" alt="s4" width={50} className="hidden lg:flex"/> */}
           <Link href="/industries/travel" className='font-bold  text-xl '>Travel & Hospitality</Link>
           </div>
            <ul className=" hidden lg:flex flex-col gap-2 text-lg mt-4 font-normal">
         {Travel.map(item=>(
               <li key={item.id}><Link href={item.to} className=" flex items-center gap-3"><FaCaretRight className=" text-forth"/>{item.name}</Link></li>
         ))}
            </ul>
          </div>
          <div>
          <div className="lg:mb-5 flex items-center gap-4">
            {/* <img src="/indutries/I1.jpg" alt="s4" width={50} className="hidden lg:flex"/> */}
           <Link href="/industries/Edtech" className='font-bold  text-xl '>EdTech</Link>
           </div>
            <ul className=" hidden lg:flex flex-col gap-2 text-lg mt-4 font-normal">
         {Edtech.map(item=>(
               <li key={item.id}><Link href={item.to} className=" flex items-center gap-3"><FaCaretRight className=" text-forth"/>{item.name}</Link></li>
         ))}
            </ul>
          </div>
         
        </div>
      </div>
        </>
    )
}