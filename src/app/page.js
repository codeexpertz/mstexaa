"use client"
import "./page.css"
import Projects from "@/components/Home/Projects"
import TechnologiesSection from "@/components/Home/TechnologiesSection"
import WhyUs from "@/components/Home/WhyUs"
import HeroSection from "@/components/Home/HeroSection"
import AboutCodeExpert from "@/components/Home/AboutCodeExpert"
import Course from "@/components/Home/Course"
import Workflow from "@/components/Home/Workflow"
import WhyUsSection from "@/components/Home/WhyUsSection"
import TestimonialsSection from "@/components/Home/TestimonialsSection"
import ClientReview from "@/components/Home/ClientReviews"
import ServicesSection from "@/components/Home/ServicesSection"
import ITServicesSection from "@/components/Home/ITServicesSection"
import AchievementGalleryHome from "@/components/Home/AchievementGalleryHome"
import Technology from "@/components/Home/Technology"
import ProjectCarousel from "@/components/ProjectCarousel"
import ProjectsHome from "@/components/Home/ProjectsHome"
export default function Page() {
  return (
    <div className="overflow-x-hidden">    
{/* HeroSection */}
<HeroSection/>
{/* Achievement */}
<AchievementGalleryHome/>
      {/* About Mstexa*/} 
<AboutCodeExpert />
      {/* <TrustedBy /> */}
      {/* <OurServicesSection /> */}
      <ServicesSection/>
      <ProjectsHome/>
      {/* <Projects/> */}
      {/* <WhyUs />
      <ClientReview /> */}
     <Workflow />
     <Technology/>
      <ITServicesSection/>
      {/* <Course/> */}
     <WhyUsSection/>
      {/* <TechnologiesSection /> */}
      <TestimonialsSection/>
    </div>
  )
}
