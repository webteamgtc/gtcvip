import LiveAccountButton from "../liveAccountButton";
const tiers = [
  {
    badgeColor: "bg-orange-300",
    label: "STANDARD",
    title: "Available for",
    price: "All Traders",
    benefits: [
      "Access to Basic Market Analysis",
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
      "Access to Lower Tier Rewards",
      "Access to Tier 2 & 3 Rewards",
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
      "Access to Roundtable Events",
    ],
  },
];

export default function TierCards() {
  return (
    <section id="level" className="max-w-6xl mx-auto pt-12 md:pt-16 text-primary dark:text-white transition-colors duration-300">
       <div className="top-section text-center mb-10">
      <h2 style={{ lineHeight: "3.3rem" }} className=" text-2xl font-[500] md:text-[30px] 2xl:text-[40px] max-w-xs mx-auto leading-normal text-primary dark:text-transparent dark:bg-gradient-to-r dark:from-secondary dark:via-white dark:to-secondary dark:bg-clip-text transition-colors duration-300 " > Your Journey Starts Here
</h2>
      </div>
    <div className="overflow-x-auto">
  <table className="w-full text-sm text-left border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white transition-colors">
    <thead className="bg-white dark:bg-[#1e255b] text-primary dark:text-white text-lg font-bold">
      <tr>
        <th className="p-4">Rewards</th>
        <th className="p-4 text-center">
          <div className="text-primary dark:text-white font-bold">Standard</div>
          <div className="text-sm font-medium text-primary dark:text-white"><span className="text-secondary text-2xl font-bold">Available for</span><br />All Traders</div>
        </th>
        <th className="p-4 text-center">
          <div className="text-primary dark:text-white font-bold">Priority</div>
          <div className="text-sm font-medium text-primary dark:text-white"><span className="text-secondary text-2xl font-bold">$10,000</span><br />Account Balance</div>
        </th>
        <th className="p-4 text-center">
          <div className="text-primary dark:text-white font-bold">VIP</div>
          <div className="text-sm font-medium text-primary dark:text-white"><span className="text-secondary text-2xl font-bold">$50,000</span><br />Account Balance</div>
        </th>
      </tr>
    </thead>
    <tbody className="text-center">
      {[
    "Coins multiplier",
    "FX Research",
    "Commodities Research",
    "Crypto Research",
    "Indices Research",
    "MT4/5 Premium Indicator Bundle",
    "AI Analysts",
    "Pro Trader Direct Access",
    "Priority Store Access",
    "Chief Trader Direct Access",
    "VIP Store Rewards",
    "One-on-One Pro Trader Consultations",
  ].map((label, index) => {
    const accessMap = [
      ["1", "2", "3"], // Coins multiplier
      ["✔️", "✔️", "✔️"],
      ["✔️", "✔️", "✔️"],
      ["✔️", "✔️", "✔️"],
      ["✔️", "✔️", "✔️"],
      ["", "✔️", "✔️"],
      ["", "✔️", "✔️"],
      ["", "✔️", "✔️"],
      ["", "✔️", "✔️"],
      ["", "", "✔️"],
      ["", "", "✔️"],
      ["", "", "✔️"],
    ];
        return (
          <tr
            key={index}
            className="border-t border-gray-200 dark:border-gray-700 even:bg-blue-50 even:dark:bg-[#1a1f3a] odd:bg-white odd:dark:bg-[#151a33]"
          >
            <td className="p-4 text-left">{label}</td>
            {accessMap[index].map((val, i) => (
              <td key={i} className="p-4 font-semibold">
                {val ? "✔️" : ""}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  </table>
</div>


       <div className="mt-16 text-center">
      <LiveAccountButton />
    </div>
    </section>
  );
}
