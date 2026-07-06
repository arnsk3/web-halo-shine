import { useState } from "react";
type Skill = {
  name: string;
  level: number; // 1-5
  note: string;
};

type SkillGroup = {
  id: string;
  title: string;
  blurb: string;
  skills: Skill[];
};

const GROUPS: SkillGroup[] = [
  {
    id: "ai-product",
    title: "AI Product & Interaction Design",
    blurb: "Designing the surface where people and models meet — legible, controllable, trustworthy.",
    skills: [
      { name: "Human–AI interaction patterns", level: 5, note: "recommend / act / alert oversight models" },
      { name: "Explainability & confidence UX", level: 5, note: "calibrated trust, not raw percentages" },
      { name: "Human-in-the-loop & escalation", level: 5, note: "graceful degradation, safe states" },
      { name: "Agentic AI & tool-use UX", level: 4, note: "guardrails, approvals, action transparency" },
      { name: "RAG & source-grounding UX", level: 4, note: "citations, evidence linking, hallucination cues" },
      { name: "Prompt & conversation design", level: 4, note: "structured prompting, system instructions" },
    ],
  },
  {
    id: "ai-frameworks",
    title: "Governance Frameworks & Standards",
    blurb: "Translating dense AI, medical, and federal standards into enforceable design and delivery criteria.",
    skills: [
      { name: "NIST AI RMF 1.0", level: 5, note: "govern / map / measure / manage" },
      { name: "EU AI Act", level: 4, note: "risk tiers, prohibited & high-risk obligations" },
      { name: "ISO/IEC 42001 & 23894", level: 4, note: "AI management systems, risk guidance" },
      { name: "FDA / IEC 62366 usability", level: 5, note: "medical-device human-factors engineering" },
      { name: "WCAG 2.2 & Section 508", level: 5, note: "AA/AAA accessibility conformance" },
      { name: "DoDI 5000.95 & MIL-STD-1472H", level: 4, note: "Human Systems Integration standards" },
    ],
  },
  {
    id: "ai-operations",
    title: "Operational Governance & Evaluation",
    blurb: "Making compliance a built-in property — oversight tiers, audit evidence, and quality gates.",
    skills: [
      { name: "Model risk & oversight tiers", level: 5, note: "Model A/B/C governance at design intake" },
      { name: "Human-in-the-loop approval gates", level: 5, note: "override capture, full audit logging" },
      { name: "Audit-ready evidence packages", level: 5, note: "traceable proof captured as a byproduct" },
      { name: "Bias, fairness & drift monitoring", level: 4, note: "material-change alerts, fairness charts" },
      { name: "TEVV & red-team evaluation", level: 4, note: "test, evaluation, verification, validation" },
      { name: "CI/CD compliance quality gates", level: 4, note: "checks at commit, not post-deploy" },
    ],
  },
  {
    id: "ai-regulated",
    title: "Regulated-Domain Expertise",
    blurb: "Governing safety-critical AI where getting it wrong isn't an option — healthcare, federal, accessibility.",
    skills: [
      { name: "Clinical decision-support AI", level: 5, note: "1,200+ clinicians, oversight-tiered design" },
      { name: "Federal / DoD programs", level: 5, note: "HSI, national-scale behavioral-health systems" },
      { name: "Accessibility governance programs", level: 5, note: "org-wide policy across product lines" },
      { name: "Regulatory evidence & traceability", level: 5, note: "every control mapped to a standard" },
      { name: "Safe-state & failure-mode design", level: 4, note: "graceful degradation for high-stakes calls" },
      { name: "Executive & board readiness", level: 4, note: "regulator-ready governance readouts" },
    ],
  },

  {
    id: "ai-engineering",
    title: "AI Engineering & Delivery",
    blurb: "Building the front end that makes AI systems usable — accessible, performant, shipped.",
    skills: [
      { name: "AI data-viz component systems", level: 5, note: "risk gauges, model cards, audit timelines" },
      { name: "LLM integration (React + TS)", level: 4, note: "streaming, state, error handling" },
      { name: "CI/CD AI quality gates", level: 4, note: "SSA11y — checks at commit, not post-deploy" },
      { name: "Llama / GPT-class model use", level: 4, note: "pattern detection, suggested fixes" },
      { name: "Accessible AI interfaces", level: 5, note: "WCAG 2.2 AA/AAA, colorblind-safe charts" },
      { name: "Eval harness & telemetry UX", level: 4, note: "dashboards for model behavior over time" },
    ],
  },
];

