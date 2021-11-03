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
     * @type {Boolean}
     * [notscriptable]
     * Enables or disables terrain decoration.
     */
  this.Decoration

  /**
   * @type {BinaryString} 
   * [notscriptable]
   * MaterialColors represents the editor for the Material Color feature, and cannot be edited by scripts.
   * To get the color of a material, use: 
   * Terrain:GetMaterialColor
   * To set the color of a material, use: Terrain:SetMaterialColor
   */
  this.MaterialColors
  


  /**
   * @type {Region3int16}
   * [readonly] [notreplicated]
   * Displays the boundaries of the largest possible editable region.
   */
  this.MaxExtents
  
  /**
   * @type {Color3}
   * The tint of the Terrain water.
   */
  this.WaterColor

  /**
   * @type {Number}
   * Controls how opaque the Terrain’s water reflections are.
   */
  this.WaterReflectance
 
  /**
   * @type {Number}
   * The transparency of the Terrain water.
   */

  this.WaterTransparency

  /**
   * @type {Number}
   * Sets the maximum height of the Terrain water waves in studs.
   */ 
  this.WaterWaveSize
  

  /** @type {Number}
   * Sets how many times the Terrain water waves will move up and down per minute.
   */
  this.WaterWaveSpeed
  
  }
}

module.exports = Terrain;