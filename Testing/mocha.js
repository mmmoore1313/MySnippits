var Mocha = require('mocha')
var assert = require('assert')
var mocha = new Mocha()

// Bit of a hack, sorry!
mocha.suite.emit('pre-require', this, 'solution', mocha)

function functionName(parameter1, parameter2) {
  //Write Code here
}

describe('functionName', function() {
  it('should work'), function() {
    const result = functionName(ansParameter1, parameter2)
    
    assert.deepEqual(result, whatAnsShouldBe)
  })
})

mocah.run()