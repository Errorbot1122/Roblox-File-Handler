const assert = require('chai').assert
const parser = require('../index.js')

const isObject = (x) => typeof x === 'object' && !Array.isArray(x)

const testFile1 = "robloxExample.rbxlx"

describe('Parser', () => {
    it('Parser is an object / classe', () => assert(isObject(parser)));

    describe('#parseFile', () => {  
        it('Parse file should returns an array/object when supplyed with a vaild RBXLX File', () => {parser.parseFile(testFile1, (err, output) => assert(isObject(output) || Array.isArray(output)))})
        it('Should retr', () => {parser.parseFile(testFile1, (err, output) => assert(isObject(output) || Array.isArray(output)))})
    })
});