import { Link } from "react-router-dom";
import SectionIndex from "@/components/SectionIndex";

/**
 * AI Governance Engagements — consulting-shaped proof for AI Governance /
 * model-risk roles. Engagement arc + deliverable-shaped briefs, with concepts
 * clearly labeled and shipped work separated.
 */

const ARC = [
  { k: "01", t: "Assess", d: "Inventory models & AI surfaces; map regulatory obligations; baseline maturity" },
  { k: "02", t: "Gap analysis", d: "Score controls against NIST AI RMF, EU AI Act, ISO/IEC 42001, SR 11-7" },
  { k: "03", t: "Control design", d: "Oversight tiers, genAI prompt/data controls, evidence capture" },
  { k: "04", t: "Roadmap", d: "Sequenced 90-day + 12-month remediation and operating plan" },
  { k: "05", t: "Operate", d: "Monitoring cadence, audit-ready reporting, evidence as a byproduct" },
] as const;

type Engagement = {
  chip: "Shipped in production" | "In-house concept";
  title: string;
  context: string;
  deliverables: string[];
  metrics: { v: string; l: string }[];
  link?: { to: string; label: string };
};

const ENGAGEMENTS: Engagement[] = [
  {
    chip: "Shipped in production",
    title: "Federal Compliance Governance — Social Security Administration",
    context:
      "Ran accessibility governance as a standing compliance program — policy, control taxonomy, delivery gates, and audit evidence — across 15+ product modules serving 50M+ citizens.",
    deliverables: [
      "Control taxonomy traced to WCAG 2.2 / Section 508 success criteria",
      "CI/CD quality gates — compliance checked at commit, not post-deploy",
      "Quarterly conformance readouts for federal stakeholders & auditors",
    ],
    metrics: [
      { v: "40+", l: "monthly releases through governance gates" },
      { v: "$1.5M+", l: "annual savings from early defect interception" },
      { v: "65%", l: "of issues traced to 8 reusable components" },
    ],
    link: { to: "/work/ssa", label: "Read the SSA case study" },
  },
  {
    chip: "In-house concept",
    title: "TrustLens — AI Governance Program Build",
    context:
      "A full governance engagement compressed into a working product: maturity assessment, control design, and an operating model that turns NIST AI RMF, EU AI Act, and ISO/IEC 42001 into living, auditable UI.",
    deliverables: [
      "Governance maturity scorecard across Govern / Map / Measure / Manage",
      "Control matrix mapped to NIST AI RMF, EU AI Act & ISO/IEC 42001",
      "90-day remediation roadmap with risk-tiered oversight gates",
      "One-click audit-ready evidence packages & AI Bill of Materials",
    ],
    metrics: [
      { v: "6 wks", l: "assessment-to-roadmap cycle (est.)" },
      { v: "92%", l: "of controls with live evidence coverage (est.)" },
      { v: "70%", l: "reduction in audit-prep effort (est.)" },
    ],
    link: { to: "/work/trustlens", label: "Read the TrustLens case study" },
  },
  {
    chip: "In-house concept",
    title: "Model-Risk Modernization — Financial Services",
    context:
      "An SR 11-7-aligned model-risk engagement pattern, grounded in my earlier financial-services delivery at JPMorgan Chase and Morgan Stanley: inventory discipline, validation cadence, and effective challenge — extended to genAI.",
    deliverables: [
      "Model inventory & tiering across traditional ML and genAI surfaces",
      "Validation cadence design with effective-challenge workflow",
      "GenAI risk controls — prompt/data controls, evaluation, monitoring",
      "Board-ready model-risk reporting and findings-remediation tracking",
    ],
    metrics: [
      { v: "100%", l: "in-scope models inventoried & tiered (target)" },
      { v: "−35%", l: "validation cycle time (target)" },
      { v: "+40%", l: "findings-remediation rate (target)" },
    ],
  },
];

const FUNCTIONS = [
  { f: "Privacy", d: "data-handling review & AI/privacy overlap (AIGP / privacy lens)" },
  { f: "Security", d: "model-access, prompt-injection & data-leak controls" },
  { f: "Risk & Compliance", d: "control taxonomy, acceptance criteria, SR 11-7 discipline" },
  { f: "Legal", d: "regulatory mapping — EU AI Act, state AI laws, federal framework" },
  { f: "Engineering", d: "telemetry, eval harnesses & evidence pipelines that ship in sprints" },
  { f: "Product & Design", d: "oversight UX that makes controls adoptable, not bypassed" },
] as const;

