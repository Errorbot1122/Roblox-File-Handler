/**
 * 
 * Maps a given range from a specific iterator to a new range.
 * 
 * Credit to [RoyallyFlushed]{@link https://www.roblox.com/users/profile?username=RoyallyFlushed} for the code!!! (https://devforum.roblox.com/t/lua-map-command/215342)
 * 
 * @param {Number} n - The number you want to map 
 * @param {Number} start - The starting number of the original range
 * @param {Number} stop - The ending number of the original range
 * @param {Number} newStart - The starting number of the new range
 * @param {Number} newStop - The ending number of the new range
 * @param {Boolean} [withinBounds=false] - Is forced to be inbetween the new range or not. [Defult: false]
 * 
 * @returns {Number}
 */

/**
 * returns the interpolated version of the input range by an amount between 0 and 1. (can go above or below 0 - 1, but not recommended)
 * 
 * @param {Number} start - The starting number in the range.
 * @param {Number} end - The ending number in the range.
 * @param {Number} amt - the amount you want to interpolate between 0 and 1. (can go above or below 0 - 1, but not recommended)
 * 
 * @return {Number}
 */
function lerp(start, end, amt){
	return (1 - amt) * start + amt * end
}

/**
 * @param {Number} num - the number you want to convert
 */
function toBytesInt32(num) {
	const arr = new ArrayBuffer(4); // an Int32 takes 4 bytes
	const view = new DataView(arr);
	view.setUint32(0, num, false); // byteOffset = 0; litteEndian = false
	return arr;
}

/**
 * @class
 * 
 * @shortdescription Base class for vectors
 * @classdesc The base class for all Vector Objects in this packege
 */
class BaseVector {
	constructor(...values) {
		
		this.values = values;
	}
	
	/**
	 * @param {...Number} values2
	 * @param {Number} amt
	 * 
	 * @return {BaseVector}
	 */
	lerp(amt, x, ...values2) {
		
		let newValue = [];
		
		if (x instanceof BaseVector) {
			
			values2 = x.values;
		} else {
			
			values2.push(x);
		}
		
		for (let i = 0; i < Math.max(this.values.length, values2.length); i++) {
			
			let value1 = (this.values[i]) ? this.values[i] : 0;
			let value2 = (values2[i]) ? values2[i] : 0;
		
			newValue[i] = lerp(value1, value2, amt);
			
		}
		
		return new BaseVector(...newValue)
	}
}

/**
 * @inheritdoc
 * @class
 * 
 * @classdesc A normal Vector3 value
 */
class Vector3 extends BaseVector {
	constructor(x=0, y=0, z=0) {
		
		super(x, y, z);
		
		this.X = this.values[0];
		this.Y = this.values[1];
		this.Z = this.values[2];
	
	}
}

/**
 * @class
 * 
 * @shortdescription Roblox's CFrame
 * @classdesc CFrame, short for coordinate frame, is a data type that describes a 3D position and orientation
 */
class CFrame {
	
	constructor(x=0, y=0, z=0, R00=0, R01=0, R02=0, R10=0, R11=0, R12=0, R20=0, R21=0, R22=0) {
		
		// Pos
		this.x = x;
		this.y = y;
		this.z = z;
		
		// 3-by-3 Rotation Matrix
		this.R00 = R00;
		this.R01 = R01;
		this.R02 = R02;
		
		this.R10 = R10;
		this.R11 = R11;
		this.R12 = R12;
		
		this.R20 = R20;
		this.R21 = R21;
		this.R22 = R22;
		
		if (x instanceof Vector3) {
			
			this._setXYZFromVector3(x);
		}
	}
	
	/**
	 * @private
	 * 
	 * @param {Vector3} [v3] - Abrv fo Vector3
	 * @param {Number | String} [type] - 0 = XYZ, 1 = RightVector, 2 = UpVector, 3 = LookVector, 4 = XVector, 5 = YVector, 6 = ZVector
	 */
	_setXYZFromVector3(v3, type) {
		
		this.x = v3.x;
		this.y = v3.y;
		this.z = v3.z;
	}
	
	/**
	 * @returns {Vector3}
	 */
	get Position() {
		
		return new Vector3(this.x, this.y, this.z);
	}
	
	/**
	* @param {Vecter3 | Array} x
	*/
	set Position(x) {
		
		if (x instanceof Vector3) {
		
			this._setXYZFromVector3(x);
		}
		else if (x instanceof Array) {
		
			this.x = x[0];
			this.x = x[1];
			this.x = x[2];
		}
	}
}

