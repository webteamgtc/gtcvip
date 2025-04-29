"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import axios from "axios";

const CookesBanner = () => {
  const t = useTranslations("cookies");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(hasCookie("gtcfx") == false ? true : false);
  }, []);

  const handleApiCall = () => {
    const payload = { newUser: true };
    axios
      .post(
        "https://hooks.zapier.com/hooks/catch/16420445/37ltm4i/",
        JSON.stringify(payload)
      )
      .then((res) => {
        console.log("resss", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      {show && (
        <div className=" w-full bg-secondary z-50 fixed bottom-0  text-white p-4 ">
          <div className="container">
            <div className="grid grid-cols-1 items-center md:grid-cols-12 gap-4">
              <p className="text-[13px] ltr:text-left rtl:text-right col-span-1 md:col-span-10">
                {t("text")}
              </p>
              <div className="md:text-right text-center col-span-1 md:col-span-2">
                <button
                  className=" text-white uppercase bg-primary text-sm px-3 py-[6px] gap-2 items-center hover:bg-white hover:text-primary"
                  onClick={() => {
                    setCookie("gtcfx", "true", { maxAge: 60 * 6 * 24 });
                    setShow(false);
                    handleApiCall();
                  }}
                >
                  {t("btnText")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const getServerSideProps = ({ req, res }) => {
  setCookie("test", "value", { req, res, maxAge: 60 * 6 * 24 });
  getCookie("test", { req, res });

  return { props: {} };
};

export default CookesBanner;
