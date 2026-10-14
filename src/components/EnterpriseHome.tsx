import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search, Hammer, Plug, Gauge, Rocket, RefreshCw, Users, ShieldCheck, Accessibility, Eye, Scale,
  FileText, Layers, Database, Bot, CheckCircle2, MonitorSmartphone, Mail, Linkedin, Download,
} from "lucide-react";
import SectionIndex from "./SectionIndex";
import imgSsa from "@/assets/case-ssa.jpg";
import imgBbh from "@/assets/case-bestbuy.jpg";
import imgLumen from "@/assets/case-lumen.jpg";
import imgTrust from "@/assets/case-trustlens.jpg";
import imgVision from "@/assets/deployment-accessibility.jpg";
import imgHero from "@/assets/hero-systems.jpg";
import imgA11y from "@/assets/deployment-accessibility.jpg";
import imgLeader from "@/assets/persona-leadership.jpg";
const LAB_IMG: Record<string, string> = { Lumen: imgLumen, TrustLens: imgTrust, Accessible: imgVision };

const WRAP = "mx-auto w-full max-w-[1600px] px-[clamp(1.5rem,5vw,5rem)]";

const LOOP = [
  { id: "discover", label: "Discover", Icon: Search, text: "Customer & regulated-domain workflow discovery, problem framing, measurable success criteria." },
  { id: "build", label: "Build", Icon: Hammer, text: "LLM app development, RAG / enterprise knowledge, React/TypeScript front-end, API integration." },
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
    <section id="the-loop" aria-labelledby="loop-heading" className="bg-[rgb(var(--c-tint-50))] py-14">
      <div className={WRAP}>
        <SectionIndex n="05" label="Capabilities · The Loop" />
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
    name: "Lumen — Human-Centered Enterprise Knowledge Assistant", status: "In Build — self-directed",
    problem: "Employees can't tell whether an AI answer is actually supported by evidence.",
    built: "Building a RAG assistant over an enterprise document corpus — Python ingestion/retrieval, LLM generation with source citations and explicit “insufficient evidence” handling, a retrieval + groundedness evaluation harness, and a keyboard/screen-reader-accessible interface.",
    tags: ["RAG", "Python", "LLM API", "Evaluation", "Accessibility"],
    caption: "Lumen pipeline: documents, chunking and embeddings, vector retrieval, LLM, grounding and evaluation, accessible UI, answer with citations and limitations.",
    flow: [{ label: "Documents", Icon: FileText }, { label: "Chunk & embed", Icon: Layers }, { label: "Vector retrieval", Icon: Database }, { label: "LLM", Icon: Bot }, { label: "Grounding & eval", Icon: Gauge }, { label: "Accessible UI", Icon: Accessibility }, { label: "Answer + citations + limits", Icon: CheckCircle2 }],
  },
  {
    name: "TrustLens — AI Evaluation & Human Oversight", status: "Concept — self-directed",
    problem: "Teams can't tell when an AI recommendation needs a human.",
    built: "A review interface showing AI recommendations alongside supporting evidence, with approve / reject / escalate, an audit trail, and a repeatable evaluation suite.",
    tags: ["Human Oversight", "Evaluation", "Auditability", "NIST AI RMF"],
    caption: "TrustLens flow: AI output, evidence check, human review with approve, reject or escalate, audit log.",
    flow: [{ label: "AI output", Icon: Bot }, { label: "Evidence check", Icon: Search }, { label: "Human review", Icon: Users }, { label: "Audit log", Icon: FileText }],
  },
  {
    name: "Accessible AI Assistant — Visual-Assistance App", status: "Deployed — self-directed",
    problem: "Blind and low-vision users need real-time help understanding their surroundings.",
    built: "An end-to-end LLM app (React/TypeScript, serverless proxy to an LLM vision API) with real-time scene description, OCR, and product identification.",
    tags: ["LLM", "Accessibility", "React/TypeScript", "Deployed"],
    caption: "Visual-assistance data flow: phone camera, serverless proxy, LLM vision API, spoken description.",
    flow: [{ label: "Phone camera", Icon: MonitorSmartphone }, { label: "Serverless proxy", Icon: Plug }, { label: "LLM vision API", Icon: Bot }, { label: "Spoken description", Icon: Accessibility }],
  },
];

