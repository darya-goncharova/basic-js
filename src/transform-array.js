const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */




function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let newArray = [];

  for (i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
    if (arr[i] === '--double-prev') {
      newArray.pop();
      if (i > 0) newArray.push(arr[i - 1]);
    }
    if (arr[i] === '--discard-prev') {
      newArray.pop();
      if (i > 0) newArray.pop();
    }
    if (arr[i] === '--double-next') {
      newArray.pop();
      if (i < arr.length - 1)  newArray.push(arr[i + 1]);
    }
    if (arr[i] === '--discard-next') {
      newArray.pop();
      if (i < arr.length - 1) i += 2;
    }
  }
  return newArray;
}

module.exports = {
  transform
};
