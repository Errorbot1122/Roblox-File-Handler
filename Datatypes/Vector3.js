const BaseVector = require('./BaseVector.js')

/**
 * @inheritdoc
 * @class
 * 
 * @classdesc An avrage Vector3 value
 */
class Vector3 extends BaseVector {
  constructor(x=0, y=0, z=0) {
    
    super(x, y, z);
    
    this.X = this.values[0];
    this.Y = this.values[1];
    this.Z = this.values[2];

  }
}

module.exports = Vector3;