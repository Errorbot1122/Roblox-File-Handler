const Vector3 = require('./Vector3.js');

class CFrame {
  constructor(x=0, y=0, z=0, R00=0, R01=0, R02=0, R10=0, R11=0, R12=0, R20=0, R21=0, R22=0) {
    
    // Pos
    this.x = x;
    this.y = y;
    this.z = z;
    
    // 3-by-3 Rotation Matrix
    this.R00 = R00;
    this.R01 = R01;
    this.R02 = R02;

    this.R10 = R10;
    this.R11 = R11;
    this.R12 = R12;
    
    this.R20 = R20;
    this.R21 = R21;
    this.R22 = R22;

    if (x instanceof Vector3) {

      this._setXYZFromVector3(x);
    }
  }

  /**
   * 
   * @param {Vector3} [v3] - Abrv fo Vector3
   * @param {Number | String} [type] - 0 = XYZ, 1 = RightVector, 2 = UpVector, 3 = LookVector, 4 = XVector, 5 = YVector, 6 = ZVector
   */
  _setXYZFromVector3(v3, type) {

    this.x = v3.x;
    this.y = v3.y;
    this.z = v3.z;
  }

  /**
   * @returns {Vector3}
   */
  get Position() {

    return new Vector3(this.x, this.y, this.z);
  }

  /**
   * @param {Vecter3 | Array} x
   */
  set Position(x) {
    if (x instanceof Vector3) {

      this._setXYZFromVector3(x);
    }
    else if (x instanceof Array) {

      this.x = x[0];
      this.x = x[1];
      this.x = x[2];
    }
  }
}

module.exports = CFrame