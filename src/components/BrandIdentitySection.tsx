import type { JSX } from "react";

/* ------------------------------------------------------------------ *
 * Brand Identity & Visual Systems
 * A brand-forward showcase placed high on the page so a brand director
 * immediately sees identity systems, logos, guidelines, palettes,
 * type systems and brand refreshes — not UX wireframes.
 * All marks are original, NDA-safe illustrative expressions rendered
 * as inline SVG using semantic design tokens (no hardcoded palette).
 * ------------------------------------------------------------------ */

type BrandProject = {
  id: string;
  name: string;
  descriptor: string;
  sector: string;
  year: string;
  concept: string;
  deliverables: string[];
  palette: { name: string; className: string }[];
  logo: JSX.Element;
  wordmarkFont: string;
};

/* --- Logo marks: original abstract lockups --- */

const MarkAurora = (
  <svg viewBox="0 0 64 64" className="h-14 w-14" role="img" aria-label="Aurora abstract mark">
    <defs>
      <linearGradient id="bi-aurora" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="rgb(var(--c-accent))" />
        <stop offset="1" stopColor="rgb(var(--c-accent-light))" />
      </linearGradient>
    </defs>
    <path d="M12 44c0-16 10-28 20-28s20 12 20 28" fill="none" stroke="url(#bi-aurora)" strokeWidth="6" strokeLinecap="round" />
    <path d="M20 48c0-11 5-19 12-19s12 8 12 19" fill="none" stroke="rgb(var(--c-primary))" strokeWidth="5" strokeLinecap="round" opacity="0.55" />
    <circle cx="32" cy="50" r="4" fill="rgb(var(--c-accent))" />
  </svg>
);

const MarkVertex = (
  <svg viewBox="0 0 64 64" className="h-14 w-14" role="img" aria-label="Vertex abstract mark">
    <polygon points="32,8 56,50 8,50" fill="none" stroke="rgb(var(--c-primary))" strokeWidth="5" strokeLinejoin="round" />
    <polygon points="32,24 45,48 19,48" fill="rgb(var(--c-accent))" />
  </svg>
);

