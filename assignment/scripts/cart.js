console.log("***** Cart Functions *****")
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// (i am using the vscode mocha extension to test things usually)

/** @type {string[]} */
const basket = []

/**
 * @param {string} item
 * @returns {boolean}
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

function listItems() {
  for (const item of basket) {
    console.log(item)
  }
}

function empty() {
  while (basket.length > 0) {
    basket.pop()
  }
}

const maxItems = 5
console.log(`maxItems=${maxItems}`)

// Testing code
// This is not how I actually write tests because I like unit tests
{
  const { log } = console
  /**
   * @template T
   * @param {T} expected
   * @param {T | any} actual
   * @returns {"PASSED" | "FAILED"}
   */
  function test(expected, actual) {
    if (expected === actual) {
      return "PASSED"
    } else {
      return "FAILED"
    }
  }
  log("=== TESTING ===")
  log(`basket=${basket} (length=${basket.length})`)
  log(`adding "apples" to basket`)
  log(`expected bool true: ${test(true, addItem("apples"))}`)
  log(`basket=${basket} (length=${basket.length})`)
  // If that test passed we can safely add some more stuff
  addItem("milk")
  addItem("eggs")
  log("added milk and eggs")
  log(`basket=${basket} (length=${basket.length})`)
  log("testing listItems")
  listItems()
  log("emptying basket")
  empty()
  log(`basket=${basket} (length=${basket.length})`)
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
