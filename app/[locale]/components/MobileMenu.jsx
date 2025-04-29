import React, { useState, useRef } from "react";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next-intl/client";
import Link from "next/link";

const MobileMenu = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const navigationData = [
    { title: "Home", href: "/", icon: <FaHome size={24} /> },
    { title: "Partners", href: "/partners" },
    { title: "Platform", href: "/platform" },
    { title: "Account", href: "/account" },
    { title: "Contact Us", href: "/contact-us" },
  ];

  const handleNavigation = (path) => {
    if (path.startsWith('#')) {
      const section = document.querySelector(path);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(path);
    }
    setOpen(false);
  };

  return (
    <div className="relative z-10" ref={ref}>
      <button
        className="p-2 text-white bg-primary rounded-md"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <AiOutlineClose size={24} /> : <GiHamburgerMenu size={24} />}
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-white overflow-y-auto"
          style={{ width: "85%" }}
        >
          <div className="flex flex-row items-center justify-between p-4 border-b border-gray-300">
            <p className="text-lg flex gap-2">
              Menu
            </p>
            <button
              className="text-2xl text-primary"
              onClick={() => setOpen(false)}
            >
              <AiOutlineClose />
            </button>
          </div>
          <ul className="p-1">
            {navigationData.map((item, index) => (
              <li key={index} className="text-sm text-gray-900 rounded hover:bg-gray-100">
                <div className="p-2 flex items-center gap-2"
                  onClick={() => handleNavigation(item.href)}>
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {item.submenu && (
                  <ul className="pl-4">
                    {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex} className="p-2 hover:bg-gray-200"
                        onClick={() => handleNavigation(sub.href)}>
                        {sub.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="p-2 text-sm bg-primary text-white rounded hover:bg-secondary">
              <Link href="/live-account" onClick={() => setOpen(false)}>Live Account</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
