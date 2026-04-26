import { useState, useEffect, useRef, ReactNode } from "react";

/* ═══════════════════════════════════════════
   SENTHIL KUMAR NAGAPPAN — PORTFOLIO SITE
   ═══════════════════════════════════════════ */

type Metric = { value: string; label: string };
type Section = { heading: string; content: string };
type CaseStudyType = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  hero: string;
  role: string;
  timeline: string;
  org: string;
  standards: string[];
  metrics: Metric[];
  sections: Section[];
  outcomes: string[];
  hsi: string[];
};

const CASE_STUDIES: CaseStudyType[] = [
  {
    id: "ge",
    tag: "AI Safety · FDA · Clinical Systems",
    title: "AI Safety Framework for Clinical Decision-Support",
    subtitle:
      "Established AI safety as the enterprise standard operating model at GE HealthCare — zero AI-enabled features now ship without passing this framework.",
    hero: "from-[#0f2027] via-[#1B3A5C] to-[#2E75B6]",
    role: "AI + Human Systems Integration Lead",
    timeline: "2025 – Present",
    org: "GE HealthCare",
    standards: ["FDA", "IEC 62366", "ISO 14971", "MIL-STD-1472H"],
    metrics: [
      { value: "10+", label: "Product Teams" },
      { value: "15+", label: "Leaders" },
      { value: "50+", label: "Stakeholders" },
    ],
    sections: [
      {
        heading: "The Challenge",
        content:
          "GE HealthCare had no structured approach to AI safety for clinical decision-support systems. No evaluation criteria. No deployment thresholds. No governance framework. AI-enabled features were being designed and released without a standardized process for validating safety, managing risk, or ensuring regulatory compliance.",
      },
      {
        heading: "My Approach",
        content:
          "I established the AI safety function from the ground up — defining model evaluation criteria, deployment thresholds, and human-in-the-loop decision frameworks that balance clinical safety, model accuracy, and clinician trust. I identified critical use errors (automation bias, overreliance, override failure) through FMEA, URRA, and cognitive task analysis prior to FDA submission.",
      },
      {
        heading: "What I Built",
        content:
          "A comprehensive AI safety governance framework covering the full lifecycle: how AI-driven systems are designed, evaluated, approved, and monitored. This included decision accountability structures, cross-functional review processes, and deployment readiness criteria. I led the cross-functional organization of 10+ teams across engineering, product, clinical, regulatory, and QA — partnering with senior leadership to shape the AI product strategy and roadmap.",
      },
    ],
    outcomes: [
      "Zero AI-enabled features now ship without passing this framework",
      "Institutionalized across 10+ product teams, 15+ leaders, 50+ stakeholders",
      "Accelerated regulatory approval cycles — reducing late-stage design rework",
      "Shortened FDA submission readiness across enterprise programs",
      "Established as the enterprise standard operating model",
    ],
    hsi: [
      "Human-in-the-loop frameworks",
      "Model evaluation criteria",
      "Deployment thresholds",
      "Decision accountability",
      "FMEA / URRA risk analysis",
    ],
  },
  {
    id: "ssa",
    tag: "Federal · AI · Accessibility",
    title: "SSA11y: AI-Powered Federal Compliance Platform",
    subtitle:
      "Conceived, built, and deployed an AI-driven compliance platform that replaced manual audits with continuous validation — saving $1.5M+ annually.",
    hero: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
    role: "Sr. UX & Accessibility Lead",
    timeline: "2022 – 2025",
    org: "Leidos / Social Security Administration",
    standards: ["WCAG 2.2 AA", "Section 508", "Llama2"],
    metrics: [
      { value: "50M+", label: "Citizens Impacted" },
      { value: "30%", label: "Audit Reduction" },
      { value: "$1.5M+", label: "Annual Savings" },
    ],
    sections: [
      {
        heading: "The Challenge",
        content:
          "SSA's Disability Case Processing System was slow, inaccessible, and error-prone across all 50 states. Manual accessibility audits delayed every release cycle. With 15+ modules and 40+ monthly releases, the audit bottleneck was costing millions annually and preventing compliant, timely delivery to 50M+ citizens.",
      },
      {
        heading: "The Strategic Decision",
        content:
          "After auditing the system, I discovered that 65% of critical violations originated from just 8 shared UI components. Fixing individual pages would be endless whack-a-mole. Instead, I proposed building SSA11y — an AI-powered accessibility testing tool integrated into CI/CD pipelines — and migrating the UI to USWDS-aligned components with accessibility built in.",
      },
      {
        heading: "What I Built",
        content:
          "SSA11y — built on Llama2 — scans code commits for WCAG violations, integrates into the CI/CD pipeline as a quality gate, and generates remediation recommendations ranked by severity. Simultaneously, I redesigned the core component library, migrating to USWDS-aligned patterns with embedded ARIA roles, keyboard navigation, and screen reader support.",
      },
    ],
    outcomes: [
      "Reduced audit effort 30% and saved $1.5M+ annually",
      "Eliminated 200+ WCAG violations across 15+ product modules",
      "Reduced usability defects 30–40%",
      "Adopted as compliance standard across federal systems",
      "Deployed across 40+ monthly releases",
    ],
    hsi: [
      "CI/CD automated compliance",
      "Llama2 AI model integration",
      "USWDS design system migration",
      "Enterprise governance framework",
    ],
  },
  {
    id: "bestbuy",
    tag: "Healthcare · Inclusive Design · MIL-STD-1472H",
    title: "Inclusive Design for 1M+ Elderly Users",
    subtitle:
      "Applied military human factors standards to eliminate missed emergency activations in consumer health products.",
    hero: "from-[#2d1b69] via-[#11998e] to-[#38ef7d]",
    role: "Inclusive Design & Accessibility Lead",
    timeline: "2021 – 2022",
    org: "Best Buy Health",
    standards: ["MIL-STD-1472H", "FDA", "IEC 62366", "WCAG 2.2 AA"],
    metrics: [
      { value: "1M+", label: "Elderly Users" },
      { value: "5", label: "Product Lines" },
      { value: "30-40%", label: "Fewer Defects" },
    ],
    sections: [
      {
        heading: "The Challenge",
        content:
          "Elderly users were missing emergency activations on Lively and Jitterbug health monitoring devices. Touch targets were too small, alerts relied on single modalities, and no enterprise accessibility governance existed across 5 product lines.",
      },
      {
        heading: "My Approach",
        content:
          "I applied MIL-STD-1472H human engineering design criteria — originally developed for military systems — to redesign critical interactions. Enlarged touch targets, engineered redundant alerts (visual + auditory + haptic), and validated all changes through usability testing with elderly and disabled users using JAWS, NVDA, VoiceOver, and TalkBack.",
      },
      {
        heading: "What Changed",
        content:
          "Established accessibility governance across all 5 product lines, institutionalizing compliance as an executive-approved design standard. This wasn't just fixing buttons — it was building the organizational infrastructure so these failures could never recur.",
      },
    ],
    outcomes: [
      "Eliminated missed emergency activations for 1M+ elderly users",
      "Reduced remediation cycles 30–40%",
      "Delivered FDA/IEC 62366-compliant solutions",
      "Governance adopted across all 5 product lines",
    ],
    hsi: [
      "MIL-STD-1472H control design",
      "Multi-modal alert engineering",
      "Usability validation with aging populations",
    ],
  },
  {
    id: "samhsa",
    tag: "Federal · $130M Portfolio · 7 Years",
    title: "$130M Federal Behavioral Health Program",
    subtitle:
      "Directed a national-scale portfolio end-to-end for 7 years — shaping technology strategy and influencing executive funding decisions.",
    hero: "from-[#1B3A5C] via-[#4a6fa5] to-[#E8913A]",
    role: "Sr. UX & Accessibility Program Manager",
    timeline: "2014 – 2021",
    org: "Eagle Technologies / HHS / SAMHSA",
    standards: ["Section 508", "WCAG 2.0 AA"],
    metrics: [
      { value: "$130M", label: "Portfolio Value" },
      { value: "6+", label: "Platforms" },
      { value: "2M+", label: "Monthly Visitors" },
    ],
    sections: [
      {
        heading: "The Challenge",
        content:
          "SAMHSA needed unified UX strategy and design governance across a sprawling federal behavioral health program — 6+ platforms, 50+ stakeholders, and competing priorities that required constant investment prioritization.",
      },
      {
        heading: "My Role",
        content:
          "I owned the full portfolio end-to-end with budget, staffing, and vendor accountability. I defined investment prioritization and funding strategy, influencing executive decisions and budget allocation across competing programs impacting national behavioral health systems.",
      },
      {
        heading: "What I Transformed",
        content:
          "Institutionalized HSI-driven design practices across the engineering lifecycle, reducing rework 30–40% and saving $2M+ annually. Defined Section 508 governance as organizational policy. Recruited, managed, and grew cross-functional teams of 15+ and vendor ecosystems supporting national-scale systems.",
      },
    ],
    outcomes: [
      "Reduced rework 30–40%, saving $2M+ annually",
      "Defined Section 508 governance as organizational policy",
      "Served 2M+ monthly visitors across 6+ platforms",
      "Influenced executive funding and technology strategy for 7 years",
    ],
    hsi: [
      "HSI-driven UCD integration",
      "Section 508 enterprise governance",
      "Investment prioritization",
    ],
  },
];

