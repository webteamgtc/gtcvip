import { useTranslations } from "next-intl";
import Link from "next/link";

const LiveAccountButton = () => {
  const t = useTranslations("home.hero");

  return (
    <Link
      href="https://my.gtcvip.com/v2/app"
      target="_blank"
      className="bg-secondary text-white border border-white hover:text-white text-sm lg:text-xl px-8 py-2 text-center rounded-full md:w-auto w-[300px] md:m-0 mx-auto transition-colors duration-900 hover:bg-primary"
    >
     Open Account Today
    </Link>
  );
};

export default LiveAccountButton;
