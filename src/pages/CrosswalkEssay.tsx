const SECTIONS = [
  { id: "why", label: "Why one control set" },
  { id: "shape", label: "The shape of a control" },
  { id: "map", label: "Mapping once, evidencing everywhere" },
  { id: "traps", label: "Four traps in crosswalk work" },
  { id: "operate", label: "Operating it after launch" },
  { id: "start", label: "Where to start on Monday" },
] as const;

const MAPPED = [
  {
    control: "Human oversight & override",
    behaviour:
      "Disagreeing with the model is as fast as accepting it, and the reason is captured in the same interaction.",
    iso: "ISO/IEC 42001 A.9.2",
    nist: "GOVERN 3.2 · MANAGE 2.3",
    eu: "EU AI Act Art. 14",
  },
  {
    control: "Transparency & disclosure",
    behaviour:
      "AI involvement is stated at the moment of use, in the surface where the decision is made — not in a policy page.",
    iso: "ISO/IEC 42001 A.8",
    nist: "MEASURE 2.9 · MANAGE 4.1",
    eu: "EU AI Act Art. 13 · Art. 50",
  },
  {
    control: "Technical documentation",
    behaviour:
      "The model card, evaluation results, known limits, and change history are release artifacts, not a retrospective write-up.",
    iso: "ISO/IEC 42001 A.6.2",
    nist: "GOVERN 1.4 · MAP 4.1",
    eu: "EU AI Act Art. 11 + Annex IV",
  },
  {
    control: "Post-market monitoring",
    behaviour:
      "Override rate, drift, and harm signals carry thresholds and named owners before the system ships.",
    iso: "ISO/IEC 42001 §9",
    nist: "MANAGE 4.1–4.3",
    eu: "EU AI Act Art. 72 · Art. 73",
  },
];

