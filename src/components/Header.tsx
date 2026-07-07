"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { DEFAULT_WHATSAPP_MESSAGE_BN, DEFAULT_WHATSAPP_MESSAGE_EN, SITE, whatsappLink } from "@/lib/site";
import { IconChevronDown, IconClose, IconMenu, IconPhone } from "@/components/icons";

const sectionIds = [
  "about",
  "practice-areas",
  "why-me",
  "process",
  "testimonials",
  "faq",
  "contact",
] as const;

export default function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    { id: sectionIds[0], label: t.nav.about },
    { id: sectionIds[1], label: t.nav.practiceAreas },
    { id: sectionIds[2], label: t.nav.whyMe },
    { id: sectionIds[3], label: t.nav.process },
    { id: sectionIds[4], label: t.nav.testimonials },
    { id: sectionIds[5], label: t.nav.faq },
    { id: sectionIds[6], label: t.nav.contact },
  ];

  const waHref = whatsappLink(lang === "en" ? DEFAULT_WHATSAPP_MESSAGE_EN : DEFAULT_WHATSAPP_MESSAGE_BN);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled ? "border-navy-100 bg-ivory/95 backdrop-blur shadow-sm" : "border-transparent bg-ivory/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
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
          <span className="flex flex-col leading-tight">
            <span className="font-serif-display text-base font-semibold text-navy-950 md:text-lg">
              {lang === "en" ? "Yeara Tisha Eti" : SITE.nameBn}
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-gold-600">
              {lang === "en" ? SITE.titleEn : SITE.titleBn}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-navy-800 transition-colors hover:text-gold-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleLang}
            className="rounded-full border border-navy-200 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-navy-700 transition-colors hover:border-gold-500 hover:text-gold-600"
            aria-label="Toggle language"
          >
            {lang === "en" ? "বাংলা" : "English"}
          </button>
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-gold-600"
          >
            <IconPhone className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-navy-950 px-5 py-2.5 text-sm font-semibold text-gold-200 shadow-sm transition-colors hover:bg-navy-800"
          >
            {t.nav.consult}
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-100 bg-ivory px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-2 py-3 text-sm font-medium text-navy-800 hover:bg-navy-50"
              >
                {item.label}
                <IconChevronDown className="h-4 w-4 -rotate-90 text-navy-300" />
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <button
              onClick={toggleLang}
              className="rounded-full border border-navy-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-navy-700"
            >
              {lang === "en" ? "বাংলা" : "English"}
            </button>
            <a
              href={SITE.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-navy-200 px-4 py-2.5 text-sm font-semibold text-navy-800"
            >
              <IconPhone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-navy-950 px-4 py-2.5 text-center text-sm font-semibold text-gold-200"
            >
              {t.nav.consult}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
