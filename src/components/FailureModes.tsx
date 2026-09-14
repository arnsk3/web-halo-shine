import SectionIndex from "@/components/SectionIndex";

/**
 * Systems Thinking & Failure Modes — how each deployed system is expected to
 * break, what detects the break, and what the system does about it.
 */
type Mode = {
  layer: string;
  failure: string;
  detect: string;
  contain: string;
};

const MODES: Mode[] = [
  {
    layer: "Model layer (LLM / classifier)",
    failure: "Hallucinated or low-confidence output presented as fact.",
    detect: "Confidence thresholds, golden-set regression runs on every model or prompt change.",
    contain: "Route below-threshold cases to a human queue; never auto-apply an unverified result.",
  },
  {
    layer: "Retrieval layer (RAG)",
    failure: "Stale or out-of-scope documents retrieved; answers drift from the source of truth.",
    detect: "Source-attribution checks, index freshness monitors, retrieval-precision sampling.",
    contain: "Cite source at point of use; fail closed and return 'no grounded answer' over guessing.",
  },
  {
    layer: "Integration layer (APIs / CI-CD)",
    failure: "Upstream schema change or API timeout silently drops records mid-pipeline.",
    detect: "Contract tests in the pre-merge gate, per-stage record counts, error-budget alerts.",
    contain: "Idempotent retries, dead-letter queue, pipeline blocks the release rather than passing it.",
  },
  {
    layer: "Human oversight layer",
    failure: "Alert fatigue — reviewers rubber-stamp or dismiss recommendations wholesale.",
    detect: "Override rate, dismissal rate, time-on-decision telemetry per rule and per cohort.",
    contain: "Retire rules that exceed the false-positive budget; tighten thresholds before adding alerts.",
  },
  {
    layer: "Data & drift",
    failure: "Population shifts; accuracy degrades quietly after the launch metrics were signed off.",
    detect: "Drift monitors on inputs and outcomes, scheduled re-evaluation against the golden set.",
    contain: "Re-open risk classification, degrade to advisory mode, notify owners with lineage attached.",
  },
  {
    layer: "Operational handoff",
    failure: "System survives the pilot but not the team that inherits it.",
    detect: "Runbook coverage, on-call ownership, unanswered escalation volume in the first 60 days.",
    contain: "Ship runbooks, dashboards, and escalation paths in the same release as the feature.",
  },
];

export default function FailureModes({ n = "15" }: { n?: string }) {
  return (
    <section
      id="failure-modes"
      aria-labelledby="failure-modes-heading"
      className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2rem,4vw,3.5rem)]"
    >
      <SectionIndex n={n} label="Systems Thinking & Failure Modes" />
      <h2
        id="failure-modes-heading"
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight"
      >
        Systems thinking &amp; failure modes
      </h2>
      <p className="text-gray-700 text-base mb-8 max-w-3xl">
        Every system I deploy is designed against how it will fail, not only how it should work.
        Layer, failure mode, detection signal, and containment — written before launch, wired into
        telemetry, and owned after handoff.
      </p>

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,20rem),1fr))]">
        {MODES.map((m) => (
          <article key={m.layer} className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">{m.layer}</h3>
            <dl className="grid gap-2.5 m-0">
              <div>
                <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))]">
                  Failure mode
                </dt>
                <dd className="m-0 text-[13px] text-gray-700 leading-relaxed">{m.failure}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))]">
                  Detection
                </dt>
                <dd className="m-0 text-[13px] text-gray-700 leading-relaxed">{m.detect}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))]">
                  Containment
                </dt>
                <dd className="m-0 text-[13px] text-gray-700 leading-relaxed">{m.contain}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
