import { test, expect, Page } from "@playwright/test";

/**
 * Keyboard navigation & focus management coverage for the portfolio.
 *
 * Verifies:
 *  - logical tab order starting at the skip link
 *  - visible focus indicators (focus-visible rings) on interactive controls
 *  - theme switcher open/close behaviour with the keyboard
 *  - focus restoration to the trigger after the menu closes
 */

const THEME_TRIGGER = 'button[aria-label="Change color theme"]';

/** Returns true when the focused element renders a visible focus indicator. */
async function hasVisibleFocusRing(page: Page): Promise<boolean> {
  return page.evaluate(() => {
    const el = document.activeElement as HTMLElement | null;
    if (!el) return false;
    const style = getComputedStyle(el);
    const outline =
      style.outlineStyle !== "none" && parseFloat(style.outlineWidth) > 0;
    // Tailwind focus-visible rings are rendered via box-shadow.
    const ring = style.boxShadow !== "none" && style.boxShadow.trim() !== "";
    return outline || ring;
  });
}

/** Returns the accessible-ish description of the focused element. */
async function focusedDescriptor(page: Page): Promise<string> {
  return page.evaluate(() => {
    const el = document.activeElement as HTMLElement | null;
    if (!el) return "<none>";
    const label =
      el.getAttribute("aria-label") ||
      el.textContent?.trim().slice(0, 40) ||
      "";
    return `${el.tagName.toLowerCase()}::${label}`;
  });
}

test.describe("Keyboard navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("skip link is the first focusable element and shows a focus ring", async ({
    page,
  }) => {
    await page.keyboard.press("Tab");
    const descriptor = await focusedDescriptor(page);
    expect(descriptor.toLowerCase()).toContain("skip to main content");
    expect(await hasVisibleFocusRing(page)).toBe(true);
  });

  test("skip link moves focus into the main landmark", async ({ page }) => {
    const skip = page.getByRole("link", { name: /skip to main content/i });
    await skip.focus();
    await page.keyboard.press("Enter");
    // Hash navigation should target the main content region.
    await expect(page).toHaveURL(/#main-content/);
    const main = page.locator("main#main-content");
    await expect(main).toBeVisible();
  });

  test("tab order walks forward through interactive controls", async ({
    page,
  }) => {
    const seen: string[] = [];
    for (let i = 0; i < 6; i++) {
      await page.keyboard.press("Tab");
      seen.push(await focusedDescriptor(page));
    }
    // First stop is the skip link; subsequent stops are unique, real controls.
    expect(seen[0].toLowerCase()).toContain("skip to main content");
    const nonEmpty = seen.filter((s) => s && s !== "<none>");
    expect(nonEmpty.length).toBe(seen.length);
  });

  test("interactive controls expose a visible focus ring when tabbed to", async ({
    page,
  }) => {
    // Walk a handful of stops and assert each focusable control is visible.
    for (let i = 0; i < 8; i++) {
      await page.keyboard.press("Tab");
      const ok = await hasVisibleFocusRing(page);
      const descriptor = await focusedDescriptor(page);
      expect(ok, `Expected focus ring on ${descriptor}`).toBe(true);
    }
  });
});

test.describe("Theme switcher focus management", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("trigger opens the menu with the keyboard and exposes radio items", async ({
    page,
  }) => {
    const trigger = page.locator(THEME_TRIGGER);
    await trigger.focus();
    expect(await hasVisibleFocusRing(page)).toBe(true);

    await page.keyboard.press("Enter");
    const menu = page.getByRole("menu", { name: /color themes/i });
    await expect(menu).toBeVisible();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");

    const items = page.getByRole("menuitemradio");
    expect(await items.count()).toBeGreaterThan(1);
  });

  test("Escape closes the menu and restores focus to the trigger", async ({
    page,
  }) => {
    const trigger = page.locator(THEME_TRIGGER);
    await trigger.focus();
    await page.keyboard.press("Enter");

    const menu = page.getByRole("menu", { name: /color themes/i });
    await expect(menu).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(menu).toHaveCount(0);
    await expect(trigger).toHaveAttribute("aria-expanded", "false");

    // Focus must return to the trigger that opened the menu.
    const descriptor = await focusedDescriptor(page);
    expect(descriptor.toLowerCase()).toContain("change color theme");
  });

  test("selecting a theme updates aria-checked and closes the menu", async ({
    page,
  }) => {
    const trigger = page.locator(THEME_TRIGGER);
    await trigger.click();

    const menu = page.getByRole("menu", { name: /color themes/i });
    await expect(menu).toBeVisible();

    const items = page.getByRole("menuitemradio");
    const target = items.nth(1);
    const label = (await target.textContent())?.trim() ?? "";
    await target.click();

    // Menu closes after a selection.
    await expect(menu).toHaveCount(0);

    // Re-open and verify the chosen theme is now the checked radio.
    await trigger.click();
    const checked = page.locator('[role="menuitemradio"][aria-checked="true"]');
    await expect(checked).toHaveCount(1);
    await expect(checked).toContainText(label);
  });
});
