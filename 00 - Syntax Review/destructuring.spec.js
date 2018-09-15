const { head, tail } = require("./destructuring")

const abc = ["a", "b", "c"]

describe("head", () => {
  it("returns the first item of the array", () => {
    expect(head(abc)).toBe("a")
  })
})

describe("tail", () => {
  it("returns everything but the first item of the array", () => {
    expect(tail(abc)).toEqual(["b", "c"])
  })
})
