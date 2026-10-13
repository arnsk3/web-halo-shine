import { ChevronDown, Layers } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";

export default function EvidenceDisclosure({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const revealTarget = () => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target && ref.current?.contains(target)) {
        ref.current.open = true;
        requestAnimationFrame(() => target.scrollIntoView());
      }
    };
    revealTarget();
    window.addEventListener("hashchange", revealTarget);
    return () => window.removeEventListener("hashchange", revealTarget);
  }, []);
  return (
    <details ref={ref} className="evidence-disclosure mx-auto w-full max-w-[1600px] border-y border-[rgb(var(--c-line))] bg-[rgb(var(--c-tint-50))]">
      <summary className="flex min-h-24 cursor-pointer items-center gap-4 px-[clamp(1.5rem,5vw,5rem)] py-6 text-[rgb(var(--c-ink))]">
        <Layers aria-hidden="true" className="size-7 shrink-0 text-[rgb(var(--c-primary))]" />
        <span className="min-w-0 flex-1"><span className="block font-display text-lg font-bold">{title}</span><span className="mt-1 block text-sm text-[rgb(var(--c-copy))]">{description}</span></span>
        <ChevronDown aria-hidden="true" className="disclosure-chevron size-5 shrink-0 transition-transform" />
      </summary>
      <div className="bg-[rgb(var(--c-paper))]">{children}</div>
    </details>
  );
}