'use client';
import { useTranslations } from "next-intl";

const LiveAccountButton = () => {
  const t = useTranslations("home.hero");

  const handleScroll = () => {
    const target = document.getElementById("home"); // change ID if needed
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col justify-between items-center gap-2">
      <a href="https://my.gtcvip.com/v2/app/register" target="_blank"
        className="
          text-sm lg:text-lg px-6 py-2 text-center rounded-full
          w-64 md:w-64 md:mx-0 mx-auto
          bg-primary text-white hover:bg-secondary hover:text-white
          dark:bg-white dark:text-black dark:hover:bg-secondary dark:hover:text-white
          transition-colors duration-300
        "
      >
        Join Now to Be Rewarded
      </a>

     <span className="text-sm md:text-base">
  Already an existing member or a GTC client?{" "}
  <a
    href="https://my.gtcvip.com/v2/app/login"
    target="_blank"
    className="text-secondary underline"
  >
    Login
  </a>
</span>
    </div>
  );
};

export default LiveAccountButton;
