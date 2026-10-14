import { Link } from "react-router-dom";
import { Accessibility, Activity, ArrowDown, Bot, CheckCircle2, Code2, Database, ExternalLink, FileText, Gauge, Layers, Search, Sparkles } from "lucide-react";
import imgLumenHero from "@/assets/lumen-hero.jpg";
import { LUMEN_EVAL, LUMEN_FAILURES, LUMEN_LINKS, lumenStatus } from "@/lib/lumen";

const WRAP = "mx-auto w-full max-w-[1600px] px-[clamp(1.5rem,5vw,5rem)]";
const PIPELINE = [
  { label: "Documents", Icon: FileText },
  { label: "Chunking & Metadata", Icon: Layers },
  { label: "Embeddings", Icon: Sparkles },
  { label: "Vector Store", Icon: Database },
  { label: "Retriever", Icon: Search },
  { label: "LLM", Icon: Bot },
  { label: "Grounding & Evaluation checks", Icon: Gauge },
  { label: "Accessible UI", Icon: Accessibility },
  { label: "Answer + Citations + Limitations", Icon: CheckCircle2 },
];
const BUILT = [
  "I built Python ingestion, chunking and embeddings for an enterprise document set.",
  "I built vector retrieval that returns the passages each answer relies on.",
  "I built LLM generation with source citations, and an explicit “insufficient evidence” response when the documents don't support an answer.",
  "I built an evaluation harness for retrieval hit-rate and answer groundedness.",
  "I built a keyboard- and screen-reader-accessible interface.",
];
const TAGS = ["RAG", "Python", "LLM API", "Evaluation", "Accessibility"];
const H2 = "font-display text-2xl font-bold text-[rgb(var(--c-ink))]";
const PENDING = "pending — results added after eval run";

function LinkButton({ href, label, Icon }: { href: string | null; label: string; Icon: typeof Code2 }) {
  const cls = "inline-flex min-h-11 items-center gap-2 rounded-md px-5 font-semibold";
  if (!href) return <span aria-disabled="true" className={`${cls} cursor-not-allowed border border-dashed border-[rgb(var(--c-line))] text-[rgb(var(--c-copy))]`}><Icon aria-hidden="true" className="h-4 w-4" />{label} · coming</span>;
  return <a href={href} target="_blank" rel="noreferrer" className={`${cls} bg-[rgb(var(--c-primary))] text-[rgb(var(--c-paper))]`}><Icon aria-hidden="true" className="h-4 w-4" />{label}<span className="sr-only"> (opens in new tab)</span></a>;
}

