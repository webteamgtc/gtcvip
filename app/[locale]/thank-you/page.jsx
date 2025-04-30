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
    <section className="py-10 md:py-14 xl:py-20 3xl:py-20 5xl:py-28">
      <div className="container text-left md:pt-20 lg:pt-24 2xl:pt-28">
        <h1 className="text-[2em] md:text-[2em] text-primary mb-0">
          {`Success! You're All Set, (${user?.Full_name} ${user?.last_name})!`}
        </h1>
        <p className="text-secondary font-[400] md:text-[1.5rem] mb-5">
          {`Your account is almost ready to go. We've just sent a confirmation email to (${user?.email}). 
Check your inbox and click the verification link to complete your registration.
Once you verify, we'll log you into the GTC Client Area and you’ll be ready to make your first deposit and start trading gold with us!
Need help? Our support team is here for you.`}
        </p>

        <p className="pb-2 max-w-96">
          Let’s make this your best trading experience yet!
        </p>
        <p className="pb-2">Having Trouble?</p>
        <p className="pb-2">
          Contact Us at +971 800 667788. See you soon! GTC Team
        </p>
        <p className="text-left pb-2">
          Email:
          <a
            className="cursor-pointer ml-2 text-secondary"
            href="mailto:support@gtcfx.com"
          >
            support@gtcfx.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ThankYouPage;
