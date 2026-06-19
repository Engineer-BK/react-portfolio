import React, { useState } from "react";
import send_icon from "../assets/send-icon.png";
import right_arrow_blod from "../assets/right-arrow-bold.png";
import right_arrow_blod_dark from "../assets/right-arrow-bold-dark.png";

const Experience = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

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
      tech: "Next.js • Node.js • Groq AI • AWS • PostgreSQL • Redis",
      link: "https://syncup-ai-job-platform.vercel.app/",
      category: "Personal",
      bgClass: "bg-[url('./assets/syncup.png')]"
    },
    {
      title: "Real-Time Chat App",
      tech: "React • Node.js • Microservices • Socket.IO • AWS • Docker",
      link: "https://chatfrontend-v2.vercel.app/",
      category: "Personal",
      bgClass: "bg-[url('./assets/chatapp.png')]"
    },
    {
      title: "PathPlus (OTT Platform)",
      tech: "React.js • React Native • Web/Mobile • Rest API",
      link: "https://github.com/Engineer-BK",
      category: "Work",
      bgClass: "bg-[url('./assets/pathplus.png')]"
    },
    {
      title: "The Sylheti Archive",
      tech: "Next.js 15 • React 19 • PostgreSQL • Prisma • Redis • Tailwind",
      link: "https://github.com/Engineer-BK",
      category: "Freelance",
      bgClass: "bg-[url('./assets/thesylhetiarchive.png')]"
    },
    {
      title: "Ecommerce Hub",
      tech: "React • Node.js • Express • MongoDB • Tailwind",
      link: "https://ecommerce-frontend-8v2v.onrender.com/",
      category: "Personal",
      bgClass: "bg-[url('./assets/ecommerce.png')]"
    },
    {
      title: "RecipeHub (React)",
      tech: "React • Tailwind CSS • REST API • Responsive",
      link: "https://engineer-bk.github.io/RecipeHub/",
      category: "Personal",
      bgClass: "bg-[url('./assets/recipehub.png')]"
    },
    {
      title: "Crypto Price Tracker",
      tech: "React • Chart.js • Crypto API • Dashboard",
      link: "https://crypto-tracker-link.com",
      category: "Personal",
      bgClass: "bg-[url('./assets/default-project.png')]"
    }
  ];

  const tabs = ["All", "Work", "Freelance", "Personal"];

  const filteredProjects = personalProjects.filter((proj) => {
    if (activeTab === "All") return true;
    return proj.category.toLowerCase() === activeTab.toLowerCase();
  });

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 4);

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

        {/* Section 3: All Projects(Personal, Work & Free Launching) */}
        <div>
          <h3 className="text-2xl font-Ovo mb-6 text-gray-800 dark:text-white border-b border-gray-200 dark:border-zinc-800 pb-2 flex items-center gap-2">
            📂 All Projects(Personal, Work & Free Launching)
          </h3>
          <div className="relative border-l-2 border-gray-200 dark:border-zinc-800 pl-8 ml-4">
            <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-darkTheme border-4 border-[#b820e6] dark:border-[#da7d20] flex items-center justify-center transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b820e6] dark:bg-[#da7d20]"></span>
            </div>

            {/* Subsection Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-8 font-Outfit">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setShowAllProjects(false);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-[#b820e6] dark:bg-[#da7d20] text-white border-transparent shadow-[0_2px_10px_rgba(184,32,230,0.15)] dark:shadow-[0_2px_10px_rgba(218,125,32,0.15)]"
                      : "bg-white/50 dark:bg-zinc-900/50 text-gray-600 dark:text-zinc-400 border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Grid of project cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayedProjects.map((proj, idx) => {
                const tags = proj.tech.split(/•|·|\*/).map(t => t.trim()).filter(Boolean);
                let displayUrl = 'project.live';
                try {
                  displayUrl = new URL(proj.link).hostname;
                } catch (_) {}

                return (
                  <a
                    key={idx}
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block animate-fadeIn"
                  >
                    <div className="overflow-hidden border border-gray-200/80 dark:border-zinc-800/80 rounded-2xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md transition-all duration-500 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 hover:border-[#b820e6]/30 dark:hover:border-[#da7d20]/30 flex flex-col h-full">
                      {/* Browser Mockup Header */}
                      <div className="px-4 py-2.5 bg-gray-50/80 dark:bg-zinc-950/80 border-b border-gray-200/50 dark:border-zinc-900/80 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-400"></span>
                          <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                          <span className="w-2 h-2 rounded-full bg-green-400"></span>
                        </div>
                        <span className="text-[10px] text-gray-400 dark:text-zinc-500 font-Outfit">
                          {displayUrl}
                        </span>
                        <div className="w-8"></div>
                      </div>

                      {/* Image Preview Container */}
                      <div className="h-44 sm:h-48 overflow-hidden relative bg-gray-100 dark:bg-zinc-950 flex items-center justify-center p-3">
                        <div 
                          className={`w-full h-full bg-no-repeat bg-cover bg-center rounded-lg shadow-sm border border-gray-200/40 dark:border-zinc-800/50 transition-all duration-700 group-hover:scale-[1.03] group-hover:-translate-y-0.5 ${proj.bgClass}`}
                        ></div>
                      </div>

                      {/* Info & Content */}
                      <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-semibold text-base text-gray-950 dark:text-white font-Outfit group-hover:text-[#b820e6] dark:group-hover:text-[#da7d20] transition-colors duration-300">
                              {proj.title}
                            </h4>
                            <span className="shrink-0 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 rounded border border-gray-200/40 dark:border-zinc-700/40">
                              {proj.category}
                            </span>
                          </div>
                          
                          {/* Modern Pill Tags */}
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {tags.map((tag, tIdx) => (
                              <span 
                                key={tIdx} 
                                className="px-2.5 py-0.5 text-[10px] font-semibold bg-gray-100 dark:bg-zinc-800/80 text-gray-600 dark:text-zinc-300 rounded-full font-Outfit border border-gray-200/20 dark:border-zinc-700/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Minimalist Link Trigger */}
                        <div className="flex items-center justify-between border-t border-gray-100 dark:border-zinc-800/80 pt-3 mt-1">
                          <span className="text-xs text-gray-500 dark:text-zinc-400 font-Outfit group-hover:text-[#b820e6] dark:group-hover:text-[#da7d20] transition-colors duration-300 flex items-center gap-1">
                            Visit Site 
                          </span>
                          <div className="w-8 h-8 rounded-full border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-gray-600 dark:text-zinc-400 group-hover:bg-[#b820e6] dark:group-hover:bg-[#da7d20] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Expand / Show More Button */}
            {filteredProjects.length > 4 && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
