"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter, usePathname } from "next-intl/client";
import Link from "next/link";

const MobileMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navigationData = [
    { title: "Home", id: "home" },
    { title: "Why Trade With Us", id: "whyTrade" },
    { title: "Journey With Us", id: "journey" },
    { title: "How It Work", id: "howItWorks" },
    { title: "FAQ's", id: "faq" },
    { title: "Contact Us", id: "contact" },
  ];

  const handleClick = async (id) => {
    setOpen(false);

    // If already on homepage, scroll directly
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: "smooth" });
        }, 300); // Slight delay to allow DOM to update
      }
    } else {
      // Navigate to homepage, then scroll after a delay
      await router.push("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 500);
    }
  };

  return (
    <div className="relative z-10">
      <button
        className="p-2 text-white bg-primary rounded-md"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <AiOutlineClose size={24} /> : <GiHamburgerMenu size={24} />}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto w-[85%]">
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <p className="text-lg font-semibold">Menu</p>
            <button className="text-2xl text-primary" onClick={() => setOpen(false)}>
              <AiOutlineClose />
            </button>
          </div>

          <ul className="p-4 space-y-2">
            {navigationData.map((item, index) => (
              <li
                key={index}
                className="text-sm text-gray-900 rounded hover:bg-gray-100 p-2 cursor-pointer"
                onClick={() => handleClick(item.id)}
              >
                {item.title}
              </li>
            ))}
            <li className="p-2 text-sm bg-primary text-white rounded hover:bg-secondary">
              <Link href="https://my.gtcvip.com/v2/app/register" onClick={() => setOpen(false)}>
                Live Account
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
