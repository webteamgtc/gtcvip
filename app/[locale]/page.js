"use client";
import Hero from "./components/home/Hero";
import { useTranslations } from "next-intl";
import WhyGTC from "./components/home/FrequentlyAskedQuestions";
import SecurityFund from "./components/home/SecurityFund";
import StatCounter from "./components/home/StatCounter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import LocationContextProvider from "../../context/location-context";
import { LiveChatWidget } from "@livechat/widget-react";
import DirectAccess from "./components/home/DirectAccess";
import Map from "./components/home/Map";
import ClientLogo from "./components/home/ClientLogo";
import AssesAsset from "./components/home/AssesAsset";
import TradingPlatform from "./components/home/TradingPlatform";
import FreshPress from "./components/about/FreshPress";
import HeroBanner from "./components/home/HeroBanner";
import TickerTapeWidget from "./components/home/TickerTapeWidget ";
import FrequentlyAskedQuestions from "./components/home/FrequentlyAskedQuestions";




export default function Home() {
  const t = useTranslations("home");
  useEffect(() => {
    AOS.init({ disable: "mobile" }); 
  }, []);
  const gtcFaqData = [
    {
      title: "Where can I access the GTC VIP Trading Room?",
      paragraphs: ["Simply log in to your GTC Client Portal and click 'VIP Trading Room' to enter."],
    },
    {
      title: "How do I become eligible?",
      paragraphs: ["By opening a live account and meeting the minimum deposit requirements, you automatically unlock access to GTC VIP."],
    },
    {
      title: "What happens if my balance drops below the required amount?",
      paragraphs: ["Once your VIP level is unlocked, it remains active regardless of future balance fluctuations."],
    },
    {
      title: "Who are the experts behind the analysis?",
      paragraphs: ["Our trading ideas, signals, and analysis come from award-winning experts, prop traders, and global market analysts."],
    },
    {
      title: "How is my VIP Tier determined?",
      paragraphs: ["Your tier is based on your total lifetime deposit and (soon) your trading volume over the last 90 days."],
    },
    {
      title: "Can I change my display name?",
      paragraphs: ["Yes. After logging into the platform, you can edit your display name anytime in your profile settings."],
    },
    {
      title: "Are my conversations private?",
      paragraphs: ["Yes. Any direct messages between you and analysts are private. Community discussions are moderated for quality and security."],
    },
    {
      title: "Can I participate in competitions?",
      paragraphs: ["Absolutely. GTC VIP hosts exclusive competitions — based on trading volume, referrals, and engagement — with fantastic rewards up for grabs."],
    },
  ];
  
  return (
    <>
      <LiveChatWidget license="13507356" />
      <LocationContextProvider>
        <HeroBanner />
     
        <DirectAccess />
        
        <FrequentlyAskedQuestions data={gtcFaqData} />
    
  
        {/* <CompanyNews/> */}
        </LocationContextProvider>
    </>
  );
}