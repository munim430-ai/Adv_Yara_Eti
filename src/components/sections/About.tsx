"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[0.85fr_1.15fr] md:items-center md:px-8">
        <div className="reveal relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-navy-100 shadow-xl">
            <Image
              src="/images/yeara-tisha-eti.jpg"
              alt="Advocate Yeara Tisha Eti"
              fill
              sizes="(min-width: 768px) 380px, 80vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl border border-gold-300 bg-white px-6 py-4 shadow-lg sm:-right-8">
            <p className="font-serif-display text-2xl font-semibold text-navy-950">8+</p>
            <p className="text-[11px] uppercase tracking-wide text-navy-500">Practice Areas</p>
          </div>
        </div>

        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">{t.about.eyebrow}</p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-950 text-balance sm:text-4xl">
            {t.about.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {t.about.paragraphs.map((p) => (
              <p key={p} className="text-[15px] leading-relaxed text-navy-800/90 sm:text-base">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.about.timeline.map((item) => (
              <div key={item.title} className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-gold-600">{item.year}</p>
                <p className="mt-1 font-serif-display text-lg font-semibold text-navy-950">{item.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-700/90">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
