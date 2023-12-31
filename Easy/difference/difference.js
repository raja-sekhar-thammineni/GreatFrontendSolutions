/**
 * @param {Array} array - Array from which different elements are to be removed.
 * @param {Array} values - Array of values that are to be removed from the original array.
 * @return {Array} Returns filtered array.
 */
function difference(array, values) {
    const result = [];
  
    // Create a set of all the values in the values arrays.
    const valuesSet = new Set(values);
  
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      // Check if the value is in the values set.
      if (!valuesSet.has(value) && !(value === undefined && !(i in array))) {
        result.push(value);
      }
    }
  
    return result;
}
 
difference([1, 2, 3], [2, 3]); // => [1]
difference([1, 2, 3, 4], [2, 3, 1]); // => [4]
difference([1, 2, 3], [2, 3, 1, 4]); // => []
difference([1, , 3], [1]); // => [3]