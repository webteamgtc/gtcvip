"use client";
import React, { useCallback, useEffect, useState } from "react";
import Hero from "../components/common/Hero";
import { useLocale, useTranslations } from "next-intl";
import MarketOverViewNew from "../components/about/MarketOverViewNew";
import GenericTradingHours from "../components/about/GenericTradingHours";

const MarketOverviewPage = () => {
   const t = useTranslations("tradingTools.marketOverView");

  return (
    <>
     <div className="bg-[#111948]">
      <GenericTradingHours />
      <div className="inner-content pb-10 md:pb-12 lg:pb-14 xl:pb-16 2xl:pb-20 mt-14">
        <div className="container">
        <h2 className="HeadingH2 text-white">Holiday Hours & Notices</h2>
          <p className="text text-center text-white mb-5 s max-w-5xl mx-auto">
        Market holidays may affect the trading schedule and volatility of the markets. This can vary from country to country, so it is important to stay up to date with the upcoming changes and holiday trading hours to plan your trades accordingly.




          </p>
          <div className="max-w-6xl mx-auto">
    <MarketOverViewNew />
          </div>
     


        </div>
      </div>
      </div>
    </>
  );
};

export default MarketOverviewPage;