const MarkPulse = (
  <svg viewBox="0 0 64 64" className="h-14 w-14" role="img" aria-label="Pulse abstract mark">
    <circle cx="32" cy="32" r="22" fill="none" stroke="rgb(var(--c-primary))" strokeWidth="5" opacity="0.35" />
    <path d="M12 32h10l5-12 8 24 5-12h12" fill="none" stroke="rgb(var(--c-accent))" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MarkMeridian = (
  <svg viewBox="0 0 64 64" className="h-14 w-14" role="img" aria-label="Meridian abstract mark">
    <circle cx="32" cy="32" r="22" fill="rgb(var(--c-primary))" />
    <path d="M32 10c-9 8-9 36 0 44M32 10c9 8 9 36 0 44M12 32h40" fill="none" stroke="rgb(var(--c-accent-light))" strokeWidth="2.5" />
    <circle cx="32" cy="32" r="5" fill="rgb(var(--c-accent-light))" />
  </svg>
);

const MarkGrove = (
  <svg viewBox="0 0 64 64" className="h-14 w-14" role="img" aria-label="Grove abstract mark">
    <rect x="28" y="36" width="8" height="20" rx="2" fill="rgb(var(--c-primary))" />
    <circle cx="32" cy="26" r="14" fill="rgb(var(--c-accent))" />
    <circle cx="22" cy="34" r="9" fill="rgb(var(--c-accent-light))" opacity="0.8" />
    <circle cx="42" cy="34" r="9" fill="rgb(var(--c-accent-light))" opacity="0.8" />
  </svg>
);

const MarkForma = (
  <svg viewBox="0 0 64 64" className="h-14 w-14" role="img" aria-label="Forma abstract mark">
    <rect x="12" y="12" width="18" height="18" rx="4" fill="rgb(var(--c-primary))" />
    <rect x="34" y="12" width="18" height="18" rx="9" fill="rgb(var(--c-accent))" />
    <rect x="12" y="34" width="18" height="18" rx="9" fill="rgb(var(--c-accent-light))" />
    <rect x="34" y="34" width="18" height="18" rx="4" fill="rgb(var(--c-primary))" opacity="0.6" />
  </svg>
);

const PROJECTS: BrandProject[] = [
  {
    id: "aurora",
    name: "Aurora Health",
    descriptor: "Consumer wellness brand identity",
    sector: "Healthcare · Consumer",
    year: "2024",
    concept:
      "A calming, human wellness identity built around a rising-arc mark that signals recovery and momentum. Warm gradient system, rounded geometric wordmark, and an approachable illustration language.",
    deliverables: ["Primary + responsive logo suite", "Gradient color system", "Type scale & voice", "Iconography kit", "App & packaging application"],
    palette: [
      { name: "Indigo", className: "bg-[rgb(var(--c-primary))]" },
      { name: "Accent", className: "bg-[rgb(var(--c-accent))]" },
      { name: "Light", className: "bg-[rgb(var(--c-accent-light))]" },
      { name: "Tint", className: "bg-[rgb(var(--c-tint-200))]" },
    ],
    logo: MarkAurora,
    wordmarkFont: "font-extrabold tracking-tight",
  },
  {
    id: "vertex",
    name: "Vertex Capital",
    descriptor: "Financial services identity system",
    sector: "Fintech · Enterprise",
    year: "2023",
    concept:
      "A precise, confident identity for a capital firm. The apex mark encodes growth and stability; a strict grid, sharp geometric wordmark, and a disciplined mono-accent palette convey trust.",
    deliverables: ["Monogram + wordmark", "Grid & clearspace rules", "Stationery system", "Pitch-deck template", "Digital brand kit"],
    palette: [
      { name: "Deep", className: "bg-[rgb(var(--c-primary))]" },
      { name: "Accent", className: "bg-[rgb(var(--c-accent))]" },
      { name: "Slate", className: "bg-gray-700" },
      { name: "Paper", className: "bg-gray-100" },
    ],
    logo: MarkVertex,
    wordmarkFont: "font-black tracking-tight uppercase",
  },
  {
    id: "pulse",
    name: "Pulse Diagnostics",
    descriptor: "Medical device brand refresh",
    sector: "MedTech · Regulated",
    year: "2024",
    concept:
      "A brand refresh modernizing a legacy diagnostics maker. The waveform mark unifies a fragmented product portfolio; a cleaner wordmark and accessible palette meet clinical clarity standards.",
    deliverables: ["Logo modernization", "Portfolio architecture", "Accessible palette (AAA)", "Device UI brand tokens", "Guidelines PDF"],
    palette: [
      { name: "Core", className: "bg-[rgb(var(--c-primary))]" },
      { name: "Signal", className: "bg-[rgb(var(--c-accent))]" },
      { name: "Light", className: "bg-[rgb(var(--c-accent-light))]" },
      { name: "Neutral", className: "bg-gray-200" },
    ],
    logo: MarkPulse,
    wordmarkFont: "font-bold tracking-tight",
  },
  {
    id: "meridian",
    name: "Meridian Labs",
    descriptor: "AI product identity & system",
    sector: "AI · SaaS",
    year: "2025",
    concept:
      "A globe-meridian mark for an AI platform — structured intelligence made legible. Paired with a variable wordmark, motion identity, and a token-driven design language that scales across the product.",
    deliverables: ["Symbol + motion mark", "Variable wordmark", "Design tokens", "Product UI theming", "Brand + product bridge"],
    palette: [
      { name: "Primary", className: "bg-[rgb(var(--c-primary))]" },
      { name: "Accent", className: "bg-[rgb(var(--c-accent))]" },
      { name: "Glow", className: "bg-[rgb(var(--c-accent-light))]" },
      { name: "Surface", className: "bg-[rgb(var(--c-tint-100))]" },
    ],
    logo: MarkMeridian,
    wordmarkFont: "font-extrabold tracking-tight",
  },
  {
    id: "grove",
    name: "Grove & Co.",
    descriptor: "Consumer lifestyle brand",
    sector: "Retail · Consumer",
    year: "2023",
    concept:
      "A warm, organic identity for a sustainable lifestyle brand. A layered canopy mark, friendly rounded wordmark, and a nature-forward palette translate across packaging, retail, and social.",
    deliverables: ["Logo & sub-marks", "Packaging system", "Social templates", "Photography direction", "Retail signage"],
    palette: [
      { name: "Bark", className: "bg-[rgb(var(--c-primary))]" },
      { name: "Leaf", className: "bg-[rgb(var(--c-accent))]" },
      { name: "Sprout", className: "bg-[rgb(var(--c-accent-light))]" },
      { name: "Cream", className: "bg-[rgb(var(--c-tint-50))]" },
    ],
    logo: MarkGrove,
    wordmarkFont: "font-bold tracking-tight",
  },
  {
    id: "forma",
    name: "Forma Studio",
    descriptor: "Design system as brand",
    sector: "Design Systems",
    year: "2025",
    concept:
      "An identity built from the atoms of a design system — the logo IS the token grid. Demonstrates how brand and product design language stay in lockstep from mark to component library.",
    deliverables: ["Modular mark", "Token-driven brand kit", "Component-library theming", "Runtime multi-theme identity", "Docs site brand"],
    palette: [
      { name: "Base", className: "bg-[rgb(var(--c-primary))]" },
      { name: "Accent", className: "bg-[rgb(var(--c-accent))]" },
      { name: "Light", className: "bg-[rgb(var(--c-accent-light))]" },
      { name: "Tint", className: "bg-[rgb(var(--c-tint-200))]" },
    ],
    logo: MarkForma,
    wordmarkFont: "font-black tracking-tight",
  },
];

function BrandCard({ p }: { p: BrandProject }) {
  return (
    <article
      aria-labelledby={`brand-${p.id}-name`}
      className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[rgb(var(--c-primary)/0.3)]"
    >
      {/* Logo lockup canvas */}
      <div className="relative flex items-center gap-4 bg-[rgb(var(--c-tint-50))] border-b border-gray-100 px-6 py-8">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--c-primary)/0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--c-primary)/0.05) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <span className="relative shrink-0">{p.logo}</span>
        <span className={`relative text-2xl text-[rgb(var(--c-primary))] ${p.wordmarkFont}`}>
          {p.name}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 mb-1">
          <h3 id={`brand-${p.id}-name`} className="font-bold text-gray-900 text-base leading-snug">
            {p.descriptor}
          </h3>
          <span className="text-[11px] font-semibold text-gray-500 whitespace-nowrap">{p.year}</span>
        </div>
        <p className="text-[rgb(var(--c-accent-on-light))] text-xs font-semibold uppercase tracking-wide mb-3">
          {p.sector}
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">{p.concept}</p>

        {/* Palette */}
        <p className="text-[11px] font-bold uppercase tracking-wide text-gray-700 mb-2">Brand palette</p>
        <ul className="flex gap-2 mb-4 list-none p-0 m-0">
          {p.palette.map((c) => (
            <li key={c.name} className="flex-1">
              <span className={`block h-8 rounded-md border border-black/5 ${c.className}`} aria-hidden="true" />
              <span className="mt-1 block text-[10px] text-gray-600 text-center">{c.name}</span>
            </li>
          ))}
        </ul>

        {/* Deliverables */}
        <p className="text-[11px] font-bold uppercase tracking-wide text-gray-700 mb-2">Deliverables</p>
        <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0 mt-auto">
          {p.deliverables.map((d) => (
            <li
              key={d}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[rgb(var(--c-tint-100))] text-[rgb(var(--c-primary))] border border-[rgb(var(--c-primary)/0.12)]"
            >
              {d}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* --- Brand guideline mini-spread --- */
function GuidelinesSpread() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
      <p className="text-[rgb(var(--c-accent-on-light))] text-xs font-semibold tracking-[2px] uppercase mb-2">
        Anatomy of a brand system
      </p>
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Every identity ships as an enforceable guideline — not just a logo file
      </h3>
      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,15rem),1fr))]">
        {/* Logo construction */}
        <div className="rounded-xl border border-gray-100 bg-[rgb(var(--c-tint-50))] p-4">
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-700 mb-3">Logo construction & clearspace</p>
          <div className="relative flex items-center justify-center h-28 rounded-lg bg-white border border-dashed border-[rgb(var(--c-primary)/0.3)]">
            <span aria-hidden="true" className="absolute inset-3 border border-dashed border-[rgb(var(--c-accent)/0.35)] rounded" />
            {MarkMeridian}
          </div>
        </div>
        {/* Type system */}
        <div className="rounded-xl border border-gray-100 bg-[rgb(var(--c-tint-50))] p-4">
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-700 mb-3">Type system</p>
          <p className="text-3xl font-black text-[rgb(var(--c-primary))] leading-none">Aa</p>
          <p className="text-lg font-bold text-gray-800 mt-1">Display · Bold</p>
          <p className="text-sm text-gray-600">Body · Regular 400</p>
          <p className="text-xs text-gray-500 tracking-wide mt-1">CAPS · LETTERSPACED LABELS</p>
        </div>
        {/* Color tokens */}
        <div className="rounded-xl border border-gray-100 bg-[rgb(var(--c-tint-50))] p-4">
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-700 mb-3">Color tokens (AAA-checked)</p>
          <div className="space-y-1.5">
            {[
              { c: "bg-[rgb(var(--c-primary))]", t: "Primary / 49 46 129" },
              { c: "bg-[rgb(var(--c-accent))]", t: "Accent / 79 70 229" },
              { c: "bg-[rgb(var(--c-accent-light))]", t: "Light / 99 102 241" },
            ].map((r) => (
              <div key={r.t} className="flex items-center gap-2">
                <span className={`h-6 w-6 rounded ${r.c} border border-black/5`} aria-hidden="true" />
                <span className="text-[11px] font-mono text-gray-700">{r.t}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Applications */}
        <div className="rounded-xl border border-gray-100 bg-[rgb(var(--c-tint-50))] p-4">
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-700 mb-3">Applications</p>
          <div className="grid grid-cols-3 gap-2">
            {["Card", "App", "Social", "Pack", "Sign", "Web"].map((a) => (
              <div key={a} className="aspect-square rounded-md bg-gradient-to-br from-[rgb(var(--c-primary))] to-[rgb(var(--c-accent))] flex items-center justify-center">
                <span className="text-[9px] font-semibold text-white">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Brand refresh before/after --- */
function RefreshShowcase() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
      <p className="text-[rgb(var(--c-accent-on-light))] text-xs font-semibold tracking-[2px] uppercase mb-2">
        Brand refresh
      </p>
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Modernizing a legacy mark without losing equity
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Before */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">Before</span>
          <div className="flex flex-col items-center gap-3">
            <svg viewBox="0 0 64 64" className="h-16 w-16" role="img" aria-label="Legacy mark, before refresh">
              <circle cx="32" cy="32" r="26" fill="none" stroke="#9ca3af" strokeWidth="8" />
              <path d="M14 40h36" stroke="#9ca3af" strokeWidth="6" />
            </svg>
            <span className="text-2xl font-serif text-gray-500 tracking-wide">PULSE</span>
            <span className="text-[11px] text-gray-500">Dated, low-contrast, portfolio fragmented</span>
          </div>
        </div>
        {/* After */}
        <div className="rounded-xl border border-[rgb(var(--c-primary)/0.25)] bg-[rgb(var(--c-tint-50))] p-6 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[rgb(var(--c-accent-on-light))] mb-4">After</span>
          <div className="flex flex-col items-center gap-3">
            {MarkPulse}
            <span className="text-2xl font-bold tracking-tight text-[rgb(var(--c-primary))]">Pulse</span>
            <span className="text-[11px] text-gray-600">Unified system, AAA contrast, motion-ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Brand impact by the numbers --- */
function BrandImpact() {
  const stats = [
    { value: "20+", label: "Identity systems shipped" },
    { value: "6", label: "Regulated & consumer sectors" },
    { value: "AAA", label: "Contrast targets met" },
    { value: "100%", label: "Token-driven, themeable" },
  ];
  return (
    <div className="rounded-2xl border border-gray-200 bg-[rgb(var(--c-tint-50))] p-6 sm:p-8">
      <p className="text-[rgb(var(--c-accent-on-light))] text-xs font-semibold tracking-[2px] uppercase mb-2">
        Impact by the numbers
      </p>
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Brand work that scales from mark to product
      </h3>
      <dl className="grid grid-cols-2 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-gray-100 bg-white p-4">
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-3xl font-black text-[rgb(var(--c-primary))] leading-none mb-1.5">{s.value}</dd>
            <p className="text-xs text-gray-600 leading-snug">{s.label}</p>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* --- Brand engagement process --- */
function BrandProcess() {
  const steps = [
    { n: "01", t: "Discovery & audit", d: "Stakeholder interviews, competitive landscape, and an audit of existing equity so the new identity builds on what already works." },
    { n: "02", t: "Strategy & positioning", d: "Brand platform, personality, and messaging pillars that give the visual system a clear reason to exist." },
    { n: "03", t: "Identity design", d: "Core mark, wordmark, color, and type systems designed and stress-tested across real applications." },
    { n: "04", t: "System & guidelines", d: "Enforceable guidelines, design tokens, and component theming so the brand stays consistent as teams scale it." },
  ];
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
      <p className="text-[rgb(var(--c-accent-on-light))] text-xs font-semibold tracking-[2px] uppercase mb-2">
        Engagement process
      </p>
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        From blank page to an enforceable brand system
      </h3>
      <ol className="space-y-4 list-none p-0 m-0">
        {steps.map((s) => (
          <li key={s.n} className="flex gap-4">
            <span className="shrink-0 font-black text-lg text-[rgb(var(--c-primary)/0.35)] tabular-nums">{s.n}</span>
            <div>
              <p className="font-bold text-gray-900 text-sm mb-0.5">{s.t}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* --- Brand principles --- */
function BrandPrinciples() {
  const principles = [
    { t: "Systems, not one-offs", d: "Every identity ships as a reusable, tokenized system — so it scales cleanly from a single logo to an entire product surface." },
    { t: "Accessible by default", d: "Color, type, and contrast are validated to WCAG AA/AAA from the first sketch, not retrofitted after launch." },
    { t: "Built to be enforced", d: "Guidelines, clearspace rules, and design tokens make the brand hard to break and easy for teams to apply." },
    { t: "Brand meets product", d: "The same design language runs from the marketing mark to the component library, keeping brand and product in lockstep." },
  ];
  return (
    <div>
      <p className="text-[rgb(var(--c-accent-on-light))] text-xs font-semibold tracking-[2px] uppercase mb-3">
        Principles
      </p>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
        How I approach every brand engagement
      </h3>
      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,15rem),1fr))]">
        {principles.map((p, i) => (
          <div key={p.t} className="rounded-2xl border border-gray-200 bg-[rgb(var(--c-tint-50))] p-6">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[rgb(var(--c-primary))] text-white text-sm font-bold mb-3">
              {i + 1}
            </span>
            <p className="font-bold text-gray-900 text-base mb-1.5">{p.t}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{p.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandIdentitySection() {
  return (
    <section
      id="brand"
      aria-labelledby="brand-heading"
      className="bg-white border-b border-gray-100"
    >
      <div className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(3rem,6vw,6rem)]">
        <p className="text-[rgb(var(--c-accent-on-light))] text-xs font-semibold tracking-[2px] uppercase mb-3">
          Brand Identity & Visual Systems
        </p>
        <h2
          id="brand-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight"
        >
          Logos, identity systems &amp; brand guidelines built to scale
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-10 max-w-3xl leading-relaxed">
          I design complete brand identities — from the core mark and wordmark to the color and
          type systems, guidelines, and every application that follows. Below are representative
          identity systems, a brand refresh, and the guideline anatomy I ship with each engagement.
          Consumer, healthcare, fintech, and AI brands.
        </p>

        {/* Brand project grid */}
        <div className="grid gap-6 items-stretch [grid-template-columns:repeat(auto-fit,minmax(min(100%,24rem),1fr))] mb-8">
          {PROJECTS.map((p) => (
            <BrandCard key={p.id} p={p} />
          ))}
        </div>

        {/* Guidelines + refresh / impact / process — balanced two-column layout */}
        <div className="grid gap-6 lg:grid-cols-2 items-start mb-8">
          <div className="flex flex-col gap-6">
            <GuidelinesSpread />
            <BrandImpact />
          </div>
          <div className="flex flex-col gap-6">
            <RefreshShowcase />
            <BrandProcess />
          </div>
        </div>

        {/* Principles */}
        <BrandPrinciples />
      </div>
    </section>
  );
}
