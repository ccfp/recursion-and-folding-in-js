const [x, y, ...rest] = [10, 20, 30, 40, 50]

const abc = ["a", "b", "c"]

const head = () => undefined
// head(abc) //=> "a"

const tail = () => undefined
// tail(abc) //=> ["b", "c"]

module.exports = { head, tail }
