import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Loader2, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Match = { id: string; title: string; url: string; why: string; evidence: string[]; relevance: "high" | "medium"; inHouseLab: boolean; category: string };
const EXAMPLES = [
  "Forward-deployed engineer embedding AI into clinical workflows at hospitals",
  "Accessibility lead for a federal platform with Section 508 requirements",
  "AI governance and human-oversight design for a regulated bank",
];

export default function RoleMatcher() {
  const [need, setNeed] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ summary: string; matches: Match[] } | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    if (need.trim().length < 10) { setError("Please describe the role or workflow in a sentence or two."); return; }
    setBusy(true); setError(""); setResult(null);
    const { data, error: err } = await supabase.functions.invoke("match-role", { body: { need } });
    setBusy(false);
    if (err) {
      let msg = "Something went wrong. Please try again.";
      try { const b = await (err as { context?: Response }).context?.json(); if (b?.error) msg = b.error; } catch { /* ignore */ }
      setError(msg); return;
    }
    if (data?.error) { setError(data.error); return; }
    setResult(data);
  }

  return (
    <section id="role-matcher" aria-labelledby="matcher-heading" className="bg-[rgb(var(--c-tint-100))] py-14">
      <div className="mx-auto w-full max-w-[1600px] px-[clamp(1.5rem,5vw,5rem)]">
        <p className="mb-2 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[rgb(var(--c-accent-on-light))]"><Sparkles aria-hidden="true" className="h-4 w-4" />AI-powered · for hiring managers</p>
        <h2 id="matcher-heading" className="font-display text-3xl font-bold text-[rgb(var(--c-ink))]">Find the work most relevant to your role</h2>
        <p className="mt-2 max-w-3xl text-[rgb(var(--c-copy))]">Describe the role or workflow you're hiring for. AI picks the closest case studies from this portfolio and quotes the supporting evidence. It only uses what's published here.</p>
        <form onSubmit={submit} className="mt-6 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <label htmlFor="matcher-need" className="mb-1 block font-semibold text-[rgb(var(--c-ink))]">Role or workflow</label>
            <textarea id="matcher-need" value={need} onChange={(e) => setNeed(e.target.value)} maxLength={2000} rows={3}
              aria-describedby="matcher-hint" placeholder="e.g. Customer-facing AI engineer for safety-critical device workflows"
              className="w-full rounded-lg border border-[rgb(var(--c-line))] bg-[rgb(var(--c-paper))] p-3 text-[rgb(var(--c-ink))]" />
            <p id="matcher-hint" className="mt-1 text-sm text-[rgb(var(--c-copy))]">Up to 2,000 characters. Don't include confidential information.</p>
          </div>
          <button type="submit" disabled={busy} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[rgb(var(--c-primary))] px-6 font-semibold text-[rgb(var(--c-paper))] disabled:opacity-70">
            {busy ? <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" /> : <Sparkles aria-hidden="true" className="h-4 w-4" />}
            {busy ? "Matching…" : "Recommend case studies"}
          </button>
        </form>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-sm text-[rgb(var(--c-copy))]">Try:</span>
          {EXAMPLES.map((x) => (
            <button key={x} type="button" onClick={() => setNeed(x)} className="min-h-8 rounded-full border border-[rgb(var(--c-line))] bg-[rgb(var(--c-paper))] px-3 text-sm text-[rgb(var(--c-ink))] hover:border-[rgb(var(--c-primary))]">{x}</button>
          ))}
        </div>

        <div aria-live="polite" className="mt-6">
          {error && <p role="alert" className="rounded-lg border border-[rgb(var(--c-danger-line))] bg-[rgb(var(--c-danger-bg))] p-4 text-[rgb(var(--c-danger))]">{error}</p>}
          {result && (
            <div>
              <p className="max-w-4xl text-[rgb(var(--c-ink))]">{result.summary}</p>
              <ul className="mt-4 grid list-none gap-4 p-0 md:grid-cols-2">
                {result.matches.map((m) => (
                  <li key={m.id} className={`flex flex-col rounded-2xl bg-[rgb(var(--c-paper))] p-5 ${m.inHouseLab ? "border-2 border-dashed border-[rgb(var(--c-primary)/0.4)]" : "border border-[rgb(var(--c-line))]"}`}>
                    <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[rgb(var(--c-accent-on-light))]">{m.relevance === "high" ? "Strong match" : "Related"} · {m.inHouseLab ? "Self-directed concept" : "Client work"}</p>
                    <h3 className="mt-1 font-display text-lg font-bold text-[rgb(var(--c-ink))]">{m.title}</h3>
                    <p className="mt-2 text-sm text-[rgb(var(--c-copy))]">{m.why}</p>
                    {m.evidence.length > 0 && <ul className="mt-2 list-disc pl-5 text-sm text-[rgb(var(--c-ink))]">{m.evidence.map((e) => <li key={e}>{e}</li>)}</ul>}
                    <Link to={m.url} className="mt-auto inline-flex items-center gap-1 pt-3 font-semibold text-[rgb(var(--c-accent-on-light))] underline underline-offset-4">Read the {m.title} case study<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-[rgb(var(--c-copy))]">AI-generated recommendations from published portfolio content. Please verify details in each case study.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
