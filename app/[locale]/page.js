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
      paragraphs: ["The GTC VIP is a Loyalty Program that appreciates your loyalty. As you collect points through your activities, you can choose from a range of luxury gifts and exclusive benefits created especially for our VIP members."],
    },
    {
      title: "How do I earn points?",
      paragraphs: ["You earn points by participating in various activities such as making purchases, referring friends, or completing special offers. The more you engage, the faster you climb the VIP ladder and get premium rewards like Mercedes G63 or iPhone 16 pro max and many more."],
    },
    {
      title: "How do I redeem my points?",
      paragraphs: ["Redeeming your points is simple. Just log in to your VIP dashboard, get into the “Store” Module, and claim your favorite reward directly through the platform."],
    },
    {
      title: "Is the program free to join?",
      paragraphs: ["Yes! Signing up for the GTC VIP Loyalty Program is completely free. Start earning points and enjoying exclusive benefits right away without any cost."],
    },
    {
      title: "Can I lose my points or status?",
      paragraphs: ["Your points and status are safe as long as you stay active in the program. We do encourage regular participation to keep your VIP benefits active. Specific terms and conditions apply, which you can find in the program gu"],
    },
    {
      title: "Can I share my rewards or points with others?",
      paragraphs: ["No, points and rewards are non-transferable and cannot be shared with anyone."],
    },
    {
      title: "How do I get help if I have questions about the program?",
      paragraphs: ["Our dedicated support team is here to help! You can contact us anytime through the help center or by emailing hello@gtcvip.com, and we’ll assist you with all your questions."],
    },
  ];
  
  return (
    <>
      <LiveChatWidget license="13507356" />
      <LocationContextProvider>
        <HeroBanner />
     
        <DirectAccess />
        <YouStayed />

        <TierCards />
        <VIPSteps />
        
        <FrequentlyAskedQuestions data={gtcFaqData} />
   
  
        {/* <CompanyNews/> */}
        </LocationContextProvider>
    </>
  );
}