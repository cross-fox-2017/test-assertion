const assert = require('assert')
const exe = require('../index')
//tambah
assert.equal(exe.add(1,2),3)
assert.notEqual(exe.add(1,2),4)
assert.strictEqual(exe.add(1,2),3)
assert.equal(exe.add('1','2'),12)
assert.notEqual(exe.add('1','2'),13)
assert.strictEqual(exe.add('1','2'),'12')

//kurang
assert.equal(exe.substract(1,2),-1)
assert.notEqual(exe.substract(1,2),4)
assert.strictEqual(exe.substract(1,2),-1)

//kali
assert.equal(exe.multiply(1,2),2)
assert.notEqual(exe.multiply(1,2),4)
assert.strictEqual(exe.multiply(1,2),2)

//bagi
assert.equal(exe.divide(1,2),0.5)
assert.notEqual(exe.divide(1,2),4)
assert.strictEqual(exe.divide(1,2),0.5)

//akar
assert.equal(exe.root(4,2),2)
assert.notEqual(exe.root(4,2),4)
assert.strictEqual(exe.root(4,2),2)

//pangkat
assert.equal(exe.exponent(1,2),1)
assert.notEqual(exe.exponent(1,2),4)
assert.strictEqual(exe.exponent(1,2),1)
