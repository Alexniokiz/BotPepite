const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://lespepitestech.com/creer-un-compte?destination=/startup-de-la-french-tech/arlequin-finance');
  const page1 = await browser.newPage();                // open new tab
  await page1.goto('https://fr.fakenamegenerator.com');               // go to google.com       
  // await page1.click('#details > div.content > div.info > div > div.extra > dl:nth-child(12) > dd > div > a')

  let sexe = await page1.$eval(
    ".content > div > img",
    (el) => el.alt
  );
  
  let name = await page1.$eval(
    "div.address > h3",
    (el) => el.innerText
  );

  let username = await page1.$eval(
    "#details > div.content > div.info > div > div.extra > dl:nth-child(13) > dd",
    (el) => el.innerText
  );

  let password = await page1.$eval(
    "#details > div.content > div.info > div > div.extra > dl:nth-child(14) > dd",
    (el) => el.innerText
  );

  let email = await page1.$eval(
    "#details > div.content > div.info > div > div.extra > dl:nth-child(12) > dd",
    (el) => el.innerText.split("\n")[0]
  );

  let job = await page1.$eval(
    "#details > div.content > div.info > div > div.extra > dl:nth-child(22) > dd",
    (el) => el.innerText
  );

  console.log(sexe);
  console.log(name);
  console.log(username);
  console.log(password);
  console.log(job);
  console.log(email);
  
  await page.bringToFront();
  if (sexe === "Homme") {
    await page.select('#edit-field-sexe-utilisateur-und', '1')
  } else {
    await page.select('#edit-field-sexe-utilisateur-und', '2')
  }
  await page.$eval('#edit-field-nom-et-prenom-und-0-value', el => el.value = name);
  await page.click('#edit-field-type-d-utilisateur-und-web-lover')
  // await page.$eval('#edit-field-societe-et-profession-und-0-value', el => el.value = "Societe");

  // await page.$eval('#edit-mail', el => el.value = page1.url().split('/')[5]);
  // await page.$eval('#edit-name', el => el.value = "Societe");

})();

// 2.35 tout le monde

// 3.65 vrais rajel
// 6
 
// on me doit 8.21