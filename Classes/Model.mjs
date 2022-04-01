/**
 * @typedef {import('../Datatypes/CFrame.mjs').CFrame} CFrame
 * 
 * @typedef {import('./BasePart.mjs').BasePart} PVInstance
 */

import { PVInstance } from "./PVInstance.mjs"


/**
 * @inheritdoc
 * @class
 * 
 * @shortdescription An object container
 * @classdesc Models are container objects, meaning they group objects together. They are best used to hold collections of BaseParts and have a number of functions that extend their functionality.
 */
export class Model extends PVInstance {
  	constructor() {
	
	    super();
	
	    this.ClassName = "Model"
	
	
	    /**
	     * [notreplicated]
	     * Determines where the pivot of a Model does not have a set Model.PrimaryPart is located.
	     * @shortdescription The pivot point for the model
	     * 
	     * @type {CFrame}
	     */
	    this.WorldPivot;
	
	    /**
	     * Points to the primary part of the Model.
	     * @shortdescription The main "part" of the model
	     * 
	     * @type {BasePart}
	     */
	    this.PrimaryPart;
	
	
	    /**
	     * @type {ModelLevelOfDetail}
	     */
	    this.LevelOfDetail;
  	}
}