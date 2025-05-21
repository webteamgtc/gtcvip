import React from "react";
import LiveAccountButton from "../liveAccountButton";

const tiers = [
  {
    name: "Standard",
    subtitle: "Available to All Traders",
    gradient: "from-[#283085] to-[#050331]",
    features: [
      "Access to FX Analysis",
      "Community Access",
      "Loyalty Points for Engagement",
    ],
  },
  {
    name: "Priority",
    subtitle: "Deposit $1,000+",
    gradient: "from-[#050331] to-[#283085]",
    features: [
      "Access Commodities, Indices, and Crypto",
      "Earn Bonus Loyalty Points",
      "Exclusive Event Invitations",
    ],
  },
  {
    name: "Premier",
    subtitle: "Deposit $5,000+",
    gradient: "from-[#283085] to-[#050331]",
    features: [
      "Access Private Analysis Request Channel",
      "Unlock Premium Market Tools",
      "Priority in Competitions",
    ],
  },
  {
    name: "Private",
    subtitle: "Deposit $10,000+",
    gradient: "from-[#050331] to-[#283085]",
    features: [
      "Direct Messaging with Professional Traders",
      "MT4 Ultimate Tools Access",
      "Personal Strategy Sessions",
    ],
  },
  {
    name: "VIP",
    subtitle: "Deposit $50,000+",
    gradient: "from-[#283085] to-[#050331]",
    features: [
      "Private Messaging with Chief Trader",
      "Weekly Group Consultations",
      "Full Access to Premium Rewards",
      "VIP Trading Badge",
    ],
  },
];

const VIPJourney = () => {
  return (
    <section id="journey">
  <div className="top-section text-center mb-10">
   <h2 style={{ lineHeight: "3.3rem" }} className=" text-2xl font-[500] md:text-[30px] 2xl:text-[40px] max-w-xs mx-auto leading-normal text-primary dark:text-transparent dark:bg-gradient-to-r dark:from-secondary dark:via-white dark:to-secondary dark:bg-clip-text transition-colors duration-300 " > Your Journey to VIP Status </h2>
  </div>

  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
      {tiers.map((tier, index) => (
        <div
          key={index}
          className="rounded-xl overflow-hidden shadow-lg flex flex-col h-full bg-white/5 backdrop-blur-md pl-0"
        >
          {/* Top gradient header */}
          <div className={`p-6 text-left bg-gradient-to-br ${tier.gradient}`}>
            <h3 className="text-2xl font-bold text-secondary dark:text-yellow-400">
              {tier.name}
            </h3>
            <p className="text-base opacity-90 text-white">{tier.subtitle}</p>
          </div>

          {/* Feature list */}
          <div className="bg-white text-black dark:bg-[#1c1f3a] dark:text-white p-5 text-sm flex-1">
            <ul className="list-decimal pl-4 space-y-2">
              {tier.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-10 text-center">
      <LiveAccountButton />
    </div>
  </div>
</section>

  );
};

export default VIPJourney;
