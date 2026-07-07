# Website Generation Prompt — Advocate Yeara Tisha Eti

This is the design/content brief used to generate this website. It was written after
extracting details from her business card and professional photo, and after studying
the conventions of premium law-firm and solo-advocate websites (Rahman Law Associates,
Tanjib Alam & Associates, boutique international firm sites such as Withersworldwide,
Freshfields' attorney bio pages, and Clio/FindLaw templates for solo practitioners).
Keep this file as the source of truth if the site is regenerated or extended.

---

## Prompt

> Design and build a premium, corporate-grade personal website for a Bangladeshi
> advocate. The site must feel like it belongs to an established international law
> firm — not a template — while remaining fully bilingual and locally usable for
> clients in Gazipur, Bangladesh.
>
> **Client / subject**
> - Name: Advocate Yeara Tisha Eti (এডভোকেট ইয়েরা তিশা ইতি)
> - Credentials: LLB (Honours), LLM, B.Ed
> - Enrolled/practicing at: Judge Court, Gazipur (জজ কোর্ট, গাজীপুর)
> - Chamber: Room No. 8, Bar Association Building (আইনজীবী সমিতি ভবন), Judge Court,
>   Gazipur
> - Residence (for reference, not public display): Daroga Bari (Kacharipara), Noagaon,
>   Rajendrapur Bazar, Sreepur, Gazipur
> - Phone / WhatsApp: 01639-759034
> - Email: yeara.tisha95@gmail.com
> - A professional studio headshot (blazer, glasses, confident/approachable) is
>   available and should anchor the hero section and About section.
>
> **Tone & visual identity**
> - Premium, trustworthy, corporate — navy blue as the primary brand color (echoing
>   the emblem on her card), paired with a warm gold/brass accent for CTAs and
>   highlights, on a clean white/ivory background. Avoid anything that looks like a
>   generic Bootstrap template.
> - Pair a refined serif typeface for headlines (conveys legal authority/heritage)
>   with a clean grotesque sans-serif for body text and UI. Must render Bangla
>   (Noto Sans Bengali / Noto Serif Bengali) crisply alongside Latin text.
> - Generous whitespace, confident large type, subtle motion (fade/slide-in on
>   scroll), no clutter. Photography-led hero, not stock icons.
>
> **Must-have structure**
> 1. Sticky header with logo/monogram, nav links, a phone click-to-call button, and a
>    prominent "Book a Consultation" CTA that opens WhatsApp with a pre-filled message.
> 2. Hero — headshot, name in Bangla + English, credentials, one-line value
>    proposition, primary CTA (WhatsApp/Call) + secondary CTA (view practice areas).
> 3. Trust bar — bar enrolment, court, years of practice, languages spoken.
> 4. About — narrative bio, education timeline (LLB Hons → LLM → B.Ed), philosophy of
>    practice.
> 5. Practice Areas — grid of the service lines a Judge-Court civil/criminal advocate
>    typically covers: Family & Divorce, Criminal Defence, Property & Land Disputes,
>    Civil Litigation, Writ Petitions, Cheque Dishonour (NI Act 138), Succession &
>    Inheritance, Women & Child-related Cases. Each with icon + short description +
>    "learn more" affordance.
> 6. Why choose her — differentiators (personalized attention, transparent fees,
>    bilingual counsel, women-focused sensitivity, responsiveness).
> 7. Process — a simple numbered "how a consultation works" timeline to lower the
>    barrier for first-time clients.
> 8. Stats — cases handled, years of experience, client satisfaction, response time
>    (as honest placeholders the client can update later).
> 9. Testimonials — carousel/grid, placeholder client quotes (Bangla + English mix),
>    clearly editable.
> 10. FAQ — accordion answering practical client questions (fees, first meeting, what
>     documents to bring, jurisdiction, language).
> 11. Contact — chamber address + embedded map (Judge Court, Gazipur), phone, email,
>     WhatsApp deep link, office hours, and a contact form that opens a pre-filled
>     WhatsApp/email message (no backend/API keys required).
> 12. Footer — condensed contact info, quick links, social/messaging icons matching
>     the card (WhatsApp, Telegram, Email), disclaimer line.
> 13. Persistent floating WhatsApp button on mobile and desktop.
> 14. Language toggle — Bangla ⇄ English, since real clients will primarily be
>     Bangla-speaking.
>
> **Practical "useful for visitors" features (not just decoration)**
> - Click-to-call and click-to-WhatsApp everywhere a phone number appears.
> - Google Maps embed with directions link to the chamber at Judge Court, Gazipur.
> - FAQ accordion so visitors self-serve common questions before contacting.
> - Sticky mobile CTA bar (Call / WhatsApp) so the primary action is always reachable.
> - Fast, accessible, keyboard-navigable, and fully responsive from 360px to 4K.
> - SEO metadata + JSON-LD `LegalService`/`Attorney` structured data so the site is
>   discoverable in local search ("lawyer near Gazipur Judge Court", etc.).
>
> **Technical constraints**
> - Next.js (App Router) + TypeScript + Tailwind CSS, deployable to Vercel with zero
>   configuration (no required environment variables, no paid API keys).
> - Use the supplied headshot and business-card image as real assets, not
>   placeholders.
> - Content should be realistic and complete, but clearly marked/structured so the
>   client can swap in real testimonials, stats, and case examples later.

---

## Notes on source material

- Business card (Bangla) was read manually for name, credentials, court, chamber
  address, home address, phone, and email — kept at `docs/source/business-card.png`
  (deliberately **not** in `public/`, since the card also lists a home address that
  should not be published on the live site — only the chamber/office address is shown
  publicly).
- Headshot used in the hero/about sections — see `public/images/yeara-tisha-eti.jpg`.
- Practice areas were inferred from the fact that she practices at a District Judge
  Court (general civil/criminal jurisdiction in Bangladesh), not stated explicitly on
  the card. These should be confirmed/edited by the client.
