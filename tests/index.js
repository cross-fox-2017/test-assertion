const assert = require('assert')

const math = require('../index');

assert.equal(math.add(2,3),5);
assert.notEqual(math.add(3,2),'6')
assert.strictEqual(math.add(3,2),5)

assert.equal(math.substract(3,2),'1')
assert.notEqual(math.substract(3,2),'6')
assert.strictEqual(math.substract(3,2),1)

assert.equal(math.multiply(3,2),'6')
assert.notEqual(math.multiply(3,2),'7')
assert.strictEqual(math.multiply(3,2),6)

assert.equal(math.divide(3,2),'1.5')
assert.notEqual(math.divide(3,2),'6')
assert.strictEqual(math.divide(3,2),1.5)

assert.equal(math.exponent(3,2),'9')
assert.notEqual(math.exponent(3,2),'6')
assert.strictEqual(math.exponent(3,2),9)

assert.equal(math.root(3,2),'1.7320508075688772')
assert.notEqual(math.root(3,2),'6')
assert.strictEqual(math.root(3,2),1.7320508075688772)
