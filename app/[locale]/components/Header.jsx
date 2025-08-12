"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next-intl/client";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import LocationContextProvider from "@/context/location-context";
import { useTranslations } from "next-intl";
import Link from "next/link";

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
      className={`
        clickable relative cursor-pointer py-6 pl-2 lg:pl-4 lg:pr-4 lg:py-3 
        text-[sm] lg:text-base font-medium
        ${isActive 
          ? "text-secondary dark:text-secondary" 
          : "text-white hover:text-secondary dark:text-primary dark:hover:text-secondary"
        }
      `}
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
        <ul className="absolute left-0 top-14 w-40 bg-white dark:bg-[#0b1244] shadow-md mt-1 z-50">
          {submenu.map((item, index) => (
            <li
              key={index}
              className="py-2 px-4 hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-black"
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
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");
  const [logoSrc, setLogoSrc] = useState("/Logo-White.svg");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 100;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const navigationData = [
  
    { title: "Rewards", id: "rewards" },
    { title: "Benefits", id: "benefits" },
    { title: "Levels", id: "level" },
    { title: "Steps", id: "step" },  
    { title: "FAQs", id: "faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100);

      const sections = navigationData.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const preferred =
      stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(preferred);
    document.documentElement.classList.toggle("dark", preferred === "dark");
    setLogoSrc(preferred === "dark" ? "/Logo-Standard.svg" : "/Logo-White.svg");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setLogoSrc(newTheme === "dark" ? "/Logo-Standard.svg" : "/Logo-White.svg");
  };

  return (
    <LocationContextProvider>
      <div
        className={`header py-2 top-0 z-40 w-full transition-all ${
          isSticky ? "fixed bg-transparent" : "absolute"
        }`}
      >
        <nav className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center py-2 border border-secondary border-opacity-20 rounded-full px-4 md:px-8 bg-gradient-to-t from-[#283085] via-[#050331] to-[#050331] dark:bg-white dark:bg-none">
            <Image
              src={logoSrc}
              width={200}
              height={39}
              alt="GTCFX"
              className="lg:w-[200px] lg:h-[39px] md:w-[120px] md:h-[53px] w-[140px] h-[27px] cursor-pointer"
              onClick={() => router.push("/")}
            />
            <div className="hidden md:flex justify-end items-center gap-4">
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
              {/* New Links */}
              <Link href="https://my.gtcvip.com/v2/app/login" target="_blank" className="bg-secondary text-white px-4 py-1 rounded-full hover:bg-primary">
               Login
              </Link>
              
             <Link
  href="https://contest.gtcvip.com/5k-demo-trading-competition"
  target="_blank"
  className="bg-green-600 text-white px-4 py-1 rounded-full hover:bg-white hover:text-primary animate-pulse-infinite transition-all duration-500 ease-in-out"
  style={{
    animation: "pulse 2s infinite",
  }}
>
  Join Demo Competition
</Link>
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="text-white dark:text-yellow-400 border border-white dark:border-yellow-400 p-[1px] rounded-full text-base leading-5"
                >
                  {theme === "dark" ? "☀️" : "🌙"}
                </button>
              )}
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
