import React from 'react'
import Image from "next/image";
import LiveAccountButton from '../liveAccountButton';
import TeamCarousel from './TeamCarousel';
import Carousel3D from '../carusal/carusal';
const YouStayed = () => {
  return (
    <section id="rewards" className=" text-primary dark:text-white transition-colors duration-300 py-10 md:py-16">
      <div className="container max-w-6xl mx-auto px-4 text-center space-y-6 text-base 2xl:text-lg">

        <h2 className=" text-2xl font-[500] md:text-[30px] 2xl:text-[35px] max-w-72 md:max-w-sm mx-auto leading-normal text-primary dark:text-transparent dark:bg-gradient-to-r dark:from-secondary dark:to-90% dark:via-white to-10% dark:to-secondary dark:bg-clip-text transition-colors duration-300 md:px-5" >   You Been Loyal<br></br>
          Now Watch It Pay Off </h2>

        <p className="leading-relaxed max-w-xl mx-auto">
          Every chart you opened, every lot you traded, and every day you stuck with us built up to this. Now it’s your turn to enjoy the rewards.
        </p>
      
        {/* Replace below with your actual animation or image */}
  
       <TeamCarousel /> 

        <p className="leading-relaxed max-w-3xl mx-auto">
          GTC VIP isn’t just about cool tools or pretty dashboards. It’s about a real trader-first community; one that rewards you with exclusive perks, luxury gifts, and unforgettable experiences just for doing what you already love.
        </p>
        <p className=''>You're not just trading.
        </p>
        <p>You're earning your way into something bigger.
        </p>

      </div>
      <div className="mt-12 text-center">
        <LiveAccountButton />
      </div>
    </section>

  )
}

export default YouStayed