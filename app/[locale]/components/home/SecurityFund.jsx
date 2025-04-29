import React from "react";
import LiveAccountButton from "../liveAccountButton";
import Image from "next/image";

const SecurityFund = () => {
  return (
    <section className="hero-banner py-10 md:py-14 lg:py-20 2xl:py-24 bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-8 text-center md:text-left">
        <div className="relative w-full h-52 md:h-96">
            <Image
              src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/images/gtcmtd/file.png"
              fill
              alt="MT5 Trader"
              className="object-contain"
            />
          </div>
          <div className="content">
            <h2
              className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-[500] xl:text-[30px] 2xl:text-[45px] capitalize  w-64 md:w-full md:max-w-2xl leading-tight"
            >
             Earn Lucrative Commissions with 
             GTC Financial Introducing Brokers Program 
            </h2>
            <p
              className={`text-accent text-sm xl:text-base 2xl:text-lg tracking-wider py-8 mx-auto`}
            >
             Discover GTC Financial's enticing Introducing Brokers Program, where you can earn substantial commissions by referring friends and family to a trusted brokerage. With extensive experience in the financial markets, GTC Financial is your reliable partner for venturing into stock trading. Join our Introducing Brokers Program today and unlock a world of profitable opportunities in trading.
            </p>
            <LiveAccountButton hoverStyle="hover:bg-primary" />
          </div>
   
        </div>
      </div>
    </section>
  );
};

export default SecurityFund;
