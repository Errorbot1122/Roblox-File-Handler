const BasePart = require('./BasePart.js')

/**
 * @inheritdoc
 * @class
 * 
 * @classdesc Create dynamically morphable environments
 */
class Terrain extends BasePart {
  constructor() {
    /** 
     * [notscriptable]
     * Enables or disables terrain decoration.
     * @type {Boolean}
     */
  this.Decoration

  /**
   * [notscriptable]
   * MaterialColors represents the editor for the Material Color feature, and cannot be edited by scripts.
   * To get the color of a material, use: 
   * Terrain:GetMaterialColor
   * To set the color of a material, use: Terrain:SetMaterialColor
   *
   * @type {BinaryString} 
   */
  this.MaterialColors
  


  /**
   * [readonly] [notreplicated]
   * Displays the boundaries of the largest possible editable region.
   * 
   * @type {Region3int16}
   */
  this.MaxExtents
  
  /**
   * The tint of the Terrain water.
   * @type {Color3}
   */
  this.WaterColor

  /**
   * Controls how opaque the Terrain’s water reflections are.
   * 
   * @type {Number}
   */
  this.WaterReflectance
 
  /**
   * The transparency of the Terrain water.
   * @type {Number}
   */

  this.WaterTransparency

  /**
   * Sets the maximum height of the Terrain water waves in studs.
   * @type {Number}
   */ 
  this.WaterWaveSize
  

  /** 
   * Sets how many times the Terrain water waves will move up and down per minute.
   * 
   * @type {Number}
   */
  this.WaterWaveSpeed
  
  }
}

module.exports = Terrain;