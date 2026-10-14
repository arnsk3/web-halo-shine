import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search, Hammer, Plug, Gauge, Rocket, RefreshCw, Users, ShieldCheck, Accessibility, Eye, Scale,
  FileText, Layers, Database, Bot, CheckCircle2, MonitorSmartphone, Mail, Linkedin, Download,
} from "lucide-react";
import SectionIndex from "./SectionIndex";

const WRAP = "mx-auto w-full max-w-[1600px] px-[clamp(1.5rem,5vw,5rem)]";

const LOOP = [
  { id: "discover", label: "Discover", Icon: Search, text: "Customer & regulated-domain workflow discovery, problem framing, measurable success criteria." },
  { id: "build", label: "Build", Icon: Hammer, text: "LLM app development, RAG / enterprise knowledge, production React/TypeScript front-end, API integration." },
  { id: "integrate", label: "Integrate", Icon: Plug, text: "Connect AI to enterprise data, APIs, and existing workflows." },
  { id: "evaluate", label: "Evaluate", Icon: Gauge, text: "Groundedness, task success, failure modes — plus usability and accessibility as AI evaluation." },
  { id: "deploy", label: "Deploy", Icon: Rocket, text: "Human-in-the-loop oversight, auditability, security; NIST AI RMF / Section 508 / FISMA as implemented controls." },
  { id: "iterate", label: "Iterate", Icon: RefreshCw, text: "Evaluation- and feedback-driven improvement, regression tests, versioned evaluations." },
];

/** Subtle node-and-connection motif. Decorative only. */
function NodeMotif({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} preserveAspectRatio="none" viewBox="0 0 1200 400">
      <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.18">
        <path d="M0 320 L180 260 L360 300 L560 180 L760 230 L960 120 L1200 160" />
        <path d="M0 120 L220 160 L420 90 L640 140 L860 60 L1200 90" />
      </g>
      <g fill="currentColor" opacity="0.25">
        {[[180,260],[360,300],[560,180],[760,230],[960,120],[220,160],[420,90],[640,140],[860,60]].map(([x,y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />)}
      </g>
    </svg>
  );
}

function Pipeline() {
  return (
    <ol aria-label="Delivery pipeline: Discover, Build, Integrate, Evaluate, Deploy, Iterate" className="mt-10 grid list-none grid-cols-3 gap-y-6 p-0 sm:grid-cols-6">
      {LOOP.map(({ id, label, Icon }, i) => (
        <li key={id} className="relative flex flex-col items-center text-center">
          {i < LOOP.length - 1 && <span aria-hidden="true" className="absolute left-1/2 top-6 hidden h-px w-full bg-[rgb(var(--c-accent-on-dark)/0.5)] sm:block" />}
          <span
            aria-hidden="true"
            className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[rgb(var(--c-accent-on-dark))] bg-[rgb(var(--c-hero-mid))] motion-safe:animate-pulse"
            style={{ animationDelay: `${i * 300}ms`, animationDuration: "3s" }}
          >
            <Icon className="h-5 w-5 text-[rgb(var(--c-accent-on-dark))]" />
          </span>
          <span className="mt-2 font-mono text-[12px] font-semibold uppercase tracking-wider">{label}</span>
        </li>
      ))}
    </ol>
  );
}

function Loop() {
  const [active, setActive] = useState(0);
  return (
    <section id="the-loop" aria-labelledby="loop-heading" className="bg-[rgb(var(--c-paper))] py-14">
      <div className={WRAP}>
        <SectionIndex n="02" label="The Loop" />
        <h2 id="loop-heading" className="font-display text-3xl font-bold text-[rgb(var(--c-ink))]">How I deliver</h2>
        <div role="tablist" aria-label="Delivery stages" className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0">
          {LOOP.map(({ id, label, Icon }, i) => {
            const on = active === i;
            return (
              <div key={id} className="relative flex flex-1 items-center">
                <button
                  role="tab" id={`loop-tab-${id}`} aria-selected={on} aria-controls="loop-panel"
                  onClick={() => setActive(i)} onMouseEnter={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); const n = (i + 1) % LOOP.length; setActive(n); document.getElementById(`loop-tab-${LOOP[n].id}`)?.focus(); }
                    if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); const n = (i - 1 + LOOP.length) % LOOP.length; setActive(n); document.getElementById(`loop-tab-${LOOP[n].id}`)?.focus(); }
                  }}
                  tabIndex={on ? 0 : -1}
                  className={`flex min-h-11 w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors sm:flex-col sm:text-center ${on ? "border-[rgb(var(--c-primary))] bg-[rgb(var(--c-primary))] text-[rgb(var(--c-paper))]" : "border-[rgb(var(--c-line))] bg-[rgb(var(--c-tint-50))] text-[rgb(var(--c-ink))] hover:border-[rgb(var(--c-primary))]"}`}
                >
                  <Icon aria-hidden="true" className="h-5 w-5 shrink-0" />
                  <span className="font-display font-semibold"><span className="font-mono text-xs opacity-80">0{i + 1} </span>{label}</span>
                </button>
                {i < LOOP.length - 1 && <span aria-hidden="true" className="hidden h-px w-4 shrink-0 bg-[rgb(var(--c-primary)/0.4)] sm:block" />}
              </div>
            );
          })}
        </div>
        <div id="loop-panel" role="tabpanel" aria-labelledby={`loop-tab-${LOOP[active].id}`} className="mt-5 rounded-xl border border-[rgb(var(--c-line))] bg-[rgb(var(--c-tint-50))] p-6">
          <p className="font-display text-xl font-semibold text-[rgb(var(--c-ink))]">{LOOP[active].label}</p>
          <p className="mt-2 max-w-3xl text-[rgb(var(--c-copy))]">{LOOP[active].text}</p>
        </div>
        <p className="mt-4 text-sm italic text-[rgb(var(--c-copy))]">My Human Factors and accessibility expertise is visible at every stage — not bolted on at the end.</p>
      </div>
    </section>
  );
}

