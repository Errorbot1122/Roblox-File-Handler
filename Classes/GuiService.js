const Instance = require('./Instance')

/**
 * @class
 * @inheritdoc
 * 
 * @classdesc The GuiService is a service which currently allows developers to control what GuiObject is currently being selected by the gamepad navigator.
 * Inharates {@link Instance}
 */
class GuiService extends Instance {
  constructor() {
    
    /**
     * @type {Boolean}
     * If the select button on a gamepad will automatically set a GUI as the selected object when the Select button is pressed. Turning this off will mean that Gui navigation will still work if GuiNavigationEnabled is enabled but you will have to set SelectedObject manually to start Gui navigation.
     */
    this.AutoSelectGuiEnabled
    

    /**
     * @type {Boolean} 
     * Toggles whether or not objects in the CoreGui can be navigated using a Gamepad.
     */
    this.CoreGuiNavigationEnabled
    
    /**
     * @type {Boolean} 
     * Used to enable and disable the default controller GUI navigation.
     */
    this.GuiNavigationEnabled
    
    /**
     * @type {Boolean} 
     * [readonly] [notreplicated]
     * Returns true if any menu of CoreGui is open
     */
    this.MenuIsOpen
    

    /**
     * @type {GuiObject} 
     * Sets the GuiObject currently being focused on by the GUI Navigator (used for Gamepads)
     */
    this.SelectedObject
    
  }
}

module.exports = GuiService