/**
 * @inheritdoc
 * @class
 * 
 * @shortdescription Colors from 0 - 1
 * @classdesc Color3 is a data type that describes a color using R, G, and B components, which are on the range [0, 1] 
 */
class Color3 extends BaseVector {
	constructor(r, g, b) {
	
		super(r, g, b);
		
		this.R = r;
		this.G = g;
		this.B = b;
	}

  
}

/**
 * @inheritdoc
 * @class
 * 
 * @shortdescription Colors from 0 to 255
 * @classdesc Color3 but in the well-know [0, 255] range
 */
class Color3uint8 extends BaseVector {
	constructor(x, g, b, a = 255) {
		
		super(a, x, g, b);
		
		if (typeof x == "number") {
		
			if (typeof g == "number") {
		
				this.values = [a, x, g, b];
			}
			else {
		
				let argbBuffer = toBytesInt32(x);
		
				let argbDataView = new DataView(argbBuffer);
		
				for (let i = 0; i < argbDataView.byteLength; i++) {
		
		  			this.values[i] = argbDataView.getUint8(i);
				}
		
			}
		
		}
		else if (x instanceof Color3) {
		
			this.values = [a, ...x.values];
		}
		
		this.A = this.values[0];
		this.alpha = this.values[0];
		
		this.R = this.values[1];
		this.G = this.values[2];
		this.B = this.values[3];
		
		this.Color3 = new Color3(this.R, this.G, this.B);
	}
	
	getRGBComponents = () => [this.R, this.G, this.B]
}

/**
 * @class 
 * 
 * @shortdescription Roblox's base object 
 * @classdesc Instance is the base class for all classes in the Roblox class hierarchy. Every other class that the Roblox engine defines inherits all of the members of Instance. 
 */
class Instance {
	constructor() {		
		// Roblox's Vars
		
		/**
		 * Determines if an Instance can be cloned using {@link Instance:Clone} or saved to file.
		 * @shortdescription Can be cloned/saved
		 * @type {Boolean}
		 */
		this.Archivable = true;
		
		/**
		 * [readonly] [notreplicated]
		 * A read-only string representing the class this Instance belongs to
		 * @shortdescription The name of the class
		 * @readonly
		 * @type {String}
		 */
		this.ClassName = this.constructor.name;
		
		/**
		 * A non-unique identifier of the Instance
		 * @type {String}
		 */
		this.Name = this.constructor.name;
		
		/**
		 * Determines the hierarchical parent of the Instance
		 * @type {Instance}
		 */
		this.Parent = null;
		
		/**
		 * [hidden]
		 * A deprecated property that used to protect CoreGui objects
		 * @shortdescription (Deprecated!) Protects CoreGuis
		 * @deprecated
		 * @type {Boolean}
		 */
		this.RobloxLocked = false;
		
		
		// Custom Vars
		
		/**
		 * An array of children
		 * @type {Array<Instance>}
		 */
		this.Children = [];
		
		/**
		 * If the instance is currently destroyed
		 * @shortdescription If the instance is destroyed
		 * @protected
		 * @type {Boolean}
		 */
		this._isDistroyed = false;
		
		/**
		 * The ID Roblox uses to reference objects
		 * @shortdescription Reference Id
		 * @type {String}
		 */
		this.referentId = "";
	}

	set _isDistroyed(bool) {
		if (bool === true) {
			this.Distroy();
		}
	}

	 /** 
	 * This function destroys all of an Instance’s children.
	 * @shortdescription destroy all the children
	 */
	ClearAllChildren() {
		if (Children[0] != null && !this._isDistroyed) {
			
			// gets all the children and calls the distory methode on them
			this.Children.forEach((child) => {
				
				Distroy();
			});
		}
	}
	
	/**
	 * Create a copy of an object and all its descendants, ignoring objects that are not Archivable
	 * @shortdescription Copy the current object
	 * 
	 * @returns {Instance}
	 */
	Clone() {  
		if (!this._isDistroyed || this.Archivable) {
			
			let cloned_instance = Object.assign({}, this);
			
			// clears all the children of the new array
			cloned_instance.Children = [];
			
			this.Children.forEach(Child => {
				
				if (this.Archivable) {
					
					cloned_instance.Children.push(Child);
				}
			});
			
			return cloned_instance
		}
	}
	
