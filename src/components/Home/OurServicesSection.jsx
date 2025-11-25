"use client"
import { motion } from "motion/react"
import Link from "next/link"

const OurServicesSection = () => {
  const initialData = [
    {
      id: 1,
      img: "/webintro.svg",
      main: "Software Development",
      shortName: "Software Development",
      d1: "Custom software applications built with modern technologies for optimal performance.",
      l1: "Web Development",
      l2: "Mobile Development",
      l3: "Enterprise Solutions",
      l4: "Custom CRM/ERP",
      link: "/services",
    },
    {
      id: 2,
      img: "/ddintro.svg",
      main: "Digital Design",
      shortName: "Digital Designing",
      d1: "Stunning and intuitive user interfaces and experiences tailored to your brand.",
      l1: "UI/UX Design",
      l2: "Branding",
      l3: "Graphic Design",
      l4: "Prototyping",
      link: "/services/digital-desgining",
    },
    {
      id: 3,
      img: "/aiintro.svg",
      main: "AI Solutions",
      shortName: "AI Solutions",
      d1: "Intelligent applications powered by artificial intelligence to automate and optimize your business processes.",
      l1: "Machine Learning",
      l2: "Mobile Development",
      l3: "Enterprise Solutions",
      l4: "Predictive Analytics",
      link: "/services/ai-solutions",
    },
    {
      id: 4,
      main: "SEO",
      shortName: "SEO",
      img: "/seointro.svg",
      d1: "Improve your search engine ranking and drive organic traffic to your website.",
      l1: "Keyword Research",
      l2: "On-Page SEO",
      l3: "Off-Page SEO",
      l4: "Technical SEO",
      link: "/services/seo",
    },
    {
      id: 5,
      img: "/dmintro.svg",
      main: "Digital Marketing",
      shortName: "Digital Marketing",
      d1: "Comprehensive digital marketing strategies to boost your online presence and reach your target audience.",
      l1: "Social Media Marketing",
      l2: "Content Marketing",
      l3: "Email Marketing",
      l4: "Paid Advertising",
      link: "/services/digital-marketing",
    },
    {
      id: 6,
      img: "/csintro.svg",
      main: "Cloud Solution",
      shortName: "Cloud Solution",
      d1: "Scalable cloud infrastructure and deployment solutions for reliable, high-performance applications and data management.",
      l1: "Cloud Migration",
      l2: "Cloud Security",
      l3: "Managed Cloud Services",
      l4: "Cloud Optimization",
      link: "/cloud-service",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      id="services"
      className="w-full min-h-[900px] flex flex-col items-center justify-start py-10 px-6 lg:py-20 lg:px-28 "
    >
      <div className="flex justify-between items-center mb-16">
        <div className="text-black">
          <h1 className="font-overlock text-5xl mb-4 font-semibold text-center">Our Services</h1>
          <p className="font-poppins lg:w-[500px] text-center">
            Explore Our Comprehensive Service Offerings Solutions Tailored to Your Needs
          </p>
          <hr className="mt-3 lg:w-[200px] border-t-4 border-orange-500 mx-auto" />
        </div>
      </div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {initialData.map((service) => (
          <motion.div
            key={service.id}
            variants={item}
            className="flip-card h-[300px] w-full max-w-[400px] mx-auto"
            style={{ perspective: "1000px" }}
          >
            <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 hover:rotate-y-180">
              {/* Front Side - Simple */}
              <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg border border-gray-200 shadow-lg flex flex-col items-center justify-center p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 p-4 mb-6 transform transition-transform duration-300 hover:scale-110">
                  <img
                    src={service.img || "/placeholder.svg"}
                    alt={service.shortName}
                    className="w-full h-full object-contain filter invert"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">{service.shortName}</h3>
                <div className="mt-4 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Hover to see details
                </div>
              </div>

              {/* Back Side - Detailed */}
              <div className="flip-card-back absolute w-full h-full  backface-hidden rotate-y-180 bg-orange-500 text-white rounded-lg border border-gray-200 shadow-lg p-6 flex flex-col">
              

              <p className="text-sm font-semibold leading-relaxed mb-4 flex-grow">{service.d1}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    {service.l1}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    {service.l2}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    {service.l3}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    {service.l4}
                  </div>
                </div>

                <Link
                  href={service.link}
                  className="mt-auto bg-orange-500 border border-white text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2 group/button"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover/button:translate-x-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default OurServicesSection
