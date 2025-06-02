import { createTranslator } from "next-intl";
import React from "react";
import MarketOverviewPage from "../pages/MarketOverview";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/market-overview`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/market-overview`;


  return {
    title: "Get Latest Market Overview and Trends with GTCVIP",
    description: "Get the latest market overview with real-time data, trends, and analysis. Stay ahead in trading with up-to-date insights on global financial markets.",
    alternates: {
      canonical: url,
    },
  };
}
const Page = () => {
  return <MarketOverviewPage />;
};

export default Page;
