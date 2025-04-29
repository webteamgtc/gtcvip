import React from "react";
import Image from "next/image";

const LiveBanner = () => {
  return (
    <section className="hero-banner pt-10">
      <div className="container">
        <div class="content-top text-center">
          <p class="text text-center text-xl md:text-2xl">
          GTC Financial Standard Account
          </p>
          <h2 class="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-2xl lg:text-[2.5rem] font-[500] 2xl:text-[30px] 3xl:text-[40px] capitalize leading-normal xl:leading-[2rem] 3xl:leading-[3rem] md:max-w-2xl mx-auto">
          Start Trading Commission-Free Now with GTC Financial
          </h2>
        </div>
        <div className="max-w-5xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-8 text-center md:text-left">
         
          <div className='relative w-full h-64 md:order-2'>
                                <Image src="/off.png" alt='' fill className='object-contain' />
                            </div>
          <div className="content md:order-1">
                       <p
              className={`text-accent text-sm xl:text-base 2xl:text-lg tracking-wider py-8 mx-auto`}
            >
              Start trading with a $1000 deposit and access a diverse range of assets, including 128+ currency pairs, 6 precious metals, futures, indices, 1000+ shares 
            </p>
          </div>
        </div>

        </div>
      
      </div>
    </section>
  );
};

export default LiveBanner;
