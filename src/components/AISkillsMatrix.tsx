import { useState } from "react";
import SectionIndex from "@/components/SectionIndex";
type Skill = {
  name: string;
  level: number; // 1-5
  note: string;
};

type SkillGroup = {
  id: string;
  title: string;
  short: string;
  blurb: string;
  evidence: string[];
  skills: Skill[];
};

const GROUPS: SkillGroup[] = [
  {
    id: "ai-product",
    evidence: ["Clarity — layered explainability for clinicians", "TrustLens — recommend / act / alert oversight models", "Lumen — source-grounding and citation UX"],
    title: "AI Product & Interaction Design",
    short: "Product & Interaction",
    blurb: "Designing the surface where people and models meet — legible, controllable, trustworthy.",
    skills: [
      { name: "Human–AI interaction patterns", level: 5, note: "recommend / act / alert oversight models" },
      { name: "Explainability & confidence UX", level: 5, note: "calibrated trust, not raw percentages" },
      { name: "Trust & transparency patterns", level: 5, note: "plain-language AI disclosure at the moment of use" },
      { name: "Human-in-the-loop & escalation", level: 5, note: "graceful degradation, safe states" },
      { name: "Agentic AI & tool-use UX", level: 4, note: "guardrails, approvals, action transparency" },
      { name: "RAG & source-grounding UX", level: 4, note: "citations, evidence linking, hallucination cues" },
      { name: "Prompt & conversation design", level: 4, note: "structured prompting, system instructions" },
    ],
  },
  {
    id: "ai-frameworks",
    evidence: ["SSA — Section 508 & WCAG 2.2 AAA program", "GE HealthCare — IEC 62366 human-factors work", "TrustLens — NIST AI RMF control mapping"],
    title: "Governance Frameworks & Standards",
    short: "Frameworks & Standards",
    blurb: "Translating dense AI, financial-services, medical, and federal standards into enforceable design and delivery criteria.",
    skills: [
      { name: "NIST AI RMF 1.0", level: 5, note: "govern / map / measure / manage" },
      { name: "Responsible AI program design", level: 5, note: "policy → controls → operating model → metrics" },
      { name: "AI assurance & audit readiness", level: 4, note: "control testing, readiness audits, evidence packs" },
      { name: "EU AI Act", level: 4, note: "risk classification, Annex III high-risk, GPAI, provider vs deployer duties, conformity assessment" },
      { name: "ISO/IEC 42001 & 23894", level: 4, note: "AI management systems, risk guidance" },
      { name: "Framework crosswalk design", level: 5, note: "one control set mapped to ISO 42001 ↔ NIST AI RMF ↔ EU AI Act" },
      { name: "U.S. AI policy landscape", level: 4, note: "EO 14179 & the 2025–26 federal framework, OMB M-25-21/22" },
      { name: "U.S. state AI patchwork", level: 4, note: "Colorado SB 24-205, Texas TRAIGA, NYC LL144, CA ADMT/SB 942" },
      { name: "SR 11-7 model risk management", level: 4, note: "Fed/OCC model risk, validation & inventory discipline" },
      { name: "FDA / IEC 62366 usability", level: 5, note: "medical-device human-factors engineering" },
      { name: "WCAG 2.2 & Section 508", level: 5, note: "AA/AAA accessibility conformance" },
      { name: "DoDI 5000.95 & MIL-STD-1472H", level: 4, note: "Human Systems Integration standards" },

    ],
  },
  {
    id: "ai-operations",
    evidence: ["TrustLens — Model A/B/C oversight tiers & audit evidence", "Sentinel — red-team & guardrail evaluation console", "SSA11y — CI/CD accessibility quality gates"],
    title: "Operational Governance & Evaluation",
    short: "Governance & Evaluation",
    blurb: "Making compliance a built-in property — oversight tiers, audit evidence, and quality gates.",
    skills: [
      { name: "AI risk assessment & control design", level: 5, note: "harm analysis, oversight controls, guardrails" },
      { name: "Model risk & oversight tiers", level: 5, note: "Model A/B/C governance at design intake" },
      { name: "GenAI risk controls", level: 4, note: "prompt/data controls, evaluation, monitoring" },
      { name: "Model documentation & testing", level: 4, note: "model cards, validation evidence, test practices" },
      { name: "Human-in-the-loop approval gates", level: 5, note: "override capture, full audit logging" },
      { name: "Audit-ready evidence packages", level: 5, note: "traceable proof captured as a byproduct" },
      { name: "Bias, fairness & drift monitoring", level: 4, note: "material-change alerts, fairness charts" },
      { name: "AI inventory & use-case registry", level: 5, note: "intake → risk tier → owner → lifecycle → evidence links" },
      { name: "Third-party & vendor AI risk", level: 4, note: "procurement questionnaires, model supply chain, sub-processor disclosure" },
      { name: "Shadow-AI discovery & remediation", level: 4, note: "unsanctioned tool discovery paired with a sanctioned path" },
      { name: "AI incident response & post-market monitoring", level: 4, note: "incident taxonomy, severity thresholds, EU AI Act Art. 73 reporting clocks" },
      { name: "Agentic AI governance", level: 4, note: "autonomy tiers, tool-use permissioning, HITL thresholds, agent audit trails" },
      { name: "AI literacy & change management", level: 4, note: "layered enablement satisfying EU AI Act Art. 4" },
      { name: "GRC & AI governance tooling", level: 3, note: "OneTrust, Credo AI, IBM watsonx.governance, ServiceNow, Vanta/Drata, Collibra, MLflow" },
      { name: "TEVV & red-team evaluation", level: 4, note: "test, evaluation, verification, validation" },
      { name: "CI/CD compliance quality gates", level: 4, note: "checks at commit, not post-deploy" },

    ],
  },
  {
    id: "ai-regulated",
    evidence: ["Clarity — 1,200+ clinicians on decision support", "SAMHSA — national behavioral-health program", "GE HealthCare — safety-critical device workflows"],
    title: "Regulated-Domain Expertise",
    short: "Regulated Domains",
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
    evidence: ["SSA11y — Llama-assisted remediation tooling", "TrustLens — risk gauges, model cards, audit timelines", "Lumen — streaming RAG interfaces in React + TS"],
    title: "AI Engineering & Delivery",
    short: "Engineering & Delivery",
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
  {
    id: "ai-consulting",
    evidence: ["JPMorgan Chase & Morgan Stanley — financial-services delivery", "SSA / SAMHSA — regulatory program leadership", "TrustLens — audit-ready regulator & board readouts"],
    title: "Consulting & Engagement Leadership",
    short: "Consulting & Engagement",
    blurb: "Professional-services delivery for risk, regulatory, and AI governance engagements — from assessment to operating model.",
    skills: [
      { name: "Client engagement leadership", level: 5, note: "assessment → roadmap → delivery for regulated clients" },
      { name: "AIGP — AI Governance Professional (IAPP) (in progress)", level: 4, note: "AI governance, privacy & risk credential pursuit" },
      { name: "Financial-services risk & regulatory", level: 4, note: "model risk, compliance & technology engagements" },
      { name: "Cross-functional coordination", level: 5, note: "privacy, security, risk, legal & engineering alignment" },
      { name: "AI governance program design", level: 5, note: "policy, control taxonomy, oversight operating models" },
      { name: "Executive & regulator readouts", level: 4, note: "board-ready reporting and audit evidence narratives" },
      { name: "Stakeholder workshops & adoption", level: 4, note: "facilitation that turns frameworks into practice" },
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
        <SectionIndex n="05" label="Skills Matrix" tone="dark" />
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
                className={`inline-flex items-center min-h-[44px] rounded-full px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--c-hero-dark))] ${
                  selected
                    ? "bg-white text-[rgb(var(--c-hero-dark))]"
                    : "border border-white/25 text-white hover:bg-white/10"
                }`}
              >
                {grp.short}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          tabIndex={0}
          id={`panel-${g.id}`}
          aria-labelledby={`tab-${g.id}`}
          className="rounded-2xl border border-white/12 bg-white/[0.04] backdrop-blur p-5 sm:p-6"
        >
          <p className="text-white text-[13px] sm:text-sm mb-4 leading-relaxed max-w-2xl">{g.blurb}</p>
          <div className="mb-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--c-accent-on-dark))] font-bold mb-2">
              Where it shows up
            </p>
            <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0">
              {g.evidence.map((e) => (
                <li
                  key={e}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/20 bg-white/[0.07] text-white"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
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
        </div>
      </div>
    </section>
  );
}