export default function LumenCaseStudy() {
  const status = lumenStatus();
  return (
    <article className="bg-[rgb(var(--c-paper))] py-12 text-[rgb(var(--c-ink))]">
      <div className={WRAP}>
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[rgb(var(--c-copy))]">
          <Link to="/" className="underline underline-offset-4">Home</Link> / <Link to="/#projects" className="underline underline-offset-4">AI Product Lab</Link> / <span aria-current="page">Lumen</span>
        </nav>
        <span className="inline-block rounded-md border-2 border-dashed border-[rgb(var(--c-primary)/0.5)] px-3 py-1 font-mono text-xs font-bold uppercase text-[rgb(var(--c-primary))]">{status} · self-directed · not client work</span>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight">Lumen — Human-Centered Enterprise Knowledge Assistant</h1>
        <p className="mt-3 max-w-3xl text-[rgb(var(--c-copy))]">My own project. Not a production deployment; no customers, users or adoption are claimed.</p>
        <ul aria-label="Technologies" className="mt-5 flex list-none flex-wrap gap-2 p-0">{TAGS.map((t) => <li key={t} className="rounded-md bg-[rgb(var(--c-tint-100))] px-2 py-1 text-xs font-semibold text-[rgb(var(--c-accent-on-light))]">{t}</li>)}</ul>
        <div className="mt-6 flex flex-wrap gap-3"><LinkButton href={LUMEN_LINKS.demo} label="Live demo" Icon={ExternalLink} /><LinkButton href={LUMEN_LINKS.repo} label="View code (GitHub)" Icon={Code2} /></div>

        <figure className="m-0 mt-10"><img src={imgLumenHero} alt="Illustration: stacks of documents broken into connected nodes that converge into one answer, with threads linking back to source pages" width={1536} height={864} className="aspect-[16/7] w-full rounded-2xl object-cover" /><figcaption className="mt-2 text-xs text-[rgb(var(--c-copy))]">Concept illustration · not a product screenshot</figcaption></figure>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <section aria-labelledby="l-problem">
            <h2 id="l-problem" className={H2}>Problem</h2>
            <p className="mt-3 text-[rgb(var(--c-copy))]">Employees can't tell whether an AI answer is actually supported by evidence. In regulated settings, that uncertainty blocks adoption.</p>
            <h2 id="l-built" className={`${H2} mt-10`}>What I personally built</h2>
            <p className="mt-2 text-sm text-[rgb(var(--c-copy))]">Scope in build; not yet confirmed complete.</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[rgb(var(--c-copy))]">{BUILT.map((b) => <li key={b}>{b}</li>)}</ul>
          </section>
          <section aria-labelledby="l-arch">
            <h2 id="l-arch" className={H2}>Architecture</h2>
            <figure className="mt-4 grid gap-4 rounded-2xl bg-[rgb(var(--c-tint-50))] p-6 sm:grid-cols-[1fr_auto]">
              <ol className="m-0 list-none p-0">{PIPELINE.map(({ label, Icon }, i) => <li key={label} className="flex flex-col items-start">
                <span className="flex items-center gap-3 rounded-lg border border-[rgb(var(--c-line))] bg-[rgb(var(--c-paper))] px-4 py-2 font-semibold"><Icon aria-hidden="true" className="h-5 w-5 text-[rgb(var(--c-primary))]" />{label}</span>
                {i < PIPELINE.length - 1 && <ArrowDown aria-hidden="true" className="my-1 ml-5 h-4 w-4 text-[rgb(var(--c-primary))]" />}
              </li>)}</ol>
              <aside className="self-center rounded-lg border-l-4 border-[rgb(var(--c-primary))] bg-[rgb(var(--c-paper))] p-4 text-sm sm:max-w-[14rem]"><Activity aria-hidden="true" className="mb-2 h-5 w-5 text-[rgb(var(--c-primary))]" /><strong className="block">Logging & monitoring</strong>Spans every stage: retrieval results, prompts, citations and evaluation outcomes are logged.</aside>
              <figcaption className="text-xs text-[rgb(var(--c-copy))] sm:col-span-2">Planned logical architecture, not a production diagram.</figcaption>
            </figure>
          </section>
        </div>

        <section aria-labelledby="l-eval" className="mt-12">
          <h2 id="l-eval" className={H2}>Evaluation</h2>
          <div tabIndex={0} role="region" aria-label="Evaluation results table" className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <thead><tr className="border-b-2 border-[rgb(var(--c-primary))]">{["Test set", "Retrieval hit-rate", "Answer groundedness", "Notes"].map((h) => <th key={h} scope="col" className="p-3">{h}</th>)}</tr></thead>
              <tbody>{LUMEN_EVAL.map((r) => <tr key={r.set} className="border-b border-[rgb(var(--c-line))]">
                <th scope="row" className="p-3 font-semibold">{r.set}</th>
                <td className="p-3 italic text-[rgb(var(--c-copy))]">{r.hitRate ?? PENDING}</td>
                <td className="p-3 italic text-[rgb(var(--c-copy))]">{r.groundedness ?? PENDING}</td>
                <td className="p-3 text-[rgb(var(--c-copy))]">{r.notes}</td>
              </tr>)}</tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="l-fail" className="mt-12">
          <h2 id="l-fail" className={H2}>Failure modes</h2>
          <ol className="mt-4 grid list-none gap-4 p-0 md:grid-cols-3">{LUMEN_FAILURES.map((f) => <li key={f.title} className="rounded-xl border-2 border-dashed border-[rgb(var(--c-line))] p-5"><h3 className="font-display font-bold">{f.title}</h3><p className="mt-2 text-sm italic text-[rgb(var(--c-copy))]">{f.handling ?? "To be documented from a real test run."}</p></li>)}</ol>
        </section>
      </div>
    </article>
  );
}
