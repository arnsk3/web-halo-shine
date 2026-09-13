import { Link } from "react-router-dom";
import SectionIndex from "@/components/SectionIndex";

/**
 * AI Governance & Responsible AI — top-level peer section placed immediately
 * after the hero. NIST AI RMF–mapped risk-work cards + the controls block.
 */

const RMF_CARDS = [
  {
    k: "Govern",
    d: "Operating model, intake and review paths, AI experience standards embedded in the design system so conformance is inherited by default.",
  },
  {
    k: "Map",
    d: "Use-error and harm analysis across AI-touched workflows. Risks classified as perceptual, cognitive, or motor and prioritized by potential harm, not ease of fix.",
  },
  {
    k: "Measure",
    d: "Evaluative studies that test whether oversight controls actually work — not whether users clicked approve, but whether they caught the wrong answer.",
  },
  {
    k: "Manage",
    d: "Patterns propagated through the component library; production signals defined (override rates, correction rates, time-on-decision) to detect oversight degrading into rubber-stamping.",
  },
] as const;

const CONTROLS = [
  {
    t: "Disclosure",
    d: "The system states plainly that AI produced or influenced this output, at the moment of use — not buried in settings or terms.",
  },
  {
    t: "Confidence & Uncertainty",
    d: "Communicating model certainty in terms a user can act on, without false precision.",
  },
  {
    t: "Explainability",
    d: "Surfacing the specific basis for this result at the level of detail needed to accept or reject it.",
  },
  {
    t: "Override & Correction",
    d: "A path to disagree that is as fast as agreeing. If overriding costs more effort than accepting, the control fails under time pressure — exactly when it matters.",
  },
  {
    t: "Escalation & Hand-off",
    d: "Defined conditions where the system stops and routes to a person, with context preserved.",
  },
  {
    t: "Accessible by Default",
    d: "An oversight control a screen-reader user cannot operate is not a control. WCAG 2.2 AA conformance is a condition of control effectiveness, not a separate workstream.",
  },
] as const;

export default function AIGovernanceSection() {
  return (
    <section
      id="ai-governance"
      aria-labelledby="ai-governance-heading"
      className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2.5rem,4vw,3.5rem)]"
    >
      <div className="mb-8 max-w-3xl">
        <SectionIndex n="01" label="AI Governance" />
        <h2
          id="ai-governance-heading"
          className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-3"
        >
          AI Governance &amp; Responsible AI
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Most AI governance programs stop at the policy document. I work on the last mile —
          designing the disclosure, explainability, oversight, and correction controls that
          determine whether a governance requirement becomes real behavior or a checkbox nobody
          reads. Eighteen years in regulated environments, from FDA-governed medical devices to
          federal accessibility mandates.
        </p>
      </div>

      {/* NIST AI RMF–mapped risk work */}
      <h3 className="font-display text-lg font-bold text-gray-900 mb-4">
        How I Structure AI Risk Work
      </h3>
      <ul
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 list-none p-0 m-0 mb-10"
        aria-label="AI risk work mapped to the NIST AI Risk Management Framework"
      >
        {RMF_CARDS.map((c) => (
          <li
            key={c.k}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-1">
              NIST AI RMF
            </p>
            <h4 className="font-display text-base font-bold text-gray-900 mb-2">{c.k}</h4>
            <p className="text-[13px] text-gray-700 leading-relaxed">{c.d}</p>
          </li>
        ))}
      </ul>

      {/* Controls block */}
      <div className="rounded-2xl border border-gray-200 bg-[rgb(var(--c-tint-50))] p-6 sm:p-7 mb-8">
        <h3 className="font-display text-lg font-bold text-gray-900 mb-4">
          Controls I Design
        </h3>
        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 list-none p-0 m-0">
          {CONTROLS.map((c) => (
            <li key={c.t} className="flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--c-accent))]"
              />
              <p className="text-[13px] text-gray-700 leading-relaxed">
                <strong className="text-gray-900">{c.t}</strong>
                {" — "}
                {c.d}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-sm">
        <Link
          to="/ai-governance"
          className="group inline-flex items-center gap-1.5 min-h-[44px] font-semibold text-[rgb(var(--c-primary))] hover:text-[rgb(var(--c-accent-on-light))] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-primary))] focus-visible:ring-offset-2"
        >
          Read the case study: Designing the Last Mile of AI Governance
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </p>
    </section>
  );
}
