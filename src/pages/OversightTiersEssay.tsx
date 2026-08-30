const SECTIONS = [
  { id: "problem", label: "The confidence-score problem" },
  { id: "tiers", label: "Three tiers of authority" },
  { id: "assign", label: "Assigning a tier" },
  { id: "ui", label: "What each tier looks like" },
  { id: "evidence", label: "Evidence the tiers produce" },
  { id: "start", label: "Where to start" },
] as const;

const TIERS = [
  {
    tier: "Recommend",
    authority: "Human decides. The model proposes and must be explicitly accepted.",
    when: "Consequential, reversible-but-costly decisions; clinical, financial, or eligibility judgments.",
    ui: "Suggestion presented next to the human's own workspace, never pre-filled into the field of record. Accept and dismiss are equal-weight controls.",
    evidence: "Accept rate, dismiss rate, dismiss reasons, time-to-decision.",
  },
  {
    tier: "Act",
    authority: "Model executes inside a bounded envelope. Human can intervene before and after.",
    when: "High-volume, low-severity, reversible actions where latency matters more than deliberation.",
    ui: "Visible countdown or undo window, a persistent activity log, and a single obvious stop control that halts the class of action, not just this instance.",
    evidence: "Intervention rate, undo rate, envelope-breach attempts, time-to-stop.",
  },
  {
    tier: "Alert",
    authority: "Model observes and escalates. It cannot change state at all.",
    when: "Monitoring, drift and safety signals, and anything where a false positive is cheap but a missed event is not.",
    ui: "Severity-ranked queue with an explicit acknowledge step and a named owner per severity band. No auto-dismissal.",
    evidence: "Acknowledgement latency, false-positive rate, unacknowledged-alert aging.",
  },
];

