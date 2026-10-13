export type CaseStory = {
  status: string;
  audience: string;
  problem: string;
  before: [string, string, string];
  after: [string, string, string];
  system: [string, string, string, string, string];
  decision: string;
  rejected: string;
  chosen: string;
  safeguard: string;
  evidence: string;
};

export const CASE_STORIES: Record<string, CaseStory> = {
  ssa: {
    status: "Federal delivery · reported program outcomes", audience: "Caseworkers, developers, QA, and accessibility reviewers",
    problem: "Repeated component defects made release-by-release audits an expensive way to solve the wrong problem.",
    before: ["Release candidate arrives", "Reviewers repeat manual checks", "Teams patch duplicate screen defects"],
    after: ["Check the release pipeline", "Route uncertain findings to experts", "Fix the shared component once"],
    system: ["Release candidate", "DOM + component inventory", "AI-assisted validation", "Expert triage + release gate", "Source fix + audit record"],
    decision: "More audits or prevention at the source?", rejected: "Scale manual audits as release volume grows.", chosen: "Embed validation and component attribution in the delivery workflow.", safeguard: "Context-dependent findings stay with human reviewers; overrides feed rule tuning.",
    evidence: "Program-reported operational results, not a controlled experiment. Concurrent process changes prevent attributing all improvement to AI alone.",
  },
  ge: {
    status: "Enterprise healthcare delivery · adoption evidence", audience: "Clinicians, product engineers, and clinical/regulatory reviewers",
    problem: "Inconsistent interactions across product teams added cognitive load to already high-pressure clinical work.",
    before: ["Clinician changes products", "Controls and alerts behave differently", "Each team re-solves the same risk"],
    after: ["Use shared interaction contracts", "Reveal rationale when needed", "Apply consistent oversight across teams"],
    system: ["Clinical workflow", "Human-performance requirements", "Shared tokens + components", "Clinical sign-off + change control", "Adoption + oversight telemetry"],
    decision: "Fast responses or defensible clinical decisions?", rejected: "Remove explanation to optimize response speed.", chosen: "Show the recommendation immediately with on-demand rationale.", safeguard: "Clinical sign-off and meaningful checkpoints remain part of the release path.",
    evidence: "Counts describe shared-system adoption and stakeholder alignment, not independently measured clinical efficacy.",
  },
  bestbuy: {
    status: "Consumer health delivery · reported program outcomes", audience: "Older adults, caregivers, and support teams",
    problem: "Safety-related tasks needed to work for people with reduced dexterity, vision, and working memory.",
    before: ["Recognize a health or safety need", "Navigate unfamiliar controls", "Recover from uncertainty or errors"],
    after: ["Recognize a clear next action", "Use consistent accessible patterns", "Recover with understandable feedback"],
    system: ["Everyday user task", "Human-factors constraints", "Accessible interaction patterns", "Usability + engineering validation", "Production experience"],
    decision: "More features or fewer opportunities for use error?", rejected: "Treat functional completeness as sufficient evidence of usability.", chosen: "Translate human-performance constraints into simpler task flows and reusable patterns.", safeguard: "Validate critical tasks with accessibility and human-factors review, not visual polish alone.",
    evidence: "Reported outcomes belong to the broader program; the case narrative identifies the human-factors and HSI contribution.",
  },
  samhsa: {
    status: "Federal program leadership · reported portfolio outcomes", audience: "People seeking treatment, state data submitters, and federal stakeholders",
    problem: "Fragmented platforms, late accessibility fixes, and competing priorities consumed delivery capacity.",
    before: ["State submits inconsistent data", "Legacy teams repair and reconcile", "Public reporting waits on rework"],
    after: ["Validate submissions at ingestion", "Quarantine errors with traceability", "Publish accessible national reporting"],
    system: ["State submissions", "Validated ETL", "AWS GovCloud data layer", "Reporting parity + 508 gates", "Accessible public dashboards"],
    decision: "Immediate replacement or a safe migration?", rejected: "Switch off legacy reporting before proving the replacement.", chosen: "Run in parallel until reporting parity is established, then cut over.", safeguard: "ATO boundaries, Section 508 obligations, and immovable submission windows constrain delivery.",
    evidence: "Portfolio value and audience size indicate scale. Cost and rework figures are reported program results, not isolated AI performance claims.",
  },
  wcagtool: {
    status: "In-house public tool · stated feature coverage", audience: "Developers, content owners, and accessibility practitioners",
    problem: "A list of violations does not tell a busy team what to fix or how to fix it.",
    before: ["Scan a page", "Receive a flat defect list", "Research each remediation separately"],
    after: ["Submit a URL or HTML", "Inspect rule-linked before/after fixes", "Follow an impact-weighted roadmap"],
    system: ["URL or pasted HTML", "DOM normalization", "Rule checks + AI suggestions", "Human verification", "Prioritized fixes + evidence"],
    decision: "Detection volume or actionable remediation?", rejected: "Present every issue as an equally urgent defect.", chosen: "Pair each finding with a rule reference, code correction, and remediation priority.", safeguard: "Automated coverage is not a full conformance audit; manual checks and assistive-technology testing remain necessary.",
    evidence: "28 criteria describes stated automated coverage. It is not proof that a scanned site fully conforms to all WCAG 2.2 AAA requirements.",
  },
  trustlens: {
    status: "In-house concept · illustrative operating model", audience: "Model owners, risk/legal reviewers, and auditors",
    problem: "Governance evidence scattered across tools makes accountable launch decisions difficult.",
    before: ["Collect documents across teams", "Interpret risk without shared context", "Reconstruct approvals for audit"],
    after: ["Register the model and owner", "Review risks against lifecycle controls", "Keep decisions linked to evidence"],
    system: ["AI inventory", "Risk classification", "Lifecycle control checks", "Owner review + exceptions", "Evidence and monitoring"],
    decision: "A compliance score or a defensible decision?", rejected: "Use a single score as a substitute for accountability.", chosen: "Connect risk, control status, responsible owners, and source evidence.", safeguard: "Approval and exception paths remain attributable to named human owners.",
    evidence: "Concept scenarios and portfolio figures are not verified client deployment results. Independent validation and adoption evidence are not supplied.",
  },
  clinicalai: {
    status: "In-house concept · illustrative clinical workflow", audience: "Clinicians, clinical safety reviewers, and AI teams",
    problem: "A recommendation without its basis can encourage overreliance or outright rejection.",
    before: ["Receive an AI recommendation", "Infer what the score means", "Accept or reject without enough context"],
    after: ["See the recommendation and limits", "Inspect rationale and supporting evidence", "Confirm, override, or escalate"],
    system: ["Clinical context", "AI recommendation", "Explanation + uncertainty", "Clinician decision", "Override + safety evidence"],
    decision: "Maximum automation or appropriate reliance?", rejected: "Make the AI recommendation the default clinical decision.", chosen: "Keep the clinician's judgment central with explanation and override at the point of use.", safeguard: "The illustration is not a clinical recommendation or evidence of safety validation.",
    evidence: "Concept demonstration only. No clinical efficacy, deployment, or patient-outcome claim is established by these reconstructed visuals.",
  },
  sentinel: {
    status: "In-house concept · illustrative agent-safety workflow", audience: "Red-teamers, security reviewers, and AI engineers",
    problem: "Agent actions need observable boundaries and review paths, not just optimistic model behavior.",
    before: ["Agent receives an instruction", "Unsafe behavior is hard to trace", "Teams investigate after the action"],
    after: ["Scope intent and permissions", "Check guardrails and adversarial tests", "Contain, review, and trace exceptions"],
    system: ["Agent intent", "Permission + guardrail checks", "Red-team evaluation", "Human escalation", "Trace + containment"],
    decision: "Block everything or make risk review actionable?", rejected: "Treat every warning as equally urgent.", chosen: "Surface the rule, trace, and severity needed to investigate the exception.", safeguard: "Human escalation and containment remain explicit parts of the proposed workflow.",
    evidence: "Safety-console concept, not proof of deployment or independently tested jailbreak resistance. Example outcomes require validation.",
  },
  lumen: {
    status: "In-house concept · illustrative knowledge workflow", audience: "Knowledge workers, subject-matter experts, and content owners",
    problem: "A fluent answer can appear trustworthy even when its sources do not support it.",
    before: ["Ask a knowledge question", "Read a plausible answer", "Search manually for corroboration"],
    after: ["Retrieve relevant source passages", "Inspect answer-to-source links", "Verify, correct, or withhold the answer"],
    system: ["User query", "Enterprise retrieval", "Grounded answer", "Citation + source inspection", "Correction feedback"],
    decision: "Fluency or verifiability?", rejected: "Hide provenance behind a confident, polished response.", chosen: "Keep supporting passages and uncertainty visible where the answer is used.", safeguard: "A citation does not guarantee truth; source relevance and answer support still need review.",
    evidence: "Illustrative retrieval experience, not verified enterprise adoption or an independently benchmarked reduction in hallucination.",
  },
  revcycle: {
    status: "In-house concept · estimated benefits", audience: "Coders, billers, and denial specialists",
    problem: "Disconnected coding, billing, and denial workflows force specialists to re-read and rework the same claim.",
    before: ["Read the chart manually", "Submit and discover denial risk", "Rework rejected claims individually"],
    after: ["Review source-linked code suggestions", "Inspect risk before submission", "Resolve denial patterns together"],
    system: ["Clinical documentation", "Source-linked coding suggestions", "Denial-risk review", "Human approval", "Claim + remittance + audit trail"],
    decision: "Straight-through coding or financial accountability?", rejected: "Silently auto-submit AI-generated billing codes.", chosen: "Provide a fast review-and-confirm path with accept, modify, and reject decisions.", safeguard: "Every dollar-affecting action remains human-controlled and attributable.",
    evidence: "The ~40% effort reduction is an estimate, not an observed production result. Source traceability is a concept requirement, not a verified audit statistic.",
  },
  governance: {
    status: "Self-initiated framework synthesis · not a single client engagement", audience: "Product, engineering, risk, legal, privacy, and audit teams",
    problem: "Policies were not specifying what should happen when a person acts on an AI output.",
    before: ["Publish a policy", "Teams interpret it independently", "Collect evidence after decisions"],
    after: ["Assign risk and accountable owners", "Turn obligations into product controls", "Capture evidence during operation"],
    system: ["Govern: ownership", "Map: impact and context", "Measure: control tests", "Manage: monitoring + response", "Evidence feeds reassessment"],
    decision: "A policy document or an operating model?", rejected: "Treat a review board and inventory as sufficient governance.", chosen: "Link each obligation to a control, owner, test, exception path, and evidence record.", safeguard: "Framework mappings are a reference synthesis, not legal advice or certification.",
    evidence: "Program-scope counts describe reference artifacts. They do not establish client adoption, regulatory approval, or certified conformance.",
  },
};