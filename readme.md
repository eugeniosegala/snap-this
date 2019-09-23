**Snap This**

Snap This is a tool based on **Puppeteer** that allow you to make screenshots for different devices and different resolutions in a couple of seconds!

**Install**: 
`npm i snap-this`

**Usage**: `WEBSITE=https://en.wikipedia.org/ snap-this`

_Options:_ <br>

- **WEBSITE**=https://en.wikipedia.org/ _(define the app endpoint)_
- **SELECTOR**=".important-element" _(wait for an important element)_
- **LOCAL_STORAGE**="myfolder/local-storage.js" _(set local storage information)_


_Full command:_ <br>
`WEBSITE=https://en.wikipedia.org/ SELECTOR=".important-element" LOCAL_STORAGE="demo/local-storage.js" snap-this`

This package will create a folder at root level of your app containing a `.png` image for each device. It's also available an `index.html` file with the entire list.

**The are 71 devices/resolutions available inside the package.**

**Demo:**

![Snap This demo](http://eugeniosegala.it/wp-content/uploads/2019/09/snap-this-demo.gif)