	/**
	 * Sets the Instance.Parent property to nil, locks the Instance.Parent property, disconnects all connections and calls Destroy on all children.
	 * @shortdescription Deletes the part completely.
	 */
	Distroy() {
		if (!this._isDistroyed) {
			
			if (this.Parent) {
				
				const index = this.Parent.Children.indexOf(this);
				
				index = index.splice(x, 1);
				
				this.Parent = null;
			}
			
			this.Archivable = false;
			this._isDistroyed = true;
			
			this.ClearAllChildren();
			
			Children = [];
		}
	}
	
	/**
	 * Returns an array containing all of the Instance’s direct children, or every Instance whose Parent is equal to the object.
	 * @shortdescription Returns the children
	 */
	GetChildren = () => {if (!this._isDistroyed && !this.Children) this.Children;}
	
	/** 
	 * The GetDescendants function of an object returns an array that contains all of the descendants of that object. Unlike Instance:GetChildren, which only returns the immediate children of an object, GetDescendants will find every child of the object, every child of those children, and so on and so forth.
	 * @shortdescription returns the tree of descendants
	 * 
	 * @returns {Array<Instance>}
	 */
	GetDescendants() {
		if (!this._isDistroyed) {
		
			let children = this.GetChildren();
			
			let returnChildren = [...children];
			
			children.forEach(child => {
				
				returnChildren.concat(child.GetDescendants());
			});
			
			return returnChildren;
		}
	}
	
	/**
	 * Returns true if the Instance’s class is equivalent to or a subclass of a given class.
	 * @shortdescription Is an instance of a class
	 * 
	 * @param {String} className - The name of the class you want to check
	 * 
	 * @returns {Boolean}
	 */
	IsA = className => !_isDistroyed && this instanceof RoModules.Classes[className]
	
	/**
	 * Returns true if an Instance is an ancestor of the given descendant.
	 * @shortdescription Is an 'AncestorOf' a second Instance
	 * 
	 * @param {Instance} descendant - the Instance you want to check
	 * @returns {Boolean}
	 */
	IsAncestorOf(descendant) {
		
		if (!_isDistroyed) {
			
			let parent = descendant.Parent;
			
			if (parent) {
				
				// returns true if the descendant's parent is the same, otherwise call IsAncestorOf with the descendant's parent as the descendant.
				return (parent === this) ? true : this.IsAncestorOf(parent)
			}
			else {
				
				return false
			}
		
		}
	}
	
	/**
	 * Returns true if an Instance is an ancestor of the given descendant.
	 * @shortdescription Is a 'DescendantOf' a second Instance
	 * 
	 * @param {Instance} ancestor - The Instance you want to check
	 * 
	 * @returns {Boolean} True if the Instance is a descendant of the given ancestor.
	 */
	IsDescendantOf = ancestor => !_isDistroyed && ancestor.IsAncestorOf(this)
}

/**
 * @typedef {import('./Instance.mjs').Instance} Instance
 */

/**
 * @class
 * @inheritdoc
 * 
 * @shortdescription A simple organizer
 * @classdesc A simple container used to hold and organize Roblox objects.
 * Inharates {@link Instance}
 * 
 * @todo Finish short descriptions
 */
class Folder extends Instance {
	constructor() {
		super();
	}
}

/**
 * @inheritdoc
 * @class
 * 
 * @shortdescription Instances with locations
 * @classdesc The base class for all objects that have a physical location in the world, specifically {@link BaseParts} and {@link Model}
 */
class PVInstance extends Instance {
	constructor() {
		super();
	}
}

/**
 * Descriptions from [developer.roblox.com]{@link https://developer.roblox.com/en-us/api-reference/class/BasePart}
 */


/**
 * @class
 * @inheritdoc
 * 
 * @shortdescription Any physical object
 * @classdesc A base class used to make 3d objects 
 * Inharates [PVInstance]{@link PVInstance}
 */
