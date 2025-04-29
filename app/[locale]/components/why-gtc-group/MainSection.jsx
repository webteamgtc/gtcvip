import React from "react";
import Image from "next/image";

const MainSection = () => {
  // Define the sections with their specific content
  const sections = [
    {
      title: "Comprehensive Trading Tools ",
      description: "Access economic calendars, in-depth analytics, and real-time news to stay ahead in the market. ",
    },
    {
      title: "Optimal Risk Management ",
      description:
        "Protect your investments with advanced Stop Loss and Take Profit options, refining your trading strategy. ",
    },
    {
      title: "Professional Market Analysis ",
      description:
        "Receive expert insights from seasoned analysts to enhance your trading decisions. ",
    }, 
    {
      title: "Superior Educational Resources ",
      description:
        "Improve your trading proficiency with our extensive webinars and tutorials. ",
    },
  ];

  return (
    <section className="bg-[#050331] py-12 md:py-16 2xl:py-20">
      <div className="container">
        <div className="text-center top-contact mb-10">
          <h2 className="bg-gradient-to-r from-white to-secondary text-transparent bg-clip-text text-xl xl:text-3xl 2xl:text-[30px] capitalize font-[500] pb-5">
            Unparalleled Trading Experience
          </h2>
          <p className="text-gray-400 text-sm xl:text-base tracking-wider md:max-w-3xl mx-auto">
            Discover the unmatched speed, advanced technology, and cost-effective solutions at GTC Financial for a superior trading journey.
          </p>
          <div className="relative w-full h-[400px] my-10">
            <Image src="/p2.png" fill alt="Platform 2" className="object-contain" />
          </div>
        </div>
        <div className="text-center top-contact my-10">
          <h2 className="bg-gradient-to-r from-white to-secondary text-transparent bg-clip-text text-xl xl:text-3xl 2xl:text-[30px] capitalize font-[500] pb-5">
          GTC Financial Platform 
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
       
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
      </div>
    </section>
  );
};

export default MainSection;