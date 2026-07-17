import { defineTool } from "@lovable.dev/mcp-js";

const BASE = "https://www.senthilnagappan.com";

export default defineTool({
  name: "get_about",
  title: "Get about / positioning",
  description:
    "Return the public 'about' summary for Senthil Nagappan — positioning, disciplines, and leadership pillars — for hiring managers or AI assistants asking who he is and what he does.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      name: "Senthil Nagappan",
      primary_positioning:
        "AI Experience Design & Human Systems Integration for regulated environments (healthcare, federal, accessibility).",
      disciplines: [
        "AI experience design (human–AI interaction, explainability, HITL)",
        "AI governance & model-risk UX (NIST AI RMF, EU AI Act, ISO 42001)",
        "Design systems at scale (50M+ users in program scope)",
        "Accessibility governance (WCAG 2.2 AAA, Section 508, CPACC)",
      ],
      leadership_pillars: [
        "Player-coach leadership",
        "Mentorship & team growth (scaled team to 15+)",
        "Cross-product systems thinking",
        "Executive & regulator readiness",
        "AI in the design process",
        "Culture of experimentation",
      ],
      portfolio_url: BASE,
      note: "In-House AI Product Lab entries (TrustLens, Clarity, Sentinel, Lumen, RevAssist, WCAG AI Remediation Suite) are self-initiated concepts, not shipped products.",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
