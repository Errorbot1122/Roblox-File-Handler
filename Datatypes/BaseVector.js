const Globel = require('../Globles.js')

/**
 * @class
 * @classdesc The base class for all Vecter Objects in this packege
 */
class BaseVector {
  constructor(...values) {

    this.values = values
  }

  /**
   * @param {...Number} values2
   * @param {Number} amt
   * 
   * @return {BaseVector}
   */
  lerp(amt, x, ...values2) {
    
    let newValue = []

    if (x instanceof BaseVector) {

      values2 = x.values;
    } else {

      values2.push(x)
    }

    for (let i = 0; i < Math.max(this.values.length, values2.length); i++) {
      let value1 = (this.values[i]) ? this.values[i] : 0;
      let value2 = (values2[i]) ? values2[i] : 0;

      newValue[i] = Globel.math.lerp(value1, value2, amt);

    }

    return new BaseVector(...newValue)
  }
}

module.exports = BaseVector