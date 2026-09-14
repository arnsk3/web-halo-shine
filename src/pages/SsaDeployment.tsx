import { Link } from "react-router-dom";

const SECTIONS = [
  { id: "brief", label: "The Brief (as received)" },
  { id: "problem", label: "Problem: what was actually broken" },
  { id: "build", label: "Build: what I shipped" },
  { id: "components", label: "System components" },
  { id: "system", label: "System: data, APIs, workflow" },
  { id: "deploy", label: "Deploy: getting it into production" },
  { id: "evaluation", label: "Evidence: how it was measured" },
  { id: "outcome", label: "Outcome: business impact" },
  { id: "failure", label: "What broke, and what I changed" },
  { id: "handoff", label: "Handoff & scale" },
  { id: "insight", label: "Key engineering insight" },
  { id: "fde", label: "Why this is forward deployed" },
];

const COMPONENTS = [
  {
    h: "AI accessibility engine (SSA11y, Llama-based)",
    b: "Automated detection of WCAG failures, pattern recognition across UI components and workflows, and risk-ranking so the highest-impact conformance failures surface first instead of an undifferentiated defect list.",
  },
  {
    h: "CI/CD integration layer",
    b: "Checks embedded directly into the release pipelines the teams already ran, shifting validation from post-release audit to pre-merge enforcement. No new tool, no parallel process.",
  },
  {
    h: "Human-in-the-loop review system",
    b: "Escalation paths for ambiguous or high-risk findings, with the evidence attached to the decision. Structured review flows cut false positives and kept context-dependent judgment with a person.",
  },
  {
    h: "Governance dashboard",
    b: "Shared engineering and compliance visibility into violation volume, remediation velocity, recurrence by component, and risk hotspots — the operating picture that made accessibility a tracked system property.",
  },
];

const FDE_PRINCIPLES = [
  "Embedded directly in the operational teams — product, engineering, QA, and compliance — not across a contract boundary.",
  "Solved an ambiguous, real-world system constraint rather than a specified feature request.",
  "Built production-facing AI tooling wired into live release pipelines, not a prototype.",
  "Closed the loop between users, engineers, and compliance systems.",
  "Delivered measurable operational outcomes at enterprise scale.",
];

const WALKTHROUGH = [
  {
    screen: "Build pipeline — release candidate check",
    decision:
      "Automated validation flags a contrast and focus-order failure on a shared form control, and attributes it to the component rather than the 14 screens it renders on.",
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
      "The fix lands in the governed shared component with a change note, so downstream teams inherit it rather than re-solving it.",
    outcome: "One change propagates across every consuming team.",
  },
  {
    screen: "Audit record — evidence generated",
    decision:
      "The check, the human decision, the reviewer identity, and the remediation are captured as a byproduct of the pipeline run — not written up later from memory.",
    outcome: "Audit prep becomes retrieval instead of reconstruction.",
  },
];

const SYSTEM = [
  {
    h: "Inputs & data",
    b: "Rendered DOM and component metadata emitted per release candidate, joined against the shared component inventory so every finding carries a component ID, an owning team, and a blast radius. Before any of that worked, I had to establish that the inventory itself was incomplete — roughly a fifth of in-use components were undocumented.",
  },
  {
    h: "Decision layer",
    b: "Deterministic conformance checks run automatically with a tuned false-positive budget; anything context-dependent (meaningful sequence, error recovery, task-relevant focus order) is routed to expert review with the evidence attached. Confidence and origin are stamped on every finding so machine output can never be mistaken for a completed review.",
  },
  {
    h: "Integration surface",
    b: "Wired into the CI/CD release gate rather than bolted on as a separate dashboard: pipeline hook in, findings out to the triage queue and the ticketing system, remediation written back to the governed component library. Teams never had to open a new tool to participate.",
  },
  {
    h: "Oversight & audit",
    b: "Human review is a required gate, not an optional follow-up. Every decision — automated or human — is logged with reviewer, timestamp, rationale, and lineage back to the originating component, producing the 508 evidence trail continuously instead of at audit time.",
  },
  {
    h: "Telemetry",
    b: "Dismissal and override rates per rule, recurrence per component, and share of defects caught pre-merge versus post-release. When reviewers start bulk-dismissing a rule, that rule is wrong — the telemetry says so before anyone complains.",
  },
];

