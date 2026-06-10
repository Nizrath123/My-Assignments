import { chromium, firefox, test } from "@playwright/test";

       test("To launch a browser", async () => {
        const browserInstance = await firefox.launch({ headless: false, channel: "firefox" });
        const browserContext = await browserInstance.newContext();
        const page = await browserContext.newPage();
        await page.goto("http://leaftaps.com/opentaps/control/main");
       });