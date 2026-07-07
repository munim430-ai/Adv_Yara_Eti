"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-navy-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-8">
        {t.trustBar.map((item) => (
          <div key={item.label} className="text-center md:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-600">{item.label}</p>
            <p className="mt-1 font-serif-display text-sm font-semibold text-navy-900 sm:text-base">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
