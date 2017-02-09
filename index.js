const assert = require('assert')
const cek = require('./function')

/* test pertambahan */
assert.equal(2, cek.pertambahan(1, 1))
/* test pengurangan */
assert.equal(2, cek.pengurangan(8, 6))
/* test perkalian */
assert.notEqual(2, cek.perkalian(8, 4))
/* test pembagian */
assert.equal(2, cek.pembagian(4, 2))
/* test pangkat */
assert.equal(8, cek.pangkat(2, 3))
/* test akar */
assert.equal(3, cek.akar(9))
