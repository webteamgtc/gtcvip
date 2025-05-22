import Image from "next/image";
import React from "react";
import LiveAccountButton from "../liveAccountButton";

const FreshPress = () => {

  const features = [
    { icon: "/Images-11.webp", 
      title: "Loyalty Points That Truly Count",
      desc: "Every little action, from referrals to just showing up, earns you points. These points turn into exciting rewards that make your loyalty worth it.",
    },
    { icon: "/Images-12.webp", 
      title: "Competitions with Real Rewards",
      desc: "VIPs enjoy fun challenges where winning isn’t just possible, it’s part of the experience. Members truly love the thrill, excitement, and real valuable rewards.",

     },
    { icon: "/Images-13.webp", 
      title: "A VIP Store Just for You",
    desc: "There’s a full store waiting, filled with luxury gifts and unforgettable experiences. All carefully made to thank you for staying loyal and committed.",
     },
    { icon: "/Images-14.webp",
      title: "Level Up Your Status",
      desc: "The more loyal you are, the more you earn. Your tier rises with every action, bringing bigger rewards, better perks, and VIP treatment.",
     },
    { icon: "/Images-15.webp",  title: "Easy Ways to Earn Points",
      desc: "Simple things like logging in or joining the conversation help you collect points quickly every day. Getting rewarded has never been easier.",
    },
    { icon: "/Images-16.webp", 
      title: "More Equity & More VIP Power",
      desc: "The more equity you bring, the better your perks, like analyst access and triple points. GTC VIP makes sure your loyalty truly pays off.",
  
     },
  ];

  return (
    <div className="md:max-w-5xl mx-auto" id="whyTrade">
  <div className="top-section text-center mb-10">
   <h2 style={{ lineHeight: "3.3rem" }} className=" text-2xl font-[500] xl:text-[30px] 2xl:text-[40px] max-w-lg mx-auto leading-normal text-primary dark:text-transparent dark:bg-gradient-to-r dark:from-secondary dark:via-white dark:to-secondary dark:bg-clip-text transition-colors duration-300 " > Why is Everyone Talking About 
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