export default function OversightTiersEssay({ onHome }: { onHome: () => void }) {
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
                  Oversight tiers beat confidence scores
                </span>
              </li>
            </ol>
          </nav>
          <p className="text-[rgb(var(--c-accent-on-dark))] text-xs font-semibold tracking-[2px] uppercase mb-3">
            Essay · AI Experience Design
          </p>
          <h1 className="max-w-4xl font-display text-3xl sm:text-5xl font-extrabold leading-tight mb-5">
            Oversight tiers beat confidence scores
          </h1>
          <p className="max-w-3xl text-white/90 text-base sm:text-lg leading-relaxed mb-6">
            Exposing a raw probability to a clinician is a design failure. Recommend, act, and alert
            tiers map model risk to human authority — and produce the oversight evidence an auditor
            actually asks for.
          </p>
          <p className="text-sm text-white/80">
            Senthil Nagappan · Published August 2026 · Approx. 8 minute read
          </p>
        </div>
      </header>

      <div className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2.5rem,5vw,4rem)]">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12">
          <div className="max-w-3xl">
            <section aria-labelledby="problem-h" className="mb-12">
              <h2
                id="problem"
                className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-4 scroll-mt-24"
              >
                <span id="problem-h">The confidence-score problem</span>
              </h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-gray-800">
                <p>
                  A model returns 0.87. The interface prints "87% confidence" and considers the
                  transparency obligation discharged. It has not been. The number tells a clinician
                  nothing they can act on, because it answers a question they did not ask.
                </p>
                <p>
                  Three failures stack up. First, calibration: 0.87 rarely means the event happens 87
                  times in a hundred, and almost never means that for the subpopulation in front of
                  the user. Second, framing: humans anchor hard on displayed numbers, so a
                  well-calibrated score still shifts behaviour in ways nobody designed. Third, and
                  worst, the score silently transfers the decision. Showing a number and letting the
                  human "use their judgment" moves accountability onto the person least equipped to
                  audit the model — while the organisation records it as human oversight.
                </p>
                <p>
                  Regulators are explicit that this is not oversight. EU AI Act Article 14 asks for
                  measures that let a person understand capacity and limits, remain aware of
                  automation bias, correctly interpret output, and <em>intervene or stop the system</em>.
                  A probability satisfies none of those on its own. NIST AI RMF MANAGE 2.3 similarly
                  expects mechanisms to supersede or deactivate a system, not merely to inform.
                </p>
                <p>
                  So stop designing the number and start designing the authority. The useful question
                  is not "how sure is the model?" but "what is the model allowed to do without a
                  human, and how does a human take that back?"
                </p>
              </div>
            </section>

            <section aria-labelledby="tiers-h" className="mb-12">
              <h2
                id="tiers"
                className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-4 scroll-mt-24"
              >
                <span id="tiers-h">Three tiers of authority</span>
              </h2>
              <p className="text-[15px] leading-relaxed text-gray-800 mb-6">
                Every AI-assisted interaction I design falls into one of three tiers. The tier is a
                product decision made before any UI exists, and it determines the interface, the
                telemetry, and the control evidence.
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left text-[13px]">
                  <caption className="sr-only">
                    Oversight tiers: authority held by the human, when to use each tier, interface
                    requirements, and the evidence each tier produces.
                  </caption>
                  <thead className="bg-[rgb(var(--c-tint-100))]">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-bold text-gray-900">Tier</th>
                      <th scope="col" className="px-4 py-3 font-bold text-gray-900">Authority</th>
                      <th scope="col" className="px-4 py-3 font-bold text-gray-900">When it applies</th>
                      <th scope="col" className="px-4 py-3 font-bold text-gray-900">Interface requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TIERS.map((t) => (
                      <tr key={t.tier} className="border-t border-gray-200 align-top">
                        <th scope="row" className="px-4 py-3 font-bold text-[rgb(var(--c-accent-on-light))] whitespace-nowrap">
                          {t.tier}
                        </th>
                        <td className="px-4 py-3 text-gray-800">{t.authority}</td>
                        <td className="px-4 py-3 text-gray-800">{t.when}</td>
                        <td className="px-4 py-3 text-gray-800">{t.ui}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section aria-labelledby="assign-h" className="mb-12">
              <h2
                id="assign"
                className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-4 scroll-mt-24"
              >
                <span id="assign-h">Assigning a tier</span>
              </h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-gray-800">
                <p>
                  Tier assignment is a risk conversation, not a UX one, and it belongs in the same
                  review that classifies the use case. Four questions decide it:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <strong>Severity of a wrong action.</strong> If a single wrong action can cause
                    physical, financial, or rights-affecting harm, the tier is Recommend or Alert.
                    Never Act.
                  </li>
                  <li>
                    <strong>Reversibility.</strong> An action that can be undone inside the user's
                    own session can sit in Act. An action that leaves the system — a sent message, a
                    submitted claim, a posted ledger entry — generally cannot.
                  </li>
                  <li>
                    <strong>Detectability.</strong> If a wrong output is hard for a competent user to
                    notice, drop a tier. Undetectable errors make Act indistinguishable from no
                    oversight at all.
                  </li>
                  <li>
                    <strong>Volume.</strong> High volume argues for Act, because Recommend at ten
                    thousand items a day produces rubber-stamping — which is worse than automation,
                    since it manufactures a false audit trail of human review.
                  </li>
                </ol>
                <p>
                  That last point deserves emphasis. The most common oversight failure I see is not
                  too much automation; it is a Recommend tier applied at a volume no human can
                  actually review, generating an accept-rate near 100% that the organisation reports
                  as human-in-the-loop. If accept rate exceeds roughly 95% with near-zero dwell time,
                  you do not have oversight. You have Act with extra clicks — and you should either
                  reduce the volume reaching a human or reclassify honestly.
                </p>
              </div>
            </section>

            <section aria-labelledby="ui-h" className="mb-12">
              <h2
                id="ui"
                className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-4 scroll-mt-24"
              >
                <span id="ui-h">What each tier looks like</span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {TIERS.map((t) => (
                  <div key={t.tier} className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="font-display text-base font-bold text-gray-900 mb-2">{t.tier}</h3>
                    <p className="text-[13px] text-gray-800 leading-relaxed mb-3">{t.ui}</p>
                    <p className="text-[12px] text-gray-700 leading-relaxed">
                      <span className="font-semibold text-gray-900">Instrumented:</span> {t.evidence}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-4 text-[15px] leading-relaxed text-gray-800 mt-6">
                <p>
                  Three rules cut across all three tiers. Disagreement must be as cheap as agreement —
                  if accepting is one click and overriding is a modal with a mandatory free-text
                  justification, the interface is engineering the accept rate it will later report.
                  Disclosure must live at the point of use, in the surface where the decision is made,
                  not in a settings page or a terms document. And the stop control must halt the class
                  of action rather than the single instance, because a user who has lost trust in the
                  model needs to stop it everywhere, immediately, without finding an administrator.
                </p>
                <p>
                  Explanation still matters — but as grounding, not as a number. Show the specific
                  inputs that drove this output, the contrary evidence the model discounted, and the
                  known limits for this population. A clinician can argue with "flagged because of
                  these three lab values and this note, despite this contradicting result." Nobody can
                  argue with 0.87.
                </p>
              </div>
            </section>

            <section aria-labelledby="evidence-h" className="mb-12">
              <h2
                id="evidence"
                className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-4 scroll-mt-24"
              >
                <span id="evidence-h">Evidence the tiers produce</span>
              </h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-gray-800">
                <p>
                  The reason this framing survives contact with governance is that each tier emits its
                  own oversight evidence as a by-product of normal use. Override rate and override
                  reasons answer Article 14 and NIST MANAGE 2.3. Time-to-stop answers the
                  deactivation requirement. Acknowledgement latency on the Alert tier answers
                  post-market monitoring duties under Articles 72 and 73 and ISO/IEC 42001 clause 9.
                </p>
                <p>
                  Set thresholds before launch and give each one a named owner. Accept rate above 95%
                  on a Recommend surface triggers a review of whether the tier is honest. A rising
                  undo rate on an Act surface is an early drift signal that usually predates any
                  model-monitoring alarm, because users notice degradation before dashboards do. An
                  aging unacknowledged-alert queue is an accountability failure, not a UX one, and it
                  should page a person.
                </p>
                <p>
                  This is what makes oversight auditable rather than aspirational: the control is a
                  product behaviour, the behaviour is instrumented, and the instrument is the
                  evidence.
                </p>
              </div>
            </section>

            <section aria-labelledby="start-h" className="mb-4">
              <h2
                id="start"
                className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-4 scroll-mt-24"
              >
                <span id="start-h">Where to start</span>
              </h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-gray-800">
                <p>
                  Take your inventory of AI-assisted surfaces and label each one Recommend, Act, or
                  Alert. Do it in an afternoon, roughly, with product and risk in the same room. Two
                  things fall out immediately: surfaces where the label is contested, which are your
                  real risk concentrations, and surfaces where the label does not match the interface
                  — usually an Act tier dressed as a Recommend.
                </p>
                <p>
                  Then instrument the four metrics for the tiers you have, and set one threshold per
                  surface. That is a working human-oversight control, expressed as product behaviour,
                  with evidence attached — and it took no new platform, no new tooling, and no
                  confidence score.
                </p>
                <p className="text-[13px] text-gray-700">
                  Related:{" "}
                  <a
                    href="/writing/ai-control-crosswalk"
                    className="font-semibold text-[rgb(var(--c-primary))] underline hover:text-[rgb(var(--c-accent-on-light))] rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-primary))] focus-visible:ring-offset-2"
                  >
                    One control set, three frameworks
                  </a>{" "}
                  — how the oversight control above maps to ISO/IEC 42001, the NIST AI RMF, and the
                  EU AI Act, and{" "}
                  <a
                    href="/Senthil_Nagappan_AI_Control_Library.pdf"
                    className="font-semibold text-[rgb(var(--c-primary))] underline hover:text-[rgb(var(--c-accent-on-light))] rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-primary))] focus-visible:ring-offset-2"
                  >
                    the downloadable control library (PDF)
                  </a>
                  .
                </p>
              </div>
            </section>
          </div>

          <nav
            aria-label="On this page"
            className="hidden lg:block sticky top-24 self-start h-max rounded-xl border border-gray-200 bg-white p-5"
          >
            <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-3">
              On this page
            </h2>
            <ol className="list-none p-0 m-0 space-y-1.5">
              {SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex gap-2 text-[13px] text-gray-800 hover:text-[rgb(var(--c-primary))] underline-offset-4 hover:underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-primary))]"
                  >
                    <span aria-hidden="true" className="font-mono text-[11px] text-gray-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
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