const CREDS = [
  "CPACC + WAS",
  "CUA",
  "CSM",
  "MIL-STD-1472H",
  "FDA / IEC 62366",
  "WCAG 2.2 AA",
  "MBSE / SysML",
];

type FadeInProps = { children: ReactNode; delay?: number; className?: string };
function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

type PageId = "home" | "about" | "approach" | "resume" | "contact" | "case";

function Nav({ page, setPage }: { page: PageId; setPage: (p: PageId) => void }) {
  const links: { id: PageId; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "approach", label: "Approach" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b border-gray-200"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <button
          onClick={() => setPage("home")}
          aria-label="Senthil Nagappan — go to home"
          className="flex items-center gap-2 group rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A5C] focus-visible:ring-offset-2"
        >
          <img
            src="/headshot.jpg"
            alt=""
            aria-hidden="true"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-semibold text-gray-900 text-sm tracking-tight hidden sm:block">
            Senthil Nagappan
          </span>
        </button>
        <ul className="flex gap-1 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => setPage(l.id)}
                aria-current={page === l.id ? "page" : undefined}
                className={`px-3 py-1.5 rounded-md text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A5C] focus-visible:ring-offset-2 ${
                  page === l.id
                    ? "bg-[#1B3A5C]/10 text-[#1B3A5C] font-semibold"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Home({
  setPage,
  setCase,
}: {
  setPage: (p: PageId) => void;
  setCase: (c: CaseStudyType) => void;
}) {
  return (
    <div>
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#0f1a2e] via-[#1B3A5C] to-[#2a5a8a] text-white">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-3xl mx-auto px-6 py-24 text-center relative">
          <FadeIn>
            <p className="text-[#E8913A] text-xs font-semibold tracking-[3px] uppercase mb-5">
              AI Safety · Human Systems Integration · Accessibility
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] mb-5 tracking-tight">
              Designing for systems where getting it wrong
              <span className="text-[#E8913A]"> isn't an option.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
              AI Safety & Human Systems Integration Leadership for Healthcare, Government,
              and Regulated Environments
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={() =>
                  document.getElementById("cases")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-[#1B3A5C] px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#E8913A] hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8913A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B3A5C]"
              >
                View Case Studies <span aria-hidden="true">↓</span>
              </button>
              <button
                onClick={() => setPage("about")}
                className="border border-white/60 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8913A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B3A5C]"
              >
                About Me
              </button>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* Credentials */}
      <div className="bg-[#fafbfc] border-b border-gray-100 py-4">
        <div className="max-w-4xl mx-auto flex justify-center gap-2 flex-wrap px-4">
          {CREDS.map((c) => (
            <span
              key={c}
              className="text-[10px] sm:text-xs px-3 py-1 rounded-full border border-[#1B3A5C]/15 text-[#1B3A5C] font-medium"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <section id="cases" className="max-w-5xl mx-auto px-6 py-16">
        <FadeIn>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Case Studies
          </h2>
          <p className="text-gray-500 text-sm mb-10">
            Enterprise-scale work in AI safety, accessibility, and regulated systems
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-5">
          {CASE_STUDIES.map((s, i) => (
            <FadeIn key={s.id} delay={i * 0.08}>
              <button
                onClick={() => {
                  setCase(s);
                  setPage("case");
                }}
                aria-label={`View case study: ${s.title}`}
                className="text-left w-full group rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A5C] focus-visible:ring-offset-2"
              >
                <div
                  className={`h-36 bg-gradient-to-br ${s.hero} rounded-t-xl flex items-end p-5`}
                >
                  <span className="text-white text-[10px] font-semibold tracking-widest uppercase">
                    {s.tag}
                  </span>
                </div>
                <div className="bg-white border border-t-0 border-gray-200 rounded-b-xl p-5 group-hover:border-[#1B3A5C]/30 group-hover:shadow-lg transition-all">
                  <h3 className="font-bold text-gray-900 text-base mb-1.5 leading-snug group-hover:text-[#1B3A5C] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-4 leading-relaxed line-clamp-2">
                    {s.subtitle}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {s.metrics.map((m) => (
                      <span
                        key={m.label}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100"
                      >
                        {m.value} {m.label}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Brief About */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <FadeIn>
          <div className="flex gap-5 items-start bg-white border border-gray-200 rounded-xl p-6">
            <img
              src="/headshot.jpg"
              alt="Senthil Kumar Nagappan"
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Senthil Kumar Nagappan</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-2">
                Senior AI and Human Systems Integration leader with 18+ years building
                enterprise functions that deliver safe, compliant, AI-driven products in
                regulated environments.
              </p>
              <button
                onClick={() => setPage("about")}
                className="text-[#1B3A5C] text-sm font-semibold hover:text-[#E8913A] transition-colors"
              >
                Read full story →
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

function CaseStudy({
  study,
  setPage,
}: {
  study: CaseStudyType;
  setPage: (p: PageId) => void;
}) {
  return (
    <div>
      {/* Hero */}
      <div className={`bg-gradient-to-br ${study.hero} text-white`}>
        <div className="max-w-3xl mx-auto px-6 py-16">
          <button
            onClick={() => setPage("home")}
            className="text-white/60 text-sm hover:text-white mb-6 inline-block transition-colors"
          >
            ← Back to Case Studies
          </button>
          <p className="text-[#E8913A] text-xs font-semibold tracking-[2px] uppercase mb-3">
            {study.tag}
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4 tracking-tight">
            {study.title}
          </h1>
          <p className="text-white/70 text-base mb-8 max-w-xl leading-relaxed">
            {study.subtitle}
          </p>
          <div className="flex gap-6 text-sm flex-wrap">
            <div>
              <span className="text-white/50">Role</span>
              <span className="block font-semibold mt-0.5">{study.role}</span>
            </div>
            <div>
              <span className="text-white/50">Timeline</span>
              <span className="block font-semibold mt-0.5">{study.timeline}</span>
            </div>
            <div>
              <span className="text-white/50">Organization</span>
              <span className="block font-semibold mt-0.5">{study.org}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <div className="grid grid-cols-3 gap-4">
            {study.metrics.map((m) => (
              <div
                key={m.label}
                className="text-center py-3 bg-emerald-50/60 rounded-lg border border-emerald-100"
              >
                <div className="text-2xl font-extrabold text-emerald-700">{m.value}</div>
                <div className="text-xs text-emerald-600/70 font-medium mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {study.sections.map((s, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="mb-10">
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#1B3A5C] text-white text-xs flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                {s.heading}
              </h2>
              <p className="text-gray-600 text-sm leading-[1.8] pl-8">{s.content}</p>
            </div>
          </FadeIn>
        ))}

        {/* Visual placeholder */}
        <FadeIn>
          <div className="my-8 h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center flex-col gap-2">
            <span className="text-gray-400 text-xs font-medium">
              PROCESS DIAGRAM / FRAMEWORK VISUAL
            </span>
            <span className="text-gray-300 text-[10px]">NDA-safe recreated artifact</span>
          </div>
        </FadeIn>

        {/* Outcomes */}
        <FadeIn>
          <div className="bg-[#1B3A5C] rounded-xl p-6 mb-8">
            <h3 className="text-white font-bold mb-4">Impact & Outcomes</h3>
            <div className="space-y-2.5">
              {study.outcomes.map((o, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-[#E8913A] text-base mt-0.5">✓</span>
                  <span className="text-white/85 text-sm leading-relaxed">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* HSI Sidebar */}
        <FadeIn>
          <details className="group border border-[#1B3A5C]/15 rounded-xl overflow-hidden">
            <summary className="px-5 py-3 cursor-pointer flex items-center justify-between bg-[#1B3A5C]/5 hover:bg-[#1B3A5C]/10 transition-colors">
              <span className="text-sm font-semibold text-[#1B3A5C]">
                How this maps to HSI methodology
              </span>
              <span className="text-[#1B3A5C]/50 text-xs group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>
            <div className="px-5 py-4 border-t border-[#1B3A5C]/10">
              <div className="flex gap-2 flex-wrap mb-3">
                {study.standards.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-[#1B3A5C]/10 text-[#1B3A5C] font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <ul className="space-y-1.5">
                {study.hsi.map((h, i) => (
                  <li key={i} className="text-xs text-gray-600 flex gap-2">
                    <span className="text-[#1B3A5C]">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </FadeIn>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <FadeIn>
        <div className="flex flex-col sm:flex-row gap-6 items-start mb-12">
          <img
            src="/headshot.jpg"
            alt="Senthil Kumar Nagappan"
            className="w-28 h-28 rounded-2xl object-cover flex-shrink-0"
          />
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-1">
              Senthil Kumar Nagappan
            </h1>
            <p className="text-[#E8913A] font-semibold text-sm mb-3">
              AI Safety & Human Systems Integration Leader
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              18+ years building enterprise functions that deliver safe, compliant,
              AI-driven products in regulated environments across healthcare, federal,
              retail, and defense sectors.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="prose prose-sm max-w-none mb-12">
          <p className="text-gray-600 leading-[1.9] mb-4">
            I've spent my career at the intersection of technology and human safety —
            building the systems, standards, and teams that ensure AI-driven products work
            correctly for the people who depend on them.
          </p>
          <p className="text-gray-600 leading-[1.9] mb-4">
            My methodology is grounded in structured engineering standards: MIL-STD-1472H
            for human engineering design criteria, ISO 14971 and IEC 62366 for medical
            device usability engineering, and MBSE/SysML for tracing human performance
            requirements through system architecture.
          </p>
          <p className="text-gray-600 leading-[1.9]">
            Whether the system is a clinical diagnostic tool or a government case
            processing platform, I apply the same disciplined approach: analyze the human
            in the system, design to validated criteria, test with representative
            operators, and document the evidence trail that proves the design works.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { num: "01", t: "Systems over screens", d: "Design the governance, not just the interface" },
            { num: "02", t: "Evidence over opinion", d: "FMEA, URRA, and user validation — not guesswork" },
            { num: "03", t: "Accessibility is architecture", d: "Built in, not bolted on" },
          ].map((c) => (
            <div
              key={c.num}
              className="p-5 rounded-xl bg-white border border-gray-200 hover:border-[#1B3A5C]/20 hover:shadow-sm transition-all"
            >
              <div className="text-3xl font-extrabold text-[#1B3A5C]/15 mb-2">{c.num}</div>
              <div className="font-bold text-gray-900 text-sm mb-1">{c.t}</div>
              <div className="text-gray-500 text-xs leading-relaxed">{c.d}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-gray-900 text-sm mb-3">
            Certifications & Affiliations
          </h3>
          <div className="flex gap-2 flex-wrap mb-3">
            {[
              "CPACC (IAAP)",
              "WAS (IAAP)",
              "CUA (HFI)",
              "CSM (Scrum Alliance)",
              "DAU HSI — In Progress",
            ].map((c) => (
              <span
                key={c}
                className="text-xs px-3 py-1.5 rounded-full bg-[#1B3A5C]/10 text-[#1B3A5C] font-medium"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-400">
            Recognized Practitioner: W3C WAI · IAAP · HFES
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Affiliations: IAAP · HFES · UXPA · W3C WAI (Volunteer)
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

function Approach() {
  const frameworks = [
    {
      title: "Human Systems Integration",
      sub: "The Governing Framework",
      items: [
        "DoDI 5000.95 lifecycle",
        "7 HSI domains",
        "Personnel · Training · HFE · Safety",
        "System-level integration",
      ],
      color: "#1B3A5C",
    },
    {
      title: "MIL-STD-1472H",
      sub: "Design Criteria for Safety-Critical Interfaces",
      items: [
        "Controls & displays",
        "Labeling & workspace",
        "Human error mitigation",
        "Operator performance",
      ],
      color: "#2E75B6",
    },
    {
      title: "MBSE / SysML",
      sub: "Tracing Human Requirements",
      items: [
        "Requirements traceability",
        "System architecture modeling",
        "Human performance allocation",
        "Verification evidence",
      ],
      color: "#1E5A3A",
    },
    {
      title: "Accessibility as Systems Discipline",
      sub: "Enterprise Governance at Scale",
      items: [
        "WCAG 2.2 AA / Section 508",
        "CI/CD automation (SSA11y)",
        "Design system integration",
        "Organizational policy",
      ],
      color: "#E8913A",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <FadeIn>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
          My Approach
        </h1>
        <p className="text-gray-500 text-sm mb-12 max-w-lg">
          How I ensure AI-driven systems are safe, accessible, and compliant — from
          requirements through deployment
        </p>
      </FadeIn>

      <div className="space-y-4 mb-12">
        {frameworks.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.06}>
            <div
              className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow"
              style={{ borderLeftWidth: 4, borderLeftColor: f.color }}
            >
              <h3 className="font-bold text-gray-900 text-base mb-0.5">{f.title}</h3>
              <p className="text-gray-400 text-xs mb-3">{f.sub}</p>
              <div className="flex gap-2 flex-wrap">
                {f.items.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="bg-[#1B3A5C] rounded-xl p-6 text-center">
          <h3 className="text-white font-bold mb-2">Where My Domains Converge</h3>
          <p className="text-white/60 text-xs mb-5 max-w-md mx-auto">
            Every project I lead integrates these four disciplines — AI safety isn't just
            governance, it's systems engineering, human factors, and accessibility working
            together.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {["HSI", "HFE", "A11y", "AI Safety"].map((d) => (
              <div
                key={d}
                className="w-16 h-16 rounded-full border-2 border-white/20 bg-white/5 flex items-center justify-center text-white text-xs font-bold"
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

function Resume() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-center">
      <FadeIn>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
          Resume
        </h1>
        <p className="text-gray-500 text-sm mb-8">Download or view inline</p>
        <a
          href="/Senthil_Nagappan_Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#1B3A5C] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#E8913A] transition-colors"
        >
          Download PDF ↓
        </a>
        <div className="mt-10 w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <iframe
            src="/Senthil_Nagappan_Resume.pdf"
            title="Senthil Nagappan Resume"
            className="w-full"
            style={{ height: "700px" }}
          >
            <p className="p-6 text-sm text-gray-500">
              Your browser can't display the PDF inline.{" "}
              <a
                href="/Senthil_Nagappan_Resume.pdf"
                download
                className="text-[#1B3A5C] underline hover:text-[#E8913A]"
              >
                Download the resume
              </a>{" "}
              instead.
            </p>
          </iframe>
        </div>
        <p className="mt-4 text-xs text-gray-400 sm:hidden">
          Can't see the preview?{" "}
          <a
            href="/Senthil_Nagappan_Resume.pdf"
            download
            className="text-[#1B3A5C] underline hover:text-[#E8913A]"
          >
            Download the PDF
          </a>
          .
        </p>
      </FadeIn>
    </div>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    try {
      const response = await fetch("https://formspree.io/f/xyklopnb", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Form error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <FadeIn>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2 text-center">
          Get in Touch
        </h1>
        <p className="text-gray-500 text-sm mb-8 text-center">
          Open to conversations about AI safety, human factors, and accessibility
          leadership
        </p>
        {submitted ? (
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold">
              ✓
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">Message Sent!</h2>
            <p className="text-sm text-gray-500">
              Thank you! I'll get back to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm text-[#1B3A5C] font-semibold hover:text-[#E8913A] transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 rounded-xl p-6 space-y-4"
          >
            {["Name", "Email", "Subject"].map((f) => (
              <div key={f}>
                <label className="text-xs font-semibold text-gray-700 block mb-1">
                  {f}
                </label>
                <input
                  type={f === "Email" ? "email" : "text"}
                  name={f.toLowerCase()}
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#1B3A5C] transition-colors"
                  placeholder={f === "Email" ? "your@email.com" : ""}
                />
              </div>
            ))}
            <div>
              <label className="text-xs font-semibold text-gray-700 block mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900 h-28 focus:outline-none focus:border-[#1B3A5C] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1B3A5C] text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-[#E8913A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
        <div className="text-center mt-6 space-y-1">
          <p className="text-xs text-gray-400">arnsk3@gmail.com · 571-403-0835</p>
          <p className="text-xs text-gray-400">linkedin.com/in/senthil-nagappan</p>
          <p className="text-xs text-gray-300">Vienna, VA (DMV) | Frisco, TX (DFW)</p>
        </div>
      </FadeIn>
    </div>
  );
}

function Footer({ setPage }: { setPage: (p: PageId) => void }) {
  return (
    <footer className="bg-[#111827] mt-16">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-start gap-6">
        <div>
          <p className="font-bold text-white text-sm">Senthil Kumar Nagappan</p>
          <p className="text-white/40 text-xs mt-1">
            AI Safety & Human Systems Integration Leader
          </p>
          <p className="text-white/25 text-xs mt-3">
            © 2026 · Designed & built with accessibility in mind
          </p>
        </div>
        <div className="flex gap-5 flex-wrap">
          {(["home", "about", "approach", "resume", "contact"] as PageId[]).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className="text-white/40 text-xs hover:text-white transition-colors capitalize"
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

const Index = () => {
  const [page, setPage] = useState<PageId>("home");
  const [activeCase, setActiveCase] = useState<CaseStudyType | null>(null);

  const navigate = (p: PageId) => {
    setPage(p);
    if (p !== "case") setActiveCase(null);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#1B3A5C] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8913A]"
      >
        Skip to main content
      </a>
      <Nav page={page} setPage={navigate} />
      <main id="main-content" tabIndex={-1}>
        {page === "home" && (
          <Home
            setPage={navigate}
            setCase={(c) => {
              setActiveCase(c);
            }}
          />
        )}
        {page === "case" && activeCase && (
          <CaseStudy study={activeCase} setPage={navigate} />
        )}
        {page === "about" && <About />}
        {page === "approach" && <Approach />}
        {page === "resume" && <Resume />}
        {page === "contact" && <Contact />}
      </main>
      <Footer setPage={navigate} />
    </div>
  );
};

export default Index;
