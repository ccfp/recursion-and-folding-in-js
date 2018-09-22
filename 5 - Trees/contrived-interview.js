const flatten = arr =>
  arr.reduce(
    (acc, x) => (Array.isArray(x) ? [...acc, ...flatten(x)] : [...acc, x]),
    []
  )

const nestedArr = [1, [[2, [3, 4]], 5]]

flatten(nestedArr) //?
// -> [1, 2, 3, 4, 5]

module.exports = flatten
