import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Software Development',
    description: 'Custom software applications built with modern technologies for optimal performance.',
    number: '01',
    to:"/services/software-dev"
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Our web design service can help rediscover your business image in the internet marketplace',
    number: '02',
     to:"/services/digital-desgining"
  },
  {
    id: 3,
    title: 'AI Solution',
    description: 'Intelligent application powered by AI to automate and optimize your business processes',
    number: '03',
     to:"/services/ai-solutions"
  },
  {
    id: 4,
    title: 'SEO',
    description: 'Improve your search engine ranking and drive organic traffic to your website',
    number: '04',
     to:"/services/seo"
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description: 'Comprehensive marketing strategies to boost your online presence & reach your target audience',
    number: '05',
     to:"/services/digital-marketing"
  },
  {
    id: 6,
    title: 'Cloud Solution',
    description: 'Scalable cloud infrastructure & deployment for reliable, high perfomance apps & data management',
    number: '06',
     to:"services/cloud-service"
  }
];

export default function WhatWeDoSection() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex justify-between items-center gap-2 px-4 py-1 text-md font-bold text-orange-500 border border-orange-600 rounded-full mb-4">
          <span className='w-1 h-1 bg-orange-500 rounded-full'></span>  What we do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            What We Create What You Can Enjoy
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 z-20 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-start mb-2 gap-1">
                <span className="text-xl font-bold text-orange-500 mr-3">{service.number}</span>
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-[#00000080] font-medium text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link href={service.to} className="inline-flex items-center px-4 py-2 gap-2 text-sm font-semibold text-orange-500 border-2 border-orange-500 rounded-full hover:bg-orange-50 transition-colors">
                Explore More
               <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.07725 6.68148C8.80327 6.40749 8.6648 5.7277 8.59538 5.11032C8.50455 4.31495 8.53889 3.50741 8.72646 2.72977C8.86715 2.14672 9.0935 1.49573 9.4465 1.14273M9.4465 1.14273C9.0935 1.49573 8.44214 1.72245 7.85947 1.86277C7.08146 2.04998 6.27391 2.08432 5.47928 1.99422C4.86153 1.92443 4.181 1.78522 3.90776 1.51198M9.4465 1.14273L0.584508 10.0047" stroke="#FF873A"/>
</svg>

              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='z-1 absolute -bottom-20 right-0 '>
<svg width="273" height="300" viewBox="0 0 273 517" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_627_6545)">
<circle cx="259" cy="258.5" r="181" fill="#FBE3E0"/>
</g>
<defs>
<filter id="filter0_f_627_6545" x="0.5" y="0" width="517" height="517" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="38.75" result="effect1_foregroundBlur_627_6545"/>
</filter>
</defs>
</svg>



      </div>
    </section>
  );
}