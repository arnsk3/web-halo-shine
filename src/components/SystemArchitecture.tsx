import SectionIndex from "@/components/SectionIndex";
import SystemDiagram from "@/components/SystemDiagram";

/**
 * System Architecture & Delivery — how the systems above are actually wired:
 * AI pipeline, request/data flow, CI/CD integration, and the human-in-the-loop
 * decision logic that governs what the model is allowed to do.
 */

const DECISION_TIERS = [
  {
    k: "Act",
    b: "High confidence, low blast radius. System applies the change and logs it. Human sees it after the fact.",
  },
  {
    k: "Recommend",
    b: "Model proposes, human confirms. Explanation and source evidence shown at the point of decision.",
  },
  {
    k: "Alert",
    b: "Low confidence or high consequence. Routed to a reviewer queue with reason codes and escalation path.",
  },
];

const DELIVERY = [
  {
    h: "APIs & service integration",
    items: [
      "REST endpoints, webhooks and event queues into existing enterprise systems",
      "SSO and role-scoped access inherited from the customer's identity provider",
      "Contract-first: request/response schemas agreed before any UI exists",
    ],
  },
  {
    h: "CI/CD integration",
    items: [
      "Validation runs as a pre-merge gate, not a post-release audit",
      "Severity tiers decide block vs. annotate so the gate stays adoptable",
      "Findings write back to the shared component library — fix once, ship everywhere",
    ],
  },
  {
    h: "Data & observability",
    items: [
      "Lineage captured from source document through retrieval to output",
      "Override, dismissal and correction telemetry emitted with every decision",
      "Drift and degradation alerting wired to the same dashboards operations already watch",
    ],
  },
];

export default function SystemArchitecture({ n = "02" }: { n?: string }) {
  return (
    <section
      id="architecture"
      aria-labelledby="architecture-heading"
      className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2rem,4vw,3.5rem)]"
    >
      <SectionIndex n={n} label="System Architecture & Delivery" />
      <h2
        id="architecture-heading"
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight"
      >
        System architecture &amp; delivery
      </h2>
      <p className="text-gray-700 text-base mb-8 max-w-3xl">
        The reference architecture behind the deployments: how a request moves from a user
        through the AI pipeline, what the human is allowed to override, and where it plugs into
        the customer&rsquo;s pipeline.
      </p>

      <div className="grid gap-5 mb-8 [grid-template-columns:repeat(auto-fit,minmax(min(100%,28rem),1fr))]">
        <SystemDiagram
          title="AI pipeline — LLM to validated output"
          stages={[
            { k: "Ingest", b: "Source docs, events, code diffs" },
            { k: "Retrieval", b: "Embeddings + vector search" },
            { k: "LLM reasoning", b: "Scoped task, guardrailed prompt" },
            { k: "Validation", b: "Rules, thresholds, golden set" },
            { k: "Interface", b: "Explanation at point of use" },
          ]}
          loop="Golden-set regressions and confirmed false positives retune thresholds before the next release."
        />
        <SystemDiagram
          title="Data flow — user to API to system to output"
          stages={[
            { k: "User action", b: "In the workflow they already use" },
            { k: "API gateway", b: "Auth, rate limits, audit log" },
            { k: "Service layer", b: "Orchestration + policy checks" },
            { k: "Data store", b: "Lineage + evidence written" },
            { k: "Output", b: "Decision, reason codes, telemetry" },
          ]}
          loop="Every output writes lineage and override telemetry, so the audit trail is a byproduct of use rather than a separate exercise."
        />
        <SystemDiagram
          title="CI/CD integration"
          stages={[
            { k: "Commit / PR", b: "Existing developer workflow" },
            { k: "Pipeline hook", b: "Detection service called" },
            { k: "Risk scoring", b: "Severity, not raw count" },
            { k: "Gate decision", b: "Block · annotate · pass" },
            { k: "Component write-back", b: "Fix at the source" },
          ]}
          loop="Recurring failures route back to the design system so the same defect cannot re-enter the pipeline."
        />
        <SystemDiagram
          title="Human-in-the-loop workflow"
          stages={[
            { k: "Model output", b: "Score + confidence" },
            { k: "Tiering", b: "Act · recommend · alert" },
            { k: "Reviewer queue", b: "Ambiguous + high-risk only" },
            { k: "Override capture", b: "Reason codes logged" },
            { k: "Escalation", b: "Named owner, defined SLA" },
          ]}
          loop="Override and dismissal rates are the primary tuning signal; rules over the false-positive budget get retired."
        />
      </div>

      <div className="grid gap-4 mb-8 [grid-template-columns:repeat(auto-fit,minmax(min(100%,18rem),1fr))]">
        <article className="rounded-xl border border-gray-200 bg-[rgb(var(--c-tint-50))] p-5">
          <h3 className="text-base font-bold text-gray-900 mb-3">Decision-support logic</h3>
          <dl className="grid gap-3 m-0">
            {DECISION_TIERS.map((t) => (
              <div key={t.k}>
                <dt className="text-[13px] font-bold text-gray-900">{t.k}</dt>
                <dd className="m-0 text-[13px] leading-relaxed text-gray-700">{t.b}</dd>
              </div>
            ))}
          </dl>
        </article>
        {DELIVERY.map((d) => (
          <article key={d.h} className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="text-base font-bold text-gray-900 mb-3">{d.h}</h3>
            <ul className="list-none p-0 m-0 grid gap-1.5">
              {d.items.map((i) => (
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
    </section>
  );
}
