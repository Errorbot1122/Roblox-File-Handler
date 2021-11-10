const RoTypes = require('../dont_doc/RoTypes')

const PVInstance = require('./PVInstance.js');
const BasePart = require('./BasePart');

const CFrame = RoTypes.CFrame

/**
 * @inheritdoc
 * @class
 * 
 * @classdesc Models are container objects, meaning they group objects together. They are best used to hold collections of BaseParts and have a number of functions that extend their functionality.
 */
class Model extends PVInstance {
  constructor() {

    super();

    this.ClassName = "Model"


    /**
     * [notreplicated]
     * Determines where the pivot of a Model which does not have a set Model.PrimaryPart is located.
     * @type {CFrame}
     */
    this.WorldPivot;

    /**
     * Points to the primary part of the Model.
     * @type {BasePart}
     */
    this.PrimaryPart;


    /**
     * @type {ModelLevelOfDetail}
     */
    this.LevelOfDetail;
  }
}

module.exports = Model;
