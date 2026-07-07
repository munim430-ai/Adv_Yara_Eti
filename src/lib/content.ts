export type Lang = "en" | "bn";

export interface PracticeArea {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  context: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface SiteContent {
  nav: {
    about: string;
    practiceAreas: string;
    whyMe: string;
    process: string;
    testimonials: string;
    faq: string;
    contact: string;
    consult: string;
    call: string;
  };
  hero: {
    eyebrow: string;
    headingLine1: string;
    headingLine2: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge: string;
  };
  trustBar: Array<{ label: string; value: string }>;
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    timeline: Array<{ year: string; title: string; detail: string }>;
  };
  practiceAreas: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: PracticeArea[];
  };
  whyChoose: {
    eyebrow: string;
    heading: string;
    items: Array<{ title: string; description: string }>;
  };
  process: {
    eyebrow: string;
    heading: string;
    subheading: string;
    steps: ProcessStep[];
  };
  stats: Stat[];
  testimonials: {
    eyebrow: string;
    heading: string;
    items: Testimonial[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: Faq[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    officeHoursTitle: string;
    officeHours: Array<{ day: string; time: string }>;
    formNote: string;
    formNameLabel: string;
    formPhoneLabel: string;
    formMessageLabel: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    chamberTitle: string;
    directionsLabel: string;
  };
  ctaBanner: {
    heading: string;
    subheading: string;
    cta: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    getInTouch: string;
    disclaimer: string;
    rights: string;
  };
}

export const contentEn: SiteContent = {
  nav: {
    about: "About",
    practiceAreas: "Practice Areas",
    whyMe: "Why Me",
    process: "Process",
    testimonials: "Testimonials",
    faq: "FAQ",
    contact: "Contact",
    consult: "Book a Consultation",
    call: "Call Now",
  },
  hero: {
    eyebrow: "Advocate · Judge Court, Gazipur",
    headingLine1: "Trusted Legal Counsel",
    headingLine2: "For Every Chapter of Life",
    subheading:
      "Advocate Yeara Tisha Eti provides clear, dependable, and compassionate legal representation in family, criminal, civil, and property matters before the Judge Court, Gazipur.",
    ctaPrimary: "Book a Free Consultation",
    ctaSecondary: "Explore Practice Areas",
    badge: "LLB (Hons) · LLM · B.Ed",
  },
  trustBar: [
    { label: "Enrolled at", value: "Gazipur Bar Association" },
    { label: "Practicing before", value: "Judge Court, Gazipur" },
    { label: "Languages", value: "Bangla · English" },
    { label: "Consultations", value: "In-person · WhatsApp · Phone" },
  ],
  about: {
    eyebrow: "About the Advocate",
    heading: "Diligent Advocacy, Grounded in Trust",
    paragraphs: [
      "Advocate Yeara Tisha Eti is a practicing lawyer at the Judge Court, Gazipur, dedicated to providing accessible and honest legal counsel to individuals and families across Gazipur and the surrounding districts.",
      "Holding an LLB (Honours) and LLM alongside a B.Ed, she combines rigorous legal training with a genuine commitment to guiding clients through what are often the most difficult moments of their lives — with patience, clarity, and discretion.",
      "Her practice is built on straightforward communication: clients are told plainly what the law says, what their options are, and what to realistically expect — before any case begins.",
    ],
    timeline: [
      {
        year: "Step 01",
        title: "LLB (Honours)",
        detail: "Foundational legal education with honours distinction.",
      },
      {
        year: "Step 02",
        title: "LLM",
        detail: "Postgraduate specialisation in law for advanced litigation practice.",
      },
      {
        year: "Step 03",
        title: "B.Ed",
        detail: "A background in education that shapes a clear, patient way of explaining the law to clients.",
      },
      {
        year: "Step 04",
        title: "Enrolled Advocate",
        detail: "Practicing before the Judge Court, Gazipur, and the Gazipur Bar Association.",
      },
    ],
  },
  practiceAreas: {
    eyebrow: "Practice Areas",
    heading: "Comprehensive Legal Services",
    subheading:
      "From family disputes to property matters, get focused representation across the areas that matter most to individuals and families.",
    items: [
      {
        icon: "family",
        title: "Family & Divorce Law",
        description:
          "Divorce, separation, dower (denmohor), maintenance, custody, and guardianship matters handled with sensitivity and discretion.",
      },
      {
        icon: "shield",
        title: "Criminal Defence",
        description:
          "Representation at every stage of criminal proceedings, from bail applications to trial before the Judge Court.",
      },
      {
        icon: "land",
        title: "Property & Land Disputes",
        description:
          "Title disputes, partition suits, illegal possession, and land record corrections resolved with careful documentation.",
      },
      {
        icon: "scale",
        title: "Civil Litigation",
        description:
          "Contract disputes, recovery of money suits, injunctions, and other civil matters pursued to a fair resolution.",
      },
      {
        icon: "document",
        title: "Writ Petitions",
        description:
          "Constitutional remedies and writ matters for the protection of fundamental rights.",
      },
      {
        icon: "check",
        title: "Cheque Dishonour (NI Act §138)",
        description:
          "Prompt action on dishonoured cheque cases, from legal notice through to final judgment.",
      },
      {
        icon: "book",
        title: "Succession & Inheritance",
        description:
          "Succession certificates, inheritance disputes, and estate distribution guided under applicable personal law.",
      },
      {
        icon: "heart",
        title: "Women & Child Rights",
        description:
          "Dedicated support in cases involving women and child repression, with a compassionate, victim-centred approach.",
      },
    ],
  },
  whyChoose: {
    eyebrow: "Why Choose Her",
    heading: "A Practice Built on Trust and Clarity",
    items: [
      {
        title: "Personal Attention",
        description:
          "Every client works directly with Advocate Eti — no case gets lost in a large firm's queue.",
      },
      {
        title: "Transparent Fees",
        description:
          "Costs and timelines are discussed openly at the first meeting, with no hidden surprises later.",
      },
      {
        title: "Bilingual Counsel",
        description:
          "Comfortable advising in both Bangla and English, and explaining legal documents in plain language.",
      },
      {
        title: "Sensitivity to Women & Families",
        description:
          "Particular care and confidentiality in family, matrimonial, and women's rights matters.",
      },
      {
        title: "Responsive Communication",
        description:
          "Reachable by phone and WhatsApp, with prompt replies rather than long silences.",
      },
      {
        title: "Local Court Knowledge",
        description:
          "Day-to-day familiarity with the Judge Court, Gazipur and its procedures speeds up every filing.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    heading: "Getting Legal Help Doesn't Have to Be Confusing",
    subheading: "A simple, four-step path from your first message to resolution.",
    steps: [
      {
        step: "01",
        title: "Reach Out",
        description: "Call, WhatsApp, or email to briefly describe your situation.",
      },
      {
        step: "02",
        title: "Consultation",
        description: "Meet in person at the chamber or discuss over phone/WhatsApp to review the facts and documents.",
      },
      {
        step: "03",
        title: "Clear Plan",
        description: "Receive a plain-language explanation of your options, likely timeline, and costs.",
      },
      {
        step: "04",
        title: "Representation",
        description: "Advocate Eti prepares filings and represents you at every hearing before the court.",
      },
    ],
  },
  stats: [
    { value: "8+", label: "Practice Areas Covered" },
    { value: "100%", label: "Client Confidentiality" },
    { value: "24h", label: "Typical Response Time" },
    { value: "1-on-1", label: "Direct Advocate Access" },
  ],
  testimonials: {
    eyebrow: "Client Experiences",
    heading: "What Clients Say",
    items: [
      {
        quote:
          "Advocate Eti explained every step of my case in plain language. I never felt lost or ignored, even when things were stressful.",
        name: "Client, Family Matter",
        context: "Sreepur, Gazipur",
      },
      {
        quote:
          "খুবই আন্তরিকভাবে আমার মামলার প্রতিটি ধাপ বুঝিয়ে দিয়েছেন। সময়মতো যোগাযোগ করেছেন এবং কখনো বিভ্রান্ত করেননি।",
        name: "মক্কেল, সম্পত্তি সংক্রান্ত মামলা",
        context: "গাজীপুর",
      },
      {
        quote:
          "Professional, responsive, and honest about what to expect from the start. Highly recommended for anyone dealing with the Judge Court, Gazipur.",
        name: "Client, Civil Suit",
        context: "Gazipur",
      },
    ],
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    heading: "Common Questions From Clients",
    items: [
      {
        question: "How do I book a first consultation?",
        answer:
          "Simply call or message on WhatsApp using the numbers on this page. Briefly describe your matter and a convenient time will be arranged at the chamber, Judge Court, Gazipur.",
      },
      {
        question: "What should I bring to the first meeting?",
        answer:
          "Bring any documents related to your case — contracts, notices, ID/NID, land records, or court papers — along with a brief written timeline of events if possible.",
      },
      {
        question: "Does Advocate Eti handle cases outside Gazipur?",
        answer:
          "Her primary practice is before the Judge Court, Gazipur. For matters in other jurisdictions, please contact her directly to discuss options.",
      },
      {
        question: "What languages are consultations available in?",
        answer: "Consultations are available in both Bangla and English.",
      },
      {
        question: "How are legal fees structured?",
        answer:
          "Fees depend on the nature and complexity of the matter and are always discussed transparently before any engagement begins.",
      },
      {
        question: "Can I contact the office after hours?",
        answer:
          "Messages sent via WhatsApp or email outside office hours are reviewed and answered as promptly as possible the next business day.",
      },
    ],
  },
  contact: {
    eyebrow: "Get in Touch",
    heading: "Schedule Your Consultation",
    subheading:
      "Reach out by phone, WhatsApp, or email — or visit the chamber directly at the Judge Court, Gazipur.",
    officeHoursTitle: "Office Hours",
    officeHours: [
      { day: "Sunday – Thursday", time: "10:00 AM – 5:00 PM" },
      { day: "Saturday", time: "By Appointment" },
      { day: "Friday", time: "Closed" },
    ],
    formNote: "This form opens a pre-filled WhatsApp message — no data is stored on this website.",
    formNameLabel: "Your Name",
    formPhoneLabel: "Phone Number",
    formMessageLabel: "How can she help?",
    formMessagePlaceholder: "Briefly describe your legal matter...",
    formSubmit: "Send via WhatsApp",
    chamberTitle: "Chamber Address",
    directionsLabel: "Get Directions",
  },
  ctaBanner: {
    heading: "Every Legal Matter Deserves a Clear Path Forward",
    subheading: "Speak with Advocate Yeara Tisha Eti today and take the first confident step.",
    cta: "Book a Consultation",
  },
  footer: {
    tagline: "Trusted legal counsel before the Judge Court, Gazipur.",
    quickLinks: "Quick Links",
    getInTouch: "Get in Touch",
    disclaimer:
      "This website is for general informational purposes only and does not constitute legal advice. Please consult directly for advice specific to your situation.",
    rights: "All rights reserved.",
  },
};

export const contentBn: SiteContent = {
  nav: {
    about: "পরিচিতি",
    practiceAreas: "প্র্যাকটিস এরিয়া",
    whyMe: "কেন আমি",
    process: "প্রক্রিয়া",
    testimonials: "মতামত",
    faq: "প্রশ্নোত্তর",
    contact: "যোগাযোগ",
    consult: "পরামর্শের জন্য বুক করুন",
    call: "কল করুন",
  },
  hero: {
    eyebrow: "এডভোকেট · জজ কোর্ট, গাজীপুর",
    headingLine1: "নির্ভরযোগ্য আইনি সহায়তা",
    headingLine2: "জীবনের প্রতিটি ধাপে",
    subheading:
      "এডভোকেট ইয়েরা তিশা ইতি জজ কোর্ট, গাজীপুরে পারিবারিক, ফৌজদারি, দেওয়ানি ও সম্পত্তি সংক্রান্ত বিষয়ে স্বচ্ছ ও নির্ভরযোগ্য আইনি প্রতিনিধিত্ব প্রদান করেন।",
    ctaPrimary: "ফ্রি পরামর্শের জন্য বুক করুন",
    ctaSecondary: "প্র্যাকটিস এরিয়া দেখুন",
    badge: "এল.এল.বি (অনার্স) · এল.এল.এম · বি.এড",
  },
  trustBar: [
    { label: "সদস্য", value: "গাজীপুর আইনজীবী সমিতি" },
    { label: "প্র্যাকটিস", value: "জজ কোর্ট, গাজীপুর" },
    { label: "ভাষা", value: "বাংলা · ইংরেজি" },
    { label: "পরামর্শ", value: "সরাসরি · হোয়াটসঅ্যাপ · ফোন" },
  ],
  about: {
    eyebrow: "এডভোকেট সম্পর্কে",
    heading: "আস্থা ও নিষ্ঠার সাথে আইনি সেবা",
    paragraphs: [
      "এডভোকেট ইয়েরা তিশা ইতি জজ কোর্ট, গাজীপুরে একজন কর্মরত আইনজীবী, যিনি গাজীপুর ও এর আশেপাশের এলাকার ব্যক্তি ও পরিবারদের জন্য সহজলভ্য ও সৎ আইনি পরামর্শ প্রদানে নিবেদিত।",
      "এল.এল.বি (অনার্স) ও এল.এল.এম-এর পাশাপাশি বি.এড ডিগ্রিধারী হিসেবে, তিনি কঠোর আইনি প্রশিক্ষণকে মক্কেলদের জীবনের কঠিন মুহূর্তগুলোতে ধৈর্য, স্বচ্ছতা ও বিচক্ষণতার সাথে পথ দেখানোর প্রকৃত প্রতিশ্রুতির সাথে যুক্ত করেছেন।",
      "তাঁর প্র্যাকটিস সহজ ও স্পষ্ট যোগাযোগের উপর ভিত্তি করে গড়ে উঠেছে — মামলা শুরুর আগেই মক্কেলকে স্পষ্টভাবে জানানো হয় আইন কী বলে, তাদের বিকল্প কী, এবং বাস্তবে কী প্রত্যাশা করা যায়।",
    ],
    timeline: [
      { year: "ধাপ ০১", title: "এল.এল.বি (অনার্স)", detail: "সম্মানসহ মৌলিক আইন শিক্ষা।" },
      { year: "ধাপ ০২", title: "এল.এল.এম", detail: "উন্নত মামলা পরিচালনার জন্য স্নাতকোত্তর বিশেষায়ন।" },
      {
        year: "ধাপ ০৩",
        title: "বি.এড",
        detail: "শিক্ষা বিষয়ক পটভূমি, যা মক্কেলদের কাছে আইন সহজভাবে ব্যাখ্যা করতে সহায়তা করে।",
      },
      {
        year: "ধাপ ০৪",
        title: "তালিকাভুক্ত এডভোকেট",
        detail: "জজ কোর্ট, গাজীপুর ও গাজীপুর আইনজীবী সমিতিতে কর্মরত।",
      },
    ],
  },
  practiceAreas: {
    eyebrow: "প্র্যাকটিস এরিয়া",
    heading: "সামগ্রিক আইনি সেবা",
    subheading: "পারিবারিক বিরোধ থেকে শুরু করে সম্পত্তি সংক্রান্ত বিষয় — যা কিছু গুরুত্বপূর্ণ, সবকিছুতেই মনোযোগী প্রতিনিধিত্ব।",
    items: [
      {
        icon: "family",
        title: "পারিবারিক ও তালাক আইন",
        description: "তালাক, বিচ্ছেদ, দেনমোহর, ভরণপোষণ, হেফাজত ও অভিভাবকত্ব সংক্রান্ত বিষয় সংবেদনশীলতার সাথে পরিচালনা।",
      },
      {
        icon: "shield",
        title: "ফৌজদারি মামলা",
        description: "জামিন আবেদন থেকে শুরু করে জজ কোর্টে বিচার পর্যন্ত প্রতিটি ধাপে প্রতিনিধিত্ব।",
      },
      {
        icon: "land",
        title: "সম্পত্তি ও জমি বিরোধ",
        description: "মালিকানা বিরোধ, বণ্টন মামলা, অবৈধ দখল ও জমির রেকর্ড সংশোধন যত্নসহকারে সমাধান।",
      },
      {
        icon: "scale",
        title: "দেওয়ানি মামলা",
        description: "চুক্তি বিরোধ, অর্থ আদায় মামলা, নিষেধাজ্ঞা ও অন্যান্য দেওয়ানি বিষয় ন্যায্য সমাধানের দিকে পরিচালিত।",
      },
      {
        icon: "document",
        title: "রিট পিটিশন",
        description: "মৌলিক অধিকার রক্ষার জন্য সাংবিধানিক প্রতিকার ও রিট সংক্রান্ত বিষয়।",
      },
      {
        icon: "check",
        title: "চেক ডিজঅনার (এনআই অ্যাক্ট ধারা ১৩৮)",
        description: "লিগ্যাল নোটিশ থেকে চূড়ান্ত রায় পর্যন্ত চেক ডিজঅনার মামলায় দ্রুত পদক্ষেপ।",
      },
      {
        icon: "book",
        title: "উত্তরাধিকার ও ওয়ারিশ",
        description: "উত্তরাধিকার সনদ, ওয়ারিশ বিরোধ ও সম্পত্তি বণ্টন প্রযোজ্য ব্যক্তিগত আইন অনুযায়ী পরিচালনা।",
      },
      {
        icon: "heart",
        title: "নারী ও শিশু অধিকার",
        description: "নারী ও শিশু নির্যাতন সংক্রান্ত মামলায় সহানুভূতিশীল, ভুক্তভোগী-কেন্দ্রিক সহায়তা।",
      },
    ],
  },
  whyChoose: {
    eyebrow: "কেন তাঁকে বেছে নেবেন",
    heading: "আস্থা ও স্বচ্ছতার উপর গড়া একটি প্র্যাকটিস",
    items: [
      { title: "ব্যক্তিগত মনোযোগ", description: "প্রতিটি মক্কেল সরাসরি এডভোকেট ইতির সাথে কাজ করেন — কোনো মামলা হারিয়ে যায় না।" },
      { title: "স্বচ্ছ ফি কাঠামো", description: "প্রথম সাক্ষাতেই খরচ ও সময়সীমা নিয়ে খোলামেলা আলোচনা করা হয়।" },
      { title: "দ্বিভাষিক পরামর্শ", description: "বাংলা ও ইংরেজি উভয় ভাষায় সহজে পরামর্শ প্রদান এবং সহজ ভাষায় আইনি নথি ব্যাখ্যা।" },
      { title: "নারী ও পরিবারের প্রতি সংবেদনশীলতা", description: "পারিবারিক ও নারী অধিকার সংক্রান্ত বিষয়ে বিশেষ যত্ন ও গোপনীয়তা।" },
      { title: "দ্রুত যোগাযোগ", description: "ফোন ও হোয়াটসঅ্যাপে সহজে পাওয়া যায়, দীর্ঘ নীরবতা নয়।" },
      { title: "স্থানীয় আদালত সম্পর্কে জ্ঞান", description: "জজ কোর্ট, গাজীপুরের প্রক্রিয়া সম্পর্কে দৈনন্দিন পরিচিতি প্রতিটি ফাইলিং দ্রুত করে।" },
    ],
  },
  process: {
    eyebrow: "কীভাবে কাজ করে",
    heading: "আইনি সহায়তা পাওয়া জটিল হওয়ার দরকার নেই",
    subheading: "প্রথম বার্তা থেকে সমাধান পর্যন্ত একটি সহজ চার-ধাপের প্রক্রিয়া।",
    steps: [
      { step: "০১", title: "যোগাযোগ করুন", description: "কল, হোয়াটসঅ্যাপ বা ইমেইলে সংক্ষেপে আপনার বিষয়টি জানান।" },
      { step: "০২", title: "পরামর্শ", description: "চেম্বারে সরাসরি বা ফোন/হোয়াটসঅ্যাপে তথ্য ও নথিপত্র পর্যালোচনা করুন।" },
      { step: "০৩", title: "স্পষ্ট পরিকল্পনা", description: "সহজ ভাষায় আপনার বিকল্প, সম্ভাব্য সময়সীমা ও খরচ সম্পর্কে ব্যাখ্যা পান।" },
      { step: "০৪", title: "প্রতিনিধিত্ব", description: "এডভোকেট ইতি প্রয়োজনীয় ফাইলিং প্রস্তুত করেন এবং প্রতিটি শুনানিতে আপনার পক্ষে উপস্থিত থাকেন।" },
    ],
  },
  stats: [
    { value: "৮+", label: "প্র্যাকটিস এরিয়া" },
    { value: "১০০%", label: "মক্কেলের গোপনীয়তা" },
    { value: "২৪ ঘণ্টা", label: "সাধারণ সাড়া প্রদানের সময়" },
    { value: "সরাসরি", label: "এডভোকেটের সাথে সরাসরি যোগাযোগ" },
  ],
  testimonials: {
    eyebrow: "মক্কেলদের অভিজ্ঞতা",
    heading: "মক্কেলরা যা বলেন",
    items: [
      {
        quote: "এডভোকেট ইতি আমার মামলার প্রতিটি ধাপ সহজ ভাষায় বুঝিয়েছেন। কঠিন সময়েও কখনো বিভ্রান্ত বা উপেক্ষিত মনে হয়নি।",
        name: "মক্কেল, পারিবারিক মামলা",
        context: "শ্রীপুর, গাজীপুর",
      },
      {
        quote: "খুবই আন্তরিকভাবে আমার মামলার প্রতিটি ধাপ বুঝিয়ে দিয়েছেন। সময়মতো যোগাযোগ করেছেন এবং কখনো বিভ্রান্ত করেননি।",
        name: "মক্কেল, সম্পত্তি সংক্রান্ত মামলা",
        context: "গাজীপুর",
      },
      {
        quote: "পেশাদার, দ্রুত সাড়া প্রদানকারী এবং শুরু থেকেই সৎ। জজ কোর্ট, গাজীপুরে যেকোনো বিষয়ে যোগাযোগের জন্য জোরালোভাবে সুপারিশ করছি।",
        name: "মক্কেল, দেওয়ানি মামলা",
        context: "গাজীপুর",
      },
    ],
  },
  faq: {
    eyebrow: "সচরাচর জিজ্ঞাসিত প্রশ্ন",
    heading: "মক্কেলদের সাধারণ প্রশ্নসমূহ",
    items: [
      {
        question: "প্রথম পরামর্শের জন্য কীভাবে বুক করব?",
        answer: "এই পাতায় দেওয়া নম্বরে কল করুন বা হোয়াটসঅ্যাপে বার্তা পাঠান। সংক্ষেপে আপনার বিষয় জানালে জজ কোর্ট, গাজীপুরের চেম্বারে সুবিধাজনক সময় ঠিক করা হবে।",
      },
      {
        question: "প্রথম সাক্ষাতে কী কী নিয়ে আসব?",
        answer: "আপনার মামলা সংক্রান্ত যেকোনো নথি — চুক্তি, নোটিশ, এনআইডি, জমির দলিল বা আদালতের কাগজপত্র — এবং সম্ভব হলে ঘটনার একটি সংক্ষিপ্ত সময়রেখা নিয়ে আসুন।",
      },
      {
        question: "এডভোকেট ইতি কি গাজীপুরের বাইরে মামলা পরিচালনা করেন?",
        answer: "তাঁর মূল প্র্যাকটিস জজ কোর্ট, গাজীপুরে। অন্য এখতিয়ারের বিষয়ে বিকল্প জানতে সরাসরি যোগাযোগ করুন।",
      },
      { question: "পরামর্শ কোন ভাষায় পাওয়া যায়?", answer: "বাংলা ও ইংরেজি উভয় ভাষায় পরামর্শ প্রদান করা হয়।" },
      {
        question: "আইনি ফি কীভাবে নির্ধারিত হয়?",
        answer: "মামলার প্রকৃতি ও জটিলতার উপর ফি নির্ভর করে এবং কাজ শুরুর আগেই তা স্বচ্ছভাবে আলোচনা করা হয়।",
      },
      {
        question: "অফিস সময়ের পরে কি যোগাযোগ করা যাবে?",
        answer: "অফিস সময়ের পরে হোয়াটসঅ্যাপ বা ইমেইলে পাঠানো বার্তার উত্তর পরবর্তী কার্যদিবসে যত দ্রুত সম্ভব দেওয়া হয়।",
      },
    ],
  },
  contact: {
    eyebrow: "যোগাযোগ করুন",
    heading: "আপনার পরামর্শ নির্ধারণ করুন",
    subheading: "ফোন, হোয়াটসঅ্যাপ বা ইমেইলে যোগাযোগ করুন — অথবা সরাসরি জজ কোর্ট, গাজীপুরের চেম্বারে আসুন।",
    officeHoursTitle: "অফিস সময়",
    officeHours: [
      { day: "রবিবার – বৃহস্পতিবার", time: "সকাল ১০:০০ – বিকাল ৫:০০" },
      { day: "শনিবার", time: "পূর্ব নির্ধারিত অ্যাপয়েন্টমেন্টে" },
      { day: "শুক্রবার", time: "বন্ধ" },
    ],
    formNote: "এই ফর্মটি একটি পূরণকৃত হোয়াটসঅ্যাপ বার্তা খুলবে — এই ওয়েবসাইটে কোনো তথ্য সংরক্ষণ করা হয় না।",
    formNameLabel: "আপনার নাম",
    formPhoneLabel: "ফোন নম্বর",
    formMessageLabel: "কীভাবে সাহায্য করতে পারেন?",
    formMessagePlaceholder: "সংক্ষেপে আপনার আইনি বিষয়টি লিখুন...",
    formSubmit: "হোয়াটসঅ্যাপে পাঠান",
    chamberTitle: "চেম্বারের ঠিকানা",
    directionsLabel: "দিকনির্দেশনা দেখুন",
  },
  ctaBanner: {
    heading: "প্রতিটি আইনি বিষয়ের জন্য প্রয়োজন একটি স্পষ্ট পথ",
    subheading: "আজই এডভোকেট ইয়েরা তিশা ইতির সাথে কথা বলুন এবং আত্মবিশ্বাসের সাথে প্রথম পদক্ষেপ নিন।",
    cta: "পরামর্শের জন্য বুক করুন",
  },
  footer: {
    tagline: "জজ কোর্ট, গাজীপুরে নির্ভরযোগ্য আইনি পরামর্শ।",
    quickLinks: "দ্রুত লিংক",
    getInTouch: "যোগাযোগ করুন",
    disclaimer: "এই ওয়েবসাইটটি শুধুমাত্র সাধারণ তথ্যের উদ্দেশ্যে তৈরি এবং এটি আইনি পরামর্শ হিসেবে বিবেচিত নয়। আপনার নির্দিষ্ট বিষয়ে পরামর্শের জন্য সরাসরি যোগাযোগ করুন।",
    rights: "সর্বস্বত্ব সংরক্ষিত।",
  },
};

export const content: Record<Lang, SiteContent> = {
  en: contentEn,
  bn: contentBn,
};
