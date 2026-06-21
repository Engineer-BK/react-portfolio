import React, { useState } from "react";
import logo2 from "../assets/logo2.png";
import logo_dark2 from "../assets/logo_dark2.png";
import mail_icon from "../assets/mail_icon.png";
import mail_icon_dark from "../assets/mail_icon_dark.png";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bachirak47@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <footer className="mt-12 font-Outfit pb-12">
      <div className="text-center flex flex-col items-center gap-4">
        {/* Logo with hover effect */}
        <div className="transition-all duration-300 hover:scale-105 cursor-pointer">
          <img src={logo2} alt="Logo" className="w-36 mx-auto dark:hidden" />
          <img
            src={logo_dark2}
            alt="Logo"
            className="w-36 mx-auto hidden dark:block"
          />
        </div>

        {/* Email Copyable Element */}
        <div 
          onClick={handleCopyEmail}
          className="group relative cursor-pointer flex items-center gap-2.5 px-5 py-2 rounded-full border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:border-[#b820e6] dark:hover:border-[#da7d20] hover:shadow-lg hover:shadow-[#b820e6]/5"
        >
          <img src={mail_icon} alt="Email" className="w-5 dark:hidden transition-transform duration-300 group-hover:scale-110" />
          <img src={mail_icon_dark} alt="Email" className="w-5 hidden dark:block transition-transform duration-300 group-hover:scale-110" />
          <span className="text-gray-700 dark:text-gray-300 text-sm font-Ovo transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">
            bachirak47@gmail.com
          </span>
          
          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs text-white bg-black/90 dark:bg-zinc-800 dark:text-zinc-100 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
            {copied ? "Copied!" : "Click to copy email"}
          </span>
        </div>
      </div>

      {/* Gradient divider line */}
      <div className="w-10/12 mx-auto h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-zinc-800 to-transparent my-6"></div>

      {/* Bottom section */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-500 dark:text-zinc-400 text-sm font-Ovo text-center md:text-left">
          © {new Date().getFullYear()} Basir Khan. All rights reserved.
        </p>
        
        <ul className="flex items-center gap-8 justify-center">
          <li>
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://github.com/Engineer-BK"
              className="relative text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 text-sm font-Ovo py-1 group"
            >
              GitHub
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#b820e6] to-[#da7d20] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/bachirkhan/"
              className="relative text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors duration-300 text-sm font-Ovo py-1 group"
            >
              LinkedIn
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#b820e6] to-[#da7d20] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
