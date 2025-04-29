'use client'
import React from "react";
import Image from "next/image";
import LiveAccountButton from "../liveAccountButton";

const AccountSection = () => {
  // Define the sections with their specific content
  const sections = [
    {
      title: "Commission-Free ",
      description:
        "Experience swift execution and zero commissions on GTC Financial' MT5 platform. ",
    },
    {
      title: "Secure Funds ",
      description:
        "Your funds are securely held in separate accounts with reputable Tier 1 banks for peace of mind. ",
    },
    {
      title: "24/5 Customer Support ",
      description:
        "Our dedicated support team is available 24/5 to promptly address any concerns you may have. ",
    }
  ];

  return (
    <section className="bg-[#050331] py-12 md:pt-16 2xl:pt-20">
      <div className="container">
        <div className="text-center top-contact mb-10">
          <h2 className="bg-gradient-to-r from-white to-secondary text-transparent bg-clip-text text-xl xl:text-3xl 2xl:text-[30px] font-[500] pb-5 uppercase">
          WHY CHOOSE 
          GTC Financial STANDARD ACCOUNT
          </h2>
          <p className="text-gray-400 text-sm xl:text-base tracking-wider md:max-w-3xl mx-auto">
            Discover the unmatched speed, advanced technology, and
            cost-effective solutions at GTC Financial for a superior trading
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative py-[1px] px-[1px]"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(182,135,86,.65) 40%, rgba(5,3,49,1) 60%)",
                borderRadius: "8px",
              }}
            >
              <div className="contact-form relative bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#050331] rounded-lg shadow-lg overflow-hidden z-10 p-4">
                <div className="text-center p-4">
                  <h2 className="bg-gradient-to-r from-white to-secondary text-transparent bg-clip-text text-xl xl:text-[22px] capitalize font-[400] pb-5">
                    {section.title}
                  </h2>
                  <p className="text-gray-400 text-sm xl:text-base tracking-wider">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-5 text-center">
            <LiveAccountButton />
        </div>
      </div>
    </section>
  );
};

export default AccountSection;
