import SectionIndex from "@/components/SectionIndex";
import { Link } from "react-router-dom";

/**
 * Flagship Systems Delivered in Production — Problem → Build → Deploy → Outcome.
 * Sits immediately under the hero so the first thing a hiring manager reads is
 * shipped systems, not design language.
 */
type System = {
  tag: string;
  title: string;
  problem: string;
  build: string;
  deploy: string;
  outcome: string[];
  to?: string;
  cta?: string;
};

const SYSTEMS: System[] = [
  {
    tag: "Federal · Production",
    title: "AI Accessibility Automation System",
    problem:
      "Manual Section 508 audits could not keep pace with 40+ releases a month, leaving open compliance and litigation risk on a platform serving millions of citizens.",
    build:
      "Built an LLM-based validation service (SSA11y, Llama 2) with a detection API, severity-tiered risk scoring, a human review queue for ambiguous findings, and a governance telemetry layer.",
    deploy:
      "Integrated into CI/CD as a pre-merge gate across multiple engineering teams, behind existing SSO, and fed fixes back into the shared component library so remediations shipped once.",
    outcome: [
      "~30% efficiency gain in release validation effort",
      "200+ recurring accessibility defects eliminated at the component source",
      "Enforcement standardized across 15+ modules and 40+ monthly releases",
    ],
    to: "/ai-deployment-ssa",
    cta: "Read the full deployment",
  },
  {
    tag: "Clinical / Enterprise · Production",
    title: "Enterprise Decision Support System",
    problem:
      "Operators carried high cognitive load across multi-system workflows: alert fatigue, context switching, and decision errors concentrated under time pressure with real downstream harm.",
    build:
      "Built an AI prioritization and validation engine — risk scoring with confidence thresholds and a false-positive budget, point-of-use explanation, override capture, and a backend integration layer into queues, ticketing, and role-scoped access.",
    deploy:
      "Shipped inside the production workflow people already used — no side dashboard — integrated across 15+ modules, with logging and override telemetry released in the same pass.",
    outcome: [
      "30–40% reduction in user and decision errors",
      "Faster task completion in the highest-volume paths",
      "Oversight layer that let clinical AI reach 1,200+ users",
    ],
  },
];

function Row({ h, children }: { h: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] sm:pt-1">
        {h}
      </p>
      <div className="text-[13px] leading-relaxed text-gray-700">{children}</div>
    </div>
  );
}

export default function ProductionSystems({ n = "01" }: { n?: string }) {
  return (
    <section
      id="production-systems"
      aria-labelledby="production-systems-heading"
      className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2rem,4vw,3.5rem)]"
    >
      <SectionIndex n={n} label="Systems in Production" />
      <h2
        id="production-systems-heading"
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight"
      >
        Flagship systems delivered in production
      </h2>
      <p className="text-gray-700 text-base mb-8 max-w-3xl">
        Problem → build → deploy → outcome. Figures are team and program outcomes; my own
        scope is stated inside each case.
      </p>

      <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,30rem),1fr))]">
        {SYSTEMS.map((s) => (
          <article key={s.title} className="rounded-xl border border-gray-200 bg-white p-6 flex flex-col">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray-700 mb-2">
              {s.tag}
            </p>
            <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug">{s.title}</h3>
            <div className="grid gap-3">
              <Row h="Problem">{s.problem}</Row>
              <Row h="Build">{s.build}</Row>
              <Row h="Deploy">{s.deploy}</Row>
              <Row h="Outcome">
                <ul className="list-none p-0 m-0 grid gap-1.5">
                  {s.outcome.map((o) => (
                    <li key={o} className="flex gap-2 font-semibold text-gray-900">
                      <span aria-hidden="true" className="text-[rgb(var(--c-primary))]">
                        ·
                      </span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </Row>
            </div>
            {s.to && (
              <p className="mt-auto pt-4 text-sm">
                <Link
                  to={s.to}
                  className="group inline-flex items-center gap-1.5 min-h-[44px] font-semibold text-[rgb(var(--c-primary))] hover:text-[rgb(var(--c-accent-on-light))] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-primary))] focus-visible:ring-offset-2"
                >
                  {s.cta}
                  <span className="sr-only"> — {s.title}</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
