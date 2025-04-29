"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import { useTranslations } from "next-intl";

const Map = () => {
  
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []); 

  const t = useTranslations("home.global_presence")

  const countries = [
    { name: t("uae") },
    { name: t("china") },
    { name: t("vanuato") },
    { name: t("vietnam") },
    { name: t("pakistan") },
    { name: t("malaysia") },
    { name: t("hong_kong") },
    { name: t("indonesia") },
    { name: t("india") },
    { name: t("egypt") },
    { name: t("cyprus") },
    { name: t("turkey") },
    { name: t("nigeria") },
    { name: t("mauritius") },
    { name: t("south_africa") }
  ];

  return (
    <section className="container md:py-16 3xl:py-28 py-8 text-center">
      <h2 className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text text-xl font-[500] xl:text-[30px] 2xl:text-[45px] capitalize max-w-xl leading-tight mb-5">{t("heading")}</h2>
      <p className='text pb-5 max-w-4xl mx-auto'>
      {t("desc")}
        </p>
      <div className="flex flex-col lg:flex-col justify-center items-center lg:items-start lg:pt-8">
      <div className="flex flex-row lg:flex-row items-center md:justify-around lg:gap-2 lg:w-full lg:mb-4">
          {countries.slice(0, 8).map((country, index) => (
            <span
              
              className={`py-2 text-accent text-[10px] lg:text-[18px] px-2 md:min-w-[100px] hover:bg-secondary hover:text-white hover:cursor-pointer transition-all duration-300 hover:scale-110 text-center ${index === 0 && `text-secondary`}`}
            >
              {country.name}
            </span>
          ))}
        </div>
        <div className="relative w-full h-40 md:h-[350px] my-5">
          <Image
            src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/global-map.webp"
            alt="map"
           fill
            className="object-contain"
          />
        </div>
        <div 
        className="flex flex-row lg:flex-row justify-center lg:gap-2 md:mb-8 lg:mb-0 xl:justify-around lg:w-full lg:mt-4"
       
        >
          {countries.slice(8, 16).map((country, index) => (
            <span
            d
              className={`py-2 text-accent text-[10px] md:min-w-[110px] lg:text-[18px] px-2  hover:bg-secondary hover:text-white hover:cursor-pointer transition-all duration-300 hover:scale-110 text-center`}
            >
              {country.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Map;