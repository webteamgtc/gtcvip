"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactFrom from "./contactUs/ContactFrom";
import CopyRight from "./CopyRight";

const FooterNew = () => {
 const contactDetails = [
  { iconSrc: "/Icons-2-b.png", title: "Email", details: "hello@gtcvip.com", link: "mailto:hello@gtcvip.com" },
  { iconSrc: "/Icons-1-b.png", title: "Phone", details: "971 800 667788", link: "tel:971800667788" },
  { iconSrc: "/Icons-3-b.png", title: "Address", details: "GTC, Sheikh Zayed Road, Nassima Tower, 22nd Floor Trade Centre, Dubai, UAE", link: "https://maps.app.goo.gl/k7TpqU9dojvGqZ1p7" } // replace with actual map link
];

  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { title: "Home", id: "home" },
    { title: "Rewards", id: "rewards" },
    { title: "Benefits", id: "benefits" },
    { title: "Levels", id: "level" },
    { title: "Steps", id: "step" },
    { title: "FAQs", id: "faq" },
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

const ContactItem = ({ iconSrc, title, details, link }) => (
  <div className="flex items-start gap-4 w-full md:w-64">
    <div className="min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px] relative flex-shrink-0">
      <Image
        src={iconSrc}
        alt={title}
        fill
        className="object-contain"
      />
    </div>
    <div className="flex flex-col gap-1">
      <h3 className="text-base text-secondary font-medium">{title}</h3>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary dark:text-white text-sm hover:text-secondary hover:underline"
        >
          {details}
        </a>
      ) : (
        <p className="text-primary dark:text-white text-sm">{details}</p>
      )}
    </div>
  </div>
);

  return (
    <section className="py-12 md:py-6" id="contact">
      <div className="max-w-6xl mx-auto px-2">

        {/* Contact Section */}
        <div
          className="relative py-[1px] px-[1px] rounded-lg"
          style={{
            background:
              "linear-gradient(to bottom, rgba(182,135,86,.3) 40%, rgba(5,3,49,0.1) 0%)",
          }}
        >
          <div
            className="contact-form relative bg-white dark:bg-gradient-to-b dark:from-[#202d7bdb] dark:via-[#1e255b] dark:to-[#1e255b] rounded-lg shadow-lg overflow-hidden z-10 p-4 md:p-6 transition-colors"
          >
            {/* Heading */}
            <div className="top-section text-center mb-5">
              <h2
                style={{ lineHeight: "3.3rem" }}
                className="text-secondary text-2xl font-[500] xl:text-[30px] 2xl:text-[30px] max-w-sm mx-auto leading-normal transition-colors duration-300"
              >
                Get in Touch
              </h2>
            </div>

            {/* Form + Contact Info */}
          <div className="contact-info flex flex-wrap justify-center md:justify-between gap-8 md:gap-16 md:px-8">
  {contactDetails.map((item, index) => (
    <ContactItem key={index} {...item} />
  ))}
</div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="menu-content mt-20">
          <div className="leftside flex flex-col md:flex-row justify-between gap-20 items-center">
            <div className="w-52 h-16 relative">
              <Image
                src="/Logo-Standard.svg"
                alt="Footer Logo"
                layout="fill"
                objectFit="contain"
                className="block dark:hidden"
              />
              <Image
                src="/Logo-White.svg"
                alt="Footer Logo Dark"
                layout="fill"
                objectFit="contain"
                className="hidden dark:block"
              />
            </div>

            <ul className="hidden md:flex gap-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-secondary"
                        : "text-primary dark:text-white hover:text-secondary"
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
