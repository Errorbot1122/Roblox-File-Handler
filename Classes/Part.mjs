/**
 * @typedef {import('../Enums/PartType.js').PartType} PartType
 */

import FormFactorPart from './FormFactorPart.mjs'

/**
 * @inheritdoc
 * @class
 * 
 * @shortdescription A physical object
 * @classdesc A physical object in the Roblox world
 */
export default class Part extends FormFactorPart {
	constructor() {
	
		super();
		
		this.ClassName = "Part"
		
		/** 
		 * [notreplicated]
		 * Sets the type of shape the object has.
		 * @shortdescription The shape of the part
		 * 
		 * @type {PartType} 
		 */
		this.Shape;
	}
}