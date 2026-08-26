import { Link } from "react-router-dom";

const RMF_WORK = [
  {
    name: "Govern",
    question: "Who owns the decision, the control, and the evidence?",
    detail:
      "Defined an intake model that classifies AI use cases by consequence and autonomy. Each tier names an accountable owner, required reviewers, approval gates, exception path, and evidence-retention rule before delivery begins.",
    evidence: ["RACI and three-lines-of-defense map", "Risk-tiered review path", "Policy-to-control traceability matrix"],
  },
  {
    name: "Map",
    question: "Where can the system, workflow, or organization cause harm?",
    detail:
      "Mapped the full decision journey rather than evaluating the model in isolation. The analysis connected affected people, intended use, foreseeable misuse, data sensitivity, accessibility barriers, and downstream operational consequences.",
    evidence: ["AI system and stakeholder inventory", "Use-error and harm map", "Context and impact assessment"],
  },
  {
    name: "Measure",
    question: "How do we know the controls work under real conditions?",
    detail:
      "Turned control intent into testable acceptance criteria. Evaluations cover task success, calibration, bias and accessibility, override behavior, red-team scenarios, and whether users detect unsafe recommendations instead of merely accepting them.",
    evidence: ["Control-effectiveness test plan", "TEVV and red-team scenarios", "Decision-quality and override measures"],
  },
  {
    name: "Manage",
    question: "How does governance continue after launch?",
    detail:
      "Designed run-state monitoring around material change, incidents, drift, recurring overrides, and unresolved findings. Escalation thresholds connect product telemetry to named owners and produce evidence as a normal byproduct of operation.",
    evidence: ["Monitoring and escalation playbook", "Incident and exception workflow", "Audit-ready evidence package"],
  },
] as const;

const CONTROLS = [
  ["Disclosure", "State when AI produced or materially influenced an output at the moment of use."],
  ["Uncertainty", "Express confidence in decision-relevant language without implying false precision."],
  ["Explanation", "Show the basis, limits, and source evidence needed to accept or challenge a result."],
  ["Override", "Make disagreement as efficient as agreement and preserve the reason for review."],
  ["Escalation", "Stop or hand off when defined risk conditions exceed the system’s authority."],
  ["Accessibility", "Require every oversight path to remain operable across assistive technologies."],
] as const;

const OUTCOMES = [
  "A reusable governance engagement model from intake and assessment through run-state operations",
  "A control library that connects policy language to product behavior, owners, tests, and evidence",
  "A shared vocabulary for product, engineering, legal, privacy, security, risk, and audit teams",
  "An interview-ready, NDA-safe demonstration of how governance becomes an operating system—not a document",
] as const;

