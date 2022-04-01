import { Instance } from './Instance.mjs'

/**
 * @typedef {import('./Instance.mjs').Instance} Instance
 */

/**
 * @class
 * @inheritdoc
 * 
 * @shortdescription Handles selected objects in Studio
 * @classdesc The Selection service controls the Instances that are selected in Roblox Studio.
 * Inharates {@link Instance}
 * 
 * @todo Finish short descriptions
 */
export class Selection extends Instance {
	constructor() {
		super()

		/**
		 * @type {Instance} 
		 *
		 *  [hidden] [readonly] [notreplicated]
		 */
		this.ActiveInstance

		
		/**
		 * @type {Number} 
		 *
		 *  [readonly] [notreplicated]
		 */
		this.SelectionThickness
	}
}