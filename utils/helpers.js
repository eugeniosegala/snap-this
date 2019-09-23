const cleanNames = (url) => {
  return url.toString()                                      // Convert to string
      .normalize('NFD')                                // Change diacritics
      .replace(/[\u0300-\u036f]/g,'') // Remove illegal characters
      .replace(/\s+/g,'-')            // Change whitespace to dashes
      .toLowerCase()                                         // Change to lowercase
      .replace(/&/g,'-and-')          // Replace ampersand
      .replace(/[^a-z0-9\-]/g,'')     // Remove anything that is not a letter, number or dash
      .replace(/-+/g,'-')             // Remove duplicate dashes
      .replace(/^-*/,'')              // Remove starting dashes
      .replace(/-*$/,'');             // Remove trailing dashes
};

/** Internal method to determine if an elementHandle is visible on the page. */
const _isVisible = async(page, elementHandle) => await page.evaluate((el) => {
  if (!el || el.offsetParent === null) {
    return false;
  }

  const style = window.getComputedStyle(el);
  return style && style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
}, elementHandle);

/**
 * Checks if an element with selector exists in DOM and is visible.
 * @param {*} page
 * @param {*} selector CSS Selector.
 * @param {*} timeout amount of time to wait for existence and visible.
 */
const waitForVisible = async(page, selector, timeout=2000) => {
  const startTime = new Date();
  try {
    await page.waitForSelector(selector, { timeout: timeout });
    // Keep looking for the first visible element matching selector until timeout
    while (true) {
      const els = await page.$$(selector);
      for(const el of els) {
        if (await _isVisible(page, el)) {
          // console.log(`PASS Check visible : ${selector}`);
          return el;
        }
      }
      if (new Date() - startTime > timeout) {
        throw new Error(`Timeout after ${timeout}ms`);
      }
      page.waitFor(50);
    }
  } catch (e) {
    // console.log(`FAIL Check visible : ${selector}`);
    return false;
  }
};

module.exports = {
  cleanNames,
  waitForVisible,
};