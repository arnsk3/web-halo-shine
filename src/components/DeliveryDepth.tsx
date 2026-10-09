import type { ReactNode } from "react";
import { ChevronDown, ArrowUpRight, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function DeliveryDepth({ items }: { items: { title: string; description: string; content: ReactNode }[] }) {
  return (
    <section className="portfolio-depth" aria-labelledby="delivery-depth-heading">
      <div className="portfolio-container">
        <div className="portfolio-section-heading">
          <div><p className="portfolio-eyebrow">Delivery & leadership</p><h2 id="delivery-depth-heading">The thinking behind the work.</h2></div>
          <Button asChild variant="outline" className="portfolio-outline"><Link to="/approach">My approach <ArrowUpRight aria-hidden="true" /></Link></Button>
        </div>
        <div className="portfolio-disclosures">
          {items.map((item) => <details key={item.title}>
            <summary><Workflow aria-hidden="true" /><span><strong>{item.title}</strong><span>{item.description}</span></span><ChevronDown aria-hidden="true" className="disclosure-chevron" /></summary>
            <div className="portfolio-disclosure-content">{item.content}</div>
          </details>)}
        </div>
      </div>
    </section>
  );
}