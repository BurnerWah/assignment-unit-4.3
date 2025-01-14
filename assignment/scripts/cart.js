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
  if (!isFull()) {
    basket.push(item)
    return true
  } else {
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

function isFull() {
  if (basket.length < maxItems) {
    return false
  }
  return true
}

function removeItem(item) {
  const index = basket.indexOf(item)
  if (index >= 0) {
    return basket.splice(index, 1)[0]
  }
  return null
}

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
  log(`isFull: ${isFull()}`)
  log(`adding "apples" to basket`)
  log(`expected bool true: ${test(true, addItem("apples"))}`)
  log(`basket=${basket} (length=${basket.length})`)
  // If that test passed we can safely add some more stuff
  addItem("milk")
  addItem("eggs")
  log("added milk and eggs")
  log(`basket=${basket} (length=${basket.length})`)
  log(`isFull: ${isFull()}`)
  addItem("foo")
  addItem("bar")
  log("added foo and bar")
  log(`basket=${basket} (length=${basket.length})`)
  log(`isFull: ${isFull()}`)
  log(`adding "apples" to basket`)
  log(`expected bool false: ${test(false, addItem("apples"))}`)
  log("testing listItems")
  listItems()
  log(`removing apples: got ${removeItem("apples")}`)
  log(`removing dmc2: got ${removeItem("dmc2")}`)
  log(`basket=${basket} (length=${basket.length})`)
  log(`isFull: ${isFull()}`)
  log("emptying basket")
  empty()
  log(`basket=${basket} (length=${basket.length})`)
  log(`isFull: ${isFull()}`)
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
