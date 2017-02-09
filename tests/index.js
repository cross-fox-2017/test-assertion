const assert = require('assert')
const math = require('../index')

assert.equal(math.root(4), 2)
assert.notEqual(math.add(1, 2), 4)
assert.strictEqual(math.substract(2, 2), 0)
assert.notStrictEqual(math.multiply(2, 2), '4')

// equal, notEqual, strictEqual, notStrictEqual, deepEqual, notDeepEqual
