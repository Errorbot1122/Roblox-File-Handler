const BaseVector = require('./BaseVector.js')
const Globel = require('../Globles.js')

const reMap = Globel.math.reMap

class Color3 extends BaseVector {
  constructor(r, b, g, type = "Normel") {

    let newR = Number.isInteger(r) ? r : reMap(r, 0, 255, 0, 1, true);
    let newG = Number.isInteger(g) ? g : reMap(g, 0, 255, 0, 1, true);
    let newB = Number.isInteger(b) ? b : reMap(b, 0, 255, 0, 1, true);

    super(newR, newG, newB);

    this.R = newR;
    this.G = newG;
    this.B = newB;
  }

  
}
module.exports = Color3