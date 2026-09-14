import SectionIndex from "@/components/SectionIndex";

/**
 * Field Notes — short, operator-voice entries about solving real problems in
 * production environments. Execution notes, not essays.
 */

const NOTES = [
  {
    t: "Reducing cognitive load in enterprise workflows",
    b: "Reviewers were reading every finding at equal weight. I re-ranked the queue by risk and collapsed low-severity items behind a count. Time-on-decision dropped without anyone losing coverage.",
    tag: "Cognitive load",
  },
  {
    t: "Preventing system errors through AI-assisted validation",
    b: "Post-release audits caught defects too late to be cheap. Moving validation to a pre-merge gate turned compliance from an opinion at the end into a failing build at the start.",
    tag: "Validation",
  },
  {
    t: "Improving decisions in high-complexity environments",
    b: "A confidence score alone changes nothing. What changed behavior was showing the evidence the model used, at the point of decision, with a one-click override that got logged.",
    tag: "Decision support",
  },
  {
    t: "Iterating on live user behavior signals",
    b: "Override and dismissal telemetry is the honest evaluation set. When one rule hit a 60% dismissal rate, that was not user error — the rule was wrong and got retired.",
    tag: "Telemetry",
  },
  {
    t: "Working through ambiguity with stakeholders",
    b: "Every engagement starts with a complaint, not a spec. I write the problem statement down, read it back, and refuse to build until the customer agrees that is the problem.",
    tag: "Ambiguity",
  },
  {
    t: "Deployments stall on procurement, not models",
    b: "The longest delay I have shipped through was a security review, not an accuracy gap. I now plan auth, data handling, and review evidence in week one instead of week nine.",
    tag: "Real constraints",
  },
];

export default function FieldNotes({ n = "10" }: { n?: string }) {
  return (
    <section
      id="field-notes"
      aria-labelledby="field-notes-heading"
      className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2rem,4vw,3.5rem)]"
    >
      <SectionIndex n={n} label="Field Notes" />
      <h2
        id="field-notes-heading"
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight"
      >
        Field notes: real-world problem solving
      </h2>
      <p className="text-gray-700 text-base mb-8 max-w-3xl">
        Short notes from inside deployments — what actually moved the number, and what turned out
        not to be the problem.
      </p>

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,20rem),1fr))]">
        {NOTES.map((note) => (
          <article key={note.t} className="rounded-xl border border-gray-200 bg-white p-5">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))] mb-2">
              {note.tag}
            </p>
            <h3 className="text-base font-bold text-gray-900 mb-1.5 leading-snug">{note.t}</h3>
            <p className="text-[13px] text-gray-700 leading-relaxed">{note.b}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
