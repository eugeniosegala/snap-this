const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const fs = require('fs');

//const { devices } = require('./utils/devices');
const { InflightRequests, cleanNames } = require('./utils/helpers');

const dir = './snap-this/';
const url = process.env['WEBSITE'];

if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

const snapThis = async () => {

  const browser = await puppeteer.launch();

  console.log('Starting...');
  console.log('Taking screenshots...');

  for (let i = 0; i < devices.length; i++) {

    process.stdout.write(`${i}/${devices.length}\r`);

    const page = await browser.newPage();

    const tracker = new InflightRequests(page);

    await page.goto(url).catch(e => {
      console.log('Navigation failed: ' + e.message);
      const inflight = tracker.inflightRequests();
      console.log(inflight.map(request => '  ' + request.url()).join('\n'));
    });

    tracker.dispose();

    const device = devices[i];

    await page.emulate(device);
    await page.screenshot({ path: `${dir}${cleanNames(device.name)}.png`});
  }

  const htmlElement = devices.map(device => {
    return `
          <h1 style="background-color: #00BCD4">
            Device: <span style="color: #FFEB3B">${device.name}</span>
            Resolution: <span style="color: #FFEB3B">${device.viewport.width} x ${device.viewport.height}</span>
          </h1>
          <img style="border: 2px solid black; max-height: 700px; max-width: 70%;" src="./${cleanNames(device.name)}.png"  alt="${cleanNames(device.name)}" />`;
  });

  var htmlContent = `
    <html lang="en">
        ${htmlElement}
    </html>`;

  fs.writeFileSync(`${dir}index.html`, htmlContent, (error) => { /* handle error */ });

  await browser.close();

  console.log('Completed.')
};

module.exports = snapThis;