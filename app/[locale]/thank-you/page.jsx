"use client";

import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useUserStore } from "../store/userSlice";

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
    <section className="py-10 md:py-14 xl:py-20 3xl:py-20 5xl:py-28 bg-gradient-to-t from-[#283085] via-[#050331] to-[#050331]">
      <div className="container text-left md:pt-20 lg:pt-24 2xl:pt-28">

      <div className="top-section text-center mb-10">
        <h2  style={{ lineHeight: "3.3rem" }}
          className="bg-gradient-to-r from-secondary via-white to-secondary inline-block text-transparent bg-clip-text text-xl font-[500] xl:text-[30px] 2xl:text-[45px] capitalize max-w-lg leading-normal">
         {`Success! You're All Set, (${user?.Full_name})!`}

        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 items-center">
        <div className="content-area text-white text-center">
            <p className="font-[400] text-sm md:text-base mb-5">
              {`Thank you for choosing GTCVIP and expressing interest in our services!`}
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
              </a>      </p>
            <p className=" pb-5 ">
            See you soon! 
            </p>
            <p className="pb-5 text-secondary font-bold">GTC VIP Team</p>
        </div>

      </div>
       
      </div>
    </section>
  );
};

export default ThankYouPage;
