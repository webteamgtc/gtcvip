import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import LiveAccountButton from "../liveAccountButton";
import Button from "../common/Button";
const Hero = () => {
  const t = useTranslations("home.hero")
  const slideContents = [
    {
      title: t("title3"),
      description: t("desc3")
    },
    {
      title: t("title1"),
      description: t("desc1")
    }
    
  ];

  const path = usePathname();
  const isAr = path.includes('/ar');

  return (
    <section className="relative lg:h-[40vh] xl:h-[40vh] 2xl:h-[40vh] 3xl:h-[50vh] py-10 lg:py-7 xl:py-16 2xl:py-20 3xl:pt-40 4xl:pt-48 5xl:py-56">
      {/* Show video only on larger screens */}
  

      {/* Show image on smaller screens */}
      <div className="lg:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-opacity-20 py-10" style={{ backgroundImage: "url('/bg.webp')" }}></div>

      <div className="container relative z-10">
        <div className="text-center">
          <Swiper
            spaceBetween={30}
            loop
            effect={'fade'}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, EffectFade]}
            autoplay={{
              delay: 8000
            }}
            fadeEffect={{
              crossFade: true,
              duration: 6000
            }}
          >
            {slideContents.map((slide, index) => (
              <SwiperSlide key={index}>
                <h1 className="text-primary text-xl xl:text-3xl 2xl:text-6xl 3xl:text-[68px] font-medium md:leading-none tracking-tight">{slide.title}</h1>
                <p className={`text-accent text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl tracking-wider pt-5 mx-auto ${isAr ? "md:w-[900px]" : "md:w-[800px]" }`}>{slide.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
