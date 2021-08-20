
/**
 * @enum {Number}
 */
const InputType = {
  /**  Behaves like a weld, and does absolutely nothing. */
  NoInput: 0,	

  /** Rotate at a constant velocity of BasePart ParamB. */
  Constant: 12,

  /**
   * Rotate at a velocity of:
   * 
   * @example ParamA * math.sin(game.Workspace.DistributedGameTime * ParamB).
   * 
   * BasePart ParamA will determine the maximum speed at which the part will spin, and BasePart ParamB will determine how frequently it changes direction.
*/
  Sin:13	

}

module.exports = InputType