// Real artifacts for Lumen. Leave null until the owner supplies a working URL / real figures.
export const LUMEN_LINKS: { demo: string | null; repo: string | null } = { demo: null, repo: null };

export type EvalRow = { set: string; hitRate: string | null; groundedness: string | null; notes: string };
export const LUMEN_EVAL: EvalRow[] = [
  { set: "Answerable questions (in-corpus)", hitRate: null, groundedness: null, notes: "Questions whose answer exists in the document set." },
  { set: "Unanswerable questions (out-of-corpus)", hitRate: null, groundedness: null, notes: "Should return “insufficient evidence”, not a guess." },
];

export const LUMEN_FAILURES: { title: string; handling: string | null }[] = [
  { title: "Failure case 1", handling: null },
  { title: "Failure case 2", handling: null },
  { title: "Failure case 3", handling: null },
];

/** "Deployed" is only allowed when both a live demo and a code repository exist. */
export const lumenStatus = (links = LUMEN_LINKS) => (links.demo && links.repo ? "Deployed" : "In Build");
