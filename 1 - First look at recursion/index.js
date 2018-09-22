const isOdd = num => num % 2 === 1

const getOdd = ([num, ...nums]) => (isOdd(num) ? num : getOdd(nums))

const isAnyOdd = () => undefined
