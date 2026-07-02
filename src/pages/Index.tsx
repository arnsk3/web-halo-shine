import { useState, useEffect, useMemo, useRef, ReactNode } from "react";
import {
  ShieldCheck,
  Network,
  Accessibility,
  Shapes,
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  Linkedin,
  Phone,
  X,
  Menu,
} from "lucide-react";
import heroVisual from "@/assets/hero.jpg";
import caseWcagtool from "@/assets/case-wcagtool.jpg";
import caseGe from "@/assets/case-ge.jpg";
import caseSsa from "@/assets/case-ssa.jpg";
import caseBestbuy from "@/assets/case-bestbuy.jpg";
import caseSamhsa from "@/assets/case-samhsa.jpg";
import caseTrustlens from "@/assets/case-trustlens.jpg";
import caseClinicalAi from "@/assets/case-clinicalai.jpg";
import caseSentinel from "@/assets/case-sentinel.jpg";
import caseLumen from "@/assets/case-lumen.jpg";

/* ─────────────────────────────────────────────
   SENTHIL NAGAPPAN — Design & AI Leadership
   Executive single-scroll portfolio.
   ───────────────────────────────────────────── */

const RESUME_URL = "/Senthil_Nagappan_Resume.pdf";
const EMAIL = "arnsk3@gmail.com";
const PHONE = "+1-571-403-0835";
const LINKEDIN = "https://www.linkedin.com/in/senthil-nagappan";

type PillarKey = "ai" | "hsi" | "access" | "brand";

const PILLARS: {
  key: PillarKey;
  filter: string;
  name: string;
  line: string;
  Icon: typeof ShieldCheck;
  cssVar: string;
}[] = [
  {
    key: "ai",
    filter: "AI Safety",
    name: "AI Safety & Experience Design",
    line: "Trustworthy, human-in-the-loop AI — governance, transparency, and calibrated trust.",
    Icon: ShieldCheck,
    cssVar: "--p-ai",
  },
  {
    key: "hsi",
    filter: "HSI",
    name: "Human Systems Integration & Human Factors",
    line: "Designing the human into the system — from clinical decisions to national programs.",
    Icon: Network,
    cssVar: "--p-hsi",
  },
  {
    key: "access",
    filter: "Accessibility",
    name: "Accessibility Leadership",
    line: "WCAG 2.2 AAA practice, tooling, and org-wide accessibility as a discipline.",
    Icon: Accessibility,
    cssVar: "--p-access",
  },
  {
    key: "brand",
    filter: "Brand",
    name: "Brand & Design Systems",
    line: "Identity systems, consumer brand, and design systems that scale across teams.",
    Icon: Shapes,
    cssVar: "--p-brand",
  },
];

const pillarOf = (k: PillarKey) => PILLARS.find((p) => p.key === k)!;

type CaseStudy = {
  id: string;
  pillar: PillarKey;
  featured?: boolean;
  title: string;
  org: string;
  role: string;
  timeline: string;
  outcome: string;
  image: string;
  challenge: string;
  approach: string;
  work: string[];
  results: string[];
};

