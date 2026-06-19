import React, { useState } from "react";
import send_icon from "../assets/send-icon.png";
import right_arrow_blod from "../assets/right-arrow-bold.png";
import right_arrow_blod_dark from "../assets/right-arrow-bold-dark.png";

const Experience = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const professionalExperience = [
    {
      role: "Associate Software Engineer",
      company: "LeviSoft Technologies Pvt. Ltd.",
      duration: "Feb 2025 – Feb 2026",
      location: "Bangalore, Karnataka",
      project: "Path+ (US-based Christian OTT platform)",
      description: [
        "Contributed to Path+ (US-based Christian OTT platform) using React.js and React Native, developing scalable web and mobile features including MasterClass, Series, Music, and content discovery modules.",
        "Implemented core mobile functionalities such as ad integration, profile and device management, device detection with UUID and metadata, and seamless REST API integration for secure, cross-platform content delivery."
      ]
    }
  ];

  const freelanceProjects = [
    {
      role: "Freelance Full-Stack Developer",
      project: "The Sylheti Archive",
      duration: "Feb 2026 – June 2026",
      techStack: "Next.js 15 (App Router), React 19, Tailwind CSS v4, PostgreSQL (Neon DB), Prisma ORM, Upstash Redis, UploadThing, Nodemailer, SweetAlert2",
      description: [
        "Built a resilient database caching layer using Upstash Redis with automatic direct fallback to PostgreSQL/Prisma upon connection issues or quota limits, accompanied by formatted performance header metrics.",
        "Created a unified public submissions dashboard (/submit) supporting multiple media-type file uploads with automated file parsing and a metadata scraping proxy for webpage/YouTube URLs.",
        "Implemented a comprehensive curation review pipeline supporting draft submission moderation (Pending, Approved, Rejected) and custom rejection reason logs.",
        "Designed a luxury black-and-white admin interface using translucent glassmorphic layouts, and SweetAlert2-based moderation modals.",
        "Developed a site-wide notifications bell system and request workflow to promote Viewers to Contributors dynamically."
      ]
    }
  ];

  const personalProjects = [
    {
      title: "SyncUp (AI Job Platform)",
      tech: "Next.js • Node.js • AI • AWS",
      link: "https://syncup-ai-job-platform.vercel.app/",
      bgClass: "bg-[url('./assets/work-1.png')]"
    },
    {
      title: "Real-Time Chat App",
      tech: "MERN • Microservices • AWS",
      link: "https://chatfrontend-v2.vercel.app/",
      bgClass: "bg-[url('./assets/work-2.png')]"
    },
    {
      title: "PathPlus (OTT Platform)",
      tech: "React.js • React Native • Web/Mobile",
      link: "https://github.com/Engineer-BK",
      bgClass: "bg-[url('./assets/work-3.png')]"
    },
    {
      title: "Ecommerce Hub",
      tech: "MERN Full-Stack Dev",
      link: "https://ecommerce-frontend-8v2v.onrender.com/",
      bgClass: "bg-[url('./assets/work-4.png')]"
    },
    {
      title: "RecipeHub (React)",
      tech: "Recipe Management Frontend",
      link: "https://engineer-bk.github.io/RecipeHub/",
      bgClass: "bg-[url('./assets/work-1.png')]"
    },
    {
      title: "Crypto Price Tracker",
      tech: "React Price Monitoring",
      link: "https://crypto-tracker-link.com",
      bgClass: "bg-[url('./assets/work-4.png')]"
    }
  ];

  const displayedProjects = showAllProjects ? personalProjects : personalProjects.slice(0, 3);

  return (
    <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Career Journey</h4>
      <h2 className="text-center text-5xl font-Ovo mb-16">Work & Freelancing</h2>

      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        {/* Section 1: Professional Experience */}
        <div>
          <h3 className="text-2xl font-Ovo mb-6 text-gray-800 dark:text-white border-b border-gray-200 dark:border-zinc-800 pb-2 flex items-center gap-2">
            💼 Professional Experience
          </h3>
          <div className="relative border-l-2 border-gray-200 dark:border-zinc-800 pl-8 ml-4">
            {professionalExperience.map((exp, idx) => (
              <div key={idx} className="relative mb-6 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-darkTheme border-4 border-[#b820e6] dark:border-[#da7d20] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b820e6] dark:bg-[#da7d20]"></span>
                </div>

                {/* Card */}
                <div className="border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#b820e6] dark:hover:border-[#da7d20] hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white font-Outfit group-hover:text-[#b820e6] dark:group-hover:text-[#da7d20] transition-colors duration-300">
                        {exp.role}
                      </h4>
                      <p className="text-gray-600 dark:text-zinc-300 font-medium font-Ovo text-md mt-1">
                        {exp.company}
                      </p>
                      <p className="text-xs font-semibold text-[#b820e6] dark:text-[#da7d20] font-Outfit mt-1.5">
                        Project: {exp.project}
                      </p>
                    </div>
                    <div className="text-left sm:text-right font-Outfit">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300">
                        {exp.duration}
                      </span>
                      <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1.5 font-Ovo">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 dark:text-zinc-400 text-sm font-Ovo">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Freelance Projects */}
        <div>
          <h3 className="text-2xl font-Ovo mb-6 text-gray-800 dark:text-white border-b border-gray-200 dark:border-zinc-800 pb-2 flex items-center gap-2">
            🚀 Freelance Projects
          </h3>
          <div className="relative border-l-2 border-gray-200 dark:border-zinc-800 pl-8 ml-4">
            {freelanceProjects.map((proj, idx) => (
              <div key={idx} className="relative mb-6 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-darkTheme border-4 border-[#b820e6] dark:border-[#da7d20] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b820e6] dark:bg-[#da7d20]"></span>
                </div>

                {/* Card */}
                <div className="border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#b820e6] dark:hover:border-[#da7d20] hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white font-Outfit group-hover:text-[#b820e6] dark:group-hover:text-[#da7d20] transition-colors duration-300">
                        {proj.role}
                      </h4>
                      <p className="text-gray-600 dark:text-zinc-300 font-semibold font-Ovo text-md mt-1">
                        {proj.project}
                      </p>
                      <p className="text-xs font-semibold text-gray-500 dark:text-zinc-400 font-Outfit mt-1.5">
                        Tech Stack: {proj.techStack}
                      </p>
                    </div>
                    <div className="text-left sm:text-right font-Outfit">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300">
                        {proj.duration}
                      </span>
                    </div>
                  </div>

                  <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 dark:text-zinc-400 text-sm font-Ovo">
                    {proj.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Personal Projects/My latest works */}
        <div>
          <h3 className="text-2xl font-Ovo mb-6 text-gray-800 dark:text-white border-b border-gray-200 dark:border-zinc-800 pb-2 flex items-center gap-2">
            🛠️ Personal Projects/My latest works
          </h3>
          <div className="relative border-l-2 border-gray-200 dark:border-zinc-800 pl-8 ml-4">
            <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-darkTheme border-4 border-[#b820e6] dark:border-[#da7d20] flex items-center justify-center transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b820e6] dark:bg-[#da7d20]"></span>
            </div>

            {/* Grid of project cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 dark:text-black">
              {displayedProjects.map((proj, idx) => (
                <a
                  key={idx}
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block animate-fadeIn"
                >
                  <div className={`aspect-square ${proj.bgClass} bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group shadow-sm border border-gray-100 dark:border-transparent`}>
                    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900">{proj.title}</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5 font-Outfit">{proj.tech}</p>
                      </div>
                      <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                        <img src={send_icon} alt="open" className="w-5" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Expand / Show More Button */}
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-2.5 px-8 mx-auto hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover text-sm font-Outfit"
              >
                {showAllProjects ? "Show Less" : "Show More"}
                <img
                  src={right_arrow_blod}
                  alt=""
                  className={`w-3 dark:hidden transition-transform duration-300 ${
                    showAllProjects ? "-rotate-90" : "rotate-90"
                  }`}
                />
                <img
                  src={right_arrow_blod_dark}
                  alt=""
                  className={`w-3 hidden dark:block transition-transform duration-300 ${
                    showAllProjects ? "-rotate-90" : "rotate-90"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
