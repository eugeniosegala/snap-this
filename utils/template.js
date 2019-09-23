const devices = require('puppeteer/DeviceDescriptors');
const { cleanNames } = require('./helpers');

const htmlElement = devices.map(device => {
  return `
      <h1 style="background-color: #00BCD4">
        Device: <span style="color: #FFEB3B">${device.name}</span>
        Resolution: <span style="color: #FFEB3B">${device.viewport.width} x ${device.viewport.height}</span>
      </h1>
      <img style="border: 2px solid black; max-height: 700px; max-width: 70%;" src="./${cleanNames(device.name)}.png"  alt="${cleanNames(device.name)}" />`;
});

const htmlContent = `
      <html lang="en">
      <head>
          <title>Snap This</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      </head>
          ${htmlElement}
      </html>`;

module.exports = {
  htmlContent,
};