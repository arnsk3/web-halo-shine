import SectionIndex from "@/components/SectionIndex";

const LAYERS = [
  {
    h: "Data & inputs",
    b: "Event streams off the build pipeline, EHR-adjacent clinical context, component inventories, telemetry from live sessions. First job on any deployment is finding out what data actually exists versus what the org believes exists.",
    items: ["Source-of-truth mapping", "Data-quality triage", "Lineage capture for audit", "PII/PHI handling boundaries"],
  },
  {
    h: "Model & inference layer",
    b: "Where the AI decision gets made, scoped deliberately narrow. Deterministic checks automated; ambiguous, context-dependent calls routed to a person with the evidence attached.",
    items: ["Task scoping & confidence thresholds", "Golden-set evaluation", "Prompt/rule guardrails", "False-positive budget"],
  },
  {
    h: "Integration surface",
    b: "The AI is worthless until it lands inside the tool people already use. CI/CD gates, ticket creation, review queues, component library updates — API-level integration, not a side dashboard.",
    items: ["CI/CD pipeline gates", "Ticketing & queue APIs", "Design-system component writes", "SSO / role-scoped access"],
  },
  {
    h: "Human oversight layer",
    b: "Disclosure, confidence, explanation, override, escalation. This is the part that decides whether a regulated org is allowed to ship the model at all — and the part I own end to end.",
    items: ["Point-of-use explanation", "Override capture", "Escalation routing", "Reviewer workload design"],
  },
  {
    h: "Measurement & drift",
    b: "Baseline before, instrumentation during, evidence after. Override rate and drift telemetry are the signals that tell you whether the deployment is still working six months later.",
    items: ["Pre/post baselines", "Override & dismissal rates", "Drift and degradation alerts", "Audit-ready evidence trail"],
  },
];

const WEEKS = [
  {
    t: "Week 1 — Embed",
    b: "On site with the people doing the work. Shadow the actual task, not the documented process. Leave with a written problem statement the client agrees with and a list of every system that touches it.",
  },
  {
    t: "Week 2 — Narrow",
    b: "Cut the problem down to the one decision that, if handled well, moves the number. Agree the baseline metric and the failure conditions before building anything.",
  },
  {
    t: "Weeks 3–4 — Build",
    b: "Production-fidelity prototype wired to real data, running in their environment. Not a mockup — something a user can break in front of me.",
  },
  {
    t: "Weeks 5–8 — Integrate",
    b: "Into the pipeline, behind their auth, inside their release cadence. Oversight controls and logging land in the same pass, not as a follow-up.",
  },
  {
    t: "Ongoing — Prove & hand off",
    b: "Measure against the baseline, tune what reviewers ignore, then transfer ownership with runbooks so the capability survives without me.",
  },
];

export default function FdeSystems({ n = "02" }: { n?: string }) {
  return (
    <section
      id="systems"
      aria-labelledby="systems-heading"
      className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2rem,4vw,3.5rem)]"
    >
      <SectionIndex n={n} label="Systems I Build" />
      <h2
        id="systems-heading"
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight"
      >
        Systems I Build
      </h2>
      <p className="text-gray-700 text-base mb-8 max-w-3xl">
        A deployment is five layers, not a screen. Here is the stack I work across and what I own
        at each level.
      </p>

      <ol className="list-none p-0 m-0 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,20rem),1fr))]">
        {LAYERS.map((l, i) => (
          <li
            key={l.h}
            className="rounded-xl border border-gray-200 bg-white p-5 flex flex-col"
          >
            <p className="font-display text-xs font-extrabold text-[rgb(var(--c-accent-on-light))] mb-1 tabular-nums">
              Layer {i + 1}
            </p>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{l.h}</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">{l.b}</p>
            <ul className="list-none p-0 m-0 mt-auto flex flex-wrap gap-1.5">
              {l.items.map((it) => (
                <li
                  key={it}
                  className="rounded-full border border-gray-200 bg-[rgb(var(--c-tint-50))] px-2.5 py-1 text-[11px] font-semibold text-gray-800"
                >
                  {it}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">
          Operating in ambiguity: what my first eight weeks look like
        </h3>
        <p className="text-gray-700 text-base mb-6 max-w-3xl">
          Clients rarely hand over a spec. They hand over a complaint. This is how I turn one into
          a shipped capability.
        </p>
        <ol className="list-none p-0 m-0 grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,16rem),1fr))]">
          {WEEKS.map((w) => (
            <li key={w.t} className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="font-display text-sm font-extrabold text-[rgb(var(--c-primary))] mb-1.5">
                {w.t}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">{w.b}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
