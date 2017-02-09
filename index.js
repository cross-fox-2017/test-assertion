module.exports = {
  add: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      return 'error'
    } else {
      return a + b
    }
  },
  subtract: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      return 'error'
    } else {
      return a - b
    }
  },
  multiply: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      return 'error'
    } else {
      return a * b
    }
  },
  divide: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      return 'error'
    } else {
      return a / b
    }
  },
  power: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      return 'error'
    } else {
      return Math.pow(a, b)
    }
  },
  squareRoot: (a) => {
    if (a) {
      return 'error'
    } else {
      return Math.sqrt(a)
    }
  },
  arrayObject: () => {
    return [{ id: 1, name: 'gana', role: 'admin' }, { id: 2, name: 'dgana', role: 'user' }]
  }
}
