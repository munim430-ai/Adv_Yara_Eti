"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="bg-navy-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">{t.process.eyebrow}</p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-balance sm:text-4xl">
            {t.process.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-navy-100/80 sm:text-base">{t.process.subheading}</p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, idx) => (
            <div key={step.title} className="reveal relative">
              <span className="font-serif-display text-5xl font-semibold text-white/10">{step.step}</span>
              <h3 className="mt-2 font-serif-display text-lg font-semibold text-gold-300">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-100/80">{step.description}</p>
              {idx < t.process.steps.length - 1 && (
                <span className="absolute -right-4 top-6 hidden h-px w-8 bg-gold-500/40 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
