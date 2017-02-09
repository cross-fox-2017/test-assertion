var test = {

  pertambahan: function(x, y) {
    if (typeof(x) == 'number' && typeof(y) =='number' )
      return x + y
    else
      return 'parameters required'
  },

  // PENGURANGAN
  pengurangan: function(x, y) {
    if (typeof(x) == 'number' && typeof(y) =='number' )
      return x - y
    else
      return 'parameters must be number'
  },

  // PERKALIAN
  perkalian: function(x, y) {
    if (typeof(x) == 'number' && typeof(y) =='number' )
      return x * y
    else
      return 'parameters required'
  },

  // PEMBAGIAN
  pembagian: function(x, y) {
    if (typeof(x) == 'number' && typeof(y) =='number' )
      return x / y
    else
      return 'parameters must be number'
  },

  // PANGKAT
  pangkat: function(x, y) {
    if (typeof(x) == 'number' && typeof(y) =='number' )
      return Math.pow(x, y)
    else
      return 'parameters must be number'
  },

  // AKAR
  akar: function(y) {
    if (typeof(y) == 'number')
      return Math.sqrt(y)
    else
      return 'parameters must be number'
  },

  // RANDOM
  random: function(y,x) {
    if (typeof(x) == 'number' && typeof(y) =='number' )
      return Math.floor(Math.sqrt(((y+x)*3/2)-y))
      else
        return 'parameters required'
  }

}

module.exports = test
