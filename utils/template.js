const devices = require('puppeteer/DeviceDescriptors');
const { cleanNames } = require('./helpers');

const htmlElement = devices.map(device => {
  return `
      <div class="row" style="margin-bottom: 50px;">
        <div class="col-md-12">
          <h1 style="background-color: #1CACF4">
            Device: <span style="color: #fff">${device.name}</span>
            Resolution: <span style="color: #fff">${device.viewport.width} x ${device.viewport.height}</span>
          </h1>
          <img style="border: 2px solid black; max-height: 700px; max-width: 70%;" src="./${cleanNames(device.name)}.png"  alt="${cleanNames(device.name)}" />
        </div>
      </div>
      `;
});

const htmlContent = `
      <!doctype html>
      <html lang="en">
      <meta charset="utf-8">
      <meta name="description" content="SnapThis Showcase">
      <meta name="author" content="Eugenio Segala">
      <head>
          <title>Snap This</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      </head>
        <body>
          ${htmlElement.join('')}
        </body>
      </html>`;

module.exports = {
  htmlContent,
};