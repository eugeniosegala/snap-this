
![SnapThis logo](http://eugeniosegala.it/wp-content/uploads/2019/09/snap-logo.png | width=300)

<hr>

Snap This is a tool based on **Puppeteer** that allows you to make screenshots automatically for different devices and different resolutions in a couple of minutes on Chrome!

- [x] Simulating devices
- [x] Local Storage Support
- [x] Await important elements before screenshots
- [x] Dynamic showcase
- [x] Wait for all network calls ([Pending XHR Puppeteer](https://github.com/jtassin/pending-xhr-puppeteer))
- [ ] Cookies support
- [ ] Customizable devices list

**Demo:**<br>
![Snap This demo](http://eugeniosegala.it/wp-content/uploads/2019/09/snap-this-showcase.gif)

<br />

<h2>Usage</h2>

**Install**: 
`npm i snap-this`

_Commands:_

`WEBSITE=https://en.wikipedia.org/ npx snap-this` _(npx will resolve the path to node_modules for you or just it execute everything without downloading the package)_

`WEBSITE=https://en.wikipedia.org/ snap-this` _(basic command for advanced IDE's)_

`WEBSITE=https://thameslink.stage.otrl.io/ ./node_modules/.bin/snap-this` _(resolving the node_modules path to the bin file manually)_

_Options:_ <br>

- **WEBSITE**=https://en.wikipedia.org/ _(define the app endpoint)_
- **SELECTOR**=".important-element" _(wait for an important item before the snap)_
- **LOCAL_STORAGE**="local-storage.js" _(set path for local storage information)_

[Local storage template](https://github.com/eugeniosegala/snap-this/blob/master/demo/local_sample.js)

_Full command example:_ <br>
`WEBSITE=https://en.wikipedia.org/ SELECTOR=".important-element" LOCAL_STORAGE="local-storage.js" snap-this`

This package will create a folder at root level of your app containing a `.png` image for each device. It's also available an `index.html` file with the entire list.

**The are 71 devices/resolutions available inside the package (thanks to Puppeteer).**