const CASES: CaseStudy[] = [
  {
    id: "bestbuy",
    pillar: "brand",
    featured: true,
    title: "Cohesive Consumer Brand for 1M+ Health Users",
    org: "Best Buy Health (Lively · Jitterbug)",
    role: "Senior Visual & Experience Designer",
    timeline: "2021 – 2022",
    outcome: "Unified brand across 5 product lines and every consumer touchpoint.",
    image: caseBestbuy,
    challenge:
      "Five product lines under Lively and Jitterbug had drifted into inconsistent visual language across web, mobile, packaging, and support — eroding trust for an older, safety-focused audience.",
    approach:
      "Established a single consumer brand expression: a coherent color and type system, accessible-first UI patterns, and mobile-first flows tuned for low-vision and low-dexterity users.",
    work: [
      "Brand-consistent component and layout system spanning web and native.",
      "Mobile-first templates engineered for readability and large tap targets.",
      "On-brand marketing, packaging, and in-product surfaces aligned to one identity.",
    ],
    results: [
      "1M+ consumers engaged across 5 cohesive product lines.",
      "Consistent, accessible brand expression from packaging to product.",
      "Reduced design debt through a shared, reusable brand kit.",
    ],
  },
  {
    id: "ssa",
    pillar: "brand",
    title: "A Design System That Unified 50M+ Experiences",
    org: "Leidos / Social Security Administration",
    role: "Lead Visual & Design Systems Designer",
    timeline: "2022 – 2025",
    outcome: "Data-driven system unified 15+ touchpoints and saved $1.5M+ annually.",
    image: caseSsa,
    challenge:
      "15+ digital touchpoints serving 50M+ people had fragmented visuals and duplicated build effort, driving cost and inconsistent citizen experience.",
    approach:
      "Led a data-driven design system: analyzed behavioral data to prioritize patterns, then codified tokens, components, and governance for a system-wide redesign.",
    work: [
      "Shared token library and component set adopted across teams.",
      "Behavioral-data analysis informing hierarchy and flow decisions.",
      "Governance model keeping the brand consistent at scale.",
    ],
    results: [
      "50M+ user experiences unified under one system.",
      "$1.5M+ in annual savings from reduced duplication.",
      "Measurable engagement gains across touchpoints.",
    ],
  },
  {
    id: "ge",
    pillar: "access",
    title: "Scaling an Accessible Design System",
    org: "GE HealthCare",
    role: "Senior UI/UX & Visual Designer",
    timeline: "2025 – Present",
    outcome: "Enabled multiple teams to ship consistent, accessible, on-brand products.",
    image: caseGe,
    challenge:
      "Multiple product teams needed to ship consistent, on-brand, and accessible digital experiences without a shared foundation or accessibility baseline.",
    approach:
      "Advocated for and evolved the design system with accessibility built into tokens and components — pairing shared UI with high-fidelity, WCAG-aligned patterns.",
    work: [
      "Accessible-by-default components and design tokens.",
      "High-fidelity patterns with documented a11y behavior.",
      "Best-practice guidance adopted across product teams.",
    ],
    results: [
      "Consistent, accessible experiences across products.",
      "Faster delivery through reusable, compliant components.",
      "Accessibility embedded into the design workflow.",
    ],
  },
  {
    id: "trustlens",
    pillar: "ai",
    title: "TrustLens — AI Governance & Model-Risk Command Center",
    org: "BrainPulse (In-House Product)",
    role: "AI Product Owner · Governance Architect · Frontend Engineer",
    timeline: "2024 – Present",
    outcome: "Turned abstract AI regulation into an auditable single pane of glass.",
    image: caseTrustlens,
    challenge:
      "Chief AI Officers lacked a unified view of model risk, fairness, drift, and human-oversight decisions — making NIST AI RMF and EU AI Act obligations hard to evidence.",
    approach:
      "Designed and built a governance platform that maps regulatory controls to live monitoring, with model cards, drift/bias monitors, and governed review workflows.",
    work: [
      "Portfolio risk overview with model provenance and cards.",
      "Drift and bias monitors triggering governed reviews.",
      "One-click audit evidence export mapped to controls.",
    ],
    results: [
      "Single pane of glass for AI risk and oversight.",
      "Audit packages assembled as exports, not fire drills.",
      "Regulation translated into concrete, trackable controls.",
    ],
  },
  {
    id: "sentinel",
    pillar: "ai",
    title: "Sentinel — Guardrails & Red-Team Console for Agentic AI",
    org: "BrainPulse (In-House Product)",
    role: "AI Product Designer · Builder",
    timeline: "2025 – Present",
    outcome: "Made agent tool-use, approvals, and failure modes visible and governable.",
    image: caseSentinel,
    challenge:
      "Teams deploying autonomous agents needed to take real actions without losing human control — while defending against prompt-injection and unsafe tool-use.",
    approach:
      "Built a control console surfacing a live action ledger, high-impact approval gates, and a red-team scenario workspace for continuous evaluation.",
    work: [
      "Live action ledger for every tool-call and decision.",
      "Human-approval gates for high-impact actions.",
      "Red-team scenarios that contain prompt-injection attempts.",
    ],
    results: [
      "Prompt-injection attempts caught and contained.",
      "High-impact actions paused for human approval.",
      "Confident agent deployment with human oversight intact.",
    ],
  },
  {
    id: "lumen",
    pillar: "ai",
    title: "Lumen — Source-Grounding & Transparency UX for Knowledge AI",
    org: "BrainPulse (In-House Product)",
    role: "AI Interaction Designer · Builder",
    timeline: "2025 – Present",
    outcome: "Connected every AI answer to its source evidence for high-stakes work.",
    image: caseLumen,
    challenge:
      "Enterprise knowledge AI produced answers users couldn't verify or trust — risky in high-stakes, policy-driven work.",
    approach:
      "Designed the trust layer for retrieval-augmented generation: grounded answers, an inspectable source path, and honest abstention when evidence is weak.",
    work: [
      "Grounded answers with inline, traceable citations.",
      "Source inspector to verify and challenge each claim.",
      "Insufficient-evidence state that refuses to fabricate.",
    ],
    results: [
      "Policy questions answered with traceable citations.",
      "Lumen abstains rather than hallucinate on weak evidence.",
      "Users can verify, challenge, and rely on knowledge AI.",
    ],
  },
  {
    id: "clinicalai",
    pillar: "hsi",
    title: "Clarity — Explainable Clinical AI Decision-Support",
    org: "BrainPulse (In-House Product)",
    role: "AI Product Designer · Human-AI Interaction Architect",
    timeline: "2024 – Present",
    outcome: "Human-in-the-loop decision support where clinicians stay in control.",
    image: caseClinicalAi,
    challenge:
      "In clinical decision-support, getting it wrong isn't an option — clinicians need to understand, trust, and override AI, not defer to it blindly.",
    approach:
      "Applied human-factors and trust-calibration principles: surface recommendations with confidence and evidence, and make override a first-class, captured path.",
    work: [
      "Patient summary with an integrated, explainable AI panel.",
      "Confidence and rationale designed to calibrate trust.",
      "Override capture that keeps humans accountable and in-loop.",
    ],
    results: [
      "High-confidence recommendations clinicians can verify fast.",
      "Uncertain cases flagged, with overrides captured for learning.",
      "AI positioned as support, not authority.",
    ],
  },
  {
    id: "samhsa",
    pillar: "hsi",
    title: "$130M Federal Behavioral Health Program",
    org: "Eagle Technologies / HHS / SAMHSA",
    role: "Sr. UX & Accessibility Program Manager",
    timeline: "2014 – 2021",
    outcome: "Directed a national program shaping behavioral health systems for 7 years.",
    image: caseSamhsa,
    challenge:
      "A national-scale behavioral health portfolio needed cohesive human-centered systems, governance, and executive alignment across many stakeholders over years.",
    approach:
      "Directed the portfolio end-to-end — building teams, defining governance, and integrating research, accessibility, and human factors into funding and design decisions.",
    work: [
      "Team building and multi-year program governance.",
      "Human-centered research informing national systems.",
      "Executive influence on portfolio funding decisions.",
    ],
    results: [
      "$130M portfolio directed across 7 years.",
      "Behavioral health systems shaped at national scale.",
      "Accessibility and human factors embedded in delivery.",
    ],
  },
  {
    id: "wcagtool",
    pillar: "access",
    title: "WCAG AI Remediation Suite — AAA Engine",
    org: "BrainPulse (In-House Product)",
    role: "Product Owner · Accessibility Architect · Builder",
    timeline: "2025 – Present",
    outcome: "AAA-compliant tool that scans, explains, and fixes accessibility issues.",
    image: caseWcagtool,
    challenge:
      "Teams needed a fast, credible way to find and fix accessibility issues against WCAG 2.2 — with fixes, not just findings.",
    approach:
      "Designed and built a standalone, AAA-compliant tool that scans a URL or pasted HTML against 28 WCAG 2.2 criteria and returns visual code fixes and a roadmap.",
    work: [
      "28-criteria WCAG 2.2 scanning engine.",
      "AI remediation suggestions with before/after code.",
      "Prioritized roadmap and exportable evidence.",
    ],
    results: [
      "Actionable fixes, not just violation lists.",
      "AAA-compliant experience, practicing what it preaches.",
      "Faster, more credible remediation for teams.",
    ],
  },
];

