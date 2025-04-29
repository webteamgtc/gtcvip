"use client";
import React from "react";
import Hero from "../components/common/Hero";
import { useTranslations } from "next-intl";

const PrivacyPolicyPage = () => {
  const t = useTranslations("footerPage");
  const content = [
    t("privacyPolicy.content.collect.option.one"),
    t("privacyPolicy.content.collect.option.two"),
    t("privacyPolicy.content.collect.option.three"),
    t("privacyPolicy.content.collect.option.four"),
    t("privacyPolicy.content.collect.option.five"),
    t("privacyPolicy.content.collect.option.six"),
    t("privacyPolicy.content.collect.option.seven"),
    t("privacyPolicy.content.collect.option.eight"),
    t("privacyPolicy.content.collect.option.nine"),
    t("privacyPolicy.content.collect.option.ten"),
    t("privacyPolicy.content.collect.option.one1"),
    t("privacyPolicy.content.collect.option.one2"),
    t("privacyPolicy.content.collect.option.one3"),
    t("privacyPolicy.content.collect.option.one4"),
    t("privacyPolicy.content.collect.option.one5"),
  ];
  const interest = [
    t("privacyPolicy.content.interests.option.one"),
    t("privacyPolicy.content.interests.option.two"),
    t("privacyPolicy.content.interests.option.three"),
    t("privacyPolicy.content.interests.option.four"),
    t("privacyPolicy.content.interests.option.five"),
  ];
  const disclosure = [
    t("privacyPolicy.content.disclosure.option.one"),
    t("privacyPolicy.content.disclosure.option.two"),
    t("privacyPolicy.content.disclosure.option.three"),
    t("privacyPolicy.content.disclosure.option.four"),
  ];
  const disclosure2 = [
    t("privacyPolicy.content.disclosure.option2.one"),
    t("privacyPolicy.content.disclosure.option2.two"),
    t("privacyPolicy.content.disclosure.option2.three"),
    t("privacyPolicy.content.disclosure.option2.four"),
    t("privacyPolicy.content.disclosure.option2.five"),
  ];
  const storage = [
    t("privacyPolicy.content.storage.option.one"),
    t("privacyPolicy.content.storage.option.two"),
  ];
  const objection = [
    t("privacyPolicy.content.objection.option.one"),
    t("privacyPolicy.content.objection.option.two"),
    t("privacyPolicy.content.objection.option.three"),
  ];
  return (
    <>
      <Hero
        imageUrl="/account/withdraw.webp"
        title={t("privacyPolicy.bannerText.heading")}
        description={t("privacyPolicy.bannerText.description")}
      />

      <section className="py-12 container">
        <h2 className="text-primary md:text-[1.75rem] font-semibold pb-4">
        Privacy Policy of GTC Multi Trading DMCC:
        </h2>
        <p className="text-primary md:text-[1rem] pb-2">
        This policy (together with our terms of use and any other documents referred to herein) sets out the basis on which any personal data GTC Multi Trading DMCC (hereinafter referred to as the 'Company' and/or 'GTC') will collect from you, or that you provide to us, will be processed by us.
        </p>
        <p className="text-primary md:text-[1rem] pb-2">
        Your privacy is very important to us, and we make it our priority to safeguard and secure all confidential information relating to individuals.
        </p>
        <p className="text-primary md:text-[1rem] pb-2">
        This Privacy Policy will go through what measures GTC takes to collect, uses and manages the personal information we receive from you or a third party in relation to the products and services we provide. This Privacy Policy also outlines your rights relating to the processing of your personal information.
        </p>
        <h2 className="text-primary md:text-[1.25rem] font-semibold pb-4">
        Privacy Protection
        </h2>
        <p className="text-primary md:text-[1rem] pb-2">
        GTC has appointed a Data Protection Officer to ensure that our company manages/processes your personal information in compliance with the applicable data protection laws and regulations and in accordance with this Privacy Policy.
        </p>
        <p className="text-primary md:text-[1rem] pb-2">
        The personal information you provide us with when registering yourself as a user of the company’s website(s) or of its services is classified as registered information, which is protected in several different ways. You can access your registered information after logging in to GTC.
        </p>
        <p className="text-primary md:text-[1rem] pb-2">
        It is your responsibility to make sure that your password is only known to you and not disclosed to anyone else. Your registered information is securely stored with us, and only authorized staff have access to this information. Please also note that transfer of information via the internet is not always entirely secure, but we have taken significant precautions to assure that your personal data is being protected.
        </p>
        <h2 className="text-primary md:text-[1.25rem] font-semibold pb-4">
        Personal Information We Collect
        </h2>
        <p className="text-primary md:text-[1rem] pb-2">
        As part of our application process and to open any type of account with us, you must first complete and submit an application form with all the required information. By completing this application form, you are requested to disclose personal information to enable the Company to assess your application and comply with the relevant laws (including their regulations). The information you provide may also be used by the Company to inform you regarding its services.
        </p>
        <p className="text-primary md:text-[1rem] pb-2">
        The information that we may collect from you includes the following:
        </p>
        <ul className="list-disc ml-7 text-primary mb-3">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("privacyPolicy.content.collect.para3")}
        </p>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("privacyPolicy.content.collect.para4")}
        </p>
        <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
          {t("privacyPolicy.content.processing.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2 ">
          {t("privacyPolicy.content.processing.para1")}
        </p>
        <ol className="list-decimal">
          <li className="text-primary md:text-[1rem] pb-2">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.performance.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.performance.para1")}
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-2">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.compliance.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.compliance.para1")}
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-1">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.interests.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.interests.para1")}
              <ul className="list-disc ml-7 text-primary my-3">
                {interest.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-2">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.Consent.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.Consent.para1")}
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-2">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.product.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.product.para1")}
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-2">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.investigate.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.investigate.para1")}
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-2">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.comply.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.comply.para1")}
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-2">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.data.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.data.para1")}
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-2">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.marketing.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.marketing.para1")}
            </p>
          </li>
         
            <li className="text-primary md:text-[1rem] pb-8">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.record.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.record.para1")}
            </p>
          </li>
     
          <li className="text-primary md:text-[1rem] pb-8">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.legal.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.legal.para1")}
            </p>
          </li>
          <li className="text-primary md:text-[1rem] pb-8">
            <h3 className="text-primary md:text-[1rem] pb-2 font-semibold">
              {t("privacyPolicy.content.physical.label")}
            </h3>
            <p className="text-primary md:text-[1rem] pb-2">
              {t("privacyPolicy.content.physical.para1")}
            </p>
          </li>
      
        </ol>
      
       
     

      
        
        <h3 className="text-primary md:text-[1.25rem] font-semiboldpb-4">
          {t("privacyPolicy.content.regarding.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2 ">
          {t("privacyPolicy.content.regarding.para1")}
        </p>
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
          {t("privacyPolicy.content.rectification.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2 ">
          {t("privacyPolicy.content.rectification.para1")}
        </p>
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
          {t("privacyPolicy.content.erasure.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2 ">
          {t("privacyPolicy.content.erasure.para1")}
        </p>
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
          {t("privacyPolicy.content.restrictions.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2 ">
          {t("privacyPolicy.content.restrictions.para1")}
        </p>
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
          {t("privacyPolicy.content.portability.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("privacyPolicy.content.portability.para1")}
        </p>
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
          {t("privacyPolicy.content.objection.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2">
          {t("privacyPolicy.content.objection.para1")}
        </p>
        <ul className="list-disc ml-7 text-primary my-3">
                {objection.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
        {t("privacyPolicy.content.submitting.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2">
        If you do not want us to use your personal information, you must inform the Company by sending an email to support@gtcmtd.com. If you decide to do so, we may not be able to continue to provide information, services and/or products requested by you and we will have no liability to you in this respect.
        </p>
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
        {t("privacyPolicy.content.lagel.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2">
        The Company may disclose your personally identifiable information as required by rules and regulations and if the Company believes that disclosure is necessary to protect our rights or to comply with other proceedings, court order, legal process served or pursuant to governmental, intergovernmental or other regulatory bodies. The Company is not liable for misuse or loss of personal information or otherwise on the Company’s website(s) that the Company does not have access to or control over. The Company will not be liable for unlawful or unauthorized use of your personal information due to misuse or misplacement of your passwords, negligent or malicious intervention or otherwise by you or due to your acts or omissions or a person authorized by you (whether or to that authorization is permitted by the terms of our legal relationship with you).
        </p>
      
        <h3 className="text-primary md:text-[1.25rem] font-semibold pt-4 pb-4">
        {t("privacyPolicy.content.contact.label")}
        </h3>
        <p className="text-primary md:text-[1rem] pb-2">
        {t("privacyPolicy.content.contact.para1")}
          <a href="mailto:support@gtcfx.com.">support@gtcmtd.com  </a>
        </p>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
