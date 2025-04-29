"use client";
import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import SocialIcon from "./SocialIcon";
import CopyRight from "./CopyRight";
import Link from "next-intl/link";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useRouter } from "next-intl/client";
import TradeInvest from "./about/TradeInvest";

const Footer = () => {
  const t = useTranslations("footerLink");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");

  const footerLinks = [
    {
      title: t("link.label"),
      links: [
        {
          name: t("link.menu1"),
          link: "/about-us",
        },
        {
          name: t("link.menu6"),
          link: "/why-gtc-group",
        },
        {
          name: t("link.menu2"),
          link: "/regulations",
        },
        {
          name: t("link.menu5"),
          link: "/global-presence",
        },
        {
          name: t("link.menu3"),
          link: "/awards",
        },
        
        {
          name: t("link.menu4"),
          link: "/compensation-fund",
        },      
        {
          name: t("link.menu10"),
          link: "/faq",
        },
        {
          name: t("link.menu8"),
          link: "/careers",
        },
        {
          name: t("link.menu9"),
          link: "/contact-us",
        },
      ],
    },
    {
      title: t("rules.label"),
      links: [
        {
          name: t("rules.menu1"),
          link: "/forex",
        },
        {
          name: t("rules.menu2"),
          link: "/precious-metals",
        },
        {
          name: t("rules.menu3"),
          link: "/stock",
        },
        {
          name: t("rules.menu6"),
          link: "/cfd-energy",
        },
        {
          name: t("rules.menu4"),
          link: "/commodities",
        },
        {
          name: t("rules.menu5"),
          link: "/indices",
        },
        {
          name: t("rules.menu7"),
          link: "/mt4-platform",
        },
        {
          name: t("rules.menu8"),
          link: "/mt5-platform",
        },
        {
          name: t("rules.menu9"),
          link: "/ctrader-platform",
        },
        {
          name: t("rules.menu10"),
          link: "/download-app",
        },
      ],
    },
    {
      title: t("update.label"),
      links: [
        {
          name: t("update.menu1"),
          link: "/liquidity-technology",
        },
        {
          name: t("update.menu2"),
          link: "/copy-trading",
        },
        {
          name: t("update.menu3"),
          link: "/pamm-account",
        },
        {
          name: t("update.menu4"),
          link: "/mam-account",
        },
        {
          name: t("update.menu5"),
          link: "/signal-centre-tool",
        },
        {
          name: t("update.menu6"),
          link: "/autochartist",
        },
        {
          name: t("update.menu7"),
          link: "/acuity-trading-tool",
        },
        {
          name: t("update.menu8"),
          link: "/technical-tools",
        },
        {
          name: t("update.menu9"),
          link: "/vps-hosting-services",
        },
        {
          name: t("update.menu10"),
          link: "/client-agreement-MU",
        },
      ],
    },
    {
      title: t("policy.label"),
      links: [
        {
          name: t("policy.menu1"),
          link: "/privacy-policy",
        },
        {
          name: t("policy.menu2"),
          link: "/withdrawal-policy",
        },
        {
          name: t("policy.menu3"),
          link: "/kyc-compliance-policy",
        },
        {
          name: t("policy.menu4"),
          link: "/deposit-and-refund-policy",
        },
        {
          name: t("policy.menu5"),
          link: "/customer-due-diligence-policy",
        },
        {
          name: t("policy.menu6"),
          link: "/terms-and-conditions",
        },
        {
          name: t("policy.menu7"),
          link: "/risk-warning",
        },
        {
          name: t("policy.menu8"),
          link: "/company-news",
        },
        {
          name: t("policy.menu9"),
          link: "/market-overview",
        },
      ],
    },
  ];
  const contact = [
    {
      title: t("contact.label"),
      links: [
        {
          text: "800 667788",
          label: t("contact.menu1"),
          icon: BsTelephoneFill,
        },
        {
          text: "support@gtcfx.com",
          label: t("contact.menu2"),
          icon: MdEmail,
        },
        {
          text: "393526",
          label: t("contact.menu3"),
          icon: FaEnvelopeOpenText,
        },
        {
          text: "24/7",
          label: t("contact.menu4"),
          icon: AiFillClockCircle,
        },
      ],
    },
  ];
 // Add a check to see if the pathname is not the home page
  const isNotHomePage = pathname !== `/${locale}` && pathname !== '/';
  return (
    <> 
    {isNotHomePage && <TradeInvest />}
      <div className={`bg-primary pb-10 z-30 ${isNotHomePage ? 'pt-[8%] sm:pt-[18%] lg:pt-[16%] xl:pt-[12%] 2xl:pt-[10%] 3xl:pt-[9%] 4xl:pt-[6%]' : 'pt-10'}`}>
        <div className="max-width md:flex justify-start items-center px-2 ">
        <div className="md:basis-full text-xs text-white text-opacity-70 space-y-3 leading-5">
            <p>
              <span className="text-secondary">Risk Warning: </span>
              Investing in derivative products carries significant risks and may not be suitable for all investors. Volatility in these instruments can increase the level of risk and potential loss exposure. Before making any decision to engage in DGCX Derivaitive Products, it is essential to carefully assess your investment objectives, level of experience, and risk tolerance. You should only invest funds that you can afford to lose. We strongly encourage you to educate yourself thoroughly about the associated risks and, if you have any questions, seek advice from an independent financial or tax advisor.
            </p>
            <p>
              <span className="text-secondary">GTC Multi Trading DMCC: </span>
              is a limited company licensed and incorporated under the laws of the Dubai Multi Commodities Centre (No.DMCC-312687) and licensed by the Securities and Commodities Authority, United Arab Emirates (No.202200000007) to practice the activity of Commodity Brokerage – Trading and Clearing. Registered address: Unit No: 1501, 1 Lake Plaza, Plot No: JLT-PH2-T2A, Jumeirah Lakes Towers, Dubai, United Arab Emirates Website: <Link href="https://gtcmtd.com/" className="text-secondary">www.gtcmtd.com</Link>
                                </p>
                                <p>The information on this website may only be copied with the explicit written consent of GTC Multi Trading DMCC.</p>
                                <p>The entity mentioned above provides services only to individuals residing in the United Arab Emirates.</p>
            {/* <p>
              <span className="text-secondary">{t("footerNotice.gtc_group_heading2")}</span>
              {t("footerNotice.gtc_group_para2")}
            </p> */}
            <p>
              <span className="text-secondary">Disclaimer: </span>
              All products and services promoted on this website are not intended for distribution to, or used by, any person or organization in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
            </p>

          </div>

        </div>
      </div>
      <CopyRight />
    </>
  );
};

export default Footer;
