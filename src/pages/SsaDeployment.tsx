import { Link } from "react-router-dom";

const SECTIONS = [
  { id: "walkthrough", label: "Walkthrough: One Defect, End to End" },
  { id: "context", label: "The Deployment Context" },
  { id: "problem", label: "The Problem" },
  { id: "integration", label: "AI + Workflow Integration" },
  { id: "architecture", label: "System Architecture" },
  { id: "evaluation", label: "How It Was Measured" },
  { id: "impact", label: "Operational Impact" },
];

const WALKTHROUGH = [
  {
    screen: "Build pipeline — release candidate check",
    decision:
      "Automated validation flags a contrast and focus-order failure on a shared form control, with the offending component named rather than the 14 screens it appears on.",
    outcome: "Reviewers see one root cause instead of fourteen duplicate tickets.",
  },
  {
    screen: "Triage queue — expert review",
    decision:
      "A specialist confirms the contrast failure as deterministic (auto-accept) and routes the focus-order case to human judgment, because sequence depends on the caseworker's task, not the markup.",
    outcome: "Machine handles conformance; people keep the context-dependent call.",
  },
  {
    screen: "Component library — source fix",
    decision:
      "The fix lands in the governed shared component, with a note on what changed and why, so downstream teams inherit it rather than re-solving it.",
    outcome: "One change propagates across every consuming team.",
  },
  {
    screen: "Audit record — evidence generated",
    decision:
      "The check, the human decision, the reviewer, and the remediation are captured as a byproduct of the pipeline run — not written up later from memory.",
    outcome: "Audit prep becomes retrieval instead of reconstruction.",
  },
];

const EVALUATION = [
  {
    h: "Study design",
    b: "Pre/post comparison across the same delivery teams and the same release cadence — baseline captured from manual audit cycles before integration, then measured against equivalent post-integration releases. Component-level defect attribution ran alongside, so improvement could be traced to a cause rather than inferred from a total.",
  },
  {
    h: "Sample and instrumentation",
    b: "Measured across 40+ monthly releases and the full shared component inventory, with moderated usability sessions and expert review sessions on the workflows caseworkers used most. Defects were tagged by originating component, severity, and whether they were caught automatically or by a person.",
  },
  {
    h: "What we tracked",
    b: "Manual audit hours per release; defect volume and recurrence; share of defects attributable to reused components; false-positive rate on automated checks; and whether release velocity moved at all.",
  },
  {
    h: "What failed, and what we changed",
    b: "The first pass over-trusted automation: teams began treating a clean automated result as a passed accessibility review, and nuanced failures — focus order, meaningful sequence, error recovery — slipped through. Early rule tuning also produced enough false positives that reviewers started dismissing flags in bulk. We narrowed automated scope to deterministic checks only, made human review an explicit required gate rather than an optional follow-up, and labelled every finding with its confidence and origin so nobody could mistake machine output for a full review.",
  },
  {
    h: "Honest limits",
    b: "This was operational measurement inside a live federal program, not a controlled experiment. Figures are program-reported and rounded; there was no holdout group, and delivery-process changes ran concurrently. The direction and the component-level attribution are well supported; precise causal attribution to the AI-assisted layer alone is not claimed.",
  },
];

const IMPACT = [
  "Reduced manual accessibility audit effort ~30%",
  "Cut usability/interaction defects 30–40% by remediating at the component source",
  "Traced 65% of defects to 8 reused components — saved $1.5M+ annually",
  "Shipped continuously across 40+ monthly releases without slowing delivery",
  "Established structural audit readiness for federal 508 compliance",
];

