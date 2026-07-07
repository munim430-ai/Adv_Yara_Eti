"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            {t.testimonials.eyebrow}
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-950 text-balance sm:text-4xl">
            {t.testimonials.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.testimonials.items.map((item) => (
            <figure
              key={item.name + item.context}
              className="reveal flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-7 shadow-sm"
            >
              <span className="font-serif-display text-5xl leading-none text-gold-300">&ldquo;</span>
              <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-navy-800">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-navy-100 pt-4">
                <p className="text-sm font-semibold text-navy-950">{item.name}</p>
                <p className="text-xs text-navy-500">{item.context}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
