"use strict"

const tri = num => {
  if (num === 0) return 0
  else return num + tri(num - 1)
}

// This is in "proper tail call" form, meaning
// the function call is the only thing after `return`
const triPTC = (num, acc = 0) => {
  if (num === 0) return acc
  else return triPTC(num - 1, acc + num)
}
