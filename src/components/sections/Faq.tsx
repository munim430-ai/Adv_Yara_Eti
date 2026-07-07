"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { IconChevronDown } from "@/components/icons";

export default function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">{t.faq.eyebrow}</p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-950 text-balance sm:text-4xl">
            {t.faq.heading}
          </h2>
        </div>

        <div className="mt-12 divide-y divide-navy-100 rounded-2xl border border-navy-100">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-display text-base font-semibold text-navy-950 sm:text-lg">
                    {item.question}
                  </span>
                  <IconChevronDown
                    className={`h-5 w-5 shrink-0 text-gold-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed text-navy-700/90 sm:text-base">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
