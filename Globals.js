/**
 * 
 * Maps a given range from a specific iterator to a new range.
 * 
 * Credit to [RoyallyFlushed]{@link https://www.roblox.com/users/profile?username=RoyallyFlushed} for the code!!! (https://devforum.roblox.com/t/lua-map-command/215342)
 * 
 * @param {Number} n - The number you want to map 
 * @param {Number} start - The starting number of the original range
 * @param {Number} stop - The ending number of the original range
 * @param {Number} newStart - The starting number of the new range
 * @param {Number} newStop - The ending number of the new range
 * @param {Boolean} [withinBounds=false] - Is forced to be inbetween the new range or not. [Defult: false]
 * 
 * @returns {Number}
 */
function reMap(n, start, stop, newStart, newStop, withinBounds=false) {

	/**
	* The calulated re-map (Not constrained)
	* @type {Number}
	*/
	let value = ((n - start) / (stop - start)) * (newStop - newStart) + newStart
	
	// Returns basic value
	if (!withinBounds) {
		return value
	}
	
	// Returns values constrained to exact range
	if (newStart < newStop) {
		return Math.max(Math.min(value, newStop), newStart)
	}
	else {
		return Math.max(Math.min(value, newStart), newStop)
	}
}

/**
 * returns the interpolated version of the input range by an amount between 0 and 1. (can go above or below 0 - 1, but not recommended)
 * 
 * @param {Number} start - The starting number in the range.
 * @param {Number} end - The ending number in the range.
 * @param {Number} amt - the amount you want to interpolate between 0 and 1. (can go above or below 0 - 1, but not recommended)
 * 
 * @return {Number}
 */
function lerp(start, end, amt){
	return (1 - amt) * start + amt * end
}

/**
 * @param {Number} num - the number you want to convert
 */
function toBytesInt32(num) {
	arr = new ArrayBuffer(4); // an Int32 takes 4 bytes
	view = new DataView(arr);
	view.setUint32(0, num, false); // byteOffset = 0; litteEndian = false
	return arr;
}

function isValidPath(path) {
  	return fs.existsSync(path) && (fs.lstatSync(dirPath).isDirectory() || fs.lstatSync(dirPath).isFile());
}


module.exports.math = {
	reMap,
	lerp,
	toBytesInt32,
	isValidPath
}