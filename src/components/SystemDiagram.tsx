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
    <figure className="portfolio-diagram">
      <figcaption>{title}</figcaption>
      <ol>
        {stages.map((stage, index) => <li key={stage.k}>
          <span className="portfolio-stage-index">{String(index + 1).padStart(2, "0")}</span>
          <strong>{stage.k}</strong>{stage.b && <p>{stage.b}</p>}
          {index < stages.length - 1 && <span className="portfolio-stage-arrow" aria-hidden="true">→</span>}
        </li>)}
      </ol>
      {loop && <p className="portfolio-diagram-loop"><span aria-hidden="true">↺</span><span><strong>Feedback loop: </strong>{loop}</span></p>}
    </figure>
  );
}
