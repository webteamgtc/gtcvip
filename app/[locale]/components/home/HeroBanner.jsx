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
      <div className="max-w-3xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12 text-center md:text-left min-h-[450px]">

          {/* Left Column - 70% width (8/12) */}
          <div className="md:col-span-12 content text-center md:text-center pt-10">
            <h1 className="text-2xl lg:text-[2.5rem] font-[500] 2xl:text-[30px] 3xl:text-[48px] leading-normal xl:leading-[3rem] 3xl:leading-[4rem] text-secondary duration-300">
              Your Loyalty<br />Rewarded
            </h1>

            <p className="text-primary dark:text-white text-sm xl:text-base 2xl:text-lg tracking-wider py-4">
              GTC VIP is the new standard when it comes to trading communities.<br />
              Register, trade, and gain access to loyalty points that could see you be rewarded with a Mercedes G63, an all-expenses-paid holiday in Las Vegas, and many more exciting gifts. Click on the button below to get started.
            </p>
            <div className="text-center md:text-center mt-5">
             <LiveAccountButton />
            </div>
          </div>

    

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
