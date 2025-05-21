import { useTranslations } from "next-intl";
import Link from "next/link";

const LiveAccountButton = () => {
  const t = useTranslations("home.hero");

  return (
    <Link
      href="https://my.gtcvip.com/v2/app/register"
      target="_blank"
      className="
        text-sm lg:text-xl px-8 py-3 text-center rounded-full md:w-auto w-[300px] md:m-0 mx-auto
        bg-primary text-white hover:bg-secondary hover:text-white
        dark:bg-white dark:text-black dark:hover:bg-secondary dark:hover:text-white
        transition-colors duration-300
      "
    >
      Open Account Today
    </Link>
  );
};

export default LiveAccountButton;
