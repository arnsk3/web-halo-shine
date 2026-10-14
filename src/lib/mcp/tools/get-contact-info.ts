import { defineTool } from "@lovable.dev/mcp-js";

const BASE = "https://www.senthilnagappan.com";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Return public ways to contact Senthil Nagappan: portfolio site, contact section, and résumé link. Use this when a caller asks how to reach out, book a call, or hire.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      name: "Senthil Nagappan",
      portfolio_url: BASE,
      contact_section_url: `${BASE}/#contact`,
      resume_pdf_url: `${BASE}/Senthil_Nagappan_Resume.pdf`,
      availability:
        "Selectively taking on senior/director AI experience design & design leadership engagements.",
      note: "Use the contact section on the portfolio site for the fastest response.",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
