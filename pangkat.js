var pangkat = (angka, exponent=2) => {
  if (typeof(angka1) == 'number' && typeof(exponent) == 'number'){
    return Math.pow(angka, exponent)
  } else {
    return 'Input must in Number'
  }
}

module.exports = pangkat
