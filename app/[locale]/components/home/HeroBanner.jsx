import React from "react";
import LiveAccountButton from "../liveAccountButton";


const HeroBanner = () => {
  return (
    <section
      id="home"
      className="hero-banner pt-10 md:pt-20 lg:pt-24 2xl:pt-28 relative overflow-hidden transition-colors duration-300"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 text-center md:text-left h-[450px]">
          {/* Content column */}
          <div className="content md:order-1 text-center max-w-2xl mx-auto pt-16">
            {/* Gradient Tag Button */}
         
            {/* Heading */}
           <h1 className=" text-3xl lg:text-[2.5rem] font-[500] 2xl:text-[30px] 3xl:text-[55px] leading-normal xl:leading-[3rem] 3xl:leading-[4rem] text-secondary dark:text-transparent dark:bg-gradient-to-r dark:from-secondary dark:via-white dark:to-secondary dark:bg-clip-text transition-colors duration-300 " > Step Inside the Your Loyalty Gets
Rewarded Now
 </h1>

            {/* Paragraph */}
            <p className="text-primary dark:text-white text-sm xl:text-base 2xl:text-lg tracking-wider py-4 mx-auto">
             Welcome to GTC VIP, the new standard of trading communities.<br></br> Register and gain access to loyalty points that could see you be rewarded with a Mercedes G63, an all-expenses-paid holiday in Las Vegas, and many more exciting gifts.
            </p>

            {/* CTA Button */}
            <div className="mt-4">
              <LiveAccountButton />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;
