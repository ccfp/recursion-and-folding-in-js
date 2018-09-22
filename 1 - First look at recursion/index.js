const isOdd = num => num % 2 === 1

const getOdd = ([num, ...nums]) => {
  if (num === undefined) return undefined
  console.log(num, nums)
  return isOdd(num) ? num : getOdd(nums)
}

const getOdd = ([num, ...nums]) => {
  console.log(num, nums)
  return isOdd(num) ? true : nums.length > 0 ? getOdd(nums) : false
}

getOdd([2, 4, 6]) //?

// const isAnyOdd = ([num, ...nums]) => {
//   return isOdd(num) ||
// }

// isAnyOdd([2, 4, 6])
// -> false
// isAnyOdd([1, 2, 3])
// -> true
