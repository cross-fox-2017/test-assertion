const pembagian = function(a,b) {
  if(isNaN(b) && isNaN(a)) return "diisi atuh parameterna"
  if(isNaN(b) || isNaN(a)) return "kurang hiji euy parameterna"
  return a / b;
}

module.exports = pembagian
