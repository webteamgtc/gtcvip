"use client";
import React from "react";
import { useTranslations } from "next-intl";
import ContactFrom from "../components/contactUs/ContactFrom";
import { SiLivechat } from "react-icons/si";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";


const ContactUsPage = () => {
  const t = useTranslations("about.contact-us");

  const tradingBenefits = [
        {
      "text": 'info@gtcfc.com',
      "icon": <MdMarkEmailRead />
    },
    {
      "text": '+971 4 553 8416',
      "icon": <FaPhoneAlt  />
    }
  ];
  return (
    <>
      <section className="main-content py-12">
     
          <div className="container  relative z-30">
              <div className="max-w-6xl mx-auto text text-left">
              <div className="flex flex-row items-center justify-center gap-2 md:mb-6">
          <p className="text-secondary text-4xl md:text-5xl">
            <MdOutlineContactPhone />
          </p>
          <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text HeadingH2 text-left mb-0">
            {t("title")}
          </h2>
        </div>

                <p className="py-3 text-center">{t("sub_title1_1")} </p>
                <p className="py-3 text-center">{t("sub_title1_2")}</p>
                <div className="flex flex-row justify-center items-center gap-6 md:gap-8 pt-6">
  {tradingBenefits.map((benefit, index) => (
    <div 
      key={index} 
      className={`flex relative bg-gradient-to-l from-[#202d7bdb] via-[#050331] to-[#050331] shadow-lg items-center justify-center gap-2 px-3 md:px-12 py-2 md:py-3 group hover:bg-secondary rounded-3xl hover:rounded-3xl hover:cursor-pointer transition-all duration-300 hover:shadow-xl ${
        index === tradingBenefits.length - 1 ? 'md:col-span-1 col-span-2' : 'col-span-1'
      }`}
    >
      <span className="group-hover:text-[#FFF] text-lg md:text-2xl text-secondary">{benefit.icon}</span>
      <span className="text-white group-hover:text-secondary text-sm 2xl:text-[17px] ">{benefit.text}</span> 
    </div>
  ))}
</div>
              </div>
          
          </div>
      </section>
   
    </>
  );
};

export default ContactUsPage;
