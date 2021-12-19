<h1>Documentation</h1>
This is all the full on documentation for Roblox File Handler

<h1>Table Of Contents</h1>

* [Globle Functions](#functions)
    * [**`reMap:( n  start  stop  newStart  newStop  withinBounds )`**](#reMap):  ***`Number`***  
    * [**`lerp:( start  end  amt )`**](#lerp):  ***`Number`***  
    * [**`toBytesInt32:( num )`**](#toBytesInt32):  ***`Void`***  
    * [**`isXMLTag:( xml_Tag )`**](#isXMLTag):  ***`Boolean`***  *— Valid XML tag checker*
    * [**`isItem:( item )`**](#isItem):  ***`Boolean`***  *— Valid item checker*
    * [**`convertValidInstance:( instance )`**](#convertValidInstance):  ***`Instance`***  *— The all around &#x27;to instance&#x27; converter*
    * [**`findFirstItemByClassName:( itemList  className  parent )`**](#findFirstItemByClassName):  ***`null`***  ***`Item`***  *— Roblox&#x27;s FindFirstChildOfClass, but with items*
    * [**`convertItemToInstance:( item  parent  options )`**](#convertItemToInstance):  ***`Instance`***  ***`Item`***  *— Item &#x3D;&gt; Instance*
    * [**`fileToObject:( path  callback )`**](#fileToObject):  ***`Void`***  *— File &#x3D;&gt; Object*
    * [**`xmlToObject:( xml  callback )`**](#xmlToObject):  ***`Void`***  *— XML &#x3D;&gt; Object*
    * [**`objToInst:( objs )`**](#objToInst):  ***`Void`***  *— Object(s) &#x3D;&gt; Istance(s)*
    * [**`parseFile:( path  callback )`**](#parseFile):  ***`Void`***  *— The main file parser*
* [Classes](#classes)
    * [**`BasePart`**](#BasePart) *— The base class for parts*
    * [**`FormFactorPart`**](#FormFactorPart) 
    * [**`GuiService`**](#GuiService) *— Roblox&#x27;s GuiSevice*
    * [**`Instance`**](#Instance) *— The main Baseclass*
    * [**`Model`**](#Model) *— An Object Contaner*
    * [**`Part`**](#Part) *— A physical object*
    * [**`PVInstance`**](#PVInstance) *— Base class for everthing with a location*
    * [**`Terrain`**](#Terrain) *— Terrain*
    * [**`Workspace`**](#Workspace) *— Rendering / Physics service*
    * [**`BaseVector`**](#BaseVector) *— Base class for vecters*
    * [**`CFrame`**](#CFrame) *— Roblox&#x27;s CFrame*
    * [**`Color3`**](#Color3) *— Colors from 0 - 1*
    * [**`Color3uint8`**](#Color3uint8) *— Colors from 0, 255*
    * [**`Vector3`**](#Vector3) 
* [Enums](#enums)
    * [**`InputType`**](#InputType) 
    * [**`Material`**](#Material) *— Materials*
    * [**`PartType`**](#PartType) *— Shape of a part*
    * [**`SurfaceType`**](#SurfaceType) *— The specific type for a specific surface*
    
# API

## Globle Function <a id="functions" />

### **`reMap:( n  start  stop  newStart  newStop  withinBounds )`** <a id="reMap"></a>


Maps a given range from a specific iterator to a new range.

Credit to [RoyallyFlushed]{@link https://www.roblox.com/users/profile?username&#x3D;RoyallyFlushed} for the code!!! (https://devforum.roblox.com/t/lua-map-command/215342)


**scope**: *global*

* `n` ( *`Number`* ) *— The number you want to map* 
* `start` ( *`Number`* ) *— The starting number of the original range* 
* `stop` ( *`Number`* ) *— The ending number of the original range* 
* `newStart` ( *`Number`* ) *— The starting number of the new range* 
* `newStop` ( *`Number`* ) *— The ending number of the new range* 
* `withinBounds` ( *`Boolean`* ) *— Is forced to be inbetween the new range or not. [Defult: false]* ***(Optional)***

**Returns:**  *`Number`* 
_________________

### **`lerp:( start  end  amt )`** <a id="lerp"></a>


returns the interpolated version inputed range by an amount between 0 and 1. (can go above or below 0 - 1, but not recommended)


**scope**: *global*

* `start` ( *`Number`* ) *— The starting number in the range.* 
* `end` ( *`Number`* ) *— The ending number in the range.* 
* `amt` ( *`Number`* ) *— the amount you want to interpolate between 0 and 1. (can go above or below 0 - 1, but not recommended)* 

**Returns:**  *`Number`* 
_________________

### **`toBytesInt32:( num )`** <a id="toBytesInt32"></a>


**scope**: *global*

* `num` ( *`Number`* ) *— the number you want to convert* 

**Returns:**  *`Void`* 
_________________

### **`isXMLTag:( xml_Tag )`** <a id="isXMLTag"></a>


Check if the xml_Tag is the parse-able/parsed XML Tag


**scope**: *global*

* `xml_Tag` ( *`*`* ) *— The object to check* 

**Returns:**  *`Boolean`* 
_________________

### **`isItem:( item )`** <a id="isItem"></a>


check if the item is the Item type


**scope**: *global*

* `item` ( *`*`* ) *— The object to check* 

**Returns:**  *`Boolean`* 
_________________

### **`convertValidInstance:( instance )`** <a id="convertValidInstance"></a>


converts a Referent Id, Item into a valid Instance


**scope**: *global*

* `instance` ( *`String`*  *`Item`*  *`Instance`* ) *— the instance you want to convert* 

**Returns:**  *`Instance`* 
_________________

### **`findFirstItemByClassName:( itemList  className  parent )`** <a id="findFirstItemByClassName"></a>


Finds the first instance in &#x27;itemList&#x27; with the same class as &#x27;className&#x27;


**scope**: *global*

* `itemList` ( *`Array.&lt;Item&gt;`* ) *— A list of Item objects* 
* `className` ( *`String`* ) *— The name of the className* 
* `parent` ( *`String`*  *`Item`*  *`Instance`* ) *— The item&#x27;s parent* 

**Returns:**  *`null`*  *`Item`* 
_________________

### **`convertItemToInstance:( item  parent  options )`** <a id="convertItemToInstance"></a>


Convert an parsed XML Item into a valid roblox Instance if posible


**scope**: *global*

* `item` ( *`Item`* ) *— The Item you want convert* 
* `parent` ( *`String`*  *`Item`*  *`Instance`* ) *— The item&#x27;s parent* 
* `options` ( *`Object`* ) *— extra options* 

**Returns:**  *`Instance`*  *`Item`* 
_________________

### **`fileToObject:( path  callback )`** <a id="fileToObject"></a>


Convert a file into an object


**scope**: *global*

* `path` ( *`String`* ) *— The file path to convert* 
* `callback` ( *`function`* ) *— The callback function* 

**Returns:**  *`Void`* 
_________________

### **`xmlToObject:( xml  callback )`** <a id="xmlToObject"></a>


Convert a parsed XML file into an object


**scope**: *global*

* `xml` ( *`String`* ) *— The XML data to convert* 
* `callback` ( *`function`* ) *— The callback function* 

**Returns:**  *`Void`* 
_________________

### **`objToInst:( objs )`** <a id="objToInst"></a>


**scope**: *global*

* `objs` ( *`*`* ) *— A valed Item into an instance* 

**Returns:**  *`Void`* 
_________________

### **`parseFile:( path  callback )`** <a id="parseFile"></a>


Convert any RBXL/RBXM/XML File into a parent/child tree of Instances (Just like how roblox dose it)

The callback func&#x27;s params are:

errs: An Array of Errors (0 &#x3D; Read File Error, 1 &#x3D; Parse Error)
newInstences: The new array of instances


**scope**: *global*

* `path` ( *`String`* ) *— The path to the file you want to parse* 
* `callback` ( *`*`* ) *— The callback function* 

**Returns:**  *`Void`* 
_________________


## Classes <a id="classes" />

### BasePart <a id="BasePart" />


<h4> Description </h4>
A base class used to make a 3d objects 
Inharates [PVInstance]{@link PVInstance}

<h4> Fields </h4>

* **Anchored ( `Boolean` )** *— Is immovable*
* **AssemblyAngularVelocity ( `Vector3` )** *— Angular velocity of the part’s assembly*
* **AssemblyCenterOfMass ( `Vector3` )** *— Center of mass of the part’s assembly*
* **AssemblyLinearVelocity ( `Vector3` )** *— Linear velocity of the part’s assembly*
* **AssemblyMass ( `Number` )** *— Mass of the part’s assembly*
* **AssemblyRootPart ( `BasePart` )** *— Root part of the assembly*
* **BackSurface ( `SurfaceType` )** *— The back face&#x27;s SurfaceType*
* **BottomSurface ( `SurfaceType` )** *— The bottom face&#x27;s SurfaceType*
* **BrickColor ( `BrickColor` )** *— The color of the part (Array)*
* **CFrame ( `CFrame` )** *— Position + Rotation Matix of the part*
* **CanCollide ( `Boolean` )** *— If collsions get calulated*
* **CanQuery ( `Boolean` )** 
* **CanTouch ( `Boolean` )** *— If the part can send touch events*
* **CastShadow ( `Boolean` )** *— If part can cast a shadow*
* **CenterOfMass ( `Vector3` )** *— The location the center of mass*
* **CollisionGroupId ( `Number` )** *— The id for roblox collison groups*
* **Color ( `Color3` )** *— The real color of the part*
* **CustomPhysicalProperties ( `PhysicalProperties` )** 
* **FrontSurface ( `SurfaceType` )** *— The front face&#x27;s SurfaceType*
* **LeftSurface ( `SurfaceType` )** *— The left face&#x27;s SurfaceType*
* **LocalTransparencyModifier ( `Number` )** *— A multiplier for BasePart.Transparency*
* **Locked ( `Boolean` )** *— If part is selectable in Studio*
* **Mass ( `Number` )** 
* **Massless ( `Number` )** *— Negates the mass*
* **Material ( `Material` )** *— The texture and physical properties*
* **Orientation ( `Vector3` )** *— Rotation in Tait–Bryan angles*
* **PivotOffset ( `CFrame` )** *— The pivit point for the CFrame*
* **Position ( `Vector3` )** 
* **ReceiveAge ( `Number` )** *— Time since last recorded physics update*
* **Reflectance ( `Number` )** *— How much the part reflects the skybox*
* **ResizeIncrement ( `Number` )** *— The minimum change in size*
* **ResizeableFaces ( `Faces` )** *— Which faces may be resized*
* **RightSurface ( `SurfaceType` )** *— The right face&#x27;s SurfaceType*
* **RootPriority ( `Number` )** 
* **Rotation ( `Vector3` )** *— Rotation using Euler angles*
* **Size ( `Vector3` )** 
* **TopSurface ( `SurfaceType` )** *— The top face&#x27;s SurfaceType*
* **Transparency ( `Number` )** *— How see-through is the part*




_________________

### FormFactorPart <a id="FormFactorPart" />


<h4> Description </h4>
The FormFactorPart class is an abstract class
Inharates {@link BasePart}

<h4> Fields </h4>





_________________

### GuiService <a id="GuiService" />


<h4> Description </h4>
The GuiService is a service which currently allows developers to control what GuiObject is currently being selected by the gamepad navigator.
Inharates {@link Instance}

<h4> Fields </h4>

* **AutoSelectGuiEnabled ( `Boolean` )** 
* **CoreGuiNavigationEnabled ( `Boolean` )** 
* **GuiNavigationEnabled ( `Boolean` )** 
* **MenuIsOpen ( `Boolean` )** 
* **SelectedObject ( `GuiObject` )** 




_________________

### Instance <a id="Instance" />


<h4> Description </h4>
Instance is the base class for all classes in the Roblox class hierarchy. Every other class that the Roblox engine defines inherits all of the members of Instance.

<h4> Fields </h4>

* **Archivable ( `Boolean` )** *— Can be cloned / saved*
* **ClassName ( `String` )** *— The name of the class*
* **Name ( `String` )** 
* **Parent ( `Instance` )** 
* **RobloxLocked ( `Boolean` )** *— (Deprecated!) Protects CoreGuis*
* **Children ( `Array.&lt;Instance&gt;` )** 
* **_isDistroyed ( `Boolean` )** *— If the instance is distroyed*
* **referentId ( `String` )** *— Refrence Id*
* **GetChildren ( )** *— Returns the children*
* **IsA ( )** *— Is an &#x27;instanceof&#x27; a class*
* **IsDescendantOf ( )** *— Is an &#x27;DescendantOf&#x27; a second Instance*



<h4> Methods </h4>

**`ClearAllChildren()`:**  *`Void`* (destroy all the children)

<small>

<p>This function destroys all of an Instance’s children.</p>


<p><b>scope:</b> <em>instance</em></p>


<ul>
</ul>

<b>Returns:</b>  <em><code>Void</em></code> 

</small>

_________________

**`Clone()`:**  *`Instance`* (Copy the current object)

<small>

<p>Create a copy of an object and all its descendants, ignoring objects that are not Archivable</p>


<p><b>scope:</b> <em>instance</em></p>


<ul>
</ul>

<b>Returns:</b>  <em><code>Instance</code></em> 

</small>

_________________

**`Distroy()`:**  *`Void`* (Delets the part completly.)

<small>

<p>Sets the Instance.Parent property to nil, locks the Instance.Parent property, disconnects all connections and calls Destroy on all children.</p>


<p><b>scope:</b> <em>instance</em></p>


<ul>
</ul>

<b>Returns:</b>  <em><code>Void</em></code> 

</small>

_________________

**`GetDescendants()`:**  *`Array.&lt;Instance&gt;`* (returns the tree of descendants)

<small>

<p>The GetDescendants function of an object returns an array that contains all of the descendants of that object. Unlike Instance:GetChildren, which only returns the immediate children of an object, GetDescendants will find every child of the object, every child of those children, and so on and so forth.</p>


<p><b>scope:</b> <em>instance</em></p>


<ul>
</ul>

<b>Returns:</b>  <em><code>Array.&lt;Instance&gt;</code></em> 

</small>

_________________

**`IsAncestorOf( descendant )`:**  *`Boolean`* (Is an &#x27;AncestorOf&#x27; a second Instance)

<small>

<p>Returns true if an Instance is an ancestor of the given descendant.</p>


<p><b>scope:</b> <em>instance</em></p>

<code>descendant</code> ( <b><code>Instance</code></b> )  <b>— the Instance you want to check</b> 

<ul>
<li> <code>descendant</code> ( <b><code>Instance</code></b> )  <b>— the Instance you want to check</b> </li>
</ul>

<b>Returns:</b>  <em><code>Boolean</code></em> 

</small>

_________________


_________________

### Model <a id="Model" />


<h4> Description </h4>
Models are container objects, meaning they group objects together. They are best used to hold collections of BaseParts and have a number of functions that extend their functionality.

<h4> Fields </h4>

* **WorldPivot ( `CFrame` )** *— The pivot point for thr modle*
* **PrimaryPart ( `BasePart` )** *— The main part of the model*
* **LevelOfDetail ( `ModelLevelOfDetail` )** 




_________________

### Part <a id="Part" />


<h4> Description </h4>
A physical object in the Roblox world

<h4> Fields </h4>

* **Shape ( `PartType` )** *— The shape of the part*




_________________

### PVInstance <a id="PVInstance" />


<h4> Description </h4>
The base class for all objects that have a physical location in the world, specifically {@link BaseParts} and {@link Model}

<h4> Fields </h4>





_________________

### Terrain <a id="Terrain" />


<h4> Description </h4>
Create dynamically morphable environments

<h4> Fields </h4>

* **Decoration ( `Boolean` )** 
* **MaterialColors ( `BinaryString` )** 
* **MaxExtents ( `Region3int16` )** 
* **WaterColor ( `Color3` )** 
* **WaterReflectance ( `Number` )** 
* **WaterTransparency ( `Number` )** 
* **WaterWaveSize ( `Number` )** 
* **WaterWaveSpeed ( `Number` )** 




_________________

### Workspace <a id="Workspace" />


<h4> Fields </h4>

* **AllowThirdPartySales ( `Boolean` )** 
* **AnimationWeightedBlendFix ( `NewAnimationRuntimeSetting` )** 
* **ClientAnimatorThrottling ( `ClientAnimatorThrottlingMode` )** 
* **CurrentCamera ( `Camera` )** 
* **DistributedGameTime ( `Number` )** 
* **FallenPartsDestroyHeight ( `Number` )** 
* **Gravity ( `Number` )** 
* **HumanoidOnlySetCollisionsOnStateChange ( `HumanoidOnlySetCollisionsOnStateChange` )** 
* **InterpolationThrottling ( `InterpolationThrottlingMode` )** 
* **MeshPartHeadsAndAccessories ( `MeshPartHeadsAndAccessories` )** 
* **PhysicsSimulationRate ( `PhysicsSimulationRate` )** 
* **PhysicsSteppingMethod ( `PhysicsSteppingMethod` )** 
* **SignalBehavior ( `SignalBehavior` )** 
* **StreamingEnabled ( `Boolean` )** 
* **StreamingMinRadius ( `Number` )** 
* **StreamingPauseMode ( `StreamingPauseMode` )** 
* **StreamingTargetRadius ( `Number` )** 
* **Terrain ( `Terrain` )** 
* **TouchesUseCollisionGroups ( `Boolean` )** 




_________________

### BaseVector <a id="BaseVector" />


<h4> Description </h4>
The base class for all Vecter Objects in this packege

<h4> Fields </h4>




<h4> Methods </h4>

**`lerp( values2  amt )`:**  *`BaseVector`* ()

<small>

<p><b>scope:</b> <em>instance</em></p>

<code>values2</code> ( <b><code>Number</code></b> )  
<code>amt</code> ( <b><code>Number</code></b> )  

<ul>
<li> <code>values2</code> ( <b><code>Number</code></b> )  </li>
<li> <code>amt</code> ( <b><code>Number</code></b> )  </li>
</ul>

<b>Returns:</b>  <em><code>BaseVector</code></em> 

</small>

_________________


_________________

### CFrame <a id="CFrame" />


<h4> Description </h4>
CFrame, short for coordinate frame, is a data type that describes a 3D position and orientation

<h4> Fields </h4>

* **Position ( )** 
* **Position ( )** 




_________________

### Color3 <a id="Color3" />


<h4> Description </h4>
Color3 is a data type that describes a color using R, G and B components, which are on the range [0, 1]

<h4> Fields </h4>





_________________

### Color3uint8 <a id="Color3uint8" />


<h4> Description </h4>
Color3 but in the well know [0, 255] range

<h4> Fields </h4>





_________________

### Vector3 <a id="Vector3" />


<h4> Description </h4>
An normel Vector3 value

<h4> Fields </h4>





_________________


_________________

### Enums <a id="enums" />

### **`InputType`** <a id="InputType"></a>

The InputType Enum controls the SurfaceInputs of Part. Several parameters here are left-overs from 2005, before Roblox was a multiplayer game, and have no known functionality.

Animation of the Sin InputType:

![Animation of the Sin InputType](https://developer.roblox.com/assets/bltf0a4aa99ce7d70e1/Enum_InputType_Sin.gif)

<h4>Properties</h4>

| Name | Type | Value | Description |
| :---: | :---: | :---: | :--- |
| NoInput |  | 0 |  Behaves like a weld, and does absolutely nothing.  |
| Constant |  | 12 |  Rotate at a constant velocity of BasePart ParamB.  |
| Sin |  | 13 |    |

_________________

### **`Material`** <a id="Material"></a>

All of Roblox&#x27;s materials

<h4>Properties</h4>

| Name | Type | Value | Description |
| :---: | :---: | :---: | :--- |
| Plastic |  | 256 |  Applies to BasPart only.  |
| Wood |  | 512 |  Applies to BasPart only.  |
| Slate |  | 800 |  Applies to BasPart and Terrain.  |
| Concrete |  | 816 |  Applies to BasPart and Terrain.  |
| CorrodedMetal |  | 1040 |  Applies to BasPart only.  |
| DiamondPlate |  | 1056 |  Applies to BasPart only.  |
| Foil |  | 1072 |  Applies to BasPart only.  |
| Grass |  | 1280 |  Applies to BasPart and Terrain.  |
| Ice |  | 1536 |  Applies to BasPart and Terrain.  |
| Marble |  | 784 |  Applies to BasPart only.  |
| Granite |  | 832 |  Applies to BasPart only.  |
| Brick |  | 848 |  Applies to BasPart and Terrain.  |
| Pebble |  | 864 |  Applies to BasPart only.  |
| Sand |  | 1296 |  Applies to BasPart and Terrain.  |
| Fabric |  | 1312 |  Applies to BasPart only.  |
| SmoothPlastic |  | 272 |  Applies to BasPart only.  |
| Metal |  | 1088 |  Applies to BasPart only.  |
| WoodPlanks |  | 528 |  Applies to BasPart and Terrain.  |
| Cobblestone |  | 880 |  Applies to BasPart and Terrain.  |
| Air |  | 1792 |  Applies to Terrain only.  |
| Water |  | 2048 |  Applies to Terrain only.  |
| Rock |  | 896 |  Applies to Terrain only.  |
| Glacier |  | 1552 |  Applies to Terrain only.  |
| Snow |  | 1328 |  Applies to Terrain only.  |
| Sandstone |  | 912 |  Applies to Terrain only.  |
| Mud |  | 1344 |  Applies to Terrain only.  |
| Basalt |  | 788 |  Applies to Terrain only.  |
| Ground |  | 1360 |  Applies to Terrain only.  |
| CrackedLava |  | 804 |  Applies to Terrain only.  |
| Neon |  | 288 |  Applies to BasPart only.  |
| Glass |  | 1568 |  Applies to BasPart only.  |
| Asphalt |  | 1376 |  Applies to Terrain only.  |
| LeafyGrass |  | 1284 |  Applies to Terrain only.  |
| Salt |  | 1392 |  Applies to Terrain only.  |
| Limestone |  | 820 |  Applies to Terrain only.  |
| Pavement |  | 836 |  Applies to Terrain only.  |
| ForceField |  | 1584 |  Applies to BasPart only;  |

_________________

### **`PartType`** <a id="PartType"></a>

The PartType Enum controls the {@link Part.Shape} of an object. 

Block, sphere, and cylinder parts:

![Block, sphere, and cylinder parts](https://developer.roblox.com/assets/bltcb9ef55958be7a0e/PartTypes.jpg)

<h4>Properties</h4>

| Name | Type | Value | Description |
| :---: | :---: | :---: | :--- |
| Ball |  | 0 |  A ball shaped part  |
| Block |  | 1 |  A block shaped part  |
| Cylinder |  | 2 |  A cylinder shaped part  |

_________________

### **`SurfaceType`** <a id="SurfaceType"></a>

Used to determine how a surface should be displayed on a part and how automatic surface joints should behave.

<h4>Properties</h4>

| Name | Type | Value | Description |
| :---: | :---: | :---: | :--- |
| Smooth |  | 0 |  Makes the side appear without any surface detail (except for outlines)  |
| Glue |  | 1 |  Makes the side appear with thick diagonal &quot;X&quot;s  |
| Weld |  | 2 |  Makes the side appear with thick diagonal &quot;X&quot;s  |
| Studs |  | 3 |  Makes the side appear with square studs  |
| Inlet |  | 4 |  Makes the side appear with holes where studs would be  |
| Universal |  | 5 |  Makes the side appear with both Studs and Inlets in a checker pattern  |
| Hinge |  | 6 |  Makes the side appear with a yellow hinge. Any part connected to this hinge will stick to the side and rotate using physics, however, using HingeConstraint to join parts is preferred  |
| Motor |  | 7 |  Acts the same as a Hinge, but has a grey ring around it and automatically rotates any part connected to it, however, using HingeConstraint to join parts is preferred  |
| SteppingMotor |  | 8 |  Functions identically to a motor. It may have functioned differently in the past, but that functionality no longer seems to exist  |
| SmoothNoOutlines |  | 10 |  Same as Smooth, but removes the outlines of the surface  |

_________________


<small><b>Last Updated:</b> Sun Dec 19 2021 20:41:07 GMT+0000 (Coordinated Universal Time).</small>