import { Link } from "react-router-dom";
import {
  Eye,
  Gauge,
  Lightbulb,
  Undo2,
  ArrowUpRight,
  UserCheck,
  ShieldCheck,
  Accessibility,
  Stethoscope,
} from "lucide-react";

/* ------------------------------------------------------------------
   Forward-Deployed AI Experience & Human Factors
   Shared building blocks used on the home page. Deep-teal tokens only.
   ------------------------------------------------------------------ */

import SectionIndex from "@/components/SectionIndex";

const SECTION =
  "w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-[clamp(2rem,4vw,3.5rem)]";

const IMPACT = [
  { v: "50M+", u: "users", l: "Federal platform serving all 50 states" },
  { v: "40+", u: "monthly releases", l: "Shipped into live CI/CD" },
  { v: "65%", u: "of defects → 8 components", l: "Fixed at the source" },
  { v: "$1.5M+", u: "saved", l: "~30% audit effort reduced" },
  { v: "18+", u: "years", l: "Healthcare, federal, enterprise" },
];

export function ImpactStrip() {
  return (
    <section
      aria-labelledby="impact-strip-heading"
      className="border-y border-gray-200 bg-white"
    >
      <div className="w-full max-w-[1600px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-6">
        <h2 id="impact-strip-heading" className="sr-only">
          Impact at a glance
        </h2>
        <dl className="flex flex-wrap gap-x-8 gap-y-5 justify-between">
          {IMPACT.map((s) => (
            <div key={s.l} className="min-w-[9rem] flex-1">
              <dt className="sr-only">{s.l}</dt>
              <dd>
                <span className="block font-display text-2xl font-extrabold text-[rgb(var(--c-primary))] tabular-nums">
                  {s.v}{" "}
                  <span className="text-sm font-semibold text-gray-700">{s.u}</span>
                </span>
                <span className="block text-[13px] text-gray-700 mt-1 leading-snug">
                  {s.l}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------------------------- Part D --------------------------------- */

type Deployment = {
  id: string;
  title: string;
  flagship?: boolean;
  role: string;
  context: string;
  outcome: string;
  to: string;
};

const DEPLOYMENTS: Deployment[] = [
  {
    id: "ssa",
    title: "Social Security Administration",
    flagship: true,
    role: "Experience, accessibility & human-factors lead",
    context:
      "Disability Case Processing System — federal caseworkers in all 50 states, continuous release cadence.",
    outcome:
      "AI-assisted accessibility validation embedded in CI/CD across 40+ monthly releases — ~30% less manual audit effort.",
    to: "/ai-deployment-ssa",
  },
  {
    id: "ge",
    title: "GE HealthCare",
    role: "Human factors engineer · Human systems integration lead",
    context:
      "Clinical imaging and care-workflow software used by clinicians in live hospital environments.",
    outcome:
      "Safety-critical interaction and oversight design under IEC 62366 and ISO 14971, supporting 1,200+ clinicians.",
    to: "/work/ge",
  },
  {
    id: "bestbuy",
    title: "Best Buy Health",
    role: "Human factors engineer · Experience lead",
    context:
      "Connected health and remote-monitoring services used by older adults and care agents at consumer scale.",
    outcome:
      "Accessible, escalation-aware interaction patterns carried from research into shipped product.",
    to: "/work/bestbuy",
  },
];

export function AIDeploymentSection() {
  return (
    <section id="ai-deployment" className={SECTION} aria-labelledby="ai-deployment-heading">
      <SectionIndex n="01" label="Forward-Deployed Experience" />
      <h2
        id="ai-deployment-heading"
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight"
      >
        Forward-Deployed Experience
      </h2>
      <p className="text-gray-700 text-base leading-relaxed max-w-3xl mb-8">
        Forward deployment is how I have worked across my career, not a title — embedded inside
        client engineering and delivery teams in regulated production environments, owning the
        last mile between what a platform can do and what a person can actually use, trust, and
        be accountable for.
      </p>

      <ul className="grid gap-6 list-none p-0 m-0 [grid-template-columns:repeat(auto-fit,minmax(min(100%,20rem),1fr))]">
        {DEPLOYMENTS.map((d) => (
          <li key={d.id} className="h-full">
            <article className="h-full flex flex-col rounded-xl bg-white border border-gray-200 p-6 transition-all duration-300 hover:border-[rgb(var(--c-primary)/0.35)] hover:shadow-lg">
              {d.flagship && (
                <p className="inline-flex self-start items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-[rgb(var(--c-tint-100))] text-[rgb(var(--c-accent-on-light))] border border-[rgb(var(--c-primary)/0.25)] mb-3">
                  Flagship deployment
                </p>
              )}
              <h3 className="font-bold text-gray-900 text-lg leading-snug mb-1.5">
                {d.title}
              </h3>
              <p className="text-[12px] font-medium text-gray-700 mb-3">{d.role}</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-gray-900">Deployment context: </span>
                {d.context}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Outcome: </span>
                {d.outcome}
              </p>
              <p className="mt-auto pt-5">
                <Link
                  to={d.to}
                  className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold bg-[rgb(var(--c-primary))] text-white hover:bg-[rgb(var(--c-accent-dark))] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-primary))] focus-visible:ring-offset-2"
                >
                  Read the {d.title} deployment
                  <span aria-hidden="true">→</span>
                </Link>
              </p>
            </article>
          </li>
        ))}
      </ul>

      {/* Deployed / built personal project — deliberately not a concept */}
      <article className="mt-8 rounded-xl border border-[rgb(var(--c-primary)/0.25)] bg-[rgb(var(--c-tint-50))] p-6">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-[rgb(var(--c-primary))] text-white mb-3">
          Deployed / Built
        </p>
        <h3 className="font-bold text-gray-900 text-lg mb-2">
          AI visual-assistance PWA
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed max-w-3xl">
          A working, shipped progressive web app that uses AI to describe surroundings and
          on-screen content for blind and low-vision users — designed, built, and released
          end-to-end. Personal project — built end-to-end, no client IP.
        </p>
        <p className="text-[13px] text-gray-700 mt-3">
          Live app and source repository links are being finalised and will be linked here.
        </p>
      </article>
    </section>
  );
}

/* ---------------------------- Part F --------------------------------- */

const PATTERNS = [
  {
    icon: Eye,
    t: "Disclosure",
    d: "The system says plainly that AI acted, at the moment of use.",
  },
  {
    icon: Gauge,
    t: "Confidence & Uncertainty",
    d: "Model certainty communicated so a person can act on it.",
  },
  {
    icon: Lightbulb,
    t: "Explainability",
    d: "The specific basis for THIS output, at the depth needed to accept or reject.",
  },
  {
    icon: Undo2,
    t: "Override & Correction",
    d: "A path to disagree as fast as agreeing.",
  },
  {
    icon: ArrowUpRight,
    t: "Escalation & Hand-off",
    d: "Defined conditions where the system stops and routes to a person.",
  },
  {
    icon: UserCheck,
    t: "Human-in-the-Loop Oversight",
    d: "Keeping people accountable, not rubber-stamping.",
  },
];

export function HumanAISystemsSection() {
  return (
    <section id="human-ai-design" className={SECTION} aria-labelledby="human-ai-heading">
      <SectionIndex n="04" label="Human-AI Design" />
      <h2
        id="human-ai-heading"
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight"
      >
        How I Design AI in Real Systems
      </h2>
      <p className="text-gray-700 text-base leading-relaxed max-w-3xl mb-8">
        The patterns that let people supervise a model rather than defer to it.
      </p>
      <ul className="grid gap-5 list-none p-0 m-0 [grid-template-columns:repeat(auto-fit,minmax(min(100%,17rem),1fr))]">
        {PATTERNS.map((p) => {
          const Icon = p.icon;
          return (
            <li key={p.t} className="h-full">
              <article className="h-full rounded-xl bg-white border border-gray-200 p-5 transition-all duration-300 hover:border-[rgb(var(--c-primary)/0.35)] hover:shadow-md">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[rgb(var(--c-tint-100))] text-[rgb(var(--c-accent-on-light))] mb-3"
                >
                  <Icon className="h-4.5 w-4.5" size={18} />
                </span>
                <h3 className="font-bold text-gray-900 text-[15px] mb-1.5">{p.t}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{p.d}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ---------------------------- Part G --------------------------------- */

const GOV_BLOCKS = [
  {
    icon: Accessibility,
    t: "Accessibility at scale",
    d: "WCAG 2.2 AA and Section 508 embedded into design systems and CI/CD by default, so conformance is structural rather than a late audit.",
    chips: ["IAAP CPACC", "IAAP WAS (CPWA)", "Section 508"],
  },
  {
    icon: ShieldCheck,
    t: "AI governance",
    d: "Human oversight, explainability, and responsible-AI controls designed as product behaviour, with audit readiness as a byproduct.",
    chips: ["NIST AI RMF", "ISO/IEC 42001 awareness", "AIGP (IAPP) — in progress"],
  },
  {
    icon: Stethoscope,
    t: "Regulated delivery",
    d: "Human factors engineering and risk management practice carried through regulated medical and federal delivery.",
    chips: ["FDA HFE", "IEC 62366", "ISO 14971", "Federal 508 compliance"],
  },
];

export function GovernanceAccessibilitySection() {
  return (
    <section
      id="governance-accessibility"
      className={SECTION}
      aria-labelledby="gov-access-heading"
    >
      <SectionIndex n="05" label="Governance & Accessibility" />
      <h2
        id="gov-access-heading"
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight"
      >
        Accessible <span className="text-[rgb(var(--c-accent-on-light))]">and</span> governable
      </h2>
      <p className="text-gray-700 text-base leading-relaxed max-w-3xl mb-8">
        I make AI both accessible and governable — the two things most AI deployments treat as
        afterthoughts.
      </p>
      <ul className="grid gap-6 list-none p-0 m-0 [grid-template-columns:repeat(auto-fit,minmax(min(100%,19rem),1fr))]">
        {GOV_BLOCKS.map((b) => {
          const Icon = b.icon;
          return (
            <li key={b.t} className="h-full">
              <article className="h-full flex flex-col rounded-xl bg-white border border-gray-200 p-6">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[rgb(var(--c-tint-100))] text-[rgb(var(--c-accent-on-light))] mb-3"
                >
                  <Icon size={18} />
                </span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{b.t}</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{b.d}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 list-none p-0 m-0">
                  {b.chips.map((c) => (
                    <li
                      key={c}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[rgb(var(--c-tint-50))] text-[rgb(var(--c-primary))] border border-[rgb(var(--c-primary)/0.2)]"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ---------------------------- Part I --------------------------------- */

const STEPS = [
  {
    t: "Field Immersion",
    d: "Embed with users and delivery teams; learn the real workflows, constraints, and compliance terrain first.",
  },
  {
    t: "AI Opportunity Framing",
    d: "Find where AI genuinely reduces effort or risk vs. adds fragility; every candidate gets a problem statement, an oversight requirement, and an outcome metric.",
  },
  {
    t: "Rapid Prototyping",
    d: "Prototype in real fidelity, including in code, to test the interaction and the trust model before commitment.",
  },
  {
    t: "Live Deployment",
    d: "Integrate into real delivery (CI/CD, existing platforms, governance gates) with oversight and accessibility built in.",
  },
  {
    t: "Continuous Validation",
    d: "Instrument for adoption and effectiveness (override rates, correction rates, task success, audit signals) and iterate.",
  },
];

const WEEK = [
  {
    d: "Mon — standing with the team",
    b: "In backlog refinement and architecture discussion, not a separate design review. I hear the constraint before it becomes a rewrite.",
  },
  {
    d: "Tue — in the field",
    b: "Sessions with the people who actually use the system — caseworkers, clinicians, agents. Recorded friction goes straight back to the sprint, same week.",
  },
  {
    d: "Wed — at the whiteboard with engineers",
    b: "We resolve the hard trade-off together: what the model may decide, what it must escalate, and what the interface has to disclose. I bring the oversight requirement; they bring what is feasible in the pipeline.",
  },
  {
    d: "Thu — prototype in real fidelity",
    b: "A working prototype in code or a real component, tested against the actual workflow — so the decision is validated before anyone commits build effort.",
  },
  {
    d: "Fri — into the release",
    b: "Acceptance criteria, component updates, and audit evidence land in the release train. Nothing waits for a separate design phase.",
  },
];

export function ForwardDeploymentModel() {
  return (
    <section id="deployment-model" className={SECTION} aria-labelledby="deployment-model-heading">
      <p className="text-[11px] font-bold uppercase tracking-[2px] text-[rgb(var(--c-accent-on-light))] mb-2">
        Forward Deployment Model
      </p>
      <h2
        id="deployment-model-heading"
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 tracking-tight"
      >
        My Forward Deployment Model
      </h2>
      <ol className="grid gap-5 list-none p-0 m-0 [grid-template-columns:repeat(auto-fit,minmax(min(100%,15rem),1fr))]">
        {STEPS.map((s, i) => (
          <li key={s.t} className="h-full">
            <article className="h-full rounded-xl bg-white border border-gray-200 p-5 border-t-4 border-t-[rgb(var(--c-primary))]">
              <p className="font-display text-sm font-extrabold text-[rgb(var(--c-accent-on-light))] tabular-nums mb-2">
                Step {i + 1}
              </p>
              <h3 className="font-bold text-gray-900 text-[15px] mb-1.5">{s.t}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{s.d}</p>
            </article>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-2xl border border-[rgb(var(--c-primary)/0.25)] bg-[rgb(var(--c-tint-50))] p-6 sm:p-8">
        <h3 className="font-display text-xl font-extrabold text-gray-900 mb-1.5">
          How I actually work with engineering — one week, embedded
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-5 max-w-3xl">
          A representative week on a regulated delivery program. I sit inside the delivery
          rhythm rather than reviewing it from outside — and I partner with engineering,
          I don&rsquo;t replace it.
        </p>
        <ol className="grid gap-4 list-none p-0 m-0 [grid-template-columns:repeat(auto-fit,minmax(min(100%,15rem),1fr))]">
          {WEEK.map((w) => (
            <li key={w.d} className="h-full">
              <article className="h-full rounded-xl bg-white border border-gray-200 p-4">
                <p className="font-display text-[11px] font-extrabold uppercase tracking-[1.5px] text-[rgb(var(--c-accent-on-light))] mb-1.5">
                  {w.d}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">{w.b}</p>
              </article>
            </li>
          ))}
        </ol>
        <p className="text-[13px] text-gray-800 leading-relaxed mt-5 max-w-3xl">
          <span className="font-semibold">What engineering gets from me:</span> decisions made
          in their sprint, not after it — oversight and accessibility requirements written as
          acceptance criteria, prototypes they can build against, and a named person who owns
          the human-side trade-off so it never stalls a release.
        </p>
      </div>
    </section>
  );
}

/* ---------------------------- Intro clip ------------------------------ */

const TRANSCRIPT = [
  "Most AI programs don\u2019t fail on the model. They fail at the last mile — the point where a real person in a regulated job has to understand the output, decide whether to trust it, override it when it\u2019s wrong, and stand behind that decision in an audit.",
  "That last mile is my work. I embed with engineering and delivery teams, design the disclosure, confidence, override, and escalation behaviour, make it accessible to everyone who has to use it, and wire the oversight evidence into the release itself — so the system is adopted rather than quietly abandoned.",
];

export function IntroClip() {
  return (
    <section id="intro" className={SECTION} aria-labelledby="intro-heading">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] items-start">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[2px] text-[rgb(var(--c-accent-on-light))] mb-2">
            In my own words
          </p>
          <h2
            id="intro-heading"
            className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight"
          >
            Sixty seconds on what I do
          </h2>
          {TRANSCRIPT.map((t) => (
            <p key={t.slice(0, 24)} className="text-gray-700 leading-relaxed mb-3">
              {t}
            </p>
          ))}
        </div>

        <div className="rounded-xl border border-[rgb(var(--c-primary)/0.25)] bg-[rgb(var(--c-tint-50))] p-5">
          <p className="text-sm font-bold text-gray-900 mb-1.5">Prefer a conversation?</p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Happy to walk through any of this live.
          </p>
          <a
            href="mailto:arnsk3@gmail.com"
            className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-lg text-sm font-semibold bg-[rgb(var(--c-primary))] text-white hover:bg-[rgb(var(--c-accent-dark))] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-primary))] focus-visible:ring-offset-2"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
