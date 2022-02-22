
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

}
Object.freeze(InputType);

module.exports = InputType