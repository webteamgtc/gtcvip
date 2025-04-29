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

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "zh-hans" },
    { locale: "ar-AE" },
    { locale: "ms-MY" },
    { locale: "hi-IN" },
    { locale: "id-ID" },
    { locale: "fr-FR" },
    { locale: "es-ES" },
    { locale: "vi-VN" },
    { locale: "fa-IR" },
  ];
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
        <Script
          async={true}
          src="https://www.googletagmanager.com/gtag/js?id=AW-10835048699"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'AW-10835048699');
            `,
          }}
        />
        <Script
          id="pixel-chaty"
          async={true}
          src="https://cdn.chaty.app/pixel.js?id=WugZFesA"
        ></Script>
      </head>
      <body className="bg-white">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header currentLanguage={currentLanguage} />
          {children}
          <ToastContainer autoClose={3000} />
          <Suspense fallback={null}>
            <FacebookPixelEvents />
          </Suspense>
   
          <FooterNew />
        </NextIntlClientProvider>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', "GTM-PSWH9QF");
        `,
          }}
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        function gtag_report_conversion(url) {
          var callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
          };
          gtag('event', 'conversion', {
              'send_to': 'AW-10835048699/LUb0CNmY5OsYEPvxxq4o',
              'event_callback': callback
          });
          return false;
        }
           document.addEventListener("wpcf7submit", function(event){
            gtag_report_conversion();
          }, false);
        `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: ` <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSWH9QF"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}