type Flow = { label: string; Icon: typeof FileText }[];
const PROJECTS: { name: string; status: string; problem: string; built: string; tags: string[]; flow: Flow; caption: string }[] = [
  {
    name: "Lumen — Human-Centered Enterprise Knowledge Assistant", status: "In Build",
    problem: "Employees can't tell whether an AI answer is actually supported by evidence.",
    built: "Production RAG over an enterprise document corpus — Python ingestion/retrieval, LLM generation with source citations and explicit “insufficient evidence” handling, a retrieval + groundedness evaluation harness, and a keyboard/screen-reader-accessible interface.",
    tags: ["RAG", "Python", "LLM API", "Evaluation", "Accessibility"],
    caption: "Lumen pipeline: documents, chunking and embeddings, vector retrieval, LLM, grounding and evaluation, accessible UI, answer with citations and limitations.",
    flow: [{ label: "Documents", Icon: FileText }, { label: "Chunk & embed", Icon: Layers }, { label: "Vector retrieval", Icon: Database }, { label: "LLM", Icon: Bot }, { label: "Grounding & eval", Icon: Gauge }, { label: "Accessible UI", Icon: Accessibility }, { label: "Answer + citations + limits", Icon: CheckCircle2 }],
  },
  {
    name: "TrustLens — AI Evaluation & Human Oversight", status: "Concept → In Build",
    problem: "Teams can't tell when an AI recommendation needs a human.",
    built: "A review interface showing AI recommendations alongside supporting evidence, with approve / reject / escalate, an audit trail, and a repeatable evaluation suite.",
    tags: ["Human Oversight", "Evaluation", "Auditability", "NIST AI RMF"],
    caption: "TrustLens flow: AI output, evidence check, human review with approve, reject or escalate, audit log.",
    flow: [{ label: "AI output", Icon: Bot }, { label: "Evidence check", Icon: Search }, { label: "Human review", Icon: Users }, { label: "Audit log", Icon: FileText }],
  },
  {
    name: "Accessible AI Assistant — Visual-Assistance App", status: "Deployed",
    problem: "Blind and low-vision users need real-time help understanding their surroundings.",
    built: "An end-to-end LLM app (React/TypeScript, serverless proxy to an LLM vision API) with real-time scene description, OCR, and product identification.",
    tags: ["LLM", "Accessibility", "React/TypeScript", "Deployed"],
    caption: "Visual-assistance data flow: phone camera, serverless proxy, LLM vision API, spoken description.",
    flow: [{ label: "Phone camera", Icon: MonitorSmartphone }, { label: "Serverless proxy", Icon: Plug }, { label: "LLM vision API", Icon: Bot }, { label: "Spoken description", Icon: Accessibility }],
  },
];

const IMPACT = [
  { title: "Federal accessibility automation", org: "SSA / Leidos", text: "AI-assisted validation embedded in CI/CD with human-in-the-loop review — traced 65% of defects to 8 reusable components, cut manual audit ~30%, saved $1.5M+ annually on a platform serving 50M+ users.", note: "Shown at authorized disclosure level." },
  { title: "Connected-device usability", org: "Best Buy Health", text: "Companion experiences for medical devices used by 1M+ patients; 510(k) human-factors validation; 30–40% drop-off reduction." },
  { title: "Enterprise design-system adoption", org: "GE HealthCare", text: "Reusable component system adopted across 10+ teams." },
];

