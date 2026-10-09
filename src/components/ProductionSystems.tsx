import { GitPullRequest, ScanSearch, ShieldCheck, CheckCircle2, HeartPulse, Brain, UserCheck, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionIndex from "@/components/SectionIndex";
import { Link } from "react-router-dom";

/**
 * Flagship Systems Delivered in Production — Problem → Build → Deploy → Outcome.
 * Sits immediately under the hero so the first thing a hiring manager reads is
 * shipped systems, not design language.
 */
type System = {
  tag: string;
  title: string;
  problem: string;
  build: string;
  deploy: string;
  outcome: string[];
  to?: string;
  cta?: string;
};

const SYSTEMS: System[] = [
  {
    tag: "Federal · Production",
    title: "AI Accessibility Automation System",
    problem:
      "Manual Section 508 audits could not keep pace with 40+ releases a month, leaving open compliance and litigation risk on a platform serving millions of citizens.",
    build:
      "Built an LLM-based validation service (SSA11y, Llama 2) with a detection API, severity-tiered risk scoring, a human review queue for ambiguous findings, and a governance telemetry layer.",
    deploy:
      "Integrated into CI/CD as a pre-merge gate across multiple engineering teams, behind existing SSO, and fed fixes back into the shared component library so remediations shipped once.",
    outcome: [
      "~30% efficiency gain in release validation effort",
      "200+ recurring accessibility defects eliminated at the component source",
      "Enforcement standardized across 15+ modules and 40+ monthly releases",
    ],
    to: "/ai-deployment-ssa",
    cta: "Read the full deployment",
  },
  {
    tag: "Clinical / Enterprise · Production",
    title: "Enterprise Decision Support System",
    problem:
      "Operators carried high cognitive load across multi-system workflows: alert fatigue, context switching, and decision errors concentrated under time pressure with real downstream harm.",
    build:
      "Built an AI prioritization and validation engine — risk scoring with confidence thresholds and a false-positive budget, point-of-use explanation, override capture, and a backend integration layer into queues, ticketing, and role-scoped access.",
    deploy:
      "Shipped inside the production workflow people already used — no side dashboard — integrated across 15+ modules, with logging and override telemetry released in the same pass.",
    outcome: [
      "30–40% reduction in user and decision errors",
      "Faster task completion in the highest-volume paths",
      "Oversight layer that let clinical AI reach 1,200+ users",
    ],
  },
];

const VISUALS = [
  { metric: "200+", label: "recurring defects eliminated", icons: [GitPullRequest, ScanSearch, ShieldCheck, CheckCircle2], steps: ["Release", "Detect", "Review", "Ship"] },
  { metric: "30–40%", label: "fewer user & decision errors", icons: [HeartPulse, Brain, UserCheck, CheckCircle2], steps: ["Context", "Prioritize", "Human review", "Decision"] },
];

export default function ProductionSystems({ n = "01" }: { n?: string }) {
  return (
    <section id="production-systems" aria-labelledby="production-systems-heading" className="portfolio-container portfolio-section">
      <SectionIndex n={n} label="Systems in Production" />
      <div className="portfolio-section-heading"><div><h2 id="production-systems-heading">Complex problems. Systems that work.</h2><p>Federal and healthcare delivery, from the problem to the outcome.</p></div></div>
      <div className="portfolio-production-grid">
        {SYSTEMS.map((system, index) => {
          const visual = VISUALS[index];
          if (!visual) return null;
          return <article key={system.title} className="portfolio-production-card">
            <div className="portfolio-system-visual">
              <p className="portfolio-eyebrow">{system.tag}</p>
              <ol className="portfolio-system-flow" aria-label={`${system.title} workflow`}>
                {visual.icons.map((Icon, i) => <li key={visual.steps[i]}><span><Icon aria-hidden="true" /></span><p>{visual.steps[i]}</p></li>)}
              </ol>
              <div className="portfolio-result"><strong>{visual.metric}</strong><span>{visual.label}</span></div>
              <p className="portfolio-visual-caption">Simplified workflow · program outcome</p>
            </div>
            <div className="portfolio-system-body"><h3>{system.title}</h3><p>{system.problem}</p>
              <details className="portfolio-card-details"><summary>Build, deployment & impact</summary><dl>
                <dt>Build</dt><dd>{system.build}</dd><dt>Deploy</dt><dd>{system.deploy}</dd><dt>Outcome</dt><dd><ul>{system.outcome.map(outcome => <li key={outcome}>{outcome}</li>)}</ul></dd>
              </dl></details>
              <Button asChild variant="link" className="portfolio-text-link"><Link to={system.to ?? "/work/ge"}>Explore the {index === 0 ? "federal" : "healthcare"} case <ArrowUpRight aria-hidden="true" /></Link></Button>
            </div>
          </article>;
        })}
      </div>
      <p className="portfolio-footnote">Figures reflect team and program outcomes. Individual scope is described in each case study.</p>
    </section>
  );
}
