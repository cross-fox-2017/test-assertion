var pengurangan = (angka1, angka2) => {
  if (typeof(angka1) == 'number' && typeof(angka2) == 'number'){
    return angka1 - angka2
  } else {
    return 'Input must in Number'
  }
}
module.exports = pengurangan
