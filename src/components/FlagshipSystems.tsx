import { Link } from "react-router-dom";
import SectionIndex from "@/components/SectionIndex";

/**
 * Flagship Forward Deployed Systems — three deployments told in
 * Context → Role → Built → Deployment → Impact → Insight form.
 */

type Flagship = {
  tag: string;
  title: string;
  context: string[];
  role: string[];
  built: string[];
  deployment: string[];
  impact: string[];
  insight: string;
  to?: string;
  cta?: string;
};

const FLAGSHIPS: Flagship[] = [
  {
    tag: "Federal · Production",
    title: "AI-Driven Accessibility & Compliance System (Federal Production Deployment)",
    context: [
      "Federal enterprise platform serving millions of citizens across 15+ interconnected modules.",
      "Accessibility and Section 508 conformance handled as a manual, post-release audit.",
      "40+ releases a month outrunning the review capacity of a small compliance team.",
    ],
    role: [
      "Embedded forward-deployed engineer across product, engineering, QA and compliance.",
      "Translated accessibility and usability risk into system-level engineering requirements.",
      "Owned the oversight and escalation design; drove adoption across distributed teams.",
    ],
    built: [
      "AI detection engine (SSA11y, Llama-based) scoring WCAG failures by risk, not count.",
      "CI/CD integration layer moving validation from post-release audit to pre-merge gate.",
      "Human-in-the-loop review queue for ambiguous and high-risk findings.",
      "Governance dashboard tracking violations, remediation velocity and risk hotspots.",
    ],
    deployment: [
      "Piloted in the modules with the highest defect density, then widened.",
      "Wired into the pipelines of multiple engineering teams behind existing auth.",
      "Operationalized as a standard step in the release workflow, not an extra tool.",
    ],
    impact: [
      "30–40% reduction in usability and accessibility defects.",
      "Manual audit effort per release cut substantially.",
      "Faster release confidence and standardized enforcement across modules.",
    ],
    insight: "Accessibility is a system reliability problem, not a UX issue.",
    to: "/ai-deployment-ssa",
    cta: "Read the full deployment",
  },
  {
    tag: "Clinical · Production",
    title: "AI-Assisted Decision Support System for Enterprise Workflows",
    context: [
      "Multi-step clinical and enterprise workflows where a wrong call carries real harm.",
      "High cognitive load, alert fatigue, and decision errors concentrated under time pressure.",
      "Model output existed; nobody could say when a human was allowed to rely on it.",
    ],
    role: [
      "Embedded systems engineer working with product, ML and operations teams.",
      "Scoped the decision the model was permitted to make and the failure conditions.",
      "Designed the oversight layer: disclosure, explanation, override, escalation.",
    ],
    built: [
      "AI prioritization engine ranking work by risk instead of arrival order.",
      "Workflow risk detection with confidence thresholds and a false-positive budget.",
      "Human-in-the-loop validation with point-of-use explanation and override capture.",
      "Backend integration layer into queues, ticketing and role-scoped access.",
    ],
    deployment: [
      "Embedded into the production workflow people already used — no side dashboard.",
      "Tuned in the field against real usage: what reviewers ignored got changed.",
      "Logging and override telemetry shipped in the same pass as the feature.",
    ],
    impact: [
      "Measurable drop in decision errors and rework under load.",
      "Faster task completion in the highest-volume paths.",
      "Human oversight layer that let clinical AI reach 1,200+ users.",
    ],
    insight: "Reducing cognitive load is a systems engineering problem.",
  },
  {
    tag: "Enterprise · Governance",
    title: "AI Governance & Human Systems Intelligence Platform",
    context: [
      "Enterprise-wide AI adoption with no consistent governance across initiatives.",
      "Policy documents existed; the controls that make policy real in the product did not.",
      "Growing exposure under NIST AI RMF, ISO/IEC 42001 and EU AI Act obligations.",
    ],
    role: [
      "Systems and AI governance engineer embedded with the teams shipping models.",
      "Ran intake, risk classification and review paths as an operating function.",
      "Converted framework obligations into engineering-testable controls.",
    ],
    built: [
      "Control library crosswalked to NIST AI RMF, ISO/IEC 42001 and the EU AI Act.",
      "Observability layer: override rates, correction rates, time-on-decision, drift.",
      "Risk and AI-inventory tracking including third-party and shadow AI.",
      "Lifecycle gates folded into the existing AI development process.",
    ],
    deployment: [
      "Adopted across multiple AI initiatives rather than a single pilot team.",
      "Controls inherited by default through the shared component library.",
      "Evidence captured continuously so audits read logs, not slide decks.",
    ],
    impact: [
      "Improved transparency and traceability of AI decisions.",
      "Reduced operational and regulatory risk across the portfolio.",
      "Standardized governance practice that survived team turnover.",
    ],
    insight: "AI governance must be embedded into systems, not added later.",
    to: "/ai-governance",
    cta: "Read the governance case study",
  },
];

function Block({ h, items }: { h: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-1.5">
        {h}
      </p>
      <ul className="list-none p-0 m-0 grid gap-1.5">
        {items.map((i) => (
          <li key={i} className="text-[13px] text-gray-700 leading-relaxed flex gap-2">
            <span aria-hidden="true" className="text-[rgb(var(--c-primary))] font-bold">
              ·
            </span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FlagshipSystems({ n = "05" }: { n?: string }) {
  return (
    <section
      id="flagship-systems"
      aria-labelledby="flagship-systems-heading"
      className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2rem,4vw,3.5rem)]"
    >
      <SectionIndex n={n} label="Flagship Deployments" />
      <h2
        id="flagship-systems-heading"
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight"
      >
        Three systems, deployed
      </h2>
      <p className="text-gray-700 text-base mb-8 max-w-3xl">
        Context → role → what I built → deployment → impact. Figures are team and program
        outcomes; my own scope is stated in each role block.
      </p>

      <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,26rem),1fr))]">
        {FLAGSHIPS.map((f) => (
          <article
            key={f.title}
            className="rounded-xl border border-gray-200 bg-white p-6 flex flex-col"
          >
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray-700 mb-2">
              {f.tag}
            </p>
            <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug">{f.title}</h3>

            <div className="grid gap-4 mb-4">
              <Block h="Context" items={f.context} />
              <Block h="My role" items={f.role} />
              <Block h="What I built" items={f.built} />
              <Block h="Deployment" items={f.deployment} />
              <Block h="Impact" items={f.impact} />
            </div>

            <p className="mt-auto rounded-lg border border-gray-200 bg-[rgb(var(--c-tint-50))] p-4 text-[13px] font-semibold text-gray-900 leading-relaxed">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] block mb-1">
                Insight
              </span>
              {f.insight}
            </p>

            {f.to && (
              <p className="pt-3 text-sm">
                <Link
                  to={f.to}
                  className="group inline-flex items-center gap-1.5 min-h-[44px] font-semibold text-[rgb(var(--c-primary))] hover:text-[rgb(var(--c-accent-on-light))] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-primary))] focus-visible:ring-offset-2"
                >
                  {f.cta}
                  <span className="sr-only"> — {f.title}</span>
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
