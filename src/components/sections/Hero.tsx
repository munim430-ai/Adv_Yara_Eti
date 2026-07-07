"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { DEFAULT_WHATSAPP_MESSAGE_BN, DEFAULT_WHATSAPP_MESSAGE_EN, SITE, whatsappLink } from "@/lib/site";

export default function Hero() {
  const { t, lang } = useLanguage();
  const waHref = whatsappLink(lang === "en" ? DEFAULT_WHATSAPP_MESSAGE_EN : DEFAULT_WHATSAPP_MESSAGE_BN);

  return (
    <section id="top" className="relative overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full border border-gold-300" />
        <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full border border-gold-300" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 md:grid-cols-2 md:px-8 md:pb-24 md:pt-20">
        <div className="order-2 md:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">{t.hero.eyebrow}</p>
          <h1 className="mt-4 font-serif-display text-4xl font-semibold leading-tight text-balance sm:text-5xl md:text-[3.4rem] md:leading-[1.1]">
            {t.hero.headingLine1}
            <br />
            <span className="text-gold-300">{t.hero.headingLine2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100/85 md:text-lg">
            {t.hero.subheading}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition-transform hover:-translate-y-0.5 hover:bg-gold-400"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#practice-areas"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold-300 hover:text-gold-300"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gold-400" />
            <span className="text-xs font-medium uppercase tracking-wide text-navy-100/90 sm:text-sm">
              {t.hero.badge}
            </span>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image
              src="/images/yeara-tisha-eti-court.jpg"
              alt={lang === "en" ? "Advocate Yeara Tisha Eti" : "এডভোকেট ইয়েরা তিশা ইতি"}
              fill
              priority
              sizes="(min-width: 768px) 420px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-navy-950/85 px-5 py-4 backdrop-blur">
              <p className="font-serif-display text-lg font-semibold text-white">
                {lang === "en" ? "Yeara Tisha Eti" : SITE.nameBn}
              </p>
              <p className="text-xs uppercase tracking-wide text-gold-300">
                {lang === "en" ? SITE.courtEn : SITE.courtBn}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
