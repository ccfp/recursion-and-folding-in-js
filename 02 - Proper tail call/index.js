"use strict"

// function sumDownFrom(x) {
//   return x === 0 ? 0 : x + sumDownFrom(x - 1)
// }

// const sum = ([x, ...xs]) => (x === undefined ? 0 : x + sum(xs))

// sum([10, 2]) //?

const sumDownFrom = num => {
  if (num === 0) return 0
  else return num + sumDownFrom(num - 1)
}

// sumDownFrom(10) //?

// This is in "tail position" -- i.e., the function call is the only thing in the return statement
const sumDownFromPTC = (x, acc = 0) =>
  x === 0 ? acc : sumDownFromPTC(x - 1, acc + x)

module.exports = { sumDownFrom, sumDownFromPTC }
