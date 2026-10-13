import { ArrowDown, ArrowRight, CheckCheck, FileText, GitMerge, Link2, LockKeyhole, ScanLine, ShieldCheck, UserCheck } from "lucide-react";
import { CASE_ARTIFACTS } from "@/lib/case-artifacts";

const panel = "border border-[rgb(var(--c-line))] bg-[rgb(var(--c-paper))] p-4 rounded-md min-w-0";
const label = "font-mono text-xs font-semibold uppercase text-[rgb(var(--c-primary))]";

export default function CaseArtifactVisual({ id }: { id: string }) {
  const artifact = CASE_ARTIFACTS[id];
  if (!artifact) return null;
  const { kind } = artifact;
  const Icon = kind === "boundary" ? LockKeyhole : kind === "provenance" ? Link2 : kind === "convergence" ? GitMerge : kind === "release" ? ScanLine : kind === "controls" ? ShieldCheck : UserCheck;
  return (
    <figure className="m-0 mb-8 overflow-hidden border-y border-[rgb(var(--c-line))] text-[rgb(var(--c-ink))]" aria-labelledby={`artifact-${id}`}>
      <div className="grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <figcaption className="flex flex-col justify-between gap-6 bg-[rgb(var(--c-primary))] p-6 text-[rgb(var(--c-tint-50))] sm:p-8">
          <div><p className="font-mono text-xs uppercase">{artifact.subtitle}</p><h3 id={`artifact-${id}`} className="mt-5 max-w-lg font-display text-3xl font-bold leading-tight">{artifact.title}</h3></div>
          <Icon aria-hidden="true" className="size-16" strokeWidth={1} />
          <p className="max-w-md text-sm leading-relaxed">{artifact.detail}</p>
        </figcaption>
        <div className="min-w-0 bg-[rgb(var(--c-tint-50))] p-5 sm:p-8">
          <p className={`${label} mb-6`}>Reconstructed design artifact · not a production screenshot</p>
          {kind === "release" && <div className="space-y-3">
            {artifact.labels.map((text, i) => <div key={text} className={`${panel} flex items-center gap-4`}><span className="font-mono text-xs text-[rgb(var(--c-primary))]">0{i + 1}</span><FileText aria-hidden="true" className="size-5 shrink-0 text-[rgb(var(--c-primary))]"/><span className="flex-1 text-sm font-semibold">{text}</span><ArrowDown aria-hidden="true" className="size-4 shrink-0" /></div>)}
            <div className="border-l-4 border-[rgb(var(--c-primary))] px-4 py-3"><p className={label}>Review boundary</p><p className="mt-2 font-bold">{artifact.center}</p></div>
          </div>}
          {kind === "convergence" && <div className="space-y-5">
            <div className="grid grid-cols-3 gap-2">{artifact.labels.map((text, i) => <div key={text} className={`${panel} px-3`}><span className={`${label} block mb-4`}>0{i + 1}</span><p className="text-sm font-semibold leading-relaxed">{text}</p></div>)}</div>
            <div aria-hidden="true" className="mx-6 h-7 border-x border-b border-[rgb(var(--c-primary))]"/>
            <div className="flex items-center gap-4 border-y border-[rgb(var(--c-primary))] py-5"><GitMerge aria-hidden="true" className="size-9 shrink-0 text-[rgb(var(--c-primary))]"/><p className="text-lg font-bold">{artifact.center}</p></div>
          </div>}
          {kind === "decision" && <div className="space-y-5">
            <div className="grid grid-cols-3 gap-2">{artifact.labels.map((text, i) => <div key={text} className={`${panel} px-3`}><span className={`${label} block mb-3`}>0{i + 1}</span><p className="text-sm font-semibold leading-relaxed">{text}</p></div>)}</div>
            <ArrowDown aria-hidden="true" className="mx-auto size-6 text-[rgb(var(--c-primary))]"/>
            <div className="flex items-center gap-4 border-2 border-[rgb(var(--c-primary))] p-5"><UserCheck aria-hidden="true" className="size-10 shrink-0 text-[rgb(var(--c-primary))]"/><div><p className={label}>Human decision</p><p className="mt-2 text-lg font-bold">{artifact.center}</p></div></div>
          </div>}
          {kind === "boundary" && <div className="border-2 border-dashed border-[rgb(var(--c-primary))] p-5">
            <p className={`${label} mb-5 flex items-center gap-2`}><LockKeyhole aria-hidden="true" className="size-5"/> Scoped action perimeter</p>
            <ol className="m-0 list-none space-y-3 p-0">{artifact.labels.map((text, i) => <li key={text} className={`${panel} flex items-center gap-4`}><span className={label}>0{i + 1}</span><span className="text-sm font-semibold">{text}</span></li>)}</ol>
            <div className="mt-5 flex items-center gap-3 border-t border-[rgb(var(--c-primary))] pt-5"><UserCheck aria-hidden="true" className="size-7 shrink-0"/><p className="font-bold">{artifact.center}</p></div>
          </div>}
          {kind === "provenance" && <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-5">
            <div className="space-y-3">{artifact.labels.map((text, i) => <div key={text} className={panel}><p className={`${label} mb-3`}>Source link 0{i + 1}</p><p className="text-sm font-semibold">{text}</p><div aria-hidden="true" className="mt-4 space-y-2"><div className="h-1.5 w-full bg-[rgb(var(--c-tint-200))]"/><div className="h-1.5 w-2/3 bg-[rgb(var(--c-tint-200))]"/></div></div>)}</div>
            <div className="flex flex-col justify-center border-l-2 border-[rgb(var(--c-primary))] pl-4"><Link2 aria-hidden="true" className="mb-5 size-10 text-[rgb(var(--c-primary))]"/><p className={label}>Linked review</p><p className="mt-3 text-lg font-bold">{artifact.center}</p><p className="mt-5 text-sm leading-relaxed">Source support remains inspectable at the decision point.</p></div>
          </div>}
          {kind === "controls" && <div>
            <div className="mb-3 grid grid-cols-[minmax(0,1fr)_auto] border-b border-[rgb(var(--c-line))] pb-3"><p className={label}>Control relationship</p><p className={label}>Review</p></div>
            {artifact.labels.map((text, i) => <div key={text} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-[rgb(var(--c-line))] py-5"><div className="flex items-start gap-3"><span className={label}>0{i + 1}</span><p className="text-sm font-semibold">{text}</p></div><UserCheck aria-hidden="true" className="size-6 text-[rgb(var(--c-primary))]"/></div>)}
            <div className="mt-5 flex items-center gap-3"><ShieldCheck aria-hidden="true" className="size-8 shrink-0 text-[rgb(var(--c-primary))]"/><p className="font-bold">{artifact.center}</p></div>
          </div>}
          <div className="mt-6 flex items-start gap-3 border-t border-[rgb(var(--c-line))] pt-5"><CheckCheck aria-hidden="true" className="size-6 shrink-0 text-[rgb(var(--c-primary))]"/><div><p className={label}>Designed response</p><p className="mt-2 font-bold">{artifact.output}</p></div><ArrowRight aria-hidden="true" className="ml-auto size-5 shrink-0 text-[rgb(var(--c-primary))]"/></div>
        </div>
      </div>
    </figure>
  );
}