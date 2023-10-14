console.log("***** Cart Functions *****")
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

/** @type {string[]} */
const basket = []

/**
 * @param {string} item
 * @returns
 */
function addItem(item) {
  // It seems sensible for this to have some error handling to me
  // Though i doubt it would actually matter
  try {
    basket.push(item)
    return true
  } catch (e) {
    return false
  }
}

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    basket: typeof basket !== "undefined" ? basket : undefined,
    addItem: typeof addItem !== "undefined" ? addItem : undefined,
    listItems: typeof listItems !== "undefined" ? listItems : undefined,
    maxItems: typeof maxItems !== "undefined" ? maxItems : undefined,
    empty: typeof empty !== "undefined" ? empty : undefined,
    isFull: typeof isFull !== "undefined" ? isFull : undefined,
    removeItem: typeof removeItem !== "undefined" ? removeItem : undefined,
  }
} catch (e) {
  // Do nothing
}
