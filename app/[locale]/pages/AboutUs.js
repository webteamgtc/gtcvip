"use client";
import React from "react";
import WhyChooseIcon from "../components/about/WhyChooseIcon";
import { useTranslations } from "next-intl";
import TradeInvest from "../components/about/TradeInvest";

const AboutUsPage = () => {
  const t = useTranslations("about.about-gtc-group");
  return (
    <>
    <WhyChooseIcon />
    <TradeInvest />
    
     </>
  );
};

export default AboutUsPage;