const CERTS = [
  { code: "CUA", name: "Certified Usability Analyst" },
  { code: "CPACC", name: "Certified Professional in Accessibility Core Competencies" },
  { code: "WAS", name: "Web Accessibility Specialist" },
];

/* ── Small building blocks ─────────────────── */

function PillarTag({ k, className = "" }: { k: PillarKey; className?: string }) {
  const p = pillarOf(k);
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white ${className}`}
      style={{ backgroundColor: `hsl(var(${p.cssVar}))` }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-white/90" aria-hidden="true" />
      {p.filter}
    </span>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
  download,
  external,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  download?: boolean;
  external?: boolean;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors min-h-11 focus-visible:outline-none";
  const styles =
    variant === "primary"
      ? "bg-brand text-brand-foreground hover:bg-brand/90"
      : "border-2 border-ink/15 text-ink hover:border-ink/40 bg-transparent";
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${base} ${styles}`}>
        {children}
      </button>
    );
  }
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(download ? { download: "" } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/* ── Navigation ────────────────────────────── */

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className="group inline-flex items-center gap-2.5"
      aria-label="Senthil Nagappan — home"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand font-display text-sm font-semibold text-brand-foreground">
        SN
      </span>
      <span className="font-display text-base font-semibold text-ink">
        Senthil Nagappan
      </span>
    </a>
  );
}

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#pillars", label: "Capabilities" },
  { href: "#system", label: "Design System" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        solid ? "border-b border-border bg-background/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="pp-container flex h-16 items-center justify-between" aria-label="Primary">
        <Wordmark onClick={() => setOpen(false)} />
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-1 transition-colors hover:text-ink"
              style={{ color: "hsl(var(--gray-1))" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            download=""
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
          >
            <Download className="h-4 w-4" aria-hidden="true" /> Résumé
          </a>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="pp-container flex flex-col gap-1 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href={RESUME_URL}
              download=""
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ── Hero ──────────────────────────────────── */

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center pt-16">
      <div className="pp-container grid w-full items-center gap-10 py-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-6">
          <p className="type-eyebrow text-gray-1" style={{ color: "hsl(var(--gray-1))" }}>
            Senthil Nagappan
          </p>
          <h1 className="type-hero mt-4 text-ink">
            Design &amp; AI Leadership
          </h1>
          <p className="type-lead mt-6 max-w-xl text-gray-1" style={{ color: "hsl(var(--gray-1))" }}>
            AI Safety · Human Systems Integration · Accessibility · Brand — four
            co-equal capabilities, one disciplined design practice.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={RESUME_URL} download>
              <Download className="h-4 w-4" aria-hidden="true" /> Résumé
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              <Mail className="h-4 w-4" aria-hidden="true" /> Contact
            </ButtonLink>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="overflow-hidden rounded-2xl border border-border shadow-[0_30px_80px_-40px_hsl(var(--brand)/0.45)]">
            <img
              src={heroVisual}
              alt="Abstract geometric composition in indigo and coral representing systems, safety, and structure"
              width={1408}
              height={1088}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Positioning ───────────────────────────── */

function Positioning() {
  return (
    <section className="pp-section border-t border-border">
      <div className="pp-container">
        <p className="type-eyebrow text-brand">The through-line</p>
        <p className="type-h2 mt-6 max-w-4xl text-ink">
          I design systems where humans and AI can be trusted together — pairing
          rigorous human factors and accessibility with the visual discipline of
          brand and design systems, so complex, high-stakes products stay safe,
          usable, and unmistakably coherent.
        </p>
      </div>
    </section>
  );
}

/* ── Pillars ───────────────────────────────── */

function Pillars({ onFilter }: { onFilter: (k: PillarKey) => void }) {
  return (
    <section id="pillars" className="pp-section border-t border-border scroll-mt-16">
      <div className="pp-container">
        <p className="type-eyebrow text-brand">Capabilities</p>
        <h2 className="type-h2 mt-4 text-ink">Four co-equal pillars</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div
              key={p.key}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: `hsl(var(${p.cssVar}))` }}
              >
                <p.Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="type-h3 mt-5 text-ink">{p.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-1" style={{ color: "hsl(var(--gray-1))" }}>
                {p.line}
              </p>
              <button
                type="button"
                onClick={() => onFilter(p.key)}
                className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand hover:gap-2.5 transition-all"
              >
                View {p.filter} work <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Selected Work ─────────────────────────── */

const FILTERS: { key: "all" | PillarKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI Safety" },
  { key: "hsi", label: "HSI" },
  { key: "access", label: "Accessibility" },
  { key: "brand", label: "Brand" },
];

function CaseCard({ c, onOpen }: { c: CaseStudy; onOpen: (c: CaseStudy) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(c)}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-shadow hover:shadow-[0_24px_60px_-32px_hsl(var(--ink)/0.35)] ${
        c.featured ? "sm:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${c.featured ? "aspect-[16/7]" : "aspect-[16/10]"}`}>
        <img
          src={c.image}
          alt={`${c.title} — case study cover`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4">
          <PillarTag k={c.pillar} />
        </span>
        {c.featured && (
          <span className="absolute right-4 top-4 rounded-full bg-ink/85 px-3 py-1 text-xs font-semibold text-white">
            Featured Brand
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className={`text-ink ${c.featured ? "type-h3" : "font-display text-lg font-semibold leading-snug"}`}>
          {c.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-gray-1" style={{ color: "hsl(var(--gray-1))" }}>
          {c.role} · {c.org}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/80">{c.outcome}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          View case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </button>
  );
}

function Work({
  filter,
  setFilter,
  onOpen,
}: {
  filter: "all" | PillarKey;
  setFilter: (f: "all" | PillarKey) => void;
  onOpen: (c: CaseStudy) => void;
}) {
  const sorted = useMemo(() => {
    const list = filter === "all" ? CASES : CASES.filter((c) => c.pillar === filter);
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [filter]);

  return (
    <section id="work" className="pp-section border-t border-border scroll-mt-16">
      <div className="pp-container">
        <p className="type-eyebrow text-brand">Selected work</p>
        <h2 className="type-h2 mt-4 text-ink">Case studies</h2>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter case studies by capability">
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.key)}
                className={`min-h-11 rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-border bg-card text-ink hover:border-ink/40"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((c) => (
            <CaseCard key={c.id} c={c} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Case study detail (modal, single template) ── */

function CaseModal({ c, onClose }: { c: CaseStudy | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!c) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [c, onClose]);
  if (!c) return null;
  const p = pillarOf(c.pillar);
  return (
    <div
      className="fixed inset-0 z-[60] overflow-y-auto bg-ink/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-title"
      onClick={onClose}
    >
      <div className="min-h-full px-4 py-8 md:py-16">
        <div
          className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl bg-background shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Cover */}
          <div className="relative aspect-[16/8] overflow-hidden">
            <img src={c.image} alt={`${c.title} — cover`} className="h-full w-full object-cover" />
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background text-ink shadow-md hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </button>
            <span className="absolute left-4 top-4">
              <PillarTag k={c.pillar} />
            </span>
          </div>

          <div className="px-6 py-8 md:px-10 md:py-10">
            <h2 id="case-title" className="type-h2 text-ink">
              {c.title}
            </h2>
            <dl className="mt-5 grid grid-cols-1 gap-4 border-y border-border py-5 sm:grid-cols-3">
              {[
                ["Role", c.role],
                ["Organization", c.org],
                ["Timeline", c.timeline],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="type-eyebrow text-gray-1" style={{ color: "hsl(var(--gray-1))" }}>
                    {k}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>

            <Block title="Challenge">{c.challenge}</Block>
            <Block title="Approach">{c.approach}</Block>

            <div className="mt-8">
              <h3 className="type-h3 text-ink">The Work</h3>
              <ul className="mt-4 space-y-3">
                {c.work.map((w) => (
                  <li key={w} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: `hsl(var(${p.cssVar}))` }}
                      aria-hidden="true"
                    />
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="mt-8 rounded-2xl border border-border p-6"
              style={{ backgroundColor: `hsl(var(${p.cssVar}) / 0.06)` }}
            >
              <h3 className="type-h3 text-ink">Outcome</h3>
              <ul className="mt-4 space-y-3">
                {c.results.map((r) => (
                  <li key={r} className="flex gap-3 text-sm font-medium leading-relaxed text-ink">
                    <ArrowRight
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: `hsl(var(${p.cssVar}))` }}
                      aria-hidden="true"
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex justify-end">
              <ButtonLink variant="outline" onClick={onClose}>
                Close
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-8">
      <h3 className="type-h3 text-ink">{title}</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/85">{children}</p>
    </div>
  );
}

/* ── Design System section ─────────────────── */

const TYPE_SCALE = [
  { size: "64", role: "Display", cls: "type-hero" },
  { size: "40", role: "Section", cls: "type-h2" },
  { size: "28", role: "Subhead", cls: "type-h3" },
  { size: "20", role: "Lead", cls: "type-lead font-medium" },
  { size: "16", role: "Body", cls: "text-base" },
];

function DesignSystem() {
  const swatches: { name: string; var: string; hint: string }[] = [
    { name: "Brand", var: "--brand", hint: "Indigo — primary" },
    { name: "Accent", var: "--coral", hint: "Coral — accent" },
    { name: "Ink", var: "--ink", hint: "Near-black" },
    { name: "Gray 1", var: "--gray-1", hint: "Body / muted" },
    { name: "Gray 2", var: "--gray-2", hint: "Lines / hints" },
    { name: "Gray 3", var: "--gray-3", hint: "Surfaces" },
  ];
  return (
    <section id="system" className="pp-section border-t border-border scroll-mt-16">
      <div className="pp-container">
        <p className="type-eyebrow text-brand">Proof of craft</p>
        <h2 className="type-h2 mt-4 text-ink">The design system</h2>
        <p className="type-lead mt-4 max-w-2xl text-gray-1" style={{ color: "hsl(var(--gray-1))" }}>
          One primary, one accent, ink and three grays. Fraunces display with
          Inter body on a 12-column, 1200px grid and an 8px spacing system.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Palette */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="type-h3 text-ink">Palette</h3>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {swatches.map((s) => (
                <div key={s.name}>
                  <div
                    className="h-16 w-full rounded-xl border border-border"
                    style={{ backgroundColor: `hsl(var(${s.var}))` }}
                  />
                  <p className="mt-2 text-sm font-semibold text-ink">{s.name}</p>
                  <p className="text-xs text-gray-1" style={{ color: "hsl(var(--gray-1))" }}>
                    {s.hint}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Type scale */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="type-h3 text-ink">Type scale</h3>
            <ul className="mt-5 space-y-3">
              {TYPE_SCALE.map((t) => (
                <li key={t.size} className="flex items-baseline gap-4 border-b border-border pb-3 last:border-0">
                  <span className="w-12 shrink-0 text-xs font-semibold text-gray-1" style={{ color: "hsl(var(--gray-1))" }}>
                    {t.size}px
                  </span>
                  <span className={`${t.cls} truncate text-ink`}>{t.role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Grid */}
          <div className="rounded-2xl border border-border bg-card p-6 lg:col-span-2">
            <h3 className="type-h3 text-ink">12-column grid · 8px spacing</h3>
            <div className="mt-5 grid grid-cols-12 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="h-14 rounded-md"
                  style={{ backgroundColor: `hsl(var(--brand) / ${0.12 + (i % 3) * 0.06})` }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── About ─────────────────────────────────── */

function About() {
  return (
    <section id="about" className="pp-section border-t border-border scroll-mt-16">
      <div className="pp-container grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="type-eyebrow text-brand">About</p>
          <h2 className="type-h2 mt-4 text-ink">Senthil Nagappan</h2>
          <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-ink/85">
            <p>
              I lead at the intersection of design and AI — building products and
              systems for healthcare, federal, and regulated environments where
              safety, accessibility, and trust are non-negotiable.
            </p>
            <p>
              Over more than a decade I've directed a $130M federal behavioral
              health portfolio, unified design systems serving 50M+ people, shaped
              consumer health brands for 1M+ users, and built in-house AI products
              for governance, clinical decision-support, and agent safety.
            </p>
            <p>
              My practice holds four capabilities as co-equal: AI safety &
              experience design, human systems integration & human factors,
              accessibility leadership, and brand & design systems.
            </p>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="type-h3 text-ink">Certifications</h3>
            <ul className="mt-5 space-y-4">
              {CERTS.map((cert) => (
                <li key={cert.code} className="flex items-start gap-4">
                  <span className="flex h-11 min-w-11 items-center justify-center rounded-lg bg-brand px-2 text-sm font-semibold text-brand-foreground">
                    {cert.code}
                  </span>
                  <span className="pt-1 text-sm text-ink/85">{cert.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Contact ───────────────────────────────── */

function Contact() {
  return (
    <section id="contact" className="pp-section border-t border-border scroll-mt-16">
      <div className="pp-container">
        <div className="rounded-3xl bg-ink px-6 py-14 text-center md:px-16 md:py-20">
          <p className="type-eyebrow text-white/60">Contact</p>
          <h2 className="type-h2 mx-auto mt-4 max-w-2xl text-white">
            Let's build systems people can trust.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-white/90"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> {EMAIL}
            </a>
            <a
              href={RESUME_URL}
              download=""
              className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/70"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download Résumé
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4" aria-hidden="true" /> {PHONE}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ────────────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="pp-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Wordmark />
        <p className="text-sm text-gray-1" style={{ color: "hsl(var(--gray-1))" }}>
          © {new Date().getFullYear()} Senthil Nagappan · Design &amp; AI Leadership
        </p>
      </div>
    </footer>
  );
}

/* ── Page ──────────────────────────────────── */

export default function Index() {
  const [filter, setFilter] = useState<"all" | PillarKey>("all");
  const [active, setActive] = useState<CaseStudy | null>(null);

  const applyFilter = (k: PillarKey) => {
    setFilter(k);
    requestAnimationFrame(() => {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <div id="top" className="min-h-screen bg-background font-sans text-ink antialiased">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-foreground"
      >
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <Positioning />
        <Pillars onFilter={applyFilter} />
        <Work filter={filter} setFilter={setFilter} onOpen={setActive} />
        <DesignSystem />
        <About />
        <Contact />
      </main>
      <Footer />
      <CaseModal c={active} onClose={() => setActive(null)} />
    </div>
  );
}
