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
    id: "ai-governance",
    title: "AI Governance, Risk & Evaluation",
    blurb: "Turning dense standards into governance models, audit-ready evidence, and enforceable criteria.",
    skills: [
      { name: "NIST AI RMF", level: 5, note: "map / measure / manage / govern" },
      { name: "EU AI Act & ISO/IEC 42001", level: 4, note: "risk tiers, conformity workflows" },
      { name: "Model risk & oversight tiers", level: 5, note: "Model A/B/C governance at design intake" },
      { name: "Bias, fairness & drift monitoring", level: 4, note: "real-time alerts, fairness charts" },
      { name: "TEVV & red-team evaluation", level: 4, note: "test, evaluation, verification, validation" },
      { name: "Audit-ready evidence packages", level: 5, note: "traceable proof on demand" },
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
    <span className="inline-flex items-center gap-1" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`h-1.5 w-3.5 rounded-full ${
            n <= level
              ? "bg-[rgb(var(--c-accent))]"
              : "bg-[rgb(var(--c-primary)/0.15)]"
          }`}
        />
      ))}
    </span>
  );
}

const LEVEL_LABEL = ["", "Aware", "Working", "Proficient", "Advanced", "Expert"];

export default function AISkillsMatrix() {
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
        <p className="text-white/80 text-sm sm:text-base mb-3 max-w-2xl leading-relaxed">
          A transparent view of where I operate across the AI lifecycle — from interaction
          design and governance to engineering and evaluation. Levels reflect depth of
          hands-on delivery in regulated, safety-critical environments.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-10 text-[11px] text-white/70">
          {LEVEL_LABEL.slice(1).map((l, i) => (
            <span key={l} className="inline-flex items-center gap-1.5">
              <LevelDots level={i + 1} /> {l}
            </span>
          ))}
        </div>

        <div className="grid gap-5 items-stretch [grid-template-columns:repeat(auto-fit,minmax(min(100%,22rem),1fr))]">
          {GROUPS.map((g, i) => {
            const isLast = i === GROUPS.length - 1;
            return (
            <article
              key={g.id}
              aria-labelledby={`${g.id}-title`}
              className={`flex h-full flex-col rounded-2xl border border-white/12 bg-white/[0.04] backdrop-blur p-5 ${isLast ? "md:col-span-2" : ""}`}
            >
              <h3 id={`${g.id}-title`} className="font-bold text-white text-lg leading-snug">
                {g.title}
              </h3>
              <p className="text-white/70 text-[13px] mt-1 mb-4 leading-relaxed">{g.blurb}</p>
              <ul className="list-none p-0 m-0 space-y-3 mt-auto">
                {g.skills.map((s) => (
                  <li key={s.name}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-white leading-snug">{s.name}</span>
                      <span className="shrink-0">
                        <LevelDots level={s.level} />
                        <span className="sr-only">{LEVEL_LABEL[s.level]}</span>
                      </span>
                    </div>
                    <p className="text-white/60 text-[12px] mt-0.5 leading-relaxed">{s.note}</p>
                  </li>
                ))}
              </ul>
            </article>
          );})}
        </div>
      </div>
    </section>
  );
}
