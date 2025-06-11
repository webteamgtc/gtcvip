import React from "react";
import LiveAccountButton from "../liveAccountButton";
import ContactFrom from "../contactUs/ContactFrom";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section
      id="home"
      className="hero-banner pt-10 md:pt-20 lg:pt-24 2xl:pt-28 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12 text-center md:text-left min-h-[450px]">

          {/* Left Column - 70% width (8/12) */}
          <div className="md:col-span-7 content text-center md:text-left pt-10">
            <h1 className="text-2xl lg:text-[2.5rem] font-[500] 2xl:text-[30px] 3xl:text-[48px] leading-normal xl:leading-[3rem] 3xl:leading-[4rem] text-secondary duration-300">
              Your Loyalty<br />Rewarded
            </h1>

            <p className="text-primary dark:text-white text-sm xl:text-base 2xl:text-lg tracking-wider py-4">
              GTC VIP is the new standard when it comes to trading communities.<br />
              Register, trade, and gain access to loyalty points that could see you be rewarded with a Mercedes G63, an all-expenses-paid holiday in Las Vegas, and many more exciting gifts. Click on the button below to get started
            </p>
            <div className="text-center md:text-left mt-5">
              <Link href="https://my.gtcvip.com/v2/app/login"
                target="_blank"
                className="
            text-sm lg:text-lg px-8 py-2 text-center rounded-full
            w-full md:w-48 md:mx-0 mx-auto
            bg-primary text-white hover:bg-secondary hover:text-white
            dark:bg-white dark:text-black dark:hover:bg-secondary dark:hover:text-white
            transition-colors duration-300
          "
              >
                Login
              </Link>
            </div>
          </div>

          {/* Right Column - 30% width (4/12) */}
          <div className="md:col-span-5"><div
            className="relative py-[1px] px-[1px] rounded-lg"
          >
            <div
              className="contact-form relative bg-[#232a5f] rounded-lg shadow-lg overflow-hidden z-10 p-4 md:p-6 transition-colors"
            >
              <h2 className="text-center text-[24px] font-bold text-white mb-6">Create Account</h2>
              {/* <div className=" flex justify-center mb-2">
                <svg className=" border border-[#fff] rounded-full" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6836 13.2938C10.9548 12.4732 11.4783 11.7592 12.1793 11.2537C12.8804 10.7481 13.7232 10.4769 14.5875 10.4787C15.5672 10.4787 16.453 10.8265 17.1487 11.3958L19.1731 9.37199C17.9394 8.2966 16.3585 7.63281 14.5875 7.63281C11.8454 7.63281 9.48471 9.19691 8.34961 11.488L10.6836 13.2938Z" fill="#EA4335"></path><path d="M16.9293 18.0773C16.2974 18.4849 15.4951 18.7023 14.5872 18.7023C13.7264 18.704 12.8868 18.435 12.1873 17.9332C11.4878 17.4314 10.9639 16.7223 10.6897 15.9062L8.34766 17.6843C8.92231 18.8474 9.81162 19.826 10.9146 20.509C12.0175 21.192 13.2899 21.552 14.5872 21.5481C16.2876 21.5481 17.912 20.9435 19.1288 19.809L16.9299 18.0773H16.9293Z" fill="#34A853"></path><path d="M19.1295 19.8067C20.402 18.6194 21.2281 16.8524 21.2281 14.5892C21.2281 14.1776 21.1649 13.7352 21.0704 13.3242H14.5879V16.0124H18.319C18.1352 16.9162 17.6407 17.6159 16.9306 18.0751L19.1295 19.8067Z" fill="#4A90E2"></path><path d="M10.6901 15.9046C10.5483 15.4808 10.4763 15.0367 10.4768 14.5898C10.4768 14.1365 10.5493 13.7011 10.6838 13.2941L8.34979 11.4883C7.87231 12.4522 7.62618 13.5141 7.63093 14.5898C7.63093 15.7029 7.8889 16.7522 8.34805 17.6827L10.6901 15.9046Z" fill="#FBBC05"></path><circle cx="14.5" cy="14.5" r="14" stroke="var(--text-1)"></circle></svg>
              </div>
              <p className="text-center text-[16px] text-white mb-4">or use your email account

              </p> */}
              <ContactFrom />
            </div>

          </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
