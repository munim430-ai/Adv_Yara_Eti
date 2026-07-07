"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/lib/site";
import { IconMail, IconMapPin, IconPhone, IconTelegram, IconWhatsapp } from "@/components/icons";

export default function Footer() {
  const { t, lang } = useLanguage();
  const chamberLines = lang === "en" ? SITE.chamber.lineEn : SITE.chamber.lineBn;
  const year = new Date().getFullYear();

  const links = [
    { id: "about", label: t.nav.about },
    { id: "practice-areas", label: t.nav.practiceAreas },
    { id: "why-me", label: t.nav.whyMe },
    { id: "testimonials", label: t.nav.testimonials },
    { id: "faq", label: t.nav.faq },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer id="top-footer" className="border-t border-navy-800 bg-navy-950 text-navy-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Link href="#top" className="flex items-center gap-3">
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500 bg-white">
              <Image
                src="/images/gazipur-bar-emblem.png"
                alt={lang === "en" ? "Gazipur District Bar Association" : "গাজীপুর জেলা আইনজীবী সমিতি"}
                fill
                sizes="44px"
                className="rounded-full object-contain p-1"
              />
            </span>
            <span className="font-serif-display text-lg font-semibold text-white">
              {lang === "en" ? "Yeara Tisha Eti" : SITE.nameBn}
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-100/80">{t.footer.tagline}</p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-gold-300 transition-colors hover:border-gold-500 hover:text-gold-200"
            >
              <IconWhatsapp className="h-4 w-4" />
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-gold-300 transition-colors hover:border-gold-500 hover:text-gold-200"
            >
              <IconTelegram className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-700 text-gold-300 transition-colors hover:border-gold-500 hover:text-gold-200"
            >
              <IconMail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif-display text-sm font-semibold uppercase tracking-wide text-gold-300">
            {t.footer.quickLinks}
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-100/80">
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="transition-colors hover:text-gold-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif-display text-sm font-semibold uppercase tracking-wide text-gold-300">
            {t.footer.getInTouch}
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-100/80">
            <li className="flex items-start gap-2.5">
              <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                {chamberLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <IconPhone className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={SITE.phoneHref} className="hover:text-gold-300">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconMail className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold-300 break-all">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800/80">
        <div className="mx-auto max-w-7xl px-5 py-6 text-xs leading-relaxed text-navy-100/60 md:px-8">
          <p className="max-w-3xl">{t.footer.disclaimer}</p>
          <p className="mt-3">
            © {year} {lang === "en" ? "Yeara Tisha Eti" : SITE.nameBn}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
