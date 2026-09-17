import { test, expect } from "@playwright/test";

// spec: specs/cura-login-test-plan.md

test.describe("CURA Login", () => {
  test("valid and invalid login attempts are handled correctly", async ({ page }) => {
    const homeUrl = "https://katalon-demo-cura.herokuapp.com/";
    const loginUrl = "https://katalon-demo-cura.herokuapp.com/profile.php#login";

    // 1. Open the home page and click the Make Appointment link
    await page.goto(homeUrl);
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page).toHaveURL(loginUrl);
    await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
    await expect(page.getByLabel("Username")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();

    // 2. Enter the valid demo username and password and submit the login form
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator("h2")).toContainText("Make Appointment");

    // 3. Enter an incorrect username and the correct password
    await page.goto(loginUrl);
    await page.getByLabel("Username").fill("John Smith");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid.",
    );

    // 4. Leave the username and password fields empty and click Login
    await page.goto(loginUrl);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid.",
    );
    await expect(page.getByLabel("Username")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();
  });
});
