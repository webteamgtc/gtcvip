import React from "react";
import LiveAccountButton from "../liveAccountButton";
import Image from "next/image";

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
            <div className="text-center mb-5">
              <div className="inline-block rounded-full p-[1px] bg-gradient-to-b from-secondary via-transparent to-transparent">
                <button className="flex items-center gap-2 rounded-full bg-gray-300 dark:bg-white/10 px-6 py-2 text-base md:text-xl font-semibold text-primary dark:text-white hover:bg-white/20 transition-all">
                  ✨ Unlock a New Era of Loyalty Program
                </button>
              </div>
            </div>

            {/* Heading */}
           <h1 className=" text-3xl lg:text-[2.5rem] font-[500] 2xl:text-[30px] 3xl:text-[55px] leading-normal xl:leading-[3rem] 3xl:leading-[4rem] text-secondary dark:text-transparent dark:bg-gradient-to-r dark:from-secondary dark:via-white dark:to-secondary dark:bg-clip-text transition-colors duration-300 " > Step Inside the GTC VIP Trading Room </h1>

            {/* Paragraph */}
            <p className="text-primary dark:text-white text-sm xl:text-base 2xl:text-lg tracking-wider py-4 mx-auto">
              Join the new standard in trading communities. <br />
              Unlock premium insights, expert coaching, exclusive competitions, and loyalty rewards, all designed to accelerate your trading journey with GTC.
            </p>

            {/* CTA Button */}
            <div className="mt-4">
              <LiveAccountButton />
            </div>
          </div>
        </div>

        {/* Animation */}
        <div className="max-w-5xl mx-auto mt-5 md:mt-10">
          <div className="relative w-full h-[210px] md:h-[528px]">
            <Image src="/animation/one1.gif" fill alt="GTC Animation" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
