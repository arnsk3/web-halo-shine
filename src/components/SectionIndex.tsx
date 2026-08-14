// Signature visual device: a numbered "evidence rail" marker that heads
// every major section — monospace index, hairline, uppercase label.
export default function SectionIndex({
  n,
  label,
  tone = "light",
  className = "",
}: {
  n: string;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <div className={`flex items-center gap-3 mb-4 ${className}`} aria-hidden="true">
      <span
        className={`font-mono text-[11px] font-bold tabular-nums tracking-[0.18em] ${
          isDark ? "text-[rgb(var(--c-accent-on-dark))]" : "text-[rgb(var(--c-accent-on-light))]"
        }`}
      >
        {n}
      </span>
      <span className={`h-px w-8 ${isDark ? "bg-white/30" : "bg-[rgb(var(--c-primary)/0.3)]"}`} />
      <span
        className={`font-mono text-[11px] font-semibold uppercase tracking-[0.22em] ${
          isDark ? "text-white/80" : "text-gray-700"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
