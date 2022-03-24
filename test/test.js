import { exists, statSync } from 'fs'
import { inspect } from 'util'

import { assert } from 'chai'

import * as rbxPaser, { Parser } from '../index.js'

let baseplateParse;

const baseplateParser = new Parser()
const MechParser =		new Parser()

// todo: MORE TESTS!!!!



describe('MAIN', () => {
	
	describe('parseFile', () => {
    	it('Exists?', () => assert.exists(baseplateParser.parseFile))

		it('Returns object with valid XML?', done => baseplateParser.parseFile('test/example_files/baseplate.rbxlx', () => { done() }))

		describe('Read any valid RBXLX file', () => {
			
			it('Can parse simple baseplate? (RBXLX)', done => baseplateParser.parseFile('test/example_files/baseplate.rbxlx', err => done(err)))
			it('Can parse simple baseplate? (XML)', done => baseplateParser.parseFile('test/example_files/baseplateXML.xml', err => done(err)))	
			it('Can parse simple baseplate? (TXT)', done => baseplateParser.parseFile('test/example_files/baseplateTXT.txt', err => done(err)))	
		});

		describe('Read diffent file sizes', () => {
			it('Can parse a large normel RBXLX file', done => MechParser.parseFile('test/example_files/randomLargeTestMech.rbxlx', () => done()))
		})

	});

	describe('Classes', () => {

		it('exported classes exsit', done => done(assert.exists(rbxPaser.RoModules)))
		it('can create instance', done => done(assert(new rbxPaser.Instance())))
	})
})

describe('BUILDS', () => {
	it('Normal build exists', done => exists('builds/robloxFileHandler.js', () => done()))
	it('Minifided build exists', done => exists('builds/robloxFileHandler.min.js', () => done()))

	it('Minifided build is smaller the normal build', done => {done(assert.isAbove(statSync('builds/robloxFileHandler.js').size, statSync('builds/robloxFileHandler.min.js').size, 'HOW!!!!'))})
})
