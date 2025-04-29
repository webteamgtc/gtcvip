import { useTranslations } from 'next-intl'
import React from 'react'
import Link from 'next/link';
import {
    BiLogoFacebookCircle,
    BiLogoYoutube,
    BiLogoLinkedinSquare,
    BiLogoInstagramAlt,
    BiLogoWhatsapp,
    BiLogoSkype,
    BiLogoTiktok,
  } from "react-icons/bi";
  import { FaThreads,FaXTwitter} from "react-icons/fa6";


  const socialMediaIcons = [
  { icon: BiLogoFacebookCircle, link: "https://www.facebook.com/gtcfxofficial" },
  { icon: FaXTwitter, link: "https://twitter.com/GTC_fx" },
  { icon: BiLogoYoutube, link: "https://www.youtube.com/@gtcfx" },
  { icon: BiLogoLinkedinSquare, link: "https://linkedin.com/company/gtcfx-official" },
  { icon: BiLogoInstagramAlt, link: "https://www.instagram.com/gtc.forex/?hl=en" },
  { icon: BiLogoWhatsapp, link: "https://web.whatsapp.com/send?phone=97145562800" },
  { icon: BiLogoSkype, link: "skype:live:.cid.639f05dc75d9821c?chat" },
  { icon: BiLogoTiktok, link: "https://www.tiktok.com/@gtc.forex" },
  { icon: FaThreads, link: "https://www.threads.net/@gtc.forex" },
];

const CopyRight = () => {
 
  return (
    <ul className="flex items-end gap-1">
    {socialMediaIcons.map((social, index) => (
      <li key={index}>
        <Link href={social.link} className='hover:animate-spi text-white hover:text-white'>
          {React.createElement(social.icon, { size: 24})}
        </Link>
      </li>
    ))}
  </ul>
  )
}

export default CopyRight