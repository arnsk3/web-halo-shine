import SectionIndex from "@/components/SectionIndex";

const PILLARS = [
  {
    k: "Forward Deployed Engineering",
    b: "Embedded with the customer's team, inside their environment, on their release cadence. I take an ambiguous complaint, turn it into a written problem statement, and stay accountable for the thing that ships against it.",
    items: ["Field immersion & workflow discovery", "Embedded engineering partnership", "Production integration, not demos", "Runbooks and ownership handoff"],
  },
  {
    k: "AI Systems Design & Deployment",
    b: "Scoping the decision the model is allowed to make, wiring it to real data and real APIs, and putting evaluation and drift telemetry around it so the deployment is still trustworthy six months later.",
    items: ["Task scoping & confidence thresholds", "Golden-set evaluation & baselines", "Pipeline / CI-CD and queue integration", "Drift, override and lineage telemetry"],
  },
  {
    k: "Human Factors & Safety-Critical Systems",
    b: "Regulated work fails on human performance, not model accuracy. I design the oversight layer — disclosure, explanation, override, escalation — that lets a clinical or federal org actually put the model in front of people.",
    items: ["IEC 62366 & MIL-STD-1472H practice", "Cognitive load & alert-fatigue control", "Human oversight and override design", "WCAG 2.2 AAA accessibility governance"],
  },
];

const FLOW = [
  { t: "Problem", b: "A complaint, not a spec. Written down until the client agrees with it." },
  { t: "Embedded discovery", b: "On site with the operators and the engineers who own the systems." },
  { t: "System design", b: "Data, model scope, integration surface, oversight, measurement." },
  { t: "Build / integrate", b: "Production-fidelity, wired to real data, behind their auth." },
  { t: "Deploy", b: "Into their pipeline and release cadence, with logging from day one." },
  { t: "Measure impact", b: "Against the pre-agreed baseline, then hand the capability over." },
];

const PRACTICE = [
  "I work embedded with customers and internal teams rather than across a contract boundary.",
  "I operate at the intersection of product, engineering, and operations — whichever one is blocking.",
  "I translate ambiguous real-world problems into deployable AI systems with defined failure conditions.",
  "I focus on shipping into production environments and on real-world constraints: legacy systems, data quality, security review, procurement.",
];

export default function FdePractice({ n = "01" }: { n?: string }) {
  return (
    <section
      id="practice"
      aria-labelledby="practice-heading"
      className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2rem,4vw,3.5rem)]"
    >
      <SectionIndex n={n} label="Forward Deployed Engineering Approach" />
      <h2
        id="practice-heading"
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight"
      >
        Forward Deployed Engineering Approach
      </h2>
      <p className="text-gray-700 text-base mb-8 max-w-3xl">
        Embedded with customers and engineering teams: translate ambiguity into a working system,
        prototype and integrate it into their environment, and reduce operational risk and
        cognitive load once it is live. Three pillars, one job — get an AI system running inside a
        real organization, under real constraints, and prove it moved a number.
      </p>

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,20rem),1fr))]">
        {PILLARS.map((p) => (
          <article key={p.k} className="rounded-xl border border-gray-200 bg-white p-5 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{p.k}</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">{p.b}</p>
            <ul className="list-none p-0 m-0 mt-auto flex flex-wrap gap-1.5">
              {p.items.map((it) => (
                <li
                  key={it}
                  className="rounded-full border border-gray-200 bg-[rgb(var(--c-tint-50))] px-2.5 py-1 text-[11px] font-semibold text-gray-800"
                >
                  {it}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Operating model
          </h3>
          <ol className="list-none p-0 m-0 grid gap-2.5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,13rem),1fr))]">
            {FLOW.map((f, i) => (
              <li key={f.t} className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="font-mono text-[11px] font-bold tabular-nums text-[rgb(var(--c-accent-on-light))] mb-1">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-bold text-gray-900 text-sm mb-1">{f.t}</p>
                <p className="text-[13px] text-gray-700 leading-relaxed">{f.b}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-xl border border-gray-200 bg-[rgb(var(--c-tint-50))] p-5">
          <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight">
            How I operate
          </h3>
          <ul className="list-none p-0 m-0 grid gap-2.5">
            {PRACTICE.map((p) => (
              <li key={p} className="text-sm text-gray-800 leading-relaxed flex gap-2">
                <span aria-hidden="true" className="text-[rgb(var(--c-accent-on-light))] font-bold">
                  →
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
