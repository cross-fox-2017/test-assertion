const akar = function(a,b) {
  if(isNaN(b) && isNaN(a)) return "diisi atuh parameterna"
  if(isNaN(b) || isNaN(a)) return "kurang hiji euy parameterna"
  return Math.sqrt(a,b)
}

module.exports = akar