const EVALUATION = [
  {
    h: "Study design",
    b: "Pre/post comparison across the same delivery teams and release cadence — baseline captured from manual audit cycles before integration, then measured against equivalent post-integration releases. Component-level defect attribution ran alongside, so improvement could be traced to a cause rather than inferred from a total.",
  },
  {
    h: "Sample and instrumentation",
    b: "Measured across 40+ monthly releases and the full shared component inventory, with moderated usability sessions and expert review on the workflows caseworkers used most. Defects were tagged by originating component, severity, and whether they were caught automatically or by a person.",
  },
  {
    h: "What we tracked",
    b: "Manual audit hours per release; defect volume and recurrence; share of defects attributable to reused components; false-positive rate on automated checks; and whether release velocity moved at all.",
  },
  {
    h: "Honest limits",
    b: "This was operational measurement inside a live federal program, not a controlled experiment. Figures are program-reported and rounded; there was no holdout group, and delivery-process changes ran concurrently. The direction and the component-level attribution are well supported; precise causal attribution to the AI-assisted layer alone is not claimed.",
  },
];

const IMPACT = [
  { v: "~30%", l: "less manual accessibility audit effort per release" },
  { v: "30–40%", l: "fewer usability/interaction defects, fixed at the component source" },
  { v: "65%", l: "of defects traced to 8 reused components" },
  { v: "$1.5M+", l: "annual rework and audit cost avoided" },
  { v: "40+", l: "monthly releases shipped with no velocity loss" },
  { v: "0", l: "new tools delivery teams had to adopt" },
];

