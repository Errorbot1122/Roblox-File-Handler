/**
 * Descriptions from [developer.roblox.com]{@link https://developer.roblox.com/en-us/api-reference/class/BasePart}
 */
	
/**
 * @typedef {import('../Enums/SurfaceType.mjs').SurfaceType}		SurfaceType
 * @typedef {import('../Enums/Material.mjs').Material}			Material
 *
 * @typedef {import('../Datatypes/Vector.mjs').Vector}			Vector
 * @typedef {import('../Datatypes/CFrame.mjs').CFrame}			CFrame
 * @typedef {import('../Datatypes/Color3.mjs').Color3}			Color3
 * 
 * @typedef {import('./PVInstance.mjs').PVInstance}				PVInstance
 */

import PVInstance from './PVInstance.mjs'


/**
 * @class
 * @inheritdoc
 * 
 * @shortdescription The base class for parts
 * @classdesc A base class used to make 3d objects 
 * Inharates [PVInstance]{@link PVInstance}
 */
export default class BasePart extends PVInstance {
	/**
	* Init the part
	* @constructor
	*/
	constructor() {
		
		super();
		
		/**
		 * Determines whether a part is immovable by physics
		 * @shortdescription Is the part immovable?
		 * @type {Boolean}
		*/ 
		this.Anchored = false;
		
		/**
		 * [notreplicated]
		 * The angular velocity of the part’s assembly
		 * @shortdescription Angular velocity of the part’s assembly
		 * 
		 * @type {Vector}
		 */ 
		this.AssemblyAngularVelocity;
		
		/**
		 * [readonly] [notreplicated]
		 * The center of mass of the part’s assembly in world space
		 * @shortdescription Center of mass of the part’s assembly
		 * 
		 * @type {Vector}
		 */  
		this.AssemblyCenterOfMass;
		
		/**
		 * [notreplicated]
		 * The linear velocity of the part’s assembly world space
		 * @shortdescription Linear velocity of the part’s assembly
		 * 
		 * @type {Vector}
		 */   
		this.AssemblyLinearVelocity;
		
		/**
		 * [readonly] [notreplicated]
		 * The total mass of the part’s assembly
		 * @shortdescription Mass of the part’s assembly
		 * @type {Number}
		 */    
		this.AssemblyMass;
		
		/**
		 * [readonly] [notreplicated]
		 * A reference to the root part of the assembly
		 * @shortdescription Root part of the assembly
		 * 
		 * @type {BasePart}
		 */ 
		this.AssemblyRootPart;
		
		/**
		 * Determines the type of surface for the Back face of a part (+Z direction)
		 * @shortdescription The back face's {@see SurfaceType}
		 * 
		 * @type {SurfaceType}
		 */  
		this.BackSurface;
		
		/**
		 * Determines the type of surface for the Bottom face of a part (-Y direction)
		 * @shortdescription The bottom face's {@see SurfaceType}
		 * 
		 * @type {SurfaceType}
		 */
		this.BottomSurface;
		
		/**
		 * [notreplicated]
		 * Determines the color of a part
		 * @shortdescription The color of the part (from {@see RoEnums.BrickColor})
		 * 
		 * @type {BrickColor}
		 */ 
		this.BrickColor;
		
		/**
		 * Determines the position and rotation of a part of the world
		 * @shortdescription Position + Rotation Matix of the part
		 * 
		 * @type {CFrame}
		 */  
		this.CFrame;
		
		/**
		 * Determines whether a part may collide with other parts.
		 * @shortdescription If collisions get calculated
		 * 
		 * @type {Boolean}
		 */   
		this.CanCollide;
		
		/**
		 * @type {Boolean}
		 */  
		this.CanQuery;
		
		/**
		 * Determines if the part will trigger Touched/TouchEnded events on other BaseParts with TouchTransmitters
		 * @shortdescription If the part can send touch events
		 * 
		 * @type {Boolean}
		 */   
		this.CanTouch;
		
		/**
		 * Determines whether or not a part casts a shadow
		 * @shortdescription If the part can cast a shadow
		 * 
		 * @type {Boolean}
		 */   
		this.CastShadow;
		
		/**
		 * [readonly] [notreplicated]
		 * Describes the world position in which a part’s center of mass is located.
		 * @shortdescription The location the center of mass
		 * 
		 * @type {Vector} 
		 */ 
		this.CenterOfMass;
		
		/**
		 * Describes the automatically-set ID number of a part’s collision group
		 * @shortdescription The id for a Roblox collision group
		 * 
		 * @type {Number}
		 */
		this.CollisionGroupId;
		
		/**
		 * [notreplicated]
		 * Determines the color of a part
		 * @shortdescription The real color of the part
		 * 
		 * @type {Color3}
		 */
		this.Color;
		
		/**
		 * Determines several physical properties of a part
		 * @type {RoTypes.PhysicalProperties}
		 */
		this.CustomPhysicalProperties;
		
		/**
		 * Determines the type of surface for the Front face of a part (-Z direction)
		 * @shortdescription The front face's {@see SurfaceType}
		 * 
		 * @type {SurfaceType}
		 */ 
		this.FrontSurface;
		
		/**
		 * Determines the type of surface for the Left face of a part (-X direction)
		 * @shortdescription The left face's {@see SurfaceType}
		 * 
		 * @type {SurfaceType}
		 */ 
		this.LeftSurface;
		
		/**
		 * [hidden] [notreplicated]
		 * Determines a multiplier for BasePart.Transparency that is only visible to the local client
		 * @shortdescription A multiplier for BasePart.Transparency
		 * 
		 * @type {Number}
		 */  
		this.LocalTransparencyModifier;
		
		/**
		 * Determines whether a part is selectable in Studio
		 * @shortdescription If the part is selectable (Studio)
		 * 
		 * @type {Boolean}
		 */  
		this.Locked;
		
		
		/**
		 * [readonly] [notreplicated]
		 * Describes the mass of the part, the product of its density and volume
		 * @shortdescription The mass of a part
		 *
		 * @type {Number}
		 */  
		this.Mass;
		
		/**
		 * Determines whether the part contributes to the total mass or inertia of its rigid body
		 * @shortdescription Turns "off" the {@see this.Mass} if it is connected to a {@see BasePart}
		 * 
		 * @type {Number}
		 */   
		this.Massless;
		
		/**
		 * Determines the texture and default physical properties of a part
		 * @shortdescription The texture and physical properties
		 * 
		 * @type {RoEnums.Material}
		 */  
		this.Material;
		
		/**
		 * [notreplicated]
		 * Describes the rotation of the part in the world
		 * The rotation of the part using Tait–Bryan angles (Yaw, Pitch, and Roll)
		 * @shortdescription Rotation in Tait–Bryan angles
		 * 
		 * @type {Vector}
		 */  
		this.Orientation;
		
		
		/**
		 * Specifies the offset of the part’s pivot from its CFrame.
		 * @shortdescription The pivot point for the CFrame
		 * 
		 * @type {CFrame}
		 */   
		this.PivotOffset;
		
		
		/**
		 * [notreplicated]
		 * Describes the position of the part in the world
		 * @type {Vector}
		 */   
		this.Position;
		
		
		 /**
		 * [hidden] [readonly] [notreplicated]
		 * Time since last recorded physics update
		 * 
		 * @type {Number}
		 */    
		this.ReceiveAge;
		
		
		/**
		 * Determines how much a part reflects the skybox
		 * @shortdescription How much the part reflects the skybox
		 * 
		 * @type {Number}
		 */  
		this.Reflectance;
		
		/**
		 * [readonly] [notreplicated]
		 * Describes the smallest change in size allowable by the Resize method
		 * @shortdescription The minimum change in size
		 * 
		 * @type {Number}
		 */ 
		this.ResizeIncrement;
		
		/**
		 * [readonly] [notreplicated]
		 * Describes the faces on which a part may be resized
		 * @shortdescription Which faces may be resized
		 * 
		 * @type {Faces}
		*/  
		this.ResizeableFaces;
		
		/**
		 * Determines the type of surface for the Right face of a part (+X direction)
		 * @shortdescription The right face's {@see SurfaceType}
		 * 
		 * @type {SurfaceType}
		 */ 
		this.RightSurface;
		
		
		/**
		 * The main rule in determining the root part of an assembly
		 * @type {Number}
		 */  
		this.RootPriority;
		
		/**
		 * [notreplicated]
		 * The rotation of the part in degrees for the three axes
		 * The rotation of the part in Euler Angles
		 * 
		 * @shortdescription Rotation using Euler angles
		 * @type {Vector}
		 */  
		this.Rotation;
		
		/**
		 * [notreplicated]
		 * Determines the dimensions of a part (length, width, height)
		 * @type {Vector}
		 */  
		this.Size;
		
		/**
		 * Determines the type of surface for the Top face of a part (+Y direction)
		 * @shortdescription The top face's {@see SurfaceType}
		 * 
		 * @type {SurfaceType}
		 */ 
		this.TopSurface;
		
		/**
		 * Determines how much a part can be seen through (the inverse of part opacity)
		 * @shortdescription How see-through the part is
		 * 
		 * @type {Number}
		 */ 
		this.Transparency;
		
	}
}