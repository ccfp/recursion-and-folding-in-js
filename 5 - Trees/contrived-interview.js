const flatten = arr =>
  arr.reduce((acc, x) => acc.concat(Array.isArray(x) ? flatten(x) : x), [])

const nestedArr = [1, [[2, [3, 4]], 5]]

flatten(nestedArr) //?
// -> [1, 2, 3, 4, 5]

module.exports = flatten
