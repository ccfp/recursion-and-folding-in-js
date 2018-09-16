"use strict"

const sumDownFrom = num => {
  if (num === 0) return 0
  else return num + sumDownFrom(num - 1)
}

// This is in "tail position" -- i.e., the function call is the only thing in the return statement
const sumDownFromPTC = (num, acc = 0) => {
  if (num === 0) return acc
  else return sumDownFrom(num - 1, acc + num)
}

module.exports = { sumDownFrom, sumDownFromPTC }