const PROOF = [
  { value: "50M+", label: "users on the SSA platform", Icon: Users, qual: "Program outcome · platform scope: 50M+ users across 50 states. My role: product owner for AI-assisted accessibility validation." },
  { value: "65% → 8", label: "of defects traced to 8 reused components", Icon: Layers, qual: "My direct contribution: traced defect clustering to 8 reused components, which drove ~30% manual-audit reduction (program outcome) and $1.5M+ estimated annual savings (program outcome)." },
  { value: "1M+", label: "patients using connected devices", Icon: MonitorSmartphone, qual: "Program scope at Best Buy Health. 30–40% drop-off reduction is a team outcome; my contribution was Human Factors validation and companion-experience design." },
];

const LAB = PROJECTS;

const HF = [
  { label: "User & task analysis", Icon: Users },
  { label: "AI evaluation & reliability", Icon: Gauge },
  { label: "Accessible interaction design", Icon: Accessibility },
  { label: "Human oversight", Icon: Eye },
  { label: "Risk-based controls", Icon: Scale },
];

const CAPS2 = [
  { title: "AI application development", Icon: Bot, items: ["Python", "TypeScript", "LLM APIs", "RAG"], proof: "Lumen (in build), visual-assistance app (deployed, self-directed)" },
  { title: "Enterprise integration", Icon: Plug, items: ["REST APIs", "Data modeling", "Auth", "Pipelines"], proof: "SSA CI/CD validation integration" },
  { title: "AI evaluation", Icon: Gauge, items: ["Groundedness", "Task success", "Regression testing"], proof: "Lumen evaluation harness, TrustLens evaluation suite (concept)" },
  { title: "Human-centered engineering", Icon: Accessibility, items: ["WCAG", "Assistive tech", "Human Factors", "Usability testing", "Risk assessment"], proof: "Best Buy Health 510(k) HF validation, SSA Section 508" },
];

function Badge({ children, tone = "client" }: { children: React.ReactNode; tone?: "client" | "lab" }) {
  return <span className={`self-start rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider ${tone === "client" ? "bg-[rgb(var(--c-primary))] text-[rgb(var(--c-paper))]" : "border-2 border-dashed border-[rgb(var(--c-accent-on-light))] text-[rgb(var(--c-accent-on-light))]"}`}>{children}</span>;
}

function Divider({ label }: { label: string }) {
  return (
    <div role="presentation" className="flex items-center gap-4 py-2">
      <span aria-hidden="true" className="h-px flex-1 bg-[rgb(var(--c-primary)/0.35)]" />
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[rgb(var(--c-accent-on-light))]">{label}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-[rgb(var(--c-primary)/0.35)]" />
    </div>
  );
}

