const assert = require('assert')
const math = require('../index');
const kurangHiji = 'kurang hiji euy parameterna'
const eweuhParameter = 'diisi atuh parameterna'

assert.equal(math.add(2,3),5);
assert.notEqual(math.add(3,2),'6')
assert.strictEqual(math.add(3,2),5)

assert.equal(math.add(2), kurangHiji);
assert.equal(math.add(), eweuhParameter);

assert.equal(math.substract(3,2),'1')
assert.notEqual(math.substract(3,2),'6')
assert.strictEqual(math.substract(3,2),1)

assert.equal(math.substract(2), kurangHiji);
assert.equal(math.substract(), eweuhParameter);

assert.equal(math.multiply(3,2),'6')
assert.notEqual(math.multiply(3,2),'7')
assert.strictEqual(math.multiply(3,2),6)

assert.equal(math.multiply(2), kurangHiji);
assert.equal(math.multiply(), eweuhParameter);

assert.equal(math.divide(3,2),'1.5')
assert.notEqual(math.divide(3,2),'6')
assert.strictEqual(math.divide(3,2),1.5)

assert.equal(math.divide(2), kurangHiji);
assert.equal(math.divide(), eweuhParameter);

assert.equal(math.exponent(3,2),'9')
assert.notEqual(math.exponent(3,2),'6')
assert.strictEqual(math.exponent(3,2),9)

assert.equal(math.exponent(2), kurangHiji);
assert.equal(math.exponent(), eweuhParameter);

assert.equal(math.root(3,2),'1.7320508075688772')
assert.notEqual(math.root(3,2),'6')
assert.strictEqual(math.root(3,2),1.7320508075688772)

assert.equal(math.root(2), kurangHiji);
assert.equal(math.root(), eweuhParameter);
