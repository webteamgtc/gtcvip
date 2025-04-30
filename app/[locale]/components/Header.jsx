"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next-intl/client";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import LocationContextProvider from "@/context/location-context";
import { useTranslations } from "next-intl";

const gradientStyle = {
  background: "linear-gradient(45deg, #02002f, #b68756)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
};

const NavItem = ({ title, action, icon, submenu, isActive }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <li
      className={`clickable relative cursor-pointer py-6 pl-2 lg:pl-4 lg:pr-4 lg:py-3 text-[sm] lg:text-base ${
        isActive ? "text-secondary" : "text-primary hover:text-secondary"
      }`}
      onMouseEnter={() => setShowSubmenu(true)}
      onMouseLeave={() => setShowSubmenu(false)}
    >
      <button onClick={action} className="flex w-full justify-between items-center">
        {icon ? <span style={gradientStyle}>{icon}</span> : title}
        {submenu &&
          (showSubmenu ? (
            <FaChevronUp className="ml-2 text-base" />
          ) : (
            <FaChevronDown className="ml-2 text-base" />
          ))}
      </button>
      {showSubmenu && submenu && (
        <ul className="absolute left-0 top-14 w-40 bg-white shadow-md mt-1">
          {submenu.map((item, index) => (
            <li
              key={index}
              className="py-2 px-4 hover:bg-primary hover:text-white"
              onClick={item.action}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Header = () => {
  const router = useRouter();
  const t = useTranslations("navigation");

  const [activeSection, setActiveSection] = useState("home");
  const [isSticky, setIsSticky] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationData = [
    { title: "Home", id: "home" },
    { title: "About GTC VIP", id: "aboutUs" },
    { title: "Why Trade", id: "whyTrade" },
    { title: "FAQ's", id: "faq" },
    { title: "How It Work", id: "howItWorks" },
    { title: "Contact Us", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100);

      const sections = navigationData.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // offset for better detection

      for (let section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <LocationContextProvider>
      <div
        className={`header py-2 top-0 z-40 w-full transition-all ${
          isSticky ? "fixed bg-transparent" : "absolute"
        }`}
      >
        <nav className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center bg-white border border-secondary border-opacity-20 rounded-full px-8">
            <Image
              src="/gtcvip-logo.png"
              width={180}
              height={35}
              alt="GTCFX"
              className="lg:w-[180px] lg:h-[35px] md:w-[120px] md:h-[53px] w-[130px] h-[47px] cursor-pointer"
              onClick={() => router.push("/")}
            />
            <div className="hidden md:flex justify-end items-center">
              <ul className="flex items-center">
                {navigationData.map((item, index) => (
                  <NavItem
                    key={index}
                    title={item.title}
                    action={() => scrollToSection(item.id)}
                    icon={item.icon}
                    submenu={item.submenu}
                    isActive={activeSection === item.id}
                  />
                ))}
              </ul>
            </div>
            <div className="md:hidden flex gap-2 items-center">
              <MobileMenu />
            </div>
          </div>
        </nav>
      </div>
    </LocationContextProvider>
  );
};

export default Header;
