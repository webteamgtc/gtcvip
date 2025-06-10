import React from "react";
import LiveAccountButton from "../liveAccountButton";
import ContactFrom from "../contactUs/ContactFrom";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section
      id="home"
      className="hero-banner pt-10 md:pt-20 lg:pt-24 2xl:pt-28 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12 text-center md:text-left min-h-[450px]">
          
          {/* Left Column - 70% width (8/12) */}
          <div className="md:col-span-7 content text-center md:text-left pt-10">
            <h1 className="text-2xl lg:text-[2.5rem] font-[500] 2xl:text-[30px] 3xl:text-[48px] leading-normal xl:leading-[3rem] 3xl:leading-[4rem] text-secondary dark:text-transparent dark:bg-gradient-to-r dark:from-secondary dark:to-90% dark:via-white dark:to-secondary dark:bg-clip-text transition-colors duration-300">
              Your Loyalty<br />Rewarded
            </h1>

            <p className="text-primary dark:text-white text-sm xl:text-base 2xl:text-lg tracking-wider py-4">
              GTC VIP is the new standard when it comes to trading communities.<br />
              Register, trade, and gain access to loyalty points that could see you be rewarded with a Mercedes G63, an all-expenses-paid holiday in Las Vegas, and many more exciting gifts. Click on the button below to get started
            </p>
            <div className="text-center md:text-left mt-5">
             <Link href="https://my.gtcvip.com/v2/app/login"
              target="_blank"
              className="
            text-sm lg:text-lg px-8 py-2 text-center rounded-full
            w-full md:w-48 md:mx-0 mx-auto
            bg-primary text-white hover:bg-secondary hover:text-white
            dark:bg-white dark:text-black dark:hover:bg-secondary dark:hover:text-white
            transition-colors duration-300
          "
            >
            Login
           </Link>
            </div>
          </div>

          {/* Right Column - 30% width (4/12) */}
          <div className="md:col-span-5"><div
          className="relative py-[1px] px-[1px] rounded-lg"
          style={{
            background:
              "linear-gradient(to bottom, rgba(182,135,86,.3) 40%, rgba(5,3,49,0.1) 0%)",
          }}
        >
          <div
            className="contact-form relative bg-white dark:bg-gradient-to-b dark:from-[#202d7bdb] dark:via-[#050331] dark:to-[#1e255b] rounded-lg shadow-lg overflow-hidden z-10 p-4 md:p-6 transition-colors"
          >
            <h2 className="text-center text-lg font-bold mb-5 uppercase text-secondary dark:text-[#c5a981] py-2 border-b dark:border-[#ffffff2d]">BE REWARDED</h2>
             <ContactFrom /> 
            </div>
           
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
