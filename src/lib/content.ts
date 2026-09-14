export const site = {
  name: "Cupid Talent",
  tagline: "Creator Management",
  email: "apply@cupidtalent.com",
};

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Method", href: "/#method" },
  { label: "Press", href: "/#press" },
  { label: "Stories", href: "/#stories" },
  { label: "Team", href: "/#team" },
  { label: "Contact", href: "/contact" },
] as const;

export const marqueePrimary = [
  "Account management",
  "24/7 messaging",
  "Growth strategy",
  "Social elevation",
  "Maximise income",
  "Take the hassle off",
  "Transparent reporting",
  "You create — we operate",
];

export const marqueeSecondary = [
  "Honest people",
  "Professional management",
  "Client first, always",
  "No harassment. No creep.",
  "Respectful & discreet",
  "We grow the page with you",
];

export const marqueeCta = [
  "Applications open",
  "Confidential intake",
  "A clear written plan",
  "Then we take the hassle",
  "Your growth is the brief",
  "Straight, professional, kind",
];

export const pillars = [
  {
    index: "01",
    title: "Accounts",
    body: "We run the page properly. Security, setup, posting, and the day-to-day — handled with care, so you are never left managing a second job.",
  },
  {
    index: "02",
    title: "Messages",
    body: "A trained team lives in the inbox. Fan chat that sounds like you, with boundaries held. Professional, never creepy — and you never have to open the app.",
  },
  {
    index: "03",
    title: "Growth",
    body: "Your success is the brief. We elevate the socials, tighten the offer, and work the page until it is as big as it can be — income first, ego never.",
  },
];

export const values = [
  {
    title: "Transparent",
    body: "You always know what we are doing, why we are doing it, and what it is earning. No fog. No surprises.",
  },
  {
    title: "Honest",
    body: "Straight answers, even when they are unglamorous. We would rather tell you the truth than sell you a fantasy.",
  },
  {
    title: "Professional",
    body: "We run this like a proper company. Process, manners, and respect — for you, and for the people who write in.",
  },
  {
    title: "Safe",
    body: "No harassment. No creepy advances. Not from us, and not tolerated in the work. A studio you can actually trust.",
  },
];

export const services = [
  {
    title: "Growth",
    body: "Pricing, promotions, and a plan for the next ninety days. The job is to maximise income — not to look busy.",
  },
  {
    title: "Social media",
    body: "We elevate the pages around the account so the whole presence compounds. Consistent, considered, and on-brand.",
  },
  {
    title: "Operations",
    body: "Calendars, captions, posting, the unglamorous work. You shoot. We take the hassle and the stress off your hands.",
  },
  {
    title: "A professional inbox",
    body: "Chat that earns, in your voice, with a line that is never crossed. Boundaries are part of the service.",
  },
];

export const method = [
  {
    step: "01",
    title: "Apply",
    body: "Tell us about the page, the platforms, and what you want off your plate. Applications stay confidential.",
  },
  {
    step: "02",
    title: "Onboard",
    body: "We learn your voice, agree a clear plan, and stand up the page and inbox in a matter of days. You see every step.",
  },
  {
    step: "03",
    title: "Create",
    body: "You make the content. We run everything else, keep you informed, and keep growing the page — without making you manage us.",
  },
];

export const press = [
  { name: "BBC", src: "/press/bbc.svg", width: 356, height: 210 },
  { name: "ITV", src: "/press/itv.svg", width: 309, height: 210 },
  { name: "ABC", src: "/press/abc.svg", width: 360, height: 210 },
  { name: "VICE", src: "/press/vice.svg", width: 404, height: 210 },
  { name: "MSNBC", src: "/press/msnbc.svg", width: 584, height: 210 },
  { name: "Fox News", src: "/press/fox-news.svg", width: 846, height: 210 },
] as const;

export const awards = [
  {
    year: "2025",
    title: "Breakout Agency of the Year",
    detail: "For a studio that arrived with standards — and kept them.",
  },
  {
    year: "2025",
    title: "Creator Care Award",
    detail: "For putting the person before the page, and safety before the sale.",
  },
] as const;

export const ceo = {
  name: "Jamie Stewart",
  role: "Founder & Chief Executive",
  quote:
    "I started Cupid to take the creepiness out of this work — the harassment too many male and female creators still have to absorb just to earn. My focus is the client. Stay close to them. Stay close to the platforms. Keep scaling the page, and keep strengthening the relationship so both sides win. Everyone deserves to make money in a room that is safe, professional, and secure.",
};

export const testimonials = [
  {
    quote: "I used to lose entire days to the inbox. Cupid took it in a week. I shoot now. That was the whole point.",
    name: "Lila",
    role: "Full-time creator",
  },
  {
    quote: "They treat it like a real company. No weird energy, no pressure, just grown-ups who want the page to grow.",
    name: "Maren",
    role: "Creator, three years on platform",
  },
  {
    quote: "Honest from the first call. They told me what they could do, did it, and the income actually moved.",
    name: "Noelle",
    role: "Creator & brand partner",
  },
  {
    quote: "I was tired of sleazy managers. Cupid is the opposite — kind, clear, and they take the stress off without taking over who I am.",
    name: "Sienna",
    role: "Independent creator",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Jamie Stewart",
    role: "Founder & Chief Executive",
    bio: "Built the studio so creators can scale in a room that is safe, professional, and actually on their side.",
    photo: "",
  },
  { name: "", role: "Head of Talent", bio: "Creator relationships, from first call to long-term plan.", photo: "" },
  { name: "", role: "Messaging Lead", bio: "Voice, inbox, and a team that holds the line.", photo: "" },
  { name: "", role: "Growth Strategist", bio: "Income, socials, and the ninety-day plan.", photo: "" },
  { name: "", role: "Client Success", bio: "Your person at the studio. Clear, kind, always reachable.", photo: "" },
  { name: "", role: "Creative Producer", bio: "Calendars, captions, and a page that never goes quiet.", photo: "" },
];

export const expectSteps = [
  {
    title: "We read every application",
    body: "If it looks like a fit, you’ll hear from us within a few days. If it isn’t, we still close the loop — honestly.",
  },
  {
    title: "A private intro call",
    body: "Platforms, numbers, what you want off your plate. No pitch deck. No pressure. Just a grown-up conversation.",
  },
  {
    title: "A written plan",
    body: "What we take over, what you still own, and how we work together. Then we start — and you can see the work.",
  },
];

export const revenueOptions = [
  "Prefer not to say",
  "Just starting",
  "Under $5k / month",
  "$5k–$15k / month",
  "$15k–$50k / month",
  "$50k+ / month",
] as const;

export const needOptions = [
  "Full management — page, inbox, and growth",
  "Accounts & messages",
  "Growth & socials",
  "Messages only",
  "Not sure yet — want a conversation",
] as const;
