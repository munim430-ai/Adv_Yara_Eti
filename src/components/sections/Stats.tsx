"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="bg-gold-100/60 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
        {t.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-serif-display text-3xl font-semibold text-navy-950 sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-navy-700 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
