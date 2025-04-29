import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLogin } from "react-icons/md";
import { useLocale } from "next-intl";
import Link from "next-intl/link";
import { useRouter } from "next-intl/client";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useTranslations } from "next-intl";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function LanguageMobile(props) {
  const pathname = usePathname();
  const locale = useLocale();

  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
  const [open, setOpen] = useState(false);
  const t = useTranslations("navigation");
  const ref = useDetectClickOutside({
    onTriggered: () => {
      setOpen(false);
    },
  });
  const languages = [
    { code: "zh-hans", label: "中文", flagSrc: "/zh-hans.webp" }
    // Add more languages as needed
  ];
  return (
   <>
     <div className="flex flex-row ">
              <Link
                href="https://mygtcch.com/"
                target="_blank"
                className="text-white hover:bg-primary hover:text-white text-sm border border-gray-200 px-2 w-[120px] py-[7px] flex gap-2 items-center bg-secondary"
              >
                <MdOutlineLogin size={20} />
                会员登录
              </Link>
              {/* Ensure any other link you want to add border styling to is updated similarly */}
            </div>
   </>
  );
}
