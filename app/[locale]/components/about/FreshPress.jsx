import Image from "next/image";
import React from "react";

const FreshPress = () => {

  const features = [
    { icon: "/Icons/Icons/Icons-01.svg", 
      title: "Real-Time Market Intelligence",
      desc: "Stay ahead with daily expert analysis, trade ideas, and institutional-grade forecasts — tailored for serious traders.",
    },
    { icon: "/Icons/Icons/Icons-02.svg", 
      title: "Loyalty Points That Reward You",
      desc: "Earn points for trading, referring friends, depositing, and even engaging with our community. Redeem points for premium prizes, tools, and experiences.",

     },
    { icon: "/Icons/Icons/Icons-03.svg", 
      title: "Elite Trading Competitions",
    desc: "Climb the leaderboard, win exclusive rewards, and compete with the very best — or simply enjoy the thrill of trading tournaments designed to reward your skill and loyalty.",
     },
    { icon: "/Icons/Icons/Icons-04.svg",
      title: "Personalised Expert Access",
      desc: "Request analysis, book one-on-one consultations, and get direct feedback from award-winning analysts and prop traders.",
     },
    { icon: "/Icons/Icons/Icons-05.svg",  title: "Exclusive VIP Store",
      desc: "Use your loyalty points to unlock premium rewards — from high-end trading tools to real-world luxury prizes.",
    },
    { icon: "/Icons/Icons/Icons-06.svg", 
      title: "Build Your Status",
      desc: "Level up your VIP tier based on your lifetime deposits and trading volume, unlocking even greater rewards, privileges, and opportunities.",
  
     },
  ];

  return (
    <div className="md:max-w-5xl mx-auto" id="whyTrade">
      <div className="top-section text-center mb-10">
        <h2  style={{ lineHeight: "3.3rem" }}
          className="bg-gradient-to-r from-secondary via-white to-secondary inline-block text-transparent bg-clip-text text-xl font-[500] xl:text-[30px] 2xl:text-[45px] capitalize max-w-sm leading-normal">
        Why Traders Are Joining GTC VIP

        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
  {features.map((item, index) => {
    const isLastColumn = (index + 1) % 3 === 0;
    const isLastRow = index >= features.length - 3;

    return (
      <div
        key={index}
        className={`flex flex-col items-center justify-center gap-4 p-4 text-center bg-transparent hover:bg-gradient-radial from-[#283085] via-transparent to-transparent hover:bg-opacity-40
          ${!isLastColumn ? "border-r border-white/10 border-opacity-10" : ""}
          ${!isLastRow ? "border-b border-white/10" : ""}`}
      >
        <div className="w-16 h-16 flex items-center justify-center">
          <img src={item.icon} alt={item.title} className="w-16 h-16" />
        </div>
        <h4 className="text-secondary text-lg font-semibold">{item.title}</h4>
        <p className="text-base text-white max-w-xs">{item.desc}</p>
      </div>
    );
  })}
</div>
    </div>
  );
};

export default FreshPress;
