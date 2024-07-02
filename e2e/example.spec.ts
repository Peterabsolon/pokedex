import { test, expect } from "@playwright/test";

const APP_URL = "http://localhost:3000";

test("has title", async ({ page }) => {
  await page.goto(APP_URL);
  await expect(page).toHaveTitle(/Pokedex/);
});