function CaseBlock({ id, n, label, org, title, problem, built, outcome, qual, flow, img }: { img: string; id: string; n: string; label: string; org: string; title: string; problem: string; built: string; outcome: string; qual: string; flow: string[] }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="bg-[rgb(var(--c-paper))] py-14">
      <div className={`${WRAP} grid gap-8 lg:grid-cols-[3fr_2fr]`}>
        <div>
          <SectionIndex n={n} label={label} />
          <Badge>Shipped client work · {org}</Badge>
          <h2 id={`${id}-h`} className="mt-3 font-display text-3xl font-bold text-[rgb(var(--c-ink))]">{title}</h2>
          <dl className="mt-6 grid gap-4 text-[rgb(var(--c-copy))]">
            <div><dt className="font-semibold text-[rgb(var(--c-ink))]">Problem</dt><dd className="m-0">{problem}</dd></div>
            <div><dt className="font-semibold text-[rgb(var(--c-ink))]">What I did</dt><dd className="m-0">{built}</dd></div>
            <div><dt className="font-semibold text-[rgb(var(--c-ink))]">Outcome</dt><dd className="m-0">{outcome} <span className="block text-sm italic">{qual}</span></dd></div>
          </dl>
        </div>
        <div className="grid gap-4 self-start">
        <img src={img} alt="" loading="lazy" className="aspect-[16/9] w-full rounded-2xl object-cover" />
        <figure className="m-0 rounded-2xl border border-[rgb(var(--c-line))] bg-[rgb(var(--c-tint-50))] p-6">
          <figcaption className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-[rgb(var(--c-accent-on-light))]">How it worked</figcaption>
          <ol className="m-0 list-none p-0">
            {flow.map((f, i) => (
              <li key={f} className="flex flex-col">
                <span className="flex items-center gap-3 text-sm font-medium text-[rgb(var(--c-ink))]"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgb(var(--c-primary))] font-mono text-xs text-[rgb(var(--c-paper))]">{i + 1}</span>{f}</span>
                {i < flow.length - 1 && <span aria-hidden="true" className="ml-[13px] h-4 w-px bg-[rgb(var(--c-primary)/0.4)]" />}
              </li>
            ))}
          </ol>
        </figure>
        </div>
      </div>
    </section>
  );
}

const TIMELINE2 = [
  { org: "GE HealthCare", title: "AI Experience Lead", line: "Healthcare AI experiences; reusable component system adopted across 10+ teams (team outcome; I led the system's design and adoption)." },
  { org: "SAMHSA / HHS", title: "Product Owner, BHSIS", line: "Behavioral-health data systems for federal reporting." },
  { org: "Earlier", title: "AAMC · CareFirst · JPMorgan · Morgan Stanley", line: "Regulated enterprise systems across healthcare and finance." },
];

