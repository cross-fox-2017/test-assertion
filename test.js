const assert = require('assert');

// PERTAMBAHAN
function pertambahan (x, y) {
  return x + y
}

// assert.equal(pertambahan(2,3),3)     // false
// assert.equal(pertambahan(2,1),3)     // true

// PENGURANGAN
function pengurangan (x, y) {
  return x - y
}

// assert.equal(pengurangan(5,3),5)     // false
// assert.equal(pengurangan(8,3),5)     // true

// PERKALIAN
function perkalian (x, y) {
  return x * y
}

// assert.equal(perkalian(5,3),16)      // false
// assert.equal(perkalian(8,2),16)      // true

// PEMBAGIAN
function pembagian (x, y) {
  return x / y
}

// assert.equal(pembagian(24,3),9)      // false
// assert.equal(pembagian(27,3),9)      // true

// PANGKAT
function pangkat (x, y) {
  return Math.pow(x, y)
}

// assert.equal(pangkat(2,3),9)      // false
// assert.equal(pangkat(2,3),8)      // true

// AKAR
function akar (y) {
  return Math.sqrt(y)
}

// assert.equal(akar(64), 9)      // false
// assert.equal(akar(64), 8)      // true

// RANDOM
function random (y,x) {
  return Math.floor(Math.sqrt( ( (y+x) * 3 / 2 ) - y) )
}

// assert.equal(random(60,40), 10)      // false
// assert.equal(random(60,40), 9)      // true