const HF = [
  { label: "User & task analysis", Icon: Users },
  { label: "AI evaluation & reliability", Icon: Gauge },
  { label: "Accessible interaction design", Icon: Accessibility },
  { label: "Human oversight", Icon: Eye },
  { label: "Risk-based controls", Icon: Scale },
];

const TIMELINE = [
  { org: "GE HealthCare", title: "FDE / AI Experience Lead", line: "Enterprise healthcare AI experiences and a component system adopted across 10+ teams." },
  { org: "Leidos / SSA", title: "FDE / Product Owner", line: "AI-assisted accessibility validation embedded in federal CI/CD with human review." },
  { org: "Best Buy Health", title: "Human Factors lead", line: "Connected medical-device companion experiences and 510(k) human-factors validation." },
  { org: "SAMHSA / HHS", title: "Product Owner, BHSIS", line: "Behavioral-health data systems for federal reporting." },
  { org: "Earlier", title: "AAMC · CareFirst · JPMorgan · Morgan Stanley", line: "Regulated enterprise systems across healthcare and finance." },
];

const CAPS = [
  { title: "AI Application Development", items: ["Python", "TypeScript", "LLM APIs", "RAG"] },
  { title: "Enterprise Integration", items: ["REST APIs", "Data modeling", "Auth", "Pipelines"] },
  { title: "AI Evaluation", items: ["Groundedness", "Task success", "Regression testing"] },
  { title: "Human-Centered Engineering", items: ["WCAG", "Assistive tech", "Human Factors", "Usability testing", "Risk assessment"] },
];

