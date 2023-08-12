/**
 * This function returns the index of the first element in the array that satisfies the provided testing function.
 * Otherwise, it returns -1, indicating that no element passed the test.
 *
 * @param {Array} array - The array to search.
 * @param {Function} predicate - The function invoked per iteration.
 * @param {number} [fromIndex=0] - The index to start searching from.
 * @returns The index of the found element, else -1.
 */

function findIndex(array, predicate, fromIndex = 0) {
    const length = array.length;
    const startIndex =
      fromIndex >= 0 ? fromIndex : Math.max(length + fromIndex, 0);
  
    for (let index = startIndex; index < length; index++) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
  
    return -1;
}  

const arr = [1, 2, 3, 4, 5];

// Search for the first value in the array that is greater than 3.
findIndex(arr, (num) => num > 3); // => 3

// Start searching from index 3 (inclusive).
findIndex(arr, (num) => num > 3, 4); // => 4

// No such element exists.
findIndex(arr, (num) => num > 10, 3); // => -1
