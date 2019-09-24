const url = process.env['WEBSITE'];
const mainSelector = process.env['SELECTOR'];
const withStorage = process.env['LOCAL_STORAGE'];

const puppeteer = require('puppeteer');
const { PendingXHR } = require('pending-xhr-puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const fs = require('fs');

// const { devices } = require('./utils/devices');
const { cleanNames, waitForVisible } = require('./utils/helpers');
const { htmlContent } = require('./utils/template');
const localStorageData = withStorage ? require(`${process.cwd()}/${withStorage}`) : false;

const dir = './snap-this/';

if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

const snapThis = async () => {

  console.log('Starting...');

  const browser = await puppeteer.launch({ headless: true, ignoreHTTPSErrors: true });

  console.log('Taking screenshots...');

  for (let i = 0; i < devices.length; i++) {

    process.stdout.write(`${parseInt(((i / devices.length) * 100))}%\r`);

    const page = await browser.newPage();

    const pendingXHR = new PendingXHR(page);

    await page.goto(url);

    await pendingXHR.waitForAllXhrFinished();

    if (withStorage) {
      for (let inc = 0; inc < localStorageData.length; inc++) {
        const name = localStorageData[inc].name;
        const data = localStorageData[inc].data;
        await page.evaluate(({name, data}) => {
          localStorage.setItem(name, data);
        }, {name, data});
      }
    }

    const device = devices[i];

    await page.emulate(device);

    if (mainSelector) {
      await waitForVisible(page, mainSelector);
    }

    await page.screenshot({ path: `${dir}${cleanNames(device.name)}.png`});
  }

  fs.writeFileSync(`${dir}index.html`, htmlContent, (error) => { console.log(error) });

  await browser.close();

  console.log('Completed.');

};

module.exports = snapThis;