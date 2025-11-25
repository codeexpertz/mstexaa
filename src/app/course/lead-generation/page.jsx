"use client";
import Exploremore from "@/components/Exploremore";
import { FlipCard } from "@/components/FlipCard";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import WhyUsSection from "@/components/Home/WhyUsSection";
import { motion } from "framer-motion";
import Link from "next/link";

const Page = () => {
    const courses = [
    {
      cardTitle: ["Full Stack", "Development", "COURSE"],
      fullTitle: "The Complete 2025 Web Development Course",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "/courses/fullstack/instructorImg.svg",
      icons: [ "/courses/fullstack/react.png", "/courses/fullstack/js.png", "/courses/fullstack/html.png","/courses/fullstack/css.png" ],
      to:"/course/web",
      bg:'bg-blue-500'
    },
    {
      cardTitle: ["ULTIMATE", "DataScience","COURSE"],
      fullTitle: "The Complete 2025 Data Science Course",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "/courses/datascience/instructorImg.svg",
      icons: ["","","/courses/datascience/python.png"],
      to: "/course/datascience",
      bg:'bg-orange-500'
    },
    {
      cardTitle: ["ULTIMATE", "Video Editing","COURSE"],
      fullTitle: "The Complete 2025 Video Editing Course",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "/courses/videoediting/instructorImg.svg",
      icons: ["/courses/videoediting/ae.png", "/courses/videoediting/Davinciresolve.png","/courses/videoediting/pr.png"],
      to: "/course/videoediting",
      bg:'bg-orange-500'
    },
    {
      cardTitle: ["Digital", "Marketing","COURSE"],
      fullTitle: "The Complete 2025 Digital Marketing",
      instructor: "Mstexa in Design",
      rating: "4.5",
      instructorImg: "/courses/digitalmarketing/instructorImg.svg",
      icons: ["","/courses/digitalmarketing/meta.svg","/courses/digitalmarketing/fb.svg","/courses/digitalmarketing/googleadsense.svg"],
      to: "/course/digital-marketing",
      bg:'bg-yellow-500'
    }
  ];
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
      },
    },
  };

  return (
    <>
      {/* Hero Section - Match Image Design */}
      <div className="min-h-screen flex items-center py-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-[url('/herosection/Frame.svg')] bg-cover bg-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl mx-auto">
          {/* Left Text Content */}
          <motion.div
            className="text-left lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="text-orange-500 font-bold border border-orange-500 px-2 rounded-full text-base mb-4 block w-fit"
            >
              • Courses
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight"
            >
              B2B Lead Gen: Clay, <br />
              LinkedIn, Cold Email<br />
              and Reddit Playbook
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[#00000099]  font-medium mb-8 text-base"
            >
            
             Complete Lead Generation Stack: Clay Enrichment, Personalization, Multi-Channel Outreach & Linkedin Inbound-Led Outbound     </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
  variants={itemVariants}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
>
  <a href="https://wa.me/+923156801933" target="_blank" rel="noopener noreferrer">
    Get Start
  </a>
</motion.button>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-3 px-6 rounded-full transition duration-300"
              >
                <Link href="/calendly/call">Call Now</Link>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image + Tech Icons */}
          <motion.div
            className="flex gap-6 lg:w-1/2 md:justify-center items-center flex-nowrap"
            variants={itemVariants}
          >
            {/* Main Image */}
            <div className="relative rounded-xl overflow-hidden flex-shrink-0">
              <img
                src="/courses/leadgeneration/herosection1.svg"
                alt="Developer working on laptop"
                className="w-[50vw] max-w-[400px] h-auto md:h-[450px] object-cover"
              />
            </div>

            {/* Secondary Image */}
            <div className="relative rounded-xl overflow-hidden flex-shrink-0">
              <img
                src="/courses/leadgeneration/herosection2.svg"
                alt="Developer working on laptop"
                className="w-[25vw] max-w-[200px] h-auto md:h-[450px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* What You'll Learn Section with Flip Cards */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-block border border-orange-200 text-orange-500 text-base font-bold px-3 py-1 rounded-full mb-4">
              • Courses
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What you'll learn
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
  {
    step: "Step 1",
    title: "Lead Generation Fundamentals",
    description: [
      "Understand what leads are",
      "Learn lead types",
      "Explore generation channels"
    ],
  },
  {
    step: "Step 2",
    title: "Inbound Lead Generation",
    description: [
      "Create landing pages",
      "Use content & SEO",
      "Capture leads"
    ],
  },
  {
    step: "Step 3",
    title: "Outbound Lead Generation",
    description: [
      "Master cold emailing & calling",
      "Use social selling",
      "Segment and target audience"
    ],
  },
  {
    step: "Step 4",
    title: "Lead Nurturing & CRM",
    description: [
      "Automate email follow-ups",
      "Track leads with CRM",
      "Score and prioritize leads"
    ],
  },
  {
    step: "Step 5",
    title: "Analytics & Conversion Optimization",
    description: [
      "Measure lead performance",
      "Optimize for conversions",
      "Refine strategies with data"
    ],
  },
]

.map((item, index) => (
              <FlipCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
      {/* Existing Sections Below */}
      <Exploremore  courses={courses}/>
      <WhyUsSection />
      <TestimonialsSection />
    </>
  );
};

export default Page;