export default function SsaDeployment({ onHome }: { onHome: () => void }) {
  return (
    <div className="bg-[#fafbfc]">
      <header className="relative overflow-hidden bg-gradient-to-br from-[rgb(var(--c-hero-dark))] via-[rgb(var(--c-primary))] to-[rgb(var(--c-accent))] text-white">
        <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20 relative">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0 text-xs text-white/85">
              <li>
                <button
                  onClick={onHome}
                  className="inline-flex items-center min-h-[44px] font-semibold hover:text-white underline underline-offset-4 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-accent-light))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--c-primary))]"
                >
                  Home
                </button>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-white">
                AI Deployment — SSA
              </li>
            </ol>
          </nav>
          <p className="inline-flex items-center gap-2 text-[rgb(var(--c-accent-on-dark))] text-xs font-semibold tracking-[3px] uppercase mb-5 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5">
            Forward-Deployed Work · Flagship
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold leading-[1.15] mb-4 tracking-tight">
            Deploying AI-Assisted Accessibility Into a Federal System at National Scale
          </h1>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed">
            Experience, accessibility, and human-factors leadership of an AI-assisted validation
            capability taken from concept into live, audited federal production — designed and
            integrated alongside engineering.
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-[11px] font-bold uppercase tracking-[2px] text-gray-700 mb-3">
            On this page
          </h2>
          <ul className="list-none p-0 m-0 space-y-1">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex items-center min-h-[44px] text-sm text-gray-700 hover:text-[rgb(var(--c-primary))] underline-offset-4 hover:underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-primary))] focus-visible:ring-offset-2"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="max-w-3xl">
          <section id="walkthrough" aria-labelledby="ssa-walk-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-walk-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              Walkthrough: One Defect, End to End
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              What the system actually does, step by step — the moment a check fires, the decision
              a person makes, and what changes as a result.
            </p>
            <ol className="list-none p-0 m-0 space-y-3">
              {WALKTHROUGH.map((w, i) => (
                <li
                  key={w.screen}
                  className="rounded-xl border border-gray-200 bg-white p-5"
                >
                  <p className="font-display text-xs font-extrabold text-[rgb(var(--c-accent-on-light))] mb-1 tabular-nums">
                    Step {i + 1} · {w.screen}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    <span className="font-semibold text-gray-900">Decision: </span>
                    {w.decision}
                  </p>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    <span className="font-semibold text-gray-900">Outcome: </span>
                    {w.outcome}
                  </p>
                </li>
              ))}
            </ol>
            <p className="text-[13px] text-gray-700 mt-3 italic">
              Described generically — no proprietary screens, code, or federal system detail.
            </p>
          </section>

          <section id="context" aria-labelledby="ssa-context-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-context-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              The Deployment Context
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Disability Case Processing System is used by federal caseworkers across all 50
              states — a live, audited, Section 508-mandated environment serving 50M+ citizens on
              a continuous release cadence. Constraints: legacy systems, many independent delivery
              teams, non-negotiable federal accessibility law, and no tolerance for slowing
              releases.
            </p>
          </section>

          <section id="problem" aria-labelledby="ssa-problem-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-problem-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              The Problem
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Accessibility was validated manually, late, and repeatedly — every team re-checking
              the same components, defects surfacing after build, audit prep a scramble. It
              didn&rsquo;t scale and it didn&rsquo;t hold.
            </p>
          </section>

          <section
            id="integration"
            aria-labelledby="ssa-integration-h"
            className="scroll-mt-24 mb-10"
          >
            <h2 id="ssa-integration-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              AI + Workflow Integration (Human-in-the-Loop)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I led the design and integration of an AI-assisted accessibility validation approach
              embedded directly into the CI/CD pipeline — shifting accessibility from
              after-the-fact human review to continuous, in-production checking. Human-in-the-loop
              by design: automated checks handled high-volume deterministic conformance; expert
              review concentrated on nuanced, context-dependent judgment. The system flagged and
              prioritized; people decided.
            </p>
          </section>

          <section
            id="architecture"
            aria-labelledby="ssa-arch-h"
            className="scroll-mt-24 mb-10"
          >
            <h2 id="ssa-arch-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              System Architecture (High-Level)
            </h2>
            <ol className="list-none p-0 m-0 grid gap-3 sm:grid-cols-2">
              {[
                "Automated accessibility validation integrated into the build/release pipeline",
                "A governed shared component library, so fixes propagated at the source rather than per-screen",
                "Expert-in-the-loop review for context-dependent cases",
                "Audit-ready documentation generated as a byproduct",
              ].map((s, i) => (
                <li
                  key={s}
                  className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700 leading-relaxed"
                >
                  <span className="block font-display text-xs font-extrabold text-[rgb(var(--c-accent-on-light))] mb-1 tabular-nums">
                    Layer {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
            <p className="text-[13px] text-gray-700 mt-3 italic">
              Conceptual only — no proprietary implementation, code, or federal system detail.
            </p>
          </section>

          <section id="evaluation" aria-labelledby="ssa-eval-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-eval-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              How It Was Measured
            </h2>
            <dl className="space-y-4">
              {EVALUATION.map((e) => (
                <div key={e.h} className="rounded-xl border border-gray-200 bg-white p-5">
                  <dt className="font-bold text-gray-900 mb-1.5">{e.h}</dt>
                  <dd className="text-sm text-gray-700 leading-relaxed m-0">{e.b}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="impact" aria-labelledby="ssa-impact-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-impact-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              Operational Impact
            </h2>
            <ul className="list-none p-0 m-0 space-y-2">
              {IMPACT.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-gray-700 leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--c-accent))]"
                  />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </section>

          <p className="rounded-xl border border-[rgb(var(--c-primary)/0.25)] bg-[rgb(var(--c-tint-50))] p-5 text-gray-800 leading-relaxed">
            Forward-deployed work — taking an AI-assisted capability from concept into live,
            regulated, national-scale production, with the human oversight, governance, and
            accessibility that made it trustworthy and adopted.
          </p>

          <p className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-lg text-sm font-semibold bg-[rgb(var(--c-primary))] text-white hover:bg-[rgb(var(--c-accent-dark))] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-primary))] focus-visible:ring-offset-2"
            >
              <span aria-hidden="true">←</span> Back to all forward-deployed work
            </Link>
          </p>
        </article>
      </div>
    </div>
  );
}
