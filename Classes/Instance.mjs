/**
 * @class 
 * 
 * @shortdescription The base Roblox class
 * @classdesc Instance is the base class for all classes in the Roblox class hierarchy. Every other class that the Roblox engine defines inherits all of the members of Instance. 
 */
export default class Instance {
	constructor() {
		
		// Roblox's Vars
		
		/**
		 * Determines if an Instance can be cloned using {@link Instance:Clone} or saved to file.
		 * @shortdescription Can be cloned/saved
		 * 
		 * @type {Boolean}
		 */
		this.Archivable = true
		
		/**
		 * [readonly] [notreplicated]
		 * A read-only string representing the class this Instance belongs to
		 * @shortdescription The name of the class
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
		 * @shortdescription (Deprecated!) Protects CoreGuis
		 * 
		 * @deprecated
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
		 * If the instance is currently destroyed
		 * @shortdescription If the instance is destroyed
		 * 
		 * @protected
		 * @type {Boolean}
		 */
		this._isDistroyed = false
		
		/**
		 * The ID Roblox uses to reference objects
		 * @shortdescription Reference Id
		 * 
		 * @type {String}
		 */
		this.referentId = ""
	}

	set _isDistroyed(bool) {
		if (bool === true) {
			this.Distroy()
		}
	}

	 /** 
	 * This function destroys all of an Instance’s children.
	 * @shortdescription destroy all the children
	 */
	ClearAllChildren() {
		if (Children[0] != null && !this._isDistroyed) {
			
			// gets all the children and calls the distory methode on them
			this.Children.forEach((child) => {
				
				child:Distroy()
			});
		}
	}
	
	/**
	 * Create a copy of an object and all its descendants, ignoring objects that are not Archivable
	 * @shortdescription Copy the current object
	 * 
	 * @returns {Instance}
	 */
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
	
	/**
	 * Sets the Instance.Parent property to nil, locks the Instance.Parent property, disconnects all connections and calls Destroy on all children.
	 * @shortdescription Deletes the part completely.
	 */
	Distroy() {
		if (!this._isDistroyed) {
			
			if (this.Parent) {
				
				const index = this.Parent.Children.indexOf(this);
				
				index = index.splice(x, 1);
				
				this.Parent = null;
			}
			
			this.Archivable = false;
			this._isDistroyed = true;
			
			this.ClearAllChildren();
			
			Children = [];
		}
	}
	
	/**
	 * Returns an array containing all of the Instance’s direct children, or every Instance whose Parent is equal to the object.
	 * @shortdescription Returns the children
	 */
	GetChildren = () => {if (!this._isDistroyed && !this.Children) this.Children}
	
	/** 
	 * The GetDescendants function of an object returns an array that contains all of the descendants of that object. Unlike Instance:GetChildren, which only returns the immediate children of an object, GetDescendants will find every child of the object, every child of those children, and so on and so forth.
	 * @shortdescription returns the tree of descendants
	 * 
	 * @returns {Array<Instance>}
	 */
	GetDescendants() {
		if (!this._isDistroyed) {
		
			let children = this.GetChildren();
			
			let returnChildren = [...children];
			
			children.forEach(child => {
				
				returnChildren.concat(child.GetDescendants());
			})
			
			return returnChildren;
		}
	}
	
	/**
	 * Returns true if the Instance’s class is equivalent to or a subclass of a given class.
	 * @shortdescription Is an instance of a class
	 * 
	 * @param {String} className - The name of the class you want to check
	 * 
	 * @returns {Boolean}
	 */
	IsA = className => !_isDistroyed && this instanceof RoModules.Classes[className]
	
	/**
	 * Returns true if an Instance is an ancestor of the given descendant.
	 * @shortdescription Is an 'AncestorOf' a second Instance
	 * 
	 * @param {Instance} descendant - the Instance you want to check
	 * @returns {Boolean}
	 */
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
	 * Returns true if an Instance is an ancestor of the given descendant.
	 * @shortdescription Is a 'DescendantOf' a second Instance
	 * 
	 * @param {Instance} ancestor - The Instance you want to check
	 * 
	 * @returns {Boolean} True if the Instance is a descendant of the given ancestor.
	 */
	IsDescendantOf = ancestor => !_isDistroyed && ancestor.IsAncestorOf(this)
}