const isOdd = x => x % 2 === 1

const getOdd = ([x, ...xs]) => (isOdd(x) ? x : getOdd(xs))
