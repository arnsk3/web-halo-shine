import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

type Case = {
  id: string;
  title: string;
  category: string;
  role: string;
  summary: string;
  outcomes: string[];
  url: string;
  inHouseLab?: boolean;
};

const BASE = "https://www.senthilnagappan.com";

const CASES: Case[] = [
  {
    id: "ssa",
    title: "A Data-Driven Design System That Unified 50M+ User Experiences",
    category: "Design Systems",
    role: "Design systems lead (Leidos / SSA program scope)",
    summary:
      "Consolidated fragmented federal experiences into one unified visual system and accessible component library serving 50M+ users.",
    outcomes: [
      "Unified visual language across multiple SSA product lines",
      "AAA-oriented accessible components adopted org-wide",
      "30–40% fewer UI defects reported downstream",
    ],
    url: `${BASE}/#case-ssa`,
  },
  {
    id: "clinicalai",
    title: "Clarity — Explainable Clinical AI Decision-Support",
    category: "AI Experience Design",
    role: "Lead designer (self-initiated concept)",
    summary:
      "Concept product for oversight-tiered clinical AI: calibrated confidence, human-in-the-loop escalation, and audit-ready override capture for 1,200+ clinicians in the reference scenario.",
    outcomes: [
      "Recommend / act / alert oversight tiers by model risk",
      "Confidence and rationale surfaced instead of raw probabilities",
      "Every override captured as regulator-ready evidence",
    ],
    url: `${BASE}/#case-clinicalai`,
    inHouseLab: true,
  },
  {
    id: "ge",
    title: "Evolving a Design System to Power Consistent, Accessible Digital Experiences",
    category: "Design Systems",
    role: "Senior design systems contributor (GE HealthCare program scope)",
    summary:
      "Evolved a healthcare design system for cross-product consistency, accessibility, and faster shipping across a large product portfolio.",
    outcomes: [
      "Shared token + component foundation across product teams",
      "Accessibility built into the system, not bolted on",
      "Faster time-to-ship for new product surfaces",
    ],
    url: `${BASE}/#case-ge`,
  },
  {
    id: "trustlens",
    title: "TrustLens — AI Governance & Model-Risk Command Center",
    category: "AI Governance",
    role: "Product designer (self-initiated concept)",
    summary:
      "Concept command center for AI governance mapped to NIST AI RMF, EU AI Act, and ISO 42001 — model cards, drift monitoring, and audit-ready evidence.",
    outcomes: [
      "Governance mapped to real regulatory frameworks",
      "Drift and bias monitoring surfaced at portfolio level",
      "Audit packages assembled as an export, not a fire drill",
    ],
    url: `${BASE}/#case-trustlens`,
    inHouseLab: true,
  },
  {
    id: "bestbuy",
    title: "Driving Engagement for 1M+ Consumers Through Cohesive Digital Brand Experiences",
    category: "Brand & Experience",
    role: "Experience designer (Best Buy program scope)",
    summary:
      "Cohesive digital brand experience work for a national retail audience, driving engagement across acquisition and loyalty surfaces.",
    outcomes: [
      "Unified brand expression across web and app",
      "Improved engagement for 1M+ consumers in program scope",
      "Reusable patterns adopted across marketing surfaces",
    ],
    url: `${BASE}/#case-bestbuy`,
  },
  {
    id: "samhsa",
    title: "$130M Federal Behavioral Health Program",
    category: "Federal / HSI",
    role: "Design lead (federal program scope)",
    summary:
      "Human Systems Integration and accessible experience design for a national behavioral-health program supporting people in crisis.",
    outcomes: [
      "Safe-state design for high-stakes user journeys",
      "AAA accessibility across the primary user surfaces",
      "Federal data-submitter workflows redesigned for clarity",
    ],
    url: `${BASE}/#case-samhsa`,
  },
  {
    id: "wcagtool",
    title: "WCAG AI Remediation Suite",
    category: "Accessibility · AI",
    role: "Product designer (self-initiated concept)",
    summary:
      "AAA-compliant remediation engine that pairs static analysis with AI suggestions, visual cues, and one-click fixes for accessibility issues.",
    outcomes: [
      "Portfolio-level accessibility dashboard",
      "AI suggestions grounded in WCAG success criteria",
      "Suggested fixes surfaced with visual before/after cues",
    ],
    url: `${BASE}/#case-wcagtool`,
    inHouseLab: true,
  },
  {
    id: "sentinel",
    title: "Sentinel — Guardrails & Red-Team Console for Agentic AI",
    category: "AI Safety",
    role: "Product designer (self-initiated concept)",
    summary:
      "Concept console for agentic AI safety: live action ledger, high-impact approval gates, and red-team scenarios that contain prompt-injection attempts.",
    outcomes: [
      "Every agent action visible in a live ledger",
      "High-impact actions pause for human approval",
      "Prompt-injection scenarios caught and contained",
    ],
    url: `${BASE}/#case-sentinel`,
    inHouseLab: true,
  },
  {
    id: "lumen",
    title: "Lumen — Source-Grounding & Transparency UX for Enterprise Knowledge AI",
    category: "RAG / Knowledge AI",
    role: "Product designer (self-initiated concept)",
    summary:
      "Concept RAG interface with traceable citations, a source inspector, and an insufficient-evidence state that refuses to fabricate.",
    outcomes: [
      "Grounded answers with per-claim citations",
      "Source inspector for evidence verification",
      "Explicit 'insufficient evidence' state to prevent hallucination",
    ],
    url: `${BASE}/#case-lumen`,
    inHouseLab: true,
  },
  {
    id: "revcycle",
    title: "RevAssist — AI-Assisted Revenue Cycle & Reimbursement Workspace",
    category: "Healthcare AI",
    role: "Product designer (self-initiated concept)",
    summary:
      "AI-assisted revenue-cycle workspace concept: coding suggestions, denial prediction, and reimbursement workflows with human-in-the-loop review.",
    outcomes: [
      "Suggested codes with confidence + rationale",
      "Denial risk surfaced before submission",
      "Human review as the default for high-impact edits",
    ],
    url: `${BASE}/#case-revcycle`,
    inHouseLab: true,
  },
];

const IDS = CASES.map((c) => c.id);

export default defineTool({
  name: "get_case_studies",
  title: "Get case studies",
  description:
    "Return public portfolio case studies for Senthil Nagappan. Pass an optional id to fetch a single case, or a category to filter. Each case includes title, role, summary, outcomes, and a link to the full write-up.",
  inputSchema: {
    id: z
      .string()
      .optional()
      .describe(`Optional case id. One of: ${IDS.join(", ")}.`),
    category: z
      .string()
      .optional()
      .describe(
        "Optional category filter, e.g. 'AI Experience Design', 'Design Systems', 'AI Governance', 'AI Safety'. Case-insensitive substring match.",
      ),
    in_house_lab_only: z
      .boolean()
      .optional()
      .describe("If true, return only self-initiated In-House AI Product Lab concepts."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id, category, in_house_lab_only }) => {
    let items = CASES;
    if (id) items = items.filter((c) => c.id === id);
    if (category) {
      const q = category.toLowerCase();
      items = items.filter((c) => c.category.toLowerCase().includes(q));
    }
    if (in_house_lab_only) items = items.filter((c) => c.inHouseLab);

    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { count: items.length, cases: items },
    };
  },
});
