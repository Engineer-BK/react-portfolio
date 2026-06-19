import React from "react";
import send_icon from "../assets/send-icon.png";
import right_arrow_blod from "../assets/right-arrow-bold.png";
import right_arrow_blod_dark from "../assets/right-arrow-bold-dark.png";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">Work, Freelancing & Personal</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in development.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {/* SyncUp */}
        <a
          href="https://github.com/Engineer-BK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="aspect-square bg-[url('./assets/work-1.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold text-sm">SyncUp (AI Job Platform)</h2>
                <p className="text-xs text-gray-700 mt-0.5">Next.js • Node.js • AI • AWS</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={send_icon} alt="" className="w-5" />
              </div>
            </div>
          </div>
        </a>

        {/* Real-Time Chat App */}
        <a
          href="https://github.com/Engineer-BK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="aspect-square bg-[url('./assets/work-2.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold text-sm">Real-Time Chat App</h2>
                <p className="text-xs text-gray-700 mt-0.5">MERN • Microservices • AWS</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={send_icon} alt="" className="w-5" />
              </div>
            </div>
          </div>
        </a>

        {/* PathPlus */}
        <a
          href="https://github.com/Engineer-BK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="aspect-square bg-[url('./assets/work-3.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold text-sm">PathPlus (OTT Platform)</h2>
                <p className="text-xs text-gray-700 mt-0.5">React.js • React Native • Web/Mobile</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={send_icon} alt="" className="w-5" />
              </div>
            </div>
          </div>
        </a>

        {/* Ecommerce */}
        <a
          href="https://ecommerce-frontend-8v2v.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="aspect-square bg-[url('./assets/work-4.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold text-sm">Ecommerce Hub</h2>
                <p className="text-xs text-gray-700 mt-0.5">MERN Full-Stack Dev</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={send_icon} alt="" className="w-5" />
              </div>
            </div>
          </div>
        </a>

        {/* RecipeHub */}
        <a
          href="https://engineer-bk.github.io/RecipeHub/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="aspect-square bg-[url('./assets/work-1.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold text-sm">RecipeHub (React)</h2>
                <p className="text-xs text-gray-700 mt-0.5">Recipe Management Frontend</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={send_icon} alt="" className="w-5" />
              </div>
            </div>
          </div>
        </a>

        {/* Crypto Price Tracking App */}
        <a
          href="https://crypto-tracker-link.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="aspect-square bg-[url('./assets/work-4.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold text-sm">Crypto Price Tracker</h2>
                <p className="text-xs text-gray-700 mt-0.5">React Price Monitoring</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src={send_icon} alt="" className="w-5" />
              </div>
            </div>
          </div>
        </a>
      </div>

      <a
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500
        dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <img src={right_arrow_blod} alt="" className="w-4 dark:hidden" />
        <img
          src={right_arrow_blod_dark}
          alt=""
          className="w-4 hidden dark:block"
        />
      </a>
    </div>
  );
};

export default Work;
