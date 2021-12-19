const Instance = require('./Instance')

/**
 * @class
 * @inheritdoc
 * 
 * @shortdescription Roblox's GuiSevice
 * @classdesc The GuiService is a service which currently allows developers to control what GuiObject is currently being selected by the gamepad navigator.
 * Inharates {@link Instance}
 * 
 * @todo Finish shortdescriptions
 */
class GuiService extends Instance {
  constructor() {
    
    /**
     * If the select button on a gamepad will automatically set a GUI as the selected object when the Select button is pressed. Turning this off will mean that Gui navigation will still work if GuiNavigationEnabled is enabled but you will have to set SelectedObject manually to start Gui navigation.
     * @type {Boolean}
     */
    this.AutoSelectGuiEnabled
    

    /**
     * Toggles whether or not objects in the CoreGui can be navigated using a Gamepad.
     * @type {Boolean} 
     */
    this.CoreGuiNavigationEnabled
    
    /**
     * Used to enable and disable the default controller GUI navigation.
     * @type {Boolean} 
     */
    this.GuiNavigationEnabled
    
    /**
     * [readonly] [notreplicated]
     * Returns true if any menu of CoreGui is open
     * @type {Boolean} 
     */
    this.MenuIsOpen
    

    /**
     * Sets the GuiObject currently being focused on by the GUI Navigator (used for Gamepads)
     * @type {GuiObject} 
     */
    this.SelectedObject
  }
}

module.exports = GuiService