import { defineConfig, devices } from "@playwright/test";

// Chromium binary resolved from the sandbox nix store. Falls back to the
// PLAYWRIGHT-managed binary if the env override is not present.
const executablePath =
  process.env.PLAYWRIGHT_CHROMIUM_PATH ||
  "/nix/store/2zqa6kavc8znbgrac1l3pix9lwr3w5nj-playwright-chromium/chrome-linux/chrome";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:8080",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: { executablePath },
      },
    },
  ],
  webServer: {
    command: "npm run dev",
    url: "http://localhost:8080",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
