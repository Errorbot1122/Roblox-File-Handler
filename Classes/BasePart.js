// mainly from https://developer.roblox.com/en-us/api-reference/class/BasePart

const RoEnums = require('../RoModules.js').Enum

const SurfaceType = RoEnums.SurfaceType
const Material = RoEnums.Material

const PVInstance = require('./PVInstance.js')

const CFrame = require('../Datatypes/CFrame.js')
const Color3 = require('../Datatypes/Color3.js')
const Vector3 = require('../Datatypes/Vector3.js')

class BasePart extends PVInstance {
  constructor() {
    super();
    /**
     * @type {Boolean}
     * Determines whether a part is immovable by physics
     */ 
    this.Anchored = false;

    /**
     * @type {Vector3}
     * [notreplicated]
     * The angular velocity of the part’s assembly
     */ 
    this.AssemblyAngularVelocity;

    /**
     * @type {Vector3}
     * [readonly] [notreplicated]
     * The center of mass of the part’s assembly in world space
     */  
    this.AssemblyCenterOfMass;

    /**
     * @type {Vector3}
     * [notreplicated]
     * The linear velocity of the part’s assemblyworld space
     */   
    this.AssemblyLinearVelocity;
    
    /**
     * @type {Number}
     * [readonly] [notreplicated]
     * The total mass of the part’s assembly
     */    
    this.AssemblyMass;
    
    /**
     * @type {BasePart}
     * [readonly] [notreplicated]
     * A reference to the root part of the assembly
     */ 
    this.AssemblyRootPart;
    
    /**
     * @type {SurfaceType}
     * Determines the type of surface for the Back face of a part (+Z direction)
     */  
    this.BackSurface;

    /**
     * @type {SurfaceType}
     * Determines the type of surface for the Bottom face of a part (-Y direction)
     */
    this.BottomSurface;
    
    /**
     * @type {BrickColor}
     * [notreplicated]
     * Determines the color of a part.
     */ 
    this.BrickColor;

    /**
     * @type {CFrame}
     * Determines the position and rotation of a part in the world
     */  
    this.CFrame;

    /**
     * @type {Boolean}
     * Determines whether a part may collide with other parts.
     */   
    this.CanCollide;

    /**
     * @type {Boolean}
     */  
    this.CanQuery;

    /**
     * @type {Boolean}
     * Determines if the part will trigger Touched/TouchEnded events on other BaseParts with TouchTransmitters
     */   
    this.CanTouch;

    /**
     * @type {Boolean}
     * Determines whether or not a part casts a shadow
     */   
    this.CastShadow;

    /**
     * @type {Vector3} 
     * [readonly] [notreplicated]
     * Describes the world position in which a part’s center of mass is located.
     */ 
    this.CenterOfMass;
    
    /**
     * @type {Number}
     * Describes the automatically-set ID number of a part’s collision group
     */
    this.CollisionGroupId;
    
    /**
     * @type {Color3}
     * [notreplicated]
     * Determines the color of a part.
     */
    this.Color;
    
    /**
     * @type {PhysicalProperties}
     * Determines several physical properties of a part
     */
    this.CustomPhysicalProperties;
    
    /**
     * @type {SurfaceType}
     * Determines the type of surface for the Front face of a part (-Z direction)
     */ 
    this.FrontSurface;
    
    /**
     * @type {SurfaceType}
     * Determines the type of surface for the Left face of a part (-X direction)
     */ 
    this.LeftSurface;
    
    /**
     * @type {Number}
     * [hidden] [notreplicated]
     * Determines a multiplier for BasePart.Transparency that is only visible to the local client
     */  
    this.LocalTransparencyModifier;
    
    /**
     * @type {Boolean}
     * Determines whether a part is selectable in Studio.
     */  
    this.Locked;
    

    /**
     * @type {Number}
     * [readonly] [notreplicated]
     * Describes the mass of the part, the product of its density and volume
     */  
    this.Mass;

    /**
     * @type {Number}
     * Determines whether the part contributes to the total mass or inertia of its rigid body
     */   
    this.Massless;

    /**
     * @type {Material}
     * Determines the texture and default physical properties of a part
     */  
    this.Material;

    /**
     * @type {Vector3}
     * [notreplicated]
     * Describes the position of the part in the world
     */  
    this.Orientation;
    

    /**
     * @type {CFrame}
     * Specifies the offset of the part’s pivot from its CFrame.
     */   
    this.PivotOffset;
    

    /**
     * @type {Vector3}
     * [notreplicated]
     * Describes the position of the part in the world
     */   
    this.Position;
    

     /**
     * @type {Number}
     * [hidden] [readonly] [notreplicated]
     * Time since last recorded physics update
     */    
    this.ReceiveAge;
    

    /**
     * @type {Number}
     * Determines how much a part reflects the skybox.
     */  
    this.Reflectance;

    /**
     * @type {Number}
     * [readonly] [notreplicated]
     * Describes the smallest change in size allowable by the Resize method
     */ 
    this.ResizeIncrement;
    
    /**
     * @type {Faces}
     * [readonly] [notreplicated]
    Describes the faces on which a part may be resized
     */  
    this.ResizeableFaces;

    /**
     * @type {SurfaceType}
     * Determines the type of surface for the Right face of a part (+X direction)
     */ 
    this.RightSurface;
    

    /**
     * @type {Number}
     * The main rule in determining the root part of an assembly
     */  
    this.RootPriority;

    /**
     * @type {Vector3}
     * [notreplicated]
     * The rotation of the part in degrees for the three axes
     */  
    this.Rotation;

    /**
     * @type {Vector3}
     * [notreplicated]
     * Determines the dimensions of a part (length, width, height)
     */  
    this.Size;

    /**
     *  @type {SurfaceType}
     * Determines the type of surface for the Top face of a part (+Y direction)
     */ 
    this.TopSurface;
    
    /**
     * @type {Number}
     * Determines how much a part can be seen through (the inverse of part opacity)
     */ 
    this.Transparency;
    
  }
}

module.exports = BasePart