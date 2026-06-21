import React, { useEffect, useState } from "react";
import right_arrow_white from "../assets/right-arrow-white.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const hCaptcha = event.target.querySelector(
      "textarea[name=h-captcha-response]"
    ).value;
    if (!hCaptcha) {
      event.preventDefault();
      setResult("Please fill out captcha field");
      return;
    }
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Dynamically set subject line to include sender's name
    const senderName = formData.get("name") || "Anonymous";
    formData.set("subject", `${senderName} - New form Submission`);

    // ----- Enter your Web3 Forms Access key below---------

    formData.append("access_key", "b40cc700-9d9f-4043-831c-3c9737f7d30d");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  function CaptchaLoader() {
    const captchadiv = document.querySelectorAll('[data-captcha="true"]');
    if (captchadiv.length) {
      let lang = null;
      let onload = null;
      let render = null;

      captchadiv.forEach(function (item) {
        const sitekey = item.dataset.sitekey;
        lang = item.dataset.lang;
        onload = item.dataset.onload;
        render = item.dataset.render;

        if (!sitekey) {
          item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
        }
      });

      let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
      if (lang) {
        scriptSrc += `&hl=${lang}`;
      }
      if (onload) {
        scriptSrc += `&onload=${onload}`;
      }
      if (render) {
        scriptSrc += `&render=${render}`;
      }

      var script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = scriptSrc;
      document.body.appendChild(script);
    }
  }

  useEffect(() => {
    CaptchaLoader();
  }, []);
  return (
    <div
      id="contact"
      className="w-full px-[8%] sm:px-[12%] py-12 sm:py-16 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none relative overflow-hidden select-none"
    >
      {/* Decorative background glows */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#b820e6]/5 dark:bg-[#b820e6]/2 rounded-full blur-[100px] -z-10 animate-pulse duration-[7000ms]"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#da7d20]/5 dark:bg-[#da7d20]/2 rounded-full blur-[100px] -z-10 animate-pulse duration-[7000ms]"></div>

      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-500 dark:text-zinc-400">Connect with me</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo tracking-tight">Get in touch</h2>
      <p className="text-center max-w-xl mx-auto mt-3 mb-10 font-Ovo text-sm sm:text-base text-gray-600 dark:text-zinc-300 leading-relaxed">
        I'd love to hear from you! If you have any projects, questions, or opportunities you'd like to discuss, feel free to drop a message.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto group">
        <input
          type="hidden"
          name="subject"
          value="New Portfolio Form Submission"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-10 mb-6">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-4 outline-none border border-gray-200/50 dark:border-zinc-800/80 rounded-2xl bg-white/40 dark:bg-zinc-900/30 backdrop-blur-md text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 transition-all duration-300 focus:border-[#b820e6] dark:focus:border-[#da7d20] focus:ring-1 focus:ring-[#b820e6]/20 dark:focus:ring-[#da7d20]/20 font-Outfit text-sm"
            required
            name="name"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 outline-none border border-gray-200/50 dark:border-zinc-800/80 rounded-2xl bg-white/40 dark:bg-zinc-900/30 backdrop-blur-md text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 transition-all duration-300 focus:border-[#b820e6] dark:focus:border-[#da7d20] focus:ring-1 focus:ring-[#b820e6]/20 dark:focus:ring-[#da7d20]/20 font-Outfit text-sm"
            required
            name="email"
          />
        </div>
        
        <textarea
          rows="6"
          placeholder="Enter your message"
          className="w-full p-4 outline-none border border-gray-200/50 dark:border-zinc-800/80 rounded-2xl bg-white/40 dark:bg-zinc-900/30 backdrop-blur-md text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 transition-all duration-300 focus:border-[#b820e6] dark:focus:border-[#da7d20] focus:ring-1 focus:ring-[#b820e6]/20 dark:focus:ring-[#da7d20]/20 font-Outfit text-sm mb-6"
          required
          name="message"
        ></textarea>
        
        <div className="h-captcha mb-6 max-w-full flex justify-center" data-captcha="true"></div>
        
        <button
          type="submit"
          className="py-3.5 px-10 w-full sm:w-max flex items-center justify-center gap-2 bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white rounded-full mx-auto hover:shadow-[0_8px_25px_-5px_rgba(184,32,230,0.4)] dark:hover:shadow-[0_8px_25px_-5px_rgba(218,125,32,0.4)] transition-all duration-300 hover:-translate-y-0.5 text-sm font-semibold font-Outfit cursor-pointer"
        >
          Submit Now
          <svg className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        
        {result && (
          <div className="mt-6 text-center">
            <p className={`text-sm font-Outfit font-semibold transition-all duration-300 ${
              result.toLowerCase().includes("please") || result.toLowerCase().includes("error")
                ? "text-red-500 dark:text-red-400" 
                : result.toLowerCase().includes("send")
                ? "text-[#b820e6] dark:text-[#da7d20] animate-pulse"
                : "text-green-500 dark:text-green-400"
            }`}>
              {result}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
