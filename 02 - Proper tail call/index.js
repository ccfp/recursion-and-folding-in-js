"use strict"

const fib = num => {
  if (num === 0) return 0
  else return num + fib(num - 1)
}

// This is in "proper tail call" form, meaning
// the function call is the only thing after `return`
const fibPTC = (num, acc = 0) => {
  if (num === 0) return acc
  else return fibPTC(num - 1, acc + num)
}