export default function EnterpriseHome() {
  return (
    <>
      {/* 1. Hero */}
      <header className="relative isolate overflow-hidden bg-[rgb(var(--c-hero-dark))] text-[rgb(var(--c-paper))]">
        <NodeMotif className="text-[rgb(var(--c-accent-on-dark))]" />
        <div className={`${WRAP} relative py-14 sm:py-20`}>
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-[rgb(var(--c-accent-on-dark))]">Senthil Nagappan · Enterprise Forward-Deployed AI Engineer</p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl">From Enterprise AI Strategy to Working, Human-Centered AI Systems.</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed sm:text-lg">I'm an Enterprise Forward-Deployed AI Engineer. I combine hands-on AI development with 18+ years in accessibility, Human Factors, and complex regulated enterprise systems — to build AI that people can use, evaluate, and trust in high-consequence environments.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex min-h-11 items-center rounded-md bg-[rgb(var(--c-paper))] px-6 font-semibold text-[rgb(var(--c-primary))] hover:bg-[rgb(var(--c-tint-100))]">Explore AI Projects</a>
            <a href="#experience" className="inline-flex min-h-11 items-center rounded-md border border-[rgb(var(--c-accent-on-dark))] px-6 font-semibold hover:bg-[rgb(var(--c-primary))]">View Experience</a>
            <a href="/Senthil_Nagappan_Resume.pdf" download className="inline-flex min-h-11 items-center gap-1.5 px-2 text-sm font-semibold underline underline-offset-4"><Download aria-hidden="true" className="h-4 w-4" />Download Résumé</a>
          </div>
          <Pipeline />
        </div>
      </header>

      {/* 2. The Edge */}
      <section aria-labelledby="edge-heading" className="bg-[rgb(var(--c-primary))] py-12 text-[rgb(var(--c-paper))]">
        <div className={WRAP}>
          <SectionIndex n="01" label="The Edge" tone="dark" />
          <h2 id="edge-heading" className="sr-only">The edge</h2>
          <blockquote className="max-w-5xl font-display text-2xl font-semibold leading-snug sm:text-3xl">Most engineers can connect an LLM to your documents. I make sure your staff can tell when it's wrong, your screen-reader users can operate it, and your auditors can trace every decision — in the regulated environments where that's the difference between a pilot and a production system.</blockquote>
          <p className="mt-5 max-w-3xl italic text-[rgb(var(--c-accent-on-dark))]">In enterprise AI, adoption failure — not model failure — is what most often kills projects. I own the layer that prevents it.</p>
        </div>
      </section>

      {/* 3. The Loop */}
      <Loop />

      {/* 4. Featured projects */}
      <section id="projects" aria-labelledby="projects-heading" className="bg-[rgb(var(--c-tint-50))] py-14">
        <div className={WRAP}>
          <SectionIndex n="03" label="Featured Projects" />
          <h2 id="projects-heading" className="font-display text-3xl font-bold text-[rgb(var(--c-ink))]">AI projects, engineering-first</h2>
          <ul className="mt-8 grid list-none gap-6 p-0 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <li key={p.name} className="flex flex-col rounded-2xl border border-[rgb(var(--c-line))] bg-[rgb(var(--c-paper))] p-6">
                <span className="self-start rounded-full border border-[rgb(var(--c-primary))] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[rgb(var(--c-accent-on-light))]">{p.status}</span>
                <h3 className="mt-3 font-display text-xl font-bold text-[rgb(var(--c-ink))]">{p.name}</h3>
                <figure className="mt-4 rounded-xl bg-[rgb(var(--c-tint-100))] p-4">
                  <ol aria-hidden="true" className="flex list-none flex-col gap-1 p-0">
                    {p.flow.map(({ label, Icon }, i) => (
                      <li key={label} className="flex flex-col items-start">
                        <span className="flex items-center gap-2 text-[13px] font-medium text-[rgb(var(--c-ink))]"><Icon className="h-4 w-4 text-[rgb(var(--c-accent-on-light))]" />{label}</span>
                        {i < p.flow.length - 1 && <span className="ml-[7px] h-3 w-px bg-[rgb(var(--c-primary)/0.4)]" />}
                      </li>
                    ))}
                  </ol>
                  <figcaption className="sr-only">{p.caption}</figcaption>
                </figure>
                <p className="mt-4 text-sm text-[rgb(var(--c-copy))]"><strong className="text-[rgb(var(--c-ink))]">Problem:</strong> {p.problem}</p>
                <p className="mt-2 text-sm text-[rgb(var(--c-copy))]"><strong className="text-[rgb(var(--c-ink))]">What I built:</strong> {p.built}</p>
                <ul aria-label="Tags" className="mt-auto flex list-none flex-wrap gap-2 p-0 pt-4">
                  {p.tags.map((t) => <li key={t} className="rounded-md bg-[rgb(var(--c-tint-100))] px-2 py-1 text-xs font-semibold text-[rgb(var(--c-accent-on-light))]">{t}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Selected impact */}
      <section aria-labelledby="impact-heading" className="bg-[rgb(var(--c-paper))] py-14">
        <div className={WRAP}>
          <SectionIndex n="04" label="Selected Impact" />
          <h2 id="impact-heading" className="font-display text-3xl font-bold text-[rgb(var(--c-ink))]">Verified professional work</h2>
          <ul className="mt-8 grid list-none gap-6 p-0 md:grid-cols-3">
            {IMPACT.map((t) => (
              <li key={t.title} className="rounded-2xl border-l-4 border-[rgb(var(--c-primary))] bg-[rgb(var(--c-tint-50))] p-6">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[rgb(var(--c-accent-on-light))]">{t.org}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-[rgb(var(--c-ink))]">{t.title}</h3>
                <p className="mt-2 text-sm text-[rgb(var(--c-copy))]">{t.text}</p>
                {t.note && <p className="mt-2 text-xs italic text-[rgb(var(--c-copy))]">{t.note}</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Why Human Factors matters */}
      <section aria-labelledby="hf-heading" className="relative isolate overflow-hidden bg-[rgb(var(--c-hero-mid))] py-14 text-[rgb(var(--c-paper))]">
        <NodeMotif className="text-[rgb(var(--c-accent-on-dark))]" />
        <div className={`${WRAP} relative`}>
          <SectionIndex n="05" label="Differentiator" tone="dark" />
          <h2 id="hf-heading" className="font-display text-3xl font-bold">Why Human Factors matters in enterprise AI</h2>
          <ul className="mt-8 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-5">
            {HF.map(({ label, Icon }) => (
              <li key={label} className="flex flex-col items-center gap-2 rounded-xl border border-[rgb(var(--c-accent-on-dark)/0.4)] p-4 text-center">
                <Icon aria-hidden="true" className="h-7 w-7 text-[rgb(var(--c-accent-on-dark))]" />
                <span className="text-sm font-semibold">{label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl">This is how my background changes the way AI systems get built — not just whether they work, but whether they get adopted.</p>
        </div>
      </section>

      {/* 7. Experience */}
      <section id="experience" aria-labelledby="exp-heading" className="bg-[rgb(var(--c-paper))] py-14">
        <div className={`${WRAP} grid gap-10 lg:grid-cols-2`}>
          <div>
            <SectionIndex n="06" label="Experience" />
            <h2 id="exp-heading" className="font-display text-3xl font-bold text-[rgb(var(--c-ink))]">Condensed timeline</h2>
            <ol className="mt-8 list-none border-l-2 border-[rgb(var(--c-primary)/0.3)] p-0 pl-6">
              {TIMELINE.map((t) => (
                <li key={t.org} className="relative pb-6">
                  <span aria-hidden="true" className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-[rgb(var(--c-primary))] bg-[rgb(var(--c-paper))]" />
                  <h3 className="font-display font-bold text-[rgb(var(--c-ink))]">{t.org}</h3>
                  <p className="text-sm font-semibold text-[rgb(var(--c-accent-on-light))]">{t.title}</p>
                  <p className="text-sm text-[rgb(var(--c-copy))]">{t.line}</p>
                </li>
              ))}
            </ol>
          </div>
          {/* 8. Capabilities */}
          <div aria-labelledby="caps-heading" role="region">
            <SectionIndex n="07" label="Technical Capabilities" />
            <h2 id="caps-heading" className="font-display text-3xl font-bold text-[rgb(var(--c-ink))]">Grouped by activity</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CAPS.map((c) => (
                <div key={c.title} className="rounded-xl border border-[rgb(var(--c-line))] p-5">
                  <h3 className="font-display font-bold text-[rgb(var(--c-ink))]">{c.title}</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-[rgb(var(--c-copy))]">{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm italic text-[rgb(var(--c-copy))]">Actively deepening backend/MLOps and deployment tooling through the projects above.</p>
          </div>
        </div>
      </section>

      {/* 9. About + Contact */}
      <section aria-labelledby="about-contact-heading" className="bg-[rgb(var(--c-tint-50))] py-14">
        <div className={`${WRAP} grid gap-8 lg:grid-cols-[2fr_1fr]`}>
          <div>
            <SectionIndex n="08" label="About & Contact" />
            <h2 id="about-contact-heading" className="font-display text-3xl font-bold text-[rgb(var(--c-ink))]">18+ years, now building the AI layer</h2>
            <p className="mt-4 max-w-3xl text-[rgb(var(--c-copy))]">I've spent 18+ years making complex, regulated enterprise systems usable and accessible — across federal, healthcare, and finance. Today I apply that to AI engineering: building, integrating, and evaluating AI systems so the people who depend on them can trust and operate them.</p>
            <p className="mt-4 text-sm text-[rgb(var(--c-ink))]"><strong>Certifications:</strong> CPACC + WAS (CPWA) · CUA · CSM · AIGP (in progress)</p>
            <p className="mt-2 text-sm text-[rgb(var(--c-copy))]">Outside work: VP, Texas Astronomical Society.</p>
            <Link to="/about" className="mt-4 inline-flex min-h-11 items-center font-semibold text-[rgb(var(--c-accent-on-light))] underline underline-offset-4">Full story →</Link>
          </div>
          <ul className="flex list-none flex-col gap-3 p-0">
            <li><a href="mailto:arnsk3@gmail.com" className="flex min-h-11 items-center gap-2 rounded-lg bg-[rgb(var(--c-primary))] px-4 font-semibold text-[rgb(var(--c-paper))]"><Mail aria-hidden="true" className="h-4 w-4" />arnsk3@gmail.com</a></li>
            <li><a href="https://www.linkedin.com/in/senthil-nagappan" target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-2 rounded-lg border border-[rgb(var(--c-primary))] px-4 font-semibold text-[rgb(var(--c-accent-on-light))]"><Linkedin aria-hidden="true" className="h-4 w-4" />LinkedIn <span className="sr-only">(opens in new tab)</span></a></li>
            <li><a href="/Senthil_Nagappan_Resume.pdf" download className="flex min-h-11 items-center gap-2 rounded-lg border border-[rgb(var(--c-primary))] px-4 font-semibold text-[rgb(var(--c-accent-on-light))]"><Download aria-hidden="true" className="h-4 w-4" />Download résumé</a></li>
          </ul>
        </div>
      </section>

      <div className="bg-[rgb(var(--c-paper))] pt-12">
        <div className={WRAP}>
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[rgb(var(--c-accent-on-light))]">Deeper evidence</p>
          <p className="mt-1 text-[rgb(var(--c-copy))]">Full deployment detail, architecture, and case studies follow below.</p>
        </div>
      </div>
    </>
  );
}