export default function AIGovernanceCaseStudy({ onHome }: { onHome: () => void }) {
  return (
    <div>
      <header className="relative overflow-hidden bg-gradient-to-br from-[rgb(var(--c-hero-dark))] via-[rgb(var(--c-primary))] to-[rgb(var(--c-accent))] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2.5rem,5vw,4.5rem)]">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/85">
              <li>
                <button onClick={onHome} className="inline-flex items-center min-h-[44px] rounded px-1 underline underline-offset-4 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-accent-light))]">
                  Home
                </button>
              </li>
              <li aria-hidden="true">/</li>
              <li><span aria-current="page" className="font-medium text-white">AI Governance case study</span></li>
            </ol>
          </nav>
          <p className="text-[rgb(var(--c-accent-on-dark))] text-xs font-semibold tracking-[2px] uppercase mb-3">
            In-house governance framework · NDA-safe synthesis
          </p>
          <h1 className="max-w-4xl text-3xl sm:text-5xl font-extrabold leading-tight mb-5">
            Designing the Last Mile of AI Governance
          </h1>
          <p className="max-w-3xl text-white/90 text-base sm:text-lg leading-relaxed mb-8">
            A practical operating model that translates NIST AI RMF obligations into product controls,
            review gates, evaluation criteria, and evidence teams can use throughout the AI lifecycle.
          </p>
          <dl className="grid max-w-4xl gap-5 sm:grid-cols-3 text-sm">
            <div><dt className="text-white/80">Role</dt><dd className="font-semibold mt-1">AI Governance &amp; Experience Design Lead</dd></div>
            <div><dt className="text-white/80">Format</dt><dd className="font-semibold mt-1">Self-initiated framework synthesis</dd></div>
            <div><dt className="text-white/80">Frameworks</dt><dd className="font-semibold mt-1">NIST AI RMF · ISO/IEC 42001 · WCAG 2.2</dd></div>
          </dl>
        </div>
      </header>

      <div className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2.5rem,5vw,4.5rem)]">
        <div className="max-w-4xl space-y-14">
          <section aria-labelledby="aigc-problem">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">01 · Problem</p>
            <h2 id="aigc-problem" className="font-display text-2xl font-extrabold text-gray-900 mb-4">Policy was not reaching the point of decision.</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Governance programs often produce policies, inventories, and review boards while leaving the product team to interpret what those requirements mean inside a workflow. The gap appears at the exact moment risk becomes real: when a person receives, approves, corrects, or acts on an AI output.</p>
              <p>The design challenge was to create a repeatable bridge between enterprise obligations and delivery behavior—without turning every release into a bespoke compliance exercise or reducing oversight to a checkbox.</p>
            </div>
          </section>

          <section aria-labelledby="aigc-context">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">02 · Context</p>
            <h2 id="aigc-context" className="font-display text-2xl font-extrabold text-gray-900 mb-4">Grounded in regulated delivery, presented as an honest synthesis.</h2>
            <p className="text-gray-700 leading-relaxed mb-5">This in-house case study synthesizes patterns from federal accessibility governance, safety-critical healthcare human factors, financial-services risk work, and the TrustLens product concept. It does not represent a single client engagement. Client-sensitive details are intentionally excluded; the operating decisions, artifacts, and control logic are recreated to show how I would lead the work.</p>
            <ul className="grid gap-3 sm:grid-cols-2 list-none p-0 m-0">
              {["18+ years in regulated product environments", "7+ years leading compliance, risk, and advisory programs", "$130M federal program portfolio leadership", "Cross-functional teams scaled to 15+"].map((item) => (
                <li key={item} className="border-l-2 border-[rgb(var(--c-accent))] bg-[rgb(var(--c-tint-50))] px-4 py-3 text-sm font-semibold text-gray-800">{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="aigc-approach">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">03 · Approach</p>
            <h2 id="aigc-approach" className="font-display text-2xl font-extrabold text-gray-900 mb-6">NIST AI RMF as a delivery loop</h2>
            <ol className="grid gap-4 list-none p-0 m-0">
              {RMF_WORK.map((item, index) => (
                <li key={item.name} className="rounded-lg border border-gray-200 bg-white p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[rgb(var(--c-primary))] text-white text-sm font-bold">{index + 1}</span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-gray-900">{item.name}</h3>
                      <p className="text-sm font-semibold text-[rgb(var(--c-accent-on-light))] mt-1 mb-2">{item.question}</p>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">{item.detail}</p>
                      <ul className="flex flex-wrap gap-2 list-none p-0 m-0" aria-label={`${item.name} artifacts`}>
                        {item.evidence.map((evidence) => <li key={evidence} className="rounded-full border border-gray-200 bg-[rgb(var(--c-tint-50))] px-3 py-1 text-[11px] font-semibold text-gray-700">{evidence}</li>)}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="aigc-controls">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">04 · Control design</p>
            <h2 id="aigc-controls" className="font-display text-2xl font-extrabold text-gray-900 mb-3">Controls become interface behavior.</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Each control is specified as a user-visible behavior, an accountable owner, a test, and retained evidence. That structure makes control effectiveness reviewable by design, engineering, risk, and audit.</p>
            <dl className="grid gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200 sm:grid-cols-2">
              {CONTROLS.map(([term, description]) => (
                <div key={term} className="bg-white p-5"><dt className="font-bold text-gray-900 mb-1">{term}</dt><dd className="text-sm text-gray-700 leading-relaxed">{description}</dd></div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="aigc-outcome">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">05 · Outcome</p>
            <h2 id="aigc-outcome" className="font-display text-2xl font-extrabold text-gray-900 mb-4">A governance system teams can operate.</h2>
            <ul className="space-y-3 list-none p-0 m-0">
              {OUTCOMES.map((outcome) => <li key={outcome} className="flex gap-3 text-gray-700 leading-relaxed"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[rgb(var(--c-accent))]" />{outcome}</li>)}
            </ul>
            <p className="mt-5 text-sm text-gray-600">Because this is a framework synthesis rather than a single production engagement, no invented performance metrics are presented. Target measures would be established during discovery and validated in operation.</p>
          </section>

          <section aria-labelledby="aigc-demonstrates" className="rounded-lg bg-[rgb(var(--c-primary))] p-6 sm:p-8 text-white">
            <h2 id="aigc-demonstrates" className="font-display text-2xl font-extrabold mb-3">What this demonstrates</h2>
            <p className="text-white/90 leading-relaxed mb-5">The work connects governance strategy, human factors, experience design, technical delivery, and assurance. It shows how I lead across executives, product, engineering, legal, privacy, security, model risk, and audit while keeping the control usable at the point of work.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/work/trustlens" className="inline-flex min-h-[44px] items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-[rgb(var(--c-primary))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-accent-light))]">See TrustLens product detail →</Link>
              <button onClick={onHome} className="inline-flex min-h-[44px] items-center rounded-md border border-white/50 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-accent-light))]">Back to AI Governance</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}