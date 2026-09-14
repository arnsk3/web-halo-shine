import SectionIndex from "@/components/SectionIndex";

const GROUPS = [
  {
    h: "AI systems",
    items: [
      "LLM application design & task scoping",
      "RAG and retrieval over enterprise corpora",
      "Prompt/rule guardrails & output filtering",
      "Golden-set evaluation & baselines",
      "Confidence thresholds & false-positive budgets",
    ],
  },
  {
    h: "Pipeline & integration",
    items: [
      "CI/CD gates and pre-merge enforcement",
      "Ticketing, queue and review-workflow APIs",
      "Design-system component writes",
      "SSO and role-scoped access",
      "Legacy system and data-quality triage",
    ],
  },
  {
    h: "Human-in-the-loop systems",
    items: [
      "Oversight tiers: recommend / act / alert",
      "Point-of-use explanation & disclosure",
      "Override capture and escalation routing",
      "Reviewer workload and alert-fatigue control",
      "Situational constraints: gloves, glare, noise, bandwidth",
    ],
  },
  {
    h: "Observability & governance",
    items: [
      "Override, dismissal and correction telemetry",
      "Drift and degradation alerting",
      "Data lineage and audit evidence trails",
      "NIST AI RMF · ISO/IEC 42001 · EU AI Act crosswalk",
      "AI inventory, third-party and shadow-AI tracking",
    ],
  },
];

export default function SystemsCapabilities({ n = "12" }: { n?: string }) {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2rem,4vw,3.5rem)]"
    >
      <SectionIndex n={n} label="Systems & Capabilities" />
      <h2
        id="capabilities-heading"
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight"
      >
        Systems &amp; engineering capabilities
      </h2>
      <p className="text-gray-700 text-base mb-8 max-w-3xl">
        What I work with directly when a deployment has to survive contact with a real
        organization.
      </p>

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,17rem),1fr))]">
        {GROUPS.map((g) => (
          <article key={g.h} className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="text-base font-bold text-gray-900 mb-3">{g.h}</h3>
            <ul className="list-none p-0 m-0 grid gap-1.5">
              {g.items.map((i) => (
                <li key={i} className="text-[13px] text-gray-700 leading-relaxed flex gap-2">
                  <span aria-hidden="true" className="text-[rgb(var(--c-accent-on-light))] font-bold">
                    →
                  </span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="mt-8 max-w-3xl rounded-xl border border-gray-200 bg-[rgb(var(--c-tint-50))] p-5 text-sm font-semibold text-gray-900 leading-relaxed">
        I am a Forward Deployed AI &amp; Human Systems Engineer focused on building and deploying
        systems that operate reliably in complex, regulated, real-world environments.
      </p>
    </section>
  );
}
