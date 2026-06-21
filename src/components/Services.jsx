import React from "react";
import web_icon from "../assets/web-icon.png";
import mobile_icon from "../assets/mobile-icon.png";
import ui_icon from "../assets/ui-icon.png";
import graphics_icon from "../assets/graphics-icon.png";

const Services = () => {
  const servicesList = [
    {
      img: web_icon,
      title: "Web Development",
      description: "Creating dynamic, responsive, and secure websites that deliver premium user experiences through modern, performant frontend and backend integrations.",
      link: "https://www.geeksforgeeks.org/web-development/"
    },
    {
      img: mobile_icon,
      title: "Mobile App Development",
      description: "Building high-performance, cross-platform mobile applications in React Native that ensure native responsiveness and smooth, native look-and-feel.",
      link: "https://reactnative.dev/"
    },
    {
      img: ui_icon,
      title: "UI/UX Design",
      description: "Designing interface wireframes and mockups that prioritize clean typography, intuitive user flows, and aesthetic details for modern web apps.",
      link: "https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/"
    },
    {
      img: graphics_icon,
      title: "AI & ML Integration",
      description: "Integrating intelligent models, LLM APIs, and analytics features into client apps to enhance functionality and drive data-driven choices.",
      link: "https://www.computer.org/publications/tech-news/trends/ai-and-machine-learning-integration"
    }
  ];

  return (
    <div id="services" className="w-full px-[8%] sm:px-[12%] py-12 sm:py-16 scroll-mt-20 relative select-none overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#b820e6]/5 dark:bg-[#b820e6]/3 rounded-full blur-[100px] -z-10"></div>
      
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-500 dark:text-zinc-400">What i offer</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo tracking-tight">My services</h2>
      <p className="text-center max-w-xl mx-auto mt-3 mb-10 font-Ovo text-sm sm:text-base text-gray-600 dark:text-zinc-300 leading-relaxed">
        Delivering dynamic web and mobile architectures through professional MERN stack execution, ensuring elegant client user interfaces and solid backend operations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesList.map((service, idx) => (
          <div
            key={idx}
            className="group border border-gray-200/40 dark:border-zinc-800/60 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-white/70 to-white/30 dark:from-zinc-900/50 dark:to-zinc-950/30 backdrop-blur-md hover:-translate-y-1.5 hover:border-[#b820e6]/40 dark:hover:border-[#da7d20]/40 hover:shadow-[0_15px_30px_-10px_rgba(184,32,230,0.12)] dark:hover:shadow-[0_15px_30px_-10px_rgba(218,125,32,0.12)] transition-all duration-500 flex flex-col h-full justify-between"
          >
            <div>
              {/* Icon Container with dynamic image filters */}
              <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200/60 dark:border-zinc-800/80 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-[#b820e6] group-hover:to-[#da7d20] group-hover:border-transparent transition-all duration-500 mb-6 shrink-0 shadow-sm">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-6 h-6 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500" 
                />
              </div>
              
              <h3 className="font-semibold text-gray-805 dark:text-zinc-100 font-Outfit text-base mb-3 group-hover:text-[#b820e6] dark:group-hover:text-[#da7d20] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-zinc-400 text-xs sm:text-sm font-Outfit leading-relaxed">
                {service.description}
              </p>
            </div>

            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-Outfit font-semibold text-gray-500 dark:text-zinc-400 group-hover:text-[#b820e6] dark:group-hover:text-[#da7d20] transition-colors duration-300 mt-6 w-max"
            >
              Read more 
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
