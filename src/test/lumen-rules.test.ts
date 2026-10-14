import { describe, it, expect } from "vitest";
import { lumenStatus, LUMEN_LINKS } from "@/lib/lumen";
describe("Lumen status", () => {
  it("is In Build without both links", () => {
    expect(lumenStatus({ demo: "https://x", repo: null })).toBe("In Build");
    expect(lumenStatus({ demo: null, repo: "https://y" })).toBe("In Build");
  });
  it("is Deployed only with demo and repo", () => expect(lumenStatus({ demo: "https://x", repo: "https://y" })).toBe("Deployed"));
  it("has no fake links today", () => expect(LUMEN_LINKS).toEqual({ demo: null, repo: null }));
});
