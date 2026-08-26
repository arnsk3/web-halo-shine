/**
 * "Designing the Last Mile of AI Governance" — standalone case study page at
 * /ai-governance. Scaffolded with the site's case-study shell (gradient hero,
 * breadcrumb, role/timeline/org strip, ordered sections). Body copy is
 * placeholder — marked visually so it is obvious the narrative is to be
 * supplied.
 */

const PLACEHOLDER =
  "Content to be supplied — this section is scaffolded and ready for the final narrative.";

function Placeholder({ label }: { label: string }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-5">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600 mb-1">
        Placeholder · {label}
      </p>
      <p className="text-[13px] text-gray-600 leading-relaxed">{PLACEHOLDER}</p>
    </div>
  );
}

const RMF_SUBSECTIONS = ["Govern", "Map", "Measure", "Manage"] as const;

export default function AIGovernanceCaseStudy({ onHome }: { onHome: () => void }) {
  return (
    <div>
      {/* Hero — mirrors the case-study template shell */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[rgb(var(--c-hero-dark))] via-[rgb(var(--c-primary))] to-[rgb(var(--c-accent))] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2rem,4vw,3.5rem)]">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/85">
              <li>
                <button
                  onClick={onHome}
                  className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-1 hover:text-white underline underline-offset-2 decoration-white/30 hover:decoration-white/80 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-accent-light))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--c-primary))]"
                >
                  Home
                </button>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <button
                  onClick={onHome}
                  className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-1 hover:text-white underline underline-offset-2 decoration-white/30 hover:decoration-white/80 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-accent-light))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--c-primary))]"
                >
                  AI Governance
                </button>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span className="text-white/95 font-medium" aria-current="page">
                  Designing the Last Mile of AI Governance
                </span>
              </li>
            </ol>
          </nav>
          <button
            onClick={onHome}
            className="text-white/85 text-sm hover:text-white mb-6 inline-flex items-center min-h-[44px] gap-1.5 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-accent-light))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--c-primary))]"
          >
            <span aria-hidden="true">←</span> Back to AI Governance
          </button>
          <p className="text-[rgb(var(--c-accent-on-dark))] text-xs font-semibold tracking-[2px] uppercase mb-3">
            AI Governance · Responsible AI · Case Study
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4 tracking-tight">
            Designing the Last Mile of AI Governance
          </h1>
          <p className="text-white/90 text-base mb-8 max-w-xl leading-relaxed">
            How governance requirements become real product behavior — disclosure,
            explainability, oversight, and correction controls mapped to the NIST AI Risk
            Management Framework.
          </p>
          <dl className="flex gap-6 text-sm flex-wrap">
            <div>
              <dt className="text-white/85">Role</dt>
              <dd className="block font-semibold mt-0.5">To be supplied</dd>
            </div>
            <div>
              <dt className="text-white/85">Timeline</dt>
              <dd className="block font-semibold mt-0.5">To be supplied</dd>
            </div>
            <div>
              <dt className="text-white/85">Organization</dt>
              <dd className="block font-semibold mt-0.5">To be supplied</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Body — scaffolded sections in the requested order */}
      <div className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2rem,4vw,3.5rem)]">
        <div className="max-w-3xl space-y-12">
          <section aria-labelledby="aigc-problem">
            <h2
              id="aigc-problem"
              className="font-display text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-4"
            >
              The Problem
            </h2>
            <Placeholder label="The Problem" />
          </section>

          <section aria-labelledby="aigc-context">
            <h2
              id="aigc-context"
              className="font-display text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-4"
            >
              Context
            </h2>
            <Placeholder label="Context" />
          </section>

          <section aria-labelledby="aigc-approach">
            <h2
              id="aigc-approach"
              className="font-display text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-4"
            >
              Approach — Mapped to NIST AI RMF
            </h2>
            <div className="space-y-6">
              {RMF_SUBSECTIONS.map((s) => (
                <div key={s}>
                  <h3 className="font-display text-base font-bold text-gray-900 mb-2">{s}</h3>
                  <Placeholder label={`Approach — ${s}`} />
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="aigc-controls">
            <h2
              id="aigc-controls"
              className="font-display text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-4"
            >
              The Controls We Designed
            </h2>
            <Placeholder label="The Controls We Designed" />
          </section>

          <section aria-labelledby="aigc-outcome">
            <h2
              id="aigc-outcome"
              className="font-display text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-4"
            >
              Outcome
            </h2>
            <Placeholder label="Outcome" />
          </section>

          <section aria-labelledby="aigc-demonstrates">
            <h2
              id="aigc-demonstrates"
              className="font-display text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-4"
            >
              What This Demonstrates
            </h2>
            <Placeholder label="What This Demonstrates" />
          </section>
        </div>
      </div>
    </div>
  );
}
