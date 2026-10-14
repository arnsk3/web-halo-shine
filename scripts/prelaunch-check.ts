// Pre-launch check: verifies the custom domain serves the site and that the sitemap,
// robots.txt and canonical/og:url tags all use it. Run: bunx tsx scripts/prelaunch-check.ts
import { readFileSync } from "fs";

const DOMAIN = "https://www.senthilnagappan.com";
const OLD = /lovable\.app/;
const failures: string[] = [];
const check = (ok: boolean, msg: string) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${msg}`);
  if (!ok) failures.push(msg);
};

// Local files
const html = readFileSync("index.html", "utf8");
const sitemap = readFileSync("public/sitemap.xml", "utf8");
const robots = readFileSync("public/robots.txt", "utf8");
check(html.includes(`<link rel="canonical" href="${DOMAIN}/"`), "index.html canonical uses custom domain");
check(html.includes(`property="og:url" content="${DOMAIN}/"`), "index.html og:url uses custom domain");
check(!OLD.test(html), "index.html has no lovable.app references");
const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
check(locs.length > 0 && locs.every((l) => l.startsWith(DOMAIN)), `sitemap: all ${locs.length} URLs use custom domain`);
check(!OLD.test(robots), "robots.txt has no lovable.app references");

// Live site
async function live() {
  for (const path of ["/", "/sitemap.xml", "/robots.txt"]) {
    try {
      const res = await fetch(DOMAIN + path, { redirect: "follow" });
      const body = await res.text();
      check(res.ok, `live ${path} returns ${res.status}`);
      check(!OLD.test(body) || path !== "/sitemap.xml", `live ${path} does not point at lovable.app`);
      if (path === "/") check(body.includes(`rel="canonical" href="${DOMAIN}/"`), "live homepage canonical uses custom domain");
    } catch (e) {
      check(false, `live ${path} unreachable (${(e as Error).message})`);
    }
  }
}

live().then(() => {
  console.log(failures.length ? `\n${failures.length} check(s) failed` : "\nAll pre-launch checks passed");
  process.exit(failures.length ? 1 : 0);
});
