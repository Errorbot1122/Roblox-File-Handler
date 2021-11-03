const PVInstance = require('./PVInstance.js');
const CFrame = require('../Datatypes/CFrame.js');
const BasePart = require('./BasePart');

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
