"use client";

import { useLanguage } from "@/context/LanguageContext";
import { DEFAULT_WHATSAPP_MESSAGE_BN, DEFAULT_WHATSAPP_MESSAGE_EN, whatsappLink } from "@/lib/site";

export default function CtaBanner() {
  const { t, lang } = useLanguage();
  const waHref = whatsappLink(lang === "en" ? DEFAULT_WHATSAPP_MESSAGE_EN : DEFAULT_WHATSAPP_MESSAGE_BN);

  return (
    <section className="bg-navy-950 py-16 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 text-center md:px-8">
        <h2 className="font-serif-display text-2xl font-semibold text-balance sm:text-3xl md:text-4xl">
          {t.ctaBanner.heading}
        </h2>
        <p className="max-w-2xl text-[15px] leading-relaxed text-navy-100/80 sm:text-base">
          {t.ctaBanner.subheading}
        </p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition-transform hover:-translate-y-0.5 hover:bg-gold-400"
        >
          {t.ctaBanner.cta}
        </a>
      </div>
    </section>
  );
}
