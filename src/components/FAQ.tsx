"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQItem } from "../types";
import { FAQ_ITEMS } from "../data";

interface FAQProps {
  faqsList?: FAQItem[];
}

export default function FAQ({ faqsList = FAQ_ITEMS }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayList = faqsList && faqsList.length > 0 ? faqsList : FAQ_ITEMS;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#ffffff] border-b border-[#e1e8db] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Botanical Wellness Image from Herbalist Template */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-[#e1e8db]">
              <img
                src="/images/cannabis_wellness_body_1791967588992.jpg"
                alt="CBD American Shaman of Southlake lab-certified hemp wellness"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Title, Subtitle, and Real Store Accordion Questions */}
          <div className="lg:col-span-7 space-y-6 text-left font-sans">
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-widest text-[#2d6a4f] uppercase font-bold">
                COMMUNITY EDUCATION &amp; ANSWERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#13382c] tracking-tight leading-[1.15]">
                The Science &amp; Benefits <br />
                of CBD &amp; Hemp
              </h2>
              <p className="text-[#52796f] text-sm sm:text-base leading-relaxed font-sans">
                Learn how clean phytocannabinoids interact with your body’s endocannabinoid receptors, our Texas Farm Bill compliance, and local Southlake pickup options.
              </p>
            </div>

            {/* Accordion List with Real Old Website FAQ Content */}
            <div className="space-y-3 pt-2">
              {displayList.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={faq.id || idx}
                    className="border-b border-[#e1e8db] pb-3 transition-colors"
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full py-3 flex items-center justify-between text-left cursor-pointer group focus:outline-none"
                    >
                      <span className={`text-sm sm:text-base font-bold transition-colors ${
                        isOpen ? "text-[#13382c]" : "text-[#2c3527] group-hover:text-[#13382c]"
                      }`}>
                        {faq.question}
                      </span>
                      <div className="w-6 h-6 flex items-center justify-center text-[#13382c] shrink-0 ml-4">
                        {isOpen ? (
                          <Minus className="w-5 h-5 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-5 h-5 stroke-[2.5]" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="py-2.5 text-xs sm:text-sm text-[#2c3527] leading-relaxed animate-fadeIn font-sans">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
