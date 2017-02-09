const assert = require('assert');

function pertambahan(a,b){
  return a+b
}
function pengurangan(a,b){
  return a-b
}
function perkalian(a,b){
  return a*b
}
function pembagian(a,b){
  return a/b
}
function pangkatdua(num){
  return Math.pow(num,2)
}
function akardari(num){
  return Math.sqrt(num)
}

assert.equal(pertambahan(1,5), 6);
assert.equal(pengurangan(10,5), 5);
assert.equal(perkalian(1,5), 5);
assert.equal(pembagian(64,2), 32);
assert.equal(pangkatdua(5), 25);
assert.equal(akardari(9), 3);
