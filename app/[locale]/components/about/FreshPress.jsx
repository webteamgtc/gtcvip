import Image from "next/image";
import React from "react";
import LiveAccountButton from "../liveAccountButton";

const FreshPress = () => {
  const features = [
    {
      icon: "/pro/Icons-10.svg",
      title: "Loyalty Points with Real Value",
      desc: "Earn points effortlessly, from logging in to referring friends. Then turn those points into rewards that actually matter.",
    },
    {
      icon: "/pro/Icons-11.svg",
      title: "Competitions That Reward the Elite",
      desc: "Enjoy exclusive trading challenges where the winners don’t just walk away with bragging rights… they leave with luxury.",
    },
    {
      icon: "/pro/Icons-12.svg",
      title: "The VIP Store That’s Curated for You",
      desc: "Unlock a store that’s packed with luxury gear, truly unforgettable experiences & exclusive gifts, all just for being loyal.",
    },
    {
      icon: "/pro/Icons-13.svg",
      title: "Climb the Ranks & Unlock More",
      desc: "The more active and loyal you are, the higher your tier, which means better perks, priority access, and elevated status.",
    },
    {
      icon: "/pro/Icons-14.svg",
      title: "Simple. Seamless. Rewarding.",
      desc: "You’ll earn daily points by simply trading & engaging with our social posts. It’s that easy to be a part of the VIP lifestyle.",
    },
    {
      icon: "/pro/Icons-15.svg",
      title: "Higher Balance. Bigger Rewards.",
      desc: "The more you hold in your GTC account, the more you unlock, including triple points and amazing perks only GTC VIPs enjoy.",
    },
  ];

  return (
    <div className="md:max-w-6xl mx-auto px-4" id="whyTrade">
      <div className="top-section text-center mb-10">
        <h2 className="text-2xl font-semibold xl:text-[30px] 2xl:text-[30px] max-w-sm mx-auto leading-normal text-secondary duration-300">
          Why is Everyone Talking About GTC VIP?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#fdfdfd96] border border-gray-100 dark:bg-[#1e255b] dark:border-opacity-10 text-white rounded-xl overflow-hidden relative p-12 text-center shadow-lg hover:shadow-xl transition-all"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-l from-secondary to-90% via-[#e7d156] to-secondary clip-triangle">
              <img
                src={item.icon}
                alt={item.title}
                className="absolute top-2 right-3 w-9 h-9"
              />
            </div>
            <h4 className="text-lg font-bold mb-2 mt-4 max-w-48 mx-auto text-secondary dark:text-white">{item.title}</h4>
            <p className="text-sm md:text-base leading-relaxed text-primary dark:text-white">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <LiveAccountButton />
      </div>

      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(100% 0, 100% 100%, 0 0);
        }
      `}</style>
    </div>
  );
};

export default FreshPress;