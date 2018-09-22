// const sum = ([num, ...nums], acc = 0) => {
//   if (num === undefined) return acc
//   return sum(nums, acc + num)
// }
// -> 22

const reverse = ([item, ...items], acc = []) => {
  if (item === undefined) return acc
  return reverse(items, [item, ...acc])
}
reverse(["a", "b", "c", "d"]) //?
// -> ["d", "c", "b", "a"]

const reduce = (reducerFn, acc, [x, ...xs]) => {
  if (x === undefined) return acc
  return reduce(reducerFn, reducerFn(acc, x), xs)
}

sum = arr => reduce((acc, x) => acc + x, 0, arr)

sum([1, 4, 9, 8]) //?

// const any = ([bool, ...bools], acc = false) => {
//   if (bool === undefined) return acc
//   return any(bools, bool || acc)
// }

// any([true, false, false]) //?
