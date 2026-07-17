import { defineTool } from "@lovable.dev/mcp-js";

const BASE = "https://www.senthilnagappan.com";

export default defineTool({
  name: "get_resume",
  title: "Get résumé",
  description:
    "Return the public download URL for Senthil Nagappan's résumé (PDF) along with a short profile summary.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      name: "Senthil Nagappan",
      headline:
        "AI Experience Design & Human Systems Integration for regulated environments",
      resume_pdf_url: `${BASE}/Senthil_Nagappan_Resume.pdf`,
      portfolio_url: BASE,
      credentials: [
        "CPACC",
        "WCAG 2.2 AAA",
        "NIST AI RMF",
        "FDA / IEC 62366",
        "DoDI 5000.95",
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
