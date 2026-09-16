import SectionIndex from "@/components/SectionIndex";

/**
 * "What I built" + technical execution. Builder evidence stated as
 * Built / Integrated / Deployed, followed by the execution layer I work at.
 */

type Build = {
  title: string;
  built: string;
  integrated: string;
  deployed: string;
};

const BUILDS: Build[] = [
  {
    title: "AI accessibility validation service (SSA11y)",
    built:
      "LLM-based detection engine (Llama 2) with risk scoring, a detection API, and a reviewer queue for ambiguous findings.",
    integrated:
      "Called from CI/CD pipelines across multiple engineering teams; findings written back into the shared component library.",
    deployed:
      "Running as a pre-merge gate inside a federal platform shipping 40+ releases a month.",
  },
  {
    title: "Decision-support and prioritization engine",
    built:
      "Risk scoring with confidence thresholds, false-positive budget, point-of-use explanation, and override capture.",
    integrated:
      "Wired into work queues, ticketing, EHR-adjacent APIs, and role-scoped access already in place.",
    deployed:
      "Embedded in the production workflow across 15+ modules, with oversight telemetry shipped in the same release.",
  },
  {
    title: "Governance control plane & AI inventory",
    built:
      "Control library crosswalked to NIST AI RMF, ISO/IEC 42001 and the EU AI Act, plus drift and override observability.",
    integrated:
      "Lifecycle gates folded into the existing AI development process rather than run as a parallel review.",
    deployed:
      "Adopted across multiple AI initiatives; evidence captured continuously so audits read logs, not slide decks.",
  },
  {
    title: "Multimodal visual-assistance application",
    built:
      "Full-stack React application with a server-side AI proxy: real-time camera capture, OCR, and scene understanding.",
    integrated:
      "Model access brokered through a keyless proxy with rate limiting; installable as a progressive web app.",
    deployed:
      "Shipped publicly and used on real devices in real lighting, motion, and bandwidth conditions.",
  },
];

const EXECUTION = [
  {
    h: "APIs & system integration",
    items: [
      "REST, webhooks, event queues and contract-first schemas",
      "SSO, role-scoped access and audit logging",
      "Legacy system and data-quality triage before any model work",
    ],
  },
  {
    h: "AI pipelines",
    items: [
      "LLM task scoping, prompt guardrails and output filtering",
      "RAG: chunking, embeddings, vector search, grounding checks",
      "Golden-set evaluation, confidence thresholds, false-positive budgets",
    ],
  },
  {
    h: "CI/CD & delivery",
    items: [
      "Pre-merge gates, severity tiering, block vs. annotate policy",
      "Versioned component packages and release-safe rollout",
      "Runbooks, on-call handoff and post-deployment ownership transfer",
    ],
  },
  {
    h: "Frontend + backend interaction",
    items: [
      "React interfaces bound directly to service contracts",
      "Server-side proxies for model access and secret handling",
      "Telemetry emitted from the interface, not bolted on afterwards",
    ],
  },
];

export default function WhatIBuilt({ n = "03" }: { n?: string }) {
  return (
    <section
      id="what-i-built"
      aria-labelledby="what-i-built-heading"
      className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2rem,4vw,3.5rem)]"
    >
      <SectionIndex n={n} label="What I Built" />
      <h2
        id="what-i-built-heading"
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight"
      >
        What I built
      </h2>
      <p className="text-gray-700 text-base mb-8 max-w-3xl">
        Built, integrated, deployed — stated plainly for each system, followed by the technical
        layer I execute at.
      </p>

      <div className="grid gap-4 mb-10 [grid-template-columns:repeat(auto-fit,minmax(min(100%,22rem),1fr))]">
        {BUILDS.map((b) => (
          <article key={b.title} className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">{b.title}</h3>
            <dl className="grid gap-2 m-0">
              {(
                [
                  ["Built", b.built],
                  ["Integrated", b.integrated],
                  ["Deployed", b.deployed],
                ] as const
              ).map(([k, v]) => (
                <div key={k} className="grid gap-0.5">
                  <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[rgb(var(--c-accent-on-light))]">
                    {k}
                  </dt>
                  <dd className="m-0 text-[13px] leading-relaxed text-gray-700">{v}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">
        Technical execution
      </h3>
      <p className="text-gray-700 text-base mb-6 max-w-3xl">
        I work at the system level: the contract, the pipeline, the gate, and the telemetry — not
        only the interface on top of them.
      </p>
      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,17rem),1fr))]">
        {EXECUTION.map((g) => (
          <article key={g.h} className="rounded-xl border border-gray-200 bg-[rgb(var(--c-tint-50))] p-5">
            <h4 className="text-base font-bold text-gray-900 mb-3">{g.h}</h4>
            <ul className="list-none p-0 m-0 grid gap-1.5">
              {g.items.map((i) => (
                <li key={i} className="text-[13px] text-gray-700 leading-relaxed flex gap-2">
                  <span aria-hidden="true" className="text-[rgb(var(--c-accent-on-light))] font-bold">
                    →
                  </span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
