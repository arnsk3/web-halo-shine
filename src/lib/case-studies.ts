/* Case-study content data, extracted from Index.tsx. */
import caseWcagtool from "@/assets/case-wcagtool.jpg";
import caseGe from "@/assets/case-ge.jpg";
import caseSsa from "@/assets/case-ssa.jpg";
import caseBestbuy from "@/assets/case-bestbuy.jpg";
import caseSamhsa from "@/assets/case-samhsa.jpg";
import caseTrustlens from "@/assets/case-trustlens.jpg";
import caseClinicalAi from "@/assets/case-clinicalai.jpg";
import caseSentinel from "@/assets/case-sentinel.jpg";
import caseLumen from "@/assets/case-lumen.jpg";
import caseRevcycle from "@/assets/case-revcycle.jpg";

export type Metric = { value: string; label: string };
export type Section = { heading: string; content: string };
export type CaseStudyType = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  hero: string;
  image?: string;
  role: string;
  timeline: string;
  org: string;
  standards: string[];
  metrics: Metric[];
  sections: Section[];
  outcomes: string[];
  artifacts?: { label: string; desc: string }[];
  hsi: string[];
  liveUrl?: string;
  liveLabel?: string;
};

export const CASE_STUDIES: CaseStudyType[] = [
  {
    id: "wcagtool",
    tag: "In-House Product · WCAG 2.2 AAA · Accessibility",
    title: "WCAG AI Remediation Suite — Engine Checking A–AAA Criteria, with AI Suggestions, Visual Cues & Fixes",
    subtitle:
      "Designed and built a standalone (self-directed) accessibility remediation tool that scans any URL or pasted HTML against 28 WCAG 2.2 criteria and returns visual code fixes, before/after examples, and a prioritized roadmap.",
    hero: "from-[rgb(var(--c-hero-mid))] via-[rgb(var(--c-primary))] to-[rgb(var(--c-accent))]",
    image: caseWcagtool,
    role: "Product Owner · Accessibility Architect · Builder",
    timeline: "2025 – Present",
    org: "BrainPulse (In-House)",
    standards: ["WCAG 2.2 A/AA/AAA", "Section 508", "ARIA", "WCAG-EM", "HTML5"],
    liveUrl: "https://www.brainpulseinc.com/wcag-tool.html",
    liveLabel: "Launch the live tool",
    metrics: [
      { value: "28", label: "WCAG Criteria" },
      { value: "AAA", label: "Design target (not assessed)" },
      { value: "3", label: "Conformance Tiers" },
    ],
    sections: [
      {
        heading: "Why I Built It",
        content:
          "Most accessibility scanners stop at flagging violations — they tell teams what's broken but not how to fix it, and almost none push past WCAG 2.2 AA into AAA. After years of running federal accessibility programs, I kept seeing the same gap: audits produced long defect lists that overwhelmed teams and stalled remediation. I built this in-house tool to close that loop — turn detection into guided, prioritized remediation that any engineer or content owner can act on immediately.",
      },
      {
        heading: "What It Does",
        content:
          "The tool accepts either a live URL or pasted HTML and evaluates it against 28 WCAG 2.2 success criteria spanning all four principles — Perceivable, Operable, Understandable, and Robust — across conformance levels A, AA, and AAA. For each finding it returns the exact rule reference, the offending markup, a corrected code snippet, and a side-by-side before/after example so the fix is unambiguous.",
      },
      {
        heading: "AAA by Design",
        content:
          "Reaching AAA is the hard part — most tools and most products never attempt it. The engine codifies AAA-specific checks (enhanced contrast, context-sensitive help, reading level, no timing constraints, and richer error prevention) and the tool's own interface is itself built to AAA: full keyboard operability, visible focus, high-contrast theming, and screen-reader-first semantics. It practices what it audits.",
      },
      {
        heading: "Prioritized Remediation Roadmap",
        content:
          "Instead of a flat defect dump, results are ranked into a remediation roadmap weighted by user impact, conformance level, and fix effort. Teams get a clear sequence — what to fix first for the largest accessibility and legal-risk reduction — turning an intimidating audit into a tractable backlog.",
      },
      {
        heading: "Architecture & Approach",
        content:
          "Built as a self-contained, dependency-light tool so it can run anywhere without a heavy install or backend lock-in. The rule set is structured for extensibility — new criteria and heuristics plug in cleanly as WCAG evolves — and every check maps directly back to its normative success criterion, so output doubles as auditable evidence for Section 508 and WCAG-EM reporting.",
      },
      {
        heading: "UI Architecture & React Engineering",
        content:
          "I architected and wrote the front end myself in React + TypeScript, structured as a library of reusable, composable components driven by a single semantic design-token layer. State is managed with React Context and predictable reducer patterns so scan results, filters, and the remediation roadmap stay in sync without prop-drilling. The build runs on Vite (Webpack/Babel-equivalent tooling) with code-splitting and lazy loading for performance, REST integration for live URL scans, and Git-based workflows with documented coding standards and component guidelines so the codebase scales cleanly as new criteria are added.",
      },
      {
        heading: "System Design & Deployment Layer",
        content:
          "Shipped in production as a public, self-serve tool. Architecture: a stateless scan API accepts a live URL or pasted HTML, a fetch/parse layer normalizes the DOM, a deterministic rule engine evaluates 28 WCAG 2.2 criteria, and an LLM-assisted suggestion layer generates the corrected markup for findings rules cannot auto-fix. Rules are versioned data, not code, so new criteria deploy without a rebuild. The front end is a Vite build with code-splitting, deployed as static assets behind a CDN; scans run client-callable with no backend lock-in. Every finding carries its normative rule reference so output doubles as Section 508 / WCAG-EM audit evidence.",
      },
    ],
    outcomes: [
      "Standalone tool designed to AAA contrast and keyboard targets — not formally assessed for conformance",
      "28 success criteria covered across A, AA, and AAA in a single pass",
      "Reusable React + TypeScript component architecture on a single token layer — scalable and themeable",
      "Context-based state management keeps scans, filters, and roadmap in sync without prop-drilling",
      "Vite build with code-splitting and lazy loading for fast, high-performance UI",
      "Converts raw audits into prioritized, effort-weighted remediation roadmaps",
      "Visual before/after code fixes make remediation actionable for any engineer",
      "Output maps to Section 508 and WCAG-EM evidence requirements",
    ],
    hsi: [
      "Human Performance — designed for assistive-technology users first, validated with keyboard and screen-reader workflows",
      "Section 508 / WCAG 2.2 — every check traces to a normative success criterion",
      "Error Prevention — guided fixes reduce remediation rework and reintroduced defects",
    ],
  },
  {
    id: "trustlens",
    tag: "In-House AI Product · NIST AI RMF · EU AI Act · Governance",
    title: "TrustLens — AI Governance & Model-Risk Command Center",
    subtitle:
      "Conceived and built an in-house AI governance platform that gives Chief AI Officers a single pane of glass to monitor model risk, fairness, drift, and human-oversight decisions — turning abstract AI regulation into audit-ready, real-time evidence.",
    hero: "from-[rgb(var(--c-hero-mid))] via-[rgb(var(--c-primary))] to-[rgb(var(--c-accent))]",
    image: caseTrustlens,
    role: "AI Product Owner · Governance Architect · Frontend Engineer",
    timeline: "2024 – Present",
    org: "BrainPulse (In-House Product)",
    standards: ["NIST AI RMF", "EU AI Act", "ISO/IEC 42001", "WCAG 2.2 AA", "TEVV"],
    metrics: [
      { value: "8+", label: "Models Governed" },
      { value: "4", label: "Risk Tiers" },
      { value: "70%", label: "Faster Audit Prep" },
    ],
    sections: [
      {
        heading: "Why I Built It",
        content:
          "AI is being deployed faster than organizations can govern it. Teams ship models with no shared risk language, no oversight controls for high-stakes decisions, and no evidence trail when a regulator, board, or auditor comes asking. I built TrustLens to make AI governance operational rather than aspirational — a product that translates NIST AI RMF, the EU AI Act, and ISO/IEC 42001 into living dashboards instead of static PDFs.",
      },
      {
        heading: "My Role",
        content:
          "I owned this product end-to-end: the governance framework, the information architecture, the visual design system, and the React + TypeScript front-end build. I defined the risk-tiering taxonomy, designed the human-oversight interaction models, built the reusable data-visualization component library, and shaped how compliance evidence is captured as a byproduct of everyday use. I worked the way I would embedded with a Chief AI Officer's team — translating regulation into screens stakeholders actually adopt.",
      },
      {
        heading: "Coordinating Across Functions",
        content:
          "I ran governance as a cross-functional program, not a design exercise: privacy owned data-handling review, security owned model-access and prompt-injection controls, risk & compliance owned the control taxonomy and acceptance criteria, legal validated the regulatory mappings, and engineering owned the telemetry and evidence pipelines. I chaired the weekly governance cadence, kept a single decision log every function could trust, and translated between vocabularies — so a control specified by risk actually shipped in engineering's sprint and stood up to legal's read of the regulation.",
      },
      {
        heading: "What It Does",
        content:
          "TrustLens ingests metadata from every AI/ML model an organization runs and renders a unified governance picture: model cards with training-data provenance and known limitations, fairness and bias panels, confidence-score distributions, and a TEVV reporting suite with drift detection and performance-degradation alerts. A risk-tiering engine classifies each model as Critical, High, Medium, or Low and routes high-risk decisions into configurable human-in-the-loop approval gates with override capture and full audit logging.",
      },
      {
        heading: "AI Safety by Design",
        content:
          "The product encodes the recommend / act / alert interaction model directly into the UI, with explicit confidence thresholds and graceful-degradation states for when a model is uncertain or offline. Every AI-assisted decision is legible and reversible: clinicians, examiners, or operators can see why a model recommended an action, challenge it, and capture their override reasoning — making oversight meaningful instead of a rubber stamp.",
      },
      {
        heading: "The Hardest Decisions",
        content:
          "Signal vs. noise: governance dashboards die when they fire too many alerts, so I tuned drift and bias thresholds to surface only material changes and routed the rest to a digest — keeping examiner attention where risk actually lives. Transparency vs. overwhelm: leadership wanted every metric on one screen; I pushed back and designed progressive disclosure — a calm executive overview that drills into deep TEVV evidence on demand. Speed vs. accountability: rather than auto-approving low-risk models to move faster, I made the approval gate one click but always logged — accountability without friction.",
      },
      {
        heading: "Impact & Adoption",
        content:
          "By generating compliance evidence as a byproduct of normal monitoring, TrustLens cut the manual effort of assembling NIST AI RMF and EU AI Act audit packages by an estimated 70% — turning a multi-week fire drill into an export. The single-pane-of-glass overview drove cross-team adoption because each stakeholder — risk, legal, engineering, leadership — sees the same source of truth, replacing scattered spreadsheets and one-off model reviews with a shared operating picture.",
      },
      {
        heading: "UI Architecture & React Engineering",
        content:
          "I architected and wrote the front end in React + TypeScript as a library of reusable, accessible data-visualization components — risk gauges, fairness charts, model cards, and audit timelines — driven by a single semantic design-token layer. Predictable state management keeps model status, filters, and oversight queues in sync across views, and the Vite build uses code-splitting and lazy loading so dense, data-heavy dashboards stay fast. Every chart is colorblind-safe and validated to WCAG 2.2 AA.",
      },
      {
        heading: "System Design & Deployment Layer",
        content:
          "Built as a control plane over existing ML infrastructure rather than a replacement for it. Model metadata, evaluation runs, and inference telemetry are ingested through a registry API and event stream; a risk-classification service tiers each model and binds the required controls; an evidence store holds lineage, approvals, and override records as append-only records for audit. Approval gates are exposed as webhooks so the existing MLOps pipeline can block a promotion instead of a human remembering to. Deployment is embedded with the teams that own the models — governance runs inside their CI/CD and release process, and compliance packages export straight from the evidence store rather than being assembled by hand.",
      },
    ],
    outcomes: [
      "Single-pane-of-glass governance across 8+ AI models with real-time health monitoring",
      "Cut audit-package preparation effort an estimated 70% by generating evidence as a byproduct of use",
      "Risk-tiering engine with automated escalation and human-override controls for high-stakes decisions",
      "TEVV suite with drift detection, bias monitoring, and performance-degradation alerts",
      "Audit-ready NIST AI RMF and EU AI Act evidence packages generated on demand",
      "AI Bill of Materials generator for model supply-chain transparency",
      "Drove cross-team adoption by giving risk, legal, engineering, and leadership one shared source of truth",
      "Reusable, colorblind-safe React + TypeScript visualization component library",
      "Human-in-the-loop oversight patterns make every AI decision legible and reversible",
    ],
    artifacts: [
      { label: "Model card component system", desc: "Interactive cards showing data provenance, performance benchmarks, fairness metrics, and known limitations." },
      { label: "Risk-tiering & escalation engine", desc: "Visual classification of models into Critical/High/Medium/Low with automated oversight routing." },
      { label: "TEVV monitoring dashboard", desc: "Drift, bias, and degradation panels with threshold-based alerting and digest grouping." },
      { label: "Executive overview & drill-down", desc: "Progressive-disclosure layout — a calm leadership summary that expands into deep evidence on demand." },
      { label: "Compliance evidence exporter", desc: "One-click NIST AI RMF / EU AI Act packages and AI Bill of Materials output." },
    ],
    hsi: [
      "AI safety & trust calibration — recommend/act/alert model with explicit confidence and oversight",
      "Human-in-the-loop control — approval gates, overrides, and audit capture for high-risk decisions",
      "NIST AI RMF / EU AI Act / ISO 42001 — governance encoded as living, auditable UI",
      "Accessible data visualization — colorblind-safe, WCAG 2.2 AA dashboards under cognitive load",
    ],
  },
  {
    id: "clinicalai",
    tag: "In-House AI Product · Clinical Decision-Support · Explainable AI",
    title: "Clarity — Explainable Clinical AI Decision-Support",
    subtitle:
      "Designed and prototyped an AI clinical decision-support product where getting it wrong isn't an option — surfacing model recommendations with confidence, evidence, and a human-in-the-loop override path so clinicians stay meaningfully in control.",
    hero: "from-[rgb(var(--c-primary))] via-[rgb(var(--c-hero-mid))] to-[rgb(var(--c-accent))]",
    image: caseClinicalAi,
    role: "AI Product Designer · Human-AI Interaction Architect · Builder",
    timeline: "2024 – Present",
    org: "BrainPulse (In-House Product)",
    standards: ["FDA / IEC 62366", "ISO 14971", "NIST AI RMF", "WCAG 2.2 AA"],
    metrics: [
      { value: "3", label: "Oversight Tiers" },
      { value: "100%", label: "Decisions Auditable" },
      { value: "AAA", label: "Contrast Targets" },
    ],
    sections: [
      {
        heading: "Why I Built It",
        content:
          "Clinical AI fails not when the model is wrong, but when the interface hides how confident it is, why it recommended something, or who is accountable for acting on it. After years designing safety-critical systems, I built Clarity to prove that AI decision-support can be powerful and safe at the same time — by treating explainability, confidence, and human oversight as primary UI, not footnotes.",
      },
      {
        heading: "My Role",
        content:
          "I led design and built the working prototype: the human-AI interaction model, the explainability and confidence patterns, the accessible component system, and the React + TypeScript front end. I ran the failure-mode analysis, defined the graded oversight tiers, and designed the override-capture flow that turns clinician disagreement into auditable, model-improving signal — the way I'd partner with a clinical and regulatory team to ship something both safe and usable.",
      },
      {
        heading: "What It Does",
        content:
          "Clarity presents an AI recommendation alongside a patient summary, a plain-language rationale, the evidence behind it, and a calibrated confidence score. Clinicians can accept, modify, or reject the recommendation, and every action — especially overrides — is captured with reasoning for the audit trail. High-uncertainty cases are visually flagged and escalated rather than silently auto-acted.",
      },
      {
        heading: "Designing for Failure Modes",
        content:
          "I mapped the failure modes most teams ignore — automation bias, alert fatigue, silent model drift, and ambiguous accountability — and designed safe-state behaviors for each. The product uses graded oversight tiers (Model A recommends, B acts with confirmation, C alerts only), so the level of human control scales with clinical risk and matches FDA / IEC 62366 usability-engineering expectations.",
      },
      {
        heading: "Trust Calibration & Explainability",
        content:
          "Confidence is shown as a meaningful, contextual signal — not a raw percentage — so clinicians know when to trust the model and when to dig deeper. Explainability panels connect each recommendation to the contributing factors and source data, giving clinicians a defensible basis to agree or challenge, which is the foundation of appropriate reliance on AI.",
      },
      {
        heading: "The Hardest Decisions",
        content:
          "Confidence as number vs. signal: a raw 87% invites false precision and automation bias, so I designed contextual confidence bands tied to evidence strength instead of a bare percentage. Speed vs. explainability: leadership wanted instant recommendations, but explanation can't be an afterthought — I used layered disclosure so the recommendation lands immediately and the rationale is one interaction away. Autonomy vs. oversight: for the highest-risk decisions I refused full automation and codified a mandatory human checkpoint, scaling control to clinical risk rather than to engineering convenience.",
      },
      {
        heading: "Validation & Impact",
        content:
          "I pressure-tested the interface against the cognitive conditions clinical AI actually fails in — time pressure, interruption, and ambiguous cases — and validated keyboard and screen-reader operability so the product holds up in real environments, not just demos. The result is a decision-support experience designed to reduce automation bias and over-reliance, shorten time-to-confident-decision through layered explainability, and keep 100% of decisions accountable — the trust foundation that gets clinical AI adopted instead of switched off.",
      },
      {
        heading: "UI Architecture & React Engineering",
        content:
          "I built the prototype front end in React + TypeScript with a reusable, accessible component set — recommendation cards, confidence indicators, explainability drawers, and override-capture flows — on a single semantic design-token layer themed to AAA contrast targets. State management keeps recommendations, clinician actions, and audit events consistent, and the interface is fully keyboard-operable and screen-reader-first so it holds up in real clinical environments.",
      },
      {
        heading: "System Design & Deployment Layer",
        content:
          "Designed to sit inside the clinical workflow, not beside it. Inference results arrive from the model service API with a confidence payload; a routing layer applies the oversight tier (recommend / act-with-confirm / alert) based on risk class and confidence threshold; explanation data is assembled from contributing-factor and source-record APIs at render time; override capture writes structured reason codes back to an audit event stream. Integration targets are the queue, EHR, and ticketing systems clinicians already use, behind SSO and role-scoped access. Oversight telemetry — override rate, dismissal rate, time-on-decision — ships with the feature so threshold tuning is data-driven after deployment, not guesswork.",
      },
    ],
    outcomes: [
      "Graded human-in-the-loop oversight tiers matched to clinical risk (recommend / act-with-confirm / alert)",
      "Every AI recommendation paired with confidence, rationale, and source evidence",
      "100% of clinician decisions and overrides captured for the audit trail",
      "Designed safe-state behaviors for automation bias, drift, and ambiguous accountability",
      "Trust-calibration UX promotes appropriate reliance — not blind acceptance or dismissal",
      "Layered explainability shortens time-to-confident-decision without hiding the rationale",
      "Reusable, AAA-contrast React + TypeScript clinical component library",
      "Keyboard-operable, screen-reader-first interface aligned to FDA / IEC 62366",
    ],
    artifacts: [
      { label: "AI recommendation card system", desc: "Recommendation + confidence + rationale + evidence in a single legible, accessible unit." },
      { label: "Explainability drawer", desc: "Connects each recommendation to contributing factors and source data on demand." },
      { label: "Confidence-band visual language", desc: "Contextual confidence shown as evidence-tied bands rather than misleading raw percentages." },
      { label: "Override capture flow", desc: "Structured reasoning capture that feeds the audit trail and model feedback loop." },
      { label: "Oversight-tier interaction spec", desc: "Recommend/act/alert behaviors mapped to clinical risk and IEC 62366 criteria." },
    ],
    hsi: [
      "Human-AI interaction for safety-critical decisions — legible, reversible, and accountable",
      "Trust calibration & explainability — confidence shown as meaningful, contextual signal",
      "Failure-mode design — safe states for automation bias, drift, and alert fatigue",
      "FDA / IEC 62366 usability engineering — oversight tiers matched to clinical risk",
    ],
  },
  {
    id: "ge",
    tag: "Design System · Unified Visual Language · Accessible Experiences",
    title: "Forward Deployed Human Factors & AI System Implementation for Enterprise Health Platforms",
    subtitle:
      "Led Human Factors and Human Systems Integration for GE HealthCare, then translated human-performance insights into a shared design system and accessible visual language that 10+ product teams adopted across digital platforms.",
    hero: "from-[rgb(var(--c-hero-dark))] via-[rgb(var(--c-primary))] to-[rgb(var(--c-accent))]",
    image: caseGe,
    role: "Human Factors Engineer · Human Systems Integration Lead · Design Systems Contributor",
    timeline: "2025 – Present",
    org: "GE HealthCare",
    standards: ["Human Factors Engineering", "Human Systems Integration", "Design Systems", "Design Tokens", "Figma", "Accessibility", "Cross-Functional"],
    metrics: [
      { value: "10+", label: "Teams Aligned" },
      { value: "1", label: "Shared System" },
      { value: "50+", label: "Stakeholders" },
    ],
    sections: [
      {
        heading: "The Challenge",
        content:
          "Multiple product teams needed a unified visual language across accessible experiences across digital platforms. Without a shared design system, each team built UI its own way — inconsistent components, drifting brand, and accessibility handled ad hoc — slowing delivery and weakening the experience for clinicians who depend on clarity under pressure. The deeper risk was human performance: clinicians under time pressure and cognitive load cannot afford ambiguous controls, unclear alerts, or inconsistent workflows.",
      },
      {
        heading: "Constraints",
        content:
          "Regulated medical software: any change to AI-facing behavior required FDA/IEC 62366 usability evidence, clinical sign-off, and change-control review before it could reach a released device or platform. Ten-plus product teams on independent roadmaps, so adoption had to be opt-in-attractive rather than mandated. Model latency budgets competed with explainability depth. Legacy platform variation across device and web surfaces meant one component had to degrade predictably, not break, in older shells.",
      },
      {
        heading: "My Role",
        content:
          "As Human Factors Engineer and Human Systems Integration Lead I owned the human performance, safety, and usability risk of clinical workflows first, then applied those insights to evolve the design system and best practices. I led cognitive task analysis, use-error analysis, and human-in-the-loop decision modeling, and translated those findings into a shared component library, design tokens, high-fidelity Figma mockups, and accessible color/contrast systems. I partnered cross-functionally — presenting work and aligning engineering, clinical, and regulatory teams around one unified visual language and human-centered standard.",
      },
      {
        heading: "The Governance Framework",
        content:
          "I established a comprehensive framework covering the full AI lifecycle: Design Phase — human-in-the-loop decision models defining when clinicians confirm, override, or defer to AI. Evaluation Phase — model evaluation criteria, deployment thresholds, FMEA and URRA for AI-specific failure scenarios, and cognitive task analysis of real clinical workflows. Approval Phase — deployment readiness criteria, go/no-go decision authority with cross-functional sign-off, and regulatory evidence documentation. Monitoring Phase — ongoing performance tracking, drift detection, and incident response protocols.",
      },
      {
        heading: "Human-in-the-Loop Decision Models",
        content:
          "The most critical piece. For every AI feature, I defined three models. Model A (AI Recommends, Human Decides): for high-risk diagnostic decisions — AI provides confidence scores, clinician accepts or overrides. Model B (AI Acts, Human Monitors): for routine measurements — AI operates within parameters, clinician monitors and intervenes. Model C (AI Alerts, Human Investigates): for screening workflows — AI flags anomalies, clinician investigates. Each model has specific design requirements preventing automation bias and alert fatigue.",
      },
      {
        heading: "The Hardest Decisions",
        content:
          "Sensitivity vs. Specificity: a screening algorithm flagged too many false positives. Engineering wanted lower sensitivity, clinical wanted it high. My framework: in clinical AI, the cost of missing something always exceeds the cost of extra investigation. Sensitivity stays, but the interface helps clinicians triage faster. Speed vs. Explainability: leadership wanted sub-second AI responses, but faster models sacrificed explainability. My decision: speed without trust is useless clinically. Implemented layered explainability — immediate recommendation with on-demand rationale. Automation vs. Autonomy: some stakeholders wanted fully automated workflows. I pushed back — in prenatal diagnostics, every automated decision must have a meaningful human checkpoint. This principle was codified into the enterprise standard.",
      },
      {
        heading: "System Integration & Deployment",
        content:
          "Shipped, not just specified. The component library and design tokens were published as a versioned package consumed directly by product engineering builds, so a token change propagated to 10+ teams without hand-editing UI. Human-in-the-loop behavior — confidence display, override capture, escalation states — was written as interaction contracts against the AI service APIs, then implemented with engineering in the product codebase. Deployment constraints were regulatory: FDA/IEC 62366 usability evidence, clinical sign-off gates, and change-control review before any AI-facing behavior reached a released device or platform. Oversight telemetry (override rate, alert dismissal, escalation) was instrumented so post-market monitoring had real signal instead of anecdotes.",
      },
    ],
    outcomes: [
      "Evolved a shared design system adopted across 10+ product teams for a unified visual language",
      "Accessible color/contrast and component standards built into every digital experience",
      "Established design best practices and reusable patterns as the cross-functional standard",
      "Reduced late-stage design rework by aligning teams on one system early",
      "High-fidelity Figma mockups and design tokens kept engineering and design in sync",
      "Presented and championed the system with 50+ cross-functional stakeholders",
    ],
    artifacts: [
      { label: "Component library & design tokens", desc: "Reusable components with shared color, type, and spacing tokens powering consistent UI across teams." },
      { label: "High-fidelity Figma mockups", desc: "Polished, unified UI mockups that set the visual bar and guided implementation." },
      { label: "Accessible color/contrast system", desc: "Contrast-compliant palette and type system ensuring every experience is readable and visually unified." },
      { label: "Cross-functional workshop outputs", desc: "Collaboration artifacts from design, engineering, clinical, and regulatory alignment sessions." },
    ],
    hsi: [
      "Human Performance Requirements — defined clinician interaction models for AI outputs",
      "MIL-STD-1472H — applied human engineering design criteria to clinical AI interfaces",
      "MBSE/SysML — traced human performance requirements through system architecture",
      "Safety & Health — core mission: preventing patient harm from automation bias and overreliance",
      "DoDI 5000.95 — HSI lifecycle principles applied to AI system development",
    ],
  },
  {
    id: "ssa",
    tag: "Federal Production · LLM in CI/CD · Systems Integration at Scale",
    title: "Forward Deployed AI Accessibility Automation & Design System Engineering for a 50M+ User Federal Platform",
    subtitle:
      "Embedded with federal engineering, QA, and compliance teams to build SSA11y — an LLM-based detection service wired into the CI/CD pipeline as a pre-merge gate — plus a versioned component library consumed by 15+ modules across 40+ monthly releases. 30–40% fewer defects, $1.5M+ annual rework avoided, 50M+ users.",
    hero: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
    image: caseSsa,
    role: "Forward Deployed Engineer — AI systems, CI/CD integration, human-in-the-loop design",
    timeline: "2022 – 2025",
    org: "Leidos / Social Security Administration",
    standards: ["LLM (Llama 2)", "CI/CD pre-merge gate", "APIs & pipeline integration", "Versioned component package", "Human-in-the-loop review", "Section 508 / WCAG 2.2"],
    metrics: [
      { value: "50M+", label: "Users Unified" },
      { value: "30–40%", label: "Fewer UX Defects" },
      { value: "$1.5M+", label: "Est. annual savings · program outcome" },
    ],
    sections: [
      {
        heading: "Problem",
        content:
          "A federal platform serving 50M+ citizens shipped 40+ releases a month across 15+ interconnected modules, while Section 508 conformance was handled as a manual post-release audit by a small compliance team. Defects were found after they were live, remediation was reactive, and the audit-and-fix loop was burning roughly $1.5M a year. Behavioral data and audit findings across all modules showed 65% of issues traced to 8 shared UI components — data tables, navigation, form controls, modals, date pickers — each implemented differently by each team. The failure was architectural, not cosmetic.",
      },
      {
        heading: "Constraints",
        content:
          "ATO-bound environments: no external SaaS scanning, everything runs inside the accredited boundary. Federal release cadence and change control — I could not stop the 40+ monthly releases to migrate. No dedicated platform team; the work had to be absorbed by existing module teams with their own roadmaps. Legacy heterogeneity: 15+ codebases with divergent component implementations and inconsistent test coverage. Regulatory exposure meant a false negative was unacceptable, and a noisy false-positive rate would get the gate disabled within a sprint. Every AI-suggested remediation had to stay under human review for audit defensibility.",
      },
      {
        heading: "System built",
        content:
          "SSA11y — an LLM-based (Llama 2) detection service that scans committed source at commit time rather than rendered pages post-deploy. Architecture: a pipeline hook publishes the diff to the detection API; a deterministic rule engine runs first and the model layer runs second to catch anti-patterns rules miss; findings are severity-ranked against a risk model rather than counted; results post back to the pull request with suggested code fixes and a rule reference for audit. Ambiguous and high-severity findings route to a human-in-the-loop review queue instead of auto-failing. A governance dashboard aggregates violations, remediation velocity, and risk hotspots from the findings store. Alongside it I rebuilt the 8 core components as a versioned package with ARIA roles, keyboard paths, and automated accessibility tests shipped in the package itself, so a fix propagated to every consumer rather than being re-implemented 15 times.",
      },
      {
        heading: "Deployment",
        content:
          "Phase 1 (months 1–3): prototype the detection service, validate the 8 components with assistive-technology users, write developer docs. Phase 2 (months 4–6): deploy on 3 pilot modules — the highest defect density first — measure violation reduction and false-positive rate, train the dev teams. Phase 3 (months 7–12): expand to all 15+ modules across 40+ monthly releases behind feature flags, complete component migration, promote SSA11y from advisory to a mandatory pre-merge gate. Phase 4 (ongoing): continuous compliance — every commit, every module, monthly automated reporting. Confirmed false positives retrained the rule set; recurring failures were routed back to the shared component library so the source got fixed, not the symptom.",
      },
      {
        heading: "Impact",
        content:
          "30–40% reduction in usability and accessibility defects. An estimated $1.5M+ in annual rework avoided (program outcome) by replacing post-release audit with a pre-merge gate. Adopted across 40+ monthly releases and 15+ modules as the standard pipeline step and component library. Manual audit effort per release cut substantially; compliance moved from sampling to full coverage. 50+ designers and engineers onboarded onto the shared system, and the approach became the reference pattern for other federal programs.",
      },
      {
        heading: "Failure mode and what I changed",
        content:
          "The first gate configuration was too aggressive: it blocked merges on low-severity findings and teams started requesting exemptions within two sprints. I moved to severity-tiered enforcement — block on critical, annotate on the rest — and set a false-positive budget per rule, retiring any rule that exceeded it. Adoption recovered because the gate became credible rather than loud.",
      },
    ],
    outcomes: [
      "LLM detection service running as a mandatory pre-merge CI/CD gate across 15+ modules",
      "Versioned component package consumed by 40+ monthly releases — one fix, all consumers",
      "30–40% fewer usability and accessibility defects; estimated $1.5M+ annual rework avoided (program outcome)",
      "Human-in-the-loop review queue kept every AI suggestion audit-defensible",
      "Governance dashboard gave compliance live remediation velocity instead of sampled audits",
      "50+ designers and engineers onboarded; became the standard across federal systems",
    ],
    artifacts: [
      { label: "SSA11y detection service", desc: "Llama 2 model layer behind a deterministic rule engine, exposed as a pipeline-callable API with severity-ranked findings." },
      { label: "CI/CD gate configuration", desc: "Pre-merge hook with severity-tiered enforcement, per-rule false-positive budgets, and PR-level annotations." },
      { label: "Versioned component package", desc: "8 core components with ARIA roles, keyboard paths, and automated accessibility tests shipped in the package." },
      { label: "Governance dashboard", desc: "Violations, remediation velocity, and risk hotspots aggregated from the findings store for compliance reporting." },
    ],
    hsi: [
      "Requirements analysis — traced accessibility requirements to system design decisions",
      "Risk-based prioritization — the 65%/8-component insight drove the entire strategy",
      "Lifecycle integration — compliance embedded in CI/CD, not post-hoc auditing",
      "Evidence-based design — every decision backed by test data from users with assistive technologies",
    ],
  },
  {
    id: "bestbuy",
    tag: "Consumer · Human Factors · Digital Brand Experience · Mobile-First",
    title: "Production Human Systems Engineering for a Consumer Health & Safety Platform (1M+ Users)",
    subtitle:
      "Led Human Factors and Human Systems Integration for Best Buy Health (Lively, Jitterbug), then applied those insights to the visual design, brand consistency, and mobile-first digital experience across 5 product lines and 1M+ consumers.",
    hero: "from-[#2d1b69] via-[#11998e] to-[#38ef7d]",
    image: caseBestbuy,
    role: "Human Factors Engineer · Human Systems Integration Lead · Senior Visual & Experience Designer",
    timeline: "2021 – 2022",
    org: "Best Buy Health",
    standards: ["Human Factors Engineering", "Human Systems Integration", "Design System", "Mobile-First", "Cohesive UI System", "WCAG 2.2 AA", "MIL-STD-1472H"],
    metrics: [
      { value: "30-40%", label: "Lower Drop-Off" },
      { value: "1M+", label: "Consumers Engaged" },
      { value: "5", label: "Product Lines" },
    ],
    sections: [
      {
        heading: "The Challenge",
        content:
          "Best Buy Health needed to engage 1M+ consumers across 5 product lines (Lively, Jitterbug) with a cohesive UI system spanning web, mobile, and in-device touchpoints. The user population was older adults with reduced dexterity, low vision, hearing loss, and high stress in medical emergencies — a classic Human Factors problem. Visual experiences were fragmented, critical user flows leaked engagement through drop-off, and there was no shared design system to keep the experience cohesive, safe, or conversion-ready at scale.",
      },
      {
        heading: "Constraints",
        content:
          "Hardware in the field: device firmware release cycles are slow and irreversible once shipped, so anything device-side had to be right the first time. Emergency flows could not add a single blocking step — latency and failure behavior were safety issues, not UX issues. The user population had reduced dexterity, low vision, and hearing loss, so target sizes, contrast, and audio fallbacks were hard requirements rather than preferences. Five product lines shared partially overlapping backends, so the component and content system had to absorb API differences instead of forcing a backend rewrite.",
      },
      {
        heading: "My Role",
        content:
          "As Human Factors Engineer and Human Systems Integration Lead I owned the human performance, safety, and accessibility of consumer health products for aging populations, then applied those findings to the visual design and mobile-first digital experience across every consumer touchpoint. I applied MIL-STD-1472H and FDA/IEC 62366 principles to reduce real-world use error, led a mobile-first redesign, built the cohesive component system and style guide, and drove design decisions that lifted engagement and task completion — partnering with product, content, and engineering to ship a cohesive UI system.",
      },
      {
        heading: "Military Standards for Civilian Safety",
        content:
          "I applied MIL-STD-1472H — the Department of Defense's Human Engineering Design Criteria — to consumer health products. The parallel is direct: military operators in gloves have reduced dexterity, like elderly users with arthritis. Operators in helmets have degraded vision, like users with cataracts. Combat creates high stress, like a medical emergency. The standard provides specific, measurable design criteria validated across decades of defense research — minimum touch target sizes, control force requirements, multi-modal feedback requirements, cognitive load thresholds. I wasn't guessing what would work. I was applying engineering standards.",
      },
      {
        heading: "What I Redesigned",
        content:
          "Emergency activation controls: enlarged touch targets to MIL-STD-1472H minimums, added multi-modal confirmation (visual + auditory + haptic simultaneously), designed progressive activation (press → hold → confirm) preventing accidental triggers while remaining accessible under stress. Alert system: redundant modalities for every critical alert, audio frequencies scaled to age-related hearing loss, display contrast beyond WCAG minimums for cataracts and low vision. Navigation: reduced cognitive load per screen, consistent patterns across all 5 product lines, large high-contrast typography.",
      },
      {
        heading: "Validation",
        content:
          "Every redesign was validated through structured usability testing with the actual user population — participants aged 65-90+ with arthritis, low vision, hearing loss, and mild cognitive impairment. Testing used JAWS, NVDA, VoiceOver, and TalkBack. Emergency activation was tested under simulated stress conditions (time pressure, distraction, physical limitation) because standard usability testing in calm lab conditions doesn't reflect real emergencies. All testing protocols met FDA/IEC 62366 requirements.",
      },
      {
        heading: "Enterprise Governance",
        content:
          "Beyond product fixes, I built organizational infrastructure: accessibility governance framework adopted across all 5 product lines, approved at executive level. Shifted accessibility from 'audit and fix' to 'design and verify.' Created design checklists mapped to WCAG 2.2 AA, Section 508, and MIL-STD-1472H. Integrated accessibility review into the design approval process. Trained product teams on inclusive design for aging populations.",
      },
      {
        heading: "System Integration & Deployment",
        content:
          "The work shipped across three surfaces — native mobile apps, web, and the in-device (Jitterbug/Lively) firmware experience — so every interaction change had to hold against three different implementation stacks and release trains. I delivered the component system as shared specs and tokens implemented in each client, wrote the emergency-activation behavior as a state contract (press → hold → confirm, with multi-modal feedback) against the alerting and operator-connection services, and defined the escalation path to a live human operator including failure and degraded-network states. Deployment constraints were regulatory and operational: FDA/IEC 62366 usability evidence, MIL-STD-1472H control criteria, carrier and device certification cycles, and an accessibility review gate added to the release approval process across all five product lines.",
      },
    ],
    outcomes: [
      "Reduced drop-off in critical user flows by 30–40% through mobile-first visual design",
      "Drove adoption across 5 product lines for 1M+ consumers",
      "Improved task completion and engagement with a cohesive, unified experience",
      "Cohesive component system and style guide adopted across all product lines",
      "Cohesive multi-modal UI keeps the experience accessible and conversion-ready under stress",
    ],
    artifacts: [
      { label: "Mobile-first UI screens (app + web)", desc: "High-polish, cohesive consumer screens across web, mobile, and in-device — built for visual clarity and engagement." },
      { label: "Cohesive component system", desc: "Shared style guide and component library keeping color, type, and interaction consistent across 5 product lines." },
      { label: "Before/after screen redesign", desc: "Redesigned critical flow with engagement framing — cleaner hierarchy, stronger CTAs, lower drop-off." },
      { label: "Onboarding & upgrade prompts", desc: "Welcome flows, feature announcements, and upgrade prompts designed to drive adoption and conversion." },
    ],
    hsi: [
      "MIL-STD-1472H — direct application of DoD human engineering design criteria",
      "Human error mitigation — designed controls preventing critical failures under stress",
      "Degraded performance design — arthritis, low vision, hearing loss, cognitive decline",
      "IEC 62366 compliant usability engineering with representative populations",
      "Enterprise governance — organizational standard sustaining safety outcomes",
    ],
  },
  {
    id: "samhsa",
    tag: "Federal · $130M Portfolio · 7 Years",
    title: "$130M Federal Behavioral Health Program",
    subtitle:
      "Directed a national-scale portfolio end-to-end for 7 years — building teams, defining governance, and influencing executive funding decisions that shaped behavioral health systems nationwide.",
    hero: "from-[rgb(var(--c-primary))] via-[rgb(var(--c-accent))] to-[rgb(var(--c-accent-light))]",
    image: caseSamhsa,
    role: "Sr. UX & Accessibility Program Manager",
    timeline: "2014 – 2021",
    org: "Eagle Technologies / HHS / SAMHSA",
    standards: ["Section 508", "WCAG 2.0 AA"],
    metrics: [
      { value: "$130M", label: "Portfolio Value" },
      { value: "6+", label: "Platforms" },
      { value: "2M+", label: "Monthly Visitors" },
    ],
    sections: [
      {
        heading: "The Program",
        content:
          "SAMHSA operates the nation's behavioral health information systems — platforms that help Americans find treatment facilities for addiction and mental health, submit behavioral health data to the federal government, and access evidence-based resources. The portfolio included the Treatment Locator (millions of searches annually by people in crisis), data submission systems, data visualization platforms, public information portals, and internal administrative tools. 6+ platforms. 2M+ monthly visitors. Serving some of the most vulnerable people in the country.",
      },
      {
        heading: "My Role",
        content:
          "This was program leadership with full accountability — not a UX design role. Full budget authority across the portfolio: staffing, technology, vendor contracts, infrastructure. Recruited, managed, and grew a cross-functional team of 15+ designers, developers, content specialists, and QA. Managed vendor ecosystems including selection, performance, and contract negotiations. Trusted advisor to SAMHSA executive stakeholders on product direction, technology strategy, and investment prioritization. Accountable for on-time, on-budget, compliant delivery across all platforms. I held this role for 7 years — the longest-tenured and highest-scale program leadership in my career.",
      },
      {
        heading: "The Challenge",
        content:
          "Four systemic problems: No UX governance — each platform built by different teams with different design approaches, no unified architecture or shared components. Accessibility was an afterthought — Section 508 compliance treated as post-launch audit, violations found after deployment and reintroduced next release. Excessive development rework — without UX governance and accessibility standards, teams discovered problems late, consuming 30-40% of development capacity fixing what should have been right the first time. Competing priorities with no framework — 50+ stakeholders with competing demands and no structured process for deciding what gets built first.",
      },
      {
        heading: "What I Transformed",
        content:
          "UX Strategy & Design Governance: defined consistent navigation, labeling, and content structure across all platforms. Created shared pattern library so common interactions work the same way everywhere. Section 508 as Organizational Policy: defined compliance as organizational mandate, not project checklist. Embedded accessibility into every lifecycle phase. Created automated testing in CI/CD. This was my most significant governance contribution. HSI-Driven Design: institutionalized user-centered design as standard practice — research, prototyping, usability testing built into every project. Conducted inclusive research with users with disabilities, limited English proficiency, and users in crisis. Investment Prioritization: built impact scoring framework, quarterly roadmap reviews, trade-off transparency, and budget allocation tied to outcomes instead of politics.",
      },
       {
         heading: "Cloud Modernization — TEDS to AWS GovCloud",
         content:
           "Led the digital modernization of SAMHSA's behavioral health data infrastructure by migrating the Treatment Episode Data Set (TEDS) — the federal government's primary source on substance use treatment admissions and discharges — from aging on-premises systems to Amazon Web Services GovCloud (US). GovCloud was selected for its FedRAMP High and DoD-compliant isolation, meeting the strict data residency, sovereignty, and compliance requirements for sensitive federal behavioral health data. The migration re-platformed TEDS ingestion, storage, and the public data-visualization layer onto managed cloud services: Amazon S3 for durable encrypted data lakes, RDS/Redshift for warehousing the admission and discharge records states submit annually, Lambda and Glue for ETL pipelines that validate and normalize state-submitted datasets, and CloudFront-fronted delivery for the public-facing analytics. Encryption (KMS) in transit and at rest, IAM least-privilege, and continuous audit logging via CloudTrail were embedded to satisfy HIPAA and Section 508 obligations end-to-end.",
       },
       {
         heading: "Modernization Impact",
         content:
           "Migrating TEDS to AWS GovCloud eliminated brittle legacy hardware, cut infrastructure and maintenance costs, and gave SAMHSA elastic capacity to handle annual state data submissions without over-provisioning. Automated, validated ETL pipelines replaced manual data handling — improving the accuracy and timeliness of national behavioral health reporting. Modernized, accessible data-visualization dashboards made TEDS insights available faster to researchers, state agencies, and the public, while compliant cloud governance reduced the audit burden and strengthened security posture across the portfolio.",
       },
       {
         heading: "Constraints",
         content:
           "FedRAMP High boundary and federal ATO requirements governed every architectural choice — no unapproved services, no data leaving the accredited environment. Annual state submission windows created hard, immovable deadlines with large bursty load. Source data arrived in inconsistent state-by-state formats requiring validation before it could be trusted for national reporting. Section 508 conformance was a statutory obligation on every public-facing dashboard, and legacy hardware had to keep running during migration — cutover with no reporting outage.",
       },
       {
         heading: "System integration & deployment",
         content:
           "TEDS datasets were migrated to AWS GovCloud with automated, validated ETL pipelines replacing manual data handling: ingestion, schema validation, lineage capture, and error quarantine per state submission. Public dashboards were rebuilt on the modernized data layer with accessibility conformance built into the component set rather than audited afterward. Migration ran in parallel with the legacy system until reporting parity was proven, then cut over. Section 508 policy and review gates were embedded into the delivery process so conformance stayed intact across releases and team turnover.",
       },
       {
         heading: "Seven Years of Leadership",
         content:
           "Short engagements let you design solutions. Multi-year ownership teaches you whether those solutions survive: new leadership, changing requirements, team turnover, technology shifts. The governance frameworks I built in year 2 were still operating in year 7. The team I recruited in year 1 grew to 15+ by year 4. The Section 508 policy I defined became the organizational standard that outlasted my tenure. Seven years taught me that the real test of leadership isn't what you build — it's what still works after you leave.",
       },
     ],
     outcomes: [
       "Reduced development rework 30-40%, saving $2M+ annually in remediation costs",
       "Migrated TEDS datasets to AWS GovCloud (FedRAMP High) — modernizing federal behavioral health data infrastructure",
       "Automated, validated cloud ETL pipelines improved accuracy and timeliness of national TEDS reporting",
       "Cut legacy infrastructure and maintenance costs with elastic, on-demand cloud capacity",
       "Defined Section 508 governance as organizational policy — not a project deliverable",
       "Served 2M+ monthly visitors across 6+ enterprise platforms",
       "Influenced executive funding and technology strategy for 7 years",
       "Grew cross-functional team from initial staff to 15+ under my leadership",
       "People in crisis finding treatment facilities faster through improved Treatment Locator",
       "Investment prioritization framework replaced political decision-making with strategic allocation",
      ],
      artifacts: [
        { label: "Cross-platform pattern library", desc: "Shared components and interaction patterns unifying 6+ products into one consistent system." },
        { label: "Accessible data-viz dashboard system", desc: "Modernized, Section 508-conformant TEDS visualizations with a reusable chart and color framework." },
        { label: "Section 508 acceptance-criteria kit", desc: "Design, content, and engineering checklists embedded into sprint planning and CI/CD." },
        { label: "Content & labeling style guide", desc: "Consistent navigation, voice, and labeling standards applied org-wide." },
      ],
     hsi: [
      "Portfolio management at scale — $130M across 6+ platforms with portfolio oversight and delivery leadership",
      "HSI lifecycle integration — UCD and accessibility embedded as standard engineering practice",
      "Stakeholder management — aligned 50+ stakeholders through structured governance",
      "Section 508 enterprise governance — defined and enforced as organizational policy",
      "Inclusive design for vulnerable populations — users in crisis with diverse abilities",
       "Cloud migration & digital modernization — TEDS datasets re-platformed to AWS GovCloud (FedRAMP High)",
       "7-year continuity — sustained leadership through changing administrations",
    ],
  },
  {
    id: "sentinel",
    tag: "In-House AI Product · Agentic AI Safety · Red-Team Evaluation",
    title: "Sentinel — Guardrails & Red-Team Console for Agentic AI",
    subtitle:
      "Designed and built a control console for autonomous AI agents — making tool-use, approvals, and failure modes visible so teams can deploy agents that take actions without losing human control.",
    hero: "from-[rgb(var(--c-hero-mid))] via-[rgb(var(--c-primary))] to-[rgb(var(--c-accent))]",
    image: caseSentinel,
    role: "AI Product Designer · Builder",
    timeline: "2025 – Present",
    org: "BrainPulse (In-House)",
    standards: ["NIST AI RMF", "OWASP LLM Top 10", "ISO/IEC 42001", "WCAG 2.2 AA"],
    metrics: [
      { value: "100%", label: "Agent Actions Logged" },
      { value: "4", label: "Guardrail Tiers" },
      { value: "Real-time", label: "Red-Team Alerts" },
    ],
    sections: [
      {
        heading: "Why I Built It",
        content:
          "Agentic AI changes the risk model entirely — a model that can call tools, browse, and execute actions can also be manipulated into doing the wrong thing through prompt injection or unsafe tool chains. Most teams ship agents with no way to see what the agent intended, what it actually did, or where a human should have intervened. I built Sentinel to make agent behavior legible and controllable before it reaches production.",
      },
      {
        heading: "My Role",
        content:
          "I designed and built the console end-to-end: the guardrail taxonomy, the red-team workflow, the visualization system, and the React + TypeScript front end. I defined what 'safe to deploy' means as a concrete, passable checklist, designed the human-approval and kill-switch interactions, and built the adversarial scenario library so safety becomes something teams can demonstrate with evidence — not assert in a slide.",
      },
      {
        heading: "What It Does",
        content:
          "Sentinel wraps any agent in a layered guardrail system: input filters catch prompt-injection and jailbreak patterns, an approval layer pauses high-impact tool calls for human confirmation, an action ledger records every step with its rationale and outcome, and a kill-switch returns the agent to a safe state. A red-team console lets evaluators run adversarial scenarios and watch guardrails fire in real time.",
      },
      {
        heading: "Guardrail Tiers",
        content:
          "I codified four tiers mapped to action impact — observe (log only), confirm (human approval required), constrain (allowed within hard limits), and block (never permitted). Each tier has fixed UI, audit, and evaluation requirements, so the question 'is this agent safe to deploy?' becomes a checklist teams can pass rather than a judgment call.",
      },
      {
        heading: "The Hardest Decisions",
        content:
          "Autonomy vs. control: teams want agents that move fast, but unbounded tool-use is where damage happens — I made high-impact actions require confirmation by default and earn autonomy only after they clear red-team evaluation. Alert fatigue vs. coverage: filtering everything would bury operators, so I tiered detections by severity and grouped low-risk events, keeping the approval queue focused on what truly matters. Trust vs. verification: rather than trusting a vendor's safety claim, I designed the red-team console so safety must be reproduced and proven before launch.",
      },
      {
        heading: "Validation & Impact",
        content:
          "By making every agent action auditable and forcing high-impact steps through human approval, Sentinel turns 'we think it's safe' into demonstrable, evidence-backed readiness — the gate enterprises need before they let agents act in production. The four-tier checklist gives risk and engineering a shared deployment standard, shrinking back-and-forth review cycles and giving leadership the confidence to greenlight agentic features they'd otherwise block.",
      },
      {
        heading: "Architecture & Approach",
        content:
          "Built the front end in React + TypeScript as reusable visualization components — action timelines, tool-call inspectors, guardrail status panels, and adversarial-test result views — on a single semantic design-token layer. Streaming agent telemetry is handled with predictable state so dense, fast-moving logs stay readable, and every panel is keyboard-operable and WCAG 2.2 AA conformant.",
      },
      {
        heading: "System Design & Deployment Layer",
        content:
          "Sentinel deploys as a proxy layer in front of the agent runtime: every tool call is intercepted, classified against the four-tier guardrail policy, and either logged, routed for human confirmation, constrained, or blocked before it executes. Input filters run pre-inference against prompt-injection and jailbreak signatures; the action ledger is an append-only event stream keyed by run ID, giving full replay. The kill-switch is a control-plane API call that revokes the agent's tool credentials, so the safe state does not depend on the agent cooperating. Red-team scenarios run as a CI job against a staged agent build, and a failing scenario blocks promotion to production.",
      },
    ],
    outcomes: [
      "Made autonomous agent behavior fully auditable — every action logged with intent and outcome",
      "Four-tier guardrail model turns agent safety into a passable, shared deployment checklist",
      "Prompt-injection and jailbreak detection surfaced before actions execute",
      "Red-team console lets evaluators reproduce and verify adversarial failures before launch",
      "Severity-tiered alerts keep the human approval queue focused and fatigue-free",
      "Reusable React + TypeScript visualization components on one token layer",
      "Human-in-the-loop approvals keep humans in control of high-impact actions",
    ],
    artifacts: [
      { label: "Agent action timeline", desc: "Step-by-step view of intent, tool calls, and outcomes for every agent run." },
      { label: "Guardrail status panels", desc: "Live tier indicators showing what is observed, confirmed, constrained, or blocked." },
      { label: "Tool-call inspector", desc: "Drill-in view of each tool invocation, its arguments, and the guardrail decision applied." },
      { label: "Red-team scenario library", desc: "Reusable adversarial tests that exercise prompt injection and unsafe tool chains." },
      { label: "Evaluation evidence export", desc: "Audit-ready records mapping agent behavior to NIST AI RMF and OWASP LLM controls." },
    ],
    hsi: [
      "Human-in-the-loop oversight — approvals gate high-impact autonomous actions",
      "Failure-mode design — kill-switch and safe-state recovery for runaway agents",
      "NIST AI RMF — measure and manage agent risk with traceable evidence",
      "OWASP LLM Top 10 — prompt-injection and tool-abuse defenses built in",
    ],
  },
  {
    id: "lumen",
    tag: "In-House AI Product · RAG Transparency · Source-Grounding UX",
    title: "Lumen — Source-Grounding & Transparency UX for Enterprise Knowledge AI",
    subtitle:
      "Designed the trust layer for retrieval-augmented generation — connecting every AI answer to its source evidence so users can verify, challenge, and rely on knowledge AI in high-stakes work.",
    hero: "from-[#1b2a69] via-[rgb(var(--c-primary))] to-[rgb(var(--c-accent))]",
    image: caseLumen,
    role: "AI Interaction Designer · Builder",
    timeline: "2025 – Present",
    org: "BrainPulse (In-House)",
    standards: ["NIST AI RMF", "WCAG 2.2 AA", "ISO/IEC 42001"],
    metrics: [
      { value: "100%", label: "Answers Source-Linked" },
      { value: "3", label: "Confidence States" },
      { value: "↓ Hallucination", label: "Risk Surfaced" },
    ],
    sections: [
      {
        heading: "Why I Built It",
        content:
          "Enterprise knowledge AI fails the moment users can't tell whether an answer is grounded in real documents or quietly invented. In regulated and high-stakes work, an unverifiable answer is worse than no answer. I designed Lumen as the transparency layer for retrieval-augmented generation — making the connection between answer and evidence the centerpiece of the experience, not a footnote.",
      },
      {
        heading: "My Role",
        content:
          "I designed the trust layer and built the front end: the evidence-linking interaction model, the citation and confidence visual language, the accessible component system, and the React + TypeScript implementation. I defined how answers reconcile with their sources as they stream, how the UI behaves when evidence is thin, and how a user moves from answer to proof in a single step — the pattern that decides whether people actually rely on knowledge AI in serious work.",
      },
      {
        heading: "What It Does",
        content:
          "Every claim in an answer is linked to the retrieved passages that support it, with inline citations users can expand to read the exact source. When retrieval is weak or sources conflict, Lumen says so explicitly rather than projecting false confidence. Users can challenge an answer, jump to source documents, and see why a passage was retrieved — turning a black-box response into a defensible, checkable result.",
      },
      {
        heading: "Confidence & Hallucination Cues",
        content:
          "Confidence is shown as a meaningful, contextual signal grounded in retrieval quality and source agreement — not a raw model probability. When the system has thin or contradictory evidence, the UI down-weights the answer and surfaces the gap, so users calibrate trust appropriately and hallucination risk is made visible instead of hidden.",
      },
      {
        heading: "The Hardest Decisions",
        content:
          "Fluency vs. honesty: a confident, well-written wrong answer is the most dangerous output a RAG system can produce, so I designed the UI to visibly down-weight answers with weak grounding even when the prose reads smoothly. Friction vs. trust: surfacing every citation risks clutter, so I used inline chips with on-demand source drawers — proof is always one interaction away without drowning the answer. Coverage vs. honesty about gaps: instead of always producing an answer, I designed an explicit 'insufficient evidence' state, because in regulated work admitting a gap beats inventing one.",
      },
      {
        heading: "Validation & Impact",
        content:
          "By linking 100% of answers to their sources and making hallucination risk visible, Lumen converts a black-box assistant into a tool people can defend to an auditor or a regulator — the prerequisite for adoption in high-stakes domains. Grounding every claim and exposing weak evidence drives appropriate reliance: users trust answers faster when they can verify them in a click, and stop trusting confidently-wrong ones before they act, which is what moves knowledge AI from pilot to production.",
      },
      {
        heading: "Architecture & Approach",
        content:
          "Built in React + TypeScript with reusable components for citation chips, source-passage drawers, evidence-linking lines, and confidence indicators — all on a single semantic design-token layer. Streaming responses are reconciled with their citations in predictable state, and the entire experience is keyboard-operable and screen-reader-first to WCAG 2.2 AA.",
      },
      {
        heading: "System Design & Deployment Layer",
        content:
          "Lumen is the trust layer over a standard RAG pipeline: document ingestion and chunking, embeddings into a vector store, hybrid retrieval with reranking, then generation with per-claim citation binding. Grounding is computed server-side — retrieval score, source agreement, and coverage of the answer span — and returned alongside the streamed tokens so the UI can down-weight an answer as it renders instead of after the fact. Below a coverage threshold the pipeline returns an explicit insufficient-evidence response rather than generating. Retrieval quality, citation click-through, and challenge events are instrumented, feeding chunking and reranker tuning after deployment.",
      },
    ],
    outcomes: [
      "Linked 100% of AI answers to their source evidence for verifiable, defensible output",
      "Surfaced hallucination risk explicitly when retrieval is weak or sources conflict",
      "Explicit 'insufficient evidence' state prevents confident, well-written wrong answers",
      "Confidence shown as calibrated, contextual signal — not raw model probability",
      "Drove appropriate reliance — users verify in one click instead of trusting blindly",
      "Reusable citation, source-drawer, and grounding components on one token layer",
      "Screen-reader-first, keyboard-operable transparency UX to WCAG 2.2 AA",
      "Gave users a defensible basis to trust or challenge knowledge-AI answers",
    ],
    artifacts: [
      { label: "Inline citation system", desc: "Per-claim citation chips that expand to the exact supporting passage." },
      { label: "Source-passage drawer", desc: "Side panel showing retrieved evidence and why each passage was selected." },
      { label: "Confidence & gap indicators", desc: "Contextual signals that down-weight thin or conflicting evidence." },
      { label: "Insufficient-evidence state", desc: "Explicit UI pattern that admits a gap instead of fabricating an answer." },
      { label: "Grounding component library", desc: "Reusable React + TypeScript primitives for evidence-linked AI answers." },
    ],
    hsi: [
      "Appropriate reliance — evidence linking lets users trust or challenge AI output",
      "Explainability — every claim traces to its retrieved source passage",
      "Error prevention — hallucination risk surfaced rather than hidden",
      "NIST AI RMF — transparency and measurement built into the experience",
    ],
  },
  {
    id: "revcycle",
    tag: "In-House AI Product · Healthcare Revenue Cycle · Human-in-the-Loop",
    title: "RevAssist — AI-Assisted Revenue Cycle & Reimbursement Workspace",
    subtitle:
      "Conceived and designed an intelligent revenue-cycle workspace that helps coders, billers, and denial specialists move claims from documentation to payment — using AI to suggest medical codes, flag reimbursement risk, and triage claim exceptions while keeping humans in control of every financial decision.",
    hero: "from-[rgb(var(--c-hero-mid))] via-[rgb(var(--c-primary))] to-[rgb(var(--c-accent))]",
    image: caseRevcycle,
    role: "Design Lead (Player-Coach) · AI Interaction Designer · Front-End Architect",
    timeline: "2024 – Present",
    org: "BrainPulse (In-House Product)",
    standards: ["HIPAA", "CMS / ICD-10-CM · CPT · HCPCS", "X12 837/835", "NIST AI RMF", "WCAG 2.2 AA"],
    metrics: [
      { value: "40%", label: "Less manual coding effort" },
      { value: "3", label: "Claim workflows unified" },
      { value: "100%", label: "AI codes traced to source" },
    ],
    sections: [
      {
        heading: "Why I Built It",
        content:
          "Revenue cycle is the money side of healthcare, and it is still mostly manual: coders read charts line by line, billers chase missing documentation, and denial specialists rework claims one rejection at a time. It is slow, error-prone, and expensive — and it is exactly the kind of high-volume, rules-heavy work AI can transform, if the experience keeps humans confident and in control. I built RevAssist as an in-house concept to show how intelligent assistance, automation, and human oversight can work together to reduce administrative burden and improve financial outcomes without turning specialists into rubber-stampers.",
      },
      {
        heading: "My Role — Player-Coach",
        content:
          "I led this the way a design director leads in practice: hands-on and coaching at the same time. I set the experience vision and interaction principles, then designed the hardest flows myself — the AI coding assistant, the denial-triage queue, and the reimbursement-risk explanation model. In parallel I ran design critiques, paired with junior designers on the exception-handling patterns, and wrote the AI interaction guidelines the rest of the work followed. I partnered directly with product, engineering, and revenue-cycle SMEs to align on scope, feasibility, and clinical/financial edge cases — driving alignment without owning the org chart.",
      },
      {
        heading: "Reimagining the Workflow, Not Digitizing It",
        content:
          "The easy path is to digitize the existing process — put the same manual steps on a screen. Instead I re-sequenced the work around where AI adds leverage: AI reads the documentation and proposes ICD-10-CM / CPT / HCPCS codes with rationale; it flags claims likely to be denied before submission; and it clusters incoming denials so a specialist fixes a whole pattern at once instead of one claim at a time. Historically manual tasks — coding, documentation review, reimbursement recommendations, exception handling, and claim management — become AI-augmented, but every dollar-affecting action still routes through a person.",
      },
      {
        heading: "Trust, Transparency & Control by Design",
        content:
          "AI in reimbursement is high-stakes: a wrong code is a compliance risk or lost revenue. So every AI suggestion is explainable and reversible. Each proposed code links back to the exact passage in the documentation that supports it, shows a calibrated confidence signal (not a bare percentage), and offers accept / modify / reject with one-tap reason capture. Low-confidence or high-dollar claims are escalated, never silently auto-submitted. The result is appropriate reliance — specialists trust the fast, well-supported suggestions and scrutinize the uncertain ones.",
      },
      {
        heading: "The Hardest Decisions",
        content:
          "Automation vs. accountability: finance wanted straight-through auto-coding for 'obvious' claims, but auto-submitting codes invites automation bias and audit exposure — I made one-click acceptance the default fast path while keeping every action logged and attributable. Speed vs. explainability: leadership wanted instant code suggestions, but a suggestion no coder can defend is worthless — I used layered disclosure so the code lands immediately and its source rationale is one interaction away. Coverage vs. noise: surfacing every possible denial risk would bury billers, so I tiered alerts by dollar impact and likelihood and grouped the rest into a digest.",
      },
      {
        heading: "One Experience Across Products & Roles",
        content:
          "Revenue cycle spans coding, billing, and denials — historically three disconnected tools with three mental models. I designed RevAssist as one cohesive system across those workflows: shared AI interaction patterns (suggest / explain / escalate), a shared claim object that carries context from coding through payment, and a reusable component library on a single design-token layer so the experience feels integrated regardless of the underlying stack. This is the cross-product systems thinking a portfolio-level design leader has to bring.",
      },
      {
        heading: "Architecture & Approach",
        content:
          "I architected the front end in React + TypeScript as a token-driven component library — claim tables, the AI suggestion drawer, the confidence/source inspector, and the denial-triage queue are reusable primitives. State is managed with Context and reducer patterns so a claim's status, AI suggestions, and human overrides stay in sync across the coding, billing, and denial views. Every AI-assisted action is captured as auditable evidence, giving compliance a defensible trail and giving the design team a telemetry loop to improve suggestion quality over time.",
      },
      {
        heading: "System Design & Deployment Layer",
        content:
          "Designed against the real revenue-cycle stack: clinical documentation in, X12 837 claims out, 835 remittances back. An extraction and coding service reads the chart and proposes ICD-10-CM / CPT / HCPCS codes with a pointer to the supporting passage; a denial-risk model scores the claim pre-submission against historical payer outcomes; a clustering job groups incoming 835 rejections by root cause for the triage queue. Every AI suggestion and human decision is written to an append-only audit trail with reason codes, satisfying HIPAA access control and appeal defensibility. Integration is API-first against the clearinghouse and practice-management systems, so the workspace layers onto the existing pipeline rather than replacing it.",
      },
    ],
    outcomes: [
      "Unified medical coding, claim billing, and denial management into one cohesive AI-assisted workspace",
      "AI code suggestions traced 100% to the supporting documentation — defensible for audit and appeals",
      "Estimated ~40% reduction in manual coding effort by turning chart review into review-and-confirm",
      "Pre-submission reimbursement-risk flags catch likely denials before they cost a rework cycle",
      "Denial-triage queue clusters rejections so specialists fix patterns, not one claim at a time",
      "Human-in-the-loop by design — every dollar-affecting action is confirmable, reversible, and logged",
      "Reusable React + TypeScript component library on a single token layer, consistent across roles",
      "Player-coach delivery: set the vision, designed the hardest flows, and coached the team on the rest",
    ],
    artifacts: [
      { label: "AI coding assistant", desc: "Proposes ICD-10-CM / CPT / HCPCS codes with source-linked rationale and confidence." },
      { label: "Reimbursement-risk flags", desc: "Pre-submission signals that predict and explain likely denials." },
      { label: "Denial-triage queue", desc: "Clusters rejections by root cause so specialists fix patterns at scale." },
      { label: "Source & confidence inspector", desc: "Opens the exact documentation passage supporting each suggested code." },
      { label: "AI interaction guidelines", desc: "The suggest / explain / escalate patterns the whole team designed against." },
    ],
    hsi: [
      "Appropriate reliance — source-linked suggestions let specialists trust or challenge each AI code",
      "Explainability — every code and denial flag traces to the documentation and rule that produced it",
      "Human oversight — high-dollar and low-confidence claims escalate rather than auto-submit",
      "NIST AI RMF — measurement, transparency, and evidence built into the reimbursement workflow",
    ],
  },
];
