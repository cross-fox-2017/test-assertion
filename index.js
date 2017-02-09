module.exports = {
  add: (a, b) => {
    return a + b
  },
  subtract: (a, b) => {
    return a - b
  },
  multiply: (a, b) => {
    return a * b
  },
  divide: (a, b) => {
    return a / b
  },
  power: (a, b) => {
    return Math.pow(a, b)
  },
  squareRoot: (a) => {
    return Math.sqrt(a)
  },
  arrayObject: () => {
    return [{ id: 1, name: 'gana', role: 'admin' }, { id: 2, name: 'dgana', role: 'user' }]
  }
}
