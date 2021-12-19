const RoEnums = require('../dont_doc/RoEnums')
const PartType = RoEnums.PartType
 

const FormFactorPart = require('./FormFactorPart.js');

/**
 * @inheritdoc
 * @class
 * 
 * @shortdecription A physical object
 * @classdesc A physical object in the Roblox world
 */
class Part extends FormFactorPart {
  constructor() {
    
    super();
    
    this.ClassName = "Part"

    /** 
     * [notreplicated]
     * Sets the type of shape the object has.
     * @shortdecription The shape of the part
     * 
     * @type {PartType} 
     */
    this.Shape;
  }
}

module.exports = Part;