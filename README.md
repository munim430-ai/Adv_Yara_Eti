# Advocate Yeara Tisha Eti — Website

A premium, bilingual (Bangla / English) marketing website for **Advocate Yeara Tisha
Eti** (LLB Hons, LLM, B.Ed), practicing before the Judge Court, Gazipur, Bangladesh.

The design/content brief used to generate this site is documented in [`PROMPT.md`](./PROMPT.md).

## Features

- Premium corporate visual identity (navy + gold, serif/sans pairing) with Bangla-aware
  typography (Noto Sans/Serif Bengali).
- Bangla ⇄ English language toggle across the entire site.
- Hero, About, Practice Areas, Why Choose, Process, Stats, Testimonials, FAQ, and
  Contact sections.
- Click-to-call and click-to-WhatsApp everywhere a phone number appears, plus a
  persistent floating WhatsApp button and a mobile sticky call/contact bar.
- Contact form that opens a pre-filled WhatsApp message — no backend or API keys
  required.
- Embedded Google Map to the chamber (Judge Court, Gazipur) with a directions link.
- FAQ accordion, SEO metadata, Open Graph tags, and `Attorney` JSON-LD structured data.
- Fully responsive, built with Next.js App Router + TypeScript + Tailwind CSS v4.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS v4
- Zero required environment variables — no paid APIs, no database.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint     # eslint
```

## Deploying to Vercel (manual)

This project requires **no environment variables** and **no additional configuration**
— Vercel auto-detects Next.js.

1. Push this repository to GitHub (already done if you're reading this on GitHub).
2. Go to [vercel.com/new](https://vercel.com/new) and import this repository.
3. Framework Preset: **Next.js** (auto-detected). Leave Build/Output settings as
   default (`next build`, `.next`).
4. Click **Deploy**.

A `vercel.json` is included for explicitness, but the project would deploy correctly
even without it.

### Content updates

All copy (both languages) lives in [`src/lib/content.ts`](./src/lib/content.ts).
Contact details, phone/WhatsApp numbers, and the chamber address live in
[`src/lib/site.ts`](./src/lib/site.ts). Update these two files to change the site's
text or contact information without touching any component code.

## Project Structure

```
src/
  app/                   Next.js App Router pages, layout, metadata
  components/            Header, Footer, floating CTAs, icons
  components/sections/   Homepage sections (Hero, About, Practice Areas, ...)
  context/                Language (Bangla/English) provider
  lib/                    Site content and contact/config constants
public/images/            Headshot used across the site
docs/source/               Original source material (business card scan) — not served publicly
```
