import { useState } from "react";
import type { JSX } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

type Domain = {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  capabilities: string[];
  impact: { value: string; label: string }[];
  examples: { title: string; detail: string }[];
  icon: JSX.Element;
};

const DOMAINS: Domain[] = [
  {
    id: "design-for-ai",
    title: "Design for AI",
    tagline: "Trustworthy human–AI interaction where getting it wrong isn't an option.",
    summary:
      "I design the interface between people and AI for safety-critical, regulated environments — making model behavior legible, keeping a human meaningfully in control, and engineering for the failure modes most teams ignore.",
    capabilities: [
      "AI interaction models — recommend / act / alert with explicit oversight",
      "Explainability & confidence UX so clinicians can trust or challenge output",
      "Human-in-the-loop oversight, escalation & graceful-degradation patterns",
      "Failure-mode mapping and safe-state design for high-stakes decisions",
    ],
    impact: [
      { value: "1,200+", label: "clinicians on AI decision-support" },
      { value: "3", label: "AI oversight models adopted org-wide" },
      { value: "30–40%", label: "fewer remediation cycles" },
    ],
    examples: [
      {
        title: "AI Safety Framework for Clinical Decision-Support",
        detail:
          "Defined Model A/B/C oversight tiers at design intake — each with fixed UI, audit, and evaluation requirements — so AI risk is governed before a line of code ships.",
      },
      {
        title: "WCAG AI Remediation Suite",
        detail:
          "An AAA-compliant engine that turns raw violations into prioritized, AI-suggested fixes with before/after examples — detection converted into guided remediation.",
      },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="7" width="16" height="12" rx="2" />
        <path d="M9 7V4h6v3M9 13h.01M15 13h.01M2 12h2M20 12h2" />
      </svg>
    ),
  },
  {
    id: "design-engineering",
    title: "Design & Engineering",
    tagline: "From design system to production code — accessible, scalable, shipped.",
    summary:
      "I close the gap between design intent and what actually ships. I build token-driven design systems, write the front-end myself, and bake accessibility into CI/CD so quality holds at enterprise scale.",
    capabilities: [
      "Design systems & semantic design tokens with theming at runtime",
      "Production React + Tailwind front-end engineering",
      "CI/CD accessibility automation (SSA11y) — gates, not afterthoughts",
      "Component libraries that keep design and code in lockstep",
    ],
    impact: [
      { value: "AAA", label: "WCAG 2.2 themeable design system" },
      { value: "9", label: "swappable color themes, one token layer" },
      { value: "CI/CD", label: "automated a11y quality gates" },
    ],
    examples: [
      {
        title: "This portfolio",
        detail:
          "A live, fully responsive site driven by a single semantic token layer — 9 runtime themes, every one verified to AAA contrast for normal text.",
      },
      {
        title: "SSA11y accessibility pipeline",
        detail:
          "Embedded automated WCAG checks into CI/CD so regressions are caught at the pull request, not in a quarterly audit.",
      },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 18l-5-6 5-6M16 6l5 6-5 6M13 4l-2 16" />
      </svg>
    ),
  },
  {
    id: "ui-architecture",
    title: "UI Architecture & React Engineering",
    tagline: "Scalable, high-performance front-end architecture — defined, built, and led.",
    summary:
      "I define the front-end architecture for complex web apps and lead teams to ship it: reusable React component systems, predictable state management, clean API integration, and the coding standards and reviews that keep quality high as teams scale.",
    capabilities: [
      "Front-end architecture & reusable, scalable React component libraries",
      "State management with Redux & Context API for predictable data flow",
      "Build tooling — Webpack, Babel, Vite — and performance optimization",
      "RESTful API integration with backend teams; Git-based workflows",
      "Coding standards, design guidelines, code reviews & mentoring juniors",
    ],
    impact: [
      { value: "Lead", label: "UI architecture & technical direction" },
      { value: "Reusable", label: "component systems across teams" },
      { value: "Standards", label: "reviews & mentorship at scale" },
    ],
    examples: [
      {
        title: "Front-end architecture & component systems",
        detail:
          "Defined the architecture and built reusable, high-quality React + Tailwind components — guiding development teams and embedding best practices from the first commit.",
      },
      {
        title: "API integration & team enablement",
        detail:
          "Collaborated with backend teams on RESTful API integration, established coding standards and design guidelines, and ran code reviews to mentor junior developers.",
      },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 13l-2 2 2 2M12 17l2-4M16 13l2 2-2 2" />
      </svg>
    ),
  },
  {
    id: "research-strategy",
    title: "Research & Strategy",
    tagline: "Evidence-driven strategy grounded in real users and systems thinking.",
    summary:
      "I turn ambiguity into a defensible roadmap. Mixed-methods research, journey mapping, and model-based systems engineering let me trace every product decision back to a user need and a measurable outcome.",
    capabilities: [
      "Mixed-methods UX research — generative and evaluative",
      "Persona development & end-to-end journey mapping",
      "MBSE / SysML requirements traceability and verification",
      "Systems thinking that connects human, process, and technology",
    ],
    impact: [
      { value: "5", label: "validated personas + journey maps" },
      { value: "100%", label: "requirements traced to evidence" },
      { value: "Enterprise", label: "strategy adopted at scale" },
    ],
    examples: [
      {
        title: "User-group journey diagrams",
        detail:
          "Interactive journeys for each persona — tasks, pain points, and WCAG needs mapped together so research drives design priorities.",
      },
      {
        title: "Deep-research dossiers",
        detail:
          "Per-case-study research artifacts linking patterns, personas, and journeys into a single strategic narrative for stakeholders.",
      },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3M8 11h6M11 8v6" />
      </svg>
    ),
  },
  {
    id: "ai-governance",
    title: "AI Governance & Compliance",
    tagline: "Operationalizing AI safety and regulatory standards at scale.",
    summary:
      "I make compliance a built-in property, not a bolt-on. I translate dense standards — medical, federal, and accessibility — into governance models, audit-ready evidence, and enforceable design criteria.",
    capabilities: [
      "FDA / IEC 62366 usability engineering for medical devices",
      "WCAG 2.2 / Section 508 accessibility governance programs",
      "DoDI 5000.95 Human Systems Integration & MIL-STD-1472H",
      "AI risk, audit, and evaluation frameworks for regulated AI",
    ],
    impact: [
      { value: "Built-in", label: "compliance, not bolted-on" },
      { value: "Audit-ready", label: "traceable evidence on demand" },
      { value: "Org-wide", label: "governance policy adopted" },
    ],
    examples: [
      {
        title: "AI governance model",
        detail:
          "Codified AI oversight tiers with fixed audit and evaluation requirements — turning 'is this AI safe?' into a checklist teams can pass.",
      },
      {
        title: "Enterprise accessibility program",
        detail:
          "Stood up organizational policy, CI/CD automation, and design-system integration so accessibility scales without heroics.",
      },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l8 3v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

function DomainModalBody({ domain }: { domain: Domain }) {
  return (
    <DialogContent className="max-w-xl p-0 gap-0 overflow-hidden border border-[rgb(var(--c-primary)/0.2)] bg-white">
      <div className="flex items-start gap-3 p-5 border-b border-[rgb(var(--c-primary)/0.1)] bg-[rgb(var(--c-tint-50))]">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--c-tint-100))] text-[rgb(var(--c-accent-on-light))]"
        >
          <span className="h-5 w-5 block">{domain.icon}</span>
        </span>
        <DialogHeader className="text-left space-y-1">
          <DialogTitle className="text-lg font-bold text-gray-900 tracking-tight leading-snug">
            {domain.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-700 leading-snug">
            {domain.tagline}
          </DialogDescription>
        </DialogHeader>
      </div>

      <div className="p-5 space-y-4">
        <p className="text-sm text-gray-700 leading-snug">{domain.summary}</p>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-700 mb-1.5">
            What I bring
          </p>
          <ul className="list-none p-0 m-0 space-y-1">
            {domain.capabilities.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--c-accent))]"
                />
                <span className="leading-snug">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-700 mb-1.5">
            Live examples & impact
          </p>
          <ul className="list-none p-0 m-0 space-y-2">
            {domain.examples.map((ex) => (
              <li
                key={ex.title}
                className="rounded-md border-l-2 border-[rgb(var(--c-accent))] bg-[rgb(var(--c-tint-50))] pl-3 py-1.5 pr-3"
              >
                <p className="font-semibold text-gray-900 text-sm leading-snug">{ex.title}</p>
                <p className="text-gray-700 text-[13px] mt-0.5 leading-snug">{ex.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-2">
          {domain.impact.map((m) => (
            <div
              key={m.label}
              className="rounded-md bg-[rgb(var(--c-tint-50))] border border-[rgb(var(--c-primary)/0.1)] px-2 py-2 text-center"
            >
              <div className="text-sm font-extrabold text-[rgb(var(--c-accent-on-light))] leading-tight">
                {m.value}
              </div>
              <div className="text-[11px] text-gray-700 mt-0 leading-tight">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </DialogContent>
  );
}

function ExpertiseCard({ d, isLast, trigger }: { d: Domain; isLast: boolean; trigger: React.ReactNode }) {
  return (
    <article
      aria-labelledby={`${d.id}-title`}
      className={`flex h-full flex-col rounded-xl border bg-white border-[rgb(var(--c-primary)/0.3)] shadow-md ${isLast ? "md:col-span-2 lg:col-span-1" : ""}`}
    >
      <div className="flex w-full items-start gap-3 p-4 text-left">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--c-tint-100))] text-[rgb(var(--c-accent-on-light))]"
        >
          <span className="h-5 w-5 block">{d.icon}</span>
        </span>
        <div className="flex-1">
          <h3 id={`${d.id}-title`} className="font-bold text-gray-900 text-base leading-snug m-0">
            {d.title}
          </h3>
          <p className="text-gray-700 text-sm mt-0.5 leading-snug">{d.tagline}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4">
        <div className="grid grid-cols-3 gap-1.5 mb-3">
          {d.impact.map((m) => (
            <div
              key={m.label}
              className="rounded-md bg-[rgb(var(--c-tint-50))] border border-[rgb(var(--c-primary)/0.1)] px-1.5 py-2 text-center"
            >
              <div className="text-sm font-extrabold text-[rgb(var(--c-accent-on-light))] leading-tight">
                {m.value}
              </div>
              <div className="text-[11px] text-gray-700 mt-0 leading-tight">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-auto self-start">{trigger}</div>
      </div>
    </article>
  );
}

export default function ExpertiseSection() {
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = (domain: Domain) => {
    setSelectedDomain(domain);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    // clear after animation
    setTimeout(() => setSelectedDomain(null), 300);
  };

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="bg-[rgb(var(--c-tint-50))] border-y border-[rgb(var(--c-primary)/0.1)]"
    >
      <div className="w-full max-w-[1600px] mx-auto px-[clamp(1.25rem,4vw,4rem)] pt-6 pb-8">
        <p className="text-[rgb(var(--c-accent-on-light))] text-xs font-semibold tracking-[2px] uppercase mb-2">
          Domain Expertise
        </p>
        <h2
          id="expertise-heading"
          className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight"
        >
          Four disciplines, one outcome: safe, compliant, human-centered AI
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-6 max-w-2xl leading-snug">
          I work across the full arc of building responsible AI products — from the research
          that frames the problem, to the design and code that ships, to the governance that
          keeps it safe and compliant. Click any discipline for capabilities and live impact.
        </p>

        <div className="grid gap-4 items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {DOMAINS.map((d, i) => (
            <ExpertiseCard key={d.id} d={d} isLast={i === DOMAINS.length - 1} onOpen={() => handleOpen(d)} />
          ))}
        </div>
      </div>

      <DomainModal domain={selectedDomain} open={modalOpen} onClose={handleClose} />
    </section>
  );
}