export default function GovernanceEngagements() {
  return (
    <section
      aria-labelledby="governance-heading"
      className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2.5rem,4vw,3.5rem)] border-t border-gray-100"
    >
      <div className="mb-8 max-w-3xl">
        <SectionIndex n="03" label="Governance Engagements" />
        <h2
          id="governance-heading"
          className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2"
        >
          Governance engagements, not just artifacts.
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2">
          AI governance work is bought as an engagement: assess, find the gaps, design the
          controls, roadmap the fix, then operate. Here is how I run that arc — with the
          deliverables a risk, regulatory, or model-risk team actually signs off on.
        </p>
        <p className="text-gray-600 text-[13px] leading-relaxed">
          Shipped client work and in-house concepts are labeled as such; concept metrics are
          estimates or targets, and I can walk through the reasoning behind any of them.
        </p>
      </div>

      {/* Engagement arc */}
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 list-none p-0 m-0 mb-10" aria-label="Engagement arc">
        {ARC.map((s) => (
          <li key={s.k} className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-1">
              {s.k}
            </p>
            <p className="font-display text-sm font-bold text-gray-900 mb-1">{s.t}</p>
            <p className="text-[12px] text-gray-700 leading-relaxed">{s.d}</p>
          </li>
        ))}
      </ol>

      {/* Engagement briefs */}
      <div className="grid gap-6 lg:grid-cols-3 items-stretch mb-10">
        {ENGAGEMENTS.map((e) => (
          <article
            key={e.title}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <span
              className={`inline-flex self-start items-center rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] border mb-4 ${
                e.chip === "Shipped in production"
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                  : "bg-amber-50 border-amber-200 text-amber-800"
              }`}
            >
              {e.chip}
            </span>
            <h3 className="font-display text-base font-bold text-gray-900 leading-snug mb-2">
              {e.title}
            </h3>
            <p className="text-[13px] text-gray-700 leading-relaxed mb-4">{e.context}</p>
            <p className="text-[11px] font-bold uppercase tracking-wide text-[rgb(var(--c-accent-dark))] mb-2">
              Key deliverables
            </p>
            <ul className="list-disc pl-4 space-y-1.5 text-[13px] text-gray-700 leading-relaxed mb-5">
              {e.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <dl className="mt-auto grid grid-cols-3 gap-px rounded-lg overflow-hidden border border-gray-200 bg-gray-200">
              {e.metrics.map((m) => (
                <div key={m.l} className="bg-gray-50 px-2 py-3">
                  <dt className="sr-only">{m.l}</dt>
                  <dd>
                    <span className="block font-display text-sm sm:text-base font-extrabold text-[rgb(var(--c-primary))] tabular-nums">
                      {m.v}
                    </span>
                    <span className="block text-[10px] text-gray-700 mt-0.5 leading-snug">{m.l}</span>
                  </dd>
                </div>
              ))}
            </dl>
            {e.link && (
              <Link
                to={e.link.to}
                className="mt-4 inline-flex items-center min-h-[44px] text-sm font-semibold text-[rgb(var(--c-primary))] hover:text-[rgb(var(--c-accent-on-light))] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-primary))] focus-visible:ring-offset-2"
              >
                {e.link.label} <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            )}
          </article>
        ))}
      </div>

      {/* Cross-functional coordination */}
      <div className="rounded-2xl border border-gray-200 bg-[rgb(var(--c-tint-50))] p-6 sm:p-7 mb-8">
        <h3 className="font-display text-lg font-bold text-gray-900 mb-1">
          How I coordinate across functions
        </h3>
        <p className="text-[13px] text-gray-700 leading-relaxed mb-5 max-w-3xl">
          Governance fails in the seams between teams. I chair the working cadence, keep a single
          decision log, and translate between each function&apos;s vocabulary — so a control
          designed by risk actually ships in engineering&apos;s sprint and stands up to legal&apos;s
          read of the regulation.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
          {FUNCTIONS.map((x) => (
            <li key={x.f} className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="font-display text-sm font-bold text-gray-900 mb-0.5">{x.f}</p>
              <p className="text-[12px] text-gray-700 leading-relaxed">{x.d}</p>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-sm text-gray-700">
        <a
          href="/Senthil_Nagappan_Governance_Brief.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center min-h-[44px] font-semibold text-[rgb(var(--c-primary))] underline hover:text-[rgb(var(--c-accent-on-light))] rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-primary))] focus-visible:ring-offset-2"
        >
          Download the one-page AI Governance engagement brief (PDF)
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
    </section>
  );
}
