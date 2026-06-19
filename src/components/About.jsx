import React from "react";
import user_image2 from "../assets/user-image2.png";
import circular_text from "../assets/circular-text.png";
import circular_text2 from "../assets/circular-text2.png";
import dev_icon from "../assets/dev-icon.png";
import dev_icon2 from "../assets/dev-icon2.png";
import code_icon from "../assets/code-icon.png";
import code_icon_dark from "../assets/code-icon-dark.png";
import edu_icon from "../assets/edu-icon.png";
import edu_icon_dark from "../assets/edu-icon-dark.png";
import project_icon from "../assets/project-icon.png";
import project_icon_dark from "../assets/project-icon-dark.png";
import vscode from "../assets/vscode.png";
import node from "../assets/node.png";
import postman from "../assets/postman-icon.png";
import figma from "../assets/figma.png";
import docker from "../assets/docker-logo.png";
import git from "../assets/git.png";
import mongodb from "../assets/mongodb.png";
import kubernetes from "../assets/kubernetes-logo.png";

const About = () => {
  return (
    <div id="about" className="w-full px-[8%] sm:px-[12%] py-16 sm:py-24 scroll-mt-20 relative select-none overflow-hidden">
      {/* Ambient decorative lighting */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#b820e6]/5 dark:bg-[#b820e6]/3 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#da7d20]/5 dark:bg-[#da7d20]/3 rounded-full blur-[100px] -z-10"></div>

      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-500 dark:text-zinc-400">Introduction</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo tracking-tight mb-16">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
        {/* Profile Image & Rotating Badge Container */}
        <div className="w-64 sm:w-80 shrink-0 relative group">
          {/* Subtle glow halo around image */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#b820e6]/20 to-[#da7d20]/20 blur-lg opacity-75 group-hover:opacity-100 transition duration-500 -z-10"></div>
          
          <img
            src={user_image2}
            alt="Basir Khan"
            className="w-full rounded-2xl border border-gray-200/50 dark:border-zinc-800/80 shadow-lg object-cover group-hover:scale-[1.01] transition-transform duration-500"
          />

          {/* Interactive Spin Badge */}
          <div className="bg-white/90 dark:bg-zinc-950/90 border border-gray-200/60 dark:border-zinc-800/80 w-2/5 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_10px_35px_rgba(184,32,230,0.1)] dark:shadow-[0_10px_35px_rgba(218,125,32,0.1)] flex items-center justify-center backdrop-blur-sm">
            {/* Light Mode Spin Badge */}
            <img
              src={circular_text}
              alt=""
              className="w-full animate-spin_slow dark:hidden block"
            />
            {/* Dark Mode Spin Badge */}
            <img
              src={circular_text2}
              alt=""
              className="w-full animate-spin_slow dark:block hidden"
            />
            
            {/* Light Mode Dev Icon */}
            <img
              src={dev_icon}
              alt=""
              className="w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:hidden block"
            />
            {/* Dark Mode Dev Icon */}
            <img
              src={dev_icon2}
              alt=""
              className="w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:block hidden"
            />
          </div>
        </div>

        {/* Biography & Dynamic Category Cards */}
        <div className="flex-1 w-full">
          <p className="mb-10 font-Ovo leading-relaxed text-gray-700 dark:text-zinc-300 text-sm sm:text-base text-center lg:text-left">
            I am a Software Engineer and MERN Full-Stack Developer specializing in building scalable web applications and robust backend architectures. With a strong focus on modern frontend technologies, microservices architecture, and secure databases, I design highly interactive applications that integrate messaging queues, caching layers, and containerized cloud deployments.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full mb-10">
            {/* Card 1: Languages */}
            <li className="border border-gray-200/60 dark:border-zinc-800/80 rounded-2xl p-6 bg-white/20 dark:bg-zinc-900/20 backdrop-blur-md hover:-translate-y-1 hover:border-[#b820e6]/50 dark:hover:border-[#da7d20]/50 hover:shadow-[0_10px_30px_-15px_rgba(184,32,230,0.15)] dark:hover:shadow-[0_10px_30px_-15px_rgba(218,125,32,0.15)] transition-all duration-300 flex flex-col justify-start">
              <img src={code_icon} alt="" className="w-7 mb-4 dark:hidden block" />
              <img src={code_icon_dark} alt="" className="w-7 mb-4 dark:block hidden" />
              <h3 className="font-semibold text-gray-800 dark:text-white font-Outfit text-lg mb-2">
                Languages
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 text-xs sm:text-sm font-Outfit leading-relaxed">
                JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL
              </p>
            </li>

            {/* Card 2: Databases */}
            <li className="border border-gray-200/60 dark:border-zinc-800/80 rounded-2xl p-6 bg-white/20 dark:bg-zinc-900/20 backdrop-blur-md hover:-translate-y-1 hover:border-[#b820e6]/50 dark:hover:border-[#da7d20]/50 hover:shadow-[0_10px_30px_-15px_rgba(184,32,230,0.15)] dark:hover:shadow-[0_10px_30px_-15px_rgba(218,125,32,0.15)] transition-all duration-300 flex flex-col justify-start">
              <div className="w-7 h-7 mb-4 flex items-center justify-center text-gray-700 dark:text-zinc-300">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white font-Outfit text-lg mb-2">
                Databases
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 text-xs sm:text-sm font-Outfit leading-relaxed">
                MongoDB, MongoDB Atlas, PostgreSQL, MySQL
              </p>
            </li>

            {/* Card 3: Frameworks & Tools */}
            <li className="border border-gray-200/60 dark:border-zinc-800/80 rounded-2xl p-6 bg-white/20 dark:bg-zinc-900/20 backdrop-blur-md hover:-translate-y-1 hover:border-[#b820e6]/50 dark:hover:border-[#da7d20]/50 hover:shadow-[0_10px_30px_-15px_rgba(184,32,230,0.15)] dark:hover:shadow-[0_10px_30px_-15px_rgba(218,125,32,0.15)] transition-all duration-300 flex flex-col justify-start">
              <div className="w-7 h-7 mb-4 flex items-center justify-center text-gray-700 dark:text-zinc-300">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white font-Outfit text-lg mb-2">
                Frameworks & Tools
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 text-xs sm:text-sm font-Outfit leading-relaxed">
                React.js, Next.js, Node.js, Express.js, React Native, Tailwind CSS, Material UI, Kafka (KRaft), RabbitMQ, Redis, AWS (EC2, S3), Docker, Kubernetes, Git, Postman
              </p>
            </li>

            {/* Card 4: Projects Summary */}
            <li className="border border-gray-200/60 dark:border-zinc-800/80 rounded-2xl p-6 bg-white/20 dark:bg-zinc-900/20 backdrop-blur-md hover:-translate-y-1 hover:border-[#b820e6]/50 dark:hover:border-[#da7d20]/50 hover:shadow-[0_10px_30px_-15px_rgba(184,32,230,0.15)] dark:hover:shadow-[0_10px_30px_-15px_rgba(218,125,32,0.15)] transition-all duration-300 flex flex-col justify-start">
              <img src={project_icon} alt="" className="w-7 mb-4 dark:hidden block" />
              <img src={project_icon_dark} alt="" className="w-7 mb-4 dark:block hidden" />
              <h3 className="font-semibold text-gray-800 dark:text-white font-Outfit text-lg mb-2">
                Projects
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 text-xs sm:text-sm font-Outfit leading-relaxed">
                Built 5+ comprehensive full-stack projects using microservices, REST APIs, GraphQL, WebSockets, JWT, OAuth 2.0, and RBAC security.
              </p>
            </li>

            {/* Card 5: Education (Full-width card) */}
            <li className="border border-gray-200/60 dark:border-zinc-800/80 rounded-2xl p-6 bg-white/20 dark:bg-zinc-900/20 backdrop-blur-md hover:-translate-y-1 hover:border-[#b820e6]/50 dark:hover:border-[#da7d20]/50 hover:shadow-[0_10px_30px_-15px_rgba(184,32,230,0.15)] dark:hover:shadow-[0_10px_30px_-15px_rgba(218,125,32,0.15)] transition-all duration-300 flex flex-col justify-start col-span-1 sm:col-span-2">
              <img src={edu_icon} alt="" className="w-7 mb-4 dark:hidden block" />
              <img src={edu_icon_dark} alt="" className="w-7 mb-4 dark:block hidden" />
              <h3 className="font-semibold text-gray-800 dark:text-white font-Outfit text-lg mb-2">
                Education
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-zinc-400 text-xs sm:text-sm font-Outfit">
                <p className="leading-relaxed">
                  • <span className="font-semibold text-gray-850 dark:text-zinc-200">B.Tech in Computer Science and Engineering</span> — SET, Nagaland University (2023)
                </p>
                <p className="leading-relaxed">
                  • <span className="font-semibold text-gray-850 dark:text-zinc-200">Higher Secondary Science (PCMB)</span> — Ajmal College (2018)
                </p>
              </div>
            </li>
          </ul>

          {/* Tools Grid */}
          <h4 className="my-6 text-gray-800 dark:text-zinc-200 font-Outfit font-semibold text-lg text-center lg:text-left">
            Tools I Use
          </h4>

          <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            {[
              { img: vscode, name: "VS Code" },
              { img: mongodb, name: "MongoDB" },
              { img: postman, name: "Postman" },
              { img: docker, name: "Docker" },
              { img: kubernetes, name: "Kubernetes" },
              { img: git, name: "Git" }
            ].map((tool, tIdx) => (
              <li 
                key={tIdx} 
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gray-200/50 dark:border-zinc-800/80 bg-white/30 dark:bg-zinc-900/30 backdrop-blur-md rounded-2xl cursor-pointer hover:-translate-y-1 hover:border-[#b820e6] dark:hover:border-[#da7d20] hover:shadow-[0_8px_20px_-6px_rgba(184,32,230,0.2)] dark:hover:shadow-[0_8px_20px_-6px_rgba(218,125,32,0.2)] transition-all duration-300"
                title={tool.name}
              >
                <img src={tool.img} alt={tool.name} className="w-5 sm:w-7 h-auto" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
