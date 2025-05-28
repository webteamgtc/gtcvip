import { useTranslations } from "next-intl";
import Link from "next/link";

const LiveAccountButton = () => {
  const t = useTranslations("home.hero");

  return (
    <>
    <div className="flex flex-col justify-between items-center  gap-2">
       <Link
      href="https://my.gtcvip.com/v2/app/register"
      target="_blank"
      className="
    text-sm lg:text-lg px-8 py-2 text-center rounded-full
    w-full md:w-48 md:mx-0 mx-auto
    bg-primary text-white hover:bg-secondary hover:text-white
    dark:bg-white dark:text-black dark:hover:bg-secondary dark:hover:text-white
    transition-colors duration-300
  "
    >
     BE REWARDED


    </Link>

       <span className="text-sm">or <Link href="https://my.gtcvip.com/v2/app/login" target="_blank" className="text-secondary underline">Login</Link></span>
    
    </div>
    </>
 
  );
};

export default LiveAccountButton;
