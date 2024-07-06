import { expect, test } from "@playwright/test";

const APP_URL = "http://localhost:3000";

// Search for Pokemon by text through use of a search bar.
// Filter Pokemon by type using a dropdown.
// Add and remove a Pokemon to and from your Favorites by clicking the heart icon.
// Use tabs to switch between All Pokemon and Favorite Pokemon views.
// Change the view from either a grid or list.
// View Pokemon details using a /:name route.
// Clicking on a Pokemon image or name should navigate to the above route to view the Pokemon details.

test.describe("Required features", () => {
  test("Can search pokemons", async ({ page }) => {
    await page.goto(APP_URL);
    await page.getByLabel("Search by name").fill("Zubat");
    await expect(page.getByText("Zubat")).toBeVisible();
    await expect(page.getByText("Bulbasaur")).not.toBeVisible();
  });
});

test("has title", async ({ page }) => {
  await page.goto(APP_URL);
  await expect(page).toHaveTitle(/Pokedex/);
});
