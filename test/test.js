import { exists, statSync } from 'fs'
import { inspect } from 'util'

import { assert }		from 'chai'

import * as rbxPaser	from '../index.js'

let baseplateParse;

const baseplateParser	= new rbxPaser.Parser()
const MechParser		= new rbxPaser.Parser()

// @todo MORE TESTS!!!!

describe('MAIN', () => {
	
	describe('parseFile', () => {
    	it('Exists?', () =>										assert.exists(baseplateParser.parseFile))

		it('Returns object with valid XML?', done =>			done(assert(baseplateParser.parseFile('test/example_files/baseplate.rbxlx'))))

		describe('Read any valid RBXLX file', () => {
			
			it('Can parse simple baseplate? (RBXLX)', done =>	done(assert(baseplateParser.parseFile('test/example_files/baseplate.rbxlx'))))
			it('Can parse simple baseplate? (XML)',	done =>		done(assert(baseplateParser.parseFile('test/example_files/baseplateXML.xml'))))
			it('Can parse simple baseplate? (TXT)',	done =>		done(assert(baseplateParser.parseFile('test/example_files/baseplateTXT.txt'))))
		});

		describe('Read diffent file sizes', () => {
			it('Can parse a large normel RBXLX file', done =>	done(assert(MechParser.parseFile('test/example_files/randomLargeTestMech.rbxlx'))))
		})

	});

	describe('Classes', () => {

		it('exported classes exsit', done =>					done(assert.exists(rbxPaser.RoModules)))
		it('can create instance', done =>						done(assert(new rbxPaser.Instance())))
	})
})

// describe('BUILDS', () => {
// 	it('Normal build exists',							exists('builds/robloxFileHandler.js', () => done()))
// 	it('Minifided build exists',						exists('builds/robloxFileHandler.min.js', () => done()))

// 	it('Minifided build is smaller the normal build',	{done(assert.isAbove(statSync('builds/robloxFileHandler.js').size, statSync('builds/robloxFileHandler.min.js').size, 'HOW!!!!'))})
// })
