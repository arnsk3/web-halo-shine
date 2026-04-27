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
      "Built the AI safety function from the ground up at GE HealthCare — zero AI-enabled features now ship without passing this framework.",
    hero: "from-[#0f2027] via-[#1B3A5C] to-[#2E75B6]",
    role: "AI + Human Systems Integration Lead",
    timeline: "2025 – Present",
    org: "GE HealthCare",
    standards: ["FDA", "IEC 62366", "ISO 14971", "MIL-STD-1472H", "MBSE/SysML", "DoDI 5000.95"],
    metrics: [
      { value: "10+", label: "Product Teams" },
      { value: "15+", label: "Leaders" },
      { value: "50+", label: "Stakeholders" },
    ],
    sections: [
      {
        heading: "The Problem",
        content:
          "GE HealthCare was developing AI-enabled clinical decision-support systems for prenatal diagnostics — tools where a wrong output doesn't mean a bad user experience, it means a missed diagnosis. When I joined, the organization had no AI safety framework: no evaluation criteria, no deployment thresholds, no human-in-the-loop governance, no standardized method for identifying automation bias or overreliance risks. Each product team was making ad-hoc safety decisions independently. In a regulated environment governed by FDA, IEC 62366, and ISO 14971, this was a patient safety liability.",
      },
      {
        heading: "What I Was Hired To Do",
        content:
          "I was brought in to build the AI safety function from the ground up — not to consult or advise, but to own it. My mandate: define how AI-driven clinical systems are designed, evaluated, and approved. Establish governance that ensures patient safety without killing innovation velocity. Align engineering, clinical, regulatory, and QA teams around shared safety standards. Make the organization FDA-ready for AI-enabled product submissions.",
      },
      {
        heading: "The Governance Framework",
        content:
          "I established a comprehensive framework covering the full AI lifecycle: Design Phase — human-in-the-loop decision models defining when clinicians confirm, override, or defer to AI. Evaluation Phase — model evaluation criteria, deployment thresholds, FMEA and URRA for AI-specific failure scenarios, and cognitive task analysis of real clinical workflows. Approval Phase — deployment readiness criteria, go/no-go decision authority with cross-functional sign-off, and regulatory evidence documentation. Monitoring Phase — ongoing performance tracking, drift detection, and incident response protocols.",
      },
      {
        heading: "Human-in-the-Loop Decision Models",
        content:
          "The most critical piece. For every AI feature, I defined three models. Model A (AI Recommends, Human Decides): for high-risk diagnostic decisions — AI provides confidence scores, clinician accepts or overrides. Model B (AI Acts, Human Monitors): for routine measurements — AI operates within parameters, clinician monitors and intervenes. Model C (AI Alerts, Human Investigates): for screening workflows — AI flags anomalies, clinician investigates. Each model has specific design requirements preventing automation bias and alert fatigue.",
      },
      {
        heading: "The Hardest Decisions",
        content:
          "Sensitivity vs. Specificity: a screening algorithm flagged too many false positives. Engineering wanted lower sensitivity, clinical wanted it high. My framework: in clinical AI, the cost of missing something always exceeds the cost of extra investigation. Sensitivity stays, but the interface helps clinicians triage faster. Speed vs. Explainability: leadership wanted sub-second AI responses, but faster models sacrificed explainability. My decision: speed without trust is useless clinically. Implemented layered explainability — immediate recommendation with on-demand rationale. Automation vs. Autonomy: some stakeholders wanted fully automated workflows. I pushed back — in prenatal diagnostics, every automated decision must have a meaningful human checkpoint. This principle was codified into the enterprise standard.",
      },
    ],
    outcomes: [
      "Zero AI-enabled features now ship without passing this framework",
      "Institutionalized across 10+ product teams, 15+ leaders, 50+ stakeholders",
      "Established as the enterprise standard operating model for clinical product development",
      "Accelerated regulatory approval cycles — catching safety issues in design, not at the finish line",
      "Reduced late-stage design rework by embedding safety validation early",
      "Framework maps directly to FDA Human Factors, IEC 62366, and ISO 14971",
      "AI Safety Review Board established with cross-functional governance",
    ],
    hsi: [
      "Human Performance Requirements — defined clinician interaction models for AI outputs",
      "MIL-STD-1472H — applied human engineering design criteria to clinical AI interfaces",
      "MBSE/SysML — traced human performance requirements through system architecture",
      "Safety & Health — core mission: preventing patient harm from automation bias and overreliance",
      "DoDI 5000.95 — HSI lifecycle principles applied to AI system development",
      "Same structured HSI methodology previously applied to SSA11y and federal systems",
    ],
  },
  {
    id: "ssa",
    tag: "Federal · AI · Accessibility",
    title: "SSA11y: AI-Powered Federal Compliance Platform",
    subtitle:
      "Conceived, built, and deployed an AI-driven compliance platform that replaced manual audits with continuous validation — saving $1.5M+ annually and becoming the federal standard.",
    hero: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
    role: "Sr. UX & Accessibility Lead",
    timeline: "2022 – 2025",
    org: "Leidos / Social Security Administration",
    standards: ["WCAG 2.2 AA", "Section 508", "Llama2", "USWDS", "ADA Title II"],
    metrics: [
      { value: "50M+", label: "Citizens Impacted" },
      { value: "30%", label: "Audit Reduction" },
      { value: "$1.5M+", label: "Annual Savings" },
    ],
    sections: [
      {
        heading: "The Problem",
        content:
          "SSA's Disability Case Processing System serves 50 million citizens across all 50 states — determining whether Americans with disabilities receive the benefits they're entitled to. When I joined, the platform had 15+ modules with inconsistent accessibility, 40+ monthly releases gated by manual WCAG audits, and 200+ violations across the system. Every failed audit delayed a release. Every delayed release meant citizens waited longer. The system built to serve people with disabilities was itself inaccessible.",
      },
      {
        heading: "The Discovery",
        content:
          "My first 60 days were spent auditing the entire platform — not just automated scans, but manual keyboard testing, screen reader testing (JAWS, NVDA), and cognitive walkthroughs across all 15+ modules. The critical insight: out of 200+ WCAG violations, 65% originated from just 8 shared UI components. Data tables, navigation, form controls, modals, date pickers — each team implemented them differently. Some added ARIA labels, some didn't. The same component was accessible in one module and broken in another. Fixing individual pages would be endless. The components themselves were the problem.",
      },
      {
        heading: "The Strategic Decision",
        content:
          "I presented two options to leadership. Option A: continue manual audits — perpetual whack-a-mole at ~$1.5M+ annually. Option B: fix the system, not the symptoms — rebuild the 8 core components with accessibility built in, build an AI tool to catch violations in CI/CD before production, and migrate all modules to the new library. Leadership approved Option B. I named the AI tool SSA11y — a portmanteau of SSA and a11y (the numeronym for accessibility).",
      },
      {
        heading: "What I Built",
        content:
          "SSA11y is an AI-driven accessibility testing platform built on Meta's Llama2. It integrates into the CI/CD pipeline as a quality gate, scanning every code commit for WCAG violations before code reaches staging. Unlike existing tools that scan rendered pages post-deployment, SSA11y scans code at commit time, recommends specific fixes ranked by severity, and uses AI pattern detection to identify anti-patterns that rule-based scanners miss. Simultaneously, I redesigned the 8 core UI components to USWDS alignment with embedded ARIA roles, full keyboard navigation, and screen reader compatibility — each with automated accessibility tests included.",
      },
      {
        heading: "The Migration",
        content:
          "Phase 1 (Months 1–3): Built SSA11y prototype, designed and tested 8 core components with assistive technology users, created developer documentation. Phase 2 (Months 4–6): Deployed on 3 pilot modules, measured violation reduction and adoption, trained development teams. Phase 3 (Months 7–12): Expanded to all 15+ modules across 40+ monthly releases, completed component migration, SSA11y integrated as mandatory CI/CD gate. Phase 4 (Ongoing): Continuous compliance — every commit, every module, monthly automated reports.",
      },
    ],
    outcomes: [
      "Reduced audit effort 30% and saved $1.5M+ annually",
      "Eliminated 200+ WCAG violations at the source — not page by page, but component by component",
      "Reduced usability defects 30–40% across the platform",
      "Adopted across 40+ monthly releases as mandatory CI/CD gate",
      "Became the compliance standard across federal systems",
      "50+ designers and engineers trained on the new component library",
      "Near-zero release delays due to accessibility — previously frequent",
    ],
    hsi: [
      "Requirements analysis — traced accessibility requirements to system design decisions",
      "Risk-based prioritization — the 65%/8-component insight drove the entire strategy",
      "Lifecycle integration — compliance embedded in CI/CD, not post-hoc auditing",
      "Evidence-based design — every decision backed by test data from users with assistive technologies",
      "Same structured methodology now applied to AI safety at GE HealthCare",
    ],
  },
  {
    id: "bestbuy",
    tag: "Healthcare · Inclusive Design · MIL-STD-1472H",
    title: "Inclusive Design for 1M+ Elderly Users",
    subtitle:
      "Applied military human factors standards to eliminate missed emergency activations in consumer health products — saving lives through engineering discipline.",
    hero: "from-[#2d1b69] via-[#11998e] to-[#38ef7d]",
    role: "Inclusive Design & Accessibility Lead",
    timeline: "2021 – 2022",
    org: "Best Buy Health",
    standards: ["MIL-STD-1472H", "FDA", "IEC 62366", "WCAG 2.2 AA", "Section 508"],
    metrics: [
      { value: "1M+", label: "Elderly Users" },
      { value: "5", label: "Product Lines" },
      { value: "30-40%", label: "Fewer Defects" },
    ],
    sections: [
      {
        heading: "The Problem",
        content:
          "Best Buy Health manufactures personal emergency response systems — Lively and Jitterbug devices that elderly people depend on daily. Users were missing emergency activations. Touch targets were too small for arthritic hands. Alerts relied on single modalities. Under stress — which is exactly when emergency activation happens — elderly users with reduced dexterity, low vision, or cognitive decline couldn't reliably trigger help. A missed activation for a 78-year-old who has fallen means they lie on the floor until someone finds them. No enterprise accessibility governance existed across 5 product lines.",
      },
      {
        heading: "Military Standards for Civilian Safety",
        content:
          "I applied MIL-STD-1472H — the Department of Defense's Human Engineering Design Criteria — to consumer health products. The parallel is direct: military operators in gloves have reduced dexterity, like elderly users with arthritis. Operators in helmets have degraded vision, like users with cataracts. Combat creates high stress, like a medical emergency. The standard provides specific, measurable design criteria validated across decades of defense research — minimum touch target sizes, control force requirements, multi-modal feedback requirements, cognitive load thresholds. I wasn't guessing what would work. I was applying engineering standards.",
      },
      {
        heading: "What I Redesigned",
        content:
          "Emergency activation controls: enlarged touch targets to MIL-STD-1472H minimums, added multi-modal confirmation (visual + auditory + haptic simultaneously), designed progressive activation (press → hold → confirm) preventing accidental triggers while remaining accessible under stress. Alert system: redundant modalities for every critical alert, audio frequencies scaled to age-related hearing loss, display contrast beyond WCAG minimums for cataracts and low vision. Navigation: reduced cognitive load per screen, consistent patterns across all 5 product lines, large high-contrast typography.",
      },
      {
        heading: "Validation",
        content:
          "Every redesign was validated through structured usability testing with the actual user population — participants aged 65-90+ with arthritis, low vision, hearing loss, and mild cognitive impairment. Testing used JAWS, NVDA, VoiceOver, and TalkBack. Emergency activation was tested under simulated stress conditions (time pressure, distraction, physical limitation) because standard usability testing in calm lab conditions doesn't reflect real emergencies. All testing protocols met FDA/IEC 62366 requirements.",
      },
      {
        heading: "Enterprise Governance",
        content:
          "Beyond product fixes, I built organizational infrastructure: accessibility governance framework adopted across all 5 product lines, approved at executive level. Shifted accessibility from 'audit and fix' to 'design and verify.' Created design checklists mapped to WCAG 2.2 AA, Section 508, and MIL-STD-1472H. Integrated accessibility review into the design approval process. Trained product teams on inclusive design for aging populations.",
      },
    ],
    outcomes: [
      "Eliminated missed emergency activations for 1M+ elderly users",
      "Reduced remediation cycles 30-40% — compliance built in, not fixed after",
      "Delivered FDA/IEC 62366-compliant solutions through structured usability engineering",
      "Governance adopted across all 5 product lines as executive-approved standard",
      "Multi-modal alerts ensure no critical notification missed regardless of sensory impairment",
    ],
    hsi: [
      "MIL-STD-1472H — direct application of DoD human engineering design criteria",
      "Human error mitigation — designed controls preventing critical failures under stress",
      "Degraded performance design — arthritis, low vision, hearing loss, cognitive decline",
      "IEC 62366 compliant usability engineering with representative populations",
      "Enterprise governance — organizational standard sustaining safety outcomes",
    ],
  },
  {
    id: "samhsa",
    tag: "Federal · $130M Portfolio · 7 Years",
    title: "$130M Federal Behavioral Health Program",
    subtitle:
      "Directed a national-scale portfolio end-to-end for 7 years — building teams, defining governance, and influencing executive funding decisions that shaped behavioral health systems nationwide.",
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
        heading: "The Program",
        content:
          "SAMHSA operates the nation's behavioral health information systems — platforms that help Americans find treatment facilities for addiction and mental health, submit behavioral health data to the federal government, and access evidence-based resources. The portfolio included the Treatment Locator (millions of searches annually by people in crisis), data submission systems, data visualization platforms, public information portals, and internal administrative tools. 6+ platforms. 2M+ monthly visitors. Serving some of the most vulnerable people in the country.",
      },
      {
        heading: "My Role",
        content:
          "This was program leadership with full accountability — not a UX design role. Full budget authority across the portfolio: staffing, technology, vendor contracts, infrastructure. Recruited, managed, and grew a cross-functional team of 15+ designers, developers, content specialists, and QA. Managed vendor ecosystems including selection, performance, and contract negotiations. Trusted advisor to SAMHSA executive stakeholders on product direction, technology strategy, and investment prioritization. Accountable for on-time, on-budget, compliant delivery across all platforms. I held this role for 7 years — the longest-tenured and highest-scale program leadership in my career.",
      },
      {
        heading: "The Challenge",
        content:
          "Four systemic problems: No UX governance — each platform built by different teams with different design approaches, no unified architecture or shared components. Accessibility was an afterthought — Section 508 compliance treated as post-launch audit, violations found after deployment and reintroduced next release. Excessive development rework — without UX governance and accessibility standards, teams discovered problems late, consuming 30-40% of development capacity fixing what should have been right the first time. Competing priorities with no framework — 50+ stakeholders with competing demands and no structured process for deciding what gets built first.",
      },
      {
        heading: "What I Transformed",
        content:
          "UX Strategy & Design Governance: defined consistent navigation, labeling, and content structure across all platforms. Created shared pattern library so common interactions work the same way everywhere. Section 508 as Organizational Policy: defined compliance as organizational mandate, not project checklist. Embedded accessibility into every lifecycle phase. Created automated testing in CI/CD. This was my most significant governance contribution. HSI-Driven Design: institutionalized user-centered design as standard practice — research, prototyping, usability testing built into every project. Conducted inclusive research with users with disabilities, limited English proficiency, and users in crisis. Investment Prioritization: built impact scoring framework, quarterly roadmap reviews, trade-off transparency, and budget allocation tied to outcomes instead of politics.",
      },
      {
        heading: "Seven Years of Leadership",
        content:
          "Short engagements let you design solutions. Multi-year ownership teaches you whether those solutions survive: new leadership, changing requirements, team turnover, technology shifts. The governance frameworks I built in year 2 were still operating in year 7. The team I recruited in year 1 grew to 15+ by year 4. The Section 508 policy I defined became the organizational standard that outlasted my tenure. Seven years taught me that the real test of leadership isn't what you build — it's what still works after you leave.",
      },
    ],
    outcomes: [
      "Reduced development rework 30-40%, saving $2M+ annually in remediation costs",
      "Defined Section 508 governance as organizational policy — not a project deliverable",
      "Served 2M+ monthly visitors across 6+ enterprise platforms",
      "Influenced executive funding and technology strategy for 7 years",
      "Grew cross-functional team from initial staff to 15+ under my leadership",
      "People in crisis finding treatment facilities faster through improved Treatment Locator",
      "Investment prioritization framework replaced political decision-making with strategic allocation",
    ],
    hsi: [
      "Portfolio management at scale — $130M across 6+ platforms with full budget and delivery accountability",
      "HSI lifecycle integration — UCD and accessibility embedded as standard engineering practice",
      "Stakeholder management — aligned 50+ stakeholders through structured governance",
      "Section 508 enterprise governance — defined and enforced as organizational policy",
      "Inclusive design for vulnerable populations — users in crisis with diverse abilities",
      "7-year continuity — sustained leadership through changing administrations",
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
  const [reduced, setReduced] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  useEffect(() => {
    if (reduced) {
      setVis(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [reduced]);
  return (
    <div
      ref={ref}
      className={className}
      style={
        reduced
          ? undefined
          : {
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(24px)",
              transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
            }
      }
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
            <p className="text-white/90 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
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
          <p className="text-gray-700 text-sm mb-10">
            Enterprise-scale work in AI safety, accessibility, and regulated systems
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-5">
          {CASE_STUDIES.map((s, i) => (
            <FadeIn key={s.id} delay={i * 0.08}>
              <button
                onClick={() => {
                  setCase(s);
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
                  <p className="text-gray-700 text-xs mb-4 leading-relaxed line-clamp-2">
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
      <section className="max-w-3xl mx-auto px-6 pb-16" aria-labelledby="brief-about-heading">
        <FadeIn>
          <div className="flex gap-5 items-start bg-white border border-gray-200 rounded-xl p-6">
            <img
              src="/headshot.jpg"
              alt=""
              aria-hidden="true"
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <h2 id="brief-about-heading" className="font-bold text-gray-900 mb-1 text-base">
                Senthil Kumar Nagappan
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Senior AI and Human Systems Integration leader with 18+ years building
                enterprise functions that deliver safe, compliant, AI-driven products in
                regulated environments.
              </p>
              <button
                onClick={() => setPage("about")}
                className="text-[#1B3A5C] text-sm font-semibold hover:text-[#E8913A] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A5C] focus-visible:ring-offset-2"
              >
                Read full story <span aria-hidden="true">→</span>
                <span className="sr-only">about Senthil Nagappan</span>
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
            className="text-white/85 text-sm hover:text-white mb-6 inline-block transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8913A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1B3A5C]"
          >
            <span aria-hidden="true">←</span> Back to Case Studies
          </button>
          <p className="text-[#E8913A] text-xs font-semibold tracking-[2px] uppercase mb-3">
            {study.tag}
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4 tracking-tight">
            {study.title}
          </h1>
          <p className="text-white/90 text-base mb-8 max-w-xl leading-relaxed">
            {study.subtitle}
          </p>
          <dl className="flex gap-6 text-sm flex-wrap">
            <div>
              <dt className="text-white/85">Role</dt>
              <dd className="block font-semibold mt-0.5">{study.role}</dd>
            </div>
            <div>
              <dt className="text-white/85">Timeline</dt>
              <dd className="block font-semibold mt-0.5">{study.timeline}</dd>
            </div>
            <div>
              <dt className="text-white/85">Organization</dt>
              <dd className="block font-semibold mt-0.5">{study.org}</dd>
            </div>
          </dl>
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
                <div className="text-xs text-emerald-700 font-medium mt-0.5">
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
              <p className="text-gray-700 text-sm leading-[1.8] pl-8">{s.content}</p>
            </div>
          </FadeIn>
        ))}

        {/* Visual: case-study specific */}
        {study.id === "bestbuy" ? (
          <FadeIn>
            <figure
              className="my-8"
              aria-labelledby="mil-civ-parallel-title"
            >
              <figcaption
                id="mil-civ-parallel-title"
                className="text-xs font-semibold tracking-wide uppercase text-gray-700 mb-3 text-center"
              >
                Military Operator → Elderly User: a direct human factors parallel
              </figcaption>
              <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                {/* Military column */}
                <div className="bg-[#3b4a2a] text-white p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      aria-hidden="true"
                      className="w-2 h-2 rounded-full bg-[#c7d49a]"
                    />
                    <h4 className="text-sm font-bold tracking-wide uppercase">
                      Military Operator
                    </h4>
                  </div>
                  <ul className="space-y-3 text-sm leading-snug list-none p-0 m-0">
                    <li>Reduced dexterity (gloves)</li>
                    <li>Degraded vision (helmet)</li>
                    <li>High stress (combat)</li>
                    <li>Cognitive load (multitasking)</li>
                    <li>Must act quickly and correctly</li>
                  </ul>
                </div>
                {/* Civilian column */}
                <div className="bg-[#eaf3fb] text-[#0f2a44] p-5 relative">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      aria-hidden="true"
                      className="w-2 h-2 rounded-full bg-[#2E75B6]"
                    />
                    <h4 className="text-sm font-bold tracking-wide uppercase text-[#1B3A5C]">
                      Elderly User
                    </h4>
                  </div>
                  <ul className="space-y-3 text-sm leading-snug list-none p-0 m-0">
                    <li>
                      <span aria-hidden="true" className="text-[#1B3A5C] mr-1">→</span>
                      Reduced dexterity (arthritis)
                    </li>
                    <li>
                      <span aria-hidden="true" className="text-[#1B3A5C] mr-1">→</span>
                      Degraded vision (cataracts)
                    </li>
                    <li>
                      <span aria-hidden="true" className="text-[#1B3A5C] mr-1">→</span>
                      High stress (medical emergency)
                    </li>
                    <li>
                      <span aria-hidden="true" className="text-[#1B3A5C] mr-1">→</span>
                      Cognitive decline (age-related)
                    </li>
                    <li>
                      <span aria-hidden="true" className="text-[#1B3A5C] mr-1">→</span>
                      Must activate help quickly
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-[11px] text-gray-600 mt-2 text-center">
                MIL-STD-1472H design criteria mapped from defense systems to consumer health products.
              </p>
            </figure>
          </FadeIn>
        ) : study.id === "samhsa" ? (
          <FadeIn>
            <figure
              className="my-8"
              aria-labelledby="samhsa-scale-title"
            >
              <figcaption
                id="samhsa-scale-title"
                className="text-xs font-semibold tracking-wide uppercase text-gray-700 mb-3 text-center"
              >
                Portfolio scale at a glance
              </figcaption>
              <div className="bg-[#1B3A5C] rounded-xl shadow-sm overflow-hidden">
                <ul className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15 list-none p-0 m-0">
                  {[
                    { value: "$130M", label: "Portfolio Value" },
                    { value: "7 Years", label: "Tenure" },
                    { value: "15+", label: "Team Built" },
                    { value: "50+", label: "Stakeholders Aligned" },
                  ].map((stat) => (
                    <li key={stat.label} className="px-5 py-6 text-center">
                      <div className="text-3xl md:text-4xl font-extrabold text-white leading-none tracking-tight">
                        {stat.value}
                      </div>
                      <div className="mt-2 text-[11px] uppercase tracking-wide text-white/80 font-medium">
                        {stat.label}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </figure>
          </FadeIn>
        ) : (
          <FadeIn>
            <div
              role="img"
              aria-label="Placeholder for an NDA-safe recreated process diagram or framework visual"
              className="my-8 h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center flex-col gap-2"
            >
              <span className="text-gray-700 text-xs font-medium">
                PROCESS DIAGRAM / FRAMEWORK VISUAL
              </span>
              <span className="text-gray-600 text-[10px]">NDA-safe recreated artifact</span>
            </div>
          </FadeIn>
        )}

        {/* Outcomes */}
        <FadeIn>
          <div className="bg-[#1B3A5C] rounded-xl p-6 mb-8">
            <h3 className="text-white font-bold mb-4">Impact & Outcomes</h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {study.outcomes.map((o, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span aria-hidden="true" className="text-[#E8913A] text-base mt-0.5">✓</span>
                  <span className="text-white text-sm leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* HSI Sidebar */}
        <FadeIn>
          <details className="group border border-[#1B3A5C]/15 rounded-xl overflow-hidden">
            <summary className="px-5 py-3 cursor-pointer flex items-center justify-between bg-[#1B3A5C]/5 hover:bg-[#1B3A5C]/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A5C] focus-visible:ring-inset">
              <span className="text-sm font-semibold text-[#1B3A5C]">
                How this maps to HSI methodology
              </span>
              <span aria-hidden="true" className="text-[#1B3A5C] text-xs group-open:rotate-180 transition-transform">
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
                  <li key={i} className="text-xs text-gray-700 flex gap-2">
                    <span aria-hidden="true" className="text-[#1B3A5C]">→</span>
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
            alt="Portrait of Senthil Kumar Nagappan"
            className="w-28 h-28 rounded-2xl object-cover flex-shrink-0"
          />
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-1">
              Senthil Kumar Nagappan
            </h1>
            <p className="text-[#B85D1A] font-semibold text-sm mb-3">
              AI Safety &amp; Human Systems Integration Leader
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              18+ years building enterprise functions that deliver safe, compliant,
              AI-driven products in regulated environments across healthcare, federal,
              retail, and defense sectors.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="prose prose-sm max-w-none mb-12">
          <p className="text-gray-700 leading-[1.9] mb-4">
            I've spent my career at the intersection of technology and human safety —
            building the systems, standards, and teams that ensure AI-driven products work
            correctly for the people who depend on them.
          </p>
          <p className="text-gray-700 leading-[1.9] mb-4">
            My methodology is grounded in structured engineering standards: MIL-STD-1472H
            for human engineering design criteria, ISO 14971 and IEC 62366 for medical
            device usability engineering, and MBSE/SysML for tracing human performance
            requirements through system architecture.
          </p>
          <p className="text-gray-700 leading-[1.9]">
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
              <div aria-hidden="true" className="text-3xl font-extrabold text-[#1B3A5C]/30 mb-2">{c.num}</div>
              <div className="font-bold text-gray-900 text-sm mb-1">{c.t}</div>
              <div className="text-gray-700 text-xs leading-relaxed">{c.d}</div>
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
          <p className="text-xs text-gray-700">
            Recognized Practitioner: W3C WAI · IAAP · HFES
          </p>
          <p className="text-xs text-gray-700 mt-1">
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
        <p className="text-gray-700 text-sm mb-12 max-w-lg">
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
              <p className="text-gray-700 text-xs mb-3">{f.sub}</p>
              <ul className="flex gap-2 flex-wrap list-none p-0 m-0">
                {f.items.map((item) => (
                  <li
                    key={item}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-gray-100 text-gray-800 border border-gray-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="bg-[#1B3A5C] rounded-xl p-6 text-center">
          <h3 className="text-white font-bold mb-2">Where My Domains Converge</h3>
          <p className="text-white text-xs mb-5 max-w-md mx-auto opacity-95">
            Every project I lead integrates these four disciplines — AI safety isn't just
            governance, it's systems engineering, human factors, and accessibility working
            together.
          </p>
          <ul className="flex justify-center gap-4 flex-wrap list-none p-0 m-0">
            {["HSI", "HFE", "A11y", "AI Safety"].map((d) => (
              <li
                key={d}
                className="w-16 h-16 rounded-full border-2 border-white/70 bg-white/10 flex items-center justify-center text-white text-xs font-bold"
              >
                {d}
              </li>
            ))}
          </ul>
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
        <p className="text-gray-700 text-sm mb-8">Download or view inline</p>
        <a
          href="/Senthil_Nagappan_Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Senthil Nagappan resume PDF (opens in new tab)"
          className="inline-block bg-[#1B3A5C] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#E8913A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A5C] focus-visible:ring-offset-2"
        >
          Download PDF <span aria-hidden="true">↓</span>
        </a>
        <div className="mt-10 w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <iframe
            src="/Senthil_Nagappan_Resume.pdf"
            title="Senthil Nagappan Resume preview"
            aria-label="Senthil Nagappan resume PDF preview"
            className="w-full"
            style={{ height: "700px" }}
          >
            <p className="p-6 text-sm text-gray-700">
              Your browser can't display the PDF inline.{" "}
              <a
                href="/Senthil_Nagappan_Resume.pdf"
                download
                className="text-[#1B3A5C] underline hover:text-[#B85D1A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A5C] focus-visible:ring-offset-2 rounded"
              >
                Download the resume
              </a>{" "}
              instead.
            </p>
          </iframe>
        </div>
        <p className="mt-4 text-sm text-gray-700 sm:hidden">
          Can't see the preview?{" "}
          <a
            href="/Senthil_Nagappan_Resume.pdf"
            download
            className="text-[#1B3A5C] underline hover:text-[#B85D1A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A5C] focus-visible:ring-offset-2 rounded"
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
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
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
      } else {
        setError("Something went wrong sending your message. Please try again.");
      }
    } catch (err) {
      console.error("Form error:", err);
      setError("Network error. Please check your connection and try again.");
    }
    setLoading(false);
  };

  const fields: { id: string; label: string; type: string; autoComplete: string; placeholder?: string }[] = [
    { id: "name", label: "Name", type: "text", autoComplete: "name" },
    { id: "email", label: "Email", type: "email", autoComplete: "email", placeholder: "your@email.com" },
    { id: "subject", label: "Subject", type: "text", autoComplete: "off" },
  ];

  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <FadeIn>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2 text-center">
          Get in Touch
        </h1>
        <p className="text-gray-700 text-sm mb-8 text-center">
          Open to conversations about AI safety, human factors, and accessibility
          leadership
        </p>
        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="bg-white border border-gray-200 rounded-xl p-8 text-center"
          >
            <div
              aria-hidden="true"
              className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl font-bold"
            >
              ✓
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">Message Sent!</h2>
            <p className="text-sm text-gray-700">
              Thank you! I'll get back to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm text-[#1B3A5C] font-semibold hover:text-[#B85D1A] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A5C] focus-visible:ring-offset-2"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate={false}
            aria-label="Contact form"
            className="bg-white border border-gray-200 rounded-xl p-6 space-y-4"
          >
            {error && (
              <div
                role="alert"
                className="rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-800"
              >
                {error}
              </div>
            )}
            {fields.map((f) => (
              <div key={f.id}>
                <label
                  htmlFor={`contact-${f.id}`}
                  className="text-xs font-semibold text-gray-800 block mb-1"
                >
                  {f.label}
                  <span aria-hidden="true" className="text-red-700"> *</span>
                </label>
                <input
                  id={`contact-${f.id}`}
                  type={f.type}
                  name={f.id}
                  required
                  aria-required="true"
                  autoComplete={f.autoComplete}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 transition-colors focus:outline-none focus:border-[#1B3A5C] focus-visible:ring-2 focus-visible:ring-[#1B3A5C] focus-visible:ring-offset-1"
                  placeholder={f.placeholder}
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="contact-message"
                className="text-xs font-semibold text-gray-800 block mb-1"
              >
                Message
                <span aria-hidden="true" className="text-red-700"> *</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                aria-required="true"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 h-28 transition-colors focus:outline-none focus:border-[#1B3A5C] focus-visible:ring-2 focus-visible:ring-[#1B3A5C] focus-visible:ring-offset-1 resize-y"
              />
            </div>
            <p className="text-xs text-gray-700">
              <span aria-hidden="true" className="text-red-700">*</span> Required field
            </p>
            <button
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className="w-full bg-[#1B3A5C] text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-[#B85D1A] transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A5C] focus-visible:ring-offset-2"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            <p role="status" aria-live="polite" className="sr-only">
              {loading ? "Sending your message" : ""}
            </p>
          </form>
        )}
        <address className="not-italic text-center mt-6 space-y-1">
          <p className="text-sm text-gray-700">
            <a
              href="mailto:arnsk3@gmail.com"
              className="text-[#1B3A5C] hover:text-[#B85D1A] underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A5C] focus-visible:ring-offset-2"
            >
              arnsk3@gmail.com
            </a>{" "}
            ·{" "}
            <a
              href="tel:+15714030835"
              className="text-[#1B3A5C] hover:text-[#B85D1A] underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A5C] focus-visible:ring-offset-2"
            >
              571-403-0835
            </a>
          </p>
          <p className="text-sm text-gray-700">
            <a
              href="https://www.linkedin.com/in/senthil-nagappan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B3A5C] hover:text-[#B85D1A] underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A5C] focus-visible:ring-offset-2"
            >
              linkedin.com/in/senthil-nagappan
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
          <p className="text-sm text-gray-700">Vienna, VA (DMV) | Frisco, TX (DFW)</p>
        </address>
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
          <p className="text-white/85 text-xs mt-1">
            AI Safety &amp; Human Systems Integration Leader
          </p>
          <p className="text-white/75 text-xs mt-3">
            © 2026 · Designed &amp; built with accessibility in mind
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex gap-5 flex-wrap list-none p-0 m-0">
            {(["home", "about", "approach", "resume", "contact"] as PageId[]).map((p) => (
              <li key={p}>
                <button
                  onClick={() => setPage(p)}
                  className="text-white/90 text-xs hover:text-white underline-offset-4 hover:underline transition-colors capitalize rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827]"
                >
                  {p}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

const PAGE_TITLES: Record<PageId, string> = {
  home: "Senthil Nagappan — AI Safety & Human Systems Integration",
  about: "About — Senthil Nagappan",
  approach: "Approach — Senthil Nagappan",
  resume: "Resume — Senthil Nagappan",
  contact: "Contact — Senthil Nagappan",
  case: "Case Study — Senthil Nagappan",
};

const Index = () => {
  const [page, setPage] = useState<PageId>("home");
  const [activeCase, setActiveCase] = useState<CaseStudyType | null>(null);
  const [routeAnnouncement, setRouteAnnouncement] = useState("");
  const mainRef = useRef<HTMLElement | null>(null);

  // Update document title and announce route changes (WCAG 2.4.2, 4.1.3)
  useEffect(() => {
    const title =
      page === "case" && activeCase
        ? `${activeCase.title} — Case Study — Senthil Nagappan`
        : PAGE_TITLES[page];
    document.title = title;
    setRouteAnnouncement(`Navigated to ${title}`);
  }, [page, activeCase]);

  const navigate = (p: PageId) => {
    setPage(p);
    if (p !== "case") setActiveCase(null);
    window.scrollTo({ top: 0 });
    // Move keyboard focus to main landmark so SR users start at new content
    requestAnimationFrame(() => {
      mainRef.current?.focus();
    });
  };

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#1B3A5C] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8913A]"
      >
        Skip to main content
      </a>
      {/* SPA route announcer for assistive tech (WCAG 4.1.3) */}
      <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {routeAnnouncement}
      </div>
      <Nav page={page} setPage={navigate} />
      <main
        id="main-content"
        ref={mainRef}
        tabIndex={-1}
        className="focus:outline-none"
      >
        {page === "home" && (
          <Home
            setPage={navigate}
            setCase={(c) => {
              setActiveCase(c);
              setPage("case");
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
