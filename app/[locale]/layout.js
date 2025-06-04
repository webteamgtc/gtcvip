import FooterNew from "./components/FooterNew";
import Header from "./components/Header";
import "../globals.css";
import "aos/dist/aos.css";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { notFound } from "next/navigation";
import localFont from "@next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import { FacebookPixelEvents } from "./components/utilities/pixelEvent";
import Script from "next/script";
import { supportedLanguages } from "@/helpers/localization";
import CookiesBanner from "@/app/[locale]/components/CookiesBanner";
import { getCookie, setCookie } from "cookies-next";
import LoadingPopup from "./components/LoadingPopup";

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/Outfit/Outfit-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Outfit/Outfit-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Outfit/Outfit-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Outfit/Outfit-SemiBold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-outfit",
});


export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}`;

  return {
    title: "Join GTC VIP and Elevate Your Trading Experience Today",
    description: "Join GTC VIP to access expert insights, exclusive rewards, competitions, and personalized coaching. Elevate your trading experience with GTC VIP today!",
    alternates: {
      canonical: url,
    },
  };
}


export default async function LocaleLayout({ children, params }) {
  setCookie("gtcfx", "true",  { maxAge: 60 * 6 * 24 });

  const { locale } = params;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  const currentLanguage = supportedLanguages[locale];

  return (
    <html
      lang={locale}
      dir={currentLanguage?.direction}
      className={`${
        currentLanguage?.font == "font-kufi"
          ? `${kufi.variable} font-kufi`
          : `${roboto.variable} font-sans`
      } `}
    >
      <head>
        <meta name="facebook-domain-verification" content="60dqaxv53ub77e10r0xc6bmbl9y2b3"/>
      
       
     
      </head>
      <body className="bg-white text-black dark:bg-gradient-to-t dark:from-[#283085] dark:via-[#050331] dark:to-[#050331] dark:text-white transition-colors duration-300 min-h-screen">

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header currentLanguage={currentLanguage} />
          {children}
          <ToastContainer autoClose={3000} />
          <Suspense fallback={null}>
            <FacebookPixelEvents />
          </Suspense>
          <FooterNew />
        </NextIntlClientProvider>
       
      
      </body>
    </html>
  );
}