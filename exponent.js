
// const assert = require('assert');

var Exponenet = function(a, b) {
  if(typeof(a)=="number" && typeof(b)=="number"){
    return a/b
  }else{
    return "cek input parameter"
  }
}

module.exports = Exponenet

// assert.equal(Exponenet(2,1),2)
// assert.equal(Exponenet(2),false)
