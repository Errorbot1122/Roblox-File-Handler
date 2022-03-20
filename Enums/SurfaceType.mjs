/**
 * @shortdescription The specific type for a specific surface
 * @enum {Number} Used to determine how a surface should be displayed on a part and how automatic surface joints should behave.
 */
const SurfaceType = {
	
	/** Makes the side appear without any surface detail (except for outlines) */
	Smooth: 0,
	
	/** Makes the side appear with thick diagonal "X"s */
	Glue: 1,
	
	/** Makes the side appear with thick diagonal "X"s */
	Weld: 2,
	
	/** Makes the side appear with square studs */
	Studs: 3,
	
	/** Makes the side appear with holes where studs would be*/
	Inlet: 4,
	
	/** Makes the side appear with both Studs and Inlets in a checker pattern */
	Universal: 5,
	
	/** Makes the side appear with a yellow hinge. Any part connected to this hinge will stick to the side and rotate using physics, however, using HingeConstraint to join parts is preferred */
	Hinge: 6,
	
	/** Acts the same as a Hinge, but has a grey ring around it and automatically rotates any part connected to it, however, using HingeConstraint to join parts is preferred */
	Motor: 7,
	
	/** Functions identically to a motor. It may have functioned differently in the past, but that functionality no longer seems to exist */
	SteppingMotor: 8,
	
	/** Same as Smooth, but removes the outlines of the surface */
	SmoothNoOutlines: 10	

}

Object.freeze(SurfaceType);

export default SurfaceType;