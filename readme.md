<h1>Snap This</h1>

Snap This is a tool based on **Puppeteer** that allow you to make screenshots for different devices and different resolutions in a couple of minutes on Chrome!

- [x] Simulating devices
- [x] Local Storage Support
- [x] Await important elements before screenshots
- [x] Dynamic showcase
- [x] Wait for all network calls ([Pending XHR Puppeteer](https://github.com/jtassin/pending-xhr-puppeteer))
- [ ] Cookies support
- [ ] Customizable device list

**Demo:**<br>
![Snap This demo](http://eugeniosegala.it/wp-content/uploads/2019/09/snap-this-showcase.gif)

<hr>

**Install**: 
`npm i snap-this`

**Usage**: `WEBSITE=https://en.wikipedia.org/ snap-this`

_Options:_ <br>

- **WEBSITE**=https://en.wikipedia.org/ _(define the app endpoint)_
- **SELECTOR**=".important-element" _(wait for an important item before the snap)_
- **LOCAL_STORAGE**="local-storage.js" _(set path for local storage information)_

[Local storage template](https://github.com/eugeniosegala/snap-this/blob/master/demo/local_sample.js)

_Full command:_ <br>
`WEBSITE=https://en.wikipedia.org/ SELECTOR=".important-element" LOCAL_STORAGE="local-storage.js" snap-this`

This package will create a folder at root level of your app containing a `.png` image for each device. It's also available an `index.html` file with the entire list.

**The are 71 devices/resolutions available inside the package (thanks to Puppeteer).**

