import { useEffect, useRef, useState } from "react";

type ThemeId =
  | "indigo"
  | "violet"
  | "emerald"
  | "ocean"
  | "teal"
  | "rose"
  | "amber"
  | "slate"
  | "mono";

type ThemeDef = { id: ThemeId; label: string; swatch: [string, string] };

// Swatch colors mirror the presets defined in index.css ([primary, accent]).
const THEMES: ThemeDef[] = [
  { id: "indigo", label: "Midnight Indigo", swatch: ["#312e81", "#6366f1"] },
  { id: "violet", label: "Royal Violet", swatch: ["#4c1d95", "#8b5cf6"] },
  { id: "emerald", label: "Emerald", swatch: ["#064e3b", "#22c55e"] },
  { id: "ocean", label: "Ocean Deep", swatch: ["#0c2340", "#2d8a9e"] },
  { id: "teal", label: "Teal & Coral", swatch: ["#134e5e", "#e76f51"] },
  { id: "slate", label: "Slate", swatch: ["#1e293b", "#64748b"] },
  { id: "mono", label: "Monochrome", swatch: ["#171717", "#737373"] },
];

const STORAGE_KEY = "site-theme";

function applyTheme(id: ThemeId) {
  document.documentElement.setAttribute("data-theme", id);
}

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<ThemeId>("indigo");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as ThemeId) || "indigo";
    setActive(saved);
    applyTheme(saved);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const select = (id: ThemeId) => {
    setActive(id);
    applyTheme(id);
    localStorage.setItem(STORAGE_KEY, id);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="fixed bottom-5 right-5 z-[90]">
      {open && (
        <div
          role="menu"
          aria-label="Color themes"
          className="absolute bottom-14 right-0 w-60 max-w-[80vw] rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl"
        >
          <p className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600">
            Choose a theme
          </p>
          <ul className="list-none p-0 m-0 max-h-[60vh] overflow-y-auto">
            {THEMES.map((t) => (
              <li key={t.id}>
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={active === t.id}
                  onClick={() => select(t.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left text-sm transition-colors min-h-11 ${
                    active === t.id
                      ? "bg-gray-100 font-semibold text-gray-900"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10"
                  >
                    <span className="h-full w-1/2" style={{ background: t.swatch[0] }} />
                    <span className="h-full w-1/2" style={{ background: t.swatch[1] }} />
                  </span>
                  <span className="flex-1">{t.label}</span>
                  {active === t.id && (
                    <span aria-hidden="true" className="text-[rgb(var(--c-accent))]">
                      ✓
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Change color theme"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--c-primary))] text-white shadow-xl ring-1 ring-black/10 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--c-accent))] focus-visible:ring-offset-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
      </button>
    </div>
  );
}
