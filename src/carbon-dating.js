const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const DECAY = Math.LN2 / HALF_LIFE_PERIOD;


/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

  function dateSample(sampleActivity) {
    if (typeof sampleActivity !== "string") {
      return false;
    }
  
    const activity = Number(sampleActivity);
    const age = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / DECAY);
  
    if (MODERN_ACTIVITY < activity
      || isNaN(activity)
      || activity <= 0
    ) {
      return false;
    }
  
    return age;
  };
  


module.exports = {
  dateSample
};
