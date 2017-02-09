var assert = require('assert')
const matematika = require('../index');

//penambahan
assert.equal(matematika.penambahan(1,1), 2)
assert.equal(matematika.penambahan("1", "2"), "Input must in Number")

//pengurangan
assert.equal(matematika.pengurangan(3,1), 2)

//perkalian
assert.equal(matematika.perkalian(2,2), 4)

//pembagian
assert.equal(matematika.pembagian(4,2), 2)

//pangkat
assert.equal(matematika.pangkat(4,2), 16)
assert.equal(matematika.pangkat(4), 16)

//akar
assert.equal(matematika.akar(4), 2)
