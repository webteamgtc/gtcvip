'use client'
import React from "react";
import Image from "next/image";
import LiveAccountButton from "../liveAccountButton";

const DetailSection = () => {
  return (
    <section className="hero-banner py-10 md:py-14 lg:py-16 2xl:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-center md:text-left">
          {/* Image column */}
          <div className="relative w-full h-72 md:h-[400px] md:order-2">
            <Image
              src="/p4.jpg"
              fill
              alt="MT5 Trader"
              className="object-contain"
            />
          </div>
          {/* Content column */}
          <div className="content md:order-1">
            <h2
              className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-[500] xl:text-[30px] 2xl:text-[45px] capitalize  w-64 md:w-full md:max-w-xl leading-tight"
            >
             Discover MQ WebTrader <br></br>
             at GTC Financial 
            </h2>
            <p
              className={`text-accent text-sm xl:text-base 2xl:text-lg tracking-wider py-4 mx-auto`}
            >
            Experience the freedom of trading on MetaTrader 5 directly from your iOS or Android device, or any web browser. With MQ WebTrader, there's no need to download anything—simply open your browser and start trading seamlessly. 
            </p>
            <div className="pt-5">
                <LiveAccountButton />
          </div>
        
       
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection