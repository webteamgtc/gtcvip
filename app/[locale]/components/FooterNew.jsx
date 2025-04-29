import React from "react";
import Image from "next/image";
import ContactFrom from "./contactUs/ContactFrom";  // Assuming you have a form component to include
import Link from "next/link";
import SocialIcon from "./SocialIcon";
import CopyRight from "./CopyRight";

const FooterNew = () => {
  // Define contact details for rendering
  const contactDetails = [
    { iconSrc: "/Mail.png", title: "Email", details: "info@gtcvip.com" },
    { iconSrc: "/phone.png", title: "Phone", details: "+971 4 000 8416" },
    { iconSrc: "/add.png", title: "Address", details: "Nassima Tower - 22nd Floor - Trade Centre - Trade Centre 1 - Dubai" }
  ];

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" }
  ];

  // Contact item component logic integrated directly
  const ContactItem = ({ iconSrc, title, details }) => (
    <div className="flex justify-start items-center gap-4">
      <div className="relative w-14 h-14">
        <Image src={iconSrc} fill alt={title} className="object-contain" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-secondary font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{details}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-[#050331] py-12 md:py-16 2xl:py-20" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="relative py-[1px] px-[1px]" style={{ 
          background: 'linear-gradient(to bottom, rgba(182,135,86,.65) 40%, rgba(5,3,49,1) 60%)', 
          borderRadius: '8px' 
        }}>
          <div className="contact-form relative bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#050331] rounded-lg shadow-lg overflow-hidden z-10 p-4 md:p-12">
            <div className="text-center p-4">
              <h2
                className="bg-gradient-to-r from-white to-secondary text-transparent bg-clip-text text-xl xl:text-3xl 2xl:text-[35px] capitalize font-[500] pb-5"
              >
                Get in Touch
              </h2>
              <p className="text-gray-400 text-sm xl:text-base tracking-wider">
              Discover our Forex & CFDs accounts at GTC Financial to optimize 
              your investment potential.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-16 p-4">
              <ContactFrom />
              <div className="contact-info flex flex-col gap-8">
                {contactDetails.map((item, index) => (
                  <ContactItem key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="menu-content">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4">
        <div className="leftside flex flex-col md:flex-row gap-20 items-center">
        <div className="w-24 h-16 relative">
          <Image src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/footer-logo.webp" alt="Footer Logo" layout="fill" objectFit="contain" />
        </div>
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item, index) => (
            <li key={index} className="text-white">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        </div>
       
        <div className="social">
        
        </div>
      </div>
    </div>
    <CopyRight />
      </div>
    </section>
  );
};

export default FooterNew; 
