import React from "react";
import user_image2 from "../assets/user-image2.png";
import circular_text from "../assets/circular-text.png";
import circular_text2 from "../assets/circular-text2.png";
import dev_icon from "../assets/dev-icon.png";
import dev_icon2 from "../assets/dev-icon2.png";
import code_icon from "../assets/code-icon.png";
import vscode from "../assets/vscode.png";
import postman from "../assets/postman-icon.png";
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
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#b820e6]/25 to-[#da7d20]/25 blur-xl opacity-75 group-hover:opacity-100 transition duration-700 -z-10 animate-pulse duration-[8000ms]"></div>
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-[#b820e6]/30 to-[#da7d20]/30 opacity-0 group-hover:opacity-100 transition duration-700 -z-10"></div>
          
          <img
            src={user_image2}
            alt="Basir Khan"
            className="w-full rounded-2xl border border-white/50 dark:border-zinc-800/80 shadow-2xl object-cover group-hover:scale-[1.01] transition-transform duration-500"
          />

          {/* Interactive Spin Badge */}
          <div className="bg-white/90 dark:bg-zinc-950/90 border border-gray-200/60 dark:border-zinc-850 w-2/5 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_10px_35px_rgba(184,32,230,0.12)] dark:shadow-[0_10px_35px_rgba(218,125,32,0.12)] flex items-center justify-center backdrop-blur-md">
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
          <p className="mb-12 font-Ovo leading-relaxed text-gray-700 dark:text-zinc-300 text-sm sm:text-base text-left border-l-2 border-gray-200 dark:border-zinc-800/80 pl-4 lg:pl-6 max-w-3xl">
            I am a <span className="font-semibold text-gray-950 dark:text-white">Software Engineer</span> and <span className="font-semibold text-[#b820e6] dark:text-[#da7d20] font-Outfit">MERN Full-Stack Developer</span> specializing in building scalable web applications and robust backend architectures. With a strong focus on modern frontend technologies, microservices architecture, and secure databases, I design highly interactive applications that integrate messaging queues, caching layers, and containerized cloud deployments.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full mb-10">
            {/* Card 1: Languages */}
            <li className="group border border-gray-200/40 dark:border-zinc-800/60 rounded-2xl p-6 bg-gradient-to-br from-white/70 to-white/30 dark:from-zinc-900/50 dark:to-zinc-950/30 backdrop-blur-md hover:-translate-y-1.5 hover:border-[#b820e6]/40 dark:hover:border-[#da7d20]/40 hover:shadow-[0_15px_30px_-10px_rgba(184,32,230,0.12)] dark:hover:shadow-[0_15px_30px_-10px_rgba(218,125,32,0.12)] transition-all duration-500 flex flex-col justify-start">
              <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200/60 dark:border-zinc-800/80 flex items-center justify-center text-gray-750 dark:text-zinc-300 group-hover:bg-gradient-to-tr group-hover:from-[#b820e6] group-hover:to-[#da7d20] group-hover:text-white group-hover:border-transparent transition-all duration-500 mb-4 shrink-0 shadow-sm">
                <svg className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-zinc-100 font-Outfit text-base mb-2 group-hover:text-[#b820e6] dark:group-hover:text-[#da7d20] transition-colors duration-300">
                Languages
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 text-xs sm:text-sm font-Outfit leading-relaxed">
                JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL
              </p>
            </li>

            {/* Card 2: Databases */}
            <li className="group border border-gray-200/40 dark:border-zinc-800/60 rounded-2xl p-6 bg-gradient-to-br from-white/70 to-white/30 dark:from-zinc-900/50 dark:to-zinc-950/30 backdrop-blur-md hover:-translate-y-1.5 hover:border-[#b820e6]/40 dark:hover:border-[#da7d20]/40 hover:shadow-[0_15px_30px_-10px_rgba(184,32,230,0.12)] dark:hover:shadow-[0_15px_30px_-10px_rgba(218,125,32,0.12)] transition-all duration-500 flex flex-col justify-start">
              <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200/60 dark:border-zinc-800/80 flex items-center justify-center text-gray-750 dark:text-zinc-300 group-hover:bg-gradient-to-tr group-hover:from-[#b820e6] group-hover:to-[#da7d20] group-hover:text-white group-hover:border-transparent transition-all duration-500 mb-4 shrink-0 shadow-sm">
                <svg className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-zinc-100 font-Outfit text-base mb-2 group-hover:text-[#b820e6] dark:group-hover:text-[#da7d20] transition-colors duration-300">
                Databases
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 text-xs sm:text-sm font-Outfit leading-relaxed">
                MongoDB, MongoDB Atlas, PostgreSQL, MySQL
              </p>
            </li>

            {/* Card 3: Frameworks & Tools */}
            <li className="group border border-gray-200/40 dark:border-zinc-800/60 rounded-2xl p-6 bg-gradient-to-br from-white/70 to-white/30 dark:from-zinc-900/50 dark:to-zinc-950/30 backdrop-blur-md hover:-translate-y-1.5 hover:border-[#b820e6]/40 dark:hover:border-[#da7d20]/40 hover:shadow-[0_15px_30px_-10px_rgba(184,32,230,0.12)] dark:hover:shadow-[0_15px_30px_-10px_rgba(218,125,32,0.12)] transition-all duration-500 flex flex-col justify-start">
              <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200/60 dark:border-zinc-800/80 flex items-center justify-center text-gray-750 dark:text-zinc-300 group-hover:bg-gradient-to-tr group-hover:from-[#b820e6] group-hover:to-[#da7d20] group-hover:text-white group-hover:border-transparent transition-all duration-500 mb-4 shrink-0 shadow-sm">
                <svg className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-zinc-100 font-Outfit text-base mb-2 group-hover:text-[#b820e6] dark:group-hover:text-[#da7d20] transition-colors duration-300">
                Frameworks & Tools
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 text-xs sm:text-sm font-Outfit leading-relaxed">
                React.js, Next.js, Node.js, Express.js, React Native, Tailwind CSS, Material UI, Kafka (KRaft), RabbitMQ, Redis, AWS (EC2, S3), Docker, Kubernetes, Git, Postman
              </p>
            </li>

            {/* Card 4: Projects Summary */}
            <li className="group border border-gray-200/40 dark:border-zinc-800/60 rounded-2xl p-6 bg-gradient-to-br from-white/70 to-white/30 dark:from-zinc-900/50 dark:to-zinc-950/30 backdrop-blur-md hover:-translate-y-1.5 hover:border-[#b820e6]/40 dark:hover:border-[#da7d20]/40 hover:shadow-[0_15px_30px_-10px_rgba(184,32,230,0.12)] dark:hover:shadow-[0_15px_30px_-10px_rgba(218,125,32,0.12)] transition-all duration-500 flex flex-col justify-start">
              <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200/60 dark:border-zinc-800/80 flex items-center justify-center text-gray-750 dark:text-zinc-300 group-hover:bg-gradient-to-tr group-hover:from-[#b820e6] group-hover:to-[#da7d20] group-hover:text-white group-hover:border-transparent transition-all duration-500 mb-4 shrink-0 shadow-sm">
                <svg className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-zinc-100 font-Outfit text-base mb-2 group-hover:text-[#b820e6] dark:group-hover:text-[#da7d20] transition-colors duration-300">
                Projects
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 text-xs sm:text-sm font-Outfit leading-relaxed">
                Built 5+ comprehensive full-stack projects using microservices, REST APIs, GraphQL, WebSockets, JWT, OAuth 2.0, and RBAC security.
              </p>
            </li>

            {/* Card 5: Education (Full-width card) */}
            <li className="group border border-gray-200/40 dark:border-zinc-800/60 rounded-2xl p-6 bg-gradient-to-br from-white/70 to-white/30 dark:from-zinc-900/50 dark:to-zinc-950/30 backdrop-blur-md hover:-translate-y-1.5 hover:border-[#b820e6]/40 dark:hover:border-[#da7d20]/40 hover:shadow-[0_15px_30px_-10px_rgba(184,32,230,0.12)] dark:hover:shadow-[0_15px_30px_-10px_rgba(218,125,32,0.12)] transition-all duration-500 flex flex-col justify-start col-span-1 sm:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200/60 dark:border-zinc-800/80 flex items-center justify-center text-gray-750 dark:text-zinc-300 group-hover:bg-gradient-to-tr group-hover:from-[#b820e6] group-hover:to-[#da7d20] group-hover:text-white group-hover:border-transparent transition-all duration-500 mb-4 shrink-0 shadow-sm">
                <svg className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-zinc-100 font-Outfit text-base mb-2 group-hover:text-[#b820e6] dark:group-hover:text-[#da7d20] transition-colors duration-300">
                Education
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-zinc-400 text-xs sm:text-sm font-Outfit">
                <p className="leading-relaxed">
                  • <span className="font-semibold text-gray-800 dark:text-zinc-200">B.Tech in Computer Science and Engineering</span> — SET, Nagaland University (2023)
                </p>
                <p className="leading-relaxed">
                  • <span className="font-semibold text-gray-800 dark:text-zinc-200">Higher Secondary Science (PCMB)</span> — Ajmal College (2018)
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
