const assert = require('assert')
const controller = require('./controller/controller')

assert.equal(controller.add(1,1),2,"equal testing error")
assert.equal(controller.add(1),"not a number")


assert.equal(controller.substract(1,1),0,"equal testing error")
assert.equal(controller.substract(1),"not a number")

assert.equal(controller.divider(1,1),1,"equal testing error")
assert.equal(controller.divider(1),"not a number")

assert.equal(controller.multiply(1,1),1,"equal testing error")
assert.equal(controller.multiply(1),"not a number")

assert.equal(controller.pangkat(1,1),1,"equal testing error")
assert.equal(controller.pangkat(1),"not a number")

assert.equal(controller.akar(9),3,"equal testing error")
assert.equal(controller.akar(),"not a number")
