import React from "react";
import FreshPress from "./FreshPress";

const TradeInvest = () => {
  return (
    <section className="bg-[#050331] py-12 md:py-16 2xl:py-20">
      <div className="container">
        <div className="text-center top-contact mb-10">
          <h2 className="bg-gradient-to-r from-white to-secondary text-transparent bg-clip-text text-xl xl:text-3xl 2xl:text-[45px] capitalize font-[500] pb-5">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-sm xl:text-base tracking-wider">
            We're here to answer any questions you may have. Feel free to reach
            out to us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="relative py-[1px] px-[1px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(182,135,86,.65) 40%, rgba(5,3,49,1) 60%)",
              borderRadius: "8px",
            }}
          >
            <div className="contact-form relative bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#050331] rounded-lg shadow-lg overflow-hidden z-10 p-12">
              <div className="text-center p-4">
                <h2 className="bg-gradient-to-r from-white to-secondary text-transparent bg-clip-text text-xl xl:text-3xl capitalize font-[400] pb-5">
                  Profitable <br></br>
                  Partnership
                </h2>
                <p className="text-gray-400 text-sm xl:text-base tracking-wider">
                  Benefit from competitive rates, tiered commissions, and
                  accelerated growth
                </p>
              </div>
            </div>
          </div>{" "}
          <div
            className="relative py-[1px] px-[1px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(182,135,86,.65) 40%, rgba(5,3,49,1) 60%)",
              borderRadius: "8px",
            }}
          >
            <div className="contact-form relative bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#050331] rounded-lg shadow-lg overflow-hidden z-10 p-12">
              <div className="text-center p-4">
                <h2 className="bg-gradient-to-r from-white to-secondary text-transparent bg-clip-text text-xl xl:text-3xl capitalize font-[400] pb-5">
                  Expert Support & Technology
                </h2>
                <p className="text-gray-400 text-sm xl:text-base tracking-wider">
                  Seamlessly onboard with expert guidance, access real-time
                  analytics, and utilize MetaTrader 5 for advanced trading
                </p>
              </div>
            </div>
          </div>{" "}
          <div
            className="relative py-[1px] px-[1px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(182,135,86,.65) 40%, rgba(5,3,49,1) 60%)",
              borderRadius: "8px",
            }}
          >
            <div className="contact-form relative bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#050331] rounded-lg shadow-lg overflow-hidden z-10 p-12">
              <div className="text-center p-4">
                <h2 className="bg-gradient-to-r from-white to-secondary text-transparent bg-clip-text text-xl xl:text-3xl capitalize font-[400] pb-5">
                  Secure Finances & 24/5 Support
                </h2>
                <p className="text-gray-400 text-sm xl:text-base tracking-wider">
                  Your funds are secure, with earnings accessible anytime. Enjoy
                  a user-friendly dashboard and multilingual support. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FreshPress />
    </section>
  );
};

export default TradeInvest;
