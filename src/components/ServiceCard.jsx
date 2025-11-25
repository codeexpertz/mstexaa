// ServiceCard.js
import React from 'react';
import Link from 'next/link';
const ServiceCard = ({ service, hoveredId, setHoveredId,btnText }) => {
  return (
    <div
      onMouseEnter={() => setHoveredId(service.id)}
      onMouseLeave={() => setHoveredId(null)}
      className='p-6 bg-secondary shadow-md'
    >
      <div className='flex gap-5 items-center '>
        <p className={`transition-all duration-150 ease-in p-2 rounded-lg text-4xl ${hoveredId === service.id ? 'bg-white text-forth' : 'bg-forth text-secondary '}`}>
          <service.icon />
        </p>
        <h2 className='text-2xl font-poppins font-semibold text-forth'>{service.heading}</h2>
      </div>
      <p className='my-6 font-poppins'>{service.description}</p>
     {btnText && (
       <Link className='bg-forth px-4 py-2 my-3 text-secondary rounded' href={service.to}>{btnText}</Link>
     )}
    </div>
  );
};

export default ServiceCard;
