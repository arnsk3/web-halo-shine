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
        <SectionIndex n="06b" label="The Loop" />
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

