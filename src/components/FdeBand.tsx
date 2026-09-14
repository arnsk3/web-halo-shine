const BULLETS = [
  "Embedded with federal and healthcare engineering teams to deliver production AI systems under audit",
  "Translated Human Factors and HSI analysis into deployable system behavior, workflows, and API contracts",
  "Built AI-assisted decision systems integrated into live operational environments and CI/CD pipelines",
  "Worked across design, engineering, and governance to ship regulated AI — NIST AI RMF, ISO/IEC 42001, WCAG 2.2 AAA",
];

export default function FdeBand() {
  return (
    <section
      id="fde-experience"
      aria-labelledby="fde-band-heading"
      className="bg-[rgb(var(--c-tint-50))] border-y border-gray-200"
    >
      <div className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-8">
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
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-[13px] font-medium leading-snug text-gray-900"
            >
              {b}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[12.5px] leading-relaxed text-gray-700 max-w-4xl">
          Client-facing system delivery across healthcare, federal, and enterprise AI platforms —
          solutions engineering, applied AI engineering, systems implementation, human-in-the-loop
          integration, and production deployment.
        </p>
      </div>
    </section>
  );
}
