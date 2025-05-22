import LiveAccountButton from "../liveAccountButton";
const tiers = [
  {
    badgeColor: "bg-orange-300",
    label: "STANDARD",
    title: "Available for",
    price: "All Traders",
    benefits: [
      "Access to FX Analysis",
      "Community Access",
      "Loyalty Points for Engagement",
    ],
  },
  {
    badgeColor: "bg-gray-300",
    label: "PRIORITY",
     price: "$10,000",
    title: "Equity",
    benefits: [
      "Direct messaging with Pro Traders",
      "Access to Bigger Rewards",
      "Double the Reward Points",
    ],
  },
  {
    badgeColor: "bg-yellow-300",
    label: "V I P",
     price: "$50,000 ",
    title: "Equity",
    benefits: [
      "Triple the Reward Points",
      "Access to All the Rewards",
      "Direct Access to Our Chief Analyst",
      "Full Market Analysis Access",
    ],
  },
];

export default function TierCards() {
  return (
    <section className="pt-12 md:pt-16 text-primary dark:text-white transition-colors duration-300">
       <div className="top-section text-center mb-10">
      <h2 style={{ lineHeight: "3.3rem" }} className=" text-2xl font-[500] md:text-[30px] 2xl:text-[40px] max-w-xs mx-auto leading-normal text-primary dark:text-transparent dark:bg-gradient-to-r dark:from-secondary dark:via-white dark:to-secondary dark:bg-clip-text transition-colors duration-300 " > Your Journey Starts Here
</h2>
      </div>
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center pt-10">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center justify-start rounded-3xl shadow-xl px-6 py-10 pt-16 min-h-[630px] transition-all duration-300
              bg-white text-primary dark:bg-gradient-to-b dark:from-[#283085] dark:via-[#050331] dark:to-[#050331] dark:text-white"
          >
            {/* Top badge */}
            <div
              className={`absolute -top-8 w-20 h-20 rounded-full border-4 border-white dark:border-[#0b1244] flex items-center justify-center shadow-md ${tier.badgeColor}`}
            >
              <div className="w-10 h-10 rounded-full bg-white opacity-30"></div>
            </div>

            {/* Tier Label & Title */}
            <div className="space-y-2 mt-5">
              <p className="text-sm font-semibold tracking-widest mb-10"><span className=" rounded-full border dark:border-white border-primary px-3 py-1">{tier.label}</span></p>
              <h2 className="text-2xl md:text-5xl font-bold leading-nomral text-secondary">{tier.price}</h2>
              <h4 className="text-2xl md:text-4xl leading-nomral pb-2">{tier.title}</h4>
              <hr className="border-t dark:border-white border-primary border-opacity-30 w-3/3 mx-auto my-5" />
            </div>

            {/* Benefits */}
            <ul className="space-y-4 mt-4 mb-8 py-5">
              {tier.benefits.map((benefit, bIdx) => (
                <li key={bIdx} className="flex items-center justify-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-white text-blue-900 font-bold text-xs flex items-center justify-center">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* View Rewards Button */}
            
          </div>
        ))}
      </div>
       <div className="mt-16 text-center">
      <LiveAccountButton />
    </div>
    </section>
  );
}
