import SectionIndex from "@/components/SectionIndex";

/**
 * Machine-readable skills index. Grouped, plain-language keyword lists so both
 * a human reader and an applicant-tracking scan can find the same terms.
 */
const GROUPS: { h: string; items: string[] }[] = [
  {
    h: "Forward Deployed Engineering (FDE)",
    items: [
      "Forward Deployed Engineering (FDE)",
      "Forward Deployed Engineer",
      "Solutions Engineering (AI / Data / Platforms)",
      "Implementation Engineering",
      "Customer-facing engineering",
      "Field engineering",
      "Enterprise AI deployment",
      "Production deployment",
      "Embedded delivery teams",
      "Stakeholder & executive communication",
    ],
  },
  {
    h: "Applied AI systems",
    items: [
      "Applied AI engineering",
      "AI systems engineering",
      "AI Systems Implementation",
      "Human-in-the-loop AI systems",
      "Systems architecture for AI products",
      "LLM application design",
      "RAG pipelines",
      "AI copilots & assistants",
      "Human-in-the-loop systems",
      "Model evaluation & golden sets",
      "Guardrails, filtering & prompt controls",
    ],
  },
  {
    h: "Systems & integration",
    items: [
      "Enterprise system integration",
      "APIs & service integration",
      "CI/CD pipelines & pre-merge gates",
      "Data pipelines & lineage",
      "Legacy system modernization",
      "SSO & role-scoped access",
      "Observability & telemetry",
      "Runbooks & production handoff",
    ],
  },
  {
    h: "Human Systems Integration & safety-critical systems",
    items: [
      "Human Systems Integration (HSI)",
      "Human factors engineering",
      "Cognitive workload analysis",
      "Safety-critical UX engineering",
      "Accessibility Engineering (WCAG 2.2 / Section 508)",
      "Risk reduction systems",
      "Decision support systems",
      "IEC 62366 · MIL-STD-1472H",
      "WCAG 2.2 AAA · Section 508",
    ],
  },
  {
    h: "AI governance & compliance",
    items: [
      "NIST AI RMF",
      "ISO/IEC 42001",
      "EU AI Act readiness",
      "Explainable AI (XAI)",
      "Bias, drift & degradation monitoring",
      "AI inventory & third-party/shadow AI",
      "Audit evidence & data lineage",
      "Responsible AI program leadership",
    ],
  },
  {
    h: "Domains",
    items: [
      "Federal & public sector",
      "Healthcare & clinical workflows",
      "Financial services & revenue cycle",
      "Regulated enterprise platforms",
      "Mission-critical operations",
      "Program & team leadership",
    ],
  },
];

export default function AtsKeywords({ n = "15" }: { n?: string }) {
  return (
    <section
      id="skills-keywords"
      aria-labelledby="skills-keywords-heading"
      className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2rem,4vw,3.5rem)]"
    >
      <SectionIndex n={n} label="Skills & Keywords" />
      <h2
        id="skills-keywords-heading"
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight"
      >
        Skills &amp; keywords
      </h2>
      <p className="text-gray-700 text-base mb-8 max-w-3xl">
        A complete, scannable index of the systems, frameworks, and practices behind the
        deployments above — for recruiters, hiring managers, and automated screening alike.
      </p>

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,18rem),1fr))]">
        {GROUPS.map((g) => (
          <article key={g.h} className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="text-base font-bold text-gray-900 mb-3">{g.h}</h3>
            <ul className="list-none p-0 m-0 flex flex-wrap gap-1.5">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="rounded-full border border-gray-200 bg-[rgb(var(--c-tint-50))] px-2.5 py-1 text-[11px] font-semibold text-gray-800"
                >
                  {i}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