const OWNED = [
  "Framed the problem on site with caseworkers and delivery teams — the original ask was 'more audits', which would not have worked",
  "Defined what the model was allowed to decide alone and what had to reach a human",
  "Designed the triage queue, evidence presentation, and override capture",
  "Paired with engineering on the pipeline hook and the component-attribution join",
  "Set the false-positive budget and rewrote rules that reviewers kept dismissing",
  "Wrote the runbooks and trained the teams who now run it without me",
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
            Flagship Forward-Deployed Case Study
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold leading-[1.15] mb-4 tracking-tight">
            AI-Powered Accessibility &amp; Compliance System at Enterprise Scale
          </h1>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed">
            Embedded with federal delivery teams on a platform serving 50M+ citizens across 15+
            interconnected modules. Took an AI-assisted validation capability from an ambiguous
            complaint to a required gate in production CI/CD — with the oversight, telemetry, and
            audit trail that made it legal to keep running. The core challenge was not UI design;
            it was system reliability under scale and regulatory constraint.
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
          <section id="brief" aria-labelledby="ssa-brief-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-brief-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              The Brief (as received)
            </h2>
            <p className="rounded-xl border border-gray-200 bg-white p-5 text-gray-800 leading-relaxed italic">
              &ldquo;We keep failing accessibility checks late in the release. We need more
              auditors.&rdquo;
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              That brief was wrong, and saying so in week one was the highest-leverage thing I did
              on this engagement. More auditors would have scaled the cost of the problem, not
              removed it. The real defect rate was concentrated, repetitive, and structural.
            </p>
          </section>

          <section id="problem" aria-labelledby="ssa-problem-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-problem-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              Problem: what was actually broken
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              The Disability Case Processing System is used by federal caseworkers across all 50
              states — live, audited, Section 508-mandated, on a continuous release cadence.
              Accessibility was validated manually, late, and repeatedly: many independent teams
              re-checking the same reused components, defects surfacing after build, audit prep a
              scramble.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Attribution analysis showed 65% of defects originated in eight shared components.
              Every team was paying, separately, for the same eight mistakes. Constraints:
              legacy systems, no tolerance for slowing releases, federal accessibility law that is
              not negotiable, and delivery teams with no spare capacity to adopt a new tool.
            </p>
          </section>

          <section id="build" aria-labelledby="ssa-build-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-build-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              Build: what I shipped
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              An AI-assisted validation layer inside the build pipeline that attributes findings to
              their source component, automates only the deterministic calls, and routes everything
              else to an expert with the evidence attached. Here is one defect, end to end.
            </p>
            <ol className="list-none p-0 m-0 space-y-3">
              {WALKTHROUGH.map((w, i) => (
                <li key={w.screen} className="rounded-xl border border-gray-200 bg-white p-5">
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

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">What I personally owned</h3>
            <ul className="list-none p-0 m-0 space-y-2">
              {OWNED.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-gray-700 leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--c-accent))]"
                  />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="components" aria-labelledby="ssa-components-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-components-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              System components
            </h2>
            <dl className="space-y-4">
              {COMPONENTS.map((c) => (
                <div key={c.h} className="rounded-xl border border-gray-200 bg-white p-5">
                  <dt className="font-bold text-gray-900 mb-1.5">{c.h}</dt>
                  <dd className="text-sm text-gray-700 leading-relaxed m-0">{c.b}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="system" aria-labelledby="ssa-system-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-system-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              System: data, APIs, workflow
            </h2>
            <dl className="space-y-4">
              {SYSTEM.map((s) => (
                <div key={s.h} className="rounded-xl border border-gray-200 bg-white p-5">
                  <dt className="font-bold text-gray-900 mb-1.5">{s.h}</dt>
                  <dd className="text-sm text-gray-700 leading-relaxed m-0">{s.b}</dd>
                </div>
              ))}
            </dl>
            <p className="text-[13px] text-gray-700 mt-3 italic">
              Conceptual only — no proprietary implementation, code, or federal system detail.
            </p>
          </section>

          <section id="deploy" aria-labelledby="ssa-deploy-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-deploy-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              Deploy: getting it into production
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Adoption was the hard part, not the model. The rule I held to: nobody adopts a new
              tool. The capability had to appear inside the pipeline and the ticket queue teams
              already lived in, or it would be ignored regardless of accuracy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Deployment ran in phases: piloted in the modules with the highest defect density,
              then integrated into CI/CD across multiple engineering teams, then scaled across the
              enterprise release cadence of 40+ releases a month until it was simply part of the
              standard engineering workflow. Rolled out on two pilot teams first, with the gate advisory rather than blocking
              until the false-positive rate was defensible. Then made human review a required gate,
              enabled attribution write-back to the component library, and expanded across the
              program. First useful output landed in weeks; full pipeline integration followed one
              release cycle later.
            </p>
          </section>

          <section id="evaluation" aria-labelledby="ssa-eval-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-eval-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              Evidence: how it was measured
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

          <section id="outcome" aria-labelledby="ssa-impact-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-impact-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              Outcome: business impact
            </h2>
            <dl className="grid gap-3 sm:grid-cols-2">
              {IMPACT.map((m) => (
                <div
                  key={m.l}
                  className="rounded-xl border border-gray-200 bg-white p-5 flex flex-col-reverse"
                >
                  <dt className="text-sm text-gray-700 leading-snug mt-1">{m.l}</dt>
                  <dd className="m-0 font-display text-2xl font-extrabold text-[rgb(var(--c-primary))] tabular-nums">
                    {m.v}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="text-gray-700 leading-relaxed mt-4">
              Beyond the numbers: 508 audit readiness became structural rather than episodic, and
              the program stopped treating accessibility as a release-blocking surprise.
            </p>
          </section>

          <section id="failure" aria-labelledby="ssa-fail-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-fail-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              What broke, and what I changed
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The first pass over-trusted automation. Teams began treating a clean automated result
              as a passed accessibility review, and nuanced failures — focus order, meaningful
              sequence, error recovery — slipped through. Early rule tuning also produced enough
              false positives that reviewers started dismissing flags in bulk, which is the point
              at which a deployment is dead even if the dashboard looks healthy.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              I narrowed automated scope to deterministic checks only, made human review an explicit
              required gate, labelled every finding with its confidence and origin, and used
              dismissal telemetry as the signal for which rules to rewrite. Trust recovered because
              the system stopped claiming more than it could prove.
            </p>
          </section>

          <section id="handoff" aria-labelledby="ssa-handoff-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-handoff-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              Handoff &amp; scale
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A forward-deployed engagement that only works while you are in the room has failed.
              Ownership transferred to the program&rsquo;s delivery and accessibility teams with
              runbooks, rule-tuning criteria, component governance rules, and the evidence model
              documented. The pattern was then reused on adjacent programs without me rebuilding it.
            </p>
          </section>

          <section id="insight" aria-labelledby="ssa-insight-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-insight-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              Key engineering insight
            </h2>
            <blockquote className="rounded-xl border-l-4 border-[rgb(var(--c-accent-on-light))] bg-white p-5 text-gray-900 text-lg font-semibold leading-relaxed m-0">
              Accessibility is not a design problem — it is a system reliability problem.
            </blockquote>
            <p className="text-gray-700 leading-relaxed mt-3">
              That reframing is what unlocked the rest: AI integrated into engineering pipelines,
              automation of work that had been manual compliance labour, enforcement that scaled
              across distributed teams, and less human error in a high-volume release cycle.
              Accessibility stopped being a reactive QA activity and became a proactive,
              system-level control embedded in the engineering workflow.
            </p>
          </section>

          <section id="fde" aria-labelledby="ssa-fde-h" className="scroll-mt-24 mb-10">
            <h2 id="ssa-fde-h" className="text-2xl font-extrabold text-gray-900 mb-3">
              Why this is forward deployed engineering
            </h2>
            <ul className="list-none p-0 m-0 space-y-2">
              {FDE_PRINCIPLES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-gray-700 leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--c-accent))]"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <p className="rounded-xl border border-[rgb(var(--c-primary)/0.25)] bg-[rgb(var(--c-tint-50))] p-5 text-gray-800 leading-relaxed">
            Ambiguous complaint → correct problem → working system inside their pipeline → measured
            outcome → handed off. That is the loop I run on every deployment.
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
