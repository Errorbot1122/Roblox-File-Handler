const RoEnums = require('../RoModules.js')
const PartType = RoEnums.PartType
 

const FormFactorPart = require('./FormFactorPart.js');

class Part extends FormFactorPart {
  constructor() {
    super();
    
    /** @type {PartType} 
     * [notreplicated]
     * Sets the type of shape the object has.
     */
    this.Shape;
  }
}

module.exports = Part;