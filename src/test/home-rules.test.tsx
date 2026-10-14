import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import EnterpriseHome from "@/components/EnterpriseHome";

const renderHome = () => render(<MemoryRouter><EnterpriseHome /></MemoryRouter>);

describe("homepage honesty rules", () => {
  it("labels every AI Product Lab project as self-directed", () => {
    renderHome();
    const lab = screen.getByRole("region", { name: /self-directed ai builds/i });
    const cards = within(lab).getAllByRole("heading", { level: 3 });
    expect(cards).toHaveLength(3);
    expect(within(lab).getAllByText(/self-directed$/i)).toHaveLength(3);
  });

  it("attributes every proof-point number as a program/team outcome or my contribution", () => {
    renderHome();
    const proof = screen.getByRole("region", { name: /three proof points/i });
    const items = within(proof).getAllByRole("listitem");
    expect(items).toHaveLength(3);
    for (const li of items) expect(li.textContent).toMatch(/program outcome|program scope|team outcome|my direct contribution/i);
  });

  it("uses the single Forward-Deployed AI Product Engineer title in the main heading", () => {
    renderHome();
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(/^Forward-Deployed AI Product Engineer/);
  });
});
