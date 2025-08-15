import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  // action: open the browser
  await page.goto("https://playwright.dev/");

  // Assertion: Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/); // regular expression to match the title
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

/**
 * Open the page
 * Click at Get started
 * Mouse hover the language dropdown
 * Click at Java
 * Check the URL
 * Check the text "Installing Playwright" is not being displayed
 * Check the text below is displayed
 */

test("@wip - Check Java page", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.getByRole("link", { name: "Get started" }).click();
  await page.locator(".navbar__item.dropdown.dropdown--hoverable").hover();
  await page.getByRole("link", { name: "Java" }).click();
});
