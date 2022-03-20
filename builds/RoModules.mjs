/**
 * @enum {Number} The InputType Enum controls the SurfaceInputs of Part. Several parameters here are left-overs from 2005, before Roblox was a multiplayer game, and have no known functionality.
 * 
 * Animation of the Sin InputType:
 * 
 * ![Animation of the Sin InputType](https://developer.roblox.com/assets/bltf0a4aa99ce7d70e1/Enum_InputType_Sin.gif)
*/
const InputType = {
	/**  Behaves like a weld, and does absolutely nothing. */
	NoInput: 0,	
	
	/** Rotate at a constant velocity of BasePart ParamB. */
	Constant: 12,
	
	/**
	* @shortdescription Rotate the part via a sine wave
	* 
	* Rotate at a velocity of:
	* 
	* ```lua
	* ParamA * math.sin(game.Workspace.DistributedGameTime * ParamB)
	* ```
	* 
	* BasePart ParamA will determine the maximum speed at which the part will spin, and BasePart ParamB will determine how frequently it changes direction.
	*/
	Sin: 13	

};

Object.freeze(InputType);

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
  
};

Object.freeze(Material);

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
};

Object.freeze(PartType);

/**
 * @shortdescription The specific type for a specific surface
 * @enum {Number} Used to determine how a surface should be displayed on a part and how automatic surface joints should behave.
 */
const SurfaceType = {
	
	/** Makes the side appear without any surface detail (except for outlines) */
	Smooth: 0,
	
	/** Makes the side appear with thick diagonal "X"s */
	Glue: 1,
	
	/** Makes the side appear with thick diagonal "X"s */
	Weld: 2,
	
	/** Makes the side appear with square studs */
	Studs: 3,
	
	/** Makes the side appear with holes where studs would be*/
	Inlet: 4,
	
	/** Makes the side appear with both Studs and Inlets in a checker pattern */
	Universal: 5,
	
	/** Makes the side appear with a yellow hinge. Any part connected to this hinge will stick to the side and rotate using physics, however, using HingeConstraint to join parts is preferred */
	Hinge: 6,
	
	/** Acts the same as a Hinge, but has a grey ring around it and automatically rotates any part connected to it, however, using HingeConstraint to join parts is preferred */
	Motor: 7,
	
	/** Functions identically to a motor. It may have functioned differently in the past, but that functionality no longer seems to exist */
	SteppingMotor: 8,
	
	/** Same as Smooth, but removes the outlines of the surface */
	SmoothNoOutlines: 10	

};

Object.freeze(SurfaceType);
