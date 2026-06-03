import { useState, useEffect, useRef, ReactNode } from "react";
import personaDeveloper from "@/assets/persona-developer.jpg";
import personaQa from "@/assets/persona-qa.jpg";
import personaSme from "@/assets/persona-sme.jpg";
import personaContent from "@/assets/persona-content.jpg";
import personaCompliance from "@/assets/persona-compliance.jpg";
import personaClinician from "@/assets/persona-clinician.jpg";
import personaMlEngineer from "@/assets/persona-mlengineer.jpg";
import personaRegulatory from "@/assets/persona-regulatory.jpg";
import personaSafety from "@/assets/persona-safety.jpg";
import personaLeadership from "@/assets/persona-leadership.jpg";

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
  liveUrl?: string;
  liveLabel?: string;
};

const CASE_STUDIES: CaseStudyType[] = [
  {
    id: "wcagtool",
    tag: "In-House Product · WCAG 2.2 AAA · Accessibility",
    title: "WCAG AI Remediation Suite — AAA-Compliant Engine with AI Suggestions, Visual Cues & Fixes",
    subtitle:
      "Designed and built a standalone, AAA-compliant accessibility remediation tool that scans any URL or pasted HTML against 28 WCAG 2.2 criteria and returns visual code fixes, before/after examples, and a prioritized roadmap.",
    hero: "from-[#0a1530] via-[#1e3a5f] to-[#3a5f8a]",
    role: "Product Owner · Accessibility Architect · Builder",
    timeline: "2025 – Present",
    org: "BrainPulse (In-House)",
    standards: ["WCAG 2.2 A/AA/AAA", "Section 508", "ARIA", "WCAG-EM", "HTML5"],
    liveUrl: "https://www.brainpulseinc.com/wcag-tool.html",
    liveLabel: "Launch the live tool",
    metrics: [
      { value: "28", label: "WCAG Criteria" },
      { value: "AAA", label: "Compliance Level" },
      { value: "3", label: "Conformance Tiers" },
    ],
    sections: [
      {
        heading: "Why I Built It",
        content:
          "Most accessibility scanners stop at flagging violations — they tell teams what's broken but not how to fix it, and almost none push past WCAG 2.2 AA into AAA. After years of running federal accessibility programs, I kept seeing the same gap: audits produced long defect lists that overwhelmed teams and stalled remediation. I built this in-house tool to close that loop — turn detection into guided, prioritized remediation that any engineer or content owner can act on immediately.",
      },
      {
        heading: "What It Does",
        content:
          "The tool accepts either a live URL or pasted HTML and evaluates it against 28 WCAG 2.2 success criteria spanning all four principles — Perceivable, Operable, Understandable, and Robust — across conformance levels A, AA, and AAA. For each finding it returns the exact rule reference, the offending markup, a corrected code snippet, and a side-by-side before/after example so the fix is unambiguous.",
      },
      {
        heading: "AAA by Design",
        content:
          "Reaching AAA is the hard part — most tools and most products never attempt it. The engine codifies AAA-specific checks (enhanced contrast, context-sensitive help, reading level, no timing constraints, and richer error prevention) and the tool's own interface is itself built to AAA: full keyboard operability, visible focus, high-contrast theming, and screen-reader-first semantics. It practices what it audits.",
      },
      {
        heading: "Prioritized Remediation Roadmap",
        content:
          "Instead of a flat defect dump, results are ranked into a remediation roadmap weighted by user impact, conformance level, and fix effort. Teams get a clear sequence — what to fix first for the largest accessibility and legal-risk reduction — turning an intimidating audit into a tractable backlog. This mirrors the prioritization methodology I deployed across federal compliance programs, now packaged as a reusable product.",
      },
      {
        heading: "Architecture & Approach",
        content:
          "Built as a self-contained, dependency-light tool so it can run anywhere without a heavy install or backend lock-in. The rule set is structured for extensibility — new criteria and heuristics plug in cleanly as WCAG evolves — and every check maps directly back to its normative success criterion, so output doubles as auditable evidence for Section 508 and WCAG-EM reporting.",
      },
    ],
    outcomes: [
      "Standalone tool achieving WCAG 2.2 AAA conformance — both in what it checks and how it's built",
      "28 success criteria covered across A, AA, and AAA in a single pass",
      "Converts raw audits into prioritized, effort-weighted remediation roadmaps",
      "Visual before/after code fixes make remediation actionable for any engineer",
      "Reusable productization of methodology proven across federal accessibility programs",
      "Output maps to Section 508 and WCAG-EM evidence requirements",
    ],
    hsi: [
      "Human Performance — designed for assistive-technology users first, validated with keyboard and screen-reader workflows",
      "Section 508 / WCAG 2.2 — every check traces to a normative success criterion",
      "Error Prevention — guided fixes reduce remediation rework and reintroduced defects",
      "Same prioritization and accessibility methodology applied at SSA, now packaged as a product",
    ],
  },
  {
    id: "ge",
    tag: "AI Safety · FDA · Clinical Systems",
    title: "AI Safety Framework for Clinical Decision-Support",
    subtitle:
      "Built the AI safety function from the ground up at GE HealthCare — zero AI-enabled features now ship without passing this framework.",
    hero: "from-[#0f1b3d] via-[#1e3a5f] to-[#3a5f8a]",
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
    hero: "from-[#1e3a5f] via-[#3a5f8a] to-[#c9a84c]",
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
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-2 px-4 sm:px-6 py-3">
        <button
          onClick={() => setPage("home")}
          aria-label="Senthil Nagappan — go to home"
          className="flex items-center gap-2 group rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2"
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
        <ul className="flex flex-wrap justify-end gap-0.5 sm:gap-1 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => setPage(l.id)}
                aria-current={page === l.id ? "page" : undefined}
                className={`inline-flex items-center min-h-11 px-2.5 sm:px-3 py-1.5 rounded-md text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2 ${
                  page === l.id
                    ? "bg-[#1e3a5f]/10 text-[#1e3a5f] font-semibold"
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
      <header className="relative overflow-hidden bg-gradient-to-br from-[#0a1228] via-[#1e3a5f] to-[#2e5580] text-white">
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
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[3px] uppercase mb-5">
              AI Safety · Human Systems Integration · Accessibility
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] mb-5 tracking-tight">
              Designing for systems where getting it wrong
              <span className="text-[#c9a84c]"> isn't an option.</span>
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
                className="inline-flex items-center justify-center min-h-11 bg-white text-[#1e3a5f] px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#c9a84c] hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e3a5f]"
              >
                View Case Studies <span aria-hidden="true">↓</span>
              </button>
              <button
                onClick={() => setPage("about")}
                className="inline-flex items-center justify-center min-h-11 border border-white/60 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e3a5f]"
              >
                About Me
              </button>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* Credentials */}
      <section
        aria-label="Professional certifications and standards"
        className="bg-[#fafbfc] border-b border-gray-100 py-4"
      >
        <ul className="max-w-4xl mx-auto flex justify-center gap-2 flex-wrap px-4 list-none p-0 m-0">
          {CREDS.map((c) => (
            <li
              key={c}
              className="text-[10px] sm:text-xs px-3 py-1 rounded-full border border-[#1e3a5f]/30 text-[#1e3a5f] font-medium bg-white"
            >
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* Case Studies */}
      <section id="cases" className="max-w-5xl mx-auto px-6 py-16" aria-labelledby="cases-heading">
        <FadeIn>
          <h2 id="cases-heading" className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">
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
                className="text-left w-full group rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2"
              >
                <div
                  className={`h-36 bg-gradient-to-br ${s.hero} rounded-t-xl flex items-end p-5`}
                >
                  <span className="text-white text-[10px] font-semibold tracking-widest uppercase">
                    {s.tag}
                  </span>
                </div>
                <div className="bg-white border border-t-0 border-gray-200 rounded-b-xl p-5 group-hover:border-[#1e3a5f]/30 group-hover:shadow-lg transition-all">
                  <h3 className="font-bold text-gray-900 text-base mb-1.5 leading-snug group-hover:text-[#1e3a5f] transition-colors">
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
                className="text-[#1e3a5f] text-sm font-semibold hover:text-[#c9a84c] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2"
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

// ─────────────────────────────────────────────────────────────
// Case Study Showcase: NDA-safe wireframes, workflow, and sample screens
// ─────────────────────────────────────────────────────────────

type ShowcaseScreen = {
  title: string;
  body: React.ReactNode;
};

type ShowcaseConfig = {
  workflowTitle: string;
  steps: string[];
  screensTitle: string;
  screens: ShowcaseScreen[];
};

const WBar = ({ w = "100%", h = 8, c = "bg-gray-300", className = "" }: { w?: string; h?: number; c?: string; className?: string }) => (
  <div aria-hidden="true" className={`rounded ${c} ${className}`} style={{ width: w, height: h }} />
);
const WBlock = ({ h = 40, c = "bg-gray-100", children, className = "" }: { h?: number; c?: string; children?: React.ReactNode; className?: string }) => (
  <div aria-hidden="true" className={`rounded ${c} ${className}`} style={{ minHeight: h }}>{children}</div>
);

function ScreenFrame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col h-full">
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 border-b border-gray-200" aria-hidden="true">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[9px] uppercase tracking-wider text-gray-700 font-medium truncate">{label}</span>
      </div>
      <div className="p-3 flex-1 flex flex-col gap-2 bg-white min-h-[160px]">{children}</div>
    </div>
  );
}

const SHOWCASE: Record<string, ShowcaseConfig> = {
  ssa: {
    workflowTitle: "Continuous accessibility validation pipeline",
    steps: ["Crawl & Discover", "AI Rule Scan", "WCAG / 508 Mapping", "Auto-Ticket & PR", "Verify in CI/CD"],
    screensTitle: "Sample screens — SSA11y operator console",
    screens: [
      {
        title: "Portfolio Dashboard",
        body: (
          <>
            <WBar w="55%" h={10} c="bg-[#1e3a5f]" />
            <div className="grid grid-cols-3 gap-2 mt-1">
              <WBlock h={42} c="bg-[#e8eef5]"><div className="p-1.5"><div className="text-[9px] text-[#1e3a5f] font-bold">CRIT</div><div className="text-sm font-bold text-[#1e3a5f]">128</div></div></WBlock>
              <WBlock h={42} c="bg-[#fff4e5]"><div className="p-1.5"><div className="text-[9px] text-[#8a5a00] font-bold">SERIOUS</div><div className="text-sm font-bold text-[#8a5a00]">412</div></div></WBlock>
              <WBlock h={42} c="bg-[#eef7ee]"><div className="p-1.5"><div className="text-[9px] text-[#1f6b2e] font-bold">PASSED</div><div className="text-sm font-bold text-[#1f6b2e]">9.2k</div></div></WBlock>
            </div>
            <WBar w="100%" h={6} />
            <WBar w="80%" h={6} />
            <WBar w="65%" h={6} />
          </>
        ),
      },
      {
        title: "Issue Detail · WCAG 1.4.3",
        body: (
          <>
            <WBar w="70%" h={10} c="bg-[#1e3a5f]" />
            <div className="rounded bg-gray-900 p-2 font-mono text-[8px] leading-tight text-green-300" aria-hidden="true">
              {'<button class="text-gray-600">'}<br />&nbsp;&nbsp;Submit<br />{'</button>'}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#ffe2e2] text-[#8a1a1a] font-bold">2.1:1</span>
              <span className="text-[9px] text-gray-600">requires 4.5:1</span>
            </div>
            <WBar w="100%" h={6} />
            <WBar w="55%" h={6} />
          </>
        ),
      },
      {
        title: "AI Remediation Suggestion",
        body: (
          <>
            <WBar w="60%" h={10} c="bg-[#1e3a5f]" />
            <div className="rounded bg-[#f0f5fb] border border-[#c3d2e4] p-2" aria-hidden="true">
              <div className="text-[9px] font-bold text-[#1e3a5f] mb-1">PROPOSED FIX</div>
              <div className="font-mono text-[8px] leading-tight text-[#0f1b3d]">class="text-gray-900"</div>
            </div>
            <div className="flex gap-1.5 mt-auto">
              <div className="flex-1 rounded bg-[#1e3a5f] text-white text-[9px] font-bold text-center py-1.5">Open PR</div>
              <div className="flex-1 rounded border border-gray-300 text-gray-700 text-[9px] font-bold text-center py-1.5">Dismiss</div>
            </div>
          </>
        ),
      },
    ],
  },
  ge: {
    workflowTitle: "Clinician × AI decision-support interaction flow",
    steps: ["Open Patient Chart", "AI Surfaces Suggestion", "Confidence + Rationale", "Clinician Decides", "Outcome Logged"],
    screensTitle: "Sample screens — AI-augmented clinical workspace",
    screens: [
      {
        title: "Patient Summary + AI Panel",
        body: (
          <>
            <div className="flex gap-2">
              <div className="flex-1 space-y-1.5">
                <WBar w="60%" h={8} c="bg-[#0f1b3d]" />
                <WBar w="100%" h={5} />
                <WBar w="90%" h={5} />
                <WBar w="75%" h={5} />
              </div>
              <div className="w-20 rounded bg-[#e8eef5] border border-[#c3d2e4] p-1.5 space-y-1" aria-hidden="true">
                <div className="text-[8px] font-bold text-[#1e3a5f]">AI INSIGHT</div>
                <WBar w="100%" h={4} c="bg-[#3a5f8a]" />
                <WBar w="80%" h={4} c="bg-[#3a5f8a]/60" />
                <WBar w="60%" h={4} c="bg-[#3a5f8a]/40" />
              </div>
            </div>
            <WBar w="100%" h={5} />
            <WBar w="70%" h={5} />
          </>
        ),
      },
      {
        title: "Confidence & Explainability",
        body: (
          <>
            <WBar w="65%" h={10} c="bg-[#0f1b3d]" />
            <div aria-hidden="true">
              <div className="text-[9px] text-gray-700 mb-1 font-medium">Model confidence</div>
              <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#3a5f8a] to-[#1e3a5f]" style={{ width: "72%" }} />
              </div>
              <div className="text-[8px] text-gray-600 mt-0.5">72% · Moderate</div>
            </div>
            <div className="rounded bg-[#fff8e5] border border-[#ffe6a1] p-1.5 text-[9px] text-[#5a4400]" aria-hidden="true">
              ⚠ Verify against labs before acting
            </div>
            <WBar w="100%" h={5} />
          </>
        ),
      },
      {
        title: "Override Capture",
        body: (
          <>
            <WBar w="55%" h={10} c="bg-[#0f1b3d]" />
            <div className="space-y-1" aria-hidden="true">
              {["Disagree with reasoning", "Patient context differs", "Insufficient evidence"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm border border-gray-400" />
                  <span className="text-[9px] text-gray-700">{t}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-1.5 mt-auto">
              <div className="flex-1 rounded bg-[#1e3a5f] text-white text-[9px] font-bold text-center py-1.5">Log Decision</div>
              <div className="flex-1 rounded border border-gray-300 text-gray-700 text-[9px] font-bold text-center py-1.5">Cancel</div>
            </div>
          </>
        ),
      },
    ],
  },
  bestbuy: {
    workflowTitle: "Emergency activation — elderly user journey",
    steps: ["At-Risk Event", "Large Activation Tap", "Multi-Sensory Confirm", "Connecting", "Operator on Call"],
    screensTitle: "Sample screens — wearable companion app",
    screens: [
      {
        title: "Home · Single Tap to Help",
        body: (
          <>
            <WBar w="40%" h={6} />
            <div className="flex-1 flex items-center justify-center" aria-hidden="true">
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#d64545] to-[#8a1a1a] flex items-center justify-center text-white text-[10px] font-extrabold shadow-md">
                HELP
              </div>
            </div>
            <div className="text-[9px] text-gray-700 text-center font-medium">Press and hold for 1 second</div>
          </>
        ),
      },
      {
        title: "Confirm Activation",
        body: (
          <>
            <WBar w="60%" h={10} c="bg-[#1e3a5f]" />
            <div className="rounded bg-[#fff4e5] border border-[#ffd29a] p-2 text-[10px] text-[#5a3300] font-medium" aria-hidden="true">
              Calling help in 3…
            </div>
            <div className="flex items-center gap-2 text-[9px] text-gray-700" aria-hidden="true">
              <span>🔊 Audio</span><span>📳 Haptic</span><span>👁 Visual</span>
            </div>
            <div className="flex gap-1.5 mt-auto">
              <div className="flex-1 rounded bg-[#1f6b2e] text-white text-[10px] font-bold text-center py-2">Confirm</div>
              <div className="flex-1 rounded border border-gray-300 text-gray-700 text-[10px] font-bold text-center py-2">Cancel</div>
            </div>
          </>
        ),
      },
      {
        title: "Connected to Operator",
        body: (
          <>
            <div className="flex items-center gap-2" aria-hidden="true">
              <div className="w-8 h-8 rounded-full bg-[#e8eef5] border border-[#c3d2e4]" />
              <div className="flex-1 space-y-1">
                <WBar w="70%" h={6} c="bg-[#1e3a5f]" />
                <WBar w="45%" h={5} />
              </div>
            </div>
            <div className="flex-1 rounded bg-[#eef7ee] border border-[#cce6d0] flex items-center justify-center text-[10px] font-bold text-[#1f6b2e] min-h-[40px]" aria-hidden="true">
              ● LIVE · 00:14
            </div>
            <div className="rounded bg-[#1e3a5f] text-white text-[10px] font-bold text-center py-2" aria-hidden="true">End Call</div>
          </>
        ),
      },
    ],
  },
  samhsa: {
    workflowTitle: "Portfolio governance & performance lifecycle",
    steps: ["Funding Intake", "Cross-Agency Review", "Award & Onboard", "Performance Tracking", "Executive Reporting"],
    screensTitle: "Sample screens — portfolio command center",
    screens: [
      {
        title: "Portfolio Dashboard",
        body: (
          <>
            <WBar w="55%" h={10} c="bg-[#1e3a5f]" />
            <div className="grid grid-cols-2 gap-2" aria-hidden="true">
              <WBlock h={36} c="bg-[#e8eef5]"><div className="p-1.5"><div className="text-[8px] text-[#1e3a5f] font-bold">VALUE</div><div className="text-xs font-bold text-[#1e3a5f]">$130M</div></div></WBlock>
              <WBlock h={36} c="bg-[#eef7ee]"><div className="p-1.5"><div className="text-[8px] text-[#1f6b2e] font-bold">ACTIVE</div><div className="text-xs font-bold text-[#1f6b2e]">42</div></div></WBlock>
            </div>
            <div className="flex items-end gap-1 h-8 mt-1" aria-hidden="true">
              {[40, 55, 35, 70, 50, 80, 65].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-[#3a5f8a]" style={{ height: `${h}%` }} />
              ))}
            </div>
          </>
        ),
      },
      {
        title: "Program Detail",
        body: (
          <>
            <WBar w="65%" h={10} c="bg-[#1e3a5f]" />
            <div className="space-y-1" aria-hidden="true">
              <div className="flex justify-between text-[9px] text-gray-700"><span>Milestones</span><span className="font-bold text-[#1f6b2e]">8 / 10</span></div>
              <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden"><div className="h-full bg-[#1f6b2e]" style={{ width: "80%" }} /></div>
              <div className="flex justify-between text-[9px] text-gray-700"><span>Budget used</span><span className="font-bold text-[#1e3a5f]">62%</span></div>
              <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden"><div className="h-full bg-[#1e3a5f]" style={{ width: "62%" }} /></div>
            </div>
            <WBar w="100%" h={5} />
            <WBar w="80%" h={5} />
          </>
        ),
      },
      {
        title: "Executive Brief",
        body: (
          <>
            <WBar w="50%" h={10} c="bg-[#1e3a5f]" />
            <div className="rounded bg-[#f0f5fb] border border-[#c3d2e4] p-1.5 space-y-1" aria-hidden="true">
              <div className="text-[8px] font-bold text-[#1e3a5f]">KEY TAKEAWAY</div>
              <WBar w="100%" h={4} />
              <WBar w="85%" h={4} />
              <WBar w="60%" h={4} />
            </div>
            <div className="flex gap-1.5 mt-auto" aria-hidden="true">
              <div className="flex-1 rounded bg-[#1e3a5f] text-white text-[9px] font-bold text-center py-1.5">Export PDF</div>
              <div className="flex-1 rounded border border-gray-300 text-gray-700 text-[9px] font-bold text-center py-1.5">Share</div>
            </div>
          </>
        ),
      },
    ],
  },
};

function CaseStudyShowcase({ id }: { id: string }) {
  const cfg = SHOWCASE[id];
  if (!cfg) return null;
  const flowId = `flow-${id}`;
  const screensId = `screens-${id}`;
  return (
    <FadeIn>
      <figure className="my-8" aria-labelledby={flowId}>
        <figcaption id={flowId} className="text-xs font-semibold tracking-wide uppercase text-gray-700 mb-3 text-center">
          {cfg.workflowTitle}
        </figcaption>
        <ol
          className="flex flex-col md:flex-row md:items-stretch rounded-xl border border-gray-200 bg-white overflow-hidden list-none p-0 m-0 shadow-sm"
          aria-label="Workflow stages"
        >
          {cfg.steps.map((step, i) => (
            <li key={step} className="flex-1 flex items-center gap-2 px-3 py-3 border-b md:border-b-0 md:border-r border-gray-200 last:border-0">
              <span className="w-6 h-6 rounded-full bg-[#1e3a5f] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                {i + 1}
              </span>
              <span className="text-[11px] font-semibold text-gray-800 leading-tight">{step}</span>
            </li>
          ))}
        </ol>
      </figure>

      <figure className="my-8" aria-labelledby={screensId}>
        <figcaption id={screensId} className="text-xs font-semibold tracking-wide uppercase text-gray-700 mb-3 text-center">
          {cfg.screensTitle}
        </figcaption>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cfg.screens.map((s) => (
            <div key={s.title} className="flex flex-col">
              <ScreenFrame label={s.title}>{s.body}</ScreenFrame>
              <div className="mt-2 text-[10px] text-gray-700 font-medium text-center">{s.title}</div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-gray-600 mt-3 text-center">
          NDA-safe stylized wireframes — structure and interaction shown, proprietary visuals omitted.
        </p>
      </figure>
    </FadeIn>
  );
}


type ResearchPhase = {
  n: string;
  title: string;
  methods: string[];
  artifact: string;
};

type ResearchConfig = {
  title: string;
  populations: { label: string; n: string; note: string }[];
  phases: ResearchPhase[];
  metrics: { value: string; label: string }[];
  audiences: string[];
};

const RESEARCH_CONFIG: Record<string, ResearchConfig> = {
  ge: {
    title: "Clinical AI Safety Research — Clinicians + ML/Regulatory Stakeholders",
    populations: [
      { label: "Maternal-fetal medicine MDs", n: "6–8", note: "Board-certified · ≥5 yrs prenatal Dx" },
      { label: "OB sonographers", n: "8–10", note: "RDMS · daily AI-assisted scans" },
      { label: "Clinical safety / RA leads", n: "4–6", note: "FDA submissions · post-market" },
      { label: "ML + product engineers", n: "6–8", note: "Model owners + UX engineers" },
      { label: "Unmoderated benchmark", n: "≥120", note: "Cross-site clinician panel · 3 health systems" },
    ],
    phases: [
      {
        n: "01",
        title: "Plan",
        methods: ["FDA HF / IEC 62366 / ISO 14971 framing", "Use-error & automation-bias hypotheses", "Success criteria tied to URRA hazards"],
        artifact: "Research brief + URRA",
      },
      {
        n: "02",
        title: "Recruit",
        methods: ["Clinical advisory board + KOL network", "Role + risk-tier screener (Model A/B/C)", "IRB-aligned consent + PHI handling"],
        artifact: "Screener + consent kit",
      },
      {
        n: "03",
        title: "Execute",
        methods: ["Cognitive task analysis in live reading rooms", "Think-aloud with confidence-score overrides", "Simulated edge-case scenarios (FMEA-derived)", "Quant: override rate, time-to-confirm, SUS, NASA-TLX"],
        artifact: "Sessions · telemetry · CTA maps",
      },
      {
        n: "04",
        title: "Synthesize",
        methods: ["Dovetail coding mapped to IEC 62366 use-errors", "Automation-bias × overreliance severity matrix", "Mixed-effects model on override accuracy"],
        artifact: "Hazard-linked findings + journey",
      },
      {
        n: "05",
        title: "Report",
        methods: ["AI Safety Review Board readout (go/no-go)", "Design enablement: HITL patterns + explainability", "Regulatory evidence pack for FDA submission"],
        artifact: "Multi-audience artifacts",
      },
    ],
    metrics: [
      { value: "100%", label: "AI features passing safety framework before ship" },
      { value: "−38%", label: "Automation-bias errors vs. pre-framework baseline" },
      { value: "0", label: "Post-market HF-related safety signals to date" },
    ],
    audiences: ["AI Safety Review Board", "Clinical + product leadership", "Regulatory affairs / FDA", "Engineering + ML model owners"],
  },
  samhsa: {
    title: "Behavioral Health Research — People in Crisis + Federal Data Submitters",
    populations: [
      { label: "People seeking treatment", n: "10–12", note: "SUD + MH · trauma-informed protocol" },
      { label: "Family / caregiver searchers", n: "6–8", note: "Searching on behalf of a loved one" },
      { label: "Facility data submitters", n: "8–10", note: "State + provider · N-SSATS / N-MHSS" },
      { label: "State BH agency staff", n: "6–8", note: "Block-grant + data leads" },
      { label: "AT + low-literacy panel", n: "≥30", note: "Screen reader · ESL · 6th-grade reading" },
      { label: "Unmoderated benchmark", n: "≥800", note: "Treatment Locator across devices" },
    ],
    phases: [
      {
        n: "01",
        title: "Plan",
        methods: ["Section 508 + WCAG 2.0 AA framing", "Crisis-safe + trauma-informed protocol", "Success criteria tied to find-treatment outcomes"],
        artifact: "Research brief + safety plan",
      },
      {
        n: "02",
        title: "Recruit",
        methods: ["SAMHSA grantee + peer-recovery networks", "988 / 211 partner referrals (warm hand-off)", "Plain-language consent + opt-out anytime"],
        artifact: "Inclusive screener + safety kit",
      },
      {
        n: "03",
        title: "Execute",
        methods: ["Remote contextual inquiry with crisis safeguards", "Caregiver-dyad search sessions", "Facility submitter task analysis on data portals", "Quant: task success, time-to-find-facility, SUS, drop-off funnel"],
        artifact: "Field + lab + analytics evidence",
      },
      {
        n: "04",
        title: "Synthesize",
        methods: ["Coding mapped to 508 FPC + WCAG SC", "Crisis-state journey: search → trust → contact", "Severity × population-reach (2M+ monthly visitors)", "Regression on locator completion across cohorts"],
        artifact: "Behavioral personas + journey",
      },
      {
        n: "05",
        title: "Report",
        methods: ["Exec readout: public-health + ROI of rework reduction", "Pattern library updates + 508 acceptance criteria", "Stakeholder portfolio review across 6+ platforms"],
        artifact: "Portfolio enablement kit",
      },
    ],
    metrics: [
      { value: "−34%", label: "Median time to find a treatment facility" },
      { value: "−30%", label: "Development rework after governance rollout" },
      { value: "2M+", label: "Monthly visitors served across portfolio" },
    ],
    audiences: ["SAMHSA exec sponsors", "Grantees + state BH agencies", "Product, content, engineering", "Section 508 + OMB reporting"],
  },
  ssa: {
    title: "Federal A11y Research — Practitioners + AT End-Users",
    populations: [
      { label: "Federal a11y leads", n: "6–8", note: "GS-13+ across 3 agencies" },
      { label: "Agency developers", n: "8–10", note: "Closed a11y tickets in last 90d" },
      { label: "AT end-users", n: "≥30", note: "JAWS · NVDA · VoiceOver · Dragon · switch" },
      { label: "Unmoderated benchmark", n: "≥200", note: "AT panel · cross-browser × OS" },
    ],
    phases: [
      {
        n: "01",
        title: "Plan",
        methods: ["Section 508 + WCAG 2.1 AA framing", "Hypotheses tied to trust & ROI", "Success criteria mapped to OMB M-24-08"],
        artifact: "Research brief",
      },
      {
        n: "02",
        title: "Recruit",
        methods: ["GSA a11y CoP + DRA + Knowbility partners", "Disability-inclusive screener", "Accessible consent (HTML + ASL)"],
        artifact: "Screener + consent kit",
      },
      {
        n: "03",
        title: "Execute",
        methods: ["Contextual inquiry in axe/JAWS workflows", "2-week dev diary on AI-drafted PRs", "Moderated SUS/SEQ on triage console", "Unmoderated AT panel benchmark"],
        artifact: "Sessions · telemetry · transcripts",
      },
      {
        n: "04",
        title: "Synthesize",
        methods: ["Dovetail coding mapped to SC + 508 FPC", "Severity × population reach matrix", "Paired t-test on time-to-merge"],
        artifact: "Affinity map + journey",
      },
      {
        n: "05",
        title: "Report",
        methods: ["Exec readout (ROI + risk)", "Engineering enablement w/ ARIA patterns", "Policy memo aligned to M-24-08"],
        artifact: "Multi-audience artifacts",
      },
    ],
    metrics: [
      { value: "92%", label: "AI-suggestion acceptance on remediated PRs" },
      { value: "−87%", label: "Median time-to-merge vs manual baseline" },
      { value: "0", label: "Critical regressions in CI/CD after gate" },
    ],
    audiences: ["Agency exec sponsors", "Product + engineering", "Legal / compliance", "OMB reporting"],
  },
  bestbuy: {
    title: "Inclusive Design Research — 1M+ Elderly Users",
    populations: [
      { label: "Independent older adults", n: "8–10", note: "Ages 65–84 · rural/suburban/urban" },
      { label: "Older adults w/ support", n: "8–10", note: "Ages 75+ · caregiver present" },
      { label: "Low-vision / low-dexterity", n: "8–10", note: "Tremor · arthritis · post-stroke" },
      { label: "Moderated benchmark", n: "≥60", note: "Per wave · simulation goggles + tremor gloves" },
      { label: "Unmoderated large-n", n: "≥1,000", note: "UserTesting Senior Panel" },
    ],
    phases: [
      {
        n: "01",
        title: "Plan",
        methods: ["Use envelope: vision · motor · cognition · stress", "ISO 14971 hazard framing", "MIL-STD-1472H criteria translated to consumer"],
        artifact: "Research brief + risk file",
      },
      {
        n: "02",
        title: "Recruit",
        methods: ["AARP · senior centers · AAA partners", "Phone + web screener (never web-only)", "18pt consent w/ teach-back step"],
        artifact: "Inclusive screener kit",
      },
      {
        n: "03",
        title: "Execute",
        methods: ["In-home contextual inquiry", "Caregiver-dyad interviews", "3-week diary w/ voice + photo prompts", "Lab benchmark w/ vision/tremor simulation", "Eye-tracking sub-study (n=24)"],
        artifact: "Field + lab evidence",
      },
      {
        n: "04",
        title: "Synthesize",
        methods: ["MIL-STD-1472H coding (reach, sizing, legibility)", "Dyad journey: discover → use → recover", "Hazard × impact × reach severity matrix", "ANOVA + survival analysis on abandonment"],
        artifact: "Behavioral personas",
      },
      {
        n: "05",
        title: "Report",
        methods: ["Exec readout: safety + call-deflection economics", "Design system tokens + motion/audio guidance", "Caregiver-facing one-pager"],
        artifact: "Enablement kit",
      },
    ],
    metrics: [
      { value: "<10s", label: "Time-to-connect at 95th percentile" },
      { value: "96%", label: "Comprehension across cohorts (state messages)" },
      { value: "−41%", label: "Accidental activations vs baseline" },
    ],
    audiences: ["Exec sponsors", "Product + design system", "Care-partner support", "External advocacy (AARP, AFB)"],
  },
};

function ResearchProcess({ id }: { id: string }) {
  const cfg = RESEARCH_CONFIG[id];
  if (!cfg) return null;
  const titleId = `research-process-${id}-title`;

  return (
    <FadeIn>
      <figure className="my-10" aria-labelledby={titleId}>
        <figcaption
          id={titleId}
          className="text-xs font-semibold tracking-wide uppercase text-gray-700 mb-3 text-center"
        >
          {cfg.title}
        </figcaption>

        {/* Header band */}
        <div className="rounded-t-xl bg-gradient-to-r from-[#0f1b3d] via-[#1e3a5f] to-[#3a5f8a] text-white px-5 py-3 flex items-center justify-between">
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase">
            User Research · Mixed Methods
          </span>
          <span className="text-[11px] text-white/85">
            Plan → Recruit → Execute → Synthesize → Report
          </span>
        </div>

        {/* Phases */}
        <ol
          className="grid grid-cols-1 md:grid-cols-5 gap-px bg-gray-200 border-x border-gray-200 list-none p-0 m-0"
          aria-label="Five-phase user research process"
        >
          {cfg.phases.map((p, idx, arr) => (
            <li key={p.n} className="bg-white p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold text-[#3a5f8a] tracking-widest">
                  {p.n}
                </span>
                <span aria-hidden="true" className="flex-1 h-px bg-gradient-to-r from-[#3a5f8a]/40 to-transparent" />
                {idx < arr.length - 1 && (
                  <span aria-hidden="true" className="hidden md:inline text-[#1e3a5f] text-sm leading-none">→</span>
                )}
              </div>
              <h3 className="text-[13px] font-bold text-[#0f1b3d] leading-snug mb-2">
                {p.title}
              </h3>
              <ul className="space-y-1.5 list-none p-0 m-0 flex-1">
                {p.methods.map((m) => (
                  <li key={m} className="text-[11px] text-gray-700 leading-snug flex gap-1.5">
                    <span aria-hidden="true" className="text-[#3a5f8a] mt-0.5">•</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-3 inline-block self-start text-[9px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-[#e8eef5] text-[#1e3a5f]">
                {p.artifact}
              </span>
            </li>
          ))}
        </ol>

        {/* Populations + recruiting */}
        <div className="bg-white border-x border-b border-gray-200 px-5 py-4">
          <h3 className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#1e3a5f] mb-3">
            Recruiting · Participant Mix
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 list-none p-0 m-0">
            {cfg.populations.map((p) => (
              <li
                key={p.label}
                className="border border-gray-200 rounded-lg px-3 py-2 bg-[#fafbfc] flex items-baseline gap-2"
              >
                <span className="text-[13px] font-extrabold text-[#1e3a5f] tabular-nums">
                  {p.n}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-semibold text-gray-900 truncate">{p.label}</div>
                  <div className="text-[10px] text-gray-600 leading-snug">{p.note}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome metrics */}
        <div className="bg-[#0f1b3d] text-white rounded-b-xl px-5 py-4">
          <h3 className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/85 mb-3">
            Research Outcomes
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 list-none p-0 m-0">
            {cfg.metrics.map((m) => (
              <li
                key={m.label}
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-center"
              >
                <div className="text-lg font-extrabold text-[#c9a84c] tabular-nums">{m.value}</div>
                <div className="text-[10px] text-white/85 leading-snug">{m.label}</div>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            <span className="text-[10px] font-semibold tracking-wider uppercase text-white/70 mr-1">
              Reporting tailored to:
            </span>
            {cfg.audiences.map((a) => (
              <span
                key={a}
                className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-white"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        <p className="text-[11px] text-gray-600 mt-2 text-center">
          NDA-safe research artifact — structure shown, proprietary protocols and participant data omitted.
        </p>
      </figure>
    </FadeIn>
  );
}

/* ─────────── Deep Research Dossier (GE + SAMHSA) ─────────── */

type JourneyStage = {
  stage: string;
  actor: string;
  thinking: string;
  pains: string[];
  opportunities: string[];
  signals: string[];
};

type ResearchPattern = {
  name: string;
  problem: string;
  pattern: string;
  evidence: string;
};

type Dossier = {
  title: string;
  intro: string;
  plan: { label: string; items: string[] }[];
  journeyTitle: string;
  journey: JourneyStage[];
  patternsTitle: string;
  patterns: ResearchPattern[];
  reporting: { audience: string; format: string; decision: string }[];
};

const DOSSIERS: Record<string, Dossier> = {
  ge: {
    title: "Clinical AI Safety — Detailed Research Dossier",
    intro:
      "End-to-end research operating against FDA HF, IEC 62366, and ISO 14971. Mixed methods bridge clinical workflow reality and quantitative model behavior, with every finding traced to a hazard in the risk file.",
    plan: [
      {
        label: "Recruiting",
        items: [
          "Maternal-fetal medicine MDs (6–8) — board-certified, ≥5 yrs prenatal Dx, recruited via clinical advisory board and KOL network across 3 health systems.",
          "OB sonographers (8–10) — RDMS-credentialed, daily AI-assisted scans, balanced across academic + community sites.",
          "Clinical safety + regulatory affairs leads (4–6) — prior FDA submission and post-market surveillance experience.",
          "ML + product engineers (6–8) — model owners and UX engineers responsible for shipping HITL features.",
          "Unmoderated cross-site benchmark (≥120) — stratified by site and role; conflicted reviewers excluded.",
          "Screener gates on role, AI-exposure tier, and risk-tier (Model A/B/C). IRB-aligned consent with PHI handling; sessions de-identified at capture.",
        ],
      },
      {
        label: "Qualitative Execution",
        items: [
          "Cognitive Task Analysis in live reading rooms — observe baseline diagnostic workflow before AI insertion points.",
          "Think-aloud on retrospective gold-standard cases with confidence-score overrides surfaced.",
          "Semi-structured interviews on trust calibration, escalation patterns, and perceived accountability.",
          "Scenario-based simulations derived from FMEA + URRA failure modes (drift, edge-case anatomy, ambiguous findings).",
        ],
      },
      {
        label: "Quantitative Execution",
        items: [
          "Override-accuracy rate vs. ground truth across confidence bins — target ≥ 90% on Model A high-risk decisions.",
          "Time-to-confirm and time-to-override (median + 95th percentile).",
          "Standardized instruments: SUS, NASA-TLX, Trust-in-Automation scale.",
          "Alert-precision and investigation cost for Model C screening (false-positive triage time).",
          "Telemetry: rationale-open rate, abandonment, re-query frequency.",
        ],
      },
      {
        label: "Synthesis",
        items: [
          "Dovetail coding mapped to IEC 62366 use-error taxonomy and ISO 14971 hazard categories.",
          "Severity matrix: hazard severity × probability × population reach; each finding linked to a URRA entry.",
          "Mixed-effects model on override accuracy with random effects for clinician and site.",
          "Triangulation — qualitative themes cross-checked against telemetry and override outcomes before promotion to a finding.",
        ],
      },
    ],
    journeyTitle: "Clinician Journey — Reading an AI-Assisted Prenatal Scan",
    journey: [
      {
        stage: "01 · Prepare",
        actor: "OB sonographer",
        thinking: "I want to know if the AI flagged anything before I form my own read.",
        pains: ["AI output buried in a side panel", "No indication of model version / scope"],
        opportunities: ["Show model scope + last-validated date upfront", "Defer AI surfacing until first manual pass complete"],
        signals: ["Time-to-first-AI-glance", "Manual-pass abandonment rate"],
      },
      {
        stage: "02 · Read",
        actor: "MFM physician",
        thinking: "Where is the AI confident, and where am I being asked to confirm?",
        pains: ["Single opaque confidence number", "Conflict between AI heatmap and clinical landmarks"],
        opportunities: ["Layered explainability — recommendation now, rationale on demand", "Per-region confidence tied to anatomy"],
        signals: ["Rationale-open rate", "NASA-TLX mental demand"],
      },
      {
        stage: "03 · Decide",
        actor: "MFM physician",
        thinking: "Do I accept, override, or escalate? What does each cost?",
        pains: ["Override path harder than accept", "No visible audit trail for the decision"],
        opportunities: ["Symmetric accept/override affordances", "Decision capture with one-tap reason codes"],
        signals: ["Override-accuracy vs. ground truth", "Time-to-confirm / time-to-override"],
      },
      {
        stage: "04 · Communicate",
        actor: "MFM physician + care team",
        thinking: "How do I explain the AI’s role to the patient and the team?",
        pains: ["No patient-facing framing", "Notes don’t reflect AI contribution"],
        opportunities: ["Auto-drafted note stub with AI-vs-clinician attribution", "Patient-friendly summary preset"],
        signals: ["Note edit-distance", "Patient comprehension survey"],
      },
      {
        stage: "05 · Monitor",
        actor: "Clinical safety + ML owner",
        thinking: "Is the model still behaving the way it did at approval?",
        pains: ["Drift visible only in retrospective audit", "No closed loop from incident to model owner"],
        opportunities: ["Live drift dashboard tied to URRA hazards", "Auto-route incidents to model owner + safety board"],
        signals: ["Drift alerts triaged < 24h", "Post-market HF signals"],
      },
    ],
    patternsTitle: "Reusable Patterns — Clinical AI HITL Library",
    patterns: [
      {
        name: "HITL Model Selector (A / B / C)",
        problem: "Every AI feature is shipped with a different and implicit human-oversight model.",
        pattern: "Force product teams to declare Model A (AI recommends, human decides), Model B (AI acts, human monitors), or Model C (AI alerts, human investigates) at design intake. Each model has fixed UI, audit, and evaluation requirements.",
        evidence: "Reduced automation-bias errors by 38% vs. pre-framework baseline on adjudicated cases.",
      },
      {
        name: "Layered Explainability",
        problem: "Single-shot AI outputs either oversell precision or overwhelm clinicians with detail.",
        pattern: "Surface the recommendation immediately; reveal rationale, confidence-by-region, and contributing features on demand within ≤8s of added time.",
        evidence: "Rationale-open rate rose on high-stakes reads without exceeding clinician time budget.",
      },
      {
        name: "Confidence-Calibrated Override",
        problem: "Override is harder than accept, so clinicians drift toward acceptance even when uncertain.",
        pattern: "Symmetric accept/override affordances, with override capturing a one-tap reason code that feeds the safety review board.",
        evidence: "Override-accuracy against gold standard improved across confidence bins.",
      },
      {
        name: "Hazard-Linked Finding",
        problem: "Research findings die in slide decks and never reach the risk file.",
        pattern: "Every research finding is registered with a URRA hazard ID, severity × probability × reach, and a named owner before it can be reported.",
        evidence: "Late-stage HF rework reduced; HF issues caught in design phase, not at finish line.",
      },
      {
        name: "Drift-to-Owner Loop",
        problem: "Post-deployment drift is found by audit, not by the model owner.",
        pattern: "Drift signals route directly to the model owner and AI Safety Review Board, with SLAs measured in hours.",
        evidence: "Zero post-market HF-related safety signals to date.",
      },
    ],
    reporting: [
      { audience: "AI Safety Review Board", format: "Go/no-go memo + framework conformance scorecard", decision: "Ship / hold / re-evaluate per feature" },
      { audience: "Clinical + product leadership", format: "Severity-ranked findings, executive deck + 1-pager", decision: "Roadmap and resourcing trade-offs" },
      { audience: "Regulatory affairs / FDA", format: "HF validation evidence aligned to FDA HF + IEC 62366", decision: "Premarket submission readiness" },
      { audience: "Engineering + ML model owners", format: "HITL pattern library, explainability + drift requirements", decision: "Implementation acceptance criteria" },
    ],
  },
  samhsa: {
    title: "Behavioral Health Portfolio — Detailed Research Dossier",
    intro:
      "Research for SAMHSA’s national behavioral-health portfolio: people in crisis searching for treatment, caregivers searching on their behalf, and the providers and states who submit the data. Trauma-informed protocol and Section 508 + WCAG 2.0 AA are embedded into every phase, not bolted on.",
    plan: [
      {
        label: "Recruiting",
        items: [
          "People seeking treatment (10–12) — SUD and MH, trauma-informed protocol, recruited via SAMHSA grantee networks, 988/211 warm hand-offs, peer-recovery orgs.",
          "Family / caregiver searchers (6–8) — searching on behalf of a loved one; balanced urban / rural and digital literacy.",
          "Facility data submitters (8–10) — state + provider staff who submitted N-SSATS / N-MHSS in last 12 months.",
          "State behavioral-health agency staff (6–8) — block-grant and data leads across regions.",
          "AT + low-literacy panel (≥30) — screen-reader users, ESL speakers, 6th-grade reading level, recruited via DRA + community partners.",
          "Unmoderated Treatment Locator benchmark (≥800) across mobile / desktop / AT.",
          "Plain-language consent with explicit opt-out at any moment; compensation via non-stigmatizing methods.",
        ],
      },
      {
        label: "Qualitative Execution",
        items: [
          "Remote contextual inquiry with people actively searching for care; moderator trained in crisis de-escalation.",
          "Caregiver-dyad sessions — observe how a family member searches on behalf of someone in crisis.",
          "Task-based interviews with facility submitters using their real (non-PII) submission data.",
          "Stakeholder workshops across SAMHSA program offices to surface competing investment priorities.",
        ],
      },
      {
        label: "Quantitative Execution",
        items: [
          "Task success and time-to-find-facility (median + 95th percentile) on the Treatment Locator.",
          "SUS + Single Ease Question on submission portals; drop-off funnel start → submit → accepted.",
          "Large-n unmoderated benchmark across devices and AT (n ≥ 800 per wave).",
          "Analytics: search-refinement counts, zero-result rates, call-deflection to 988 / SAMHSA helpline.",
          "Regression on locator completion across cohorts (rural/urban, AT vs. non-AT, language).",
        ],
      },
      {
        label: "Synthesis",
        items: [
          "Coding mapped to Section 508 Functional Performance Criteria and WCAG 2.0 AA success criteria.",
          "Crisis-state journey: search → trust → contact → arrive-at-care; friction quantified at each stage.",
          "Severity matrix weighted by population reach (2M+ monthly visitors) and crisis-state vulnerability.",
          "Portfolio view: rework hours per platform mapped to governance gaps, surfacing highest-leverage fixes.",
        ],
      },
    ],
    journeyTitle: "Crisis-State Journey — Finding a Treatment Facility",
    journey: [
      {
        stage: "01 · Recognize need",
        actor: "Person seeking treatment / caregiver",
        thinking: "Something has to change today. Where do I even start?",
        pains: ["Stigma + fear of being judged", "Doesn’t know SAMHSA exists"],
        opportunities: ["Plain-language entry from search engines + 988", "Anonymous-by-default search"],
        signals: ["Organic landing rate", "Bounce within 10s"],
      },
      {
        stage: "02 · Search",
        actor: "Person in crisis",
        thinking: "I just need a place that takes my insurance and is near me.",
        pains: ["Too many filters at once", "Zero-result dead ends"],
        opportunities: ["Progressive disclosure of filters", "Always show nearest available alternatives"],
        signals: ["Time-to-first-result", "Zero-result rate"],
      },
      {
        stage: "03 · Trust",
        actor: "Person + caregiver",
        thinking: "Is this place real, safe, and right for me?",
        pains: ["No signal of credentials, payment, or specialty", "Outdated facility info erodes trust"],
        opportunities: ["At-a-glance credential and payment badges", "Last-verified date on every facility"],
        signals: ["Detail-view depth", "Outbound call/click-through"],
      },
      {
        stage: "04 · Contact",
        actor: "Person seeking treatment",
        thinking: "I’m scared to call. What happens if I do?",
        pains: ["No idea what the first call will be like", "Phone-only contact, no SMS or chat"],
        opportunities: ["What-to-expect snippet before the call", "Multiple contact modalities including 988 warm hand-off"],
        signals: ["Call/click-to-988 rate", "Drop-off between detail view and contact"],
      },
      {
        stage: "05 · Provider submits data",
        actor: "Facility submitter",
        thinking: "I have 30 minutes and 12 fields I don’t understand.",
        pains: ["Validation surfaces only at submit", "No save-and-resume"],
        opportunities: ["Inline validation + plain-language help", "Save-and-resume + bulk import for state submitters"],
        signals: ["Submission completion rate", "Partial-submit recovery rate"],
      },
    ],
    patternsTitle: "Reusable Patterns — Behavioral Health Service Library",
    patterns: [
      {
        name: "Crisis-Safe Entry",
        problem: "People in crisis hit a generic search box and bounce.",
        pattern: "Plain-language landing with one-tap 988 escalation, anonymous-by-default search, and a clear ‘what happens if I call’ snippet.",
        evidence: "Bounce on first 10 seconds dropped; call-to-988 hand-off increased.",
      },
      {
        name: "Always-an-Alternative",
        problem: "Zero-result screens send vulnerable users into dead ends.",
        pattern: "Never return an empty result page — always show nearest alternatives by distance, specialty, or payment, with explicit explanation.",
        evidence: "Zero-result rate reduced; locator completion improved across rural cohorts.",
      },
      {
        name: "Credential + Recency Badge",
        problem: "Users cannot tell which facilities are current and credentialed.",
        pattern: "Standardized badges for credentials, payment accepted, and last-verified date, applied consistently across the portfolio.",
        evidence: "Detail-view depth and outbound contact rate both increased.",
      },
      {
        name: "Submit-Without-Surprises",
        problem: "Data submitters discover errors only at the final submit.",
        pattern: "Inline validation, plain-language field help, save-and-resume, and bulk import for state submitters.",
        evidence: "Submission completion improved; rework on submitted data dropped.",
      },
      {
        name: "508-as-Acceptance-Criteria",
        problem: "Section 508 treated as post-launch audit, regressions reintroduced each release.",
        pattern: "Section 508 + WCAG 2.0 AA criteria written into user-story acceptance, enforced in CI/CD, and reported at the portfolio level.",
        evidence: "Development rework across the portfolio dropped ~30% after rollout.",
      },
      {
        name: "Portfolio Prioritization Score",
        problem: "Investment decisions across $130M driven by politics, not outcomes.",
        pattern: "Impact score = (population reach × crisis-state vulnerability × evidence strength) ÷ effort; quarterly roadmap reviews bound to the score.",
        evidence: "Investment shifted toward highest-leverage fixes; executive trust in roadmap rose.",
      },
    ],
    reporting: [
      { audience: "SAMHSA executive sponsors", format: "Quarterly portfolio review — public-health impact + ROI of rework reduction", decision: "Investment allocation across 6+ platforms" },
      { audience: "Grantees + state BH agencies", format: "Grantee-facing briefing on submission burden", decision: "Portal changes and training priorities" },
      { audience: "Product, content, engineering", format: "Pattern library, 508 acceptance criteria, content guidelines", decision: "Implementation acceptance + sprint planning" },
      { audience: "508 program + OMB reporting", format: "Portfolio compliance memo + remediation backlog", decision: "Compliance posture + remediation funding" },
    ],
  },
  ssa: {
    title: "SSA11y — Detailed Research Dossier",
    intro:
      "Research operating against WCAG 2.2 AA, Section 508, and ADA Title II for a federal disability-benefits platform used by 50M+ citizens. Mixed methods bridge assistive-technology (AT) reality, developer adoption of the component library, and the CI/CD gate that enforces accessibility before code reaches staging.",
    plan: [
      {
        label: "Recruiting",
        items: [
          "Assistive-technology users (12–16) — daily JAWS, NVDA, VoiceOver, Dragon, switch-control; recruited via Disability Rights orgs, AT trainer networks, and SSA beneficiary outreach.",
          "Adjudicators + DDS examiners (8–10) — case-processing staff using the 15+ modules daily; balanced across regions and tenure.",
          "Citizens with cognitive / low-vision / low-literacy needs (8–10) — recruited via community partners; 6th-grade reading benchmark.",
          "Front-end engineers + module owners (8–10) — adopters of the 8 core components; sampled across 40+ monthly releases.",
          "Unmoderated CI/CD telemetry cohort (≥40 module releases) — pre/post SSA11y rollout, stratified by module risk-tier.",
          "Plain-language consent, accessible scheduling (phone + email + relay), stipends via non-stigmatizing methods.",
        ],
      },
      {
        label: "Qualitative Execution",
        items: [
          "Contextual inquiry with AT users completing real benefit-claim flows on JAWS / NVDA / VoiceOver.",
          "Cognitive walkthroughs across all 15+ modules to surface inconsistent component behavior.",
          "Developer think-aloud on adopting the component library — friction points, doc gaps, override patterns.",
          "Heuristic + manual audits keyed to WCAG 2.2 AA SC and Section 508 FPC, scored per component (not per page).",
        ],
      },
      {
        label: "Quantitative Execution",
        items: [
          "Task success and time-on-task for top 10 adjudicator flows, stratified by AT vs. non-AT.",
          "WCAG violation density per 1k LOC, tracked per module pre/post SSA11y gate.",
          "Audit hours per release (target: 30% reduction → $1.5M+ annual savings).",
          "SUS + SEQ on the 8 core components; defect-recurrence rate post-adoption.",
          "Pipeline telemetry: SSA11y catch-rate, false-positive rate, time-to-fix from flag to merge.",
        ],
      },
      {
        label: "Synthesis",
        items: [
          "Coding mapped to WCAG 2.2 AA SC and Section 508 FPC; severity weighted by population reach (50M+ citizens).",
          "Root-cause attribution to shared components — confirming the 65% / 8-component hypothesis.",
          "Defect-flow analysis: where in CI/CD violations are caught vs. escape to staging.",
          "Triangulation — AT findings cross-checked with telemetry and adjudicator task data before any finding is promoted.",
        ],
      },
    ],
    journeyTitle: "Adjudicator + AT-User Journey — Processing a Disability Claim",
    journey: [
      {
        stage: "01 · Intake",
        actor: "DDS examiner",
        thinking: "I need to open the case and see the citizen's full history without re-keying anything.",
        pains: ["Inconsistent table behavior across modules", "Keyboard focus lost between screens"],
        opportunities: ["Single shared data-table component with predictable focus order", "Persistent breadcrumb + back-stack"],
        signals: ["Time-to-open-case", "Focus-loss events per session"],
      },
      {
        stage: "02 · Evidence review",
        actor: "Examiner + AT user (citizen self-service)",
        thinking: "I need to read every document and confirm nothing is missing.",
        pains: ["PDFs without text layer", "Modal traps with no escape route"],
        opportunities: ["Accessible PDF preflight at upload", "Standardized modal pattern with focus-trap exit"],
        signals: ["Screen-reader completion rate", "Modal-abandon rate"],
      },
      {
        stage: "03 · Determination",
        actor: "DDS examiner",
        thinking: "Are the form errors blocking me from submitting clearly explained?",
        pains: ["Errors surfaced only at submit", "Error messages not announced by screen readers"],
        opportunities: ["Inline validation tied to ARIA live regions", "Plain-language error copy mapped to fix"],
        signals: ["Submit-error rate", "Time from error to resolution"],
      },
      {
        stage: "04 · Citizen notification",
        actor: "Claimant (AT user)",
        thinking: "What did they decide and what do I do next?",
        pains: ["Determination letters not screen-reader friendly", "Next-step CTAs visual-only"],
        opportunities: ["Plain-language summary first, legal language second", "Multi-modal next-step guidance (text + audio)"],
        signals: ["Comprehension survey", "Appeal-rate due to misunderstanding"],
      },
      {
        stage: "05 · Continuous compliance",
        actor: "Engineer + accessibility program",
        thinking: "Is this release clean before it merges?",
        pains: ["Violations found only post-deploy", "Same defect recurs across modules"],
        opportunities: ["SSA11y CI/CD gate scans at commit", "Component-library upgrade auto-PRs"],
        signals: ["Violations per 1k LOC", "Time-to-fix from flag to merge"],
      },
    ],
    patternsTitle: "Reusable Patterns — Federal Accessibility Library",
    patterns: [
      {
        name: "Fix-the-Component-Not-the-Page",
        problem: "200+ WCAG violations across 15+ modules, each team re-implementing tables / modals / forms.",
        pattern: "Identify the small set of shared components (≈8) that generate the majority of violations; rebuild those once with ARIA, keyboard, and AT tests baked in; migrate modules to consume the library.",
        evidence: "65% of violations resolved by fixing 8 components; defect recurrence dropped sharply post-migration.",
      },
      {
        name: "Accessibility-as-CI/CD-Gate",
        problem: "Manual WCAG audits gate every release; violations found post-deploy.",
        pattern: "SSA11y scans code at commit time, ranks fixes by severity, blocks merge on high-severity violations, and reports trends per module.",
        evidence: "Audit effort reduced 30%; $1.5M+ annual savings; near-zero release delays from accessibility regressions.",
      },
      {
        name: "AT-User in the Loop",
        problem: "Component decisions made without daily AT users; ARIA written 'to spec' but unusable in practice.",
        pattern: "Every shared component validated with JAWS / NVDA / VoiceOver users before it ships; AT cohort participates in component design, not just QA.",
        evidence: "Component-level usability defects dropped 30–40%; AT task-success parity with non-AT.",
      },
      {
        name: "USWDS-Aligned Default",
        problem: "Federal teams diverge from USWDS, creating accessibility debt and brand drift.",
        pattern: "Every new component aligns to USWDS tokens and patterns by default; deviations require an accessibility + design review.",
        evidence: "Faster adoption across 40+ monthly releases; consistent AT behavior across modules.",
      },
      {
        name: "Defect Root-Cause Loop",
        problem: "Same violation re-appears in new modules; no learning loop.",
        pattern: "Every shipped defect is traced to a component, a doc gap, or a missing CI/CD rule; fix lands in the library and the gate, not just in the module.",
        evidence: "Recurrence rate of same defect class dropped after library + gate updates.",
      },
    ],
    reporting: [
      { audience: "SSA executive sponsors", format: "Quarterly portfolio scorecard — audit hours saved, violations prevented, release-velocity impact", decision: "Continued funding + scale to additional federal agencies" },
      { audience: "DDS / adjudicator leadership", format: "Module-by-module findings with adjudicator task metrics", decision: "Module-level remediation priorities" },
      { audience: "Engineering + module owners", format: "Component-library release notes, CI/CD rules, migration playbook", decision: "Adoption + sprint planning" },
      { audience: "508 program + federal partners", format: "Compliance posture memo + reusable framework write-up", decision: "Replication across federal systems" },
    ],
  },
  bestbuy: {
    title: "Best Buy Health — Detailed Research Dossier",
    intro:
      "Research with elderly users (65–90+) of personal emergency response systems, validated against MIL-STD-1472H human engineering criteria, FDA / IEC 62366 usability engineering, and WCAG 2.2 AA. Mixed methods include stress-condition simulation because emergency activation never happens in calm lab conditions.",
    plan: [
      {
        label: "Recruiting",
        items: [
          "Primary users aged 65–90+ (16–20) — stratified by arthritis severity, low vision (cataracts / AMD), age-related hearing loss, and mild cognitive impairment.",
          "Caregivers + adult children (6–8) — set up and monitor devices on behalf of the primary user.",
          "Emergency-response operators (4–6) — receive activations from Lively + Jitterbug devices.",
          "AT-user panel (≥20) — VoiceOver, TalkBack, large-text and high-contrast users.",
          "Large-n unmoderated benchmark (≥200) across the 5 product lines after each redesign wave.",
          "IRB-aligned consent; sessions held in-home where possible; trained moderators for cognitive accommodation.",
        ],
      },
      {
        label: "Qualitative Execution",
        items: [
          "Contextual inquiry in the home — how the device sits in the daily routine (charging, wearing, traveling).",
          "Stress-condition simulation — time pressure + distraction + physical limitation; participant must trigger SOS.",
          "Caregiver-dyad sessions — observe setup, troubleshooting, and false-alarm handling.",
          "Operator listening sessions — review real (consented) activation calls for activation-quality patterns.",
        ],
      },
      {
        label: "Quantitative Execution",
        items: [
          "Activation success rate under stress vs. baseline; false-activation rate; abandonment rate.",
          "MIL-STD-1472H conformance: touch-target size, control force, contrast, audio level — measured against population thresholds.",
          "NASA-TLX + SUS on each redesign wave; comprehension test on alert wording.",
          "ANOVA + survival analysis on activation abandonment; effect sizes per impairment cohort.",
          "Field telemetry: missed-activation events, retry counts, time-to-first-press.",
        ],
      },
      {
        label: "Synthesis",
        items: [
          "Coding mapped to MIL-STD-1472H sections (reach, sizing, legibility, controls) + IEC 62366 use-error taxonomy.",
          "Dyad journey: discover → set up → use → recover from false alarm → renew.",
          "Severity matrix: hazard severity × probability × reach across 1M+ users.",
          "Triangulation — qualitative stress findings cross-checked against field telemetry before promotion to a hazard.",
        ],
      },
    ],
    journeyTitle: "Elderly-User + Caregiver Journey — Emergency Activation",
    journey: [
      {
        stage: "01 · Setup",
        actor: "Caregiver + primary user",
        thinking: "Will this thing actually work when I need it?",
        pains: ["Pairing assumes smartphone fluency", "Setup steps not voice-guided"],
        opportunities: ["Caregiver-assisted setup mode", "Voice-guided pairing with large captions"],
        signals: ["Setup completion rate", "Calls to support during setup"],
      },
      {
        stage: "02 · Daily wear",
        actor: "Primary user (65–90+)",
        thinking: "Is the device still on, charged, and noticing me?",
        pains: ["Charge status visual-only", "Wearable uncomfortable or stigmatizing"],
        opportunities: ["Multi-modal charge indicator (visual + audio + haptic)", "Discreet wearable form factor options"],
        signals: ["Days-worn per week", "Time-off-charger before low-battery alert"],
      },
      {
        stage: "03 · Emergency activation",
        actor: "Primary user under stress",
        thinking: "I need help now. Press. Did it go through?",
        pains: ["Touch target too small for arthritic hands", "No confirmation of successful activation"],
        opportunities: ["MIL-STD-1472H-sized control with progressive activation (press → hold → confirm)", "Multi-modal activation confirmation (visual + audio + haptic)"],
        signals: ["Activation success under stress", "Time-to-first-press"],
      },
      {
        stage: "04 · Operator hand-off",
        actor: "Operator + primary user",
        thinking: "Can the operator hear me and know who I am?",
        pains: ["Audio levels not tuned for age-related hearing loss", "Operator lacks context on user profile"],
        opportunities: ["Audio frequency profile tuned to presbycusis", "Operator dashboard shows user's accessibility profile + medications"],
        signals: ["Call-completion rate", "Operator time-to-context"],
      },
      {
        stage: "05 · Recover from false alarm",
        actor: "Primary user + caregiver",
        thinking: "I pressed it by accident. Now what?",
        pains: ["Cancellation harder than activation", "Caregiver not notified of false alarm + resolution"],
        opportunities: ["Symmetric cancel affordance with grace window", "Auto-notify caregiver of activation + resolution"],
        signals: ["False-alarm rate", "Repeat false alarms per user"],
      },
    ],
    patternsTitle: "Reusable Patterns — Inclusive Health-Device Library",
    patterns: [
      {
        name: "Progressive Emergency Activation",
        problem: "Single-press activation triggers false alarms; multi-step activation fails under stress.",
        pattern: "Press → hold → confirm sequence sized to MIL-STD-1472H control criteria, with multi-modal confirmation at each step; cancel affordance symmetric with activation.",
        evidence: "Missed activations eliminated; false-alarm rate reduced.",
      },
      {
        name: "Redundant-Modality Alerts",
        problem: "Visual-only or audio-only alerts fail users with sensory impairment.",
        pattern: "Every critical alert delivered via visual + auditory + haptic simultaneously; audio frequencies tuned for age-related hearing loss; contrast beyond WCAG minimum for cataracts and AMD.",
        evidence: "Zero critical alerts missed in post-launch field telemetry sample.",
      },
      {
        name: "Stress-Condition Validation",
        problem: "Calm-lab usability testing overstates real-world activation success.",
        pattern: "Every emergency flow validated under simulated stress (time pressure + distraction + physical limitation) with representative 65–90+ population before release.",
        evidence: "Caught activation failures invisible in calm-lab testing; redesigns shipped only after stress-condition pass.",
      },
      {
        name: "Caregiver-in-the-Loop",
        problem: "Elderly users abandon devices that require independent troubleshooting.",
        pattern: "Caregiver-assisted setup, caregiver notification on activation + resolution, optional remote check-in.",
        evidence: "Days-worn per week increased; setup-support calls dropped.",
      },
      {
        name: "MIL-STD-1472H as Acceptance",
        problem: "Inclusive-design intent without measurable criteria becomes opinion.",
        pattern: "MIL-STD-1472H thresholds (touch target, control force, contrast, audio level) written into design acceptance criteria across all 5 product lines.",
        evidence: "Remediation cycles reduced 30–40%; governance approved at executive level.",
      },
    ],
    reporting: [
      { audience: "Best Buy Health executive leadership", format: "Cross-portfolio safety + activation-success scorecard", decision: "Governance adoption across all 5 product lines" },
      { audience: "Product + engineering teams", format: "Pattern library + MIL-STD-1472H acceptance criteria + redlines", decision: "Redesign sprint planning + release gating" },
      { audience: "FDA / regulatory affairs", format: "IEC 62366 usability engineering file + stress-condition evidence", decision: "Submission readiness for medical-device claims" },
      { audience: "Operator partners + care teams", format: "Operator dashboard requirements + alert taxonomy", decision: "Call-center training + dashboard rollout" },
    ],
  },
};

function GeFrameworkPersonas() {
  const [openJourneys, setOpenJourneys] = useState<string[]>([]);
  const toggleJourney = (persona: string) =>
    setOpenJourneys((prev) =>
      prev.includes(persona) ? prev.filter((p) => p !== persona) : [...prev, persona]
    );

  const personas = [
    {
      img: personaClinician,
      name: "Dr. Priya — Clinician / Radiologist",
      group: "End-User Clinicians",
      tagline: "“If I can't see why the AI flagged it, I won't trust it on a patient.”",
      context:
        "Reads prenatal scans under time pressure; the AI sits inside her diagnostic workflow as a second set of eyes.",
      goals: [
        "Confirm, override, or defer to AI with a clear rationale",
        "Avoid automation bias and alert fatigue during high-volume reading",
        "Reach a confident diagnosis without slowing the clinical workflow",
      ],
      frustrations: [
        "Opaque outputs with no confidence or explanation",
        "Too many false-positive alerts that erode trust",
      ],
      needs: ["Model A — AI Recommends", "On-demand explainability", "Meaningful human checkpoint"],
    },
    {
      img: personaMlEngineer,
      name: "Arjun — ML / AI Engineer",
      group: "Model Owners",
      tagline: "“Tell me the thresholds and failure modes I have to design against.”",
      context:
        "Owns model training, evaluation, and deployment; needs the framework to translate into concrete acceptance criteria.",
      goals: [
        "Map model performance to deployment thresholds",
        "Instrument drift detection and monitoring early",
        "Pass evaluation gates without late-stage rework",
      ],
      frustrations: [
        "Ambiguous safety requirements discovered at submission time",
        "No standard FMEA/URRA template for AI-specific failures",
      ],
      needs: ["Model evaluation criteria", "Drift + incident hooks", "FMEA / URRA templates"],
    },
    {
      img: personaRegulatory,
      name: "Elena — Regulatory Affairs Lead",
      group: "Regulatory / FDA",
      tagline: "“Show me the evidence trail that maps to IEC 62366 and ISO 14971.”",
      context:
        "Assembles FDA submissions and post-market documentation; depends on traceable, defensible safety evidence.",
      goals: [
        "Produce submission-ready human factors evidence",
        "Trace each design decision to a normative standard",
        "Accelerate approval cycles by catching issues in design",
      ],
      frustrations: [
        "Evidence reconstructed retroactively at the finish line",
        "Gaps between engineering artifacts and regulatory requirements",
      ],
      needs: ["FDA HF evidence pack", "ISO 14971 traceability", "Go/no-go documentation"],
    },
    {
      img: personaSafety,
      name: "Marcus — QA / Safety Engineer",
      group: "Quality & Safety",
      tagline: "“Every failure scenario needs a documented, testable mitigation.”",
      context:
        "Runs risk analysis and verification; gatekeeps that mitigations actually hold before release.",
      goals: [
        "Validate URRA and FMEA mitigations are effective",
        "Verify human-in-the-loop checkpoints function as designed",
        "Produce repeatable pass/fail safety evidence",
      ],
      frustrations: [
        "Risk artifacts that aren't tied to verifiable tests",
        "Safety treated as a sign-off, not a continuous control",
      ],
      needs: ["Verifiable mitigations", "HITL conformance checks", "Post-market monitoring"],
    },
    {
      img: personaLeadership,
      name: "Sophia — Clinical Product Leadership",
      group: "Product / Compliance Leadership",
      tagline: "“Protect patients without killing our innovation velocity.”",
      context:
        "Balances roadmap, risk, and regulatory exposure across 10+ product teams; owns go/no-go authority.",
      goals: [
        "Make ship/hold decisions with cross-functional sign-off",
        "Standardize safety across teams without bottlenecks",
        "Report framework conformance to the AI Safety Review Board",
      ],
      frustrations: [
        "Ad-hoc, team-by-team safety decisions",
        "No shared scorecard for readiness and risk",
      ],
      needs: ["Go/no-go authority", "Conformance scorecard", "Enterprise standard"],
    },
  ];

  const journeys = [
    {
      persona: "End-User Clinicians",
      tasks: ["Open AI-flagged scan", "Review confidence + rationale", "Confirm / override / defer", "Document decision"],
      needs: ["HITL Model A", "Layered explainability", "Automation-bias safeguards", "Audit-logged checkpoint"],
    },
    {
      persona: "Model Owners",
      tasks: ["Define eval criteria", "Run FMEA / URRA", "Validate deployment thresholds", "Wire drift monitoring"],
      needs: ["Model evaluation gate", "Failure-mode coverage", "Drift detection", "Incident response hook"],
    },
    {
      persona: "Regulatory / FDA",
      tasks: ["Map design to standards", "Assemble HF evidence", "Compile go/no-go memo", "Prepare FDA submission"],
      needs: ["IEC 62366 trace", "ISO 14971 risk file", "FDA HF evidence", "Conformance scorecard"],
    },
    {
      persona: "Quality & Safety",
      tasks: ["Review risk artifacts", "Verify mitigations", "Test HITL checkpoints", "Sign off readiness"],
      needs: ["Verifiable mitigations", "HITL conformance", "Pass/fail evidence", "Post-market plan"],
    },
    {
      persona: "Product / Compliance Leadership",
      tasks: ["Review readiness scorecard", "Convene Safety Review Board", "Make ship / hold call", "Report conformance"],
      needs: ["Go/no-go authority", "Cross-functional sign-off", "Risk visibility", "Enterprise standard"],
    },
  ];

  const stages = ["Design", "Evaluation", "Approval", "Monitoring"];

  return (
    <div className="my-12 space-y-12">
      {/* Detailed personas */}
      <FadeIn>
        <section aria-labelledby="ge-personas-title">
          <h2 id="ge-personas-title" className="text-lg font-bold text-gray-900 mb-1">
            Detailed Personas by User Group
          </h2>
          <p className="text-gray-600 text-xs mb-6">
            The AI safety framework serves five distinct user groups across the clinical AI
            lifecycle. Each persona has its own goals, frustrations, and safety needs that shaped
            the governance model.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {personas.map((p) => (
              <article
                key={p.name}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white flex flex-col"
              >
                <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-[#0f1b3d] via-[#1e3a5f] to-[#3a5f8a] text-white">
                  <img
                    src={p.img}
                    alt={`Persona portrait of ${p.name}`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-white/40 shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.14em] uppercase px-2 py-0.5 rounded bg-white/15">
                      {p.group}
                    </span>
                    <h3 className="text-sm font-bold mt-1.5">{p.name}</h3>
                    <p className="text-[12px] text-white/85 italic mt-0.5">{p.tagline}</p>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <p className="text-[12.5px] text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[#1e3a5f]">Context: </span>
                    {p.context}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wide text-emerald-700 mb-1.5">
                        Goals
                      </h4>
                      <ul className="list-disc pl-4 space-y-1 m-0">
                        {p.goals.map((g) => (
                          <li key={g} className="text-[12px] text-gray-700 leading-snug">
                            {g}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wide text-[#b42318] mb-1.5">
                        Frustrations
                      </h4>
                      <ul className="list-disc pl-4 space-y-1 m-0">
                        {p.frustrations.map((f) => (
                          <li key={f} className="text-[12px] text-gray-700 leading-snug">
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.needs.map((n) => (
                      <span
                        key={n}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#e8eef5] text-[#1e3a5f] border border-[#c3d2e4]"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Journey maps */}
      <FadeIn>
        <section aria-labelledby="ge-journey-title">
          <h2 id="ge-journey-title" className="text-lg font-bold text-gray-900 mb-1">
            User-Group Journey Maps
          </h2>
          <p className="text-gray-600 text-xs mb-4">
            Select a user group to expand its journey — the tasks they perform across the AI
            lifecycle and the safety needs each task must satisfy.
          </p>

          {/* Lifecycle stage legend */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {stages.map((s, i) => (
              <span key={s} className="inline-flex items-center gap-2">
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#e8eef5] text-[#1e3a5f] border border-[#c3d2e4]">
                  {i + 1}. {s}
                </span>
                {i < stages.length - 1 && (
                  <span aria-hidden="true" className="text-[#9cb2d2] text-xs">→</span>
                )}
              </span>
            ))}
          </div>

          {/* Expand / collapse controls */}
          <div className="flex items-center gap-2 mb-4">
            <button
              type="button"
              onClick={() => setOpenJourneys(journeys.map((j) => j.persona))}
              className="text-[11px] font-semibold px-3 py-1.5 rounded-md border border-gray-200 bg-white text-[#1e3a5f] hover:bg-gray-50 transition-colors"
            >
              Expand all
            </button>
            <button
              type="button"
              onClick={() => setOpenJourneys([])}
              className="text-[11px] font-semibold px-3 py-1.5 rounded-md border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Collapse all
            </button>
          </div>

          <div className="space-y-3">
            {journeys.map((j) => {
              const isOpen = openJourneys.includes(j.persona);
              const panelId = `ge-journey-panel-${j.persona.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`;
              return (
                <div
                  key={j.persona}
                  className="border border-gray-200 rounded-xl bg-white overflow-hidden"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleJourney(j.persona)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left bg-gradient-to-br from-[#0f1b3d] via-[#1e3a5f] to-[#3a5f8a] text-white hover:opacity-95 transition-opacity"
                  >
                    <span className="text-[13px] font-bold">{j.persona}</span>
                    <span className="flex items-center gap-3">
                      <span className="text-[10px] font-medium text-[#9cb2d2] hidden sm:inline">
                        {j.tasks.length} tasks · {j.needs.length} safety needs
                      </span>
                      <span
                        aria-hidden="true"
                        className={`text-base leading-none transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ⌄
                      </span>
                    </span>
                  </button>

                  {isOpen && (
                    <div id={panelId} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wide text-[#7e22ce]">
                          Tasks
                        </span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {j.tasks.map((t, i) => (
                            <span key={t} className="inline-flex items-center gap-1.5">
                              <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#f3e8fd] text-[#7e22ce] border border-[#e9d5ff]">
                                {t}
                              </span>
                              {i < j.tasks.length - 1 && (
                                <span aria-hidden="true" className="text-[#c4a3e8] text-xs">
                                  ›
                                </span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                          Safety needs
                        </span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {j.needs.map((n) => (
                            <span
                              key={n}
                              className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-100"
                            >
                              {n}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}

function WcagToolDetails() {
  const [openJourneys, setOpenJourneys] = useState<string[]>([]);
  const toggleJourney = (persona: string) =>
    setOpenJourneys((prev) =>
      prev.includes(persona) ? prev.filter((p) => p !== persona) : [...prev, persona]
    );
  const aiFixExamples = [
    {
      criterion: "1.1.1 Non-text Content",
      title: "Image missing alt text",
      impact: "Critical",
      suggestion:
        "Add a descriptive alt attribute conveying the chart's key takeaway, not just the file name.",
      before: `<img src="q3-revenue.png">`,
      after: `<img src="q3-revenue.png"
  alt="Q3 revenue rose 18% to $4.2M">`,
    },
    {
      criterion: "1.4.3 Contrast (Minimum)",
      title: "Low text contrast on button",
      impact: "Serious",
      suggestion:
        "Foreground/background ratio is 2.1:1. Darken the text to #1e3a5f to reach 4.5:1 for AA / 7:1 for AAA.",
      before: `.cta {
  color: #9cb2d2; /* ratio 2.1:1 */
  background: #ffffff;
}`,
      after: `.cta {
  color: #1e3a5f; /* ratio 8.9:1 */
  background: #ffffff;
}`,
    },
    {
      criterion: "4.1.2 Name, Role, Value",
      title: "Icon button has no accessible name",
      impact: "Critical",
      suggestion:
        "Add aria-label so screen readers announce the control's purpose; mark the decorative icon aria-hidden.",
      before: `<button class="icon">
  <svg>...</svg>
</button>`,
      after: `<button class="icon" aria-label="Close dialog">
  <svg aria-hidden="true">...</svg>
</button>`,
    },
    {
      criterion: "3.3.2 Labels or Instructions",
      title: "Form input without a programmatic label",
      impact: "Serious",
      suggestion:
        "Associate a <label> with the field via for/id so the input is named and clickable.",
      before: `<span>Email</span>
<input type="email" name="email">`,
      after: `<label for="email">Email</label>
<input type="email" id="email" name="email">`,
    },
  ];

  const profiles = [

    {
      role: "Developers",
      icon: "</>",
      use: "Paste a component or URL and get the exact corrected markup — fix issues at the source, in the language they already work in.",
      gain: "Copy-paste code fixes",
    },
    {
      role: "Testers / QA",
      icon: "✓",
      use: "Run any build through the scanner to catch regressions before release and confirm fixes actually resolve the criterion.",
      gain: "Repeatable pass/fail evidence",
    },
    {
      role: "SMEs / Accessibility Leads",
      icon: "★",
      use: "Validate conformance against all 28 criteria and produce auditable WCAG-EM evidence for sign-off.",
      gain: "Defensible audit trail",
    },
    {
      role: "Content Owners",
      icon: "✎",
      use: "Understand plain-language findings and before/after examples without needing to read raw code.",
      gain: "Actionable, jargon-free guidance",
    },
    {
      role: "Product / Compliance",
      icon: "◎",
      use: "Track the prioritized roadmap to sequence remediation by user impact and legal-risk reduction.",
      gain: "Risk-ranked backlog",
    },
  ];

  const layers = [
    {
      title: "Input Layer",
      items: ["Live URL fetch", "Pasted HTML", "DOM + ARIA normalization"],
    },
    {
      title: "Rule Engine",
      items: ["28 WCAG 2.2 criteria", "A / AA / AAA tiers", "Extensible rule modules"],
    },
    {
      title: "Remediation Engine",
      items: ["Offending markup", "Corrected snippet", "Before/after diff"],
    },
    {
      title: "Prioritization",
      items: ["Impact weighting", "Conformance level", "Effort estimate"],
    },
    {
      title: "Output Layer",
      items: ["Roadmap view", "Section 508 evidence", "WCAG-EM export"],
    },
  ];

  const detailedPersonas = [
    {
      img: personaDeveloper,
      name: "Dev — Front-End Engineer",
      group: "Developers",
      tagline: "“Tell me exactly what to change and where.”",
      context: "Ships React/HTML daily, owns component libraries, lives in the IDE and CI.",
      goals: [
        "Fix violations at the source without leaving the editor",
        "Catch regressions before merge in the pipeline",
        "Understand the ARIA/markup rationale, not just the rule ID",
      ],
      frustrations: [
        "Scanners flag problems but never show the corrected code",
        "Vague rule references force manual spec lookups",
      ],
      needs: ["Copy-paste corrected markup", "Inline visual cue", "CI/CD gating"],
    },
    {
      img: personaQa,
      name: "Quinn — QA / Test Engineer",
      group: "Testers / QA",
      tagline: "“I need repeatable pass/fail evidence per build.”",
      context: "Runs regression suites, gatekeeps releases, files reproducible defects.",
      goals: [
        "Verify a fix actually resolves the criterion",
        "Produce consistent pass/fail reports across builds",
        "Reproduce issues with clear steps and locations",
      ],
      frustrations: [
        "Non-deterministic results between runs",
        "No traceable evidence to attach to tickets",
      ],
      needs: ["Deterministic scans", "Exportable evidence", "Regression diffing"],
    },
    {
      img: personaSme,
      name: "Sam — Accessibility SME / Lead",
      group: "SMEs / Accessibility Leads",
      tagline: "“Show me defensible conformance against every criterion.”",
      context: "Owns the conformance strategy, signs off audits, advises teams on WCAG-EM.",
      goals: [
        "Validate all 28 criteria across A/AA/AAA tiers",
        "Generate auditable WCAG-EM and Section 508 evidence",
        "Mentor teams toward repeatable practice",
      ],
      frustrations: [
        "Tools stop at AA and ignore AAA",
        "Manual evidence assembly is slow and error-prone",
      ],
      needs: ["Full criteria coverage", "Audit trail export", "Tier-aware scoring"],
    },
    {
      img: personaContent,
      name: "Casey — Content Owner / Author",
      group: "Content Owners",
      tagline: "“Explain it without the code jargon.”",
      context: "Manages copy, media, and CMS pages; not a developer.",
      goals: [
        "Understand findings in plain language",
        "Fix alt text, headings, and link text confidently",
        "Avoid breaking compliance when publishing",
      ],
      frustrations: [
        "Findings written for engineers",
        "No before/after examples to learn from",
      ],
      needs: ["Plain-language guidance", "Before/after samples", "Self-serve fixes"],
    },
    {
      img: personaCompliance,
      name: "Morgan — Product / Compliance Manager",
      group: "Product / Compliance",
      tagline: "“Sequence the work by impact and legal risk.”",
      context: "Balances roadmap, deadlines, and regulatory exposure across products.",
      goals: [
        "Prioritize remediation by user impact and risk",
        "Track progress toward AAA over time",
        "Report conformance status to stakeholders",
      ],
      frustrations: [
        "Flat defect lists with no prioritization",
        "No visibility into risk reduction over time",
      ],
      needs: ["Risk-ranked backlog", "Impact weighting", "Executive reporting"],
    },
  ];

  const iaLevels = [
    {
      level: "L0 — Entry",
      nodes: ["Dashboard", "New Scan", "Recent Scans"],
      note: "Single entry point; choose URL fetch or paste-HTML input.",
    },
    {
      level: "L1 — Scan Workspace",
      nodes: ["Results Overview", "Criteria Filter (A/AA/AAA)", "Severity Filter"],
      note: "Faceted navigation lets each persona slice the same dataset their way.",
    },
    {
      level: "L2 — Issue Detail",
      nodes: ["Offending Markup", "AI Suggestion + Visual Cue", "Before/After Fix"],
      note: "The shared deep-link unit referenced from tickets, PRs, and reports.",
    },
    {
      level: "L3 — Remediation Roadmap",
      nodes: ["Impact Weighting", "Effort Estimate", "Risk-Ranked Backlog"],
      note: "Aggregates issues into a prioritized, trackable plan.",
    },
    {
      level: "L4 — Evidence & Export",
      nodes: ["WCAG-EM Report", "Section 508 Evidence", "CI/CD Artifacts"],
      note: "Output layer producing auditable, shareable conformance artifacts.",
    },
  ];

  const researchStudies = [
    {
      kind: "Qualitative",
      method: "Moderated Usability Testing",
      participants: "8 participants — 3 Developers, 2 QA, 2 SMEs, 1 Content Owner",
      approach:
        "Task-based sessions: scan a page, locate the highest-impact issue, apply the AI fix, and confirm the criterion passes. Think-aloud protocol with screen recording.",
      questions: [
        "Where do you expect the corrected code to appear?",
        "What does the visual cue tell you about severity?",
        "Walk me through how you'd verify this fix passed.",
      ],
      finding: "7/8 applied the AI fix without leaving the issue view; SMEs wanted clearer tier labels.",
    },
    {
      kind: "Qualitative",
      method: "Persona Interviews & Diary Study",
      participants: "12 contributors across 4 teams over 2 weeks",
      approach:
        "Semi-structured interviews to map goals/frustrations, followed by a diary capturing real remediation moments in their daily workflow.",
      questions: [
        "When accessibility comes up, what's your first action today?",
        "What makes a finding actionable vs. ignorable for you?",
        "How do you currently prove a fix is compliant?",
      ],
      finding: "Plain-language framing was decisive for Content Owners; Developers prized in-context code.",
    },
    {
      kind: "Quantitative",
      method: "Pre/Post Task Benchmark",
      participants: "32 contributors, A/B vs. legacy scanner",
      approach:
        "Measured time-to-remediate, task success rate, and errors per fix with and without AI suggestions.",
      questions: [
        "Median time from detection to verified fix?",
        "Task success rate per persona group?",
        "Error rate on applied corrections?",
      ],
      finding: "Median time-to-remediate dropped 54%; first-attempt fix success rose from 61% to 92%.",
    },
    {
      kind: "Quantitative",
      method: "In-Product Analytics & SUS Survey",
      participants: "210 sessions; 64 SUS responses",
      approach:
        "Tracked funnel completion (scan → fix → verify), feature adoption of visual cues, and System Usability Scale scoring.",
      questions: [
        "What % of scans reach a verified fix?",
        "Which personas adopt CI/CD gating?",
        "What is the overall SUS score?",
      ],
      finding: "Scan-to-verified-fix completion 78%; SUS score 86 (excellent).",
    },
  ];

  const journeys = [
    {
      persona: "Developers",
      tasks: ["Paste component / URL", "Read AI fix + visual cue", "Apply corrected markup", "Gate in CI/CD"],
      needs: ["1.1.1 Non-text Content", "4.1.2 Name, Role, Value", "2.4.4 Link Purpose"],
    },
    {
      persona: "Testers / QA",
      tasks: ["Run build through scanner", "Diff against last pass", "Reproduce + log defect", "Verify fix passes"],
      needs: ["3.3.1 Error Identification", "4.1.3 Status Messages", "2.4.3 Focus Order"],
    },
    {
      persona: "SMEs / Leads",
      tasks: ["Audit all 28 criteria", "Validate A/AA/AAA tiers", "Assemble evidence", "Sign off conformance"],
      needs: ["1.4.6 Contrast (Enhanced)", "2.4.10 Section Headings", "1.4.3 Contrast (Minimum)"],
    },
    {
      persona: "Content Owners",
      tasks: ["Read plain-language finding", "Review before/after sample", "Fix alt text & headings", "Re-publish safely"],
      needs: ["1.1.1 Non-text Content", "2.4.6 Headings & Labels", "3.1.5 Reading Level"],
    },
    {
      persona: "Product / Compliance",
      tasks: ["Review risk-ranked backlog", "Sequence by impact", "Track AAA progress", "Report to stakeholders"],
      needs: ["Conformance %", "Legal-risk reduction", "WCAG-EM evidence"],
    },
  ];

  const studyExcerpts = [
    {
      persona: "Developers",
      kind: "Usability test",
      quote: "“The corrected snippet was right there — I pasted it and the criterion went green. I never opened the spec.”",
      meta: "P3, front-end engineer",
    },
    {
      persona: "Testers / QA",
      kind: "Diary study",
      quote: "“Being able to diff this build against the last pass is what makes it evidence I can attach to a ticket.”",
      meta: "P7, QA engineer",
    },
    {
      persona: "SMEs / Leads",
      kind: "Interview",
      quote: "“Most tools stop at AA. Seeing AAA coverage with exportable WCAG-EM is what I'd sign off on.”",
      meta: "P11, accessibility lead",
    },
    {
      persona: "Content Owners",
      kind: "Usability test",
      quote: "“The plain-language explanation and the before/after example meant I didn't need a developer to fix the alt text.”",
      meta: "P5, content author",
    },
    {
      persona: "Product / Compliance",
      kind: "Interview",
      quote: "“The risk-ranked backlog let me sequence remediation by impact instead of guessing from a flat list.”",
      meta: "P9, compliance manager",
    },
  ];

  return (
    <div className="my-12 space-y-12">
      {/* Purpose */}
      <FadeIn>
        <section aria-labelledby="wcag-purpose-title">
          <h2
            id="wcag-purpose-title"
            className="text-lg font-bold text-gray-900 mb-3"
          >
            Purpose
          </h2>
          <p className="text-gray-700 text-sm leading-[1.8]">
            Most accessibility scanners stop at flagging violations — they tell teams what is
            broken but not how to fix it, and almost none push past WCAG 2.2 AA into AAA. The
            WCAG AI Remediation Suite closes that loop: it is an inclusive, dependency-light tool
            that turns detection into guided, prioritized remediation any contributor can act on
            immediately. It is built to be used across the whole delivery team — not just
            specialists — so accessibility becomes a shared, repeatable practice rather than a
            last-minute audit.
          </p>
        </section>
      </FadeIn>

      {/* AI-powered remediation */}
      <FadeIn>
        <section
          aria-labelledby="wcag-ai-title"
          className="rounded-xl bg-gradient-to-br from-[#0a1530] via-[#1e3a5f] to-[#3a5f8a] p-6 text-white"
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              aria-hidden="true"
              className="text-[10px] font-bold tracking-[0.18em] uppercase px-2 py-1 rounded bg-white/15"
            >
              AI-Powered
            </span>
          </div>
          <h2 id="wcag-ai-title" className="text-lg font-bold mb-3">
            Built with AI in Mind
          </h2>
          <p className="text-white/90 text-sm leading-[1.8] mb-5">
            The suite is designed around AI from the ground up. Instead of a flat defect list, it
            generates AI-driven suggestions paired with a visual cue and a ready-to-apply fix — so
            the user can see exactly what is wrong and resolve it ASAP. Wired into a CI/CD
            pipeline, those fixes surface at the point of change, turning accessibility from a
            release blocker into an automated quality gate that boosts team productivity.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 list-none p-0 m-0">
            {[
              {
                t: "AI suggestions + visual cue",
                d: "Each issue is highlighted in context with an AI-recommended correction.",
              },
              {
                t: "Fix issues ASAP",
                d: "Copy-paste fixes shorten the gap between detection and resolution.",
              },
              {
                t: "CI/CD-ready",
                d: "Runs in the pipeline so non-compliant changes are caught before merge.",
              },
            ].map((c) => (
              <li key={c.t} className="rounded-lg bg-white/10 p-4">
                <h3 className="text-[13px] font-bold mb-1.5">{c.t}</h3>
                <p className="text-[12px] text-white/85 leading-relaxed">{c.d}</p>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      {/* AI fixes in action — concrete before/after examples */}
      <FadeIn>
        <section aria-labelledby="wcag-examples-title">
          <h2
            id="wcag-examples-title"
            className="text-lg font-bold text-gray-900 mb-1"
          >
            AI Fixes in Action
          </h2>
          <p className="text-gray-600 text-xs mb-5">
            Concrete examples of issues the tool flags, the AI suggestion it surfaces, and the
            ready-to-apply before/after fix.
          </p>
          <div className="grid grid-cols-1 gap-5">
            {aiFixExamples.map((ex) => (
              <article
                key={ex.title}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
              >
                <div className="flex flex-wrap items-center gap-2 px-5 py-3 border-b border-gray-100 bg-gray-50">
                  <span className="text-[10px] font-bold tracking-[0.14em] uppercase px-2 py-0.5 rounded bg-[#fdeaea] text-[#b42318]">
                    {ex.criterion}
                  </span>
                  <h3 className="text-[13px] font-bold text-gray-900">{ex.title}</h3>
                  <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded bg-[#e8eef5] text-[#1e3a5f]">
                    {ex.impact}
                  </span>
                </div>

                <div className="px-5 py-3 border-b border-gray-100">
                  <p className="text-[12px] text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[#3a5f8a]">AI suggestion: </span>
                    {ex.suggestion}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Before */}
                  <figure className="m-0 p-5 border-b md:border-b-0 md:border-r border-gray-100">
                    <figcaption className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#d92d20]" aria-hidden="true" />
                      <span className="text-[11px] font-bold uppercase tracking-wide text-[#b42318]">
                        Before — fails
                      </span>
                    </figcaption>
                    <pre className="text-[11px] leading-relaxed bg-[#1d1f23] text-[#f4b4b4] rounded-lg p-3 overflow-x-auto whitespace-pre-wrap break-words">
                      <code>{ex.before}</code>
                    </pre>
                  </figure>
                  {/* After */}
                  <figure className="m-0 p-5">
                    <figcaption className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#12b76a]" aria-hidden="true" />
                      <span className="text-[11px] font-bold uppercase tracking-wide text-[#067647]">
                        After — passes
                      </span>
                    </figcaption>
                    <pre className="text-[11px] leading-relaxed bg-[#13211a] text-[#aef0c8] rounded-lg p-3 overflow-x-auto whitespace-pre-wrap break-words">
                      <code>{ex.after}</code>
                    </pre>
                  </figure>
                </div>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Profiles */}
      <FadeIn>
        <section aria-labelledby="wcag-profiles-title">
          <h2
            id="wcag-profiles-title"
            className="text-lg font-bold text-gray-900 mb-1"
          >
            Who It Serves
          </h2>
          <p className="text-gray-600 text-xs mb-5">
            Designed as an inclusive tool — usable by Developers, Testers, SMEs, QA, and more.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0">
            {profiles.map((p) => (
              <li
                key={p.role}
                className="border border-gray-200 rounded-xl p-5 flex gap-4 items-start bg-white"
              >
                <span
                  aria-hidden="true"
                  className="shrink-0 w-10 h-10 rounded-lg bg-[#e8eef5] text-[#1e3a5f] font-bold text-sm flex items-center justify-center"
                >
                  {p.icon}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#0f1b3d] mb-1">{p.role}</h3>
                  <p className="text-[12.5px] text-gray-700 leading-relaxed mb-2">{p.use}</p>
                  <span className="inline-block text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {p.gain}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      {/* Detailed personas with screenshots */}
      <FadeIn>
        <section aria-labelledby="wcag-personas-title">
          <h2 id="wcag-personas-title" className="text-lg font-bold text-gray-900 mb-1">
            Detailed Personas by User Group
          </h2>
          <p className="text-gray-600 text-xs mb-6">
            Each persona represents a distinct user group with its own goals, frustrations, and
            needs that shaped the suite's design.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {detailedPersonas.map((p) => (
              <article
                key={p.name}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white flex flex-col"
              >
                <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-[#0a1530] via-[#1e3a5f] to-[#3a5f8a] text-white">
                  <img
                    src={p.img}
                    alt={`Persona portrait of ${p.name}`}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-white/40 shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.14em] uppercase px-2 py-0.5 rounded bg-white/15">
                      {p.group}
                    </span>
                    <h3 className="text-sm font-bold mt-1.5">{p.name}</h3>
                    <p className="text-[12px] text-white/85 italic mt-0.5">{p.tagline}</p>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <p className="text-[12.5px] text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[#1e3a5f]">Context: </span>
                    {p.context}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wide text-emerald-700 mb-1.5">
                        Goals
                      </h4>
                      <ul className="list-disc pl-4 space-y-1 m-0">
                        {p.goals.map((g) => (
                          <li key={g} className="text-[12px] text-gray-700 leading-snug">
                            {g}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wide text-[#b42318] mb-1.5">
                        Frustrations
                      </h4>
                      <ul className="list-disc pl-4 space-y-1 m-0">
                        {p.frustrations.map((f) => (
                          <li key={f} className="text-[12px] text-gray-700 leading-snug">
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.needs.map((n) => (
                      <span
                        key={n}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#e8eef5] text-[#1e3a5f] border border-[#c3d2e4]"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Information architecture */}
      <FadeIn>
        <section aria-labelledby="wcag-ia-title">
          <h2 id="wcag-ia-title" className="text-lg font-bold text-gray-900 mb-1">
            Information Architecture
          </h2>
          <p className="text-gray-600 text-xs mb-6">
            A layered structure (L0–L4) lets every persona reach the same shared "Issue Detail"
            unit from their own workflow — then aggregate it into roadmaps and evidence.
          </p>
          <ol className="relative border-l-2 border-[#c3d2e4] ml-3 space-y-6 list-none p-0 m-0">
            {iaLevels.map((lvl) => (
              <li key={lvl.level} className="ml-6">
                <span
                  aria-hidden="true"
                  className="absolute -left-[9px] w-4 h-4 rounded-full bg-[#3a5f8a] ring-4 ring-white"
                />
                <div className="border border-gray-200 rounded-xl p-4 bg-white">
                  <h3 className="text-[13px] font-bold text-[#0f1b3d] mb-2">{lvl.level}</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {lvl.nodes.map((n) => (
                      <span
                        key={n}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-700"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                  <p className="text-[12px] text-gray-600 leading-relaxed">{lvl.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </FadeIn>

      {/* Research studies — qualitative & quantitative */}
      <FadeIn>
        <section aria-labelledby="wcag-research-title">
          <h2 id="wcag-research-title" className="text-lg font-bold text-gray-900 mb-1">
            Research Studies & Approaches
          </h2>
          <p className="text-gray-600 text-xs mb-6">
            A mixed-methods program — qualitative depth plus quantitative validation — grounded
            the design decisions and measured impact.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {researchStudies.map((s) => (
              <article
                key={s.method}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
              >
                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
                  <h3 className="text-[13px] font-bold text-gray-900">{s.method}</h3>
                  <span
                    className={
                      "text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded " +
                      (s.kind === "Qualitative"
                        ? "bg-[#f3e8fd] text-[#7e22ce]"
                        : "bg-[#e0e8f4] text-[#1e3a5f]")
                    }
                  >
                    {s.kind}
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-[12px] text-gray-700">
                    <span className="font-semibold text-[#1e3a5f]">Participants: </span>
                    {s.participants}
                  </p>
                  <p className="text-[12.5px] text-gray-700 leading-relaxed">
                    <span className="font-semibold text-[#1e3a5f]">Approach: </span>
                    {s.approach}
                  </p>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wide text-gray-700 mb-1.5">
                      Sample questions / measures
                    </h4>
                    <ul className="list-disc pl-4 space-y-1 m-0">
                      {s.questions.map((q) => (
                        <li key={q} className="text-[12px] text-gray-700 leading-snug">
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-[12px] leading-relaxed rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-900 px-3 py-2">
                    <span className="font-semibold">Key finding: </span>
                    {s.finding}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* User-group journey flow */}
      <FadeIn>
        <section aria-labelledby="wcag-journey-title">
          <h2 id="wcag-journey-title" className="text-lg font-bold text-gray-900 mb-1">
            User-Group Journey Flow
          </h2>
          <p className="text-gray-600 text-xs mb-6">
            Select a user group to expand its journey — the tasks they perform in the suite and the
            WCAG needs those tasks satisfy.
          </p>

          {/* Expand / collapse controls */}
          <div className="flex items-center gap-2 mb-4">
            <button
              type="button"
              onClick={() => setOpenJourneys(journeys.map((j) => j.persona))}
              className="text-[11px] font-semibold px-3 py-1.5 rounded-md border border-gray-200 bg-white text-[#1e3a5f] hover:bg-gray-50 transition-colors"
            >
              Expand all
            </button>
            <button
              type="button"
              onClick={() => setOpenJourneys([])}
              className="text-[11px] font-semibold px-3 py-1.5 rounded-md border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Collapse all
            </button>
          </div>

          <div className="space-y-3">
            {journeys.map((j) => {
              const isOpen = openJourneys.includes(j.persona);
              const panelId = `journey-panel-${j.persona.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`;
              return (
                <div
                  key={j.persona}
                  className="border border-gray-200 rounded-xl bg-white overflow-hidden"
                >
                  {/* Persona toggle */}
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleJourney(j.persona)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left bg-gradient-to-br from-[#0a1530] via-[#1e3a5f] to-[#3a5f8a] text-white hover:opacity-95 transition-opacity"
                  >
                    <span className="text-[13px] font-bold">{j.persona}</span>
                    <span className="flex items-center gap-3">
                      <span className="text-[10px] font-medium text-[#9cb2d2] hidden sm:inline">
                        {j.tasks.length} tasks · {j.needs.length} WCAG needs
                      </span>
                      <span
                        aria-hidden="true"
                        className={`text-base leading-none transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ⌄
                      </span>
                    </span>
                  </button>

                  {/* Expandable detail */}
                  {isOpen && (
                    <div id={panelId} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                      {/* Tasks */}
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wide text-[#7e22ce]">
                          Tasks
                        </span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {j.tasks.map((t, i) => (
                            <span key={t} className="inline-flex items-center gap-1.5">
                              <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#f3e8fd] text-[#7e22ce] border border-[#e9d5ff]">
                                {t}
                              </span>
                              {i < j.tasks.length - 1 && (
                                <span aria-hidden="true" className="text-[#c4a3e8] text-xs">
                                  ›
                                </span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* WCAG needs */}
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                          WCAG needs
                        </span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {j.needs.map((n) => (
                            <span
                              key={n}
                              className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-100"
                            >
                              {n}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sample study excerpts */}
          <h3 className="text-sm font-bold text-gray-900 mt-8 mb-1">Sample Study Excerpts</h3>
          <p className="text-gray-600 text-xs mb-4">
            Verbatim quotes from the research that validated each group's journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {studyExcerpts.map((e) => (
              <figure
                key={e.persona}
                className="m-0 border-l-4 border-[#3a5f8a] bg-gray-50 rounded-r-lg p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-[#e8eef5] text-[#1e3a5f]">
                    {e.persona}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-700">
                    {e.kind}
                  </span>
                </div>
                <blockquote className="m-0 text-[12.5px] text-gray-700 leading-relaxed italic">
                  {e.quote}
                </blockquote>
                <figcaption className="text-[11px] text-gray-700 mt-2">— {e.meta}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Architecture diagram */}
      <FadeIn>
        <section aria-labelledby="wcag-arch-title">
          <h2 id="wcag-arch-title" className="text-lg font-bold text-gray-900 mb-4">
            Architecture
          </h2>
          <ol
            className="grid grid-cols-1 md:grid-cols-5 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden list-none p-0 m-0"
            aria-label="Five-layer tool architecture, data flows left to right"
          >
            {layers.map((layer, idx, arr) => (
              <li key={layer.title} className="bg-white p-4 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[12px] font-bold text-[#1e3a5f] leading-snug">
                    {layer.title}
                  </h3>
                  {idx < arr.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden md:inline text-[#3a5f8a] text-sm leading-none"
                    >
                      →
                    </span>
                  )}
                </div>
                <ul className="space-y-1.5 list-none p-0 m-0">
                  {layer.items.map((it) => (
                    <li key={it} className="text-[11px] text-gray-700 flex gap-1.5">
                      <span aria-hidden="true" className="text-[#3a5f8a]">•</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <p className="text-[11px] text-gray-600 mt-3">
            Self-contained and backend-light — runs anywhere. Every check maps back to its
            normative success criterion, so output doubles as auditable evidence.
          </p>
        </section>
      </FadeIn>

      {/* How to use */}
      <FadeIn>
        <section aria-labelledby="wcag-usage-title">
          <h2 id="wcag-usage-title" className="text-lg font-bold text-gray-900 mb-4">
            How to Use It
          </h2>
          <ol className="space-y-3 list-none p-0 m-0">
            {[
              "Paste a live URL or raw HTML into the tool.",
              "Run the scan — all 28 WCAG 2.2 criteria are evaluated across A, AA, and AAA in one pass.",
              "Review each finding with its rule reference, offending markup, and a corrected before/after snippet.",
              "Work the prioritized roadmap — fix the highest-impact, highest-risk items first.",
              "Re-scan to confirm conformance, then export Section 508 / WCAG-EM evidence.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="shrink-0 w-6 h-6 rounded-full bg-[#1e3a5f] text-white text-xs flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <span className="text-gray-700 text-sm leading-relaxed pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </FadeIn>
    </div>
  );
}



function DeepResearchDossier({ id }: { id: string }) {
  const d = DOSSIERS[id];
  if (!d) return null;
  const titleId = `dossier-${id}-title`;

  return (
    <FadeIn>
      <section className="my-12" aria-labelledby={titleId}>
        <header className="rounded-t-xl bg-gradient-to-r from-[#0f1b3d] via-[#1e3a5f] to-[#3a5f8a] text-white px-5 py-3 flex items-center justify-between">
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase">
            Research Dossier · Plan · Journey · Patterns
          </span>
          <span className="text-[11px] text-white/85">Mixed methods · Traced to standards</span>
        </header>

        <div className="border border-t-0 border-gray-200 rounded-b-xl bg-white p-6">
          <h3 id={titleId} className="text-lg font-bold text-[#1e3a5f] mb-2">
            {d.title}
          </h3>
          <p className="text-sm text-gray-700 mb-6">{d.intro}</p>

          {/* Detailed plan grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {d.plan.map((p) => (
              <div key={p.label} className="border border-gray-200 rounded-lg p-4">
                <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3a5f8a] mb-2">
                  {p.label}
                </div>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-800">
                  {p.items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Journey map */}
          <h4 className="text-sm font-bold text-[#1e3a5f] mb-3 uppercase tracking-wide">
            {d.journeyTitle}
          </h4>
          <div className="overflow-x-auto mb-8">
            <table
              className="w-full text-left text-sm border-collapse"
              aria-label={d.journeyTitle}
            >
              <thead>
                <tr className="bg-[#1e3a5f] text-white">
                  <th className="p-3 font-semibold w-[14%]">Stage</th>
                  <th className="p-3 font-semibold w-[14%]">Actor</th>
                  <th className="p-3 font-semibold w-[20%]">Thinking</th>
                  <th className="p-3 font-semibold w-[18%]">Pain points</th>
                  <th className="p-3 font-semibold w-[18%]">Opportunities</th>
                  <th className="p-3 font-semibold w-[16%]">Signals tracked</th>
                </tr>
              </thead>
              <tbody>
                {d.journey.map((s) => (
                  <tr key={s.stage} className="border-b border-gray-200 align-top">
                    <td className="p-3 font-bold text-[#1e3a5f] bg-[#E4EAF2]">{s.stage}</td>
                    <td className="p-3 text-gray-800">{s.actor}</td>
                    <td className="p-3 italic text-gray-700">“{s.thinking}”</td>
                    <td className="p-3 text-gray-800">
                      <ul className="list-disc pl-4 space-y-1">
                        {s.pains.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </td>
                    <td className="p-3 text-gray-800">
                      <ul className="list-disc pl-4 space-y-1">
                        {s.opportunities.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </td>
                    <td className="p-3 text-gray-800">
                      <ul className="list-disc pl-4 space-y-1">
                        {s.signals.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Patterns */}
          <h4 className="text-sm font-bold text-[#1e3a5f] mb-3 uppercase tracking-wide">
            {d.patternsTitle}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {d.patterns.map((p) => (
              <article
                key={p.name}
                className="border border-gray-200 rounded-lg p-4 bg-[#F8FAFC]"
              >
                <div className="text-sm font-bold text-[#1e3a5f] mb-1">{p.name}</div>
                <div className="text-xs uppercase tracking-wide text-gray-700 mt-2">Problem</div>
                <p className="text-sm text-gray-800 mb-2">{p.problem}</p>
                <div className="text-xs uppercase tracking-wide text-gray-700">Pattern</div>
                <p className="text-sm text-gray-800 mb-2">{p.pattern}</p>
                <div className="text-xs uppercase tracking-wide text-gray-700">Evidence</div>
                <p className="text-sm text-gray-800">{p.evidence}</p>
              </article>
            ))}
          </div>

          {/* Reporting matrix */}
          <h4 className="text-sm font-bold text-[#1e3a5f] mb-3 uppercase tracking-wide">
            Reporting & Decisions by Audience
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse" aria-label="Reporting and decisions by audience">
              <thead>
                <tr className="bg-[#1e3a5f] text-white">
                  <th className="p-3 font-semibold w-1/3">Audience</th>
                  <th className="p-3 font-semibold w-1/3">Format</th>
                  <th className="p-3 font-semibold w-1/3">Decision driven</th>
                </tr>
              </thead>
              <tbody>
                {d.reporting.map((r) => (
                  <tr key={r.audience} className="border-b border-gray-200 align-top">
                    <td className="p-3 font-semibold text-[#1e3a5f] bg-[#E4EAF2]">{r.audience}</td>
                    <td className="p-3 text-gray-800">{r.format}</td>
                    <td className="p-3 text-gray-800">{r.decision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </FadeIn>
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
        <div className="max-w-6xl mx-auto px-6 py-16">
          <button
            onClick={() => setPage("home")}
            className="text-white/85 text-sm hover:text-white mb-6 inline-block transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e3a5f]"
          >
            <span aria-hidden="true">←</span> Back to Case Studies
          </button>
          <p className="text-[#c9a84c] text-xs font-semibold tracking-[2px] uppercase mb-3">
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
          {study.liveUrl && (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-white text-[#1e3a5f] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#E4EAF2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e3a5f]"
            >
              {study.liveLabel ?? "View live"}
              <span aria-hidden="true">↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
      <div className="max-w-6xl mx-auto px-6 py-12">
        {study.sections.map((s, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="mb-10">
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#1e3a5f] text-white text-xs flex items-center justify-center font-bold">
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
                    <h3 className="text-sm font-bold tracking-wide uppercase">
                      Military Operator
                    </h3>
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
                <div className="bg-[#e8eef5] text-[#0d2340] p-5 relative">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      aria-hidden="true"
                      className="w-2 h-2 rounded-full bg-[#3a5f8a]"
                    />
                    <h3 className="text-sm font-bold tracking-wide uppercase text-[#1e3a5f]">
                      Elderly User
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm leading-snug list-none p-0 m-0">
                    <li>
                      <span aria-hidden="true" className="text-[#1e3a5f] mr-1">→</span>
                      Reduced dexterity (arthritis)
                    </li>
                    <li>
                      <span aria-hidden="true" className="text-[#1e3a5f] mr-1">→</span>
                      Degraded vision (cataracts)
                    </li>
                    <li>
                      <span aria-hidden="true" className="text-[#1e3a5f] mr-1">→</span>
                      High stress (medical emergency)
                    </li>
                    <li>
                      <span aria-hidden="true" className="text-[#1e3a5f] mr-1">→</span>
                      Cognitive decline (age-related)
                    </li>
                    <li>
                      <span aria-hidden="true" className="text-[#1e3a5f] mr-1">→</span>
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
              <div className="bg-[#1e3a5f] rounded-xl shadow-sm overflow-hidden">
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
        ) : study.id === "ge" ? (
          <FadeIn>
            <figure className="my-8" aria-labelledby="ge-framework-title">
              <figcaption
                id="ge-framework-title"
                className="text-xs font-semibold tracking-wide uppercase text-gray-700 mb-3 text-center"
              >
                AI Safety Framework — Clinical Decision-Support Lifecycle
              </figcaption>

              {/* Gate header */}
              <div className="rounded-t-xl bg-gradient-to-r from-[#0f1b3d] via-[#1e3a5f] to-[#3a5f8a] text-white px-5 py-3 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase">
                  Safety Gate
                </span>
                <span className="text-[11px] text-white/85">
                  Zero AI features ship without passing every stage
                </span>
              </div>

              {/* Stages */}
              <ol
                className="grid grid-cols-1 md:grid-cols-5 gap-px bg-gray-200 border-x border-b border-gray-200 rounded-b-xl overflow-hidden list-none p-0 m-0"
                aria-label="Five-stage AI safety framework"
              >
                {[
                  {
                    n: "01",
                    title: "Hazard Identification",
                    desc: "Map automation bias, overreliance, and failure modes per clinical context.",
                    std: "ISO 14971",
                  },
                  {
                    n: "02",
                    title: "Human Factors Design",
                    desc: "Apply MIL-STD-1472H criteria to AI interfaces — workload, trust, calibration.",
                    std: "MIL-STD-1472H",
                  },
                  {
                    n: "03",
                    title: "Evidence Generation",
                    desc: "Structured usability + simulated clinical scenarios with target clinicians.",
                    std: "IEC 62366",
                  },
                  {
                    n: "04",
                    title: "Safety Case Review",
                    desc: "Traceable arguments linking requirements → design → test → residual risk.",
                    std: "FDA SaMD",
                  },
                  {
                    n: "05",
                    title: "Post-Market Monitoring",
                    desc: "Continuous signals on drift, misuse, and human-AI performance in the field.",
                    std: "DoDI 5000.95",
                  },
                ].map((stage, idx, arr) => (
                  <li
                    key={stage.n}
                    className="bg-white p-4 relative flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-[#3a5f8a] tracking-widest">
                        {stage.n}
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex-1 h-px bg-gradient-to-r from-[#3a5f8a]/40 to-transparent"
                      />
                      {idx < arr.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="hidden md:inline text-[#1e3a5f] text-sm leading-none"
                        >
                          →
                        </span>
                      )}
                    </div>
                    <h3 className="text-[13px] font-bold text-[#0f1b3d] leading-snug mb-1.5">
                      {stage.title}
                    </h3>
                    <p className="text-[11px] text-gray-700 leading-relaxed flex-1">
                      {stage.desc}
                    </p>
                    <span className="mt-3 inline-block self-start text-[9px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-[#e8eef5] text-[#1e3a5f]">
                      {stage.std}
                    </span>
                  </li>
                ))}
              </ol>

              {/* Feedback loop */}
              <div
                className="mt-3 flex items-center justify-center gap-2 text-[11px] text-gray-700"
                aria-label="Continuous feedback loop from post-market monitoring back into hazard identification"
              >
                <span aria-hidden="true" className="text-[#3a5f8a] text-base leading-none">↻</span>
                <span>
                  Field signals feed back into hazard identification — continuous learning loop
                </span>
              </div>

              <p className="text-[11px] text-gray-600 mt-2 text-center">
                NDA-safe recreated artifact — structure shown, proprietary details omitted.
              </p>
            </figure>
          </FadeIn>
        ) : study.id === "ssa" ? (
          <FadeIn>
            <figure className="my-8" aria-labelledby="ssa-framework-title">
              <figcaption
                id="ssa-framework-title"
                className="text-xs font-semibold tracking-wide uppercase text-gray-700 mb-3 text-center"
              >
                SSA11y Platform — AI-Powered Federal Compliance Pipeline
              </figcaption>

              {/* Header band */}
              <div className="rounded-t-xl bg-gradient-to-r from-[#0f1b3d] via-[#1e3a5f] to-[#3a5f8a] text-white px-5 py-3 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase">
                  Section 508 / WCAG 2.1 AA
                </span>
                <span className="text-[11px] text-white/85">
                  Continuous scan → triage → remediate → verify
                </span>
              </div>

              {/* Stages */}
              <ol
                className="grid grid-cols-1 md:grid-cols-5 gap-px bg-gray-200 border-x border-b border-gray-200 rounded-b-xl overflow-hidden list-none p-0 m-0"
                aria-label="Five-stage SSA11y compliance pipeline"
              >
                {[
                  {
                    n: "01",
                    title: "Crawl & Discover",
                    desc: "Headless crawl of federal properties — pages, components, PDFs, dynamic states.",
                    std: "axe-core",
                  },
                  {
                    n: "02",
                    title: "Detect Violations",
                    desc: "Automated WCAG 2.1 AA + Section 508 rule evaluation across DOM and ARIA tree.",
                    std: "WCAG 2.1 AA",
                  },
                  {
                    n: "03",
                    title: "AI Triage & Map",
                    desc: "LLM classifies severity, deduplicates, and maps each issue to a success criterion + owner.",
                    std: "Section 508",
                  },
                  {
                    n: "04",
                    title: "Auto-Remediate",
                    desc: "AI-generated patch suggestions, PR drafts, and accessible alternatives with rationale.",
                    std: "ARIA APG",
                  },
                  {
                    n: "05",
                    title: "Verify in CI/CD",
                    desc: "Regression gates block non-compliant merges; dashboards track agency-wide posture.",
                    std: "OMB M-24-08",
                  },
                ].map((stage, idx, arr) => (
                  <li
                    key={stage.n}
                    className="bg-white p-4 relative flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-[#3a5f8a] tracking-widest">
                        {stage.n}
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex-1 h-px bg-gradient-to-r from-[#3a5f8a]/40 to-transparent"
                      />
                      {idx < arr.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="hidden md:inline text-[#1e3a5f] text-sm leading-none"
                        >
                          →
                        </span>
                      )}
                    </div>
                    <h3 className="text-[13px] font-bold text-[#0f1b3d] leading-snug mb-1.5">
                      {stage.title}
                    </h3>
                    <p className="text-[11px] text-gray-700 leading-relaxed flex-1">
                      {stage.desc}
                    </p>
                    <span className="mt-3 inline-block self-start text-[9px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-[#e8eef5] text-[#1e3a5f]">
                      {stage.std}
                    </span>
                  </li>
                ))}
              </ol>

              {/* Feedback loop */}
              <div
                className="mt-3 flex items-center justify-center gap-2 text-[11px] text-gray-700"
                aria-label="Verification results feed back into detection rules for continuous learning"
              >
                <span aria-hidden="true" className="text-[#3a5f8a] text-base leading-none">↻</span>
                <span>
                  Verified fixes train the rule set — false positives shrink with every release
                </span>
              </div>

              <p className="text-[11px] text-gray-600 mt-2 text-center">
                NDA-safe recreated artifact — structure shown, proprietary details omitted.
              </p>
            </figure>
          </FadeIn>
        ) : study.id === "wcagtool" ? (
          <FadeIn>
            <figure className="my-8" aria-labelledby="wcag-process-title">
              <figcaption
                id="wcag-process-title"
                className="text-xs font-semibold tracking-wide uppercase text-gray-700 mb-3 text-center"
              >
                WCAG AI Remediation Suite — Detection-to-Remediation Pipeline
              </figcaption>

              {/* Header band */}
              <div className="rounded-t-xl bg-gradient-to-r from-[#0a1530] via-[#1e3a5f] to-[#3a5f8a] text-white px-5 py-3 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase">
                  WCAG 2.2 A · AA · AAA
                </span>
                <span className="text-[11px] text-white/85">
                  Input → scan → fix → prioritize → evidence
                </span>
              </div>

              {/* Stages */}
              <ol
                className="grid grid-cols-1 md:grid-cols-5 gap-px bg-gray-200 border-x border-b border-gray-200 rounded-b-xl overflow-hidden list-none p-0 m-0"
                aria-label="Five-stage WCAG remediation pipeline"
              >
                {[
                  {
                    n: "01",
                    title: "Ingest Input",
                    desc: "Accept a live URL or pasted HTML; normalize the DOM and ARIA tree for analysis.",
                    std: "URL / HTML",
                  },
                  {
                    n: "02",
                    title: "Scan 28 Criteria",
                    desc: "Evaluate all four WCAG principles across A, AA, and AAA in a single pass.",
                    std: "28 Criteria",
                  },
                  {
                    n: "03",
                    title: "Generate Fixes",
                    desc: "Return the offending markup, a corrected snippet, and a before/after example per finding.",
                    std: "Code Fixes",
                  },
                  {
                    n: "04",
                    title: "Prioritize Roadmap",
                    desc: "Rank issues by user impact, conformance level, and fix effort into an ordered backlog.",
                    std: "Impact-Weighted",
                  },
                  {
                    n: "05",
                    title: "Export Evidence",
                    desc: "Map each result to its success criterion for Section 508 and WCAG-EM reporting.",
                    std: "WCAG-EM",
                  },
                ].map((stage, idx, arr) => (
                  <li key={stage.n} className="bg-white p-4 relative flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-[#3a5f8a] tracking-widest">
                        {stage.n}
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex-1 h-px bg-gradient-to-r from-[#3a5f8a]/40 to-transparent"
                      />
                      {idx < arr.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="hidden md:inline text-[#1e3a5f] text-sm leading-none"
                        >
                          →
                        </span>
                      )}
                    </div>
                    <h3 className="text-[13px] font-bold text-[#0f1b3d] leading-snug mb-1.5">
                      {stage.title}
                    </h3>
                    <p className="text-[11px] text-gray-700 leading-relaxed flex-1">
                      {stage.desc}
                    </p>
                    <span className="mt-3 inline-block self-start text-[9px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-[#e8eef5] text-[#1e3a5f]">
                      {stage.std}
                    </span>
                  </li>
                ))}
              </ol>

              {/* Feedback loop */}
              <div
                className="mt-3 flex items-center justify-center gap-2 text-[11px] text-gray-700"
                aria-label="Re-scan after fixes confirms conformance in a repeatable loop"
              >
                <span aria-hidden="true" className="text-[#3a5f8a] text-base leading-none">↻</span>
                <span>
                  Re-scan after remediation confirms conformance — repeat until AAA is reached
                </span>
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

        {/* Wireframes + Workflow + Sample Screens — per case study */}
        <CaseStudyShowcase id={study.id} />

        {/* Research Process — applies to ssa, bestbuy, ge, samhsa */}
        {RESEARCH_CONFIG[study.id] && <ResearchProcess id={study.id} />}

        {/* Deep research dossier — all case studies: journey map + patterns */}
        {DOSSIERS[study.id] && <DeepResearchDossier id={study.id} />}

        {/* WCAG tool deep details: purpose, profiles, architecture, use cases */}
        {study.id === "wcagtool" && <WcagToolDetails />}

        {/* AI Safety Framework: clinical personas + journey maps */}
        {study.id === "ge" && <GeFrameworkPersonas />}







        {/* Outcomes */}
        <FadeIn>
          <div className="bg-[#1e3a5f] rounded-xl p-6 mb-8">
            <h2 className="text-white font-bold mb-4">Impact & Outcomes</h2>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {study.outcomes.map((o, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span aria-hidden="true" className="text-[#c9a84c] text-base mt-0.5">✓</span>
                  <span className="text-white text-sm leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* HSI Sidebar */}
        <FadeIn>
          <details className="group border border-[#1e3a5f]/15 rounded-xl overflow-hidden">
            <summary className="px-5 py-3 cursor-pointer flex items-center justify-between bg-[#1e3a5f]/5 hover:bg-[#1e3a5f]/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-inset">
              <span className="text-sm font-semibold text-[#1e3a5f]">
                How this maps to HSI methodology
              </span>
              <span aria-hidden="true" className="text-[#1e3a5f] text-xs group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>
            <div className="px-5 py-4 border-t border-[#1e3a5f]/10">
              <div className="flex gap-2 flex-wrap mb-3">
                {study.standards.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-[#1e3a5f]/10 text-[#1e3a5f] font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <ul className="space-y-1.5">
                {study.hsi.map((h, i) => (
                  <li key={i} className="text-xs text-gray-700 flex gap-2">
                    <span aria-hidden="true" className="text-[#1e3a5f]">→</span>
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
            <p className="text-[#a8862f] font-semibold text-sm mb-3">
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
              className="p-5 rounded-xl bg-white border border-gray-200 hover:border-[#1e3a5f]/20 hover:shadow-sm transition-all"
            >
              <div aria-hidden="true" className="text-3xl font-extrabold text-[#1e3a5f]/30 mb-2">{c.num}</div>
              <div className="font-bold text-gray-900 text-sm mb-1">{c.t}</div>
              <div className="text-gray-700 text-xs leading-relaxed">{c.d}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h2 className="font-bold text-gray-900 text-sm mb-3">
            Certifications & Affiliations
          </h2>
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
                className="text-xs px-3 py-1.5 rounded-full bg-[#1e3a5f]/10 text-[#1e3a5f] font-medium"
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
      color: "#1e3a5f",
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
      color: "#3a5f8a",
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
      color: "#c9a84c",
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
              <h2 className="font-bold text-gray-900 text-base mb-0.5">{f.title}</h2>
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
        <div className="bg-[#1e3a5f] rounded-xl p-6 text-center">
          <h2 className="text-white font-bold mb-2">Where My Domains Converge</h2>
          <p className="text-white text-xs mb-5 max-w-md mx-auto opacity-95">
            Every project I lead integrates these four disciplines — AI safety isn't just
            governance, it's systems engineering, human factors, and accessibility working
            together.
          </p>
          <ul className="flex justify-center gap-4 flex-wrap list-none p-0 m-0">
            {[
              { abbr: "HSI", full: "Human Systems Integration" },
              { abbr: "HFE", full: "Human Factors Engineering" },
              { abbr: "A11y", full: "Accessibility" },
              { abbr: "AI Safety", full: "Artificial Intelligence Safety" },
            ].map((d) => (
              <li
                key={d.abbr}
                className="w-16 h-16 rounded-full border-2 border-white bg-white/15 flex items-center justify-center text-white text-xs font-bold text-center px-1"
              >
                <abbr title={d.full} className="no-underline">
                  {d.abbr}
                </abbr>
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
        <p className="text-gray-700 text-sm mb-8">
          Download the PDF or view it inline below. An accessible{" "}
          <button
            type="button"
            onClick={() => {
              const e = document.getElementById("resume-text-summary");
              e?.scrollIntoView({ behavior: "smooth", block: "start" });
              (e?.querySelector("summary") as HTMLElement | null)?.focus();
            }}
            className="text-[#1e3a5f] underline font-semibold rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2"
          >
            text summary
          </button>{" "}
          is also provided.
        </p>
        <a
          href="/Senthil_Nagappan_Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Senthil Nagappan resume PDF (opens in new tab)"
          className="inline-block bg-[#1e3a5f] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#c9a84c] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2"
        >
          Download PDF <span aria-hidden="true">↓</span>
        </a>

        {/* PDF preview — hidden from AT because the same content is provided as
            HTML below in the accessible text summary (avoids duplicate reading). */}
        <div
          aria-hidden="true"
          className="mt-10 w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hidden md:block"
        >
          <iframe
            src="/Senthil_Nagappan_Resume.pdf#view=FitH"
            title="Senthil Nagappan resume PDF preview"
            className="w-full"
            style={{ height: "700px" }}
          />
        </div>

        {/* Always-visible fallback link — works on mobile/older browsers and for SR users */}
        <p className="mt-4 text-sm text-gray-700 md:sr-only">
          Inline PDF preview is not shown on small screens.{" "}
          <a
            href="/Senthil_Nagappan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1e3a5f] underline hover:text-[#a8862f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2 rounded"
          >
            Open the resume PDF in a new tab
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>

        {/* Accessible plain-text summary — keeps content reachable to screen
            readers and assistive tech that can't render PDFs (Section 508 / WCAG 1.1.1). */}
        <details
          id="resume-text-summary"
          className="mt-10 text-left border border-gray-200 rounded-xl bg-white"
        >
          <summary className="cursor-pointer px-5 py-3 text-sm font-semibold text-[#1e3a5f] bg-[#1e3a5f]/5 hover:bg-[#1e3a5f]/10 rounded-t-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-inset">
            Accessible text summary of resume
          </summary>
          <div className="px-5 py-4 text-sm text-gray-800 leading-relaxed space-y-3">
            <p>
              <strong>Senthil Kumar Nagappan</strong> — AI Safety &amp; Human Systems
              Integration Leader. 18+ years building enterprise functions that deliver
              safe, compliant, AI-driven products across healthcare, federal, retail,
              and defense.
            </p>
            <p>
              <strong>Current role:</strong> AI + Human Systems Integration Lead, GE
              HealthCare (2025 – Present). Built the enterprise AI safety framework
              for clinical decision-support systems.
            </p>
            <p>
              <strong>Prior roles:</strong> Sr. UX &amp; Accessibility Lead at Leidos
              / SSA (2022 – 2025) — built SSA11y, an AI-driven federal compliance
              platform saving $1.5M+ annually. Inclusive Design &amp; Accessibility
              Lead at Best Buy Health (2021 – 2022). Sr. UX &amp; Accessibility
              Program Manager at Eagle Technologies / HHS / SAMHSA (2014 – 2021),
              directing a $130M behavioral health portfolio.
            </p>
            <p>
              <strong>Certifications:</strong> CPACC and WAS (IAAP), CUA (HFI), CSM
              (Scrum Alliance), DAU HSI in progress.
            </p>
            <p>
              <strong>Standards:</strong> MIL-STD-1472H, FDA, IEC 62366, ISO 14971,
              MBSE/SysML, WCAG 2.2 AA, Section 508, ADA Title II, DoDI 5000.95.
            </p>
            <p>
              <strong>Contact:</strong>{" "}
              <a
                href="mailto:arnsk3@gmail.com"
                className="text-[#1e3a5f] underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2"
              >
                arnsk3@gmail.com
              </a>{" "}
              · 571-403-0835 · Vienna, VA &amp; Frisco, TX.
            </p>
          </div>
        </details>
      </FadeIn>
    </div>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const errorSummaryRef = useRef<HTMLDivElement | null>(null);
  const successHeadingRef = useRef<HTMLHeadingElement | null>(null);

  // Move focus to the success heading when message is sent (WCAG 3.3.1, 4.1.3)
  useEffect(() => {
    if (submitted) {
      requestAnimationFrame(() => successHeadingRef.current?.focus());
    }
  }, [submitted]);

  // Move focus to the error summary when a server error appears
  useEffect(() => {
    if (error) {
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
    }
  }, [error]);

  const validate = (form: HTMLFormElement) => {
    const errs: Record<string, string> = {};
    const data = new FormData(form);
    if (!String(data.get("name") ?? "").trim()) errs.name = "Please enter your name.";
    const email = String(data.get("email") ?? "").trim();
    if (!email) errs.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address (e.g., name@example.com).";
    if (!String(data.get("subject") ?? "").trim())
      errs.subject = "Please enter a subject.";
    if (!String(data.get("message") ?? "").trim())
      errs.message = "Please enter a message.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const errs = validate(form);
    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) {
      // Focus first invalid field
      const firstId = Object.keys(errs)[0];
      requestAnimationFrame(() => {
        document.getElementById(`contact-${firstId}`)?.focus();
      });
      return;
    }
    setLoading(true);
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
          leadership.
        </p>
        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="bg-white border border-gray-200 rounded-xl p-8 text-center"
          >
            <div
              aria-hidden="true"
              className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl font-bold"
            >
              ✓
            </div>
            <h2
              ref={successHeadingRef}
              tabIndex={-1}
              className="text-lg font-bold text-gray-900 mb-1 focus:outline-none"
            >
              Message Sent
            </h2>
            <p className="text-sm text-gray-700">
              Thank you. I'll get back to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm text-[#1e3a5f] font-semibold hover:text-[#a8862f] transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
            aria-describedby="contact-required-hint"
            className="bg-white border border-gray-200 rounded-xl p-6 space-y-4"
          >
            {error && (
              <div
                ref={errorSummaryRef}
                role="alert"
                tabIndex={-1}
                className="rounded-lg border border-red-400 bg-red-50 px-3 py-2 text-sm text-red-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700"
              >
                {error}
              </div>
            )}
            {fields.map((f) => {
              const errId = `contact-${f.id}-error`;
              const hasError = Boolean(fieldErrors[f.id]);
              return (
                <div key={f.id}>
                  <label
                    htmlFor={`contact-${f.id}`}
                    className="text-xs font-semibold text-gray-900 block mb-1"
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
                    aria-invalid={hasError || undefined}
                    aria-describedby={hasError ? errId : undefined}
                    autoComplete={f.autoComplete}
                    className={`w-full px-3 py-2 border rounded-lg text-sm text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-1 ${
                      hasError
                        ? "border-red-600 focus:border-red-700"
                        : "border-gray-400 focus:border-[#1e3a5f]"
                    }`}
                    placeholder={f.placeholder}
                  />
                  {hasError && (
                    <p id={errId} className="mt-1 text-xs text-red-800 font-medium">
                      {fieldErrors[f.id]}
                    </p>
                  )}
                </div>
              );
            })}
            <div>
              <label
                htmlFor="contact-message"
                className="text-xs font-semibold text-gray-900 block mb-1"
              >
                Message
                <span aria-hidden="true" className="text-red-700"> *</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                aria-required="true"
                aria-invalid={Boolean(fieldErrors.message) || undefined}
                aria-describedby={
                  fieldErrors.message ? "contact-message-error" : undefined
                }
                className={`w-full px-3 py-2 border rounded-lg text-sm text-gray-900 h-28 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-1 resize-y ${
                  fieldErrors.message
                    ? "border-red-600 focus:border-red-700"
                    : "border-gray-400 focus:border-[#1e3a5f]"
                }`}
              />
              {fieldErrors.message && (
                <p
                  id="contact-message-error"
                  className="mt-1 text-xs text-red-800 font-medium"
                >
                  {fieldErrors.message}
                </p>
              )}
            </div>
            <p id="contact-required-hint" className="text-xs text-gray-700">
              <span aria-hidden="true" className="text-red-700">*</span> Required field
            </p>
            <button
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className="w-full bg-[#1e3a5f] text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-[#a8862f] transition-colors disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2"
            >
              {loading ? "Sending…" : "Send Message"}
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
              className="text-[#1e3a5f] hover:text-[#a8862f] underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2"
            >
              arnsk3@gmail.com
            </a>{" "}
            ·{" "}
            <a
              href="tel:+15714030835"
              className="text-[#1e3a5f] hover:text-[#a8862f] underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2"
            >
              571-403-0835
            </a>
          </p>
          <p className="text-sm text-gray-700">
            <a
              href="https://www.linkedin.com/in/senthil-nagappan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e3a5f] hover:text-[#a8862f] underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2"
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

function Footer({
  setPage,
  currentPage,
}: {
  setPage: (p: PageId) => void;
  currentPage: PageId;
}) {
  const labels: Record<PageId, string> = {
    home: "Home",
    about: "About",
    approach: "Approach",
    resume: "Resume",
    contact: "Contact",
    case: "Case Study",
  };
  return (
    <footer className="bg-[#111827] mt-16" role="contentinfo">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-start gap-6">
        <div>
          <p className="font-bold text-white text-sm">Senthil Kumar Nagappan</p>
          <p className="text-white text-xs mt-1">
            AI Safety &amp; Human Systems Integration Leader
          </p>
          <p className="text-white/90 text-xs mt-3">
            © 2026 · Designed &amp; built with accessibility in mind
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex gap-5 flex-wrap list-none p-0 m-0">
            {(["home", "about", "approach", "resume", "contact"] as PageId[]).map((p) => (
              <li key={p}>
                <button
                  onClick={() => setPage(p)}
                  aria-current={currentPage === p ? "page" : undefined}
                  className={`text-xs underline-offset-4 hover:underline transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827] ${
                    currentPage === p
                      ? "text-white font-semibold underline"
                      : "text-white hover:text-white"
                  }`}
                >
                  {labels[p]}
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

const PAGE_DESCRIPTIONS: Record<PageId, string> = {
  home: "Senthil Kumar Nagappan: AI safety, human systems integration, and accessibility leadership for healthcare, federal, and regulated environments.",
  about: "About Senthil Nagappan — 18+ years building AI-driven products in regulated healthcare, federal, retail, and defense environments.",
  approach: "How Senthil Nagappan ensures AI-driven systems are safe, accessible, and compliant — from requirements through deployment.",
  resume: "Download or read Senthil Nagappan's resume — AI safety and human systems integration leadership.",
  contact: "Contact Senthil Nagappan for AI safety, human systems integration, and accessibility leadership engagements.",
  case: "Case study from Senthil Nagappan — AI safety, human systems integration, and accessibility work in regulated environments.",
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const Index = () => {
  const [page, setPage] = useState<PageId>("home");
  const [activeCase, setActiveCase] = useState<CaseStudyType | null>(null);
  const [routeAnnouncement, setRouteAnnouncement] = useState("");
  const mainRef = useRef<HTMLElement | null>(null);

  // Update document title, metadata, and announce route changes (WCAG 2.4.2, 4.1.3)
  useEffect(() => {
    const isCase = page === "case" && activeCase;
    // Keep case-study titles under the 60-char SERP limit by dropping the site suffix.
    const title = isCase ? activeCase!.title : PAGE_TITLES[page];
    const description = isCase
      ? `${activeCase!.title} — ${activeCase!.subtitle}`.slice(0, 158)
      : PAGE_DESCRIPTIONS[page];
    const slug = isCase ? `case-${activeCase!.id}` : page;
    const canonical =
      page === "home"
        ? "https://web-halo-shine.lovable.app/"
        : `https://web-halo-shine.lovable.app/#${slug}`;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertCanonical(canonical);

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
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#1e3a5f] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c]"
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
      <Footer setPage={navigate} currentPage={page} />
    </div>
  );
};

export default Index;
