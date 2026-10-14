/**
 * Minimal, technical system-flow diagram. Renders a labelled pipeline of
 * stages with an optional human-in-the-loop branch. No UI mockups — this is
 * meant to read like an architecture sketch in a mission report.
 */
import { ArrowDown, ArrowRight, Database, Cpu, ShieldCheck, Monitor, GitBranch, UserCheck } from "lucide-react";
export type DiagramStage = { k: string; b?: string };
const stageIcon = (key: string) => /user|review|override|escalation/i.test(key) ? UserCheck : /llm|reason|service|tier|score/i.test(key) ? Cpu : /valid|gate|risk|auth/i.test(key) ? ShieldCheck : /output|interface/i.test(key) ? Monitor : /commit|hook|write/i.test(key) ? GitBranch : Database;

export default function SystemDiagram({
  title,
  stages,
  loop,
}: {
  title: string;
  stages: DiagramStage[];
  loop?: string;
}) {
  return (
    <figure className="m-0 rounded-lg border border-[rgb(var(--c-line))] bg-[rgb(var(--c-tint-50))] p-5 sm:p-8">
      <figcaption className="font-display text-lg font-bold text-[rgb(var(--c-primary))] mb-6">
        {title}
      </figcaption>
      <ol className="list-none p-0 m-0 grid gap-3 lg:grid-cols-5">
        {stages.map((s, i) => {
          const Icon = stageIcon(s.k);
          return (
          <li key={s.k} className="relative min-w-0">
            <div className="h-full rounded-md border border-[rgb(var(--c-line))] bg-[rgb(var(--c-paper))] px-4 py-5">
              <div className="mb-4 flex items-center justify-between"><Icon aria-hidden="true" className="size-7 text-[rgb(var(--c-primary))]" />
              <p className="font-mono text-xs font-bold tabular-nums text-[rgb(var(--c-copy))]">
                {String(i + 1).padStart(2, "0")}
              </p></div>
              <p className="text-sm font-bold text-[rgb(var(--c-ink))] leading-snug">{s.k}</p>
              {s.b && <p className="text-sm text-[rgb(var(--c-copy))] leading-relaxed mt-2">{s.b}</p>}
            </div>
            {i < stages.length - 1 && (
              <span aria-hidden="true" className="absolute -bottom-3 left-1/2 z-10 bg-[rgb(var(--c-tint-50))] text-[rgb(var(--c-primary))] lg:left-auto lg:-right-3 lg:top-1/2 lg:bottom-auto"><ArrowRight className="hidden size-4 lg:block" /><ArrowDown className="size-4 lg:hidden" /></span>
            )}
          </li>
        );})}
      </ol>
      {loop && (
        <p className="mt-6 flex items-start gap-2 text-sm text-[rgb(var(--c-copy))] leading-relaxed">
          <span aria-hidden="true" className="font-mono font-bold text-[rgb(var(--c-primary))]">
            ↺
          </span>
          <span>
            <span className="font-semibold text-[rgb(var(--c-ink))]">Feedback loop: </span>
            {loop}
          </span>
        </p>
      )}
    </figure>
  );
}
