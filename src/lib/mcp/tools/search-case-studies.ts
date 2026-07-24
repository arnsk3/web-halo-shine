import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { CASES } from "./get-case-studies";

export default defineTool({
  name: "search_case_studies",
  title: "Search case studies",
  description:
    "Search Senthil Nagappan's portfolio case studies by keyword. Matches against title, summary, category, role, and outcomes (case-insensitive). Returns matching titles, summaries, and URLs.",
  inputSchema: {
    query: z
      .string()
      .min(1)
      .describe("Keyword or phrase to search for across case study title, summary, category, role, and outcomes."),
    limit: z
      .number()
      .int()
      .positive()
      .optional()
      .describe("Optional maximum number of results to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, limit }) => {
    const q = query.toLowerCase().trim();
    const matches = CASES.filter((c) => {
      const haystack = [
        c.title,
        c.summary,
        c.category,
        c.role,
        ...(c.outcomes ?? []),
      ]
        .join(" \n ")
        .toLowerCase();
      return haystack.includes(q);
    }).map((c) => ({
      id: c.id,
      title: c.title,
      summary: c.summary,
      url: c.url,
      category: c.category,
      inHouseLab: c.inHouseLab ?? false,
    }));

    const results = typeof limit === "number" ? matches.slice(0, limit) : matches;

    return {
      content: [
        {
          type: "text",
          text:
            results.length === 0
              ? `No case studies matched "${query}".`
              : JSON.stringify(results, null, 2),
        },
      ],
      structuredContent: { query, count: results.length, results },
    };
  },
});
