import { uglify }		from 'rollup-plugin-uglify'
import { babel }		from '@rollup/plugin-babel';
//import sourcemaps		from 'rollup-plugin-sourcemaps'

//import multi 			from '@rollup/plugin-multi-entry';
//import nodePolyfills 	from 'rollup-plugin-node-polyfills';

export default [
	// Main Build
	{
		input: 'index.js',

		plugins: [
			///sourcemaps(), 
			babel( { babelHelpers: 'bundled' } )
		],
		
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
	/*
	// Modules Build
	{
		// Select all the Classes, Datatypes and Enums
		input: [ 'Classes/Instance.mjs' ],
		
		plugins: [multi()],

		output: [
			{
				file: 'builds/extras/Modules/RoModules.mjs',
				format: 'es'
			},
			{
				file: 'builds/extras/Modules/RoModules.min.mjs',
				plugins: [uglify()],
				format: 'es'
			}
		]
		
	}
	*/
];