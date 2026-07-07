"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/lib/site";
import { IconPhone, IconMail } from "@/components/icons";

export default function MobileCTA() {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-navy-800 bg-navy-950 md:hidden">
      <a
        href={SITE.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white"
      >
        <IconPhone className="h-4 w-4" />
        {t.nav.call}
      </a>
      <div className="w-px bg-navy-800" />
      <a
        href={`mailto:${SITE.email}`}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-gold-300"
      >
        <IconMail className="h-4 w-4" />
        {t.nav.contact}
      </a>
    </div>
  );
}
