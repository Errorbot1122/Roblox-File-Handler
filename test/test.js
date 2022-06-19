import { exists, statSync } from 'fs'
import { inspect }			from 'util'
import url					from 'url'
import path					from 'path'


import { assert }			from 'chai'

import * as rbxPaser		from '../index.js'

const __filename				= url.fileURLToPath(import.meta.url);
const __dirname					= path.dirname(__filename);

const baseplateReturn = new rbxPaser.Parser().parseFile(path.resolve(__dirname, './example_files/baseplate.rbxlx'))

//console.log(inspect(baseplateReturn))

// @todo MORE TESTS!!!!

describe('MAIN', () => {
	
	describe('File Parsing', () => {
		it('When providing a file, it retuns a list of instances', done =>	done(assert.isArray(baseplateReturn, 'Did not return a list!')))
	});

	describe('Classes', () => {

		it('exported classes exsit', done =>					done(assert.exists(rbxPaser.RoModules)))
		it('can create instance', done =>						done(assert(new rbxPaser.Instance())))
	})
})