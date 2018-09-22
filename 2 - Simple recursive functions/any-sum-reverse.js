const isOdd = x => x % 2 === 1

// const sum = ([num, ...nums], acc = 0) => {
//   if (num === undefined) return acc
//   return sum(nums, acc + num)
// }
// sum([1, 4, 9, 8])
// -> 22

// const reverse = ([item, ...items], acc = []) => {
//   if (item === undefined) return acc
//   return reverse(items, [item, ...acc])
// }
// reverse(["a", "b", "c", "d"])
// -> ["d", "c", "b", "a"]

// const any = (predFn, [item, ...items], acc = false) => {
//   if (item === undefined) return acc
//   return any(predFn, items, predFn(item) || acc)
// }
// any(isOdd, [1, 4, 9, 8]) //?
// -> true

const reduce = (reducerFn, acc) => ([x, ...xs]) => {
  if (x === undefined) return acc
  return reduce(reducerFn, reducerFn(acc, x))(xs)
}

const sum = reduce((acc, x) => acc + x, 0)

sum([1, 4, 9, 8]) //?

const reverse = reduce((acc, x) => [x, ...acc], [])

reverse(["a", "b", "c", "d"]) //?

const any = predFn => reduce((acc, x) => predFn(x) || acc, false)

any(isOdd)([0, 1, 2, 3]) //?
