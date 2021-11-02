const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://lespepitestech.com/startup-de-la-french-tech/arlequin-finance');
  await browser.close();
})();