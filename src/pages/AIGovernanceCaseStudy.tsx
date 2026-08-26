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

const CROSSWALK = [
  {
    control: "AI governance accountability & ownership",
    iso: "42001 §5.3 · A.3 roles",
    nist: "GOVERN 2.1 / 3.2",
    eu: "Art. 17 quality management system",
  },
  {
    control: "AI system inventory & risk classification",
    iso: "42001 A.4 · A.5 impact assessment",
    nist: "MAP 1.1–1.5",
    eu: "Art. 6 + Annex III classification",
  },
  {
    control: "Data governance & training-data quality",
    iso: "42001 A.7 data for AI systems",
    nist: "MAP 2.3 / MEASURE 2.8",
    eu: "Art. 10 data & data governance",
  },
  {
    control: "Technical documentation & model records",
    iso: "42001 A.6.2 system documentation",
    nist: "GOVERN 1.4 / MAP 4.1",
    eu: "Art. 11 + Annex IV technical documentation",
  },
  {
    control: "Transparency & user disclosure",
    iso: "42001 A.8 information for interested parties",
    nist: "MEASURE 2.9 / MANAGE 4.1",
    eu: "Art. 13 transparency · Art. 50 disclosure",
  },
  {
    control: "Human oversight & override",
    iso: "42001 A.9.2 human oversight",
    nist: "GOVERN 3.2 / MANAGE 2.3",
    eu: "Art. 14 human oversight",
  },
  {
    control: "Accuracy, robustness & security testing",
    iso: "42001 A.6.2.4 verification & validation",
    nist: "MEASURE 2.5–2.7",
    eu: "Art. 15 accuracy, robustness, cybersecurity",
  },
  {
    control: "Post-market monitoring & incident reporting",
    iso: "42001 §9 performance evaluation",
    nist: "MANAGE 4.1–4.3",
    eu: "Art. 72 monitoring · Art. 73 serious incidents",
  },
  {
    control: "Third-party / GPAI supply-chain assurance",
    iso: "42001 A.10 third-party relationships",
    nist: "GOVERN 6.1–6.2",
    eu: "Art. 25 value-chain · Art. 53 GPAI providers",
  },
  {
    control: "AI literacy & workforce training",
    iso: "42001 §7.2 competence",
    nist: "GOVERN 2.2 / 4.1",
    eu: "Art. 4 AI literacy",
  },
] as const;

const EU_TIERS = [
  ["Prohibited", "Social scoring, manipulative techniques, untargeted scraping for facial recognition, emotion inference at work or school. Screened out at intake — no design work proceeds."],
  ["High-risk (Annex III)", "Employment and worker management, credit and essential services, education, biometrics, critical infrastructure, healthcare adjacency. Triggers the full Art. 9–15 control set, conformity assessment, and registration."],
  ["Limited risk", "Chat, generative, and emotion-recognition surfaces where Art. 50 disclosure and synthetic-content marking apply. Governed primarily through interface controls."],
  ["Minimal risk", "Everything else. Voluntary controls, still inventoried and re-triaged on material change."],
] as const;

const EU_DUTIES = [
  { role: "As provider", items: ["Risk management system (Art. 9)", "Data governance (Art. 10)", "Technical documentation, Annex IV (Art. 11)", "Logging and traceability (Art. 12)", "Conformity assessment, CE marking, EU database registration"] },
  { role: "As deployer", items: ["Use per instructions and assign competent human oversight (Art. 26)", "Input-data relevance checks and log retention", "Fundamental Rights Impact Assessment where required (Art. 27)", "Worker and affected-person notification", "Serious-incident reporting to the provider and authority"] },
];

const REGISTRY_FIELDS = [
  ["Intake", "Requesting team, business purpose, intended and prohibited uses, affected populations, go-live target."],
  ["Classification", "EU AI Act tier, internal Model A/B/C oversight tier, autonomy level, data sensitivity, jurisdiction exposure."],
  ["Ownership", "Accountable executive, product owner, model owner, validator (2nd line), audit contact (3rd line)."],
  ["Lifecycle", "Status from proposed → in development → validated → deployed → monitored → retired, with material-change re-triage triggers."],
  ["Evidence", "Links to model card, evaluation results, FRIA/DPIA, red-team report, approval record, and monitoring dashboard."],
  ["Review cadence", "Next scheduled review, open findings, exceptions with expiry dates, and incident history."],
] as const;

