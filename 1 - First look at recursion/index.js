const isOdd = num => num % 2 === 1

const getOdd = ([num, ...nums]) => {
  if (num === undefined) return undefined
  console.log(num, nums)
  return isOdd(num) ? num : getOdd(nums)
}

// const isAnyOdd = ([num, ...nums]) => {
//   console.log(num, nums)
//   return isOdd(num) || (nums.length > 0 ? isAnyOdd(nums) : false)
// }

const isAnyOdd = ([num, ...nums]) => {
  if (num === undefined) return false
  return isOdd(num) || isAnyOdd(nums)
}

isAnyOdd([2, 4, 6]) //?

// isAnyOdd([2, 4, 6])
// -> false
// isAnyOdd([1, 2, 3])
// -> true
