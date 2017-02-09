const add = require('../add')
const divide = require('../divide')
const exponent = require('../exponent')
const multiply = require('../multiply')
const root = require('../root')
const substract = require('../substract')

const assert = require('assert');

assert.equal(add.math(1,5), 6);
assert.notEqual(add.math(1,5), 0);
assert.strictEqual(add.math(1,5), 6);

assert.equal(substract.math(10,5), 5);
assert.notEqual(substract.math(10,5), 0);
assert.strictEqual(substract.math(10,5), 5);

assert.equal(multiply.math(1,5), 5);
assert.notEqual(multiply.math(1,5), 0);
assert.strictEqual(multiply.math(1,5), 5);

assert.equal(divide.math(64,2), 32);
assert.notEqual(divide.math(1,5), 0);
assert.strictEqual(divide.math(64,2), 32);

assert.equal(exponent.math(5), 25);
assert.notEqual(exponent.math(10), 25);
assert.strictEqual(exponent.math(5), 25);

assert.equal(root.math(9), 3);
assert.notEqual(root.math(12), 3);
assert.strictEqual(root.math(9), 3);
