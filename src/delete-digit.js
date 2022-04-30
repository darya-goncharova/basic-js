const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = [];
	for (let i = 0; i < String(n).length; i++) {
		let array = String(n).split('');
		array.splice(i, 1);
		let result = array.join('');
		numbers.push(result)
	}

  
  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
