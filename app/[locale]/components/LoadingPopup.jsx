"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const LoadingPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Show popup after delay (e.g. 1.5s after page load)
  useEffect(() => {
    const timer = setTimeout(() => {
      const shown = sessionStorage.getItem("welcomeShown");
      if (!shown) {
        setIsOpen(true);
        sessionStorage.setItem("welcomeShown", "true");
      }
    }, 1500); // 1.5 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center px-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-xl h-[480px] items-center transform overflow-hidden rounded-2xl bg-gradient-to-t from-[#283085] via-[#050331] to-[#050331] p-6 text-center shadow-xl transition-all relative">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-4 text-2xl font-bold text-white hover:text-secondary border-none py-2 px-2 rounded-full outline-none"
              >
                ×
              </button>

              {/* Logo */}
              <Image
                src="/gtcvip-footer.png"
                alt="GTC VIP"
                width={250}
                height={44}
                className="mx-auto mb-4"
              />

              {/* Title & Content */}
              <Dialog.Title as="h3" className="text-xl font-semibold text-white py-4">
                🎉 Welcome to GTC VIP
              </Dialog.Title>
              <h3
              className="bg-gradient-to-r from-secondary via-white to-secondary inline-block text-transparent bg-clip-text text-2xl lg:text-[2.5rem] font-[500] 2xl:text-[24px] 3xl:text-[35px] capitalize leading-normal xl:leading-[3rem] 3xl:leading-[3rem]"
            >
             Step Inside the <br></br>GTC VIP Trading Room
            </h3>
            <p
              className={`text-white text-sm xl:text-base 2xl:text-lg tracking-wider py-4 mx-auto`}
            >
             Join the new standard in trading communities. <br></br>Unlock premium insights, expert coaching, exclusive competitions, and loyalty rewards — all designed to accelerate your trading journey with GTC.

            </p>

              {/* CTA Button */}
              <Link
                    href="https://my.gtcvip.com/v2/app/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-6 py-2 rounded-full bg-secondary hover:bg-white hover:text-primary text-white font-medium hover:bg-opacity-90 transition"
                    >
                    Open Account Now
                    </Link>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default LoadingPopup;

