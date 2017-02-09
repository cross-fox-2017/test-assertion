'use strict'

const toTest = {
  penambahan: (angka1, angka2) => {
    return angka1 + angka2
  },
  pengurangan: (angka1, angka2) => {
    return angka1 - angka2
  },
  perkalian: (angka1, angka2) => {
    return angka1 * angka2
  },
  pembagian: (angka1, angka2) => {
    return angka1 / angka2
  },
  pangkat: (angka, exponent=2) => {
    return Math.pow(angka, exponent)
  },
  akar: (angka) => {
    return Math.sqrt(angka)
  }
}

module.exports = toTest
