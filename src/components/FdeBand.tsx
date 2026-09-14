const BULLETS = [
  "Embedded with federal and healthcare engineering teams to deliver production AI systems under audit",
  "Translated Human Factors and HSI analysis into deployable system behavior, workflows, and API contracts",
  "Built AI-assisted decision systems integrated into live operational environments and CI/CD pipelines",
  "Worked across design, engineering, and governance to ship regulated AI — NIST AI RMF, ISO/IEC 42001, WCAG 2.2 AAA",
];

export default function FdeBand() {
  return (
    <section
      aria-labelledby="fde-band-heading"
      className="bg-[rgb(var(--c-tint-100))] border-y border-[rgb(var(--c-border))]"
    >
      <div className="max-w-[1600px] mx-auto px-6 py-8">
        <h2
          id="fde-band-heading"
          className="text-[11px] font-bold uppercase tracking-[2px] text-[rgb(var(--c-accent-on-light))] mb-4"
        >
          Forward Deployed Engineering Experience
        </h2>
        <ul className="list-none p-0 m-0 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {BULLETS.map((b) => (
            <li
              key={b}
              className="rounded-lg border border-[rgb(var(--c-border))] bg-[rgb(var(--c-surface))] px-4 py-3 text-[13px] font-medium leading-snug text-[rgb(var(--c-text))]"
            >
              {b}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[12.5px] leading-relaxed text-[rgb(var(--c-text-muted))] max-w-4xl">
          Client-facing system delivery across healthcare, federal, and enterprise AI platforms —
          solutions engineering, applied AI engineering, systems implementation, human-in-the-loop
          integration, and production deployment.
        </p>
      </div>
    </section>
  );
}
