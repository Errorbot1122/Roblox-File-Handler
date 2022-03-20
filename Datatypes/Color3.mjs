import BaseVector from './BaseVector.mjs';

/**
 * @inheritdoc
 * @class
 * 
 * @shortdescription Colors from 0 - 1
 * @classdesc Color3 is a data type that describes a color using R, G, and B components, which are on the range [0, 1] 
 */
export default class Color3 extends BaseVector {
	constructor(r, g, b) {
	
		super(r, g, b);
		
		this.R = r;
		this.G = g;
		this.B = b;
	}

  
}