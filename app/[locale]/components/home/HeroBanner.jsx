import React from "react";
import LiveAccountButton from "../liveAccountButton";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section id="home" className="hero-banner py-10 md:pt-20 lg:pt-24 2xl:pt-28 relative bg-gradient-to-t from-[#283085] via-[#050331] to-[#050331] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 text-center md:text-left h-[400px]">
          {/* Image column */}
     
          {/* Content column */}
          <div className="content md:order-1 text-center max-w-2xl mx-auto">
          <div className="text-center mb-5">
  <div className="inline-block rounded-full p-[1px] bg-gradient-to-b from-secondary via-[#202d7bdb] to-primary">
    <button className="flex items-center gap-2 rounded-full bg-gradient-to-t from-[#202d7bdb] via-[#050331] to-[#050331] px-6 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-all">
      ✨ Unlock a New Era of Trading
    </button>
  </div>
</div>
            <h1
              className="bg-gradient-to-r from-secondary via-white to-secondary inline-block text-transparent bg-clip-text text-2xl lg:text-[2.5rem] font-[500] 2xl:text-[30px] 3xl:text-[55px] capitalize leading-normal xl:leading-[3rem] 3xl:leading-[4rem]"
            >
             Step Inside the GTC VIP Trading Room
            </h1>
            <p
              className={`text-white text-sm xl:text-base 2xl:text-lg tracking-wider py-4 mx-auto`}
            >
             Join the new standard in trading communities. <br></br>Unlock premium insights, expert coaching, exclusive competitions, and loyalty rewards — all designed to accelerate your trading journey with GTC.

            </p>
            <div className="mt-4">
                <LiveAccountButton />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-10">
        <div className="relative w-full h-[458px] rounded-xl overflow-hidden border border-white/10">
          <Image src="/gif.gif" fill alt="" className="object-cover" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroBanner;