const THIRD_PARTY = [
  ["Procurement questionnaire", "A standard AI addendum covering training-data provenance, evaluation results, fine-tuning rights, retention, sub-processors, and model-change notification."],
  ["Supply-chain classification", "Distinguish foundation-model provider, hosted API, embedded AI feature, and reseller — each carries different provider/deployer duties under Art. 25 and 53."],
  ["Contractual controls", "Right to audit, evaluation-evidence delivery, incident notification clocks, deprecation notice periods, and indemnity for IP and output claims."],
  ["Shadow-AI discovery", "Network and SaaS telemetry, expense review, and browser-extension inventory to surface unsanctioned tools, paired with an easy sanctioned path so discovery does not become punishment."],
  ["Continuous monitoring", "Re-attestation on model version change, quarterly vendor risk refresh, and a kill-switch runbook for provider incidents."],
] as const;

const LITERACY = [
  ["Baseline (all staff)", "What the policy covers, how to classify a use case, disclosure obligations, and where shadow AI creates exposure. Satisfies the EU AI Act Art. 4 literacy duty."],
  ["Practitioner (product, data, engineering)", "Control-by-control walkthroughs, evaluation expectations, documentation templates, and how to fail an intake gracefully."],
  ["Oversight (reviewers, risk, legal)", "How to challenge a model result, when to escalate, evidence sufficiency, and what regulators will ask for."],
  ["Executive & board", "Portfolio risk posture, exception trends, incident summaries, and the questions to ask before approving a high-risk launch."],
] as const;

const INCIDENT = [
  ["Taxonomy", "Harm-type classification: unsafe recommendation, bias or disparate impact, privacy leakage, hallucinated fact acted upon, prompt injection or jailbreak, agent action outside authority, availability or degradation."],
  ["Severity thresholds", "Sev-1 through Sev-4 defined by affected population, reversibility, regulatory exposure, and whether a human caught the error before impact."],
  ["Clocks", "Internal triage within hours, provider notification per contract, and regulator notification aligned to EU AI Act Art. 73 serious-incident timelines."],
  ["Post-market monitoring", "Drift, override-rate spikes, complaint signals, and evaluation regression tracked against pre-launch baselines rather than reviewed ad hoc."],
  ["Learning loop", "Every incident produces either a new control, a changed threshold, a training update, or a documented accepted risk — never a closed ticket alone."],
] as const;

const TOOLING = [
  ["AI governance platforms", "Credo AI, IBM watsonx.governance, Holistic AI — use-case registries, policy packs, and control attestation."],
  ["Privacy & GRC suites", "OneTrust, ServiceNow (Risk / AI Governance), Archer, Vanta, Drata — assessment workflows, control evidence, and continuous compliance."],
  ["Data & model catalogs", "Collibra, Alation, MLflow, model registries — lineage, ownership, and version traceability."],
  ["Evaluation & safety", "Red-team harnesses, guardrail services, bias and drift monitors, and eval pipelines wired into CI/CD."],
] as const;

const STATE_LAWS = [
  ["Colorado AI Act (SB 24-205)", "Duty of reasonable care for developers and deployers of high-risk AI in consequential decisions; impact assessments, disclosure, and AG notification."],
  ["Texas TRAIGA (HB 149)", "Intent-based prohibitions, government-use constraints, and a regulatory sandbox — relevant to public-sector and healthcare deployments."],
  ["NYC Local Law 144", "Annual bias audits and candidate notice for automated employment decision tools."],
  ["California (ADMT / SB 942 / CPPA rules)", "Automated decision-making technology access and opt-out rights, plus AI content-provenance disclosure."],
  ["Illinois, Utah, and sectoral rules", "Biometric and AI-video interview consent, generative-AI disclosure in regulated professions."],
] as const;

