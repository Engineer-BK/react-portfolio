import React from "react";
import profile_img2 from "../assets/profile-img2.png";
import right_arrow_white from "../assets/right-arrow-white.png";
import download_icon from "../assets/download-icon.png";
import resume from "/Bachir_Khan_MERN_Developer_1Year_US_project_19-06-2026.pdf";

const Header = () => {
  return (
    <div className="w-11/12 max-w-4xl text-center mx-auto min-h-[75vh] sm:min-h-[80vh] pt-24 pb-8 flex flex-col items-center justify-center gap-6 relative select-none">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-[#b820e6]/10 to-[#da7d20]/10 rounded-full blur-3xl -z-10 animate-pulse duration-[6000ms]"></div>
      
      {/* Avatar Container with glowing ring */}
      <div className="relative group p-1 border border-gray-200/40 dark:border-zinc-800/80 bg-white/10 dark:bg-zinc-950/10 backdrop-blur-md rounded-full shadow-[0_10px_40px_-10px_rgba(184,32,230,0.15)] dark:shadow-[0_10px_40px_-10px_rgba(218,125,32,0.15)] hover:shadow-[0_10px_45px_-5px_rgba(184,32,230,0.25)] dark:hover:shadow-[0_10px_45px_-5px_rgba(218,125,32,0.25)] transition-all duration-500 hover:scale-105">
        <img 
          src={profile_img2} 
          alt="Basir Khan" 
          className="rounded-full w-28 h-28 sm:w-36 sm:h-36 object-cover" 
        />
        <div className="absolute inset-0 rounded-full border border-dashed border-[#b820e6]/40 dark:border-[#da7d20]/40 group-hover:rotate-45 transition-transform duration-1000 -z-10"></div>
      </div>

      {/* Greeting tag */}
      <div className="px-4 py-1.5 rounded-full border border-gray-200/60 dark:border-zinc-800/60 bg-white/30 dark:bg-zinc-900/30 backdrop-blur-md shadow-sm">
        <h3 className="flex items-center gap-2 text-sm sm:text-base font-Outfit font-semibold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
          Hi! I'm Basir Khan
          <span className="animate-bounce">👋</span>
        </h3>
      </div>

      {/* Hero Headline with color gradient */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-Ovo tracking-tight leading-[1.15] max-w-3xl">
        Software Engineer &{" "}
        <span className="bg-gradient-to-r from-[#b820e6] via-[#d55282] to-[#da7d20] dark:from-[#da7d20] dark:via-[#e06742] dark:to-[#b820e6] bg-clip-text text-transparent font-Outfit font-bold">
          MERN Full-Stack
        </span>{" "}
        Developer
      </h1>

      {/* Description */}
      <p className="max-w-xl mx-auto font-Ovo text-sm sm:text-base text-gray-600 dark:text-zinc-300 leading-relaxed">
        Dynamic Software Engineer specializing in MERN stack architecture,
        delivering luxury-grade web applications that seamlessly blend elegant user interfaces
        with robust, scalable backend services.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto px-6">
        <a
          href="#contact"
          className="w-full sm:w-auto px-8 py-3.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center justify-center gap-2 border-transparent hover:shadow-[0_8px_25px_-5px_rgba(184,32,230,0.4)] dark:hover:shadow-[0_8px_25px_-5px_rgba(218,125,32,0.4)] transition-all duration-300 hover:-translate-y-0.5 text-sm font-semibold font-Outfit"
        >
          Contact Me <img src={right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href={resume}
          download
          className="w-full sm:w-auto px-8 py-3.5 border border-gray-300 dark:border-zinc-800 rounded-full flex items-center justify-center gap-2 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md text-gray-700 dark:text-zinc-200 hover:bg-white/70 dark:hover:bg-zinc-900/70 transition-all duration-300 hover:-translate-y-0.5 text-sm font-semibold font-Outfit"
        >
          My Resume <img src={download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
