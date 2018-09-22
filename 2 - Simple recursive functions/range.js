// This is an example of an `unfold`
// (just to show you can do more with recursion than `fold`)
const range = (a, b, acc = []) => {
  if (a >= b + 1) return acc
  return range(a + 1, b, [...acc, a])
}
// range(0, 5)
// -> [0, 1, 2, 3, 4, 5]
