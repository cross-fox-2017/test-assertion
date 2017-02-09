const pertambahan = function(a,b) {
  if(isNaN(b) && isNaN(a)) return "diisi atuh parameterna"
  if(isNaN(b) || isNaN(a)) return "kurang hiji euy parameterna"
  else return a+b;
}

module.exports = pertambahan
