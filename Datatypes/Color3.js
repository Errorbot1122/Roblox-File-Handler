const BaseVector = require('./BaseVector.js')
const Globel = require('../Globles.js')

const reMap = Globel.math.reMap

/**
 * @inheritdoc
 * @class
 * 
 * @classdesc Color3 is a data type that describes a color using R, G and B components, which are on the range [0, 1] 
 */
class Color3 extends BaseVector {
  constructor(r, g, b) {

    super(r, g, b);

    this.R = r;
    this.G = g;
    this.B = b;
  }

  
}
module.exports = Color3