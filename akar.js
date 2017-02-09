var akar = (angka) => {
  if (typeof(angka) == 'number'){
    return Math.sqrt(angka)
  } else {
    return 'Input must in Number'
  }
}

module.exports = akar
