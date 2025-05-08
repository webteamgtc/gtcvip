'use client';
import React from 'react';
import LiveAccountButton from '../liveAccountButton';
import { useLottie } from 'lottie-react';
import animationData from '@/public/animation/one1.json'; // ✅ Adjust this path if needed

const HeroBanner = () => {
  const options = {
    animationData,
    loop: true,
    autoplay: true,
    style: {
      width: '100%',
      height: '100%',
    },
  };

  const { View } = useLottie(options);

  return (
    <section
      id="home"
      className="hero-banner py-10 md:pt-20 lg:pt-24 2xl:pt-28 relative bg-gradient-to-t from-[#283085] via-[#050331] to-[#050331] overflow-hidden"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-8 text-center md:text-left h-[450px]">
          <div className="content md:order-1 text-center max-w-2xl mx-auto pt-16">
            <div className="text-center mb-5">
              <div className="inline-block rounded-full p-[1px] bg-gradient-to-b from-secondary via-transparent to-transparent">
                <button className="flex items-center gap-2 rounded-full bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#050331] px-6 py-2 text-lg font-semibold text-white hover:bg-white/20 transition-all">
                  ✨ Unlock a New Era of Trading
                </button>
              </div>
            </div>
            <h1 className="bg-gradient-to-r from-secondary via-white to-secondary inline-block text-transparent bg-clip-text text-3xl lg:text-[2.5rem] font-[500] 2xl:text-[30px] 3xl:text-[55px] capitalize leading-normal xl:leading-[3rem] 3xl:leading-[4rem]">
              Step Inside the GTC VIP Trading Room
            </h1>
            <p className="text-white text-sm xl:text-base 2xl:text-lg tracking-wider py-4 mx-auto">
              Join the new standard in trading communities. <br /> Unlock premium insights, expert coaching, exclusive competitions, and loyalty rewards — all designed to accelerate your trading journey with GTC.
            </p>
            <div className="mt-4">
              <LiveAccountButton />
            </div>
          </div>
        </div>

        {/* ✅ Lottie Player instead of GIF */}
        <div className="max-w-4xl mx-auto mt-5 md:mt-10">
          <div className="relative w-full h-42 md:h-[458px] rounded-xl overflow-hidden">
            {View}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
