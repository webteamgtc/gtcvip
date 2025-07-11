import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { useTranslations } from "next-intl";

const clientLogos = [
  "/paytrust88_gray.webp",
  "/payment-asia.webp",
  "/verified-by.webp",
  "/mastercard.webp",
  "/payment_method.webp",
  "/visa-1.webp",
  "/cashu-1.webp",
  "/bank-1.png",
  "/MasterCard_Logo.webp",
  "/paytrust88.webp",
  "/payport.webp",
  "/fasapay.webp",
  "/drgonpay.webp",
];

const ClientLogo = () => {
  const t = useTranslations("home")
  return (
    <div className="container pb-16">
      {/* Logo Carousel animation */}
      <div className="flex flex-row items-center justify-start">
    <div className="relative h-8 md:h-14 w-16 md:w-36">
      <Image src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/home/original.png" alt="" layout="fill" className="object-contain" />              
    </div>
    <div className="flex flex-col">
      <h3 className=" text-base md:text-xl min-w-[150px]">{t("our-payment")}</h3>
    </div>
    
    <div
        x-data="{}"
        x-init="$nextTick(() => {
                    let ul = $refs.logos;
                    ul.insertAdjacentHTML('afterend', ul.outerHTML);
                    ul.nextSibling.setAttribute('aria-hidden', 'true');
                })"
        className="pb-2 w-full flex-nowrap overflow-hidden hidden md:inline-flex"
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={7}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            360: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <Image
                src={logo}
                alt={`GTC Client`}
                width={100}
                height={26}
                className="px-0 w-24 h-7 lg:w-[100px] lg:h-[26px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

  </div>

      <div
        x-data="{}"
        x-init="$nextTick(() => {
                    let ul = $refs.logos;
                    ul.insertAdjacentHTML('afterend', ul.outerHTML);
                    ul.nextSibling.setAttribute('aria-hidden', 'true');
                })"
        className="pt-5 w-full inline-flex flex-nowrap overflow-hidden md:hidden "
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={7}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            360: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <Image
                src={logo}
                alt={`GTC Client`}
                width={100}
                height={26}
                className="px-0 w-24 h-7 lg:w-[80px] lg:h-[22px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* End: Logo Carousel animation */}
    </div>
  );
};

export default ClientLogo;
