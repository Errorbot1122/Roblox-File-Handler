/**
 * @enum {Number} All of Roblox's materials
 * @shortdescription Materials
 */
const Material = {
	/** Applies to BasPart only. */
	Plastic: 256,
	
	/** Applies to BasPart only. */
	Wood: 512,
	
	/** Applies to BasPart and Terrain. */
	Slate: 800,
	
	/** Applies to BasPart and Terrain. */
	Concrete: 816,
	
	/** Applies to BasPart only. */
	CorrodedMetal: 1040,	
	
	/** Applies to BasPart only. */
	DiamondPlate: 1056,
	
	/** Applies to BasPart only. */
	Foil: 1072,
	
	/** Applies to BasPart and Terrain. */
	Grass: 1280,
	
	/** Applies to BasPart and Terrain. */
	Ice: 1536,	
	
	/** Applies to BasPart only. */
	Marble: 784,	
	
	/** Applies to BasPart only. */
	Granite: 832,
	
	/** Applies to BasPart and Terrain. */
	Brick: 848,
	
	/** Applies to BasPart only. */
	Pebble: 864,	
	
	/** Applies to BasPart and Terrain. */
	Sand: 1296,
	
	/** Applies to BasPart only. */
	Fabric:1312,
	
	/** Applies to BasPart only. */
	SmoothPlastic: 272,
	
	/** Applies to BasPart only. */
	Metal: 1088,
	
	/** Applies to BasPart and Terrain. */
	WoodPlanks: 528,	
	
	/** Applies to BasPart and Terrain. */
	Cobblestone: 880,	
	
	/** Applies to Terrain only. */
	Air: 1792,
	
	/** Applies to Terrain only. */
	Water: 2048,
	
	/** Applies to Terrain only. */
	Rock: 896,
	
	/** Applies to Terrain only. */
	Glacier: 1552,
	
	/** Applies to Terrain only. */
	Snow: 1328,	
	
	/** Applies to Terrain only. */
	Sandstone: 912,	
	
	/** Applies to Terrain only. */
	Mud: 1344,
	
	/** Applies to Terrain only. */
	Basalt: 788,
	
	/** Applies to Terrain only. */
	Ground: 1360,
	
	/** Applies to Terrain only. */
	CrackedLava: 804,
	
	/** Applies to BasPart only. */
	Neon: 288,
	
	/** Applies to BasPart only. */
	Glass: 1568,
	
	/** Applies to Terrain only. */
	Asphalt: 1376,
	
	/** Applies to Terrain only. */
	LeafyGrass: 1284,	
	
	/** Applies to Terrain only. */
	Salt: 1392,	
	
	/** Applies to Terrain only. */
	Limestone: 820,	
	
	/** Applies to Terrain only. */
	Pavement: 836,
	
	/** 
	* Applies to BasPart only; 
	* @see https://developer.roblox.com/en-us/articles/force-field-material
	*/
	ForceField: 1584	
  
}

Object.freeze(Material);

module.exports = Material