function LevelDots({ level }: { level: number }) {
  return (
    <span
      className="inline-flex items-center gap-1"
      role="img"
      aria-label={`Proficiency: ${LEVEL_LABEL[level]}`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`h-1.5 w-3.5 rounded-full ${
            n <= level
              ? "bg-[rgb(var(--c-accent-light))]"
              : "bg-white/40"
          }`}
        />
      ))}
    </span>
  );
}

const LEVEL_LABEL = ["", "Aware", "Working", "Proficient", "Advanced", "Expert"];

export default function AISkillsMatrix() {
  const [active, setActive] = useState(GROUPS[0].id);
  const g = GROUPS.find((x) => x.id === active) ?? GROUPS[0];
  return (
    <section
      id="ai-skills"
      aria-labelledby="ai-skills-heading"
      className="bg-[rgb(var(--c-hero-dark))] text-white relative overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[rgb(var(--c-accent))] opacity-20 blur-3xl animate-float-slow" />
      <div className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2rem,4vw,3.5rem)] relative">
        <p className="inline-flex items-center gap-2 text-[rgb(var(--c-accent-on-dark))] text-xs font-semibold tracking-[2px] uppercase mb-3 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1.5">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--c-accent-light))] animate-pulse" />
          AI as a primary skill
        </p>
        <h2
          id="ai-skills-heading"
          className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight"
        >
          AI Skills Matrix
        </h2>
        <p className="text-white text-sm sm:text-base mb-3 max-w-2xl leading-relaxed">
          A transparent view of where I operate across the AI lifecycle — from interaction
          design and governance to engineering and evaluation. Levels reflect depth of
          hands-on delivery in regulated, safety-critical environments.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6 text-[11px] text-white">
          {LEVEL_LABEL.slice(1).map((l, i) => (
            <span key={l} className="inline-flex items-center gap-1.5">
              <LevelDots level={i + 1} /> {l}
            </span>
          ))}
        </div>

        <div role="tablist" aria-label="AI skill areas" className="flex flex-wrap gap-2 mb-5">
          {GROUPS.map((grp) => {
            const selected = grp.id === active;
            return (
              <button
                key={grp.id}
                role="tab"
                id={`tab-${grp.id}`}
                aria-selected={selected}
                aria-controls={`panel-${grp.id}`}
                onClick={() => setActive(grp.id)}
                className={`inline-flex items-center min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--c-hero-dark))] ${
                  selected
                    ? "bg-white text-[rgb(var(--c-hero-dark))]"
                    : "border border-white/25 text-white hover:bg-white/10"
                }`}
              >
                {grp.title}
              </button>
            );
          })}
        </div>

        <article
          role="tabpanel"
          id={`panel-${g.id}`}
          aria-labelledby={`tab-${g.id}`}
          className="rounded-2xl border border-white/12 bg-white/[0.04] backdrop-blur p-5 sm:p-6"
        >
          <p className="text-white text-[13px] sm:text-sm mb-5 leading-relaxed max-w-2xl">{g.blurb}</p>
          <ul className="list-none p-0 m-0 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {g.skills.map((s) => (
              <li key={s.name}>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-white leading-snug">{s.name}</span>
                  <span className="shrink-0 inline-flex items-center gap-2">
                    <LevelDots level={s.level} />
                    <span className="text-[11px] font-semibold text-[rgb(var(--c-accent-on-dark))] w-16 text-right">
                      {LEVEL_LABEL[s.level]}
                    </span>
                  </span>
                </div>
                <p className="text-white/90 text-[12px] mt-0.5 leading-relaxed">{s.note}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
