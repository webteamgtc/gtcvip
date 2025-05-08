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
    <div className="rounded-md p-2 overflow-hidden shadow-md border border-secondary border-opacity-15 bg-gradient-to-b from-[#283085] via-[#050331] to-[#050331] transition hover:shadow-lg">
      {/* Accordion Header */}
      <div
        className="py-4 px-5 flex justify-between items-center cursor-pointer text-white"
        onClick={toggle}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="text-2xl text-secondary">{open ? <FaMinus /> : <IoMdAdd />}</div>
      </div>

      {/* Accordion Content */}
      <Collapse isOpened={open}>
        <div className="px-5 py-3 border-t border-secondary border-opacity-10 text-white bg-transparent">
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


    <section id="faq" className='py-10 md:pt-10 relative bg-gradient-to-t from-[#283085] via-[#050331] to-[#050331]'>
    <div className='container'>
    <div className="top-section text-center mb-10">
      <h2  style={{ lineHeight: "3.3rem" }}
        className="bg-gradient-to-r from-secondary via-white to-secondary inline-block text-transparent bg-clip-text text-2xl font-[500] md:text-[30px] 2xl:text-[45px] capitalize max-w-sm leading-normal">
     Frequently Asked Questions

      </h2>
    </div>
    <div className="max-w-6xl mx-auto space-y-2">
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
      <div className="mt-10 text-center">
                <LiveAccountButton />
            </div>
    </div>
  </section>
 
  );
};

export default FrequentlyAskedQuestions;
