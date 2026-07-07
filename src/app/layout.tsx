import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_Bengali, Noto_Serif_Bengali } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileCTA from "@/components/MobileCTA";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const notoSansBn = Noto_Sans_Bengali({
  variable: "--font-noto-sans-bn",
  subsets: ["bengali"],
  display: "swap",
});

const notoSerifBn = Noto_Serif_Bengali({
  variable: "--font-noto-serif-bn",
  subsets: ["bengali"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Advocate Yeara Tisha Eti | Judge Court, Gazipur",
    template: "%s | Advocate Yeara Tisha Eti",
  },
  description:
    "Advocate Yeara Tisha Eti (LLB Hons, LLM, B.Ed) provides trusted legal counsel in family, criminal, civil, and property matters before the Judge Court, Gazipur, Bangladesh.",
  keywords: [
    "Advocate Gazipur",
    "Yeara Tisha Eti",
    "Judge Court Gazipur lawyer",
    "Gazipur Bar Association",
    "family lawyer Gazipur",
    "criminal lawyer Gazipur",
    "এডভোকেট গাজীপুর",
  ],
  authors: [{ name: "Advocate Yeara Tisha Eti" }],
  openGraph: {
    title: "Advocate Yeara Tisha Eti | Judge Court, Gazipur",
    description:
      "Trusted legal counsel in family, criminal, civil, and property matters before the Judge Court, Gazipur.",
    url: SITE_URL,
    siteName: "Advocate Yeara Tisha Eti",
    images: ["/images/yeara-tisha-eti.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocate Yeara Tisha Eti | Judge Court, Gazipur",
    description: "Trusted legal counsel before the Judge Court, Gazipur, Bangladesh.",
    images: ["/images/yeara-tisha-eti.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Yeara Tisha Eti",
  alternateName: "ইয়েরা তিশা ইতি",
  jobTitle: "Advocate",
  description:
    "Advocate practicing before the Judge Court, Gazipur, specialising in family, criminal, civil, and property law.",
  image: `${SITE_URL}/images/yeara-tisha-eti.jpg`,
  url: SITE_URL,
  telephone: "+8801639759034",
  email: "yeara.tisha95@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Room No. 8, Bar Association Building, Judge Court",
    addressLocality: "Gazipur",
    addressCountry: "BD",
  },
  areaServed: "Gazipur, Bangladesh",
  memberOf: {
    "@type": "Organization",
    name: "Gazipur Bar Association",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${notoSansBn.variable} ${notoSerifBn.variable}`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-navy-950 antialiased">
        <Script id="ld-json" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
        <LanguageProvider>
          <Header />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <MobileCTA />
        </LanguageProvider>
      </body>
    </html>
  );
}
