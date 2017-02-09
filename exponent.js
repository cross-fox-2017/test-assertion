const pangkat = function(a,b) {
  if(isNaN(b) && isNaN(a)) return "diisi atuh parameterna"
  if(isNaN(b) || isNaN(a)) return "kurang hiji euy parameterna"
  return Math.pow(a,b);
}

module.exports = pangkat
