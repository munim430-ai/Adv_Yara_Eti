"use client";

import { useLanguage } from "@/context/LanguageContext";
import { practiceIcons } from "@/components/icons";

export default function PracticeAreas() {
  const { t } = useLanguage();

  return (
    <section id="practice-areas" className="bg-navy-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            {t.practiceAreas.eyebrow}
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-950 text-balance sm:text-4xl">
            {t.practiceAreas.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-navy-700/90 sm:text-base">
            {t.practiceAreas.subheading}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.practiceAreas.items.map((item) => {
            const Icon = practiceIcons[item.icon];
            return (
              <div
                key={item.title}
                className="reveal group rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-gold-300 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="mt-5 font-serif-display text-lg font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/90">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