class BasePart extends PVInstance {
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

/**
 * @class
 * @inheritdoc
 * 
 * @deprecated Deprecated by Roblox
 * 
 * @shortdesc Deprecated by Roblox
 * @classdesc The FormFactorPart class is an abstract class
 * Inharates {@link BasePart}
 */
class FormFactorPart extends BasePart {
	constructor() {
		super();
	}
}

/**
 * @typedef {import('../Datatypes/CFrame.mjs').CFrame} CFrame
 * 
 * @typedef {import('./BasePart.mjs').BasePart} PVInstance
 */


/**
 * @inheritdoc
 * @class
 * 
 * @shortdescription An object container
 * @classdesc Models are container objects, meaning they group objects together. They are best used to hold collections of BaseParts and have a number of functions that extend their functionality.
 */
class Model extends PVInstance {
  	constructor() {
	
	    super();
	
	    this.ClassName = "Model";
	
	
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

/**
 * @typedef {import('../Enums/PartType.js').PartType} PartType
 */

/**
 * @inheritdoc
 * @class
 * 
 * @shortdescription A standerd physical object
 * @classdesc A physical object in the Roblox world
 */
class Part extends FormFactorPart {
	constructor() {
	
		super();
		
		this.ClassName = "Part";
		
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

/**
 * @typedef {import('./Player.mjs').Player} Player
 */

/**
 * @class
 * @inheritdoc
 * 
 * @shortdescription The Roblox's client handler
 * @classdesc The Players game service contains only Player objects for presently connected clients to a Roblox game server.
 * Inharates {@link Instance}
 * 
 * @todo Finish short descriptions
 */
class Players extends Instance {
	constructor() {
		
		super();
		
		/**
		 * @type {Boolean}
		 *
		 *  [readonly] [notreplicated]
		 * Indicates whether or not bubble chat is enabled. It is set with the Players:SetChatStyle method.
		 */
		this.BubbleChat;
		
		/**
		 * @type {Boolean} 
		 *
		 *  [notreplicated]
		 * Indicates whether Characters will respawn automatically.
		 */
		this.CharacterAutoLoads;
		
		/**
		 * @type {Boolean} 
		 *
		 *  [readonly] [notreplicated]
		 * Indicates whether or not classic chat is enabled; set by the Players:SetChatStyle method.
		 */
		this.ClassicChat;

		/*
		 * @type {Player} 
		 *
		 *  [readonly] [notreplicated]
		 * The Player that the LocalScript is running for.
		 */		
		this.LocalPlayer;
		
		/*
		 * @type {Number} 
		 *
		 *  [readonly] [notreplicated]
		 * The maximum amount of players that can be in this server.
		 */
		this.MaxPlayers;

		/*
		 * @type {Number} 
		 *
		 *  [hidden]
		 * Players.MaxPlayers for Numberernal use.
		 */
		this.MaxPlayersNumberernal;

		/*
		 * @type {Number}  
		 *
		 *  [readonly] [notreplicated]
		 * The preferred amount of players for this server.
		 */
		this.PreferredPlayers;

		/*
		 * @type {Number}  
		 *
		 *  [hidden]
		 * Players.PreferredPlayers for Numberernal use.
		 */
		this.PreferredPlayersNumberernal;

		/*
		 * @type {Number}  
		 *
		 * Controls the amount of time taken for a players character to respawn
		*/
		this.RespawnTime;
	}
}

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
class Selection extends Instance {
	constructor() {
		super();

		/**
		 * @type {Instance} 
		 *
		 *  [hidden] [readonly] [notreplicated]
		 */
		this.ActiveInstance;

		
		/**
		 * @type {Number} 
		 *
		 *  [readonly] [notreplicated]
		 */
		this.SelectionThickness;
	}
}

/**
 * @inheritdoc
 * @class
 * 
 * @shortdescription Roblox's terrain container
 * @classdesc Create dynamically morphable environments
 * 
 * @todo Finish short descriptions
 */
class Terrain extends BasePart {
	constructor() {
		
		super();
		
		/** 
		 * [notscriptable]
		 * Enables or disables terrain decoration.
		 * @type {Boolean}
		 */
		this.Decoration;
		
		/**
		* [notscriptable]
		* MaterialColors represents the editor for the Material Color feature, and cannot be edited by scripts.
		* To get the color of a material, use: 
		* Terrain:GetMaterialColor
		* To set the color of a material, use: Terrain:SetMaterialColor
		*
		* @type {BinaryString} 
		*/
		this.MaterialColors;
		
		
		
		/**
		* [readonly] [notreplicated]
		* Displays the boundaries of the largest possible editable region.
		* 
		* @type {Region3int16}
		*/
		this.MaxExtents;
		
		/**
		* The tint of the Terrain water.
		* @type {Color3}
		*/
		this.WaterColor;
		
		/**
		* Controls how opaque the Terrain’s water reflections are.
		* 
		* @type {Number}
		*/
		this.WaterReflectance;
		
		/**
		* The transparency of the Terrain water.
		* @type {Number}
		*/
		
		this.WaterTransparency;
		
		/**
		* Sets the maximum height of the Terrain water waves in studs.
		* @type {Number}
		*/ 
		this.WaterWaveSize;
		
		
		/** 
		* Sets how many times the Terrain water waves will move up and down per minute.
		* 
		* @type {Number}
		*/
		this.WaterWaveSpeed;
		
	}
}

/**
 * @typedef {import('./Terrain.mjs').Terrain} Terrain
 */

/**
 * @inheritdoc
 * @class
 * 
 * @shortdescription Roblox's Rendering & Physics Handler
 * @classdec A service in which any objects that are to be rendered in the 3D world exist
 * 
 * @todo Finish short descriptions
 */
class Workspace extends Model {
	constructor() {
		
		super();
		
		this.ClassName = "Workspace";
		
		/**
		 * [notreplicated]
		 * Determines whether assets created by other uses can be sold in the game.
		 * 
		 * @type {Boolean} 
		 */
		this.AllowThirdPartySales = false;
		
		/** 
		 * [notscriptable]
		 * 
		 * @type {NewAnimationRuntimeSetting}
		 */
		this.AnimationWeightedBlendFix;
		
		/** 
		 * @type {ClientAnimatorThrottlingMode}
		 */
		this.ClientAnimatorThrottling;
		
		/** 
		 * [notreplicated]
		 * The Camera object being used by the local player.
		 * 
		 * @type {Camera}
		 */
		this.CurrentCamera;    
		
		/**
		 * [notreplicated]
		 * The amount of time, in seconds, that the game has been running.
		 * 
		 * @type {Number} 
		 */
		this.DistributedGameTime;
		
		/**
		 * Determines the height at which falling BaseParts (and their ancestor Models) are destroyed
		 * 
		 * @type {Number} 
		 */
		this.FallenPartsDestroyHeight;
		
		/**
		 * Determines the acceleration due to gravity applied to falling BaseParts.
		 * 
		 * @type {Number} 
		 */ 
		this.Gravity;
		
		
		/**
		 * [notscriptable]
		 * 
		 * @type {HumanoidOnlySetCollisionsOnStateChange} 
		 */  
		this.HumanoidOnlySetCollisionsOnStateChange;
		
		/**
		 * @type {InterpolationThrottlingMode} 
		 */   
		this.InterpolationThrottling;
		
		/**
		 * [notscriptable]
		 * @type {MeshPartHeadsAndAccessories} 
		 */
		this.MeshPartHeadsAndAccessories;
		
		/**
		 * [hidden] [notreplicated]
		 * 
		 * @type {PhysicsSimulationRate} 
		 */
		this.PhysicsSimulationRate;
		
		/**
		 * [notscriptable]
		 * 
		 * @type {PhysicsSteppingMethod} 
		 */
		this.PhysicsSteppingMethod;
		
		/**
		 * [notscriptable]
		 * 
		 * @type {SignalBehavior} 
		 */ 
		this.SignalBehavior;
		
		/**
		 * Whether content streaming is enabled for the place
		 * 
		 * @type {Boolean} 
		 */
		this.StreamingEnabled;
		
		/**
		 * [notscriptable]
		 * Minimum distance that content will be streamed to players with high priority
		 * 
		 * @type {Number} 
		 */ 
		this.StreamingMinRadius;
		
		/**
		 * [notscriptable]
		 * Whether streaming physics pause mode is active
		 * 
		 * @type {StreamingPauseMode} 
		 */  
		this.StreamingPauseMode;
		
		
		/**
		 * [notscriptable]
		 * Maximum distance that content will be streamed to players
		 * 
		 * @type {Number} 
		 */
		this.StreamingTargetRadius;    
		
		/**
		 * [readonly] [notreplicated]
		 * A reference to the Terrain object parented to the Workspace
		 * 
		 * @type {Terrain} 
		 */   
		this.Terrain;
		
		/**
		 * [notscriptable]
		 * Determines whether parts in different groups set to not collide will ignore collisions and touch events
		 * 
		 * @type {Boolean} 
		 */
		this.TouchesUseCollisionGroups;
	}
}

/**
 * @typedef {import('./Instance.mjs').Instance} Instance
 *
 * @typedef {import('../Datatypes/CFrame.mjs').CFrame} CFrame
 * @typedef {import('../Datatypes/Vector2.mjs').Vector2} Vector2
 *
 * @typedef {import('../Enms/CameraType.mjs').CameraType} CameraType
 * @typedef {import('../Enms/FieldOfViewMode.mjs').FieldOfViewMode} FieldOfViewMode
 */

/**
 * @class
 * @inheritdoc
 * 
 * @shortdescription A 3D veiw-object
 * @classdesc The Camera object defines a view of the 3D game world.
 * Inharates {@link Instance}
 * 
 * @todo Finish short descriptions
 */
class Camera extends Instance {
	constructor() {
		
		super();

		/**
		 * The CFrame of the Camera, defining its position and orientation in the 3D world
		 * @type {CFrame}
		 */
		this.CFrame; 

		/** 
		 * The Humanoid or BasePart that is the Camera's subject
		 * @type {Instance}
		 */
		this.CameraSubject;

		/** 
		 * Specifies the CameraType to be read by the camera scripts
		 * @type {CameraType}
		 */ 
		this.CameraType;

		/**
		 * Sets the angle of the Camera's diagonal field of view.
		 * [notreplicated]
		 * @type {Number}
		 */
		this.DiagonalFieldOfView;

		/**
		 * Sets the angle of the Camera's vertical field of view
		 * @type {Number}
		 */ 
		this.FieldOfView;
		
		/**
		 * Determines the FOV value of the Camera that’s invariant under viewport size changes.
		 * @type {FieldOfViewMode}
		 */
		this.FieldOfViewMode;
		
		/**
		 * Sets the area in 3D space that is prioritized by Roblox’s graphical systems
		 * @type {CFrame}
		 */ 
		this.Focus;
		
		/**
		 * Toggles whether the Camera will automatically track the head motion of a player using a VR device
		 * @type {Boolean}
		 */
		this.HeadLocked;
		
		/**
		 * Sets the scale of the user’s head when using VR
		 * @type {Number}
		 */
		this.HeadScale;
		
		/**
		 * Sets the angle of the Camera's field of view along the longest viewport axis.
		 * [notreplicated]
		 * @type {Number}
		 */
		this.MaxAxisFieldOfView;
		
		/**
		 * Describes the negative z-offset, in studs, of the Camera's near clipping plane
		 * [readonly] [notreplicated]
		 * @type {Number}
		 */
		this.NearPlaneZ;

		
		/**
		 * Describes the dimensions, in pixels, of the client’s viewport
		 * [readonly] [notreplicated]
		 * @type {Vector2}
		 */
		this.ViewportSize;
	}
}

/**
 * @typedef {import('./GuiObject.mjs').GuiObject} GuiObject
 */

/**
 * @class
 * @inheritdoc
 * 
 * @shortdescription Roblox's Gui handler
 * @classdesc The GuiService is a service which currently allows developers to control what GuiObject is currently being selected by the gamepad navigator.
 * Inharates {@link Instance}
 * 
 * @todo Finish short descriptions
 */
class GuiService extends Instance {
	constructor() {
		
		super();
		  
		/**
		 * If the select button on a gamepad will automatically set a GUI as the selected object when the Select button is pressed. Turning this off will mean that Gui navigation will still work if GuiNavigationEnabled is enabled but you will have to set SelectedObject manually to start Gui navigation.
		 * @type {Boolean}
		 */
		this.AutoSelectGuiEnabled;
		
		
		/**
		 * Toggles whether or not objects in the CoreGui can be navigated using a Gamepad.
		 * @type {Boolean} 
		 */
		this.CoreGuiNavigationEnabled;
		
		/**
		 * Used to enable and disable the controller GUI navigation.
		 * @type {Boolean} 
		 */
		this.GuiNavigationEnabled;
		
		/**
		 * [readonly] [notreplicated]
		 * Returns true if any menu of CoreGui is open
		 * @type {Boolean} 
		 */
		this.MenuIsOpen;
		
		
		/**
		 * Sets the GuiObject currently being focused on by the GUI Navigator (used for Gamepads)
		 * @type {GuiObject} 
		 */
		this.SelectedObject;
	}
}

export { BasePart, BaseVector, CFrame, Camera, Color3, Color3uint8, Folder, FormFactorPart, GuiService, Instance, Model, PVInstance, Part, Players, Selection, Terrain, Vector3, Workspace };
