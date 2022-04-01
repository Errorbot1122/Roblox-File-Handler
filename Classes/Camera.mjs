import { Instance } from './Instance.mjs'

/**
 * @typedef {import('./Instance.mjs').Instance} Instance
 *
 * @typedef {import('../Datatypes/CFrame.mjs').CFrame} CFrame
 * @typedef {import('../Datatypes/Vector2.mjs').Vector2} Vector2
 *
 * @typedef {import('../Enms/CameraType.mjs').CameraType} CameraType
 * @typedef {import('../Enms/FieldOfViewMode.mjs').FieldOfViewMode} FieldOfViewMode
 */

/**
 * @class
 * @inheritdoc
 * 
 * @shortdescription A 3D veiw-object
 * @classdesc The Camera object defines a view of the 3D game world.
 * Inharates {@link Instance}
 * 
 * @todo Finish short descriptions
 */
export class Camera extends Instance {
	constructor() {
		
		super()

		/**
		 * The CFrame of the Camera, defining its position and orientation in the 3D world
		 * @type {CFrame}
		 */
		this.CFrame 

		/** 
		 * The Humanoid or BasePart that is the Camera's subject
		 * @type {Instance}
		 */
		this.CameraSubject

		/** 
		 * Specifies the CameraType to be read by the camera scripts
		 * @type {CameraType}
		 */ 
		this.CameraType

		/**
		 * Sets the angle of the Camera's diagonal field of view.
		 * [notreplicated]
		 * @type {Number}
		 */
		this.DiagonalFieldOfView

		/**
		 * Sets the angle of the Camera's vertical field of view
		 * @type {Number}
		 */ 
		this.FieldOfView
		
		/**
		 * Determines the FOV value of the Camera that’s invariant under viewport size changes.
		 * @type {FieldOfViewMode}
		 */
		this.FieldOfViewMode
		
		/**
		 * Sets the area in 3D space that is prioritized by Roblox’s graphical systems
		 * @type {CFrame}
		 */ 
		this.Focus
		
		/**
		 * Toggles whether the Camera will automatically track the head motion of a player using a VR device
		 * @type {Boolean}
		 */
		this.HeadLocked
		
		/**
		 * Sets the scale of the user’s head when using VR
		 * @type {Number}
		 */
		this.HeadScale
		
		/**
		 * Sets the angle of the Camera's field of view along the longest viewport axis.
		 * [notreplicated]
		 * @type {Number}
		 */
		this.MaxAxisFieldOfView
		
		/**
		 * Describes the negative z-offset, in studs, of the Camera's near clipping plane
		 * [readonly] [notreplicated]
		 * @type {Number}
		 */
		this.NearPlaneZ

		
		/**
		 * Describes the dimensions, in pixels, of the client’s viewport
		 * [readonly] [notreplicated]
		 * @type {Vector2}
		 */
		this.ViewportSize
	}
}