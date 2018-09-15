"use strict"

function sumDownFrom(x) {
  return x === 0 ? 0 : x + sumDownFrom(x - 1)
}

// This is in "tail position" -- i.e., the function call is the only thing in the return statement
function sumDownFromPTC(x, acc = 0) {
  return x === 0 ? acc : sumDownFromPTC(x - 1, acc + x)
}

module.exports = { sumDownFrom, sumDownFromPTC }
