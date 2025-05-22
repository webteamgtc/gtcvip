import React from 'react'
import Image from "next/image";
import LiveAccountButton from '../liveAccountButton';
const YouStayed = () => {
  return (
    <section className=" text-primary dark:text-white transition-colors duration-300">
  <div className="container max-w-6xl mx-auto px-4 text-center space-y-6">
  
     <h2 className=" text-2xl font-[500] md:text-[30px] 2xl:text-[35px] max-w-72 md:max-w-sm mx-auto leading-normal text-primary dark:text-transparent dark:bg-gradient-to-r dark:from-secondary dark:via-white dark:to-secondary dark:bg-clip-text transition-colors duration-300 md:px-5" >   You Stayed. So We Built This for You. </h2>

    <p className="text-base md:text-lg leading-relaxed">
      You’ve always had our back, sharing insights, giving feedback, and helping us grow.
      <br />
      This space? It's just one of the ways we’re giving that loyalty right back to you.
    </p>

    {/* Replace below with your actual animation or image */}
    <div className="max-w-5xl mx-auto mt-5 md:mt-10">
              <div className="relative w-full h-[210px] md:h-[528px]">
                <Image src="/animation/one1.gif" fill alt="GTC Animation" className="object-cover" />
              </div>
            </div>

    <p className="text-base md:text-lg leading-relaxed">
      And it’s more than just cool tools and clean charts.
      <br />
      It’s about belonging to a space where traders support each other, learn together, and grow side by side.
    </p>
       
  </div>
   <div className="mt-12 text-center">
      <LiveAccountButton />
    </div>
</section>

  )
}

export default YouStayed