const AGENTIC = [
  ["Autonomy tiers", "Suggest → draft-with-approval → act-with-review → act-autonomously. Tier is assigned at intake and cannot be raised without re-review."],
  ["Tool-use permissioning", "Least-privilege scopes per tool, explicit allowlists for write and financial actions, and per-action spend or blast-radius caps."],
  ["Human-in-the-loop thresholds", "Named conditions — irreversibility, monetary value, protected-class impact, low confidence — that force a human decision before execution."],
  ["Agent audit trails", "Full trace of plan, tool calls, inputs, outputs, and the human who approved, retained as evidence and replayable during investigation."],
  ["Containment", "Session timeouts, loop detection, rollback paths, and a documented kill switch with a tested owner."],
] as const;

const PROGRAM_SCOPE = [
  ["24", "control statements in the reference library"],
  ["4", "oversight tiers from suggest to autonomous"],
  ["3", "regimes crosswalked to one control set"],
  ["10", "intake fields required before design starts"],
] as const;

const OUTCOMES = [
  "A reusable governance engagement model from intake and assessment through run-state operations",
  "A control library that connects policy language to product behavior, owners, tests, and evidence",
  "A three-regime crosswalk so one control set answers ISO/IEC 42001, NIST AI RMF, and EU AI Act reviewers",
  "An AI inventory and registry schema that makes portfolio risk reportable rather than anecdotal",
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

          <section aria-labelledby="aigc-crosswalk">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">05 · Framework crosswalk</p>
            <h2 id="aigc-crosswalk" className="font-display text-2xl font-extrabold text-gray-900 mb-3">One control set, three regimes.</h2>
            <p className="text-gray-700 leading-relaxed mb-6">ISO/IEC 42001, the NIST AI RMF, and the EU AI Act overlap heavily. Rather than running three parallel compliance efforts, I map a single control library to all three so one piece of evidence satisfies multiple reviewers. This is the artifact that shortens audits.</p>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <caption className="sr-only">Crosswalk of internal AI controls to ISO/IEC 42001, NIST AI RMF, and EU AI Act requirements</caption>
                <thead>
                  <tr className="bg-[rgb(var(--c-primary))] text-white">
                    <th scope="col" className="px-4 py-3 font-semibold">Control</th>
                    <th scope="col" className="px-4 py-3 font-semibold">ISO/IEC 42001</th>
                    <th scope="col" className="px-4 py-3 font-semibold">NIST AI RMF</th>
                    <th scope="col" className="px-4 py-3 font-semibold">EU AI Act</th>
                  </tr>
                </thead>
                <tbody>
                  {CROSSWALK.map((row, i) => (
                    <tr key={row.control} className={i % 2 ? "bg-[rgb(var(--c-tint-50))]" : "bg-white"}>
                      <th scope="row" className="px-4 py-3 align-top font-semibold text-gray-900">{row.control}</th>
                      <td className="px-4 py-3 align-top text-gray-700">{row.iso}</td>
                      <td className="px-4 py-3 align-top text-gray-700">{row.nist}</td>
                      <td className="px-4 py-3 align-top text-gray-700">{row.eu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="aigc-euaia">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">06 · EU AI Act readiness</p>
            <h2 id="aigc-euaia" className="font-display text-2xl font-extrabold text-gray-900 mb-3">Classification first, obligations second.</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Every use case is triaged into a risk class at intake, because the class determines the entire downstream obligation set. High-risk application dates land across 2026–27, so classification decisions made now determine whether a product ships or stalls.</p>
            <DefGrid items={EU_TIERS} />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {EU_DUTIES.map((d) => (
                <div key={d.role} className="rounded-lg border border-gray-200 bg-white p-5">
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-3">{d.role}</h3>
                  <ul className="space-y-2 list-none p-0 m-0">
                    {d.items.map((i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700 leading-relaxed"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--c-accent))]" />{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="aigc-registry">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">07 · Inventory &amp; registry</p>
            <h2 id="aigc-registry" className="font-display text-2xl font-extrabold text-gray-900 mb-3">You cannot govern what you have not inventoried.</h2>
            <p className="text-gray-700 leading-relaxed mb-6">The registry is the backbone of the program: intake creates the record, classification sets the obligations, and every later artifact links back to it. It is also what turns board reporting from anecdote into portfolio data.</p>
            <DefGrid items={REGISTRY_FIELDS} />
          </section>

          <section aria-labelledby="aigc-thirdparty">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">08 · Third-party &amp; shadow AI</p>
            <h2 id="aigc-thirdparty" className="font-display text-2xl font-extrabold text-gray-900 mb-3">Most AI risk now arrives through procurement.</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Organizations rarely train their own models. Risk enters through vendors, embedded AI features, and tools staff adopt without approval. Governing the supply chain and the unsanctioned edge is where run-state programs succeed or quietly fail.</p>
            <DefGrid items={THIRD_PARTY} />
          </section>

          <section aria-labelledby="aigc-literacy">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">09 · AI literacy &amp; enablement</p>
            <h2 id="aigc-literacy" className="font-display text-2xl font-extrabold text-gray-900 mb-3">Controls only hold if people understand them.</h2>
            <p className="text-gray-700 leading-relaxed mb-6">EU AI Act Article 4 makes AI literacy an explicit duty, and every governance program I have seen stall did so from a change-management failure rather than a technical one. Training is layered by decision authority, not delivered as one generic course.</p>
            <DefGrid items={LITERACY} />
          </section>

          <section aria-labelledby="aigc-incident">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">10 · Incidents &amp; post-market monitoring</p>
            <h2 id="aigc-incident" className="font-display text-2xl font-extrabold text-gray-900 mb-3">Launch is the start of the obligation, not the end.</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Post-market monitoring and serious-incident reporting are explicit regulatory duties. The workflow has to be defined before the first incident, with named owners, thresholds, and clocks that a regulator can inspect.</p>
            <DefGrid items={INCIDENT} />
          </section>

          <section aria-labelledby="aigc-state">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">11 · U.S. state patchwork</p>
            <h2 id="aigc-state" className="font-display text-2xl font-extrabold text-gray-900 mb-3">Federal posture is not the whole map.</h2>
            <p className="text-gray-700 instrumentation leading-relaxed mb-6">Alongside the 2025–26 federal framework and OMB M-25-21/22 for agency use, state law drives concrete product requirements. Multi-state deployers need the strictest-common-denominator control set rather than fifty variants.</p>
            <DefGrid items={STATE_LAWS} />
          </section>

          <section aria-labelledby="aigc-agentic">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">12 · Agentic AI governance</p>
            <h2 id="aigc-agentic" className="font-display text-2xl font-extrabold text-gray-900 mb-3">Autonomy is the new risk variable.</h2>
            <p className="text-gray-700 leading-relaxed mb-6">When a system can take action rather than recommend one, the governing question shifts from "is the output correct?" to "what is this system permitted to do, and who can stop it?" These controls are prototyped in the Sentinel concept.</p>
            <DefGrid items={AGENTIC} />
          </section>

          <section aria-labelledby="aigc-tooling">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">13 · Tooling</p>
            <h2 id="aigc-tooling" className="font-display text-2xl font-extrabold text-gray-900 mb-3">Platform-literate, platform-agnostic.</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Tooling should encode the operating model, not define it. I design the control set first, then evaluate which platform can carry the registry, assessments, evidence, and reporting with the least manual overhead.</p>
            <DefGrid items={TOOLING} />
          </section>

          <section aria-labelledby="aigc-scope">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">14 · Program scope</p>
            <h2 id="aigc-scope" className="font-display text-2xl font-extrabold text-gray-900 mb-4">Reference framework, by the numbers.</h2>
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PROGRAM_SCOPE.map(([n, label]) => (
                <div key={label} className="rounded-lg border border-gray-200 bg-[rgb(var(--c-tint-50))] p-5">
                  <dt className="sr-only">{label}</dt>
                  <dd>
                    <span className="block font-display text-3xl font-extrabold text-[rgb(var(--c-accent-on-light))]">{n}</span>
                    <span className="mt-1 block text-sm text-gray-700 leading-snug">{label}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-gray-600">These describe the size of the reference framework itself, not client outcomes.</p>
          </section>

          <section aria-labelledby="aigc-outcome">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">15 · Outcome</p>

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