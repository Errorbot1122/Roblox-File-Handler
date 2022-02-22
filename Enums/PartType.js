/**
 * @shortdescription Shape of a part
 * @enum {Number} The PartType Enum controls the {@link Part.Shape} of an object. 
 * 
 * Block, sphere, and cylinder parts:
 * 
 * ![Block, sphere, and cylinder parts](https://developer.roblox.com/assets/bltcb9ef55958be7a0e/PartTypes.jpg)
 */
const PartType = {
	/** A ball shaped part */
	Ball: 0,
	
	/** A block shaped part */
	Block: 1,	
	
	/** A cylinder shaped part */
	Cylinder: 2	
}

Object.freeze(PartType)

module.exports = PartType