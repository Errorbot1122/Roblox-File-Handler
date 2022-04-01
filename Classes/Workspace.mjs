/**
 * @typedef {import('./Terrain.mjs').Terrain} Terrain
 */

import { Model } from './Model.mjs'

/**
 * @inheritdoc
 * @class
 * 
 * @shortdescription Roblox's Rendering & Physics Handler
 * @classdec A service in which any objects that are to be rendered in the 3D world exist
 * 
 * @todo Finish short descriptions
 */
export class Workspace extends Model {
	constructor() {
		
		super();
		
		this.ClassName = "Workspace"
		
		/**
		 * [notreplicated]
		 * Determines whether assets created by other uses can be sold in the game.
		 * 
		 * @type {Boolean} 
		 */
		this.AllowThirdPartySales = false
		
		/** 
		 * [notscriptable]
		 * 
		 * @type {NewAnimationRuntimeSetting}
		 */
		this.AnimationWeightedBlendFix
		
		/** 
		 * @type {ClientAnimatorThrottlingMode}
		 */
		this.ClientAnimatorThrottling
		
		/** 
		 * [notreplicated]
		 * The Camera object being used by the local player.
		 * 
		 * @type {Camera}
		 */
		this.CurrentCamera    
		
		/**
		 * [notreplicated]
		 * The amount of time, in seconds, that the game has been running.
		 * 
		 * @type {Number} 
		 */
		this.DistributedGameTime
		
		/**
		 * Determines the height at which falling BaseParts (and their ancestor Models) are destroyed
		 * 
		 * @type {Number} 
		 */
		this.FallenPartsDestroyHeight
		
		/**
		 * Determines the acceleration due to gravity applied to falling BaseParts.
		 * 
		 * @type {Number} 
		 */ 
		this.Gravity
		
		
		/**
		 * [notscriptable]
		 * 
		 * @type {HumanoidOnlySetCollisionsOnStateChange} 
		 */  
		this.HumanoidOnlySetCollisionsOnStateChange
		
		/**
		 * @type {InterpolationThrottlingMode} 
		 */   
		this.InterpolationThrottling
		
		/**
		 * [notscriptable]
		 * @type {MeshPartHeadsAndAccessories} 
		 */
		this.MeshPartHeadsAndAccessories
		
		/**
		 * [hidden] [notreplicated]
		 * 
		 * @type {PhysicsSimulationRate} 
		 */
		this.PhysicsSimulationRate
		
		/**
		 * [notscriptable]
		 * 
		 * @type {PhysicsSteppingMethod} 
		 */
		this.PhysicsSteppingMethod
		
		/**
		 * [notscriptable]
		 * 
		 * @type {SignalBehavior} 
		 */ 
		this.SignalBehavior
		
		/**
		 * Whether content streaming is enabled for the place
		 * 
		 * @type {Boolean} 
		 */
		this.StreamingEnabled
		
		/**
		 * [notscriptable]
		 * Minimum distance that content will be streamed to players with high priority
		 * 
		 * @type {Number} 
		 */ 
		this.StreamingMinRadius
		
		/**
		 * [notscriptable]
		 * Whether streaming physics pause mode is active
		 * 
		 * @type {StreamingPauseMode} 
		 */  
		this.StreamingPauseMode
		
		
		/**
		 * [notscriptable]
		 * Maximum distance that content will be streamed to players
		 * 
		 * @type {Number} 
		 */
		this.StreamingTargetRadius    
		
		/**
		 * [readonly] [notreplicated]
		 * A reference to the Terrain object parented to the Workspace
		 * 
		 * @type {Terrain} 
		 */   
		this.Terrain
		
		/**
		 * [notscriptable]
		 * Determines whether parts in different groups set to not collide will ignore collisions and touch events
		 * 
		 * @type {Boolean} 
		 */
		this.TouchesUseCollisionGroups
	}
}