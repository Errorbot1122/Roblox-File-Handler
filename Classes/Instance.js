const RoModules = require('../RoModules')

class Instance {
  constructor() {

    // Roblox's Vars

    /**
     * @type {Boolean}
     * Determines if an Instance can be cloned using Instance:Clone or saved to file.
     */
    this.Archivable = true

    /**
     * @protected
     * @readonly
     * @type {String}
     * [readonly] [notreplicated]
     * A read-only string representing the class this Instance belongs to
     */
    this.ClassName = "Instance"

    /**
     * @type {String}
     * A non-unique identifier of the Instance
     */
    this.Name = ""

    /**
     * @type {Instance}
     * Determines the hierarchical parent of the Instance
     */
    this.Parent = null

    /**
     * @type {Boolean}
     * [hidden]
     * A deprecated property that used to protect CoreGui objects
     */
    this.RobloxLocked = false


    // My Vars
    
    /**
     * @type {Array<Instance>}
     * An array of children
     */
    this.Children = []

    /**
     * @type {Boolean}
     * 
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
 
}

module.exports = Instance