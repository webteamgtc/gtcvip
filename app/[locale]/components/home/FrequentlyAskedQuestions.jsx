"use client";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { IoMdAdd } from "react-icons/io";
import LiveAccountButton from "../liveAccountButton";
import { FaMinus } from "react-icons/fa6";
import { sanitize } from "isomorphic-dompurify";
import { useTranslations } from "next-intl";

const AccordionItem = ({ toggle, open, title, paragraphs }) => {
  return (
    <div className="rounded-md p-2 overflow-hidden shadow-xl border border-secondary border-opacity-15 bg-white dark:bg-gradient-to-b dark:from-[#1e255b] dark:via-[#050331] dark:to-[#1e255b] transition hover:shadow-lg">
      {/* Accordion Header */}
      <div
        className="py-4 px-5 flex justify-between items-center cursor-pointer text-primary dark:text-white"
        onClick={toggle}
      >
        <h5 className="text-lg font-medium">{title}</h5>
        <div className="text-2xl text-secondary">{open ? <FaMinus /> : <IoMdAdd />}</div>
      </div>

      {/* Accordion Content */}
      <Collapse isOpened={open}>
        <div className="px-5 py-3 border-t border-secondary border-opacity-10 text-primary dark:text-white bg-transparent">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base"
              dangerouslySetInnerHTML={{ __html: sanitize(paragraph) }}
            />
          ))}
        </div>
      </Collapse>
    </div>
  );
};

const FrequentlyAskedQuestions = ({ data }) => {
  const t = useTranslations("prime-tech.pamm");
  if (!data || data.length < 1) return null;
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      id="faq"
      className="py-10 md:pt-0 relative"
    >
      <div className="container">
        <div className="top-section text-center mb-10">
          <h2
            className="
              text-secondary 
             
              text-2xl font-[500] md:text-[30px] 2xl:text-[30px] capitalize max-w-xs mx-auto leading-normal 
              transition-colors duration-300
            "
          >
            Frequently Asked Questions
          </h2>
           <p className="max-w-lg mx-auto mt-5">Got a question about GTC VIP? You’ll probably find the answer here, and if not, we’re always just a message away.
</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-4">
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              open={index === openIndex}
              title={item.title}
              paragraphs={item.paragraphs}
              toggle={() => toggle(index)}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <LiveAccountButton />
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
