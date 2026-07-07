export const SITE_URL = "https://adv-yara-eti.vercel.app";

export const SITE = {
  nameEn: "Yeara Tisha Eti",
  nameBn: "ইয়েরা তিশা ইতি",
  titleEn: "Advocate",
  titleBn: "এডভোকেট",
  credentialsEn: "LLB (Hons), LLM, B.Ed",
  credentialsBn: "এল.এল.বি (অনার্স), এল.এল.এম, বি.এড",
  courtEn: "Judge Court, Gazipur",
  courtBn: "জজ কোর্ট, গাজীপুর",
  chamber: {
    lineEn: ["Room No. 8, Bar Association Building", "Judge Court, Gazipur, Bangladesh"],
    lineBn: ["৮ নং হল রুম, আইনজীবী সমিতি ভবন", "জজ কোর্ট, গাজীপুর"],
  },
  phoneDisplay: "01639-759034",
  phoneHref: "tel:+8801639759034",
  whatsappNumber: "8801639759034",
  email: "yeara.tisha95@gmail.com",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Gazipur+Judge+Court,+Gazipur,+Bangladesh&output=embed",
  mapsDirectionsHref:
    "https://www.google.com/maps/search/?api=1&query=Gazipur+Judge+Court+Bar+Association+Building",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE_EN =
  "Assalamu Alaikum, I would like to book a legal consultation with Advocate Yeara Tisha Eti.";
export const DEFAULT_WHATSAPP_MESSAGE_BN =
  "আসসালামু আলাইকুম, আমি এডভোকেট ইয়েরা তিশা ইতির সাথে একটি আইনি পরামর্শের জন্য যোগাযোগ করতে চাই।";
