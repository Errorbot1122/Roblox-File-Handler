const Model = require('./Model.js')

class Workspace extends Model {
  constructor() {
    
    super();
    
    this.ClassName = "Workspace"

    /**
     * @type {Boolean} 
     * [notreplicated]
    Determines whether assets created by other uses can be sold in the game.
     */
    this.AllowThirdPartySales = false
    
    /** @type {NewAnimationRuntimeSetting}
     * [notscriptable]
     */
    this.AnimationWeightedBlendFix
    
    /** 
     * @type {ClientAnimatorThrottlingMode}
     */
    this.ClientAnimatorThrottling

    /** 
     * @type {Camera}
     * [notreplicated]
    The Camera object being used by the local player.
     */
    this.CurrentCamera    

    /**
     * @type {Number} 
     * [notreplicated]
     * The amount of time, in seconds, that the game has been running.
     */
    this.DistributedGameTime

    /**
     * @type {Number} 
     * Determines the height at which falling BaseParts (and their ancestor Models) are destroyed
     */
    this.FallenPartsDestroyHeight
    
    /**
     * @type {Number} 
     * Determines the acceleration due to gravity applied to falling BaseParts.
     */ 
    this.Gravity
    

    /**
     * @type {HumanoidOnlySetCollisionsOnStateChange} 
     * [notscriptable]
     */  
    this.HumanoidOnlySetCollisionsOnStateChange
    
    /**
     * @type {InterpolationThrottlingMode} 
     */   
    this.InterpolationThrottling

    /**
     * @type {MeshPartHeadsAndAccessories} 
     * [notscriptable]
     */
    this.MeshPartHeadsAndAccessories

    /**
     * @type {PhysicsSimulationRate} 
     * [hidden] [notreplicated]
     */
    this.PhysicsSimulationRate
    
    /**
     * @type {PhysicsSteppingMethod} 
     * [notscriptable]
     */
    this.PhysicsSteppingMethod

    /**
     * @type {SignalBehavior} 
     * [notscriptable]
     */ 
    this.SignalBehavior

    /**
     * @type {Boolean} 
     * Whether content streaming is enabled for the place
     */
    this.StreamingEnabled

    /**
     * @type {Number} 
     * [notscriptable]
     * Minimum distance that content will be streamed to players with high priority
     */ 
    this.StreamingMinRadius
    
    /**
     * @type {StreamingPauseMode} 
     * [notscriptable]
     * Whether streaming physics pause mode is active
     */  
    this.StreamingPauseMode
    

    /**
     * @type {Number} 
     * [notscriptable]
     * Maximum distance that content will be streamed to players
     */
    this.StreamingTargetRadius    

    /**
     * @type {Terrain} 
     * [readonly] [notreplicated]
     * A reference to the Terrain object parented to the Workspace
     */   
    this.Terrain
    
    /**
     * @type {Boolean} 
     * [notscriptable]
     * Determines whether parts in different groups set to not collide will ignore collisions and touch events
     */
    this.TouchesUseCollisionGroups
  }
}

module.exports = Workspace;