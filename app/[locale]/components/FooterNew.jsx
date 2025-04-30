"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactFrom from "./contactUs/ContactFrom";  // Assuming you have a form component to include
import CopyRight from "./CopyRight";

const FooterNew = () => {
  // Define contact details for rendering
  const contactDetails = [
    { iconSrc: "/Mail.png", title: "Email", details: "info@gtcvip.com" },
    { iconSrc: "/phone.png", title: "Phone", details: "+971 4 000 8416" },
    { iconSrc: "/add.png", title: "Address", details: "Nassima Tower - 22nd Floor - Trade Centre - Trade Centre 1 - Dubai" }
  ];
  const [activeSection, setActiveSection] = useState("home");
  const menuItems = [
    { title: "Home", id: "home" },
    { title: "Why Trade With Us", id: "whyTrade" },
    { title: "Journey With Us", id: "journey" },
    { title: "How It Work", id: "howItWorks" },
    { title: "FAQ's", id: "faq" },
    { title: "Contact Us", id: "contact Us" },
  ];
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let item of menuItems) {
        const section = document.getElementById(item.id);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Contact item component logic integrated directly
  const ContactItem = ({ iconSrc, title, details }) => (
    <div className="flex justify-start items-center gap-4">
      <div className="relative w-14 h-14">
        <Image src={iconSrc} fill alt={title} className="object-contain" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-secondary font-medium">{title}</h3>
        <p className="text-white text-sm">{details}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-gradient-to-b from-[#283085] via-[#050331] to-[#050331] py-12 md:py-16" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="relative py-[1px] px-[1px]" style={{ 
          background: 'linear-gradient(to bottom, rgba(182,135,86,.65) 40%, rgba(5,3,49,1) 60%)', 
          borderRadius: '8px' 
        }}>
          <div className="contact-form relative bg-gradient-to-b from-[#202d7bdb] via-[#050331] to-[#050331] rounded-lg shadow-lg overflow-hidden z-10 p-4 md:p-12">
            
          <div className="top-section text-center mb-10">
              <h2  style={{ lineHeight: "3.3rem" }}
                className="bg-gradient-to-r from-secondary via-white to-secondary inline-block text-transparent bg-clip-text text-xl font-[500] xl:text-[30px] 2xl:text-[45px] capitalize max-w-sm leading-normal">
                  Get in Touch

              </h2>
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
      
        <div className="leftside flex flex-col md:flex-row justify-between gap-20 items-center">
        <div className="w-52 h-16 relative">
          <Image src="/gtcvip-footer.png" alt="Footer Logo" layout="fill" objectFit="contain" />
        </div>
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item, index) => (
            <li key={index} className="text-white">
               <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.id ? "text-secondary" : "text-white hover:text-secondary"
                    }`}
                  >
                    {item.title}
                  </button>
            </li>
          ))}
        </ul>
        </div>
       
       

    </div>
    <CopyRight />
      </div>
    </section>
  );
};

export default FooterNew; 
