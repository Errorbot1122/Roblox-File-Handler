const Globals = require('../Globals.js')
const Color3 = require('./Color3.js')
const BaseVector = require('./BaseVector.js')

/**
 * @inheritdoc
 * @class
 * 
 * @shortdescription Colors from 0 to 255
 * @classdesc Color3 but in the well-know [0, 255] range
 */
class Color3uint8 extends BaseVector {
  constructor(x, g, b, a = 255) {
    
    super(a, x, g, b)

    if (typeof x == "number") {
      
      if (typeof g == "number") {

        this.values = [a, x, g, b]
      }
      else {
        
        let argbBuffer = Globals.math.toBytesInt32(x);

        let argbDataView = new DataView(argbBuffer)

        for (let i = 0; i < argbDataView.byteLength; i++) {

          this.values[i] = argbDataView.getUint8(i)
        }
      
      }
      
    }
    else if (x instanceof Color3) {
      
      this.values = [a, ...x.values]
    }

    this.A = this.values[0];
    this.alpha = this.values[0]

    this.R = this.values[1];
    this.G = this.values[2];
    this.B = this.values[3];

    this.Color3 = new Color3(this.R, this.G, this.B)
  }

  getRGBComponents() {
    return [this.R, this.G, this.B]
  }
}

module.exports = Color3uint8