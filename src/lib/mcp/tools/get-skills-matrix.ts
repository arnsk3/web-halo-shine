import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

type Skill = { name: string; level: number; note: string };
type Group = { id: string; title: string; blurb: string; skills: Skill[] };

const LEVEL_LABEL = ["", "Aware", "Working", "Proficient", "Advanced", "Expert"];

const GROUPS: Group[] = [
  {
    id: "ai-product",
    title: "AI Product & Interaction Design",
    blurb:
      "Designing the surface where people and models meet — legible, controllable, trustworthy.",
    skills: [
      { name: "Human–AI interaction patterns", level: 5, note: "recommend / act / alert oversight models" },
      { name: "Explainability & confidence UX", level: 5, note: "calibrated trust, not raw percentages" },
      { name: "Human-in-the-loop & escalation", level: 5, note: "graceful degradation, safe states" },
      { name: "Agentic AI & tool-use UX", level: 4, note: "guardrails, approvals, action transparency" },
      { name: "RAG & source-grounding UX", level: 4, note: "citations, evidence linking, hallucination cues" },
      { name: "Prompt & conversation design", level: 4, note: "structured prompting, system instructions" },
    ],
  },
  {
    id: "ai-frameworks",
    title: "Governance Frameworks & Standards",
    blurb:
      "Translating dense AI, medical, and federal standards into enforceable design and delivery criteria.",
    skills: [
      { name: "NIST AI RMF 1.0", level: 5, note: "govern / map / measure / manage" },
      { name: "EU AI Act", level: 4, note: "risk tiers, prohibited & high-risk obligations" },
      { name: "ISO/IEC 42001 & 23894", level: 4, note: "AI management systems, risk guidance" },
      { name: "FDA / IEC 62366 usability", level: 5, note: "medical-device human-factors engineering" },
      { name: "WCAG 2.2 & Section 508", level: 5, note: "AA/AAA accessibility conformance" },
      { name: "DoDI 5000.95 & MIL-STD-1472H", level: 4, note: "Human Systems Integration standards" },
    ],
  },
  {
    id: "ai-operations",
    title: "Operational Governance & Evaluation",
    blurb:
      "Making compliance a built-in property — oversight tiers, audit evidence, and quality gates.",
    skills: [
      { name: "Model risk & oversight tiers", level: 5, note: "Model A/B/C governance at design intake" },
      { name: "Human-in-the-loop approval gates", level: 5, note: "override capture, full audit logging" },
      { name: "Audit-ready evidence packages", level: 5, note: "traceable proof captured as a byproduct" },
      { name: "Bias, fairness & drift monitoring", level: 4, note: "material-change alerts, fairness charts" },
      { name: "TEVV & red-team evaluation", level: 4, note: "test, evaluation, verification, validation" },
      { name: "CI/CD compliance quality gates", level: 4, note: "checks at commit, not post-deploy" },
    ],
  },
  {
    id: "ai-regulated",
    title: "Regulated-Domain Expertise",
    blurb:
      "Governing safety-critical AI where getting it wrong isn't an option — healthcare, federal, accessibility.",
    skills: [
      { name: "Clinical decision-support AI", level: 5, note: "1,200+ clinicians, oversight-tiered design" },
      { name: "Federal / DoD programs", level: 5, note: "HSI, national-scale behavioral-health systems" },
      { name: "Accessibility governance programs", level: 5, note: "org-wide policy across product lines" },
      { name: "Regulatory evidence & traceability", level: 5, note: "every control mapped to a standard" },
      { name: "Safe-state & failure-mode design", level: 4, note: "graceful degradation for high-stakes calls" },
      { name: "Executive & board readiness", level: 4, note: "regulator-ready governance readouts" },
    ],
  },
  {
    id: "ai-engineering",
    title: "AI Engineering & Delivery",
    blurb:
      "Building the front end that makes AI systems usable — accessible, performant, shipped.",
    skills: [
      { name: "AI data-viz component systems", level: 5, note: "risk gauges, model cards, audit timelines" },
      { name: "LLM integration (React + TS)", level: 4, note: "streaming, state, error handling" },
      { name: "CI/CD AI quality gates", level: 4, note: "SSA11y — checks at commit, not post-deploy" },
      { name: "Llama / GPT-class model use", level: 4, note: "pattern detection, suggested fixes" },
      { name: "Accessible AI interfaces", level: 5, note: "WCAG 2.2 AA/AAA, colorblind-safe charts" },
      { name: "Eval harness & telemetry UX", level: 4, note: "dashboards for model behavior over time" },
    ],
  },
];

export default defineTool({
  name: "get_skills_matrix",
  title: "Get AI skills matrix",
  description:
    "Return Senthil Nagappan's AI skills matrix. Groups cover AI product & interaction design, governance frameworks, operational governance, regulated-domain expertise, and AI engineering. Levels are 1–5 (Aware → Expert). Optionally filter to a single group.",
  inputSchema: {
    group_id: z
      .string()
      .optional()
      .describe(
        "Optional group id: ai-product, ai-frameworks, ai-operations, ai-regulated, ai-engineering.",
      ),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ group_id }) => {
    const items = group_id ? GROUPS.filter((g) => g.id === group_id) : GROUPS;
    const withLabels = items.map((g) => ({
      ...g,
      skills: g.skills.map((s) => ({ ...s, level_label: LEVEL_LABEL[s.level] })),
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(withLabels, null, 2) }],
      structuredContent: { legend: LEVEL_LABEL.slice(1), groups: withLabels },
    };
  },
});
