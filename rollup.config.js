import { uglify }		from 'rollup-plugin-uglify'
import multi 			from '@rollup/plugin-multi-entry';
import nodePolyfills 	from 'rollup-plugin-polyfill-node';

export default [
	// Main Build
	{
		input: 'index.js',

		plugins: [nodePolyfills( { fs: true } )],
	
		output: [
			{
				file: 'builds/robloxFileHandler.mjs',
				format: 'es'
			},

			{
				globals: { xml2js: 'xml2js', fs: 'fs' },
				file: 'builds/robloxFileHandler.js',
				format: 'iife',
				name: 'RBXFileHandler'
			},
			
			{
				file: 'builds/robloxFileHandler.min.mjs',
				plugins: [uglify()],
				format: 'es'
			},
			
			{
				globals: { xml2js: 'xml2js', fs: 'fs' },
				file: 'builds/robloxFileHandler.min.js',
				plugins: [uglify()],
				format: 'iife',
				
				name: 'RBXFileHandler'
			},
		]
	},

	// Modules Build
	{
		// Select all the Classes, Datatypes and Enums
		input: [ 'Classes/*.mjs', 'Datatypes/*.mjs', 'Enums/*.mjs' ],
		
		plugins: [multi()],

		output: [
			{
				file: 'builds/RoModules.mjs',
				format: 'es'
			},
			{
				file: 'builds/RoModules.min.mjs',
				plugins: [uglify()],
				format: 'es'
			}
		]
		
	}
];