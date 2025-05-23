"use client";
import Hero from "./components/home/Hero";
import { useTranslations } from "next-intl";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import LocationContextProvider from "../../context/location-context";
import { LiveChatWidget } from "@livechat/widget-react";
import DirectAccess from "./components/home/DirectAccess";
import HeroBanner from "./components/home/HeroBanner";
import FrequentlyAskedQuestions from "./components/home/FrequentlyAskedQuestions";
import VIPSteps from "./components/home/VIPSteps";
import VIPJourney from "./components/home/VIPJourney";
import { useUserStore } from "./store/userSlice";
import YouStayed from "./components/home/YouStayed";
import TierCards from "./components/home/TierCards";




export default function Home() {
  const t = useTranslations("home");
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    AOS.init({ disable: "mobile" }); 
    setUser(null);
  }, []);
  const gtcFaqData = [
    {
      title: "What is the GTC VIP?",
      paragraphs: ["GTC VIP is our Loyalty Programme that’s been built for traders who stick with us. Earn points through your trading activity and redeem them for luxury rewards, exclusive perks, and unforgettable experiences, which are all designed to thank you for your loyalty."],
    },
    {
      title: "How do I earn points?",
      paragraphs: ["You earn points by doing what you already do… trading. You can also earn valuable points by referring friends, joining promotions, and completing fun missions. The more you engage, the faster you rise through the tiers and unlock rewards like an iPhone 16 Pro Max… or even a Mercedes G63."],
    },
    {
      title: "How do I redeem my points?",
      paragraphs: ["Log into your VIP dashboard, head to the Store, and pick your reward. Just a few clicks and that dream prize is yours. No hassle, no fuss."],
    },
    {
      title: "Is it free to join GTC VIP?",
      paragraphs: ["As long as you remain active, your points and tier status are safe. If you go inactive for an extended period, points may expire. You can find the full details in the programme’s Terms & Conditions."],
    },
    {
      title: "Can I lose my points or status?",
      paragraphs: ["Your points and status are safe as long as you stay active in the program. We do encourage regular participation to keep your VIP benefits active. Specific terms and conditions apply, which you can find in the program gu"],
    },
    {
      title: "Can I share my rewards or points with others?",
      paragraphs: ["No. Your points and rewards are linked to your unique GTC VIP account and can’t be transferred or shared."],
    },
    {
      title: "How do I get help if I have questions about the program?",
      paragraphs: ["We’ve got your back. Contact our friendly support team anytime via the Help Centre or drop us an email at hello@gtcvip.com and we’ll get right back to you."],
    },
  ];
  
  return (
    <>
      <LiveChatWidget license="13507356" />
      <LocationContextProvider>
        <HeroBanner />
       <YouStayed />
        <DirectAccess />


        <TierCards />
        <VIPSteps />
        
        <FrequentlyAskedQuestions data={gtcFaqData} />
   
  
        {/* <CompanyNews/> */}
        </LocationContextProvider>
    </>
  );
}