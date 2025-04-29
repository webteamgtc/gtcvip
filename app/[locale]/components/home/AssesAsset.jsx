import Image from 'next/image'
import React from 'react'

const AssesAsset = () => {

      // Define contact details for rendering
  const contactDetails = [
    { iconSrc: "/icon145.png", title: "Register"},
    { iconSrc: "/add.png", title: "Deposit" },
    { iconSrc: "/AC-1.png", title: "Trade" }
  ];
 // Contact item component logic integrated directly
 const ContactItem = ({ iconSrc, title, details }) => (
    <div className="flex justify-start items-center gap-4">
      <div className="relative w-14 h-14">
        <Image src={iconSrc} fill alt={title} className="object-contain" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-white font-medium">{title}</h3>
       
      </div>
    </div>
  );

  return (
    <section className='bg-[#050331] p-4 pt-12 md:pt-16 2xl:pt-20'>
        <div className='max-w-5xl mx-auto'>
        <div className="relative py-[1px] px-[1px]" style={{ 
          background: 'linear-gradient(to bottom, rgba(182,135,86,.65) 40%, rgba(5,3,49,1) 60%)', 
          borderRadius: '8px' 
        }}>
          <div className="contact-form relative bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#050331] rounded-lg shadow-lg overflow-hidden z-10 p-4 md:p-12">
            <div className="text-center p-4 mb-10">
                <h4 className='text-lg text-secondary pb-3'>
                With GTC you Can
                </h4>
              <h2
                className="bg-gradient-to-r from-white to-secondary text-transparent bg-clip-text text-xl xl:text-3xl 2xl:text-[35px] capitalize font-[500] pb-5"
              >
                Explore Our Account Types
              </h2>
              <p className="text-gray-400 text-sm xl:text-base tracking-wider">
                We're here to answer any questions you may have. Feel free to reach out to us.
              </p>
            </div>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-8'>
                    <div className='flex flex-col items-start justify-start gap-4'>
                            <div className='relative w-12 h-12'>
                                <Image src="/AC-1.png" alt='' fill className='object-contain' />
                            </div>
                            <h3 class="text-lg text-secondary font-medium">Standard Account</h3>
                            <ul className='text-gray-400 list-none leading-7'>
                                <li>Minimum Deposit: $1,000</li>
                                <li>Leverage: 1:500</li>
                                <li>No Commissions</li>
                                <li>Minimum Lots: 0.01</li>
                                <li>Spreads: 1.5 pips</li>
                            </ul>
                    </div>
                    <div className="contact-info flex flex-col gap-8">
                {contactDetails.map((item, index) => (
                  <ContactItem key={index} {...item} />
                ))}
              </div>
              <div className='relative w-72 h-40'>
                                <Image src="/off.png" alt='' fill className='object-contain' />
                            </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default AssesAsset