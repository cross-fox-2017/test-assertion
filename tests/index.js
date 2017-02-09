const assert = require('assert')
const helper = require('../index')
const obj = [
  {
    id: 1,
    name: 'gana',
    role: 'admin'
  },
  {
    id: 2,
    name: 'dgana',
    role: 'user'
  }
]

assert.strictEqual(helper.add(2, 3), 5)
assert.notEqual(helper.add(2, 3), 6)

assert.strictEqual(helper.subtract(9, 3), 6)
assert.notEqual(helper.subtract(9, 3), 5)

assert.strictEqual(helper.multiply(5, 5), 25)
assert.notEqual(helper.multiply(5, 5), 24)

assert.strictEqual(helper.divide(10, 2), 5)
assert.notEqual(helper.divide(10, 2), 4)

assert.strictEqual(helper.power(4, 2), 16)
assert.notEqual(helper.power(4, 2), 15)

assert.strictEqual(helper.squareRoot(9), 3)
assert.notEqual(helper.squareRoot(9), 2)

assert.deepStrictEqual(helper.arrayObject(), obj)
assert.deepEqual(helper.arrayObject(), obj)
