import Image from "next/image";
import React from "react";

const FreshPress = () => {

  const features = [
    { icon: "/Images-11.webp", 
      title: "Real-Time Market Intelligence",
      desc: "Stay ahead with daily expert analysis, trade ideas, and institutional-grade forecasts, tailored for serious traders.",
    },
    { icon: "/Images-12.webp", 
      title: "Loyalty Points That Reward You",
      desc: "Earn points for trading, referring friends, depositing, and even engaging with our community. Redeem points for premium prizes, tools, and experiences.",

     },
    { icon: "/Images-13.webp", 
      title: "Elite Trading Competitions",
    desc: "Climb the leaderboard, win exclusive rewards, and compete with the very best, or simply enjoy the thrill of trading tournaments designed to reward your skill and loyalty.",
     },
    { icon: "/Images-14.webp",
      title: "Personalised Expert Access",
      desc: "Request analysis, book one-on-one consultations, and get direct feedback from award-winning analysts and prop traders.",
     },
    { icon: "/Images-15.webp",  title: "Exclusive VIP Store",
      desc: "Use your loyalty points to unlock premium rewards, from high-end trading tools to real-world luxury prizes.",
    },
    { icon: "/Images-16.webp", 
      title: "Build Your Status",
      desc: "Level up your VIP tier based on your lifetime deposits and trading volume, unlocking even greater rewards, privileges, and opportunities.",
  
     },
  ];

  return (
    <div className="md:max-w-5xl mx-auto" id="whyTrade">
  <div className="top-section text-center mb-10">
   <h2 style={{ lineHeight: "3.3rem" }} className=" text-2xl font-[500] xl:text-[30px] 2xl:text-[40px] max-w-sm mx-auto leading-normal text-primary dark:text-transparent dark:bg-gradient-to-r dark:from-secondary dark:via-white dark:to-secondary dark:bg-clip-text transition-colors duration-300 " > Why Traders are Joining GTC VIP </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3">
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
          <p className="text-base text-primary dark:text-white max-w-xs">
            {item.desc}
          </p>
        </div>
      );
    })}
  </div>
</div>

  );
};

export default FreshPress;
