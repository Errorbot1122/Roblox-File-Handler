const PVInstance = require('./PVInstance.js');
const CFrame = require('./CFrame.js');
const BasePart = require('./BasePart');

class Model extends PVInstance {
  constructor() {

    super();

    this.ClassName = "Model"


    /**
     * @type {CFrame}
     * [notreplicated]
     * Determines where the pivot of a Model which does not have a set Model.PrimaryPart is located.
     */
    this.WorldPivot;

    /**
     * @type {BasePart}
     * Points to the primary part of the Model.
     */
    this.PrimaryPart;


    /**
     * @type {ModelLevelOfDetail}
     */
    this.LevelOfDetail;
  }
}

module.exports = Model;