export default function CrosswalkEssay({ onHome }: { onHome: () => void }) {
  return (
    <article>
      <header className="relative overflow-hidden bg-gradient-to-br from-[rgb(var(--c-hero-dark))] via-[rgb(var(--c-primary))] to-[rgb(var(--c-accent))] text-white">
        <div className="relative w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2.5rem,5vw,4rem)]">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/85 list-none p-0 m-0">
              <li>
                <button
                  onClick={onHome}
                  className="inline-flex items-center min-h-[44px] rounded px-1 underline underline-offset-4 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-accent-light))]"
                >
                  Home
                </button>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span className="text-white/85">Writing</span>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span aria-current="page" className="font-medium text-white">
                  One control set, three frameworks
                </span>
              </li>
            </ol>
          </nav>
          <p className="text-[rgb(var(--c-accent-on-dark))] text-xs font-semibold tracking-[2px] uppercase mb-3">
            Essay · AI Governance
          </p>
          <h1 className="max-w-4xl font-display text-3xl sm:text-5xl font-extrabold leading-tight mb-5">
            One control set, three frameworks
          </h1>
          <p className="max-w-3xl text-white/90 text-base sm:text-lg leading-relaxed mb-6">
            How to map a single internal AI control library to ISO/IEC 42001, the NIST AI Risk
            Management Framework, and the EU AI Act — so one piece of evidence answers several
            obligations instead of three teams producing three versions of the truth.
          </p>
          <p className="text-sm text-white/80">
            Senthil Nagappan · Published August 2026 · Approx. 9 minute read
          </p>
        </div>
      </header>

      <div className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2.5rem,5vw,4rem)]">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12">
          <div className="max-w-3xl space-y-12 text-gray-800 text-[15px] leading-[1.75]">
            <section aria-labelledby="why">
              <h2 id="why" className="font-display text-2xl font-extrabold text-gray-900 mb-4">
                Why one control set
              </h2>
              <p className="mb-4">
                Most organizations meet AI regulation three times. Legal reads the EU AI Act. Risk
                adopts the NIST AI Risk Management Framework. The certification team pursues
                ISO/IEC 42001. Each produces a register, each asks the product team for evidence,
                and each register drifts from the others within two quarters. The cost is not the
                paperwork; it is that engineers stop believing any of it describes their system.
              </p>
              <p className="mb-4">
                The alternative is to treat the frameworks as views on one underlying object. An
                organization has a finite number of things it actually does to keep AI safe:
                classify use cases, document models, disclose AI involvement, preserve human
                authority, test before release, watch after release, and manage third parties.
                Write those once as controls, then map each control outward. The frameworks become
                reporting lenses instead of competing programs.
              </p>
            </section>

            <section aria-labelledby="shape">
              <h2 id="shape" className="font-display text-2xl font-extrabold text-gray-900 mb-4">
                The shape of a control
              </h2>
              <p className="mb-4">
                A control that only exists as a sentence in a policy cannot be tested, so it cannot
                be assured. Every control in a working library needs four parts:
              </p>
              <ol className="space-y-3 list-none p-0 m-0 mb-4">
                {[
                  ["Observable behaviour", "What a user, reviewer, or auditor can see the system do. Not \"the system shall be transparent\" but \"the response header states the answer was AI-generated and links to its sources.\""],
                  ["Accountable owner", "A named role, in delivery, who fails the release if the behaviour is missing."],
                  ["Test", "A pass/fail criterion that runs in the same gate as functional QA — including accessibility of the oversight path, because an override a screen-reader user cannot reach is not an override."],
                  ["Retained evidence", "The artifact the control produces as a byproduct of working correctly: an override log, an evaluation report, a signed model card."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[rgb(var(--c-primary))] text-white text-sm font-bold"
                    >
                      {i + 1}
                    </span>
                    <span>
                      <strong className="block text-gray-900">{t}</strong>
                      <span className="text-[14px] text-gray-800">{d}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <p>
                The fourth part is what makes the crosswalk pay for itself. If evidence is generated
                by normal operation, an audit is a query rather than a project.
              </p>
            </section>

            <section aria-labelledby="map">
              <h2 id="map" className="font-display text-2xl font-extrabold text-gray-900 mb-4">
                Mapping once, evidencing everywhere
              </h2>
              <p className="mb-5">
                Four representative rows from the library, each expressed as behaviour first and
                clause second. The full twelve-control version is available as a one-page PDF.
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full min-w-[44rem] border-collapse text-left text-[13px]">
                  <caption className="sr-only">
                    Four AI controls mapped to ISO/IEC 42001, NIST AI RMF, and the EU AI Act
                  </caption>
                  <thead className="bg-[rgb(var(--c-tint-50))]">
                    <tr>
                      {["Control", "Observable behaviour", "ISO/IEC 42001", "NIST AI RMF", "EU AI Act"].map((h) => (
                        <th
                          key={h}
                          scope="col"
                          className="border-b border-gray-200 px-4 py-3 font-bold text-gray-900"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {MAPPED.map((r) => (
                      <tr key={r.control} className="odd:bg-white even:bg-[rgb(var(--c-tint-50))]/60">
                        <th scope="row" className="border-b border-gray-200 px-4 py-3 text-left font-bold text-gray-900 align-top">
                          {r.control}
                        </th>
                        <td className="border-b border-gray-200 px-4 py-3 text-gray-800 align-top">{r.behaviour}</td>
                        <td className="border-b border-gray-200 px-4 py-3 text-gray-800 align-top">{r.iso}</td>
                        <td className="border-b border-gray-200 px-4 py-3 text-gray-800 align-top">{r.nist}</td>
                        <td className="border-b border-gray-200 px-4 py-3 text-gray-800 align-top">{r.eu}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-5">
                Read a row left to right and it is a product requirement. Read it right to left and
                it is a compliance answer. Nobody has to translate at audit time, which is exactly
                when translation is most expensive and least accurate.
              </p>
            </section>

            <section aria-labelledby="traps">
              <h2 id="traps" className="font-display text-2xl font-extrabold text-gray-900 mb-4">
                Four traps in crosswalk work
              </h2>
              <ul className="space-y-4 list-none p-0 m-0">
                {[
                  ["Mapping clause to clause instead of clause to behaviour", "A map from ISO clauses to NIST subcategories is an academic artifact. Anchor on what the system does; the clauses then attach to something real."],
                  ["Treating equivalence as identity", "Art. 14 human oversight and GOVERN 3.2 overlap, they are not the same duty. Note the delta in the row rather than pretending one satisfies the other."],
                  ["Forgetting the provider / deployer split", "The same product creates different obligations depending on whether you built the model or bought it. Record the role per use case at intake, not at audit."],
                  ["Letting the map go stale", "Regulation dates. Every crosswalk needs a review cadence and a visible \"last reviewed\" date, or it quietly becomes misinformation."],
                ].map(([t, d]) => (
                  <li key={t} className="border-l-2 border-[rgb(var(--c-accent))] bg-[rgb(var(--c-tint-50))] px-5 py-4">
                    <strong className="block text-gray-900 mb-1">{t}</strong>
                    <span className="text-[14px] text-gray-800">{d}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="operate">
              <h2 id="operate" className="font-display text-2xl font-extrabold text-gray-900 mb-4">
                Operating it after launch
              </h2>
              <p className="mb-4">
                A control library earns its keep in run-state. Three signals tell you whether the
                controls are working: the override rate and its direction, the share of overrides
                carrying a captured reason, and the time between a harm signal appearing and a named
                owner acknowledging it. All three are product telemetry, and all three are also
                audit evidence — that overlap is the whole point.
              </p>
              <p>
                Material change re-triggers classification. A new data source, a new model version,
                a new jurisdiction, or a widened autonomy scope sends the use case back through
                intake. Without that rule the registry describes the system you launched rather than
                the system you run.
              </p>
            </section>

            <section aria-labelledby="start">
              <h2 id="start" className="font-display text-2xl font-extrabold text-gray-900 mb-4">
                Where to start on Monday
              </h2>
              <ol className="space-y-2 list-decimal pl-5 marker:font-bold marker:text-[rgb(var(--c-accent-on-light))]">
                <li>Inventory the AI in production, including the tools nobody registered.</li>
                <li>Classify each entry by consequence and autonomy; the tail is usually harmless and can be governed lightly.</li>
                <li>Write the six to twelve controls you can actually enforce, as behaviour.</li>
                <li>Map those controls outward to the frameworks that apply to you.</li>
                <li>Wire the evidence into the release gate, then review the map quarterly.</li>
              </ol>
              <div className="mt-8 rounded-xl bg-[rgb(var(--c-primary))] p-6 text-white">
                <h3 className="font-display text-lg font-bold mb-2">Take the control library with you</h3>
                <p className="text-white/90 text-sm mb-5 max-w-xl">
                  The full twelve-control library and its ISO/IEC 42001, NIST AI RMF, and EU AI Act
                  mapping, as a one-page PDF.
                </p>
                <a
                  href="/Senthil_Nagappan_AI_Control_Library.pdf"
                  className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-[rgb(var(--c-primary))] hover:bg-[rgb(var(--c-tint-50))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-accent-light))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--c-primary))]"
                  download
                >
                  Download the AI control library (PDF)
                </a>
              </div>
              <p className="mt-6 text-sm text-gray-700">
                Last reviewed: August 2026. This essay is a synthesis of patterns from regulated
                delivery work; it is not legal advice and does not describe a single client
                engagement.
              </p>
            </section>
          </div>

          <nav
            aria-labelledby="essay-toc-heading"
            className="mt-12 lg:mt-0 lg:sticky lg:top-24 lg:self-start"
          >
            <h2
              id="essay-toc-heading"
              className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-3"
            >
              On this page
            </h2>
            <ol className="space-y-1 list-none p-0 m-0 border-l border-gray-200">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex min-h-[44px] items-center border-l-2 border-transparent -ml-px pl-4 text-[13px] font-medium text-gray-800 hover:border-[rgb(var(--c-primary))] hover:text-[rgb(var(--c-primary))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-primary))] rounded-r"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </article>
  );
}
