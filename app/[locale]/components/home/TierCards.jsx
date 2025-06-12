import LiveAccountButton from "../liveAccountButton";
import { FaMedal, FaAward } from "react-icons/fa";
import { FaCrown, FaDiamond, FaGem } from "react-icons/fa6";

const tiers = [
  {
    level: "Bronze",
    range: "$0 – $100",
    icon: FaMedal,
    frontContent: "FX Research",
    backContent: ["FX Research"],
    color: "text-orange-500",
  },
  {
    level: "Silver",
    range: "$100 – $3,000",
    icon: FaAward,
    frontContent: "Bronze +\nCommodities Research\nRedeem Electronics",
    backContent: [
      "Everything in Bronze plus",
      "Commodities Research",
      "Redeem Electronics"
    ],
    color: "text-gray-300",
  },
  {
    level: "Gold",
    range: "$3,000 – $10,000",
    icon: FaCrown,
    frontContent: "Silver +\nCrypto Research\nIndices Research",
    backContent: [
      "Everything in Silver plus",
      "Crypto Research",
      "Indices Research"
    ],
    color: "text-yellow-400",
  },
  {
    level: "Platinum",
    range: "$10,000 – $100,000",
    icon: FaDiamond,
    frontContent: "Gold +\nRedeem entertainment, watches, gold bars",
    backContent: [
      "Everything in Gold plus",
      "Redeem entertainment, watches, gold bars"
    ],
    color: "text-blue-200",
  },
  {
    level: "Diamond",
    range: "$100,000+",
    icon: FaGem,
    frontContent: "Platinum +\nRedeem Cars",
    backContent: [
      "Everything in Platinum plus",
      "Redeem Cars"
    ],
    color: "text-cyan-400",
  },
];

export default function TierCards() {
  return (
    <section id="level" className="max-w-6xl mx-auto py-16 text-primary dark:text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-secondary">
          Your VIP Tier
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 px-5 md:px-0">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`
              group [perspective:1000px] relative h-64 w-full
              ${idx === tiers.length - 1 ? 'col-span-2 sm:col-span-1' : ''}
            `}
          >
            <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* Front Side */}
              <div className="absolute inset-0 bg-[#232a5f] rounded-lg border border-gray-600 p-4 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                <tier.icon className={`text-[28px] mt-4 ${tier.color}`} />
                <h3 className="mt-2 font-bold text-xl text-secondary">{tier.level}</h3>
                <p className="text-base mt-1 text-gray-300">{tier.range}</p>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-[#232a5f] rounded-lg border border-gray-600 p-4 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <tier.icon className={`text-[28px] mb-2 ${tier.color}`} />
                <h3 className="font-bold text-xl mb-2 text-secondary">{tier.level}</h3>
               
                <ul className="text-sm space-y-1 text-white mt-2 list-none">
                  {tier.backContent.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <LiveAccountButton />
      </div>
    </section>
  );
}
