import { ArrowDown, ArrowRight, Check, CircleDot, FileCheck2, GitBranch, ShieldCheck, Users, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CASE_STORIES } from "@/lib/case-story";

type Props = { id: string; role: string; metrics: readonly { value: string; label: string }[]; image?: string };

export default function CaseStoryVisuals({ id, role, metrics, image }: Props) {
  const story = CASE_STORIES[id];
  if (!story) return null;
  const stages = [{ key: "context", label: "01 · The problem" }, { key: "decision", label: "02 · The decision" }, { key: "system", label: "03 · The system" }, { key: "evidence", label: "04 · The evidence" }];
  return (
    <section aria-labelledby={`story-${id}`} className="my-10 min-w-0 text-[rgb(var(--c-ink))]">
      <div className="mb-7 border-b border-[rgb(var(--c-line))] pb-6">
        <p className="mb-3 font-mono text-xs font-semibold uppercase text-[rgb(var(--c-primary))]">Visual case briefing · {story.status}</p>
        <h2 id={`story-${id}`} className="font-display text-3xl font-bold">From the problem to the proof</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[rgb(var(--c-copy))]">Reconstructed diagrams based on this case narrative—not original client screenshots, research records, or live system telemetry.</p>
      </div>
      <Tabs defaultValue="context">
        <TabsList aria-label="Visual case story" className="mb-6 grid h-auto w-full grid-cols-2 gap-1 bg-[rgb(var(--c-tint-100))] p-1 lg:grid-cols-4">
          {stages.map(stage => <TabsTrigger key={stage.key} value={stage.key} className="min-h-12 whitespace-normal px-2 text-[rgb(var(--c-primary))] data-[state=active]:text-[rgb(var(--c-primary))]">{stage.label}</TabsTrigger>)}
        </TabsList>
        <TabsContent value="context">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              {image && <figure className="m-0 mb-5"><img src={image} alt="" loading="lazy" width={1536} height={1024} className="aspect-[16/9] w-full rounded-lg object-cover" /><figcaption className="mt-2 text-xs text-[rgb(var(--c-copy))]">Portfolio illustration · not documentary evidence</figcaption></figure>}
              <h3 className="text-xl font-bold leading-snug">{story.problem}</h3>
              <p className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-[rgb(var(--c-copy))]"><Users aria-hidden="true" className="mt-1 size-5 shrink-0 text-[rgb(var(--c-primary))]" /><span><strong className="block text-[rgb(var(--c-ink))]">People affected</strong>{story.audience}</span></p>
            </div>
            <figure className="m-0">
              <figcaption className="mb-4 text-lg font-bold">The workflow change</figcaption>
              <div className="grid grid-cols-2 gap-4">
                {[{ title: "Original friction", rows: story.before, improved: false }, { title: "Designed response", rows: story.after, improved: true }].map(path => <div key={path.title}>
                  <h4 className="mb-4 border-b border-[rgb(var(--c-line))] pb-3 text-sm font-bold">{path.title}</h4>
                  <ol className="m-0 list-none space-y-3 p-0">{path.rows.map((row, index) => <li key={row} className={`relative min-h-32 rounded-lg border p-4 ${path.improved ? "border-[rgb(var(--c-primary))] bg-[rgb(var(--c-tint-50))]" : "border-[rgb(var(--c-line))] bg-[rgb(var(--c-paper))]"}`}>
                    <span className="mb-3 block font-mono text-xs font-bold text-[rgb(var(--c-primary))]">0{index + 1}</span><p className="text-sm leading-relaxed">{row}</p>
                    {index < 2 && <ArrowDown aria-hidden="true" className="absolute -bottom-3 left-1/2 z-10 size-4 bg-[rgb(var(--c-paper))] text-[rgb(var(--c-primary))]" />}
                  </li>)}</ol>
                </div>)}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-[rgb(var(--c-copy))]">Conceptual task sequence, not a measured journey map or observed participant record.</p>
            </figure>
          </div>
        </TabsContent>
        <TabsContent value="decision">
          <h3 className="mb-6 max-w-3xl text-2xl font-bold">{story.decision}</h3>
          <div className="grid gap-5 md:grid-cols-2">
            {[{ title: "Path not chosen", text: story.rejected, icon: X }, { title: "Design decision", text: story.chosen, icon: Check }].map(({ title, text, icon: Icon }) => <article key={title} className="rounded-lg border border-[rgb(var(--c-line))] bg-[rgb(var(--c-tint-50))] p-6"><Icon aria-hidden="true" className="mb-5 size-8 text-[rgb(var(--c-primary))]" /><h4 className="mb-3 text-lg font-bold">{title}</h4><p className="text-base leading-relaxed text-[rgb(var(--c-copy))]">{text}</p></article>)}
          </div>
          <div className="mt-6 flex items-start gap-4 border-y border-[rgb(var(--c-line))] py-6"><ShieldCheck aria-hidden="true" className="size-7 shrink-0 text-[rgb(var(--c-primary))]" /><div><h4 className="mb-2 font-bold">The boundary that matters</h4><p className="text-sm leading-relaxed text-[rgb(var(--c-copy))]">{story.safeguard}</p></div></div>
          <p className="mt-5 text-sm leading-relaxed"><strong>Stated role:</strong> {role}</p>
        </TabsContent>
        <TabsContent value="system">
          <figure className="m-0">
            <figcaption className="mb-6 text-xl font-bold">Where the work connects</figcaption>
            <ol className="m-0 grid list-none gap-4 p-0 lg:grid-cols-5">{story.system.map((step, index) => <li key={step} className="relative min-w-0 rounded-lg border border-[rgb(var(--c-line))] bg-[rgb(var(--c-tint-50))] p-5"><GitBranch aria-hidden="true" className="mb-5 size-7 text-[rgb(var(--c-primary))]" /><span className="mb-2 block font-mono text-xs font-bold">0{index + 1}</span><h4 className="text-base font-bold leading-relaxed">{step}</h4>{index < 4 && <span aria-hidden="true" className="absolute -bottom-3 left-1/2 z-10 bg-[rgb(var(--c-paper))] text-[rgb(var(--c-primary))] lg:-right-4 lg:bottom-auto lg:left-auto lg:top-1/2"><ArrowDown className="size-4 lg:hidden" /><ArrowRight className="hidden size-4 lg:block" /></span>}</li>)}</ol>
            <div className="mt-6 flex items-start gap-3 border-l-2 border-[rgb(var(--c-primary))] py-2 pl-4"><CircleDot aria-hidden="true" className="mt-1 size-5 shrink-0 text-[rgb(var(--c-primary))]" /><p className="text-sm leading-relaxed"><strong className="block">Human control / validation boundary</strong>{story.safeguard}</p></div>
            <p className="mt-5 text-xs text-[rgb(var(--c-copy))]">Logical architecture reconstruction. No proprietary endpoints, production configurations, or confidential data are shown.</p>
          </figure>
        </TabsContent>
        <TabsContent value="evidence">
          <h3 className="mb-6 text-xl font-bold">Read the results in context</h3>
          <div className="grid gap-5 sm:grid-cols-3">{metrics.map(metric => <article key={metric.label} className="border-l-2 border-[rgb(var(--c-primary))] bg-[rgb(var(--c-tint-50))] p-5"><p className="mb-3 text-xs font-semibold text-[rgb(var(--c-copy))]">{id === "revcycle" && metric.value.includes("40") ? "Estimated benefit" : ["trustlens", "clinicalai", "sentinel", "lumen", "revcycle"].includes(id) ? "Concept figure · not independently validated" : id === "governance" || id === "wcagtool" ? "Stated scope / feature coverage" : "Reported program outcome / scale"}</p><p className="break-words font-display text-3xl font-bold text-[rgb(var(--c-primary))]">{metric.value}</p><h4 className="mt-3 text-sm font-semibold leading-relaxed">{metric.label}</h4></article>)}</div>
          <div className="mt-6 flex items-start gap-4 border-y border-[rgb(var(--c-line))] py-6"><FileCheck2 aria-hidden="true" className="size-7 shrink-0 text-[rgb(var(--c-primary))]" /><div><h4 className="mb-2 font-bold">Evidence limits</h4><p className="max-w-3xl text-sm leading-relaxed text-[rgb(var(--c-copy))]">{story.evidence}</p></div></div>
          <p className="mt-5 text-sm text-[rgb(var(--c-copy))]">Figures are reproduced from the case narrative. No invented baseline, sample size, causal attribution, or statistical chart is added.</p>
        </TabsContent>
      </Tabs>
    </section>
  );
}