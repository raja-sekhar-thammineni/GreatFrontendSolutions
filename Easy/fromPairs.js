

// Solution - 1

/**
 * Creates an object from an array of key-value pairs.
 *
 * @param {Array} pairs - An array of key-value pairs.
 * @returns {Object} - The object composed from the key-value pairs.
 */
function fromPairs(pairs) {
    const result = {};
  
    for (const [key, value] of pairs) {
      result[key] = value;
    }
  
    return result;
}

// Solution - 2

/**
 * Creates an object from an array of key-value pairs.
 *
 * @param {Array} pairs - An array of key-value pairs.
 * @returns {Object} - The object composed from the key-value pairs.
 */

function fromPairs(pairs) {
    return Object.fromEntries(pairs);
}
  
const pairs = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ];
  
fromPairs(pairs); // => { a: 1, b: 2, c: 3 }
  