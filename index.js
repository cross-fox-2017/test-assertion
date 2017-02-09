const add = require('./add')
const substract = require('./substract')
const multiply = require('./multiply')
const root = require('./root')
const exponent = require('./exponent')
const divide = require('./divide')

const math = {
  add: add,
  substract: substract,
  multiply: multiply,
  divide: divide,
  exponent: exponent,
  root: root
}

module.exports = math
