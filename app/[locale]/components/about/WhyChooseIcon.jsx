import React from 'react'
import Image from 'next/image'
import LiveAccountButton from '../liveAccountButton'

const WhyChooseIcon = () => {
  return (
    <section className="hero-banner pt-10 md:pt-14 lg:pt-14 2xl:pt-16">
      <div className='container'>
        <div className='content-top text-center'>
          <p className='text text-center text-xl md:text-2xl'>Earn Lucrative Commissions with  </p>
        <h2
              className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-2xl lg:text-[2.5rem] font-[500] 2xl:text-[30px] 3xl:text-[35px] capitalize leading-normal xl:leading-[2rem] 3xl:leading-[3rem]"
            >
              GTC Financial Introducing Brokers Program
            </h2>
         
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='content-side max-w-lg'>
            <p className='text md:text-left'>Discover GTC Financial's enticing Introducing Brokers Program, where you can earn substantial commissions by referring friends and family to a trusted brokerage. With extensive experience in the financial markets, GTC Financial is your reliable partner for venturing into stock trading. Join our Introducing Brokers Program today and unlock a world of profitable opportunities in trading.</p>
            <div className='mt-10 text-center md:text-left'>
            <LiveAccountButton />
          </div>
          </div>
         
          <div className='relative w-full h-64 md:h-[500px]'>
              <Image src="/partners.webp" fill className="object-contain"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseIcon