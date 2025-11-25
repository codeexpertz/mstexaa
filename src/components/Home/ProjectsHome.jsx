// app/ProjectsGrid.jsx
import React from "react";
import Link from "next/link";

const ProjectsHome = () => {
  const projects = [
    {
      id: 1,
      title: "Pind Eats",
      description: "We design clean, user-friendly & engaging Pind Eats App UI using modern tool like Figma, XD & AI",
      tags: ["Web Design", "UI UX", "Dashboard UI"],
      image: "/projects/pindeats2.png", // Replace with actual path
      href: "/project/food",
    },
    {
      id: 2,
      title: "Mstexa Website",
      description: "We design clean, user-friendly & engaging Mstexa Website UI using modern tool like Figma, XD & AI",
      tags: ["Web Design", "UI UX", "User-friendly UI"],
      image: "/projects/codeexpert.png", // Replace with actual path
      href: "/project/codeexpert",
    },
    {
      id: 3,
      title: "Nubair Airline",
      description: "We design clean, user-friendly & engaging Nubair Airline App UI using modern tool like Figma, XD & AI",
      tags: ["Web Design", "UI UX", "Dashboard UI"],
      image: "/projects/nubair.png", // Replace with actual path
      href: "/project/nubair",
    },
    {
      id: 4,
      title: "Happi Loop",
      description: "We design clean, user-friendly & engaging Happi Loop Website UI using modern tool like Figma, XD & AI",
      tags: ["Web Design", "UI UX", "Dashboard UI"],
      image: "/projects/happiloop.png", // Replace with actual path
      href: "/project/happiloop",
    },
  ];

  return (
    <section id="heroproject" className="py-8 px-6 md:px-12 lg:px-20 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <span className="text-base rounded-full py-1 px-3 border border-[#FF6400] text-[#FF6400] font-bold">• Our Project</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Let’s Create Something
            <br />
            Amazing!
          </h2>
        </div>

     <div className="flex items-center mt-2 gap-2">
         <Link
          href="/calendly/meeting"
          className=" inline-flex gap-2 items-center px-6 py-2.5  rounded-full text-base font-semibold text-white bg-[#FF6400] transition-colors duration-200"
        >
          Let’s Talk
          
        </Link>
        <Link
          href="/project"
          className="inline-flex gap-2 items-center px-4 py-4  rounded-full text-base font-semibold text-white bg-[#FF6400] transition-colors duration-200"
        >
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9444 9.34012C13.5174 8.91308 13.3015 7.85352 13.1933 6.89122C13.0518 5.65152 13.1053 4.39282 13.3977 3.18074C13.6169 2.27197 13.9697 1.2573 14.52 0.707092M14.52 0.707092C13.9697 1.2573 12.9545 1.61068 12.0463 1.82939C10.8337 2.12118 9.57496 2.17471 8.33641 2.03428C7.37354 1.9255 6.31282 1.70852 5.88693 1.28263M14.52 0.707092L0.707109 14.5199" stroke="white" stroke-width="2"/>
</svg>

          
        </Link>
     </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.href}
            className="group block overflow-hidden rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#FF6400] mb-2">{project.title}</h3>
              <p className="text-[#00000080] font-semibold mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium border border-[#00000033] text-black rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsHome;