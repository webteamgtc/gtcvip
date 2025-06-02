import { createTranslator } from "next-intl";
import React from "react";
import TradingTools from "../pages/TradingTools";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/market-overview`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/market-overview`;


  return {
    title: "Trading Tools - GTCVIP",
    description: "Stay updated with our economic calendar. Keep track of upcoming economic events and their effects on market movements.",
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <TradingTools />;
};

export default Page;
