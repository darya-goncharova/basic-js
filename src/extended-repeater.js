const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */



function repeater(str, options) {

  let repeat = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
  let separator = options.hasOwnProperty('separator') ? options.separator : '+';
  let addition = options.hasOwnProperty('addition') ? options.addition : '';
  let additionRepeat = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
  let additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';
  
  str = String(str);

  let result = [];
  let addResult = [];

  for (let i = 0; i < additionRepeat; i++) {
    addResult.push(addition)
  }

  addResult = addResult.join(additionSeparator);

  for (let i = 0; i < repeat; i++) {
    result.push(str + addResult)
  }

  return result.join(separator)

}
module.exports = {
  repeater
};