export default function EnterpriseHome() {
  return (
    <>
      {/* 1. Hero */}
      <header className="relative isolate overflow-hidden bg-[rgb(var(--c-hero-dark))] text-[rgb(var(--c-paper))]">
        <NodeMotif className="text-[rgb(var(--c-accent-on-dark))]" />
        <div className={`${WRAP} relative py-14 sm:py-20`}>
          <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
            <div>
              <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-[rgb(var(--c-accent-on-dark))]">Senthil Nagappan · Forward-Deployed AI Product Engineer</p>
              <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl">Forward-Deployed AI Product Engineer — turning enterprise AI strategy into human-centered systems people can use and trust.</h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed sm:text-lg">I combine hands-on AI development with 18+ years in accessibility, Human Factors, and regulated enterprise systems — so AI gets adopted, evaluated, and audited in high-consequence environments.</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#ssa-case" className="inline-flex min-h-11 items-center rounded-md bg-[rgb(var(--c-paper))] px-6 font-semibold text-[rgb(var(--c-primary))] hover:bg-[rgb(var(--c-tint-100))]">See my implementation work</a>
                <a href="mailto:arnsk3@gmail.com" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[rgb(var(--c-accent-on-dark))] px-6 font-semibold hover:bg-[rgb(var(--c-primary))]"><Mail aria-hidden="true" className="h-4 w-4" />Email me</a>
                <a href="/Senthil_Nagappan_Resume.pdf" download className="inline-flex min-h-11 items-center gap-1.5 px-2 text-sm font-semibold underline underline-offset-4"><Download aria-hidden="true" className="h-4 w-4" />Download résumé (PDF)</a>
              </div>
            </div>
            <img src={imgHero} alt="Illustration of a human profile formed from a network of connected data nodes — AI systems built around people" width={1344} height={768} className="w-full rounded-2xl border border-[rgb(var(--c-accent-on-dark)/0.3)] object-cover shadow-2xl" />
          </div>
          <Pipeline />
        </div>
      </header>

      {/* 2. Proof points */}
      <section aria-labelledby="proof-heading" className="bg-[rgb(var(--c-primary))] py-12 text-[rgb(var(--c-paper))]">
        <div className={WRAP}>
          <SectionIndex n="01" label="Proof points" tone="dark" />
          <h2 id="proof-heading" className="font-display text-2xl font-bold">Three proof points, with attribution</h2>
          <ul className="mt-6 grid list-none gap-6 p-0 md:grid-cols-3">
            {PROOF.map((p) => (
              <li key={p.label} className="rounded-2xl border border-[rgb(var(--c-accent-on-dark)/0.4)] p-6">
                <p.Icon aria-hidden="true" className="mb-3 h-7 w-7 text-[rgb(var(--c-accent-on-dark))]" />
                <p className="font-display text-4xl font-bold">{p.value}</p>
                <p className="mt-1 font-semibold">{p.label}</p>
                <p className="mt-3 text-sm text-[rgb(var(--c-accent-on-dark))]">{p.qual}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className={`${WRAP} bg-[rgb(var(--c-paper))] pt-10`}><Divider label="Shipped Client Work" /></div>

      {/* 3. SSA */}
      <CaseBlock id="ssa-case" n="02" label="Implementation case study" org="SSA / Leidos" title="Federal accessibility automation in CI/CD"
        problem="Accessibility defects on a federal platform were found late, by manual audit, and kept recurring."
        built="As product owner, I embedded AI-assisted accessibility validation into the CI/CD pipeline with human-in-the-loop review, and traced defect clustering to 8 reused components."
        outcome="65% of defects traced to 8 components; ~30% manual-audit reduction; $1.5M+ estimated annual savings."
        qual="Defect tracing is my direct contribution; audit reduction and savings are program outcomes on a platform serving 50M+ users. Shown at authorized disclosure level."
        img={imgSsa} flow={["Code commit", "Automated accessibility checks", "AI-assisted triage", "Human review (approve / fix)", "Component-level remediation", "Release gate"]} />

      {/* 4. Best Buy Health */}
      <CaseBlock id="bbh-case" n="03" label="Regulated-domain · Human Factors" org="Best Buy Health" title="Connected-device Human Factors validation"
        problem="Patients setting up connected medical devices were dropping off, and the companion experience had to meet FDA 510(k) human-factors expectations."
        built="I led Human Factors validation and designed the companion experiences — task analysis, use-related risk assessment, and usability testing."
        outcome="30–40% drop-off reduction across experiences used by 1M+ patients."
        qual="Team outcome; drop-off measured on device-setup flows. My contribution was HF validation and experience design."
        img={imgBbh} flow={["Task & use-risk analysis", "Companion experience design", "Formative usability testing", "510(k) HF validation", "Drop-off monitoring"]} />

      {/* 5. Lab */}
      <section id="projects" aria-labelledby="projects-heading" className="bg-[rgb(var(--c-tint-50))] py-14">
        <div className={WRAP}>
          <Divider label="AI Product Lab — Concepts & Builds" />
          <SectionIndex n="04" label="AI Product Lab" />
          <h2 id="projects-heading" className="font-display text-3xl font-bold text-[rgb(var(--c-ink))]">Self-directed AI builds, led by Lumen</h2>
          <p className="mt-2 max-w-3xl text-[rgb(var(--c-copy))]">These are my own projects — not client deployments. Each shows what I personally built and its current status.</p>
          <ul className="mt-8 grid list-none gap-6 p-0 lg:grid-cols-3">
            {LAB.map((p) => (
              <li key={p.name} className="flex flex-col rounded-2xl border-2 border-dashed border-[rgb(var(--c-primary)/0.4)] bg-[rgb(var(--c-paper))] p-6">
                <img src={LAB_IMG[p.name.split(" ")[0]]} alt="" loading="lazy" className="-mx-6 -mt-6 mb-4 aspect-[16/9] w-[calc(100%+3rem)] max-w-none rounded-t-2xl object-cover" />
                <Badge tone="lab">{p.status}</Badge>
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
                <ul aria-label="Tools" className="mt-auto flex list-none flex-wrap gap-2 p-0 pt-4">
                  {p.tags.map((t) => <li key={t} className="rounded-md bg-[rgb(var(--c-tint-100))] px-2 py-1 text-xs font-semibold text-[rgb(var(--c-accent-on-light))]">{t}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Capabilities + loop */}
      <Loop />
      <section aria-labelledby="caps-heading" className="bg-[rgb(var(--c-tint-50))] pb-14">
        <div className={WRAP}>
          <h2 id="caps-heading" className="font-display text-2xl font-bold text-[rgb(var(--c-ink))]">Technical capabilities, with the work that shows them</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {CAPS2.map((c) => (
              <div key={c.title} className="rounded-xl border border-[rgb(var(--c-line))] bg-[rgb(var(--c-paper))] p-5">
                <c.Icon aria-hidden="true" className="mb-2 h-6 w-6 text-[rgb(var(--c-accent-on-light))]" />
                <h3 className="font-display font-bold text-[rgb(var(--c-ink))]">{c.title}</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-[rgb(var(--c-copy))]">{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
                <p className="mt-3 text-xs text-[rgb(var(--c-ink))]"><strong>Shown in:</strong> {c.proof}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Accessibility statement */}
      <section id="accessibility-statement" aria-labelledby="a11y-heading" className="bg-[rgb(var(--c-paper))] py-14">
        <div className={`${WRAP} grid gap-8 lg:grid-cols-2`}>
          <div>
            <SectionIndex n="06" label="Accessibility statement" />
            <h2 id="a11y-heading" className="font-display text-3xl font-bold text-[rgb(var(--c-ink))]">This site is part of my evidence</h2>
            <p className="mt-4 text-[rgb(var(--c-copy))]">I design and build this site to <strong>WCAG 2.2 Level AA</strong>. Scope tested: the homepage, case-study pages, essays, dialogs, and the interactive delivery-loop diagram — with automated axe-core checks, keyboard-only navigation, and screen-reader passes at desktop and 390px mobile widths.</p>
            <ul className="mt-4 grid list-none gap-2 p-0 text-sm text-[rgb(var(--c-ink))] sm:grid-cols-2">
              {["Semantic landmarks & heading order", "Visible focus states", "Keyboard-operable loop diagram", "Contrast checked", "Alt text on every diagram", "Reflow with no horizontal scroll"].map((x) => <li key={x} className="flex items-center gap-2"><CheckCircle2 aria-hidden="true" className="h-4 w-4 text-[rgb(var(--c-accent-on-light))]" />{x}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl bg-[rgb(var(--c-tint-50))] p-6">
            <img src={imgA11y} alt="Accessibility testing workstation with assistive technology" loading="lazy" className="mb-5 aspect-[16/9] w-full rounded-xl object-cover" />
            <h3 className="font-display text-xl font-bold text-[rgb(var(--c-ink))]">Credentials</h3>
            <ul className="mt-3 list-none space-y-2 p-0 text-[rgb(var(--c-copy))]">
              <li><ShieldCheck aria-hidden="true" className="mr-2 inline h-4 w-4" />CPACC + WAS (CPWA)</li>
              <li><ShieldCheck aria-hidden="true" className="mr-2 inline h-4 w-4" />CUA — Certified Usability Analyst</li>
              <li><ShieldCheck aria-hidden="true" className="mr-2 inline h-4 w-4" />CSM — Certified ScrumMaster</li>
              <li><ShieldCheck aria-hidden="true" className="mr-2 inline h-4 w-4" />AIGP — in progress</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Leadership, writing, secondary */}
      <section id="experience" aria-labelledby="exp-heading" className="bg-[rgb(var(--c-tint-50))] py-14">
        <div className={`${WRAP} grid gap-10 lg:grid-cols-2`}>
          <div>
            <SectionIndex n="07" label="Leadership & secondary work" />
            <h2 id="exp-heading" className="font-display text-3xl font-bold text-[rgb(var(--c-ink))]">Supporting experience</h2>
            <img src={imgLeader} alt="Leading a cross-functional enterprise team session" loading="lazy" className="mt-6 aspect-[16/9] w-full rounded-2xl object-cover" />
            <ol className="mt-8 list-none border-l-2 border-[rgb(var(--c-primary)/0.3)] p-0 pl-6">
              {TIMELINE2.map((t) => (
                <li key={t.org} className="relative pb-6">
                  <span aria-hidden="true" className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-[rgb(var(--c-primary))] bg-[rgb(var(--c-paper))]" />
                  <h3 className="font-display font-bold text-[rgb(var(--c-ink))]">{t.org}</h3>
                  <p className="text-sm font-semibold text-[rgb(var(--c-accent-on-light))]">{t.title}</p>
                  <p className="text-sm text-[rgb(var(--c-copy))]">{t.line}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-[rgb(var(--c-ink))]">Why Human Factors matters in enterprise AI</h3>
            <blockquote className="mt-3 border-l-4 border-[rgb(var(--c-primary))] pl-4 text-[rgb(var(--c-ink))]">In enterprise AI, adoption failure — not model failure — is what most often kills projects. I own the layer that prevents it.</blockquote>
            <ul className="mt-5 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3">
              {HF.map(({ label, Icon }) => <li key={label} className="flex items-center gap-2 rounded-lg bg-[rgb(var(--c-paper))] p-3 text-sm font-semibold text-[rgb(var(--c-ink))]"><Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-[rgb(var(--c-accent-on-light))]" />{label}</li>)}
            </ul>
            <h3 className="mt-8 font-display text-xl font-bold text-[rgb(var(--c-ink))]">Writing</h3>
            <ul className="mt-2 list-none space-y-2 p-0">
              <li><Link to="/writing/ai-control-crosswalk" className="font-semibold text-[rgb(var(--c-accent-on-light))] underline underline-offset-4">Essay: mapping AI controls across NIST, ISO 42001 and the EU AI Act</Link></li>
              <li><Link to="/writing/oversight-tiers" className="font-semibold text-[rgb(var(--c-accent-on-light))] underline underline-offset-4">Essay: risk-based human oversight tiers</Link></li>
              <li><Link to="/about" className="font-semibold text-[rgb(var(--c-accent-on-light))] underline underline-offset-4">Read my full background on the About page</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. CTA + contact */}
      <section id="hire-cta" aria-labelledby="cta-heading" className="relative isolate overflow-hidden bg-[rgb(var(--c-hero-dark))] py-14 text-[rgb(var(--c-paper))]">
        <NodeMotif className="text-[rgb(var(--c-accent-on-dark))]" />
        <div className={`${WRAP} relative`}>
          <SectionIndex n="08" label="Contact" tone="dark" />
          <h2 id="cta-heading" className="font-display text-3xl font-bold">Hiring for an FDE or AI systems role?</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#ssa-case" className="inline-flex min-h-11 items-center rounded-md bg-[rgb(var(--c-paper))] px-6 font-semibold text-[rgb(var(--c-primary))]">See my implementation work</a>
            <a href="mailto:arnsk3@gmail.com?subject=Customer-facing%20AI%20deployment%20challenge" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[rgb(var(--c-accent-on-dark))] px-6 font-semibold"><Mail aria-hidden="true" className="h-4 w-4" />Contact me about a customer-facing AI deployment challenge</a>
            <a href="/Senthil_Nagappan_Resume.pdf" download className="inline-flex min-h-11 items-center gap-2 px-2 font-semibold underline underline-offset-4"><Download aria-hidden="true" className="h-4 w-4" />Download résumé (PDF)</a>
            <a href="https://www.linkedin.com/in/senthil-nagappan" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 px-2 font-semibold underline underline-offset-4"><Linkedin aria-hidden="true" className="h-4 w-4" />LinkedIn profile<span className="sr-only"> (opens in new tab)</span></a>
          </div>
          <p className="mt-6 text-sm text-[rgb(var(--c-accent-on-dark))]">Email: arnsk3@gmail.com · Open to remote and on-site client work.</p>
        </div>
      </section>

    </>
  );
}
