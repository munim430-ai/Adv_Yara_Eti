"use client";

import { useLanguage } from "@/context/LanguageContext";
import { IconCheck } from "@/components/icons";

export default function WhyChoose() {
  const { t } = useLanguage();

  return (
    <section id="why-me" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">{t.whyChoose.eyebrow}</p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-950 text-balance sm:text-4xl">
            {t.whyChoose.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.whyChoose.items.map((item) => (
            <div key={item.title} className="reveal flex gap-4 rounded-2xl border border-navy-100 p-6">
              <IconCheck className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" />
              <div>
                <h3 className="font-serif-display text-base font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-700/90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
