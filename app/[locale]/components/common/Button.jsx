"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";
import Link from "next/link";

const Button = () => {
  const t = useTranslations("common");
  const router = useRouter();
  const locale = useLocale();

  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center relative pt-16 lg:pt-6 xl:pt-12 2xl:pt-28 3xl:pt-36">
      <Link
        className="bg-secondary uppercase text-white  hover:text-white text-sm 3xl:text-xl  px-8 py-3 hover:bg-primary transition-colors duration-500 text-center md:w-auto w-[300px] md:m-0 mx-auto"
        href='https://mygtcfx.com/getview?view=register'
        target="_blank"
      >
        {t("liveAccount")}
      </Link>
      <button
        className="bg-gray-300 uppercase border border-gray-400 text-accent px-8 py-3 text-sm 3xl:text-xl  hover:bg-primary hover:text-white transition-colors duration-500 text-center md:w-auto w-[300px] md:m-0 mx-auto"
        onClick={() => {
          router.push("/free-demo-account", { locale: locale });
        }}
      >
        {t("demoAccount")}
      </button>
    </div>
  );
};

export default Button;