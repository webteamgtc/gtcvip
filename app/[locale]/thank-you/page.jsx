"use client";

import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useUserStore } from "../store/userSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterNew from "../components/FooterNew";

const ThankYouPage = () => {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  const t = useTranslations("thankYouLiveAccount.content");
  const router = useRouter();

  const user = useUserStore((state) => state.user);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const unsubFinishHydration = useUserStore.persist.onFinishHydration(() => {
      setHasHydrated(true);
    });

    // In case hydration has already finished
    if (useUserStore.persist.hasHydrated()) {
      setHasHydrated(true);
    }

    return () => {
      unsubFinishHydration();
    };
  }, []);

  useEffect(() => {
    if (hasHydrated && !user) {
      router.push("/");
    }
  }, [hasHydrated, user]);

  if (!hasHydrated || !user) return null;

  return (
    <>
    <Header />
    <section className="pt-10 md:pt-14 xl:pt-20 3xl:pt-20 5xl:pt-28 transition-colors duration-300">
  <div className="container text-left md:pt-20 lg:pt-24 2xl:pt-28">
    {/* Heading */}
    <div className="top-section text-center mb-10">
      <h2
        style={{ lineHeight: "3.3rem" }}
        className="
          text-primary
          dark:text-transparent dark:bg-gradient-to-r dark:from-secondary dark:via-white dark:to-secondary dark:bg-clip-text 
          text-xl font-[500] xl:text-[30px] 2xl:text-[40px] capitalize max-w-lg mx-auto leading-normal 
          transition-colors duration-300
        "
      >
        {`Success! You're All Set, (${user?.Full_name})!`}
      </h2>
    </div>

    {/* Content */}
    <div className="grid grid-cols-1 gap-6 items-center">
      <div className="content-area text-primary dark:text-white text-center transition-colors duration-300">
        <p className="font-[400] text-sm md:text-base mb-5">
          Thank you for choosing GTCVIP and expressing interest in our services!
        </p>

        <p className="pb-5">
          Our support team will contact you shortly to gather more information and explain the best way to utilize our services.
        </p>

        <p className="pb-5">Here’s to an exciting journey ahead!</p>
        <p className="pb-5">Having Trouble?</p>
        <p className="pb-5">
          Contact Us at +971 800 667788 & Email:
          <a
            className="cursor-pointer ml-2 text-secondary"
            href="mailto:support@gtcvip.com"
          >
            support@gtcvip.com
          </a>
        </p>
        <p className="pb-5 text-base">See you soon!</p>
        <p className="pb-5 text-secondary font-bold text-xl md:text-2xl">GTC VIP Team</p>
      </div>
    </div>
  </div>
</section>
<FooterNew />
</>
  );
};

export default ThankYouPage;
