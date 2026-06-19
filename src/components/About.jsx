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
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img
            src={user_image2}
            alt=""
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />

          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <img
              src={circular_text2}
              alt=""
              className="w-full animate-spin_slow"
            />
            <img
              src={dev_icon2}
              alt=""
              className="w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo leading-relaxed text-gray-700 dark:text-white/80">
            I am a Software Engineer and MERN Full-Stack Developer specializing in building scalable web applications and robust backend architectures. With a strong focus on modern frontend technologies, microservices architecture, and secure databases, I design highly interactive applications that integrate messaging queues, caching layers, and containerized cloud deployments.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
            {/* Box 1: Languages */}
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <img src={code_icon} alt="" className="w-7 mt-3 dark:hidden" />
              <img
                src={code_icon_dark}
                alt=""
                className="w-7 mt-3 hidden dark:block"
              />
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Languages
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80 font-Outfit">
                JavaScript (ES6+), TypeScript, HTML5, CSS3, SQL
              </p>
            </li>

            {/* Box 2: Databases */}
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <svg
                className="w-7 h-7 mt-3 text-gray-700 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Databases
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80 font-Outfit">
                MongoDB, MongoDB Atlas, PostgreSQL, MySQL
              </p>
            </li>

            {/* Box 3: Frameworks & Tools */}
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <svg
                className="w-7 h-7 mt-3 text-gray-700 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Frameworks & Tools
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80 font-Outfit">
                React.js, Next.js, Node.js, Express.js, React Native, Tailwind CSS, Material UI, Kafka (KRaft), RabbitMQ, Redis, AWS (EC2, S3), Docker, Kubernetes, Git, Postman
              </p>
            </li>

            {/* Box 4: Projects */}
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <img src={project_icon} alt="" className="w-7 mt-3 dark:hidden" />
              <img
                src={project_icon_dark}
                alt=""
                className="w-7 mt-3 hidden dark:block"
              />
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Projects
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80 font-Outfit">
                Built 5+ comprehensive full-stack projects using microservices, REST APIs, GraphQL, WebSockets, JWT, OAuth 2.0, and RBAC security.
              </p>
            </li>

            {/* Box 5: Education */}
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 col-span-1 sm:col-span-2">
              <img src={edu_icon} alt="" className="w-7 mt-3 dark:hidden" />
              <img
                src={edu_icon_dark}
                alt=""
                className="w-7 mt-3 hidden dark:block"
              />
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Education
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80 font-Outfit">
                • B.Tech in Computer Science and Engineering — SET, Nagaland University (2023)
              </p>
              <p className="text-gray-600 text-sm dark:text-white/80 font-Outfit mt-1">
                • Higher Secondary Science (PCMB) — Ajmal College (2018)
              </p>
            </li>
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
            Tools i use
          </h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={vscode} alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={mongodb} alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={postman} alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={docker} alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={kubernetes} alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={git} alt="" className="w-5 sm:w-7" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
