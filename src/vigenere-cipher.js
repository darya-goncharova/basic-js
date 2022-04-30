const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  crypt(str, key, type) {
    if (str == undefined || key == undefined) throw new Error('Incorrect arguments!');

    str = str.toUpperCase();
    key = key.toUpperCase();
    let resultString = '';
    let j = 0;
    for (let i = 0;  i < str.length; i++) {
      if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
        resultString += str[i];
      } else {
        if (type) {
          resultString += String.fromCharCode((str.charCodeAt(i) + key.charCodeAt(j % key.length) - 2 * 65) % 26 + 65);
        } else {
          resultString += String.fromCharCode((str.charCodeAt(i) - key.charCodeAt(j % key.length) + 26) % 26 + 65);
        }
        j++;
      }
    }
    return this.direct ? resultString : resultString.split('').reverse().join('');
  }



  encrypt(str, key) {
    return this.crypt(str, key, true);
  }
  decrypt(encryptedStr, key) {
    return this.crypt(encryptedStr, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};


