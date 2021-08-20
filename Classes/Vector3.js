const BaseVector = require('./BaseVector.js')

class Vector3 extends BaseVector {
  constructor(x=0, y=0, z=0) {
    
    super(x, y, z);

    this.x = x;
    this.y = y;
    this.z = z;

  }
}

module.exports = Vector3;