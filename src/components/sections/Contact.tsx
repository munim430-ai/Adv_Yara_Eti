"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE, whatsappLink } from "@/lib/site";
import { IconClock, IconMail, IconMapPin, IconPhone } from "@/components/icons";

export default function Contact() {
  const { t, lang } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const chamberLines = lang === "en" ? SITE.chamber.lineEn : SITE.chamber.lineBn;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const label = lang === "en" ? { name: "Name", phone: "Phone", msg: "Message" } : { name: "নাম", phone: "ফোন", msg: "বার্তা" };
    const composed = [
      `${label.name}: ${name}`,
      `${label.phone}: ${phone}`,
      `${label.msg}: ${message}`,
    ].join("\n");
    window.open(whatsappLink(composed), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-navy-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">{t.contact.eyebrow}</p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold text-navy-950 text-balance sm:text-4xl">
            {t.contact.heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-navy-700/90 sm:text-base">{t.contact.subheading}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                <div>
                  <p className="font-serif-display text-base font-semibold text-navy-950">
                    {t.contact.chamberTitle}
                  </p>
                  {chamberLines.map((line) => (
                    <p key={line} className="mt-1 text-sm text-navy-700/90">
                      {line}
                    </p>
                  ))}
                  <a
                    href={SITE.mapsDirectionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-gold-600 hover:underline"
                  >
                    {t.contact.directionsLabel} →
                  </a>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 border-t border-navy-100 pt-5">
                <IconPhone className="h-5 w-5 shrink-0 text-gold-600" />
                <a href={SITE.phoneHref} className="text-sm font-semibold text-navy-900 hover:text-gold-600">
                  {SITE.phoneDisplay}
                </a>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <IconMail className="h-5 w-5 shrink-0 text-gold-600" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all text-sm font-semibold text-navy-900 hover:text-gold-600"
                >
                  {SITE.email}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <IconClock className="h-5 w-5 text-gold-600" />
                <p className="font-serif-display text-base font-semibold text-navy-950">
                  {t.contact.officeHoursTitle}
                </p>
              </div>
              <ul className="mt-4 space-y-2.5">
                {t.contact.officeHours.map((row) => (
                  <li key={row.day} className="flex items-center justify-between text-sm text-navy-700/90">
                    <span>{row.day}</span>
                    <span className="font-medium text-navy-900">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-navy-100 shadow-sm">
              <iframe
                title="Chamber location map"
                src={SITE.mapsEmbedSrc}
                loading="lazy"
                className="h-64 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-navy-100 bg-white p-7 shadow-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-800">
                {t.contact.formNameLabel}
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-lg border border-navy-200 px-4 py-3 text-sm text-navy-950 outline-none focus:border-gold-500"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-800">
                {t.contact.formPhoneLabel}
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-lg border border-navy-200 px-4 py-3 text-sm text-navy-950 outline-none focus:border-gold-500"
                />
              </label>
            </div>
            <label className="mt-5 flex flex-col gap-1.5 text-sm font-medium text-navy-800">
              {t.contact.formMessageLabel}
              <textarea
                required
                rows={5}
                placeholder={t.contact.formMessagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="resize-none rounded-lg border border-navy-200 px-4 py-3 text-sm text-navy-950 outline-none focus:border-gold-500"
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-navy-950 px-6 py-3.5 text-sm font-semibold text-gold-200 transition-colors hover:bg-navy-800 sm:w-auto"
            >
              {t.contact.formSubmit}
            </button>
            <p className="mt-3 text-xs text-navy-500">{t.contact.formNote}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
