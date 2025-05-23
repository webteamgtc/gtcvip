import Image from "next/image";
import React from "react";
import LiveAccountButton from "../liveAccountButton";

const FreshPress = () => {

  const features = [
    { icon: "/Images-11.webp", 
      title: "Loyalty Points with Real Value",
      desc: "Earn points effortlessly, from logging in to referring friends. Then turn those points into rewards that actually matter.",
    },
    { icon: "/Images-12.webp", 
      title: "Competitions That Reward the Elite",
      desc: "Enjoy exclusive trading challenges where the winners don’t just walk away with bragging rights… they leave with luxury.",

     },
    { icon: "/Images-13.webp", 
      title: "The VIP Store That’s Curated for You",
    desc: "Unlock a store that’s packed with luxury gear, truly unforgettable experiences & exclusive gifts, all just for being loyal.",
     },
    { icon: "/Images-14.webp",
      title: "Climb the Ranks & Unlock More",
      desc: "The more active and loyal you are, the higher your tier, which means better perks, priority access, and elevated status.",
     },
    { icon: "/Images-15.webp",  title: "Simple. Seamless. Rewarding.",
      desc: "You’ll earn daily points by simply trading & engaging with our social posts. It’s that easy to be a part of the VIP lifestyle.",
    },
    { icon: "/Images-16.webp", 
      title: "Higher Balance. Bigger Rewards.",
      desc: "The more you hold in your GTC account, the more you unlock, including triple points and amazing perks only GTC VIPs enjoy.",
  
     },
  ];

  return (
    <div className="md:max-w-5xl mx-auto" id="whyTrade">
  <div className="top-section text-center mb-10">
   <h2 className=" text-2xl font-[500] xl:text-[30px] 2xl:text-[35px] max-w-xs md:max-w-sm mx-auto leading-normal text-primary dark:text-transparent dark:bg-gradient-to-r dark:from-secondary dark:via-white dark:to-secondary dark:bg-clip-text transition-colors duration-300 " > Why is Everyone Talking About 
GTC VIP?
 </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 mb-16">
    {features.map((item, index) => {
      const isLastColumn = (index + 1) % 3 === 0;
      const isLastRow = index >= features.length - 3;

      return (
        <div
          key={index}
          className={`
            flex flex-col items-center justify-center gap-4 p-4 text-center cursor-pointer 
            bg-transparent hover:bg-gradient-radial hover:from-[#f2f2f2] hover:via-transparent hover:to-transparent dark:hover:from-[#1a1a3d] dark:hover:via-transparent dark:hover:to-transparent

            ${!isLastColumn ? "border-r border-gray-300 dark:border-gray-600" : ""}
            ${!isLastRow ? "border-b border-gray-300 dark:border-gray-600" : ""}
          `}
        >
          <div className="w-24 h-24 flex items-center justify-center">
            <img src={item.icon} alt={item.title} className="w-20 h-20" />
          </div>
          <h4 className="text-secondary text-lg font-semibold">
            {item.title}
          </h4>
          <p className="text-base text-primary dark:text-white max-w-xs px-3">
            {item.desc}
          </p>
        </div>
      );
    })}
  </div>
  <div className="text-center mt-10">
    <LiveAccountButton />
  </div>
</div>


  );
};

export default FreshPress;
