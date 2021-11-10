const RoModules = require('../dont_doc/RoModules')

/**
 * @class 
 * @classdesc Instance is the base class for all classes in the Roblox class hierarchy. Every other class that the Roblox engine defines inherits all of the members of Instance. 
 */
class Instance {
  constructor() {

    // Roblox's Vars

    /**
     * Determines if an Instance can be cloned using {@link Instance:Clone} or saved to file.
     * 
     * @type {Boolean}
     */
    this.Archivable = true

    /**
     * [readonly] [notreplicated]
     * A read-only string representing the class this Instance belongs to
     * 
     * @readonly
     * @type {String}
     */
    this.ClassName = "Instance"

    /**
     * A non-unique identifier of the Instance
     * 
     * @type {String}
     */
    this.Name = ""

    /**
     * Determines the hierarchical parent of the Instance
     * @type {Instance}
     */
    this.Parent = null

    /**
     * [hidden]
     * A deprecated property that used to protect CoreGui objects
     * 
     * @type {Boolean}
     */
    this.RobloxLocked = false


    // Custom Vars
    
    /**
     * An array of children
     * 
     * @type {Array<Instance>}
     */
    this.Children = []

    /**
     * If the object si distroyed
     * 
     * @protected
     * @type {Boolean}
     */
    this._isDistroyed = false

    /**
     * @type {String}
     */
    this.referentId = ""
  }

  set _isDistroyed(bool) {
    if (bool === true) {
      this.Distroy()
    }
  }

  /** This function destroys all of an Instance’s children. */
  ClearAllChildren() {
    if (Children[0] != null && !this._isDistroyed) {
      
      // gets all the children and calls the distory methode on them
      this.Children.forEach((child) => {
        
        child:Distroy()
      });
    }
  }

  /** Create a copy of an object and all its descendants, ignoring objects that are not Archivable */
  Clone() {  
    if (!this._isDistroyed || this.Archivable) {
      
      let cloned_instance = Object.assign({}, this);

      // clears all the children of the new array
      cloned_instance.Children = []

      this.Children.forEach(Child => {
        
        if (this.Archivable) {
          
          cloned_instance.Children.push(Child)
        }
      });

      return cloned_instance
    }
  }

  Distroy() {
    if (!this._isDistroyed) {

      this.Parent = null
      this.Archivable = false
      this._isDistroyed = true

      this.ClearAllChildren()

      Children = []
    }
  }

  GetChildren() {
    if (!this._isDistroyed || !this.Children || !(this.Children == [])) {

      return this.Children
    }
  }

  /** The GetDescendants function of an object returns an array that contains all of the descendants of that object. Unlike Instance:GetChildren, which only returns the immediate children of an object, GetDescendants will find every child of the object, every child of those children, and so on and so forth. */
  GetDescendants() {
    if (!this._isDistroyed) {

      let children = this.GetChildren()

      let returnChildren = [...children]

      children.forEach(child => {

        returnChildren.concat(child.GetDescendants())
      })

      return returnChildren
    }
  }

  IsA(className) {

    if (!_isDistroyed) {

      return this instanceof RoModules.Classes[className]
    }
  }

  IsAncestorOf(descendant) {
    
    if (!_isDistroyed) {

      let parent = descendant.Parent

      if (parent) {
        
        // returns true if the descendant's parent is the same, otherwise call IsAncestorOf with the descendant's parent as the descendant.
        return (parent === this) ? true : this.IsAncestorOf(parent)
      }
      else {

        return false
      }

    }
  }


  /**
   * @param {Instance} ancestor - The ancestor Instance.
   * 
   * @returns {Boolean} True if the Instance is a descendant of the given ancestor.
   */
  IsDescendantOf(ancestor) {

    if (!_isDistroyed) {

      return ancestor.IsAncestorOf(this)
    }

  }
 
}

module.exports = Instance