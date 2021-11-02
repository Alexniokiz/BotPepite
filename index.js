const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://lespepitestech.com/startup-de-la-french-tech/arlequin-finance');
  const page1 = await browser.newPage();                // open new tab
  await page1.goto('https://fr.fakenamegenerator.com');               // go to google.com       
  await page1.click('#details > div.content > div.info > div > div.extra > dl:nth-child(12) > dd > div > a')
  // await page.bringToFront();
})();