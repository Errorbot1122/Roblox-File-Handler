import { uglify } from 'rollup-plugin-uglify'
 
export default {
	input: 'index.js',
	output: [
		{
			file: 'builds/robloxFileHandler.js',
			format: 'es'
		},
		{
			file: 'builds/robloxFileHandler.min.js',
			plugins: [uglify()],
			format: 'es'
		}
	]
};