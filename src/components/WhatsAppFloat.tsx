"use client";

import { useLanguage } from "@/context/LanguageContext";
import { DEFAULT_WHATSAPP_MESSAGE_BN, DEFAULT_WHATSAPP_MESSAGE_EN, whatsappLink } from "@/lib/site";
import { IconWhatsapp } from "@/components/icons";

export default function WhatsAppFloat() {
  const { lang } = useLanguage();
  const href = whatsappLink(lang === "en" ? DEFAULT_WHATSAPP_MESSAGE_EN : DEFAULT_WHATSAPP_MESSAGE_BN);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105 md:bottom-6"
    >
      <IconWhatsapp className="h-7 w-7" />
    </a>
  );
}
