/**
 * Minimal, technical system-flow diagram. Renders a labelled pipeline of
 * stages with an optional human-in-the-loop branch. No UI mockups — this is
 * meant to read like an architecture sketch in a mission report.
 */
export type DiagramStage = { k: string; b?: string };

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
    <figure className="m-0 rounded-lg border border-gray-200 bg-[rgb(var(--c-tint-50))] p-4">
      <figcaption className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-3">
        {title}
      </figcaption>
      <ol className="list-none p-0 m-0 flex flex-wrap items-stretch gap-2">
        {stages.map((s, i) => (
          <li key={s.k} className="flex items-stretch gap-2">
            <div className="rounded-md border border-gray-300 bg-white px-3 py-2 max-w-[13rem]">
              <p className="font-mono text-[9px] font-bold tabular-nums text-gray-600 mb-0.5">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="text-[12px] font-bold text-gray-900 leading-snug">{s.k}</p>
              {s.b && <p className="text-[11px] text-gray-700 leading-snug mt-0.5">{s.b}</p>}
            </div>
            {i < stages.length - 1 && (
              <span
                aria-hidden="true"
                className="self-center text-[rgb(var(--c-primary))] font-bold"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      {loop && (
        <p className="mt-3 flex items-start gap-2 text-[11px] text-gray-700 leading-relaxed">
          <span aria-hidden="true" className="font-mono font-bold text-[rgb(var(--c-primary))]">
            ↺
          </span>
          <span>
            <span className="font-semibold text-gray-900">Feedback loop: </span>
            {loop}
          </span>
        </p>
      )}
    </figure>
  );
}
