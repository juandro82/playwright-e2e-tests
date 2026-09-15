import { chromium, devices } from "@playwright/test";

(async () => {
  const browser = await chromium.launch({
    headless: false,
    args: [
      "--disable-blink-features=AutomationControlled",
      "--disable-features=IsolateOrigins,site-per-process",
      "--allow-no-sandbox-job",
    ],
  });

  const context = await browser.newContext({
    ...devices["Desktop Chrome"],
  });

  const page = await context.newPage();

  // Cambia la URL por la página que quieras grabar
  await page.goto("https://tu-sitio.com");

  // Abre el inspector interactivo (igual que codegen)
  await page.pause();
})();