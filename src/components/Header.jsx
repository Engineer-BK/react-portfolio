import React from "react";
import profile_img from "../assets/profile-img.png";
import profile_img2 from "../assets/profile-img2.png";
import hand from "../assets/hand-icon.png";

import right_arrow_white from "../assets/right-arrow-white.png";
import download_icon from "../assets/download-icon.png";
import resume from "/Bachir_Khan_MERN_Developer_1Year_US_project_19-06-2026.pdf";

const Header = () => {
  return (
    <div className="w-10/12 max-w-3xl text-center mx-auto min-h-screen pt-10 flex flex-col items-center justify-center gap-4">
      <img src={profile_img2} alt="" className="rounded-full w-32 mt-8" />
      <h3 className="flex items-end gap-2 text-2xl md:text-3xl mb-1 font-Ovo">
        Hi! I'm Basir Khan
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[50px] font-Ovo">
        Software Engineer | MERN Full-Stack Developer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Dynamic Software Developer specializing in MERN Full-Stack technologies,
        creating innovative solutions that blend front-end elegance with robust
        back-end functionality.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          contact me <img src={right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href={resume}
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume <img src={download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
