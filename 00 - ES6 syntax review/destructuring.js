const abc = ["a", "b", "c"]

const head = ([x, ...rest]) => x
// head(abc) //=> "a"
head(abc) //?

const tail = ([x, ...rest]) => rest
// tail(abc) //=> ["b", "c"]
tail(abc) //?

module.exports = { head, tail }
